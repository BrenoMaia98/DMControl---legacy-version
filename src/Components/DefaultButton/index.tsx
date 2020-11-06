import React from 'react';
import { ViewDefaultButton, TextDefaultButton } from './styles';
import PickIcon from '../../Utils/PickIcon';
import { DefaultButtonProps } from './types';

// import { Container } from './styles';

const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  large: buttonSize,
  iconLeft,
  iconSize,
  fontSizePx: fontSizeEm,
  onPress,
}) => {
  return (
    <ViewDefaultButton onPress={() => onPress()} buttonSize={buttonSize}>
      {iconLeft !== undefined &&
        PickIcon({ iconType: iconLeft, size: iconSize || 'sm' })}
      <TextDefaultButton fontSize={fontSizeEm}>{text}</TextDefaultButton>
    </ViewDefaultButton>
  );
};

export default DefaultButton;
