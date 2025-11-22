
import { Grade } from './types';

export const curriculumData: Grade[] = [
  {
    id: 1,
    title: "1ª Série",
    description: "Introdução à Filosofia: Pensamento Crítico e Conceitos Básicos",
    color: "bg-blue-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: A Origem da Filosofia e os Pré-Socráticos",
        lessons: [
          {
            id: "1-1-1",
            title: "Aula 1: O que é Filosofia?",
            objectives: ["Definir o conceito de Filosofia", "Compreender as características do pensamento filosófico", "Identificar a diferença entre filosofia e outras formas de conhecimento"],
            theory: `A palavra "filosofia" vem do grego "philosophia", que significa "amor à sabedoria" (philos = amor, sophia = sabedoria). Foi criada por Pitágoras.

Características do pensamento filosófico:
- Questionamento radical: A filosofia questiona tudo, inclusive aquilo que parece óbvio.
- Busca pela fundamentação: Procura as razões últimas das coisas.
- Universalidade: Busca princípios válidos para todos.
- Racionalidade: Usa a razão como instrumento principal.
- Criticidade: Examina criticamente todas as afirmações.

Diferenças entre filosofia e outras formas de conhecimento:
- Filosofia x Senso comum: A filosofia questiona o que o senso comum aceita sem reflexão.
- Filosofia x Ciência: A ciência estuda aspectos específicos da realidade; a filosofia busca uma visão global.
- Filosofia x Religião: A religião se baseia na fé; a filosofia na razão.`,
            methodology: "Dinâmica inicial, exposição dialogada e análise de situações cotidianas.",
            activities: [
              { id: "act1", title: "Questionário Filosófico", description: "Responda de forma reflexiva:", questions: ["Por que existimos?", "O que é a felicidade?", "Como sabemos que algo é verdadeiro?", "O que é justo?", "Qual o sentido da vida?"] },
              { id: "act2", title: "Filosofia no Cotidiano", description: "Identifique situações do seu dia a dia em que você faz perguntas filosóficas sem perceber.", questions: ["Descreva a situação e a pergunta:"] }
            ],
            reflectionQuestions: ["Você se considera uma pessoa que questiona as coisas ou aceita tudo sem pensar?", "Qual a importância de questionar aquilo que parece óbvio?", "Como a filosofia pode ajudar na sua vida pessoal?"]
          },
          {
            id: "1-1-2",
            title: "Aula 2: Do Mito ao Logos",
            objectives: ["Compreender o pensamento mítico", "Analisar a transição do mito para o logos", "Identificar as condições históricas do surgimento da filosofia"],
            theory: `O Pensamento Mítico: Os mitos eram as primeiras explicações sobre a origem e funcionamento do mundo, baseados em narrativas sagradas, explicações sobrenaturais e tradição oral.

A Transição para o Logos: "Logos" significa razão, palavra, explicação racional. Aconteceu na Grécia (séc. VII-VI a.C.) devido a fatores como o comércio, vida urbana, escrita e democracia.

Características do pensamento racional:
- Explicações naturais: Causas naturais para fenômenos.
- Argumentação: Ideias justificadas com razões.
- Questionamento: Tudo pode ser revisado.
- Universalidade: Explicações valem para todos.`,
            methodology: "Comparação entre explicação mítica e racional.",
            activities: [
              { id: "act1", title: "Comparando Explicações", description: "Dê uma explicação mítica e uma racional para um Eclipse.", questions: ["Explicação Mítica:", "Explicação Racional:"] },
              { id: "act2", title: "Mitos Modernos", description: "Identifique 'mitos modernos' (crenças aceitas sem questionamento) em nossa sociedade.", questions: ["Exemplo de mito moderno:"] }
            ],
            reflectionQuestions: ["Por que os seres humanos criaram mitos?", "O pensamento mítico desapareceu completamente da nossa sociedade?"]
          },
          {
            id: "1-1-3",
            title: "Aula 3: Tales de Mileto",
            objectives: ["Conhecer Tales de Mileto", "Compreender a busca pela Arché"],
            theory: `Tales de Mileto (624-546 a.C.) é considerado o primeiro filósofo. Ele abandonou explicações míticas e buscou um princípio natural (arché) para todas as coisas.

A Teoria de Tales: A Água como Arché.
Suas razões:
- A água está presente em todos os seres vivos.
- A Terra flutua sobre a água.
- A água assume diferentes estados (sólido, líquido, gasoso).
- Sem água, não há vida.

Tales inaugurou o naturalismo e o racionalismo na explicação do mundo.`,
            methodology: "Análise da teoria e método de Tales.",
            activities: [
              { id: "act1", title: "Investigando como Tales", description: "Se você fosse Tales, como explicaria por que as plantas crescem usando apenas a água?", questions: ["Sua explicação:"] },
              { id: "act2", title: "Tales Hoje", description: "Se Tales vivesse hoje, que elemento ele escolheria como princípio de tudo? (Ex: energia, átomos...)", questions: ["Elemento escolhido e justificativa:"] }
            ],
            reflectionQuestions: ["Por que a busca por um princípio único é importante?", "Tales estava certo ao escolher a água? Por que isso não importa tanto quanto o método?"]
          },
          {
            id: "1-1-4",
            title: "Aula 4: Anaximandro",
            objectives: ["Conhecer Anaximandro e sua crítica a Tales", "Compreender o conceito de ápeiron"],
            theory: `Anaximandro de Mileto (610-546 a.C.) foi discípulo de Tales e o primeiro a criticar seu mestre.
Crítica a Tales: A água não pode ser o princípio de tudo porque é oposta ao fogo.

Teoria do Ápeiron: O princípio é o ápeiron (infinito/indeterminado).
Características: Infinito, indeterminado (sem qualidades definidas), eterno e divino. Dele surgem os opostos (quente/frio) que formam o mundo.`,
            methodology: "Dinâmica sobre opostos e apresentação do ápeiron.",
            activities: [
              { id: "act1", title: "Identificando Opostos", description: "Liste pares de opostos que você observa na natureza e na vida.", questions: ["Pares de opostos:"] },
              { id: "act2", title: "O Ápeiron Hoje", description: "Se você fosse criar uma teoria hoje, que princípio 'indeterminado' escolheria?", questions: ["Seu princípio:"] }
            ],
            reflectionQuestions: ["Por que é importante que os filósofos critiquem uns aos outros?", "Como a crítica de Anaximandro mostra a evolução do pensamento?"]
          },
          {
            id: "1-1-5",
            title: "Aula 5: Heráclito",
            objectives: ["Conhecer a filosofia do devir", "Compreender o Logos"],
            theory: `Heráclito de Éfeso: "Tudo flui".
Conceitos:
1. Devir: Mudança constante. "Não se pode entrar duas vezes no mesmo rio".
2. Unidade dos Opostos: O caminho para cima e para baixo é o mesmo.
3. Logos: Razão universal que governa a mudança.
4. Fogo: Símbolo da transformação constante.`,
            methodology: "Análise dos fragmentos de Heráclito.",
            activities: [
              { id: "act1", title: "Mudanças na Vida", description: "Como você mudou nos últimos 5 anos? O que permaneceu igual?", questions: ["Mudanças:", "Permanências:"] },
              { id: "act2", title: "Heráclito e Redes Sociais", description: "Como Heráclito analisaria as redes sociais (mudança constante, opostos)?", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Se tudo muda, existe algo permanente em nós?", "Por que Heráclito considera o conflito algo positivo?"]
          },
          {
            id: "1-1-6",
            title: "Aula 6: Parmênides",
            objectives: ["Filosofia do Ser", "Oposição a Heráclito"],
            theory: `Parmênides de Eléia: Oposto de Heráclito.
Caminho da Verdade: "O ser é e não pode não ser". O ser é uno, eterno, imutável e imóvel.
Caminho da Opinião: O mundo dos sentidos, mudança e multiplicidade é ilusão.
Princípio da Não-Contradição: Uma coisa não pode ser e não ser ao mesmo tempo.`,
            methodology: "Debate Heráclito vs Parmênides.",
            activities: [
              { id: "act1", title: "Razão vs Sentidos", description: "Dê um exemplo onde seus sentidos te enganam (ex: ilusão de ótica) e a razão corrige.", questions: ["Exemplo:"] },
              { id: "act2", title: "O Grande Debate", description: "Quem você acha que tem razão: Heráclito (tudo muda) ou Parmênides (algo permanece)?", questions: ["Sua opinião:"] }
            ],
            reflectionQuestions: ["Em quem devemos confiar mais: na razão ou nos sentidos?", "É possível que o movimento seja uma ilusão?"]
          },
          {
            id: "1-1-7",
            title: "Aula 7: Empédocles e Anaxágoras",
            objectives: ["Tentativas de síntese", "4 Elementos e Sementes"],
            theory: `Tentativas de conciliar Heráclito (mudança) e Parmênides (permanência).
Empédocles: 4 elementos eternos (Terra, Água, Ar, Fogo) misturados por Amor (união) e Ódio (separação).
Anaxágoras: Infinitas "sementes" (spérmata) organizadas por uma inteligência cósmica (Nous).`,
            methodology: "Comparação das teorias pluralistas.",
            activities: [
              { id: "act1", title: "Amor e Ódio na Sociedade", description: "Identifique forças de 'Amor' (união) e 'Ódio' (separação) na sociedade atual.", questions: ["Forças de União:", "Forças de Separação:"] },
              { id: "act2", title: "O Nous Moderno", description: "Compare o Nous (inteligência ordenadora) com conceitos modernos (ex: algoritmos, leis da física).", questions: ["Comparação:"] }
            ],
            reflectionQuestions: ["Qual teoria explica melhor a realidade: 4 elementos ou sementes infinitas?", "É necessário um princípio inteligente para organizar o universo?"]
          },
          {
            id: "1-1-8",
            title: "Aula 8: Demócrito e o Atomismo",
            objectives: ["Teoria atomista", "Conceitos de átomo e vazio"],
            theory: `Demócrito de Abdera: Tudo é composto de Átomos e Vazio.
Átomos: Partículas indivisíveis, eternas, infinitas e em movimento.
Princípios: Nada surge do nada. Tudo é rearranjo de átomos.
Determinismo: Tudo tem uma causa, não há acaso.
Diferença moderna: Hoje sabemos que átomos são divisíveis e energia causa movimento.`,
            methodology: "Experiência mental sobre divisibilidade.",
            activities: [
              { id: "act1", title: "Pensando como Demócrito", description: "Explique o cheiro do perfume usando a teoria dos átomos (partículas se soltando).", questions: ["Explicação:"] },
              { id: "act2", title: "Atomismo e Tecnologia", description: "Relacione a teoria de Demócrito com a nanotecnologia ou o mundo digital (bits).", questions: ["Relação:"] }
            ],
            reflectionQuestions: ["Se somos feitos de átomos, o que nos torna únicos?", "O determinismo elimina a liberdade?"]
          },
          {
            id: "1-1-9",
            title: "Aula 9: Síntese Bimestral",
            objectives: ["Revisão dos Pré-Socráticos", "Comparação de teorias"],
            theory: `Recapitulação do caminho do Mito ao Logos e das principais teorias:
- Monistas: Tales (Água), Anaximandro (Ápeiron), Heráclito (Fogo/Devir), Parmênides (Ser).
- Pluralistas: Empédocles (4 Elementos), Anaxágoras (Sementes/Nous).
- Atomistas: Demócrito (Átomos).
Legado: Fundação da filosofia e ciência ocidental.`,
            methodology: "Quadro comparativo e revisão.",
            activities: [
              { id: "act1", title: "Tribunal Filosófico", description: "Escolha um filósofo para defender. Por que a teoria dele é a melhor?", questions: ["Defesa:"] },
              { id: "act2", title: "Pré-Socráticos Hoje", description: "Se eles vivessem hoje, que profissões teriam?", questions: ["Tales:", "Heráclito:", "Demócrito:"] }
            ],
            reflectionQuestions: ["Qual filósofo mais influenciou sua forma de pensar?", "Como a filosofia antiga ajuda hoje?"]
          }
        ]
      },
      {
        id: 2,
        title: "2º Bimestre: Sócrates, Platão e Aristóteles",
        lessons: [
          {
            id: "1-2-10",
            title: "Aula 10: Sócrates: o filósofo da vida",
            objectives: ["Conhecer Sócrates", "Método Socrático"],
            theory: `Sócrates (470-399 a.C.): Fundador da filosofia moral. "Só sei que nada sei".
Método Socrático:
1. Ironia: Questionar para expor ignorância.
2. Maiêutica: Parto das ideias (ajudar o outro a descobrir a verdade).
Ensinamentos: Conhece-te a ti mesmo; Cuidado da alma; Ninguém faz o mal voluntariamente (ignorância).`,
            methodology: "Prática da Maiêutica.",
            activities: [
              { id: "act1", title: "Autoconhecimento", description: "Responda honestamente: O que você mais valoriza na vida? Quais seus maiores medos?", questions: ["Respostas:"] },
              { id: "act2", title: "Questionando o Óbvio", description: "Aplique o método socrático à frase: 'Dinheiro traz felicidade'. Que perguntas você faria?", questions: ["Perguntas:"] }
            ],
            reflectionQuestions: ["Por que é difícil conhecer a si mesmo?", "Você concorda que quem faz o mal é por ignorância?"]
          },
          {
            id: "1-2-11",
            title: "Aula 11: Platão: o mundo das ideias",
            objectives: ["Teoria das Ideias", "Alegoria da Caverna"],
            theory: `Platão: Discípulo de Sócrates.
Teoria das Ideias:
- Mundo Sensível: Aparências, mutável, imperfeito (sombras).
- Mundo Inteligível: Ideias perfeitas, eternas, verdadeiras.
Alegoria da Caverna: O filósofo se liberta das sombras (ilusões) para ver o Sol (Verdade/Bem) e volta para libertar os outros.`,
            methodology: "Análise da Alegoria da Caverna.",
            activities: [
              { id: "act1", title: "Identificando Ideias", description: "Pense em um objeto (ex: cadeira). Qual seria a 'Ideia perfeita' dele vs. a cadeira real?", questions: ["Comparação:"] },
              { id: "act2", title: "Interpretando a Caverna", description: "O que são as 'cavernas' e 'sombras' hoje (ex: redes sociais, fake news)?", questions: ["Interpretação:"] }
            ],
            reflectionQuestions: ["Existem verdades absolutas?", "Você já teve uma experiência de 'sair da caverna'?"]
          },
          {
            id: "1-2-12",
            title: "Aula 12: A República de Platão",
            objectives: ["Teoria Política", "Justiça na Alma e no Estado"],
            theory: `A República: Estado ideal governado pela razão.
Três Classes (e partes da alma):
1. Governantes/Filósofos (Razão): Sabedoria.
2. Guardiões (Ânimo): Coragem.
3. Produtores (Apetites): Temperança.
Justiça: Cada um cumprir sua função e a razão governar. Crítica à democracia ateniense.`,
            methodology: "Debate sobre sistemas políticos.",
            activities: [
              { id: "act1", title: "Justiça Pessoal", description: "Na sua 'república interior', a razão governa seus apetites? Dê um exemplo.", questions: ["Reflexão:"] },
              { id: "act2", title: "O Filósofo-Rei Hoje", description: "Que qualidades um governante ideal deveria ter hoje?", questions: ["Qualidades:"] }
            ],
            reflectionQuestions: ["A proposta de Platão é utópica ou realizável?", "Como equilibrar liberdade e ordem?"]
          },
          {
            id: "1-2-13",
            title: "Aula 13: Aristóteles: A Filosofia prática",
            objectives: ["Crítica a Platão", "Ética e Eudaimonia"],
            theory: `Aristóteles: Discípulo crítico de Platão. Rejeita o Mundo das Ideias separado. A realidade está nas coisas individuais (substâncias).
Ética: O fim último é a Felicidade (Eudaimonia).
Felicidade é uma atividade da alma conforme a virtude.
Virtude: Excelência de caráter adquirida pelo hábito.`,
            methodology: "Análise do conceito de felicidade.",
            activities: [
              { id: "act1", title: "O que é ser feliz?", description: "Defina felicidade para você. Ela depende de bens materiais ou de virtude?", questions: ["Sua definição:"] }
            ],
            reflectionQuestions: ["A felicidade é um estado ou uma atividade?", "Podemos ser felizes sozinhos?"]
          },
          {
            id: "1-2-14",
            title: "Aula 14: Aristóteles: política e sociedade",
            objectives: ["O animal político", "Formas de governo"],
            theory: `"O homem é um animal político". Só nos realizamos em sociedade.
Finalidade do Estado: Promover a vida boa e a virtude.
Formas de Governo:
- Corretas (Bem comum): Monarquia, Aristocracia, Politeia.
- Corrompidas (Interesse próprio): Tirania, Oligarquia, Democracia (demagogia).
Justiça Distributiva: Dar a cada um conforme seu mérito.`,
            methodology: "Análise política contemporânea.",
            activities: [
              { id: "act1", title: "Classificando Governos", description: "Classifique um governo atual segundo as categorias de Aristóteles.", questions: ["Classificação:"] },
              { id: "act2", title: "Importância da Classe Média", description: "Por que Aristóteles valoriza a classe média para a estabilidade?", questions: ["Explicação:"] }
            ],
            reflectionQuestions: ["A política é natural ao ser humano?", "Qual o melhor sistema de governo?"]
          },
          {
            id: "1-2-15",
            title: "Aula 15: Lógica Aristotélica",
            objectives: ["Lógica como instrumento", "Silogismo"],
            theory: `Lógica (Organon): Ferramenta para o pensamento correto.
Termos, Proposições e Raciocínio.
Silogismo: Estrutura dedutiva (Premissa Maior + Menor -> Conclusão). Ex: Todo homem é mortal; Sócrates é homem; logo, Sócrates é mortal.
Princípio da Não-Contradição.`,
            methodology: "Exercícios de lógica.",
            activities: [
              { id: "act1", title: "Construindo Silogismos", description: "Crie um silogismo válido e um inválido.", questions: ["Válido:", "Inválido:"] },
              { id: "act2", title: "Lógica no Cotidiano", description: "Transforme um argumento comum em um silogismo.", questions: ["Argumento:"] }
            ],
            reflectionQuestions: ["Por que a lógica é importante?", "Como evitar falácias?"]
          },
          {
            id: "1-2-16",
            title: "Aula 16: Comparação entre Sócrates, Platão e Aristóteles",
            objectives: ["Síntese e comparação"],
            theory: `Comparação:
- Sócrates: Foco na alma, método de perguntas (Maiêutica).
- Platão: Idealismo, Dois Mundos, Utopia política.
- Aristóteles: Realismo, Um Mundo, Ciência, Ética do meio-termo.
Legados: Racionalismo, Lógica, Ética, Política.`,
            methodology: "Debate e quadro comparativo.",
            activities: [
              { id: "act1", title: "Tribunal Filosófico", description: "Em um debate sobre felicidade, qual dos três você defenderia?", questions: ["Defesa:"] },
              { id: "act2", title: "Aplicações Modernas", description: "Como cada um analisaria as 'Fake News'?", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Qual filósofo é mais relevante hoje?", "É possível conciliar as três visões?"]
          }
        ]
      },
      {
        id: 3,
        title: "3º Bimestre: Filosofia Medieval e Renascimento",
        lessons: [
          {
            id: "1-3-17",
            title: "Aula 17: O contexto da Filosofia medieval",
            objectives: ["Contexto histórico", "Fé e Razão"],
            theory: `Idade Média (séc. V-XV). Teocentrismo.
Desafio: Conciliar a Fé (Revelação cristã) com a Razão (Filosofia grega).
Períodos: Patrística (Pais da Igreja, Platão) e Escolástica (Universidades, Aristóteles).`,
            methodology: "Discussão sobre fé e razão.",
            activities: [
              { id: "act1", title: "Fé e Razão Hoje", description: "Identifique conflitos atuais entre fé e razão (ex: ciência vs religião).", questions: ["Exemplos:"] }
            ],
            reflectionQuestions: ["A fé precisa da razão? A razão precisa da fé?"]
          },
          {
            id: "1-3-18",
            title: "Aula 18: Santo Agostinho: Fé e Razão",
            objectives: ["Filosofia de Agostinho", "Interioridade"],
            theory: `Santo Agostinho (Patrística). Influência de Platão.
"Creio para compreender". A fé ilumina a razão.
Teoria da Iluminação: A verdade está dentro de nós, colocada por Deus.
O Tempo e o Mal (privação do bem).`,
            methodology: "Análise das Confissões.",
            activities: [
              { id: "act1", title: "Jornada Pessoal", description: "Como suas ideias mudaram ao longo do tempo? (Inspirado nas Confissões)", questions: ["Reflexão:"] },
              { id: "act2", title: "O Problema do Mal", description: "Se Deus é bom, por que o mal existe? Como Agostinho responde?", questions: ["Resposta:"] }
            ],
            reflectionQuestions: ["A verdade está no interior ou no exterior?"]
          },
          {
            id: "1-3-19",
            title: "Aula 19: Santo Tomás de Aquino: Razão e Fé em harmonia",
            objectives: ["Filosofia de Tomás de Aquino", "5 Vias"],
            theory: `Tomás de Aquino (Escolástica). Influência de Aristóteles.
Harmonia entre Fé e Razão: Caminhos distintos para a verdade.
5 Vias: Provas racionais da existência de Deus (ex: Primeiro Motor, Causa Eficiente).`,
            methodology: "Análise lógica das 5 vias.",
            activities: [
              { id: "act1", title: "Analisando as 5 Vias", description: "Escolha uma das vias e explique o raciocínio.", questions: ["Explicação:"] },
              { id: "act2", title: "Razão e Fé na Ciência", description: "Pesquise cientistas que conciliaram fé e razão.", questions: ["Exemplo:"] }
            ],
            reflectionQuestions: ["É possível provar a existência de Deus racionalmente?"]
          },
          {
            id: "1-3-20",
            title: "Aula 20: João Duns Escoto e Guilherme de Ockham",
            objectives: ["Crise da Escolástica", "Nominalismo"],
            theory: `Duns Escoto: Voluntarismo (vontade acima do intelecto).
Guilherme de Ockham: Nominalismo (universais são apenas nomes, só existem indivíduos).
Navalha de Ockham: A explicação mais simples é geralmente a correta. Separação Fé/Razão.`,
            methodology: "Aplicação da Navalha de Ockham.",
            activities: [
              { id: "act1", title: "Aplicando a Navalha", description: "Use a Navalha de Ockham para resolver um problema cotidiano ou explicação complexa.", questions: ["Aplicação:"] },
              { id: "act2", title: "Nominalismo Hoje", description: "Rótulos sociais (ex: 'Geração Z') são reais ou apenas nomes?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["A simplicidade é sempre o melhor caminho?"]
          },
          {
            id: "1-3-21",
            title: "Aula 21: Renascimento: transição para a modernidade",
            objectives: ["Humanismo", "Antropocentrismo"],
            theory: `Renascimento (séc. XIV-XVI). Transição para a Modernidade.
Mudanças: Do Teocentrismo para o Antropocentrismo (Homem no centro).
Humanismo: Valorização da dignidade humana, razão e experiência. Retorno aos clássicos.`,
            methodology: "Análise de arte e textos.",
            activities: [
              { id: "act1", title: "Visões de Mundo", description: "Compare a visão medieval e renascentista sobre o homem.", questions: ["Comparação:"] },
              { id: "act2", title: "Homem Renascentista Hoje", description: "O que seria um 'homem renascentista' (versátil, curioso) hoje?", questions: ["Descrição:"] }
            ],
            reflectionQuestions: ["O individualismo renascentista foi positivo?", "O que aprendemos com o Renascimento?"]
          },
          {
            id: "1-3-22",
            title: "Aula 22: A revolução científica",
            objectives: ["Novo método científico", "Mudança de paradigma"],
            theory: `Revolução Científica (séc. XVI-XVII).
Novidades: Método Experimental, Matematização da natureza, Mecanicismo.
Figuras: Copérnico (Heliocentrismo), Galileu, Kepler, Newton, Bacon (Saber é Poder).`,
            methodology: "Comparação de métodos.",
            activities: [
              { id: "act1", title: "Comparando Métodos", description: "Compare o método de Bacon (indutivo) e Descartes (dedutivo).", questions: ["Comparação:"] },
              { id: "act2", title: "Ciência e Sociedade", description: "Como a revolução científica mudou a vida das pessoas?", questions: ["Impactos:"] }
            ],
            reflectionQuestions: ["A ciência trouxe mais benefícios ou problemas?", "Como conciliar ciência e religião hoje?"]
          },
          {
            id: "1-3-23",
            title: "Aula 23: Síntese bimestral: medieval ao renascimento",
            objectives: ["Revisão e Conexão"],
            theory: `Evolução do pensamento: Da síntese fé-razão medieval à autonomia da razão no Renascimento.
Mudança na visão de homem, natureza e conhecimento.`,
            methodology: "Linha do tempo e debate.",
            activities: [
              { id: "act1", title: "Legados Permanentes", description: "O que herdamos da Idade Média e do Renascimento?", questions: ["Legados:"] }
            ],
            reflectionQuestions: ["Qual período contribuiu mais para o pensamento ocidental?"]
          }
        ]
      },
      {
        id: 4,
        title: "4º Bimestre: Filosofia Moderna e o Iluminismo",
        lessons: [
          {
            id: "1-4-24",
            title: "Aula 24: René Descartes: o fundador da Filosofia moderna",
            objectives: ["Racionalismo", "Cogito"],
            theory: `Descartes: Busca da certeza absoluta. Racionalismo.
Método da Dúvida: Duvidar de tudo (sentidos, sonhos, gênio maligno).
Cogito Ergo Sum: "Penso, logo existo" - a primeira verdade indubitável.
Dualismo: Res cogitans (mente) e Res extensa (corpo).`,
            methodology: "Exercício de dúvida metódica.",
            activities: [
              { id: "act1", title: "Praticando a Dúvida", description: "Aplique a dúvida a afirmações cotidianas (ex: 'Esta mesa existe'). O que resiste?", questions: ["Resultado:"] },
              { id: "act2", title: "Mente vs Corpo", description: "Como explicar a interação mente-corpo (ex: ficar vermelho de vergonha)?", questions: ["Explicação:"] }
            ],
            reflectionQuestions: ["É possível duvidar de tudo?", "O que define quem você é: sua mente ou seu corpo?"]
          },
          {
            id: "1-4-25",
            title: "Aula 25: John Locke: o empirismo inglês",
            objectives: ["Empirismo", "Tábula Rasa"],
            theory: `Locke: Crítica às ideias inatas de Descartes. Empirismo.
Mente como Tábula Rasa (papel em branco). Todo conhecimento vem da Experiência (Sensação e Reflexão).
Ideias simples e complexas. Qualidades primárias e secundárias.`,
            methodology: "Análise da origem das ideias.",
            activities: [
              { id: "act1", title: "Origem das Ideias", description: "Escolha uma ideia (ex: cor vermelha, justiça) e trace sua origem na experiência.", questions: ["Rastreamento:"] },
              { id: "act2", title: "Locke e a Educação", description: "Se a mente é tábula rasa, qual a importância do ambiente/educação?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["Nascemos sabendo algo?", "A experiência é suficiente para todo conhecimento?"]
          },
          {
            id: "1-4-26",
            title: "Aula 26: Thomas Hobbes: o contrato social",
            objectives: ["Estado de Natureza", "Absolutismo"],
            theory: `Hobbes: Contratualismo e Absolutismo.
Estado de Natureza: Guerra de todos contra todos. Vida "solitária, pobre, sórdida, brutal e breve".
Contrato Social: Renúncia à liberdade em troca de segurança.
O Leviatã: Estado absoluto e soberano.`,
            methodology: "Debate segurança vs liberdade.",
            activities: [
              { id: "act1", title: "Imaginando o Estado de Natureza", description: "Como seria sua cidade sem leis ou governo?", questions: ["Descrição:"] },
              { id: "act2", title: "Vantagens do Contrato", description: "Vale a pena trocar liberdade total por segurança?", questions: ["Opinião:"] }
            ],
            reflectionQuestions: ["O ser humano é naturalmente egoísta?", "Quando é legítimo resistir ao governo?"]
          },
          {
            id: "1-4-27",
            title: "Aula 27: John Locke: liberalismo político",
            objectives: ["Liberalismo", "Direitos Naturais"],
            theory: `Locke Político: Pai do Liberalismo.
Estado de Natureza: Liberdade e igualdade, mas com inconvenientes.
Direitos Naturais: Vida, Liberdade, Propriedade.
Contrato Social: Para proteger esses direitos. Governo limitado e revogável.`,
            methodology: "Comparação Hobbes vs Locke.",
            activities: [
              { id: "act1", title: "Direitos Naturais", description: "Identifique situações atuais onde direitos naturais (vida, liberdade, propriedade) são violados.", questions: ["Exemplos:"] },
              { id: "act2", title: "Direito de Resistência", description: "Quando a população pode depor um governo segundo Locke?", questions: ["Condições:"] }
            ],
            reflectionQuestions: ["A propriedade privada é um direito natural?", "Como equilibrar direitos individuais e bem comum?"]
          },
          {
            id: "1-4-28",
            title: "Aula 28: Jean-Jacques Rousseau: a vontade geral",
            objectives: ["Bom Selvagem", "Democracia"],
            theory: `Rousseau: Crítica à civilização.
Estado de Natureza: Homem é bom (Bom Selvagem), a sociedade o corrompe.
Propriedade privada: Origem da desigualdade.
Contrato Social: Baseado na Vontade Geral (bem comum) e Soberania Popular.`,
            methodology: "Análise da desigualdade.",
            activities: [
              { id: "act1", title: "Identificando Vontade Geral", description: "Diferencie 'Vontade de Todos' (soma de interesses) de 'Vontade Geral' (bem comum) em uma decisão política.", questions: ["Diferença:"] },
              { id: "act2", title: "Rousseau e a Educação", description: "Como educar para a liberdade segundo Rousseau?", questions: ["Ideias:"] }
            ],
            reflectionQuestions: ["O homem nasce bom?", "A democracia direta é possível hoje?"]
          },
          {
            id: "1-4-29",
            title: "Aula 29: O iluminismo: a idade da razão",
            objectives: ["Ideais Iluministas", "Enciclopédia"],
            theory: `Iluminismo (Séc. XVIII): A Idade da Razão.
Ideais: Razão, Progresso, Liberdade, Tolerância, Crítica ao Antigo Regime.
Filósofos: Voltaire (liberdade de expressão), Montesquieu (separação de poderes), Diderot (Enciclopédia).
Sapere Aude (Kant): Ouse saber.`,
            methodology: "Análise de impacto histórico.",
            activities: [
              { id: "act1", title: "Mapeando Ideais", description: "Identifique ideais iluministas na Constituição Brasileira ou Declaração dos Direitos Humanos.", questions: ["Ideais encontrados:"] },
              { id: "act2", title: "A Enciclopédia Hoje", description: "Compare a Enciclopédia de Diderot com a Wikipédia ou IA.", questions: ["Comparação:"] }
            ],
            reflectionQuestions: ["A razão pode resolver todos os problemas?", "Os ideais iluministas ainda são válidos?"]
          },
          {
            id: "1-4-30",
            title: "Aula 30: Síntese bimestral: modernidade e iluminismo",
            objectives: ["Revisão e Conexão"],
            theory: `Evolução do pensamento moderno: Do racionalismo/empirismo à política contratualista e o auge no Iluminismo.
Legado: Democracia liberal, direitos humanos, ciência, secularização.`,
            methodology: "Mapa mental e avaliação.",
            activities: [
              { id: "act1", title: "Legado Moderno", description: "Qual filósofo moderno mais influencia nossa vida hoje?", questions: ["Escolha e razão:"] }
            ],
            reflectionQuestions: ["Que problemas da modernidade ainda enfrentamos?"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "2ª Série",
    description: "Filosofia, Política e Ética",
    color: "bg-emerald-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: Liberalismo e Contrato Social",
        lessons: [
          {
            id: "2-1-31",
            title: "Aula 31: Maquiavel: realismo político",
            objectives: ["Realismo Político", "Virtù e Fortuna"],
            theory: `Maquiavel: O Príncipe. Separação entre Política e Moral.
Realismo: Ver a política como ela é, não como deveria ser.
Conceitos: Virtù (habilidade, astúcia) e Fortuna (sorte, acaso).
"Os fins justificam os meios" (para manutenção do poder e ordem).`,
            methodology: "Estudo de caso de líderes.",
            activities: [
              { id: "act1", title: "Virtù vs Virtude", description: "Qual a diferença entre a virtude cristã e a virtù de Maquiavel?", questions: ["Diferença:"] },
              { id: "act2", title: "Analisando Líderes", description: "Analise um líder político atual. Ele usa Virtù? Como lida com a Fortuna?", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["A política deve seguir a mesma moral da vida privada?", "É preferível ser amado ou temido?"]
          },
          {
            id: "2-1-32",
            title: "Aula 32: Hobbes revisitado: o Leviatã e o poder absoluto",
            objectives: ["Aprofundamento em Hobbes", "Segurança"],
            theory: `Hobbes: Antropologia pessimista (egoísmo).
O Contrato Social detalhado: Transferência total de poder para o Soberano (Leviatã).
Funções do Estado: Segurança, Justiça, Ordem. O poder deve ser absoluto para evitar a guerra civil.`,
            methodology: "Debate sobre segurança e liberdade.",
            activities: [
              { id: "act1", title: "Segurança vs Liberdade", description: "Em situações extremas (ex: pandemia, terrorismo), devemos sacrificar liberdade por segurança?", questions: ["Opinião:"] },
              { id: "act2", title: "Críticas ao Absolutismo", description: "Quais os perigos de um poder absoluto?", questions: ["Perigos:"] }
            ],
            reflectionQuestions: ["O medo é necessário para a ordem?", "O Estado é um mal necessário?"]
          },
          {
            id: "2-1-33",
            title: "Aula 33: Locke aprofundado: liberalismo e direitos naturais",
            objectives: ["Propriedade", "Limites do Governo"],
            theory: `Locke: Fundamentos do Liberalismo.
Teoria da Propriedade: Fruto do trabalho.
Limites do Governo: Consentimento, Divisão de Poderes, Império da Lei.
Direito de Resistência: Contra a tirania.`,
            methodology: "Análise de direitos.",
            activities: [
              { id: "act1", title: "Propriedade e Trabalho", description: "Analise a relação entre trabalho e propriedade hoje (ex: propriedade intelectual, herança).", questions: ["Análise:"] },
              { id: "act2", title: "Resistência Legítima", description: "Identifique casos históricos ou atuais de resistência legítima ao governo.", questions: ["Exemplos:"] }
            ],
            reflectionQuestions: ["A desigualdade de propriedade é natural?", "Quando um governo se torna ilegítimo?"]
          },
          {
            id: "2-1-34",
            title: "Aula 34: Rousseau aprofundado: democracia e vontade geral",
            objectives: ["Vontade Geral", "Participação"],
            theory: `Rousseau: Democracia e Igualdade.
Vontade Geral: O interesse comum (diferente da vontade de todos/maioria).
Soberania Popular: Inalienável.
Educação para cidadania.`,
            methodology: "Simulação de decisão coletiva.",
            activities: [
              { id: "act1", title: "Identificando Vontade Geral", description: "Dê um exemplo onde o interesse público (vontade geral) difere do interesse da maioria.", questions: ["Exemplo:"] },
              { id: "act2", title: "Obstáculos à Vontade Geral", description: "O que impede a realização da vontade geral hoje (ex: fake news, lobbies)?", questions: ["Obstáculos:"] }
            ],
            reflectionQuestions: ["É possível uma democracia verdadeira?", "Como garantir que o bem comum prevaleça?"]
          },
          {
            id: "2-1-35",
            title: "Aula 35: Comparação das teorias contratualistas",
            objectives: ["Síntese Hobbes, Locke, Rousseau"],
            theory: `Comparação sistemática:
- Natureza Humana: Egoísta (Hobbes) vs Racional (Locke) vs Bom (Rousseau).
- Estado de Natureza: Guerra vs Paz relativa vs Felicidade/Corrupção.
- Contrato: Submissão vs Consentimento limitado vs Associação livre.
- Governo: Absoluto vs Liberal vs Democrático.`,
            methodology: "Quadro comparativo e criação de constituição.",
            activities: [
              { id: "act1", title: "Tribunal das Teorias", description: "Qual teoria melhor explica a política atual?", questions: ["Argumento:"] },
              { id: "act2", title: "Constituição Ideal", description: "Crie princípios para uma constituição baseada em um dos autores.", questions: ["Princípios:"] }
            ],
            reflectionQuestions: ["Qual modelo é mais justo?", "Como aplicar essas teorias no Brasil?"]
          }
        ]
      },
      {
        id: 2,
        title: "2º Bimestre: Ética e Moral",
        lessons: [
          {
            id: "2-2-36",
            title: "Aula 36: Ética e moral: conceitos fundamentais",
            objectives: ["Distinção Ética/Moral", "Juízos Morais"],
            theory: `Moral: Costumes, normas sociais, prática (o que se faz).
Ética: Reflexão filosófica, teoria (o que se deve fazer).
Relativismo Moral vs Universalismo Moral.`,
            methodology: "Análise de casos.",
            activities: [
              { id: "act1", title: "Moral vs Ética", description: "Classifique afirmações como morais (norma) ou éticas (reflexão).", questions: ["Exemplos:"] },
              { id: "act2", title: "Relativismo vs Universalismo", description: "Analise práticas culturais polêmicas (ex: pena de morte, poligamia). É relativo ou universal?", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Tudo é relativo?", "Existem valores universais?"]
          },
          {
            id: "2-2-37",
            title: "Aula 37: Ética aristotélica: virtudes e felicidade",
            objectives: ["Virtude", "Meio-termo"],
            theory: `Ética das Virtudes. Fim último: Eudaimonia (Felicidade/Florescimento).
Virtude é um hábito. Doutrina do Meio-termo (equilíbrio entre excesso e falta).
Ex: Coragem é meio-termo entre covardia e temeridade.`,
            methodology: "Mapeamento de virtudes.",
            activities: [
              { id: "act1", title: "Mapeando Virtudes", description: "Identifique virtudes e vícios em sua vida (estudos, amizades).", questions: ["Virtudes:", "Vícios:"] },
              { id: "act2", title: "Dilemas do Meio-termo", description: "Como encontrar o equilíbrio em situações difíceis (ex: ser sincero sem ser rude)?", questions: ["Estratégia:"] }
            ],
            reflectionQuestions: ["A virtude garante a felicidade?", "Como se tornar uma pessoa melhor?"]
          },
          {
            id: "2-2-38",
            title: "Aula 38: Kant e o imperativo categórico",
            objectives: ["Deontologia", "Dever"],
            theory: `Ética do Dever (Deontologia). Ação por dever, não por inclinação.
Imperativo Categórico:
1. Universalidade: "Age apenas segundo uma máxima que possas querer que se torne lei universal".
2. Humanidade: Tratar pessoas como fim, nunca apenas como meio.`,
            methodology: "Teste do imperativo.",
            activities: [
              { id: "act1", title: "Testando o Imperativo", description: "Aplique o teste da universalização para: mentir, colar na prova, furar fila.", questions: ["Resultados:"] },
              { id: "act2", title: "Dignidade Humana", description: "Identifique situações onde pessoas são usadas como meios (instrumentos).", questions: ["Exemplos:"] }
            ],
            reflectionQuestions: ["É possível uma moral sem exceções?", "A intenção é o que conta?"]
          },
          {
            id: "2-2-39",
            title: "Aula 39: Utilitarismo: a ética das consequências",
            objectives: ["Consequencialismo", "Bem-estar"],
            theory: `Bentham e Mill. Princípio da Maior Felicidade.
Foco nas consequências. Maximizar o bem-estar do maior número de pessoas.
Cálculo utilitário.`,
            methodology: "Cálculo ético.",
            activities: [
              { id: "act1", title: "Cálculo Utilitário", description: "Analise o dilema do trem (Trolley Problem) ou triagem médica.", questions: ["Decisão e Justificativa:"] },
              { id: "act2", title: "Críticas ao Utilitarismo", description: "O utilitarismo pode justificar injustiças contra minorias?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["Os fins justificam os meios?", "Como medir a felicidade?"]
          },
          {
            id: "2-2-40",
            title: "Aula 40: Comparação das teorias éticas",
            objectives: ["Síntese e Aplicação"],
            theory: `Comparação:
- Aristóteles: Foco no Agente (Caráter/Virtude).
- Kant: Foco na Ação (Dever/Regras).
- Utilitarismo: Foco no Resultado (Consequências).
Pluralismo ético.`,
            methodology: "Análise de casos complexos.",
            activities: [
              { id: "act1", title: "Análise Multiteórica", description: "Analise um caso (ex: mentira piedosa) sob as três perspectivas.", questions: ["Aristóteles:", "Kant:", "Utilitarismo:"] },
              { id: "act2", title: "Síntese Pessoal", description: "Qual teoria faz mais sentido para você?", questions: ["Opinião:"] }
            ],
            reflectionQuestions: ["Como resolver conflitos morais?", "Precisamos de todas as teorias?"]
          }
        ]
      },
      {
        id: 3,
        title: "3º Bimestre: Filosofia Política Contemporânea",
        lessons: [
          {
            id: "2-3-41",
            title: "Aula 41: Karl Marx: crítica ao capitalismo",
            objectives: ["Materialismo", "Alienação"],
            theory: `Marx: Crítica ao Capitalismo.
Materialismo Histórico. Luta de Classes.
Mais-valia (exploração). Alienação (perda de si no trabalho).
Ideologia e Superestrutura.`,
            methodology: "Análise social.",
            activities: [
              { id: "act1", title: "Identificando Alienação", description: "Identifique formas de alienação no trabalho atual (ex: aplicativos, fábrica).", questions: ["Exemplos:"] },
              { id: "act2", title: "Análise de Classes", description: "Como se configura a luta de classes hoje?", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["O trabalho dignifica ou aliena?", "O capitalismo é justo?"]
          },
          {
            id: "2-3-42",
            title: "Aula 42: Michel Foucault: poder e disciplina",
            objectives: ["Microfísica do Poder", "Vigilância"],
            theory: `Foucault: Poder não é posse, é relação.
Sociedade Disciplinar. Instituições de sequestro (escola, prisão, hospital).
Panóptico: Vigilância constante. Corpos dóceis.
Biopoder.`,
            methodology: "Análise de instituições.",
            activities: [
              { id: "act1", title: "Mapeando a Disciplina", description: "Identifique técnicas disciplinares na escola (horários, filas, exames).", questions: ["Técnicas:"] },
              { id: "act2", title: "Panóptico Digital", description: "Como as redes sociais e algoritmos exercem vigilância?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["Onde está o poder?", "Somos livres ou controlados?"]
          },
          {
            id: "2-3-43",
            title: "Aula 43: Hannah Arendt: a condição humana",
            objectives: ["Vita Activa", "Totalitarismo"],
            theory: `Arendt: A Condição Humana (Labor, Trabalho, Ação).
Ação política e espaço público.
Totalitarismo e a Banalidade do Mal (Eichmann): O mal como falta de pensamento.`,
            methodology: "Estudo de caso.",
            activities: [
              { id: "act1", title: "Classificando Atividades", description: "Classifique suas atividades diárias em Labor, Trabalho e Ação.", questions: ["Classificação:"] },
              { id: "act2", title: "Banalidade do Mal", description: "Identifique exemplos contemporâneos de 'cumprir ordens' sem pensar.", questions: ["Exemplos:"] }
            ],
            reflectionQuestions: ["A política é importante?", "Como evitar o mal banal?"]
          },
          {
            id: "2-3-44",
            title: "Aula 44: Comparação dos pensadores políticos contemporâneos",
            objectives: ["Síntese Marx, Foucault, Arendt"],
            theory: `Diferentes diagnósticos da modernidade:
- Marx: Exploração econômica.
- Foucault: Controle disciplinar.
- Arendt: Perda da política e do espaço público.`,
            methodology: "Debate teórico.",
            activities: [
              { id: "act1", title: "Análise Multiteórica", description: "Analise um problema atual (ex: Uberização) usando os três autores.", questions: ["Marx:", "Foucault:", "Arendt:"] },
              { id: "act2", title: "Debate", description: "Como transformar a sociedade? Revolução (Marx), Resistência (Foucault) ou Ação Política (Arendt)?", questions: ["Posição:"] }
            ],
            reflectionQuestions: ["Qual diagnóstico é mais preciso hoje?"]
          }
        ]
      },
      {
        id: 4,
        title: "4º Bimestre: Filosofia e Justiça Social",
        lessons: [
          {
            id: "2-4-45",
            title: "Aula 45: John Rawls: teoria da justiça",
            objectives: ["Justiça como Equidade", "Véu da Ignorância"],
            theory: `Rawls: Justiça distributiva.
Posição Original e Véu da Ignorância: Escolher princípios sem saber sua posição social.
Princípios: Liberdade igual e Diferença (desigualdade só se beneficiar os piores).`,
            methodology: "Experimento mental.",
            activities: [
              { id: "act1", title: "Experimento da Posição Original", description: "Que regras você criaria se não soubesse se nasceria rico ou pobre?", questions: ["Regras:"] },
              { id: "act2", title: "Princípio da Diferença", description: "Analise se certas desigualdades (salários, bônus) beneficiam a todos.", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Justiça é o mesmo que igualdade?", "O véu da ignorância funciona?"]
          },
          {
            id: "2-4-46",
            title: "Aula 46: Amartya Sem: desenvolvimento como liberdade",
            objectives: ["Capacidades", "Desenvolvimento Humano"],
            theory: `Sen: Crítica a métricas puramente econômicas (PIB).
Abordagem das Capacidades: O que as pessoas são capazes de ser e fazer.
Desenvolvimento é expansão da liberdade real.`,
            methodology: "Análise de desenvolvimento.",
            activities: [
              { id: "act1", title: "Mapeando Capacidades", description: "Avalie suas próprias capacidades/liberdades (educação, saúde, expressão).", questions: ["Avaliação:"] },
              { id: "act2", title: "Desenvolvimento no Brasil", description: "Analise o desenvolvimento brasileiro pela ótica de Sen (além da renda).", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["O que é uma vida boa?", "Pobreza é só falta de dinheiro?"]
          },
          {
            id: "2-4-47",
            title: "Aula 47: Direitos humanos: fundamentos e desafios",
            objectives: ["Universalidade", "Histórico"],
            theory: `História e fundamentos dos Direitos Humanos.
Gerações de direitos: Liberdade (Civis/Políticos), Igualdade (Sociais), Fraternidade (Coletivos).
Universalismo vs Relativismo Cultural.`,
            methodology: "Estudo de caso.",
            activities: [
              { id: "act1", title: "Hierarquia de Direitos", description: "Existe hierarquia entre direitos? Vida, liberdade, propriedade.", questions: ["Opinião:"] },
              { id: "act2", title: "Dilemas e Violações", description: "Analise dilemas atuais (segurança vs liberdade, cultura vs direitos).", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Os direitos humanos são realmente para todos?", "Como garantir sua aplicação?"]
          },
          {
            id: "2-4-48",
            title: "Aula 48: Ações afirmativas e justiça social",
            objectives: ["Justiça Reparadora", "Cotas"],
            theory: `Ações Afirmativas: Políticas para corrigir desigualdades históricas.
Justificativas: Reparação, Diversidade, Justiça Distributiva.
Debate: Mérito vs Oportunidade.`,
            methodology: "Debate estruturado.",
            activities: [
              { id: "act1", title: "Analise de Justificativas", description: "Avalie os argumentos a favor e contra as cotas.", questions: ["Favor:", "Contra:"] },
              { id: "act2", title: "Proposta de Política", description: "Desenvolva uma proposta de ação afirmativa para um problema específico.", questions: ["Proposta:"] }
            ],
            reflectionQuestions: ["Ações afirmativas são justas?", "Como alcançar igualdade real?"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "3ª Série",
    description: "Existencialismo, Ciência, Ambiente e Identidade",
    color: "bg-purple-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: Filosofia Contemporânea e Existencialismo",
        lessons: [
          {
            id: "3-1-49",
            title: "Aula 49: Introdução à Filosofia contemporânea",
            objectives: ["Contexto Séc. XIX-XX", "Crise da Modernidade"],
            theory: `Contexto: Revolução Industrial, Guerras, Tecnologia, Psicanálise.
Crise da Razão e do Sujeito. Fim das grandes narrativas.
Características: Pluralismo, Linguagem, Existência.`,
            methodology: "Análise cultural.",
            activities: [
              { id: "act1", title: "Mapeando a Contemporaneidade", description: "Identifique características do mundo atual (velocidade, fragmentação, etc).", questions: ["Características:"] },
              { id: "act2", title: "Filosofia no Cotidiano", description: "Relacione temas filosóficos com sua vida (identidade, liberdade).", questions: ["Relação:"] }
            ],
            reflectionQuestions: ["O que define nossa época?", "A filosofia ainda é necessária?"]
          },
          {
            id: "3-1-50",
            title: "Aula 50: Soren Kierkegaard: a angústia da escolha",
            objectives: ["Angústia", "Estádios da Existência"],
            theory: `Kierkegaard: Pai do Existencialismo. Crítica a Hegel.
Subjetividade é a verdade.
Três Estádios: Estético (prazer), Ético (dever), Religioso (fé/paradoxo).
Angústia: Vertigem da liberdade.`,
            methodology: "Análise de escolhas.",
            activities: [
              { id: "act1", title: "Os Três Estádios", description: "Identifique exemplos de comportamentos estéticos, éticos e religiosos.", questions: ["Exemplos:"] },
              { id: "act2", title: "Mapeando Angústias", description: "Relate uma escolha difícil e a angústia sentida.", questions: ["Relato:"] }
            ],
            reflectionQuestions: ["A liberdade gera angústia?", "É possível viver sem escolher?"]
          },
          {
            id: "3-1-51",
            title: "Aula 51: Friedrich Nietzsche: crítica aos valores",
            objectives: ["Morte de Deus", "Transvaloração", "Super-homem"],
            theory: `Nietzsche: Crítica à moral tradicional (escravos).
"Deus está morto": Fim dos valores absolutos. Niilismo.
Vontade de Poder. Amor Fati. Eterno Retorno.
Super-homem (Übermensch): Criador de novos valores.`,
            methodology: "Leitura de aforismos e genealogia.",
            activities: [
              { id: "act1", title: "Genealogia dos Valores", description: "Investigue a origem de um valor atual (ex: sucesso, humildade).", questions: ["Origem:"] },
              { id: "act2", title: "Teste do Eterno Retorno", description: "Você viveria sua vida exatamente igual infinitas vezes? O que mudaria?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["O que nos torna fortes?", "Podemos criar nossos próprios valores?"]
          },
          {
            id: "3-1-52",
            title: "Aula 52: Martin Heidegger: ser e tempo",
            objectives: ["Dasein", "Autenticidade", "Ser-para-a-morte"],
            theory: `Heidegger: A questão do Ser.
Dasein (Ser-aí): Existência humana.
Ser-no-mundo. Angústia.
Existência Autêntica vs Inautêntica (o "a gente", impessoalidade).
Ser-para-a-morte: Finitude dá sentido à vida.`,
            methodology: "Reflexão existencial.",
            activities: [
              { id: "act1", title: "Mapeando o Dasein", description: "Analise sua relação com o mundo e com os outros.", questions: ["Análise:"] },
              { id: "act2", title: "Autenticidade", description: "Identifique situações onde você agiu de forma autêntica ou inautêntica (seguiu a massa).", questions: ["Situações:"] }
            ],
            reflectionQuestions: ["A consciência da morte muda a vida?", "Como viver autenticamente?"]
          },
          {
            id: "3-1-53",
            title: "Aula 53: Jean-Paul Sartre: existencialismo e liberdade",
            objectives: ["Existência precede essência", "Liberdade Radical", "Má-fé"],
            theory: `Sartre: "A existência precede a essência". Não há natureza humana fixa.
Liberdade Radical: Estamos condenados a ser livres. Responsabilidade total.
Má-fé: Mentir para si mesmo, negar a liberdade.
Engajamento.`,
            methodology: "Análise de situações.",
            activities: [
              { id: "act1", title: "Existência e Essência", description: "O que te define? Você se cria ou já está pronto?", questions: ["Reflexão:"] },
              { id: "act2", title: "Identificando Má-fé", description: "Dê exemplos de desculpas que usamos para não assumir responsabilidade.", questions: ["Exemplos:"] }
            ],
            reflectionQuestions: ["Somos totalmente responsáveis pelo que somos?", "A liberdade é um fardo?"]
          },
          {
            id: "3-1-54",
            title: "Aula 54: Simone de Beauvoir: feminismo existencialista",
            objectives: ["Condição Feminina", "O Segundo Sexo"],
            theory: `Beauvoir: "Ninguém nasce mulher: torna-se mulher".
Existencialismo aplicado ao gênero.
Mulher como o Outro. Construção social do gênero.
Luta por transcendência e liberdade.`,
            methodology: "Análise de gênero.",
            activities: [
              { id: "act1", title: "Ninguém Nasce Mulher", description: "Analise como a sociedade constrói o 'ser mulher' e 'ser homem'.", questions: ["Análise:"] },
              { id: "act2", title: "Mitos Femininos", description: "Identifique mitos sobre as mulheres na cultura atual.", questions: ["Mitos:"] }
            ],
            reflectionQuestions: ["Biologia é destino?", "Como alcançar a igualdade?"]
          },
          {
            id: "3-1-55",
            title: "Aula 55: Albert Camus: o absurdo da existência",
            objectives: ["O Absurdo", "Revolta", "Sísifo"],
            theory: `Camus: O Absurdo (busca de sentido x silêncio do mundo).
O Mito de Sísifo: Viver sem sentido mas com dignidade.
A Revolta: Não ao suicídio, sim à vida. Solidariedade.`,
            methodology: "Análise do mito.",
            activities: [
              { id: "act1", title: "Experiências do Absurdo", description: "Identifique situações absurdas ou sem sentido na vida cotidiana.", questions: ["Situações:"] },
              { id: "act2", title: "O Mito de Sísifo Pessoal", description: "Qual é a sua 'pedra' (tarefa repetitiva)? Como imaginar-se feliz?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["A vida precisa de sentido para ser vivida?", "Como viver no absurdo?"]
          },
          {
            id: "3-1-56",
            title: "Aula 56: Comparação das filosofias existencialistas",
            objectives: ["Síntese e Comparação"],
            theory: `Comparação entre Kierkegaard (Fé), Nietzsche (Vida), Heidegger (Ser), Sartre (Liberdade), Beauvoir (Gênero), Camus (Absurdo).
Temas comuns: Angústia, Individualidade, Liberdade, Autenticidade.`,
            methodology: "Quadro comparativo.",
            activities: [
              { id: "act1", title: "Quadro Comparativo", description: "Compare a visão de liberdade de Sartre e Camus.", questions: ["Comparação:"] },
              { id: "act2", title: "Síntese Existencialista", description: "Crie sua própria definição de existência autêntica baseada nos autores.", questions: ["Definição:"] }
            ],
            reflectionQuestions: ["Qual filósofo oferece a melhor resposta para a vida?", "O existencialismo ainda é atual?"]
          }
        ]
      },
      {
        id: 2,
        title: "2º Bimestre: Filosofia da Ciência e Tecnologia",
        lessons: [
          {
            id: "3-2-57",
            title: "Aula 57: Epistemologia contemporânea",
            objectives: ["Crise da Ciência Moderna", "Novas Perspectivas"],
            theory: `Crise dos fundamentos (matemática, física).
Revoluções do séc. XX (Relatividade, Quântica).
Ciência não é verdade absoluta e imutável. Aspectos históricos e sociais da ciência.`,
            methodology: "História da ciência.",
            activities: [
              { id: "act1", title: "Evolução da Ciência", description: "Compare a visão de ciência do séc. XIX com a atual.", questions: ["Comparação:"] },
              { id: "act2", title: "Controvérsias", description: "Analise uma controvérsia científica atual (ex: vacinas, clima).", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["A ciência é objetiva?", "A ciência pode errar?"]
          },
          {
            id: "3-2-58",
            title: "Aula 58: Karl Popper: falseabilidade da ciência",
            objectives: ["Critério de Demarcação", "Falseabilidade"],
            theory: `Popper: Crítica à indução.
Critério de Falseabilidade: Uma teoria só é científica se puder ser testada e potencialmente falsificada.
Ciência progride por tentativa e erro (Conjecturas e Refutações).
Sociedade Aberta.`,
            methodology: "Teste de teorias.",
            activities: [
              { id: "act1", title: "Testando a Falseabilidade", description: "A frase 'Vai chover ou não vai chover' é científica? E 'Amanhã chove'?", questions: ["Análise:"] },
              { id: "act2", title: "Ciência vs Pseudociência", description: "Classifique áreas (astronomia vs astrologia) usando o critério de Popper.", questions: ["Classificação:"] }
            ],
            reflectionQuestions: ["Podemos ter certeza absoluta na ciência?", "O erro é útil?"]
          },
          {
            id: "3-2-59",
            title: "Aula 59: Thomas Kuhn: paradigmas científicos",
            objectives: ["Paradigmas", "Revoluções Científicas"],
            theory: `Kuhn: A Estrutura das Revoluções Científicas.
Conceitos: Paradigma, Ciência Normal, Anomalia, Crise, Revolução.
Incomensurabilidade. A ciência não é linear, mas feita de saltos.`,
            methodology: "Análise histórica.",
            activities: [
              { id: "act1", title: "Identificando Paradigmas", description: "Identifique paradigmas em áreas como comunicação (carta -> email -> redes).", questions: ["Exemplos:"] },
              { id: "act2", title: "Estrutura de uma Revolução", description: "Analise a revolução da internet como mudança de paradigma.", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["A ciência é influenciada pela sociedade?", "O que causa uma revolução no pensamento?"]
          },
          {
            id: "3-2-60",
            title: "Aula 60: Paul Feyerabend: anarquismo metodológico",
            objectives: ["Contra o Método", "Pluralismo"],
            theory: `Feyerabend: "Tudo vale". Não há método científico único e rígido.
Anarquismo Epistemológico. Defesa do pluralismo e da liberdade criativa na ciência.
Ciência como uma tradição entre outras.`,
            methodology: "Debate sobre método.",
            activities: [
              { id: "act1", title: "O Cientista Rebelde", description: "Crie uma história de um cientista que quebrou regras para descobrir algo.", questions: ["História:"] },
              { id: "act2", title: "Regras na Ciência", description: "A ciência precisa de regras rígidas ou de liberdade?", questions: ["Argumento:"] }
            ],
            reflectionQuestions: ["Tudo vale na ciência?", "Como distinguir ciência de charlatanismo?"]
          },
          {
            id: "3-2-61",
            title: "Aula 61: Filosofia e tecnologia",
            objectives: ["Natureza da Técnica", "Impactos"],
            theory: `Filosofia da Tecnologia. Determinismo tecnológico vs Construção social.
Visões: Instrumental (ferramenta), Antropológica (extensão), Heidegger (Desencobrimento/Armação).
Tecno-otimismo vs Tecno-pessimismo.`,
            methodology: "Análise de impactos.",
            activities: [
              { id: "act1", title: "Benção ou Maldição", description: "Escolha uma tecnologia (ex: IA) e liste benefícios e malefícios.", questions: ["Análise:"] },
              { id: "act2", title: "Um Dia Sem Tecnologia", description: "Relate como seria (ou foi) um dia sem tecnologia digital.", questions: ["Relato:"] }
            ],
            reflectionQuestions: ["A tecnologia é neutra?", "Nós controlamos a técnica ou ela nos controla?"]
          },
          {
            id: "3-2-62",
            title: "Aula 62: Inteligência artificial e ética",
            objectives: ["Desafios da IA", "Ética"],
            theory: `IA: Definição e História.
Questões éticas: Viés algorítmico, Privacidade, Responsabilidade, Trabalho, Segurança.
Futuro da relação humano-máquina.`,
            methodology: "Estudo de caso.",
            activities: [
              { id: "act1", title: "Dilemas da IA", description: "Analise dilemas como carros autônomos ou viés em contratações.", questions: ["Dilema e Solução:"] },
              { id: "act2", title: "Código de Ética", description: "Crie 3 regras éticas para o desenvolvimento de IA.", questions: ["Regras:"] }
            ],
            reflectionQuestions: ["Máquinas podem substituir humanos?", "Quem é responsável pelos erros da IA?"]
          },
          {
            id: "3-2-63",
            title: "Aula 63: Biotecnologia e bioética",
            objectives: ["Bioética", "Engenharia Genética"],
            theory: `Biotecnologia: CRISPR, Clonagem, Transgênicos.
Bioética: Estudo dos dilemas morais da vida. Princípios: Autonomia, Beneficência, Não-maleficência, Justiça.
Dilemas: Edição de bebês, melhoramento humano.`,
            methodology: "Comitê de Bioética simulado.",
            activities: [
              { id: "act1", title: "Comitê de Bioética", description: "Decida sobre a liberação de uma nova técnica genética polêmica.", questions: ["Decisão e Justificativa:"] },
              { id: "act2", title: "Prós e Contras", description: "Analise os riscos e benefícios dos transgênicos ou clonagem.", questions: ["Análise:"] }
            ],
            reflectionQuestions: ["Devemos fazer tudo que a ciência permite?", "Onde está o limite da intervenção na vida?"]
          },
          {
            id: "3-2-64",
            title: "Aula 64: Tecnologia e sociedade",
            objectives: ["Sociedade da Informação", "Cibercultura"],
            theory: `Impactos sociais da tecnologia: Comunicação, Trabalho, Política, Cultura.
Sociedade da Informação, Globalização, Exclusão Digital.
Vigilância, Fake News, Redes Sociais.`,
            methodology: "Análise de mídias.",
            activities: [
              { id: "act1", title: "Linha do Tempo", description: "Relacione inovações tecnológicas com mudanças sociais na história.", questions: ["Linha do tempo:"] },
              { id: "act2", title: "Cidadania Digital", description: "Proponha uma ação para melhorar a convivência online.", questions: ["Proposta:"] }
            ],
            reflectionQuestions: ["A tecnologia nos torna mais solitários ou conectados?", "Como ser um cidadão digital consciente?"]
          }
        ]
      },
      {
        id: 3,
        title: "3º Bimestre: Filosofia Ambiental e Sustentabilidade",
        lessons: [
          {
            id: "3-3-65",
            title: "Aula 65: Crise ambiental e Filosofia",
            objectives: ["Crise Ecológica", "Filosofia Ambiental"],
            theory: `Crise Ambiental: Aquecimento global, perda de biodiversidade.
Raízes filosóficas: Antropocentrismo moderno (domínio da natureza).
Filosofia Ambiental: Repensar a relação humano-natureza. Valor intrínseco da natureza.`,
            methodology: "Diário ecológico.",
            activities: [
              { id: "act1", title: "Pegada Ecológica", description: "Registre seus impactos ambientais por uma semana.", questions: ["Registro e Reflexão:"] },
              { id: "act2", title: "Raízes da Crise", description: "Quais ideias filosóficas contribuíram para a crise ambiental?", questions: ["Ideias:"] }
            ],
            reflectionQuestions: ["Somos donos da natureza?", "A crise é técnica ou ética?"]
          },
          {
            id: "3-3-66",
            title: "Aula 66: Ética ambiental: antropocentrismo vs ecocentrismo",
            objectives: ["Correntes Éticas", "Valor da Natureza"],
            theory: `Antropocentrismo: Natureza tem valor instrumental (para humanos).
Biocentrismo: Valor intrínseco da vida.
Ecocentrismo: Valor dos ecossistemas e do todo (Ética da Terra).`,
            methodology: "Julgamento simulado.",
            activities: [
              { id: "act1", title: "O Julgamento do Rio", description: "Simule um julgamento sobre poluição defendendo diferentes éticas.", questions: ["Argumentos:"] },
              { id: "act2", title: "Posicionamento", description: "Você é antropocêntrico ou ecocêntrico?", questions: ["Justificativa:"] }
            ],
            reflectionQuestions: ["Animais e rios têm direitos?", "Devemos proteger a natureza por ela mesma?"]
          },
          {
            id: "3-3-67",
            title: "Aula 67: Desenvolvimento sustentável",
            objectives: ["Sustentabilidade", "Críticas"],
            theory: `Conceito: Satisfazer presente sem comprometer futuro.
Tripé: Econômico, Social, Ambiental.
Críticas: Contradição (crescimento infinito), Greenwashing.
Alternativas: Decrescimento, Economia Circular.`,
            methodology: "Análise de consumo.",
            activities: [
              { id: "act1", title: "Meu Consumo", description: "Analise a sustentabilidade de um produto que você usa.", questions: ["Análise:"] },
              { id: "act2", title: "Sustentabilidade Real", description: "O que seria um estilo de vida realmente sustentável?", questions: ["Descrição:"] }
            ],
            reflectionQuestions: ["É possível crescer economicamente para sempre?", "O que você está disposto a mudar?"]
          },
          {
            id: "3-3-68",
            title: "Aula 68: Mudanças climáticas e responsabilidade",
            objectives: ["Hans Jonas", "Justiça Climática"],
            theory: `Desafio ético: Ação coletiva, futuro.
Hans Jonas: Princípio Responsabilidade. Heurística do Medo. Dever para com o futuro.
Justiça Climática: Responsabilidades diferenciadas.`,
            methodology: "Criação de regras éticas.",
            activities: [
              { id: "act1", title: "Novo Imperativo", description: "Aplique o imperativo de Jonas a uma ação cotidiana.", questions: ["Aplicação:"] },
              { id: "act2", title: "Carta para o Futuro", description: "O que diria às gerações futuras sobre nossas ações hoje?", questions: ["Carta:"] }
            ],
            reflectionQuestions: ["Temos obrigações com quem não nasceu?", "O medo ajuda a agir?"]
          },
          {
            id: "3-3-69",
            title: "Aula 69: Ecofeminismo",
            objectives: ["Dominação", "Cuidado"],
            theory: `Conexão entre dominação da mulher e da natureza (dualismos opressivos).
Correntes: Cultural, Social.
Ética do Cuidado: Interdependência e empatia vs Dominação.`,
            methodology: "Desconstrução de imagens.",
            activities: [
              { id: "act1", title: "Lógica da Dominação", description: "Analise associações culturais entre mulher e natureza.", questions: ["Análise:"] },
              { id: "act2", title: "Ética do Cuidado", description: "Como o cuidado pode transformar nossa relação com o mundo?", questions: ["Reflexão:"] }
            ],
            reflectionQuestions: ["Há relação entre machismo e destruição ambiental?", "O cuidado é uma virtude política?"]
          },
          {
            id: "3-3-70",
            title: "Aula 70: Direitos da natureza",
            objectives: ["Natureza como Sujeito", "Bem Viver"],
            theory: `Mudança jurídica: De objeto para sujeito de direitos.
Casos: Equador, Rio Whanganui.
Fundamento: Ecocentrismo. Natureza tem direito de existir e regenerar.`,
            methodology: "Petição jurídica simulada.",
            activities: [
              { id: "act1", title: "O Guardião do Parque", description: "Redija uma defesa dos direitos de um parque ou rio local.", questions: ["Defesa:"] },
              { id: "act2", title: "Natureza Sujeito", description: "O que muda se tratarmos a natureza como alguém?", questions: ["Mudanças:"] }
            ],
            reflectionQuestions: ["Um rio pode ter advogados?", "O sistema jurídico atual protege a natureza?"]
          },
          {
            id: "3-3-71",
            title: "Aula 71: Filosofia indígena e meio ambiente",
            objectives: ["Cosmovisão Indígena", "Parentesco"],
            theory: `Perspectiva não-dualista. Parentesco cósmico. Reciprocidade.
Perspectivismo Ameríndio (Viveiros de Castro). A terra como parente.
Ailton Krenak, Davi Kopenawa.`,
            methodology: "Exercício de alteridade.",
            activities: [
              { id: "act1", title: "Parentesco Cósmico", description: "Escreva como uma árvore ou rio veria você.", questions: ["Texto:"] },
              { id: "act2", title: "Saberes Indígenas", description: "O que a filosofia indígena ensina sobre sustentabilidade?", questions: ["Lições:"] }
            ],
            reflectionQuestions: ["A natureza é um recurso ou um parente?", "Podemos aprender com os povos originários?"]
          },
          {
            id: "3-3-72",
            title: "Aula 72: Futuro da humanidade e planeta",
            objectives: ["Antropoceno", "Esperança Ativa"],
            theory: `Antropoceno: Humanos como força geológica.
Cenários: Utopia (harmonia) vs Distopia (colapso).
Esperança Ativa: Agir para criar o futuro. Responsabilidade planetária.`,
            methodology: "Manifesto pelo futuro.",
            activities: [
              { id: "act1", title: "Manifesto pelo Futuro", description: "Proponha ações concretas para um futuro viável.", questions: ["Ações:"] },
              { id: "act2", title: "Cenários", description: "Como você imagina 2050? Otimista ou pessimista?", questions: ["Visão:"] }
            ],
            reflectionQuestions: ["Temos esperança?", "Qual nosso papel no futuro do planeta?"]
          }
        ]
      },
      {
        id: 4,
        title: "4º Bimestre: Identidade, Diversidade e Projeto de Vida",
        lessons: [
          {
            id: "3-4-73",
            title: "Aula 73: Filosofia e identidade",
            objectives: ["Conceito de Identidade", "Construção do Eu"],
            theory: `Identidade: Pessoal (continuidade do eu) e Social (pertencimento).
Não é fixa, mas construída (memória, narrativa, relações).
Alteridade e Reconhecimento. Autenticidade.`,
            methodology: "Colar da Identidade.",
            activities: [
              { id: "act1", title: "Quem Sou Eu?", description: "Crie um 'colar' com palavras que definem sua identidade.", questions: ["Palavras:"] },
              { id: "act2", title: "Espelho da Alteridade", description: "Entreviste um colega e descubra algo novo sobre a identidade dele.", questions: ["Descoberta:"] }
            ],
            reflectionQuestions: ["Quem define quem você é?", "Sua identidade muda?"]
          },
          {
            id: "3-4-74",
            title: "Aula 74: Multiculturalismo e diversidade",
            objectives: ["Pluralidade Cultural", "Tolerância vs Respeito"],
            theory: `Multiculturalismo: Coexistência de culturas.
Diversidade: Riqueza humana.
Desafios: Preconceito, assimilação.
Valor: Reconhecimento, diálogo intercultural.`,
            methodology: "Mosaico cultural.",
            activities: [
              { id: "act1", title: "Mosaico Cultural", description: "Pesquise e apresente uma cultura presente no Brasil.", questions: ["Cultura e características:"] },
              { id: "act2", title: "Diálogo de Perspectivas", description: "Simule um diálogo entre visões diferentes sobre um tema.", questions: ["Diálogo:"] }
            ],
            reflectionQuestions: ["Como conviver com o diferente?", "Tolerar é suficiente?"]
          },
          {
            id: "3-4-75",
            title: "Aula 75: Filosofia afro-brasileira",
            objectives: ["Ancestralidade", "Combate ao Racismo"],
            theory: `Pensamento africano e diaspórico.
Conceitos: Ancestralidade, Comunidade, Oralidade, Ubuntu, Axé.
Crítica ao racismo estrutural e epistemicídio. Valorização da cultura negra.`,
            methodology: "Pesquisa de personalidades.",
            activities: [
              { id: "act1", title: "Personalidades", description: "Pesquise um pensador/artista afro-brasileiro.", questions: ["Nome e Contribuição:"] },
              { id: "act2", title: "Ancestralidade", description: "Escreva sobre a importância das suas raízes/história.", questions: ["Texto:"] }
            ],
            reflectionQuestions: ["O Brasil valoriza sua raiz africana?", "Como a filosofia afro ajuda a pensar o mundo?"]
          },
          {
            id: "3-4-76",
            title: "Aula 76: Gênero e sexualidade",
            objectives: ["Conceitos", "Diversidade"],
            theory: `Distinção: Sexo biológico vs Gênero (construção social) vs Sexualidade.
Identidade de gênero, expressão de gênero.
Crítica a estereótipos e normatividade. Respeito à diversidade LGBTQIA+.`,
            methodology: "Desconstrução de estereótipos.",
            activities: [
              { id: "act1", title: "Desconstruindo Estereótipos", description: "Liste comportamentos ditos 'de homem' ou 'de mulher' e critique.", questions: ["Lista e Crítica:"] },
              { id: "act2", title: "Mural da Diversidade", description: "Crie uma frase ou imagem celebrando a diversidade.", questions: ["Criação:"] }
            ],
            reflectionQuestions: ["Por que rótulos de gênero importam?", "Como combater o preconceito?"]
          },
          {
            id: "3-4-77",
            title: "Aula 77: Juventude e projeto de vida",
            objectives: ["Autoconhecimento", "Planejamento"],
            theory: `Juventude: Tempo de escolhas e construção.
Projeto de Vida: Pessoal, Social, Profissional. Não é fixo.
Autonomia e responsabilidade. Sentido e propósito.`,
            methodology: "Linha do tempo futura.",
            activities: [
              { id: "act1", title: "Linha do Tempo", description: "Quais seus objetivos para 5, 10 e 20 anos?", questions: ["Objetivos:"] },
              { id: "act2", title: "Dilema da Escolha", description: "Como resolver conflitos entre o que você quer e o que esperam de você?", questions: ["Estratégia:"] }
            ],
            reflectionQuestions: ["Você é protagonista da sua vida?", "Qual seu sonho?"]
          },
          {
            id: "3-4-78",
            title: "Aula 78: Filosofia e vida do trabalho",
            objectives: ["Sentido do Trabalho", "Ética Profissional"],
            theory: `Trabalho: Subsistência, realização, contribuição.
Carreira vs Vocação.
Ética profissional. Flexibilidade e adaptação no mundo moderno.`,
            methodology: "Entrevista profissional.",
            activities: [
              { id: "act1", title: "Entrevista", description: "O que você perguntaria a um profissional da área que deseja?", questions: ["Perguntas:"] },
              { id: "act2", title: "Código de Ética", description: "Crie 3 princípios éticos para sua futura profissão.", questions: ["Princípios:"] }
            ],
            reflectionQuestions: ["Trabalhar para viver ou viver para trabalhar?", "O trabalho define quem somos?"]
          },
          {
            id: "3-4-79",
            title: "Aula 79: Cidadania e participação social",
            objectives: ["Direitos e Deveres", "Engajamento"],
            theory: `Cidadania: Civil, Política, Social.
Participação ativa: Além do voto. Engajamento comunitário.
Democracia e Bem Comum. Construção de uma sociedade justa.`,
            methodology: "Projeto de intervenção.",
            activities: [
              { id: "act1", title: "Projeto de Intervenção", description: "Proponha uma solução para um problema da sua escola ou bairro.", questions: ["Problema e Solução:"] },
              { id: "act2", title: "Cidadão Ativo", description: "Divulgue um direito/dever importante e pouco conhecido.", questions: ["Direito/Dever:"] }
            ],
            reflectionQuestions: ["O que é ser um bom cidadão?", "Como você pode mudar o mundo ao seu redor?"]
          }
        ]
      }
    ]
  }
];
