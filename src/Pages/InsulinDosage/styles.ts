import styled from 'styled-components/native';
import { Row } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const ContainerInfo = styled.View<{ bgc?: string }>`
  background-color: ${(props) => props.bgc || '#fff'};
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
  border-top-color: ${ColorPalette.gray};
  padding: 10px;
`;

export const RowAlign = styled(Row)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const InfoText = styled.Text`
  color: ${ColorPalette.gray};
  font-size: 24px;
  text-align: center;
`;

export const GreenText = styled(InfoText)`
  color: ${ColorPalette.green};
`;

export const Quantity = styled.View`
  background-color: #fff;
  padding: 15px;
  border: 1px solid ${ColorPalette.lightGray};
  margin: 0px 15px;
`;

export const BloodSugarLevel = styled.Text`
  color: ${ColorPalette.gray};
  font-size: 16px;
`;

export const InsulinDosageText = styled.Text`
  color: ${ColorPalette.purple};
  font-weight: bolder;
  font-size: 32px;
`;

export const MarginTop = styled.View`
  margin-top: 20px;
  flex: 1;
`;

export const InsulinDosageContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
