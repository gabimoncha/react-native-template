import React, { Component } from 'react';
import {
  Notifications,
  Notification,
  NotificationCompletion,
} from 'react-native-notifications';
import { log, warn } from 'utils/console';

type Props = {
  children: React.ReactNode;
};

export default class NotificationManager extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.registerNotificationEvents();
  }

  registerNotificationEvents() {
    Notifications.events().registerNotificationReceivedForeground(
      (
        notification: Notification,
        completion: (response: NotificationCompletion) => void,
      ) => {
        log('Notification Received - Foreground', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion({ alert: true, sound: true, badge: false });
      },
    );

    Notifications.events().registerNotificationOpened(
      (notification: Notification, completion: () => void) => {
        log('Notification opened by device user', notification.payload);
        log(
          `Notification opened with an action identifier: ${notification.identifier}`,
        );
        completion();
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      // @ts-ignore
      (notification: Notification, completion: () => void) => {
        log('Notification Received - Background', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion();
      },
    );
  }

  requestPermissions() {
    Notifications.registerRemoteNotifications();
  }

  componentDidMount() {
    Notifications.getInitialNotification()
      .then((notification) => {
        log(
          'Initial notification was:',
          notification ? notification.payload : 'N/A',
        );
      })
      .catch((err) => warn('getInitialNotifiation() failed', err));
  }

  render() {
    return <>{this.props.children}</>;
  }
}
