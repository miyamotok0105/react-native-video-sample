import React from 'react';
import { View, Text } from 'react-native';
import { YoutubePlayer } from '../../lib';
import PostContent from '../components/PostContent';

export type BasicProps = {};

const BasicExample = ({}: BasicProps) => (
  <View
    style={{
      paddingTop: 48,
      flex: 1, // important, try removing flex: 1 and enter fullscreen
    }}
  >
    <YoutubePlayer
      mode="contain"
      source={{
        uri: 'https://stream.mux.com/Tyu80069gbkJR2uIYlz2xARq8VOl4dLg3.m3u8',
      }}
      renderToolbar={() => (
        <Text style={{ color: '#fff', padding: 16, fontSize: 16 }}>
          This is a video title.
        </Text>
      )}
    />
    <PostContent />
  </View>
);

export default BasicExample;
