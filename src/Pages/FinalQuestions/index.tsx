import React from 'react';
import { View, Text, Dimensions, CheckBox } from 'react-native';
import { Radio, Row } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { ColorPalette } from '../../Constants/ColorPalette';
import { IconEnum } from '../../Utils/PickIcon/types';
import {
  ContainerQuestion,
  TextInputQuestion01,
  RowQuestion,
  QuestionTextOption,
  QuestionText,
  InputLabel,
  TextInputQuestion02,
  RowAlign,
  RowQuestionTimeBorderBottom,
  RowQuestionTime,
} from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'FinalQuestions'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
type InsulinInputs = {
  checked: boolean;
  units: string;
  hoursAgo: string;
  minutesAgo: string;
};

const FinalQuestions: React.FC<Props> = ({ navigation }) => {
  const languageScreen = Strings.FinalQuestions.English;
  const { ButtonActionScreen, Header, Question01, Question02 } = languageScreen;
  const [fastInsulin, setFastInsulin] = React.useState<InsulinInputs>({
    checked: false,
    hoursAgo: '',
    minutesAgo: '',
    units: '',
  });
  const [slowInsulin, setSlowInsulin] = React.useState<InsulinInputs>({
    checked: false,
    hoursAgo: '',
    minutesAgo: '',
    units: '',
  });
  return (
    <View style={{ height: Dimensions.get('screen').height }}>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GoBook}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.GiPill,
            iconSize: 'md',
            onPress: () => navigation.navigate('InsulinDosage'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <ContainerQuestion bgc="#dfe6ed">
        <QuestionText>{Question01.title}</QuestionText>

        <Row>
          <RowQuestion>
            <Row>
              <QuestionTextOption>{Question01.option01}</QuestionTextOption>
              <Radio selected onPress={() => {}} />
            </Row>
            <TextInputQuestion01 placeholder={Question01.placeholderOption01} />
          </RowQuestion>
          <RowQuestion center>
            <QuestionTextOption>{Question01.option02}</QuestionTextOption>
            <Radio selected={false} onPress={() => {}} />
          </RowQuestion>
        </Row>
      </ContainerQuestion>
      <ContainerQuestion>
        <QuestionText>{Question02.title}</QuestionText>

        <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
          <RowQuestion>
            <Row>
              <CheckBox
                style={{ height: 24, width: 24 }}
                value={fastInsulin.checked}
                onValueChange={(checked) => {
                  setFastInsulin({
                    ...fastInsulin,
                    checked,
                  });
                }}
              />
              <QuestionTextOption>{Question02.option01}</QuestionTextOption>
            </Row>
            {fastInsulin.checked && (
              <Row>
                <InputLabel>{Question02.Label01}</InputLabel>
                <TextInputQuestion02
                  placeholder={Question01.placeholderOption01}
                />
              </Row>
            )}
          </RowQuestion>
          {fastInsulin.checked && (
            <RowQuestionTimeBorderBottom>
              <Row>
                <InputLabel>{Question02.Label02}</InputLabel>
                <TextInputQuestion02
                  placeholder={Question01.placeholderOption01}
                />
              </Row>
              <Row>
                <InputLabel>{Question02.Label03}</InputLabel>
                <TextInputQuestion02
                  placeholder={Question01.placeholderOption01}
                />
              </Row>
            </RowQuestionTimeBorderBottom>
          )}
          <RowQuestion>
            <RowAlign
              aligItems={slowInsulin.checked ? 'undefined' : 'flex-start'}
            >
              <CheckBox
                style={{ height: 24, width: 24 }}
                value={slowInsulin.checked}
                onValueChange={(checked) => {
                  setSlowInsulin({
                    ...slowInsulin,
                    checked,
                  });
                }}
              />
              <QuestionTextOption>{Question02.option02}</QuestionTextOption>
            </RowAlign>
            {slowInsulin.checked && (
              <Row>
                <InputLabel>{Question02.Label01}</InputLabel>
                <TextInputQuestion02 placeholder={Question02.placeholder01} />
              </Row>
            )}
          </RowQuestion>
          {slowInsulin.checked && (
            <RowQuestionTime>
              <Row>
                <InputLabel>{Question02.Label02}</InputLabel>
                <TextInputQuestion02 placeholder={Question02.placeholder02} />
              </Row>
              <Row>
                <InputLabel>{Question02.Label03}</InputLabel>
                <TextInputQuestion02 placeholder={Question02.placeholder03} />
              </Row>
            </RowQuestionTime>
          )}
        </View>
      </ContainerQuestion>
    </View>
  );
};

export default FinalQuestions;
