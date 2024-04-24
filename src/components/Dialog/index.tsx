import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Button } from "@chakra-ui/react";
import React, { useRef } from 'react';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ isOpen, onClose }) => {
  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog isOpen={isOpen} isCentered leastDestructiveRef={leastDestructiveRef} onClose={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>Submitted successfully</AlertDialogHeader>
        <AlertDialogBody>
          Thank you for your time. Wish you a nice day... 🚀
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button style={{ background: '#ff8c1e', color: '#fff' }} onClick={onClose}>
            Done
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessDialog;
