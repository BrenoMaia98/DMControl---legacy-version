import React from 'react';
import { ViewDefaultButton, TextDefaultButton } from './styles';
import { IconEnum } from '../../Utils/PickIcon/types';
import PickIcon from '../../Utils/PickIcon';
import { ComponentSize } from '../../Utils/ComponentSize';

// import { Container } from './styles';

interface DefaultButtonProps {
  iconLeft?: IconEnum;
  iconSize?: ComponentSize;
  buttonSize?: 'fit' | 'large';
  text: string;
  fontSizeEm?: number;
  onPress(): void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  buttonSize,
  iconLeft,
  iconSize,
  fontSizeEm,
  onPress,
}) => {
  return (
    <ViewDefaultButton onPress={() => onPress()} buttonSize={buttonSize}>
      {iconLeft && PickIcon({ iconType: iconLeft, size: iconSize || 'sm' })}
      <TextDefaultButton fontSize={fontSizeEm}>{text}</TextDefaultButton>
    </ViewDefaultButton>
  );
};

export default DefaultButton;
