import React from 'react';
import { Step, StepIndicator, Stepper } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { activeStepAtom } from '../../recoil/atoms';

interface Step {
  value: number;
}

interface StepperDotsProps {
  steps: Step[];
}

const StepperDots: React.FC<StepperDotsProps> = ({ steps }) => {
  const active = useRecoilValue(activeStepAtom);

  return (
    <Stepper size='xs' index={active}>
      {steps.map((step) => (
        <Step key={step.value}>
          <StepIndicator style={{
            backgroundColor: active === step.value ? '#ff8c1e' : '#434e61',
            borderWidth: '2px',
            borderColor: active === step.value ? '#ff8c1e' : '#434e61',
            width: '7px',
            height: '7px'
          }} />
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperDots;
