/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ScreenActionContainer } from './styles';
import DefaultButton from '../../DefaultButton';
import { DefaultButtonProps } from '../../DefaultButton/types';
import { IconEnum } from '../../../Utils/PickIcon/types';
import IconButton from '../../IconButton';
import { ColorPallet } from '../../../Constants/ColorPallet';

export interface ScreenActionProps {
  buttonProps?: DefaultButtonProps;
  navigateForBackButton: any;
}

const ScreenAction: React.FC<ScreenActionProps> = ({
  buttonProps,
  navigateForBackButton,
}) => {
  return (
    <ScreenActionContainer>
      {navigateForBackButton && (
        <IconButton
          onPress={() => navigateForBackButton.pop()}
          defaultIcon={IconEnum.FaArrowLeft}
          IconColor={ColorPallet.gray}
          size="md"
        />
      )}
      {buttonProps && <DefaultButton {...buttonProps} />}
    </ScreenActionContainer>
  );
};

export default ScreenAction;
