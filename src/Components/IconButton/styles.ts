import styled from 'styled-components/native';
import { ComponentSize } from '../../Utils/ComponentSize';
import { ColorPalette } from '../../Constants/ColorPalette';

interface TouchableProps {
  BackGroundColor?: string;
  size?: ComponentSize;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  background-color: ${(props) =>
    props.BackGroundColor ? props.BackGroundColor : 'rgba(0,0,0,0)'};
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '32px !important';
      case 'lg':
        return '64px !important';
      case 'md':
      default:
        return '48px !important';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '32px !important';
      case 'lg':
        return '64px !important';
      case 'md':
      default:
        return '48px !important';
    }
  }};
`;
