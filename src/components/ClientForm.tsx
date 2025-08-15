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
    <div className="max-w-md mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-800 text-center">Vamos começar?</h2>
      <p className="text-gray-500 text-center text-sm sm:text-base mb-4 sm:mb-6">Preencha os dados para agendar sua consultoria</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
          <input
            type="text"
            required
            placeholder="Ex: Maria Silva"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none text-sm sm:text-base"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp</label>
          <input
            type="tel"
            required
            placeholder="(00) 00000-0000"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none text-sm sm:text-base"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Seu melhor e-mail</label>
          <input
            type="email"
            required
            placeholder="seu@email.com"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none text-sm sm:text-base"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Instagram</label>
          <div className="relative">
            <span className="absolute left-3 sm:left-4 top-2 sm:top-3 text-gray-400 text-sm sm:text-base">@</span>
            <input
              type="text"
              required
              placeholder="seu.perfil"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 pl-7 sm:pl-8 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none text-sm sm:text-base"
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Tamanho da Equipe</label>
          <input
            type="number"
            required
            min="1"
            placeholder="Nº colaboradores"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none text-sm sm:text-base"
            value={formData.teamSize}
            onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Faturamento Mensal</label>
          <select
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition duration-200 outline-none appearance-none bg-white text-sm sm:text-base"
            value={formData.revenue}
            onChange={(e) => setFormData({...formData, revenue: e.target.value})}
          >
            <option value="">Selecione</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <input
            type="checkbox"
            id="isOwner"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            checked={formData.isOwner}
            onChange={(e) => setFormData({...formData, isOwner: e.target.checked})}
          />
          <label htmlFor="isOwner" className="ml-2 text-sm text-gray-700">
            Sou dono(a) do negócio
          </label>
        </div>

        <button
          type="submit"
          data-cal-link="joao-goulart-l13h5f/30min" data-cal-config='{"theme":"dark"}'
          className="w-full bg-primary text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition duration-200 transform hover:scale-[1.02] text-sm sm:text-base"
        >
          Agendar Consultoria
        </button>
      </form>
    </div>
  );
};
