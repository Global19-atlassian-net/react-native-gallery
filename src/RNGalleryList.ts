'use strict';
import React from 'react';
import { View } from 'react-native';
const WelcomePage = require('./WelcomePage');
const CheckBoxExamplePage = require('./examples/CheckBoxExamplePage');

interface IRNGalleryExample {
  key: string;
  component: React.Component;
}
  
export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Wecome',
    component: WelcomePage,
  },
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
  },
];

export default RNGalleryList;