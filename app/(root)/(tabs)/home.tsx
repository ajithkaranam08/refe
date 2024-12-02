import CustomButton from '@/components/CustomButton';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center">
      <CustomButton
        title="Hire"
        className="w-[80%] rounded-2xl mb-4"
        textVariant="secondary"
      ></CustomButton>
      <Text className="text-center text-2xl font-Poppins-SemiBold">or</Text>
      <CustomButton
        title="Get Hire"
        className="w-[80%] rounded-2xl mt-4"
        bgVariant="secondary"
        textVariant="primary"
      ></CustomButton>
    </View>
  );
}
