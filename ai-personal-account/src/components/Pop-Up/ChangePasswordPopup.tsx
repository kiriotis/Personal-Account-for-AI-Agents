import React, { useState } from 'react';
import VerificationCodePopup from './VerificationCodePopup';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import ChangePasswordForm from '../Forms/ChangePasswordForm';

interface ChangePasswordPopupProps {
  open: boolean;
  onClose: () => void;
}

const ChangePasswordPopup: React.FC<ChangePasswordPopupProps> = ({ open, onClose }) => {
  const [openVerificationCode, setOpenVerificationCode] = useState(false);

  const handleFormSubmit = (data: { oldPassword: string; newPassword: string; confirmPassword: string }) => {
    console.log(data);
    setOpenVerificationCode(true);
  };

  const handleVerificationClose = () => {
    setOpenVerificationCode(false);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <ChangePasswordForm onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
      <VerificationCodePopup open={openVerificationCode} onClose={handleVerificationClose} />
    </>
  );
};

export default ChangePasswordPopup;
