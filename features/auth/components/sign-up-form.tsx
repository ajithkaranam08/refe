import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, View, ScrollView, Text, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import OAuth from '@/components/OAuth';
import { useSignUp, SignedIn } from '@clerk/clerk-expo';
import { ReactNativeModal } from 'react-native-modal';
import LoaderOverlay from '@/components/Loader';

const SignupForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });
  console.log(isLoaded);
  const onSignUpPress = async () => {
    setIsLoader(true);
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setVerification({
        ...verification,
        state: 'pending',
      });
    } catch (err: any) {
      Alert.alert('Error', err.errors[0].longMessage);
    } finally {
      setIsLoader(false);
    }
  };
  const onPressVerify = async () => {
    setIsLoader(true);
    console.log('inside verification');
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: 'success',
        });
      } else {
        setVerification({
          ...verification,
          error: 'verification failed',
          state: 'success',
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: 'success',
      });
    } finally {
      setIsLoader(false);
    }
  };
  return (
    <LoaderOverlay visibility={isLoader}>
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[200px]">
            <Image source={images.refeLogo} className="z=0 w-full h-[200px]" />
            <Text className="text-2xl text-black font-JakartaSemiBold px-5 absolute bottom-5 left-0">
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
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              icon={icons.lock}
              iconStyle={'h-8'}
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <CustomButton
              title="Sign up"
              onPress={onSignUpPress}
              className="mt-6"
            />
            <OAuth />
            <Link href="/(auth)/sign-in" className="mt-5">
              <Text className="text-lg text-center text-general-200">
                Already have an account?{' '}
                <Text className="text-primary-500">Login</Text>
              </Text>
            </Link>
          </View>
          <ReactNativeModal
            isVisible={verification.state === 'pending'}
            onModalHide={() =>
              setVerification({ ...verification, state: 'success' })
            }
          >
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
              <Text className="text-2xl font-JakartaExtraBold mb-2">
                Verification
              </Text>
              <Text className="font-Jakarta mb-5">
                We've sent a verification code to {form.email}
              </Text>
              <InputField
                label="Code"
                icon={icons.lock}
                placeholder="12345"
                keyboardType="numeric"
                onChangeText={(code) =>
                  setVerification({ ...verification, code })
                }
              />
              {verification.error && (
                <Text className="text-red-500 text-sm mt-1">
                  {verification.error}
                </Text>
              )}
              <CustomButton
                title="Verify Email"
                onPress={onPressVerify}
                className="mt-5 bg-success-500"
              />
            </View>
          </ReactNativeModal>
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
      </ScrollView>
    </LoaderOverlay>
  );
};

export default SignupForm;
