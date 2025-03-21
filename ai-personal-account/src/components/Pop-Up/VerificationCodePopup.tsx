import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import VerificationCodeForm from '../Forms/VerificationCodeForm';

interface VerificationCodePopupProps {
  open: boolean;
  onClose: () => void;
}

const VerificationCodePopup: React.FC<VerificationCodePopupProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Enter Verification Code</DialogTitle>
      <DialogContent>
        <VerificationCodeForm onSubmit={(data) => {
          console.log('Verification code entered:', data.verificationCode);
          onClose();
        }} />
      </DialogContent>
    </Dialog>
  );
};

export default VerificationCodePopup;
