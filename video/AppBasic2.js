/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {
   View,
   StyleSheet,
   AlertIOS,
 } from 'react-native';
 import Video,{FilterType} from 'react-native-video';
 

var video_url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
// var video_url = 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4';

 export default class MediaPlayerScreen extends Component {
   constructor(props) {
     super(props);
     this.onLoad = this.onLoad.bind(this);
     this.onProgress = this.onProgress.bind(this);
     this.onBuffer = this.onBuffer.bind(this);
   }
   state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'embed',
    ignoreSilentSwitch: null,
    mixWithOthers: null,
    isBuffering: false,
    filter: FilterType.NONE,
    filterEnabled: true
  };
  onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});

    this.setState({
        controls: true,
        skin: 'native'
    });
    this.setState({rate: 1.0});
    this.setState({volume: 1})
    this.setState({resizeMode: 'contain'})
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  renderNativeSkin() {
    const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <Video
           //  source={require('./broadchurch.mp4')}
           source={{
             uri: video_url,
           }}
            style={videoStyle}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            mixWithOthers={this.state.mixWithOthers}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat={true}
            controls={this.state.controls}
            filter={this.state.filter}
            filterEnabled={this.state.filterEnabled}
          />
        </View>

      </View>
    );
  }
   render() {
    return this.renderNativeSkin();
   }
 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },

  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

