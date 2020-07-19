import styled from 'styled-components/native';
import { Row } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const ContainerQuestion = styled.View<{ bgc?: string }>`
  background-color: ${(props) => props.bgc || ColorPalette.lightGray};
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
  border-top-color: ${ColorPalette.gray};
  padding: 10px;
`;

export const TextInputQuestion01 = styled.TextInput.attrs(() => ({
  placeholderTextColor: ColorPalette.lightGray,
}))`
  font-size: 18px;
  max-width: 70%;
  padding: 5px;
  border-width: 2px;
  border-color: ${ColorPalette.gray};
  border-radius: 4px;
  background-color: #fff;
`;

export const TextInputQuestion02 = styled(TextInputQuestion01)`
  width: 100%;
`;
export const RowAlign = styled(Row)<{ aligItems: 'undefined' | 'flex-start' }>`
  align-self: ${(props) => props.aligItems};
`;

export const RowQuestion = styled(Row)<{ center?: boolean }>`
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  align-items: center;
  width: 100%;
  margin: 5px 0px;
`;

export const RowQuestionTime = styled(RowQuestion)`
  padding: 30px 0px;
`;

export const RowQuestionTimeBorderBottom = styled(RowQuestionTime)`
  border-bottom-width: 2px;
  border-bottom-color: ${ColorPalette.lightGray};
`;

export const QuestionTextOption = styled.Text`
  font-size: 16px;
  color: ${ColorPalette.gray};
  padding: 0px 5px;
  margin-bottom: 10px;
`;

export const InputLabel = styled(QuestionTextOption)`
  font-size: 14px;
`;

export const Question01TextRadio = styled.Text`
  font-size: 16px;
`;

export const QuestionText = styled.Text`
  color: ${ColorPalette.gray};
  font-size: 24px;
  text-align: center;
`;
