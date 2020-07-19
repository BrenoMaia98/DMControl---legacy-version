import styled from 'styled-components/native';
import { ColorPalette } from '../../Constants/ColorPalette';

export const Container = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
export const Divider = styled.View`
  width: 90%;
  border: 1px solid ${ColorPalette.lightGray};
`;
