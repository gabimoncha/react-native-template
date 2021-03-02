module.exports = {
  Notifications: {
    getInitialNotification: jest.fn(),
    registerRemoteNotifications: jest.fn(),
    events: () => ({
      registerRemoteNotificationsRegistered: jest.fn(),
      registerRemoteNotificationsRegistrationFailed: jest.fn(),
      registerNotificationReceivedForeground: jest.fn(),
      registerNotificationOpened: jest.fn(),
      registerNotificationReceivedBackground: jest.fn(),
    }),
  },
};
