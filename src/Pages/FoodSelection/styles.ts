import styled from 'styled-components/native';
import { ColorPalette } from '../../Constants/ColorPalette';

export const TableTitle = styled.Text`
  color: ${ColorPalette.gray};
  font-size: 19px;
  border-bottom-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
`;

export const JustifyCenter = styled.View`
  align-items: center;
  padding: 2px;
`;
