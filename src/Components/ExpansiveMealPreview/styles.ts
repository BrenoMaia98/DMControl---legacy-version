import styled from 'styled-components/native';
import { Accordion } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const Container = styled.View`
  padding: 10px;
  border: 1px solid ${ColorPalette.gray};
  background-color: #fff;
  margin-bottom: 10px;
`;

export const RowAlignLeft = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 4px;
`;

export const FoodNamesContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FoodName = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${ColorPalette.gray};
  font-size: 19px;
`;

export const CustomAccordion = styled(Accordion)`
  padding: 10px;
  margin: 16px 8px;
`;

export const TitleRow = styled.View`
  padding: 10px;
  margin: 16px 8px;
  flex-direction: row;
  text-align: center;
  font-size: 32px;
  background-color: #fff;
  border: 1px solid ${ColorPalette.gray};
`;
