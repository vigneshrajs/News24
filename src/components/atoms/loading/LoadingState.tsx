import React, { FunctionComponent } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Styles } from 'src/shared/styles';

export const LoadingState: FunctionComponent = () => {
  return (
    <View testID={'loading'} style={loadingStateStyle.container}>
      <ActivityIndicator
        testID={'activityIndicator'}
        size={'large'}
        color={Styles.color.greenishBlue}
      />
    </View>
  );
};

const loadingStateStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
