/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ScreenActionContainer } from './styles';
import DefaultButton from '../../DefaultButton';
import { DefaultButtonProps } from '../../DefaultButton/types';
import { IconEnum } from '../../../Utils/PickIcon/types';
import IconButton from '../../IconButton';
import { ColorPalette } from '../../../Constants/ColorPalette';

export interface ScreenActionProps {
  buttonProps?: DefaultButtonProps;
  navigateForBackButton?: any;
}

const ScreenAction: React.FC<ScreenActionProps> = ({
  buttonProps,
  navigateForBackButton,
}) => {
  return (
    <ScreenActionContainer hasBoth={!!(navigateForBackButton && buttonProps)}>
      {navigateForBackButton && (
        <IconButton
          onPress={() => navigateForBackButton.pop()}
          defaultIcon={IconEnum.FaArrowLeft}
          IconColor={ColorPalette.gray}
          size="md"
        />
      )}
      {buttonProps && <DefaultButton {...buttonProps} />}
    </ScreenActionContainer>
  );
};

export default ScreenAction;
