import React, { useState } from 'react';
import { useScheduling } from '../contexts/SchedulingContext';

interface ClientFormProps {
  onSubmit: (data: ClientData) => void;
}

export interface ClientData {
  fullName: string;
  whatsapp: string;
  email: string;
  instagram: string;
  teamSize: string;
  isOwner: boolean;
  revenue: string; // Novo campo para faturamento
}

const revenueRanges = [
  'Até R$ 5.000',
  'R$ 5.001 a R$ 10.000',
  'R$ 10.001 a R$ 20.000',
  'R$ 20.001 a R$ 50.000',
  'R$ 50.001 a R$ 100.000',
  'Mais de R$ 100.000'
];

export const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const { setStep, setClientData, closeForm } = useScheduling();
  
  const [formData, setFormData] = useState<ClientData>({
    fullName: '',
    whatsapp: '',
    email: '',
    instagram: '',
    teamSize: '',
    isOwner: false,
    revenue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClientData(formData);
    closeForm();
    setStep('scheduling');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Dados para Agendamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
            <input
              type="tel"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Instagram</label>
            <input
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tamanho da Equipe</label>
            <input
              type="number"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.teamSize}
              onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Faturamento Mensal Médio
            </label>
            <select
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.revenue}
              onChange={(e) => setFormData({...formData, revenue: e.target.value})}
            >
              <option value="">Selecione uma faixa</option>
              {revenueRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600"
              checked={formData.isOwner}
              onChange={(e) => setFormData({...formData, isOwner: e.target.checked})}
            />
            <label className="ml-2 text-sm text-gray-700">Sou dono(a) do negócio</label>
          </div>

          <button
            type="submit"
            data-cal-link="joao-goulart-l13h5f/30min" data-cal-config='{"theme":"dark"}'
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Continuar para Agenda
          </button>
        </div>
      </form>
    </div>
  );
};
