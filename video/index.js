/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './App';
// AppRegistry.registerComponent(appName, () => App);

// 全部入りテンプレート
// import AppBasic from './AppBasic';
// AppRegistry.registerComponent(appName, () => AppBasic);

// シンプル動画再生（ステータスバーあり）
// import AppBasic2 from './AppBasic2';
// AppRegistry.registerComponent(appName, () => AppBasic2);

// スワイプ動画再生（ステータスバーなし）
// import AppBasic3 from './AppBasic3';
// AppRegistry.registerComponent(appName, () => AppBasic3);


import AppBasic4 from './AppBasic4';
AppRegistry.registerComponent(appName, () => AppBasic4);


// import AppEmbedAndFullscreen from './AppEmbedAndFullscreen';
// AppRegistry.registerComponent(appName, () => AppEmbedAndFullscreen);

// import AppPlayVideo from './AppPlayVideo';
// AppRegistry.registerComponent(appName, () => AppPlayVideo);

