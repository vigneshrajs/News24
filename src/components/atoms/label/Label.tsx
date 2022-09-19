import React, { FunctionComponent } from 'react';
import { StyleProp, Text, TextStyle, TextProps } from 'react-native';
import { Styles } from 'src/shared/styles'
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware'

export enum LabelTypeProp {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  p2 = 'p2',
  p3 = 'p3',
  p4 = 'p4',
  p5 = 'p5',
  caption3 = 'caption3',
  caption2 = 'caption2',
  title1 = 'title1',
  title3 = 'title3',
  title4 = 'title4',
}

export type LabelType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h8'
  | 'p2'
  | 'p3'
  | 'caption7'
  | 'caption6'
  | 'caption5'
  | 'caption4'
  | 'caption2'
  | 'caption8'
  | 'caption9'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'title'
  | 'caption3'
  | 'label10'
  | 'underlinedTitle'
  | 'content'
  | 'title1'
  | 'title3'
  | 'title4'
  | undefined;
export interface LabelProps extends TextProps {
  labelType?: LabelType | LabelTypeProp;
  style?: StyleProp<TextStyle>;
  color?: string;
}
export const Label: FunctionComponent<LabelProps> = ({
  labelType,
  children,
  style,
  color,
  ...props
}) => {
  const labelStyle = useThemeAwareObject(Styles.text)
  let textStyle: StyleProp<TextStyle> = {};
  switch (labelType) {
    case 'h1':
      textStyle = labelStyle.h1;
      break;
    default:
      textStyle = labelStyle.default;
  }
  
  if (color) {
    textStyle = { ...textStyle, color };
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};
