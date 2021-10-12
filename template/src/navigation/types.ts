import { AuthStackParamList } from '@auth/screens';
import { CommonStackParamList, UserStackParamList } from 'screens';

export type RootStackParamList = CommonStackParamList & UserStackParamList & AuthStackParamList;

declare global {
  // Specifying this type is important if you heavily use useNavigation, Link etc. in your app since it'll ensure type-safety.
  // READ MORE: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
