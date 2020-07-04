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
import { GrDocumentText } from 'react-icons/gr';
import { FaArrowLeft, FaAppleAlt } from 'react-icons/fa';
import { IconEnum } from './types';
import { ComponentSize } from '../ComponentSize';

interface PickIconParam {
  iconType: IconEnum;
  size?: ComponentSize;
}

const PickIcon: React.FC<PickIconParam> = ({ iconType, size: sizeProps }) => {
  const pickIcon = () => {
    let size;
    switch (sizeProps) {
      case ComponentSize.sm:
        size = '1.2em';
        break;
      case ComponentSize.lg:
        size = '3em';
        break;
      case ComponentSize.md:
      default:
        size = '2em';
        break;
    }
    switch (iconType) {
      case IconEnum.GiPill:
        return <GiPill size={size} />;
      case IconEnum.GiHotMeal:
        return <GiHotMeal size={size} />;
      case IconEnum.GoGraph:
        return <GoGraph size={size} />;
      case IconEnum.GoPencil:
        return <GoPencil size={size} />;
      case IconEnum.GoBook:
        return <GoBook size={size} />;
      case IconEnum.GoSearch:
        return <GoSearch size={size} />;
      case IconEnum.GiMeal:
        return <GiMeal size={size} />;
      case IconEnum.BsPersonFill:
        return <BsPersonFill size={size} />;
      case IconEnum.AiOutlinePlusCircle:
        return <AiOutlinePlusCircle size={size} />;
      case IconEnum.FiEdit:
        return <FiEdit size={size} />;
      case IconEnum.MdHelp:
        return <MdHelp size={size} />;
      case IconEnum.MdDelete:
        return <MdDelete size={size} />;
      case IconEnum.MdSave:
        return <MdSave size={size} />;
      case IconEnum.MdRestaurantMenu:
        return <MdRestaurantMenu size={size} />;
      case IconEnum.MdClose:
        return <MdClose size={size} />;
      case IconEnum.GrDocumentText:
        return <GrDocumentText size={size} />;
      case IconEnum.FaArrowLeft:
        return <FaArrowLeft size={size} />;
      case IconEnum.FaAppleAlt:
        return <FaAppleAlt size={size} />;
      default:
        return null;
    }
  };

  return pickIcon();
};

export default PickIcon;
