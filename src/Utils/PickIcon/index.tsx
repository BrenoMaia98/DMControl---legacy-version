import React from 'react';
import { Icon } from 'native-base';
import { IconEnum } from './types';
import { ComponentSize } from '../ComponentSize';

type PickIconParam = {
  iconType: IconEnum;
  colorIcon?: string;
  size?: ComponentSize;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PickIcon = ({ iconType, size, colorIcon }: PickIconParam) => {
  const pickIconFunction = () => {
    let sizeProps;
    switch (size) {
      case 'sm':
        sizeProps = 16;
        break;
      case 'lg':
        sizeProps = 48;
        break;
      case 'md':
      default:
        sizeProps = 32;
        break;
    }
    switch (iconType) {
      case IconEnum.Pill:
        return (
          <Icon
            type="MaterialCommunityIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="pill"
          />
        );
      case IconEnum.Graph:
        return (
          <Icon
            type="Entypo"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="area-graph"
          />
        );
      case IconEnum.Pencil:
        return (
          <Icon
            type="FontAwesome"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="pencil"
          />
        );
      case IconEnum.Book:
        return (
          <Icon
            type="Feather"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="book-open"
          />
        );
      case IconEnum.Search:
        return (
          <Icon
            type="EvilIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="search"
          />
        );
      case IconEnum.Meal:
        return (
          <Icon
            type="MaterialCommunityIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="food"
          />
        );
      case IconEnum.Person:
        return (
          <Icon
            type="MaterialIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="person-outline"
          />
        );
      case IconEnum.PlusCircle:
        return (
          <Icon
            type="Feather"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="plus-circle"
          />
        );
      case IconEnum.Edit:
        return (
          <Icon
            type="Feather"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="edit"
          />
        );
      case IconEnum.Help:
        return (
          <Icon
            type="Ionicons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="help-circle"
          />
        );
      case IconEnum.Delete:
        return (
          <Icon
            type="AntDesign"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="delete"
          />
        );
      case IconEnum.Save:
        return (
          <Icon
            type="Feather"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="save"
          />
        );
      case IconEnum.RestaurantMenu:
        return (
          <Icon
            type="MaterialCommunityIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="silverware-fork-knife"
          />
        );
      case IconEnum.Close:
        return (
          <Icon
            type="MaterialCommunityIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="close"
          />
        );
      case IconEnum.DocumentText:
        return (
          <Icon
            type="Ionicons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="document-text-outline"
          />
        );
      case IconEnum.ArrowLeft:
        return (
          <Icon
            type="Entypo"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="arrow-left"
          />
        );
      case IconEnum.Apple:
        return (
          <Icon
            type="MaterialCommunityIcons"
            style={{
              fontSize: sizeProps,
              color: colorIcon || '#fff',
            }}
            name="food-apple"
          />
        );
      default:
        return null;
    }
  };

  return pickIconFunction();
};

export default PickIcon;
