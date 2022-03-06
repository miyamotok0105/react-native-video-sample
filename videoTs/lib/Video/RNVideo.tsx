import React, { forwardRef } from 'react';
import Video, { VideoProperties } from 'react-native-video';
import { useInternalCtx } from '../InternalCtx';
import { useVideoCtx } from '../ScreenContainer';

export type RNVideoProps = Omit<
  VideoProperties,
  'resizeMode' | 'controls' | 'paused' | 'muted'
>;

const RNVideo = forwardRef<Video, RNVideoProps>(
  ({ onEnd, onLoad, onProgress, ...props }, ref) => {
    const {
      videoInstance,
      setState,
      mutableState,
      seekerRef,
      duration,
      paused,
      muted,
    } = useInternalCtx();
    const { setIsLandscape, setLoading } = useVideoCtx();
    return (
      <Video
        {...props}
        ref={(videoRef) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(videoRef);
            } else {
              ref.current = videoRef;
            }
          }
          if (videoRef) {
            videoInstance.current = videoRef;
          }
        }}
        onEnd={() => {
          onEnd?.();
          setState({ ended: true });
        }}
        onReadyForDisplay={() => setLoading(false)}
        onLoad={(data) => {
          onLoad?.(data);
          setState({ ended: false, duration: data.duration });
          setIsLandscape(data.naturalSize.orientation === 'landscape');
        }}
        onProgress={(data) => {
          onProgress?.(data);
          setState({ ended: false, bufferTime: data.playableDuration });
          if (!seekerRef.progressStopped) {
            // console.log('currentTime', data.currentTime);
            mutableState.currentTime = data.currentTime;
            seekerRef.seek?.(data.currentTime / duration);
          }
        }}
        muted={muted}
        paused={paused}
        controls={false}
        resizeMode={'contain'}
      />
    );
  },
);

export default RNVideo;
