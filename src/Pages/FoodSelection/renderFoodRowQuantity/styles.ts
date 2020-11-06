import { Input, Row } from 'native-base';
import styled from 'styled-components/native';
import { ColorPalette } from '../../../Constants/ColorPalette';

export const OtherQuantityinput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
  max-width: 40%;
  margin-bottom: 5px;
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
