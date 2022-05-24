import React from 'react';

import { render, cleanup } from '@testing-library/react-native';

import MockedNavigator from './MockedNavigator';

afterEach(cleanup);
describe('<MockedNavigator />', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<MockedNavigator />);
    expect(toJSON()).toMatchSnapshot();
  });
});
