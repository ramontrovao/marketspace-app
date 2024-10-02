import React, {ReactNode} from 'react';
import {TouchableOpacityProps as BaseTouchableOpacityProps} from 'react-native';
import {Text} from '../Text';

interface TouchableOpacityProps extends BaseTouchableOpacityProps {
  children: ReactNode;
}

export function TouchableOpacity({children, ...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
