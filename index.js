/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import AppOldVersion from './src/AppOldVersion';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppOldVersion);
