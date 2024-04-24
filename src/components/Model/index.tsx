// ** Import Recoil
import { useRecoilState } from "recoil"

// ** Import Chakra-UI components
import { Modal, ModalContent, ModalBody, ModalFooter } from "@chakra-ui/react"

// ** Import Custom components
import Step1 from "./steppers/step1"
import Step2 from "./steppers/step2"
import Step3 from "./steppers/step3"
import StepperDots from "../Stepper"
import SuccessDialog from "../Dialog"
import {activeStepAtom, isEditableAtom, isSubmittedAtom, modalValueAtom, showStateAtom} from '../../recoil/atoms'

const StepperModal = () => {
  // ** Declare steps 
  const steps = [{ value: 1 }, { value: 2 }, { value: 3 }]
  
  const [active, setActive] = useRecoilState(activeStepAtom)
  const [submitted, setSubmitted] = useRecoilState(isSubmittedAtom)
  const [value, setValue] = useRecoilState(modalValueAtom)
  const [show, setShow] = useRecoilState(showStateAtom)
  const [editable, setEditable] = useRecoilState(isEditableAtom)

  const handleNext = () => {
    setActive((prev) => prev + 1)
  }
  const handlePrevious = () => {
    setActive((prev) => prev - 1)
  }
  const handleSubmit = () => {
    setShow(false)
    setSubmitted(true)
    setEditable(false)
    setValue({
      name: 'Alice',
      language: 'select',
      region: 'select',
      images: []
    })
  }
  const onClose = () => {
    setActive(1)
    setSubmitted(false)
  }
  const handleBody = () => {
    switch (active) {
      case 1:
        return (<Step1 handleNext={handleNext} setValue={setValue} value={value} setEditable={setEditable} editable={editable} />);
      case 2:
        return (<Step2 handleNext={handleNext} handlePrevious={handlePrevious} setValue={setValue} value={value} />)
      case 3:
        return (<Step3 handleSubmit={handleSubmit} handlePrevious={handlePrevious} setValue={setValue} value={value} />)
      default:
        return null
    }
  }

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={show} onClose={onClose}>
        <ModalContent>
          <ModalBody pb={6}>
            {handleBody()}
          </ModalBody>
          <ModalFooter style={{ justifyContent: 'center' }}>
            <StepperDots steps={steps}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {active === 3 && submitted && <SuccessDialog isOpen={submitted} onClose={onClose} />}
    </>
  )
}

export default StepperModal
