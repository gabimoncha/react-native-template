import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const getStorybookUIRoot = () => {
  require('./rn-addons');
  addDecorator(withKnobs);

  configure(() => {
    require('../src/components/stories');
  }, module);
  return getStorybookUI({});
};

export default getStorybookUIRoot;
