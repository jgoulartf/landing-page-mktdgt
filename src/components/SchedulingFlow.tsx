"use client";
import React from 'react';
import { useScheduling } from '../contexts/SchedulingContext';
import { FormModal } from './FormModal';

export const SchedulingFlow: React.FC = () => {
  const { currentStep, setStep, setClientData } = useScheduling();

  const handleClientFormSubmit = (data: any) => {
    setClientData(data);
    setStep('scheduling');
  };

  const handleSchedulingComplete = () => {
    setStep('payment');
  };

  return (
    <>
      <FormModal />
      {currentStep === 'scheduling' && (
        <div data-cal-link="joao-goulart-l13h5f/30min" data-cal-config='{"theme":"dark"}'>
          {/* Agenda será renderizada aqui */}
        </div>
      )}
    </>
  );
};
