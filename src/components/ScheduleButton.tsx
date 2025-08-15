"use client";
import React from 'react';
import { useScheduling } from '../contexts/SchedulingContext';

interface ScheduleButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const ScheduleButton: React.FC<ScheduleButtonProps> = ({ className, children }) => {
  const { openForm } = useScheduling();

  const handleClick = () => {
    openForm();
  };

  return (
    <button 
      onClick={handleClick}
      
      className={className}
    >
      {children || 'Garantir Minha Vaga'}
    </button>
  );
};
