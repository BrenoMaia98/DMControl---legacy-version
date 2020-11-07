import styled from 'styled-components/native';
import { ColorPalette } from '../../Constants/ColorPalette';

export const Container = styled.View<{ align?: 'center' | 'right' | 'left' }>`
  flex-direction: row;
  max-width: 100%;
  padding: 0 5%;
  align-self: ${(props) => props.align || 'flex-start'};
`;

export const SearchInput = styled.TextInput`
  border: 1px solid ${ColorPalette.gray};
  width: 50%;
`;
