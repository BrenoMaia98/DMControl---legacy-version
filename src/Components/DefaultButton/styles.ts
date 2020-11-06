import styled from 'styled-components/native';
import { ColorPalette } from '../../Constants/ColorPalette';

type IButtonSize = { buttonSize?: 'fit' | 'large' };

export const ViewDefaultButton = styled.TouchableOpacity<IButtonSize>`
  background-color: ${ColorPalette.purple};
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  flex-direction: row;
  border-radius: 4px;
  color: white;
  min-width: 50%;
  max-width: 80%;
  ${({ buttonSize }) => buttonSize && 'width:80%'};
`;

export const TextDefaultButton = styled.Text<{ fontSize?: number }>`
  color: white;
  margin-left: 5px;
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
`;
