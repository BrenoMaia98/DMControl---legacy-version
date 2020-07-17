import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  CheckBox,
} from 'react-native';
import { Button, Radio, Row } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackProps } from '../../../routes/StackNavigation';
import TitleBar from '../../Components/TitleBar';
import Strings from '../../Constants/Texts/Strings';
import { ColorPalette } from '../../Constants/ColorPalette';
import { IconEnum } from '../../Utils/PickIcon/types';
import { InputText } from '../../Components/SelectFoodModal/styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackProps,
  'FinalQuestions'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const FinalQuestions: React.FC<Props> = ({ navigation }) => {
  const languageScreen = Strings.FinalQuestions.English;
  const { ButtonActionScreen, Header, Question01, Question02 } = languageScreen;
  return (
    <View style={{ height: Dimensions.get('screen').height }}>
      <TitleBar
        header={Header}
        titleIcon={IconEnum.GoBook}
        screenActionProps={{
          buttonProps: {
            iconLeft: IconEnum.AiOutlinePlusCircle,
            iconSize: 'md',
            onPress: () => navigation.navigate('InProgress'),
            text: ButtonActionScreen,
          },
          navigateForBackButton: navigation,
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#DFE6ED',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderBottomColor: ColorPalette.gray,
            borderTopColor: ColorPalette.gray,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: ColorPalette.gray,
              fontSize: 24,
              textAlign: 'center',
            }}
          >
            {Question01.title}
          </Text>

          <Row style={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <Row
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 16, paddingRight: 5 }}>
                {Question01.option01}
              </Text>
              <Radio selected onPress={() => {}} />
              <TextInput
                placeholder={Question01.placeholderOption01}
                style={{
                  fontSize: 18,
                  maxWidth: '70%',
                  margin: 5,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: ColorPalette.gray,
                  backgroundColor: '#fff',
                }}
              />
            </Row>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16 }}>{Question01.option02}</Text>
              <Radio selected={false} onPress={() => {}} />
            </Row>
          </Row>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderBottomColor: ColorPalette.gray,
            borderTopColor: ColorPalette.gray,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: ColorPalette.gray,
              fontSize: 24,
              textAlign: 'center',
            }}
          >
            {Question02.title}
          </Text>

          <View
            style={{ alignItems: 'center', justifyContent: 'space-around' }}
          >
            <Row
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckBox
                style={{ height: 24, width: 24, paddingRight: 5 }}
                value
              />
              <Text style={{ fontSize: 12, paddingRight: 5 }}>
                {Question02.option01}
              </Text>
              <Text style={{ marginLeft: 30, fontSize: 12, paddingRight: 5 }}>
                {Question02.Units}
              </Text>
              <TextInput
                placeholder={Question01.placeholderOption01}
                style={{
                  fontSize: 18,
                  maxWidth: '70%',
                  margin: 5,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: ColorPalette.gray,
                  backgroundColor: '#fff',
                }}
              />
            </Row>
            <Row
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckBox
                style={{ height: 24, width: 24, paddingRight: 5 }}
                value
              />
              <Text style={{ fontSize: 12, paddingRight: 5 }}>
                {Question02.option02}
              </Text>
              <Text style={{ marginLeft: 30, fontSize: 12, paddingRight: 5 }}>
                {Question02.Units}
              </Text>
              <TextInput
                placeholder={Question01.placeholderOption01}
                style={{
                  fontSize: 18,
                  maxWidth: '70%',
                  margin: 5,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: ColorPalette.gray,
                  backgroundColor: '#fff',
                }}
              />
            </Row>
          </View>
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            color: ColorPalette.purple,
            fontSize: 32,
          }}
        >
          WORK IN PROGRESS
        </Text>
      </ScrollView>
    </View>
  );
};

export default FinalQuestions;
