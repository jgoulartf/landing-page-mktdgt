import React, { useState } from 'react';
import { ClientForm, ClientData } from './ClientForm';
// ...existing imports...

export const Scheduler: React.FC = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [clientData, setClientData] = useState<ClientData | null>(null);

  const handleClientFormSubmit = (data: ClientData) => {
    setClientData(data);
    setShowScheduler(true);
  };

  return (
    <div>
      {!showScheduler ? (
        <ClientForm onSubmit={handleClientFormSubmit} />
      ) : (
        <div>
          {/* Seu componente de agenda existente aqui */}
          {/* Você pode usar clientData para acessar os dados do cliente */}
        </div>
      )}
    </div>
  );
};
