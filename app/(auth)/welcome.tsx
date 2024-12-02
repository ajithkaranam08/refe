import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import welcome from '../../assets/images/Welcome-1.png';
import SectionView from '@/components/layout/section-view';

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <View className="flex-1">
        <SectionView className="flex-[0.7] justify-center items-center">
          <Image source={welcome} resizeMode="contain" />
        </SectionView>
        <SectionView className="flex-[0.3] px-8 items-center">
          <Text className="text-white text-3xl font-PoppinsSemiBold">
            welcome to Ref. {'\n'}
            get start your
          </Text>
          <CustomButton
            title={'Get Start'}
            onPress={() => router.replace('/(auth)/sign-in')}
            className="w-96 py-6 mt-10 mb-5 rounded-2xl"
            textVariant="#020617"
            bgVariant="secondary"
            textClass="text-2xl"
          />
        </SectionView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
