import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import loginScreen from '../../../assets/images/loginScreen.png';
import SectionView from '@/components/layout/section-view';
import ReactNativeModal from 'react-native-modal';

const SigninForm = () => {
  const [form, setForm] = useState({
    mobile: '',
  });

  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });
  const onSigninPress = async () => {};
  return (
    <View className="flex-1 bg-white">
      <SectionView className="flex-[0.4] items-center justify-end mb-5">
        <Image source={loginScreen} />
      </SectionView>
      <SectionView className="flex-[0.6] mt-[50px] items-center">
        <InputField
          placeholder="Enter your Mobile Number"
          icon={icons.mobile}
          value={form.mobile}
          onChangeText={(value) => setForm({ ...form, mobile: value })}
          containerStyle="w-[350px] rounded-2xl mb-8"
        />
        <CustomButton
          title="Send OTP"
          onPress={onSigninPress}
          className="w-[150px]"
          textVariant="secondary"
        />
      </SectionView>
      <ReactNativeModal isVisible={verification.state === 'success'}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] h-[110px] mx-auto my-5"
          />
          <Text className="text-3xl font-JakartaExtraBold text-center">
            Verified
          </Text>
          <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
            You have successfully verified your account
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => router.replace('/(root)/(tabs)/home')}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default SigninForm;
