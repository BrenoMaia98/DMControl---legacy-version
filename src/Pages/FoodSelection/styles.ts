import styled from 'styled-components/native';
import { Input, Row } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const OtherQuantityinput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
  max-width: 40%;
  margin-bottom: 5px;
`;

export const TableTitle = styled.Text`
  color: ${ColorPalette.gray};
  font-size: 19px;
  border-bottom-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
`;

export const InputsRows = styled(Row)`
  border-bottom-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const RowContainer = styled.View`
  margin-top: 10px;
  padding: 10px;
`;

export const JustifyCenter = styled.View`
  align-items: center;
  padding: 2px;
`;
