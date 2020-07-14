import React from 'react';
import { Touchable } from './styles';
import { IconEnum } from '../../Utils/PickIcon/types';
import PickIcon from '../../Utils/PickIcon';
import { ComponentSize } from '../../Utils/ComponentSize';
import { ColorPalette } from '../../Constants/ColorPalette';
// import { Container } from './styles';

interface IconButtonProps {
  customIcon?: JSX.Element;
  defaultIcon: IconEnum;
  IconColor?: string;
  BackGroundColor?: string;
  size?: ComponentSize;
  onPress(): void;
}

const IconButton: React.FC<IconButtonProps> = ({
  customIcon,
  defaultIcon,
  IconColor,
  BackGroundColor,
  size,
  onPress,
}) => {
  const icon = PickIcon({ iconType: defaultIcon, size });

  return (
    <Touchable
      onPress={() => onPress()}
      color={IconColor || '#fff'}
      BackGroundColor={BackGroundColor || ColorPalette.purple}
      size={size || 'lg'}
    >
      {icon || customIcon}
    </Touchable>
  );
};

export default IconButton;
