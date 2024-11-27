import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const SigninForm = () => {
  const [form, setForm] = useState({
    mobile: '',
  });
  const onSigninPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          <Image source={images.refeLogo} className="z=0 w-full h-[200px] " />
          <Text className="text-2xl text-black font-JakartaSemiBold px-5 absolute bottom-5 left-">
            Welcome Back
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Mobile"
            placeholder="Enter your Mobile Number"
            icon={icons.mobile}
            value={form.mobile}
            onChangeText={(value) => setForm({ ...form, mobile: value })}
          />
          <CustomButton
            title="Send OTP"
            onPress={onSigninPress}
            className="mt-6"
          />
          <OAuth />
          <Link href="/(auth)/sign-up" className="mt-5">
            <Text className="text-lg text-center text-general-200">
              Don't have an account ?{' '}
            </Text>
            <Text className="text-primary-500">Sign Up </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SigninForm;
