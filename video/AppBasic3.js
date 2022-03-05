// import * as React from 'react';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import Video from 'react-native-video';

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
      opacity.setValue(0);
      setIndex(newIndex);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal
      pagingEnabled
      disableIntervalMomentum
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={onMomentumScrollEnd}>
      {videos.map((i) => (
        <Image
        key={i.key}
        resizeMode={resizeMode}
        style={styles.item}
        source={{uri: i.poster}}  
        />
      ))}
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {width, left: index * width, opacity},
        ]}>
        <Video
          resizeMode={resizeMode}
          style={styles.video}
          source={{uri: videos[index].url}}
          shouldPlay
          isLooping
          isMuted
          onReadyForDisplay={() => opacity.setValue(1)}
        />
      </Animated.View>
    </ScrollView>
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
