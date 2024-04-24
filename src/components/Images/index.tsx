import { Image, Stack, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface MyImageProps {
  file: string;
  size: BoxProps['boxSize'];
}

const MyImage: React.FC <MyImageProps> = ({ file, size }) => {
  return (
    <Stack direction='row' justifyContent={'center'}>
      <Image boxSize={size} src={file} alt='Logo Image' />
    </Stack>
  );
};

export default MyImage;
