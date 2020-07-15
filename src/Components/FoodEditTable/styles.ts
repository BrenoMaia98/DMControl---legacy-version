import styled from 'styled-components/native';
import { Row, Col } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const TRow = styled(Row)`
  padding: 10px;
  border: 1px solid ${ColorPalette.gray};
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`;
export const TData = styled(Col)`
  justify-content: center;
  align-items: center;
`;
export const TText = styled.Text`
  font-size: 1em;
  text-align: center;
`;
export const TTitle = styled.Text`
  font-size: 1.5em;
  color: ${ColorPalette.gray};
  padding: 10px 20px;
`;
