import styled from 'styled-components/native';
import { ColorPallet } from '../../Constants/ColorPallet';

type IButtonSize = { buttonSize?: 'fit' | 'large' };

export const ViewDefaultButton = styled.TouchableOpacity<IButtonSize>`
  background-color: ${ColorPallet.purple};
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  border-radius: 4px;
  color: white;
  width: ${(props) =>
    props.buttonSize && props.buttonSize === 'large' ? '80%' : 'max-content'};
`;

export const TextDefaultButton = styled.Text<{ fontSize?: number }>`
  color: white;
  margin-left: 5px;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}em` : '1em')};
`;
