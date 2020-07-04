import styled from 'styled-components/native';
import { ComponentSize } from '../../Utils/ComponentSize';

interface TouchableProps {
  color?: string;
  BackGroundColor?: string;
  size?: ComponentSize;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  color: ${(props) => (props.color ? props.color : 'red')};
  background-color: ${(props) =>
    props.BackGroundColor ? props.BackGroundColor : undefined};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    switch (props.size) {
      case ComponentSize.sm:
        return '2em !important';
      case ComponentSize.lg:
        return '4em !important';
      case ComponentSize.md:
      default:
        return '3em !important';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case ComponentSize.sm:
        return '2em !important';
      case ComponentSize.lg:
        return '4em !important';
      case ComponentSize.md:
      default:
        return '3em !important';
    }
  }};
`;
