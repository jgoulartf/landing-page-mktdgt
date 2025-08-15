// components/CalEmbed.tsx (usando .tsx por boa prática com TypeScript)
'use client'; 

import { useEffect } from 'react';

// Definindo uma interface para o link do Cal.com
interface CalEmbedProps {
  calLink: string;
}

const CalEmbed = ({ calLink }: CalEmbedProps) => {
  //useEffect(() => {
  //  // Esta função adiciona configurações de UI à fila do Cal.com.
  //  // O script principal, quando carregar, irá processar esta fila.
  //  // Isso evita chamar funções que talvez ainda não existam.
  //  (window.cal = window.cal || function (...args) {
  //    (window.cal.q = window.cal.q || []).push(args);
  //  })(
  //    'ui', {
  //      'theme': 'light',
  //      'styles': {
  //        'branding': { 'brandColor': '#000000' }
  //      },
  //      'hideEventTypeDetails': false
  //    }
  //  );
  //}, []); // Roda apenas uma vez quando o componente é montado

  return (
    // O script do Cal.com encontrará este elemento pelo atributo data-cal-link
    // e renderizará o componente de agendamento aqui.
    <div
      data-cal-link={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
};


export default CalEmbed;