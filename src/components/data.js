import {
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  AcademicCapIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

// Lembre-se de colocar as imagens na pasta /public/img/
import benefitOneImg from "../../public/img/ensaio/1/DSC_0038.jpg";
import authorityImg from "../../public/img/ensaio/1/DSC_0244.jpg"; // Imagem para a seção de autoridade

const benefitOne = {
  title: "O método para se tornar uma autoridade médica no digital",
  desc: "Atraia os pacientes que valorizam seu trabalho e conquiste a liberdade profissional que você merece com um posicionamento ético e estratégico.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Posicionamento como Autoridade",
      desc: "Deixe de ser apenas mais um e torne-se a referência na sua especialidade, construindo uma marca pessoal forte e respeitada.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Marketing Ético e Eficaz",
      desc: "Divulgue seu trabalho de forma profissional, seguindo as normas do CFM, para atrair o perfil de paciente ideal para o seu consultório.",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Gestão Inteligente do Negócio",
      desc: "Tenha clareza dos números e estratégias que realmente trazem retorno, transformando seu consultório em um negócio lucrativo.",
      icon: <ChartBarIcon />,
    },
  ],
};

// Repare que usamos a mesma estrutura do "Benefits" para a seção de Autoridade
const benefitTwo = {
  title: "Quem vai te guiar nessa jornada",
  desc: "Estrategista de Marketing com foco exclusivo na área da saúde. Minha missão é ajudar médicos a construírem negócios sólidos e éticos no ambiente digital, valorizando o que eles têm de mais precioso: o conhecimento e a autoridade.",
  image: authorityImg,
  bullets: [
    {
      title: "Especialista na Área da Saúde",
      desc: "Metodologia desenvolvida pensando nas particularidades e restrições éticas da medicina.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Foco em Resultados Reais",
      desc: "Estratégias voltadas para o que importa: mais pacientes qualificados e maior faturamento.",
      icon: <SparklesIcon />,
    },
    {
      title: "Dezenas de Médicos Atendidos",
      desc: "Experiência validada com profissionais de diversas especialidades em todo o Brasil.",
      icon: <CheckBadgeIcon />,
    },
  ],
};
// ... (no final do arquivo, adicione)

const packagesData = [
  {
    name: "Consultoria Express",
    price: "R$ 497",
    priceId: "price_xxxxxxxxxxxxxx1", // SUBSTITUA PELO SEU ID DO STRIPE
    features: [
      "1 Encontro online de 90 min",
      "Diagnóstico e Plano de Ação",
      "Ideal para tirar dúvidas pontuais",
    ],
  },
  {
    name: "Mentoria Individual",
    price: "R$ 1.997",
    priceId: "price_xxxxxxxxxxxxxx2", // SUBSTITUA PELO SEU ID DO STRIPE
    isFeatured: true, // Para destacar o pacote principal
    features: [
      "4 Encontros online",
      "Acompanhamento via WhatsApp",
      "Planejamento estratégico completo",
      "Foco em posicionamento de autoridade",
    ],
  },
  {
    name: "Gestão Completa",
    price: "Sob consulta",
    priceId: null, // Sem ID, pois é sob consulta
    features: [
      "Todo o plano de Mentoria",
      "Execução da estratégia pela nossa equipe",
      "Relatórios mensais de desempenho",
    ],
  },
];


export { benefitOne, benefitTwo, packagesData }; // Adicione packagesData aqui