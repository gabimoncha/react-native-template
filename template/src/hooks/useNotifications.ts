import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import {
  Notifications,
  Notification,
  NotificationCompletion,
  Registered,
  RegistrationError,
} from 'react-native-notifications';
import { log, warn } from 'utils/console';

export default function useNotifications() {
  const registerRemoteNotifications = () => {
    Notifications.registerRemoteNotifications();

    Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
      // TODO: Send the token to my server so it could send back push notifications...
      if (Platform.OS === 'android') {
        warn(
          "You are using the template's firebase project. Create a new firebase project and replace android/app/google-services.json",
          '\n',
          'Follow instructions here: https://firebase.google.com/docs/android/setup#console',
        );
      }
      log('Device Token Received', event.deviceToken);
    });

    Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
      if (event.localizedDescription === 'no valid “aps-environment” entitlement string found for application') {
        warn(
          'You need to enable the Push Notifications capability',
          '\n',
          'Follow instructions here: https://i.stack.imgur.com/qsQTx.jpg',
        );
      } else warn(event);
    });
  };

  const registerNotificationEvents = () => {
    Notifications.events().registerNotificationReceivedForeground(
      (notification: Notification, completion: (response: NotificationCompletion) => void) => {
        log('Notification Received - Foreground', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion({ alert: true, sound: true, badge: false });
      },
    );

    Notifications.events().registerNotificationOpened((notification: Notification, completion: () => void) => {
      log('Notification opened by device user', notification.payload);
      log(`Notification opened with an action identifier: ${notification.identifier}`);
      completion();
    });

    Notifications.events().registerNotificationReceivedBackground(
      // @ts-ignore
      (notification: Notification, completion: () => void) => {
        log('Notification Received - Background', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion();
      },
    );
  };

  useState(() => {
    registerRemoteNotifications();
    registerNotificationEvents();
  });

  useEffect(() => {
    Notifications.getInitialNotification()
      .then((notification) => {
        log('Initial notification was:', notification ? notification.payload : 'N/A');
      })
      .catch((err) => warn('getInitialNotifiation() failed', err));
  }, []);
}
