import styled from 'styled-components/native';

export const ScreenActionContainer = styled.View<{ hasBoth: boolean }>`
  flex-direction: row;
  justify-content: ${(props) => (props.hasBoth ? 'space-between' : 'center')};
  padding: 8px;
`;
