import styled from 'styled-components/native';
import { ColorPalette } from '../../Constants/ColorPalette';

export const ContainerTitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  color: ${ColorPalette.gray};
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding-left: 5px;
  color: ${ColorPalette.gray};
`;

export const Subtitle = styled.Text`
  padding-left: 40px;
  font-size: 16px;
  font-weight: bold;
  color: ${ColorPalette.gray};
`;

export const RowAligned = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
