"use client";
import { useScheduling } from '../contexts/SchedulingContext';
import { ClientForm } from './ClientForm';

export const FormModal = () => {
  const { isFormOpen, closeForm } = useScheduling();

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-md w-full p-6">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Fechar</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ClientForm />
      </div>
    </div>
  );
};
