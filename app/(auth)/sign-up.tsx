import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, View, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const onSignupPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          <Image source={images.refeLogo} className="z=0 w-full h-[200px] " />
          {/* <LinearGradient
            // Background Linear Gradient
            start={{ x: 0.5, y: 0.4 }} // Start at the bottom
            end={{ x: 0.5, y: 0.65 }}
            colors={['transparent', '#fff']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 50,
              height: 210,
            }}
          /> */}
          <Text className="text-2xl text-black font-JakartaSemiBold px-5 absolute bottom-5 left-">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter the Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />{' '}
          <InputField
            label="Mobile"
            placeholder="Enter your Mobile Number"
            icon={icons.mobile}
            iconStyle={'h-8'}
            value={form.mobile}
            onChangeText={(value) => setForm({ ...form, mobile: value })}
          />
          <CustomButton
            title="Sign up"
            onPress={onSignupPress}
            className="mt-6"
          />
          <OAuth />
          <Link href="/(auth)/sign-in" className="mt-5">
            <Text className="text-lg text-center text-general-200">
              Already have account ?{' '}
            </Text>
            <Text className="text-primary-500">Login </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
