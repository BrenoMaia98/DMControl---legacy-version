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
// import { Container } from './styles';
type PickIconParam = {
  iconType: IconEnum;
};

const PickIcon: React.FC<PickIconParam> = ({ iconType }) => {
  const pickIcon = () => {
    switch (iconType) {
      case IconEnum.GiPill:
        return <GiPill />;
      case IconEnum.GiHotMeal:
        return <GiHotMeal />;
      case IconEnum.GoGraph:
        return <GoGraph />;
      case IconEnum.GoPencil:
        return <GoPencil />;
      case IconEnum.GoBook:
        return <GoBook />;
      case IconEnum.GoSearch:
        return <GoSearch />;
      case IconEnum.GiMeal:
        return <GiMeal />;
      case IconEnum.BsPersonFill:
        return <BsPersonFill />;
      case IconEnum.AiOutlinePlusCircle:
        return <AiOutlinePlusCircle />;
      case IconEnum.FiEdit:
        return <FiEdit />;
      case IconEnum.MdHelp:
        return <MdHelp />;
      case IconEnum.MdDelete:
        return <MdDelete />;
      case IconEnum.MdSave:
        return <MdSave />;
      case IconEnum.MdRestaurantMenu:
        return <MdRestaurantMenu />;
      case IconEnum.MdClose:
        return <MdClose />;
      case IconEnum.GrDocumentText:
        return <GrDocumentText />;
      case IconEnum.FaArrowLeft:
        return <FaArrowLeft />;
      case IconEnum.FaAppleAlt:
        return <FaAppleAlt />;
      default:
        return null;
    }
  };

  return pickIcon();
};

export default PickIcon;
