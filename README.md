
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

※ xcodeをclean & rebuildするとうまくいく場合がある。

「m1の場合」

XcodeのプロジェクトのBuild SettingsのExcluded ArcitecturesのDebugとReleaseをarm64を追加することで、arm64を除外する。
https://qiita.com/littleossa/items/ff75b19e0ac6713941f8

Podfileの中に下記を追加する

```
post_install do |installer|
  installer.pods_project.build_configurations.each do |config|
    config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
  end
end
```

### バンドル作成

実機を動かすときにバンドルを作成すると、画像などが表示されるようになる。    

```
yarn run build:ios
```

### 実行


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

## TypeScript版

[Ts版の参考](https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native)

このサンプルを元に作成
https://github.com/miyamotok0105/react-native-video-extension

初回作成時

```
react-native init videoTs --template react-native-template-typescript
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native
```

