'use client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import QRCode from 'qrcode.react';

interface SonarQRModalProps {
  uri: string;
  onClose: () => void;
}

const SonarQRModalContent: React.FC<SonarQRModalProps> = ({ uri, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect to Sonar Wallet</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <QRCode value={uri} size={256} />
        </div>
        <p className="text-center mt-4">Scan this QR code with your Sonar mobile app to connect</p>
      </DialogContent>
    </Dialog>
  );
};

export const SonarQRModal = {
  show: (uri: string, onClose: () => void): ((useCallback: boolean) => void) => {
    const modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);

    const root = ReactDOM.createRoot(modalContainer);

    const hideModal = (useCallback: boolean = true) => {
      root.unmount();
      document.body.removeChild(modalContainer);
      if (useCallback) {
        onClose();
      }
    };

    root.render(
      <React.StrictMode>
        <SonarQRModalContent 
          uri={uri} 
          onClose={hideModal}
        />
      </React.StrictMode>
    );

    return hideModal;
  }
};