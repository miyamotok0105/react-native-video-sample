

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button
} from 'react-native';

import Util from './Utils'

import Video from 'react-native-video';

var video_url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
// var video_url = 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4';


export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
  }

  componentWillMount() {
    this.resizeVideoPlayer();
  }

  render() {
    return <View 
      onLayout={this.onLayout}
      style={styles.container}>
      <Text>Here's some pre-Text</Text>
      <Video
        ref={p => { this.videoPlayer = p; }}
        // source={require('./broadchurch.mp4')}
        source={{
            uri: video_url,
        }}
        style={{width: this.state.orientationWidth, height: this.state.orientationHeight }}
        controls={true}
      />
      <Button title="full screen" onPress={ this.onPress.bind(this) }></Button>
    </View>
  }

  onPress() {
    if (this.videoPlayer!=null)
      this.videoPlayer.presentFullscreenPlayer();
  }

  resizeVideoPlayer() {
    // Always in 16 /9 aspect ratio
    let {width, height} = Dimensions.get('window');

    if (Util.isPortrait()) {
      this.setState({
        orientationWidth: width * 0.8,
        orientationHeight: width * 0.8 * 0.56,
      });
    } else {
      this.setState({
        orientationHeight: height * 0.8,
        orientationWidth: height * 0.8 * 1.77
      });
    }
  }

  onLayout(e) {
    console.log('on layout called');
    this.resizeVideoPlayer();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});