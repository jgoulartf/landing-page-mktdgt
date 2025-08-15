"use client";

import React, { createContext, useContext, useState } from 'react';
import { ClientData } from '../components/ClientForm';

type SchedulingStep = 'initial' | 'form' | 'scheduling' | 'payment';

interface SchedulingContextType {
  currentStep: SchedulingStep;
  clientData: ClientData | null;
  isFormOpen: boolean;
  setStep: (step: SchedulingStep) => void;
  setClientData: (data: ClientData) => void;
  openForm: () => void;
  closeForm: () => void;
}

const SchedulingContext = createContext<SchedulingContextType | undefined>(undefined);

export const SchedulingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<SchedulingStep>('initial');
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <SchedulingContext.Provider
      value={{
        currentStep,
        clientData,
        isFormOpen,
        setStep: setCurrentStep,
        setClientData,
        openForm,
        closeForm,
      }}
    >
      {children}
    </SchedulingContext.Provider>
  );
};

export const useScheduling = () => {
  const context = useContext(SchedulingContext);
  if (!context) {
    throw new Error('useScheduling must be used within a SchedulingProvider');
  }
  return context;
};
