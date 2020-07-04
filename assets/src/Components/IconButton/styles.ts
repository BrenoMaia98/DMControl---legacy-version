import styled from 'styled-components/native';
import { ComponentSize } from '../../Utils/ComponentSize';

interface TouchableProps {
  color?: string;
  size?: ComponentSize;
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  color: ${(props) => (props.color ? props.color : 'white')};
`;
