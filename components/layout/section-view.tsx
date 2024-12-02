import { View, Text, ViewProps } from 'react-native';
import React from 'react';

interface SectionViewProps extends ViewProps {}

const SectionView: React.FC<SectionViewProps> = (props) => {
  return <View {...props} />;
};

export default SectionView;
