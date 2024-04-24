import React from 'react';
// ** Import Chakra-UI components
import { Box, Heading } from "@chakra-ui/react";
// ** Import Custom components
import ListImages from "../../ListOfImages";
import MyButton from "../../Buttons";

interface Step3Props {
  handleSubmit: () => void;
  handlePrevious: () => void;
  value: { images: number[]; };
  setValue: React.Dispatch<React.SetStateAction<{ images: number[]; }>>;
}

const Step3: React.FC<Step3Props> = ({ handleSubmit, handlePrevious, value, setValue }) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <Heading as='h1' size='md' textAlign={'center'} style={{ color: '#434e61', padding: '20px' }}>
        Tell us what you’re interested in
      </Heading>
      <ListImages setValue={setValue} value={value} />
      <Box padding={'10px'} marginTop={'30px'}>
        <MyButton
          title={value?.images?.length < 3 ? 'Pick 3 more' : 'Submit'}
          width={'60%'}
          onClick={handleSubmit}
          disabled={value?.images?.length < 3}
          isFilled
        />
      </Box>
      <Box padding={'10px'}>
        <MyButton title={'Back'} width={'60%'} onClick={handlePrevious} isFilled={false} />
      </Box>
    </div>
  );
};

export default Step3;
