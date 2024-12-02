import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary';
    case 'secondary':
      return 'bg-white';
    case 'danger':
      return 'bg-red-500';
    case 'success':
      return 'bg-green-500';
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]';
    default:
      return 'bg-[#FF7F2A]';
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-white';
    case 'danger':
      return 'text-red-100';
    case 'success':
      return 'text-green-100';
    default:
      return 'text-black';
  }
};

const CustomButton = ({
  onPress,
  title,
  textClass,
  bgVariant = 'primary',
  textVariant = 'primary',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`${textClass ?? 'text-2xl'} ${getTextVariantStyle(textVariant)}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
