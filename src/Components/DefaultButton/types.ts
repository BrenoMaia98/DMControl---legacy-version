import { IconEnum } from '../../Utils/PickIcon/types';
import { ComponentSize } from '../../Utils/ComponentSize';

export interface DefaultButtonProps {
  iconLeft?: IconEnum;
  iconSize?: ComponentSize;
  buttonSize?: 'fit' | 'large';
  text: string;
  fontSizePx?: number;
  onPress(): void;
}
