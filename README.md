
# react-naitive-video sample

[ビデオ再生ライブラリの`react-native-video`のサンプル](https://github.com/react-native-video/react-native-video)



```
#初期プロジェクト作成時
#react-native init video

#nodeライブラリ
cd video
yarn install
yarn add react-native-video

#時間がかかる
react-native run-ios

#podを入れる。おかしい時は１回podを消して入れ直す。
cd ios
arch -x86_64 pod install

#iosビルド。xcodeを実行するとシミュレーターが動く。
yarn run start:ios

```

index.jsを修正すれば、違うサンプルを確認できる。

```js:video/index.js
// import App from './App';
// AppRegistry.registerComponent(appName, () => App);

// 全部入りテンプレート
// import AppBasic from './AppBasic';
// AppRegistry.registerComponent(appName, () => AppBasic);

// シンプル動画再生（ステータスバーあり）
// import AppBasic2 from './AppBasic2';
// AppRegistry.registerComponent(appName, () => AppBasic2);

// スワイプ動画再生（ステータスバーなし）
import AppBasic3 from './AppBasic3';
AppRegistry.registerComponent(appName, () => AppBasic3);

```

