import OnboardingScreen from './Onboarding';
import ResetPasswordScreen from './ResetPassword';

export type AuthStackParamList = {
  Onboarding: undefined;
  ResetPassword: undefined;
};

export const authScreens = {
  Onboarding: { component: OnboardingScreen },
  ResetPassword: { component: ResetPasswordScreen },
};
