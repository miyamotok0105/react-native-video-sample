import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      // fill="currentColor"
      fill="none"
      color="#fff"
      width={24}
      height={24}
      {...props}
    >
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </Svg>
  );
}

export default SvgComponent;
