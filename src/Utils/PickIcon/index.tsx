import React from 'react';
import { GiPill, GiMeal, GiHotMeal } from 'react-icons/gi';
import { GoGraph, GoPencil, GoBook, GoSearch } from 'react-icons/go';
import { BsPersonFill } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import {
  MdHelp,
  MdDelete,
  MdSave,
  MdClose,
  MdRestaurantMenu,
} from 'react-icons/md';
import { GrDocumentText, GrApple } from 'react-icons/gr';
import { FaArrowLeft } from 'react-icons/fa';
import { IconEnum } from './types';
import { ComponentSize } from '../ComponentSize';

type PickIconParam = {
  iconType: IconEnum;
  size?: ComponentSize;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PickIcon = ({ iconType, size }: PickIconParam) => {
  const pickIconFunction = () => {
    let sizeProps;
    switch (size) {
      case 'sm':
        sizeProps = '1em';
        break;
      case 'lg':
        sizeProps = '3em';
        break;
      case 'md':
      default:
        sizeProps = '2em';
        break;
    }
    switch (iconType) {
      case IconEnum.GiPill:
        return <GiPill size={sizeProps} />;
      case IconEnum.GiHotMeal:
        return <GiHotMeal size={sizeProps} />;
      case IconEnum.GoGraph:
        return <GoGraph size={sizeProps} />;
      case IconEnum.GoPencil:
        return <GoPencil size={sizeProps} />;
      case IconEnum.GoBook:
        return <GoBook size={sizeProps} />;
      case IconEnum.GoSearch:
        return <GoSearch size={sizeProps} />;
      case IconEnum.GiMeal:
        return <GiMeal size={sizeProps} />;
      case IconEnum.BsPersonFill:
        return <BsPersonFill size={sizeProps} />;
      case IconEnum.AiOutlinePlusCircle:
        return <AiOutlinePlusCircle size={sizeProps} />;
      case IconEnum.FiEdit:
        return <FiEdit size={sizeProps} />;
      case IconEnum.MdHelp:
        return <MdHelp size={sizeProps} />;
      case IconEnum.MdDelete:
        return <MdDelete size={sizeProps} />;
      case IconEnum.MdSave:
        return <MdSave size={sizeProps} />;
      case IconEnum.MdRestaurantMenu:
        return <MdRestaurantMenu size={sizeProps} />;
      case IconEnum.MdClose:
        return <MdClose size={sizeProps} />;
      case IconEnum.GrDocumentText:
        return <GrDocumentText size={sizeProps} />;
      case IconEnum.FaArrowLeft:
        return <FaArrowLeft size={sizeProps} />;
      case IconEnum.FaAppleAlt:
        return <GrApple size={sizeProps} />;
      default:
        return null;
    }
  };

  return pickIconFunction();
};

export default PickIcon;
