import styled from 'styled-components/native';
import { ColorPallet } from '../../Constants/ColorPallet';

export const ContainerTitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  color: ${ColorPallet.gray};
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: 2em;
  font-weight: bold;
  padding-left: 5px;
  color: ${ColorPallet.gray};
`;

export const Subtitle = styled.Text`
  font-size: 1em;
  font-weight: bold;
  color: ${ColorPallet.gray};
`;

export const RowAligned = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
`;
