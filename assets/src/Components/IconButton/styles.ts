import styled from 'styled-components/native';
import { ComponentSize } from '../../Utils/ComponentSize';
import { ColorPallet } from '../../Constants/ColorPallet';

interface TouchableProps {
  color: string;
  BackGroundColor?: string;
  size?: ComponentSize;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  color: ${(props) => (props.color ? props.color : ColorPallet.purple)};
  background-color: ${(props) =>
    props.BackGroundColor ? props.BackGroundColor : 'rgba(0,0,0,0)'};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '2em !important';
      case 'lg':
        return '4em !important';
      case 'md':
      default:
        return '3em !important';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '2em !important';
      case 'lg':
        return '4em !important';
      case 'md':
      default:
        return '3em !important';
    }
  }};
`;
