// import * as React from 'react';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Animated,
  Image,
  View,
} from 'react-native';
import Video from 'react-native-video';
import { FacebookPlayer, ScreenContainer } from "react-native-video-extension";

const width = Dimensions.get('window').width;

const videos = [
  {
    key:1,
    url:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
  },
  {
    key:2,
    url:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
  },
  {
    key:3,
    url:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
  },
];

const resizeMode = 'contain';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const opacity = React.useRef(new Animated.Value(1)).current;
  const onMomentumScrollEnd = ({nativeEvent}) => {
    const newIndex = nativeEvent.contentOffset.x / width;
    if (newIndex !== index && newIndex < videos.length && newIndex >= 0) {
      opacity.setValue(parseFloat(0));
      setIndex(newIndex);
    }
  };

  return (
      <ScreenContainer>
        {({ fullscreen, seeking }) => {
        return (
            <SafeAreaView
            // always stretch to fill empty space
            style={{
                flex: 1,
                zIndex: fullscreen ? 1 : 0, // depends on your app
                backgroundColor: fullscreen ? "black" : "white",
            }}
            >
            <ScrollView
                // disable scrolling inside scroll view while in fullscreen or seeking
                scrollEnabled={!fullscreen && !seeking}
                style={{ flex: 1 }}
                // need to stretch with flex: 1 when fullscreen
                // because VideoPlayer will be absolute
                contentContainerStyle={{ flex: fullscreen ? 1 : 0 }}
            >
                {/* <PostHeader /> */}
                <FacebookPlayer
                mode="contain"
                // source={require("./assets/horizontal_video.mp4")}
                source={{
                  uri:
                    'https://stream.mux.com/Tyu80069gbkJR2uIYlz2xARq8VOl4dLg3.m3u8',
                }}
                />
                {/* <PostContent /> */}
            </ScrollView>
            </SafeAreaView>
        );
        }}
      </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    height: '100%',
    width,
    overflow: 'hidden',
  },
  video: {flex: 1},
});
