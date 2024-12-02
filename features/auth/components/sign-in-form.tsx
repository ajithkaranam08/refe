import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';
import { useState } from 'react';
import { Image, View, Text, Alert } from 'react-native';
import { router } from 'expo-router';
import loginScreen from '../../../assets/images/loginScreen.png';
import SectionView from '@/components/layout/section-view';
import ReactNativeModal from 'react-native-modal';
import { useSignUp } from '@clerk/clerk-expo';
import LoaderOverlay from '@/components/Loader';

const SigninForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [form, setForm] = useState({
    mobile: '',
  });
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });
  const onSignUpPress = async () => {
    setIsLoader(true);
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        phoneNumber: `91${form.mobile}`,
      });
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
      const completeSignUp = await signUp.attemptPhoneNumberVerification({
        code: verification.code,
      });

      if (completeSignUp.status === 'complete') {
        let clerkVerify = await setActive({
          session: completeSignUp.createdSessionId,
        });
        console.log({ clerkVerify });
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
      <View className="flex-1 bg-white w-full">
        <SectionView className="flex-[0.4] items-center justify-end mb-5">
          <Image source={loginScreen} />
        </SectionView>
        <SectionView className="flex-[0.6] mt-[50px] items-center">
          <InputField
            placeholder="Enter Mobile Number"
            icon={icons.mobile}
            value={form.mobile}
            onChangeText={(value) => setForm({ ...form, mobile: value })}
            containerStyle="w-[80%] rounded-2xl mb-8 "
          />
          <CustomButton
            title="Send OTP"
            onPress={onSignUpPress}
            className="w-[40%] rounded-2xl"
            textVariant="secondary"
          />
        </SectionView>
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
              We've sent a verification code to {form.mobile}
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
              title="Verify"
              onPress={onPressVerify}
              className="mt-5 bg-primary"
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
              textVariant="secondary"
            />
          </View>
        </ReactNativeModal>
      </View>
    </LoaderOverlay>
  );
};

export default SigninForm;
