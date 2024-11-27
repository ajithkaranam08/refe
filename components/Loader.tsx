import { View, Text, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const LoaderOverlay = ({
  children,
  visibility,
}: {
  children: ReactNode;
  visibility: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={visibility}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LoaderOverlay;
