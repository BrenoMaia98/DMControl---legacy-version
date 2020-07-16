import { ModalProps } from 'react-native';

export interface SelectFoodModalProps extends ModalProps {
  language: 'ENUS' | 'PTBR';
  selectedFood?: string;
  onClose(): void;
}

export const mockFoodData = `[{
  "foodName": "Batata (Baked Potato®)",
  "measure": "unidade",
  "volumeMlOrGram": "470",
  "cho": "83",
  "kcal": "369"
},
{
  "foodName": "Batata doce frita",
  "measure": "fatia media",
  "volumeMlOrGram": "65",
  "cho": "39",
  "kcal": "249"
},
{
  "foodName": "Batata frita (Bob’s®)",
  "measure": "porção grande",
  "volumeMlOrGram": "115",
  "cho": "41",
  "kcal": "259"
},
{
  "foodName": "Batata frita (Bob’s®)",
  "measure": "porção média",
  "volumeMlOrGram": "95",
  "cho": "34",
  "kcal": "214"
},
{
  "foodName": "Batata frita (Bob’s®)",
  "measure": "porção pequena",
  "volumeMlOrGram": "55",
  "cho": "20",
  "kcal": "124"
},
{
  "foodName": "Batata frita (Burguer King®)",
  "measure": "porção",
  "volumeMlOrGram": "",
  "cho": "37",
  "kcal": "318"
},
{
  "foodName": "Batata frita (Habib’s®)",
  "measure": "porção pequena",
  "volumeMlOrGram": "40",
  "cho": "10",
  "kcal": "86"
},
{
  "foodName": "Batata frita chips",
  "measure": "punhado",
  "volumeMlOrGram": "13",
  "cho": "6",
  "kcal": "70"
},
{
  "foodName": "Batata fritas (Mc’ Donalds®)",
  "measure": "porção pequena",
  "volumeMlOrGram": "",
  "cho": "25",
  "kcal": "206"
},
{
  "foodName": "Batata fritas (Mc’ Donalds®)",
  "measure": "porção média",
  "volumeMlOrGram": "",
  "cho": "35",
  "kcal": "288"
},
{
  "foodName": "Batata fritas (Mc’ Donalds®)",
  "measure": "porção grande",
  "volumeMlOrGram": "",
  "cho": "49",
  "kcal": "412"
},
{
  "foodName": "Batata fritas McFritas Kids (Mc’ Donalds®)",
  "measure": "porção",
  "volumeMlOrGram": "",
  "cho": "11",
  "kcal": "87"
},
{
  "foodName": "Batata inglesa cozida picada",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "80",
  "cho": "6",
  "kcal": "68"
},
{
  "foodName": "Batata inglesa fritta",
  "measure": "escumadeira media cheia",
  "volumeMlOrGram": "65",
  "cho": "23",
  "kcal": "182"
},
{
  "foodName": "Batata inglesa fritta®",
  "measure": "escumadeira media cheia",
  "volumeMlOrGram": "65",
  "cho": "23",
  "kcal": "182"
},
{
  "foodName": "Batata inglesa Saute®",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "25",
  "cho": "4",
  "kcal": "37"
},
{
  "foodName": "Batata smiles Mccain®",
  "measure": "01 unidade",
  "volumeMlOrGram": "21",
  "cho": "7",
  "kcal": "42"
},
{
  "foodName": "Batata smiles Mccain®",
  "measure": "01 unidade",
  "volumeMlOrGram": "21",
  "cho": "7",
  "kcal": "42"
},
{
  "foodName": "Batata, amido de",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "16",
  "cho": "13",
  "kcal": "53"
},
{
  "foodName": "Batata, fécula de",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "20",
  "cho": "16",
  "kcal": "66"
},
{
  "foodName": "Batata-baroa ou mandioquinha (picada)",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "35",
  "cho": "10",
  "kcal": "44"
},
{
  "foodName": "Batata-doce amarela assada (picada)",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "30",
  "cho": "10",
  "kcal": "43"
},
{
  "foodName": "Batata-doce branca cozida (picada)",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "30",
  "cho": "8",
  "kcal": "38"
},
{
  "foodName": "Batata-doce cozida",
  "measure": "colher sopa cheia",
  "volumeMlOrGram": "42",
  "cho": "10",
  "kcal": "43"
},
{
  "foodName": "Batata-doce, doce de",
  "measure": "colher de sopa cheia",
  "volumeMlOrGram": "40",
  "cho": "24",
  "kcal": "94"
}]`;
