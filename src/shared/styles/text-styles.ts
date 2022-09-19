import { StyleSheet, TextStyle } from 'react-native';
import { colors, CustomThemeType } from 'src/shared/styles/colors';

enum FontWeight {
  REGULAR = 'normal',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  EXTRA_BOLD = '800',
}

enum FontStyle {
  NORMAL = 'normal',
}

enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const textStyles = (theme: CustomThemeType) => {
  const style = StyleSheet.create<Record<string, TextStyle>>({
    h1: {
      fontStyle: FontStyle.NORMAL,
      fontSize: 18,
      lineHeight: 25,
      textAlign: TextAlign.LEFT,
      color: colors.greyDark,
    },
    default: {
      fontStyle: FontStyle.NORMAL,
      fontSize: 12,
      lineHeight: 13,
    }
  })

  return style
};
