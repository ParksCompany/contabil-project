export interface ServiceField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'number';
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
  }
  
  export interface Service {
    id: string;
    slug: string;
    nome: string;
    setorId: string;
    setorNome: string;
    descricaoCurta: string;
    descricaoDetalhada: string;
    prazoEstimado: string;
    icon: string;
    campos: ServiceField[];
  }
  
  export const FIELD_DEFINITIONS: Record<string, ServiceField> = {
    nomeCliente: {
      name: 'nomeCliente',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome completo',
      required: true,
    },
    cpfCnpj: {
      name: 'cpfCnpj',
      label: 'CPF ou CNPJ',
      type: 'text',
      placeholder: '000.000.000-00 ou 00.000.000/0001-00',
      required: true,
    },
    email: {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'seu@email.com',
      required: true,
    },
    telefone: {
      name: 'telefone',
      label: 'Telefone',
      type: 'tel',
      placeholder: '(00) 00000-0000',
      required: true,
    },
    dadosEmpresa: {
      name: 'dadosEmpresa',
      label: 'Dados da Empresa',
      type: 'textarea',
      placeholder: 'Descreva os dados da sua empresa (razão social, endereço, atividade, etc.)',
      required: false,
    },
    periodo: {
      name: 'periodo',
      label: 'Período de Referência',
      type: 'text',
      placeholder: 'Ex: Janeiro/2024 ou 2023',
      required: false,
    },
    qtdFuncionarios: {
      name: 'qtdFuncionarios',
      label: 'Quantidade de Funcionários',
      type: 'number',
      placeholder: '0',
      required: false,
    },
    tipoCertidao: {
      name: 'tipoCertidao',
      label: 'Tipo de Certidão',
      type: 'select',
      required: true,
      options: [
        { value: 'federal', label: 'Certidão Negativa Federal' },
        { value: 'estadual', label: 'Certidão Negativa Estadual' },
        { value: 'municipal', label: 'Certidão Negativa Municipal' },
        { value: 'fgts', label: 'Certidão de Regularidade do FGTS' },
        { value: 'inss', label: 'Certidão Negativa de Débitos (INSS)' },
      ],
    },
    descricaoLivre: {
      name: 'descricaoLivre',
      label: 'Observações Adicionais',
      type: 'textarea',
      placeholder: 'Descreva detalhes adicionais sobre sua solicitação...',
      required: false,
    },
  };
  
  export const SERVICES: Service[] = [
    {
      id: 'abertura-empresa',
      slug: 'abertura-empresa',
      nome: 'Abertura de Empresa',
      setorId: 'societario',
      setorNome: 'Societário',
      descricaoCurta: 'Constituição completa do seu negócio com toda documentação necessária.',
      descricaoDetalhada: 'Realizamos todo o processo de abertura da sua empresa, desde a elaboração do contrato social até o registro nos órgãos competentes. Inclui análise de viabilidade, definição do melhor regime tributário e obtenção de alvarás.',
      prazoEstimado: '5 a 10 dias úteis',
      icon: 'Building2',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.dadosEmpresa,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'alteracao-contratual',
      slug: 'alteracao-contratual',
      nome: 'Alteração Contratual',
      setorId: 'societario',
      setorNome: 'Societário',
      descricaoCurta: 'Modificações no contrato social da sua empresa.',
      descricaoDetalhada: 'Realizamos alterações contratuais como mudança de endereço, inclusão/exclusão de sócios, alteração de capital social, mudança de objeto social e outras modificações necessárias.',
      prazoEstimado: '3 a 7 dias úteis',
      icon: 'FileEdit',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.dadosEmpresa,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'encerramento-empresa',
      slug: 'encerramento-empresa',
      nome: 'Encerramento de Empresa',
      setorId: 'societario',
      setorNome: 'Societário',
      descricaoCurta: 'Baixa completa da empresa em todos os órgãos.',
      descricaoDetalhada: 'Cuidamos de todo o processo de encerramento da empresa, incluindo baixa na Junta Comercial, Receita Federal, prefeitura e demais órgãos. Realizamos também a apuração de débitos pendentes.',
      prazoEstimado: '15 a 30 dias úteis',
      icon: 'XCircle',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.dadosEmpresa,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'folha-pagamento',
      slug: 'folha-pagamento',
      nome: 'Folha de Pagamento',
      setorId: 'pessoal',
      setorNome: 'Departamento Pessoal',
      descricaoCurta: 'Processamento completo da folha de pagamento mensal.',
      descricaoDetalhada: 'Elaboração da folha de pagamento, cálculo de encargos sociais, geração de guias de recolhimento (INSS, FGTS, IRRF), emissão de contracheques e relatórios gerenciais.',
      prazoEstimado: '2 a 3 dias úteis',
      icon: 'Receipt',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.periodo,
        FIELD_DEFINITIONS.qtdFuncionarios,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'admissao-funcionario',
      slug: 'admissao-funcionario',
      nome: 'Admissão de Funcionário',
      setorId: 'pessoal',
      setorNome: 'Departamento Pessoal',
      descricaoCurta: 'Registro e documentação para contratação de colaboradores.',
      descricaoDetalhada: 'Realizamos todo o processo de admissão, incluindo registro em CTPS, contrato de trabalho, cadastro no eSocial, exame admissional e demais obrigações legais.',
      prazoEstimado: '1 a 2 dias úteis',
      icon: 'UserPlus',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'rescisao-contrato',
      slug: 'rescisao-contrato',
      nome: 'Rescisão de Contrato',
      setorId: 'pessoal',
      setorNome: 'Departamento Pessoal',
      descricaoCurta: 'Cálculo e processamento de rescisões trabalhistas.',
      descricaoDetalhada: 'Elaboração de rescisão contratual com cálculo de verbas rescisórias, aviso prévio, férias proporcionais, 13º salário e demais direitos. Homologação quando necessário.',
      prazoEstimado: '2 a 5 dias úteis',
      icon: 'UserMinus',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'declaracao-irpf',
      slug: 'declaracao-irpf',
      nome: 'Declaração IRPF',
      setorId: 'fiscal',
      setorNome: 'Departamento Fiscal',
      descricaoCurta: 'Elaboração da declaração de Imposto de Renda Pessoa Física.',
      descricaoDetalhada: 'Análise completa dos rendimentos, deduções legais, bens e direitos. Elaboração e transmissão da declaração de IRPF com acompanhamento até a restituição.',
      prazoEstimado: '3 a 5 dias úteis',
      icon: 'FileText',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.periodo,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'certidoes-negativas',
      slug: 'certidoes-negativas',
      nome: 'Certidões Negativas',
      setorId: 'fiscal',
      setorNome: 'Departamento Fiscal',
      descricaoCurta: 'Emissão de certidões de regularidade fiscal.',
      descricaoDetalhada: 'Solicitação e acompanhamento de certidões negativas de débitos federais, estaduais, municipais, FGTS e trabalhistas para sua empresa ou pessoa física.',
      prazoEstimado: '1 a 3 dias úteis',
      icon: 'BadgeCheck',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.tipoCertidao,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'planejamento-tributario',
      slug: 'planejamento-tributario',
      nome: 'Planejamento Tributário',
      setorId: 'fiscal',
      setorNome: 'Departamento Fiscal',
      descricaoCurta: 'Análise e otimização da carga tributária.',
      descricaoDetalhada: 'Estudo completo do regime tributário atual, simulações de enquadramento e estratégias legais para redução da carga tributária da sua empresa.',
      prazoEstimado: '5 a 10 dias úteis',
      icon: 'TrendingDown',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.dadosEmpresa,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
    {
      id: 'balanco-patrimonial',
      slug: 'balanco-patrimonial',
      nome: 'Balanço Patrimonial',
      setorId: 'contabil',
      setorNome: 'Departamento Contábil',
      descricaoCurta: 'Elaboração de balanço e demonstrações contábeis.',
      descricaoDetalhada: 'Elaboração de balanço patrimonial, DRE, fluxo de caixa e demais demonstrações contábeis conforme normas brasileiras de contabilidade.',
      prazoEstimado: '5 a 10 dias úteis',
      icon: 'BarChart3',
      campos: [
        FIELD_DEFINITIONS.nomeCliente,
        FIELD_DEFINITIONS.cpfCnpj,
        FIELD_DEFINITIONS.email,
        FIELD_DEFINITIONS.telefone,
        FIELD_DEFINITIONS.periodo,
        FIELD_DEFINITIONS.descricaoLivre,
      ],
    },
  ];
  
  export const SECTORS = [
    { id: 'societario', name: 'Societário', email: 'societario@contabilidademodelo.com.br' },
    { id: 'pessoal', name: 'Departamento Pessoal', email: 'dp@contabilidademodelo.com.br' },
    { id: 'fiscal', name: 'Departamento Fiscal', email: 'fiscal@contabilidademodelo.com.br' },
    { id: 'contabil', name: 'Departamento Contábil', email: 'contabil@contabilidademodelo.com.br' },
  ];
  
  export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES.find(service => service.slug === slug);
  }
  
  export function getServicesBySector(sectorId: string): Service[] {
    return SERVICES.filter(service => service.setorId === sectorId);
  }
  