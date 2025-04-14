import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import VerificationCodeForm from '../forms/VerificationCodeForm';

interface VerificationCodePopupProps {
  open: boolean;
  onClose: () => void;
}

const VerificationCodePopup: React.FC<VerificationCodePopupProps> = ({
  open,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>{t('Enter Verification Code')}</DialogTitle>
      <DialogContent>
        <VerificationCodeForm
          onSubmit={(data) => {
            console.log('Verification code entered:', data.verificationCode);
            onClose();
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default VerificationCodePopup;
