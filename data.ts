
import { Grade } from './types';

export const curriculumData: Grade[] = [
  {
    id: 1,
    title: "1ª Série",
    description: "Despertar: Do Senso Comum ao Pensamento Crítico",
    color: "bg-blue-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: O Nascimento da Atitude Crítica",
        lessons: [
          {
            id: "1-1-1",
            title: "Aula 1: A Coragem de Perguntar",
            objectives: ["Diferenciar o 'saber' do 'achar'", "Entender a Filosofia como ferramenta de liberdade", "Identificar preconceitos no senso comum"],
            theory: `A Filosofia não é um conjunto de respostas prontas para decorar, mas o hábito de não aceitar nada sem antes examinar. No seu dia a dia, você é bombardeado por opiniões: no grupo de WhatsApp, no TikTok, na conversa de calçada. Isso é o que chamamos de **Senso Comum**.

A Filosofia nasce quando você dá um passo atrás e pergunta: "Por que eu acredito nisso? De onde veio essa ideia? Isso é realmente verdade ou eu só estou repetindo o que ouvi?".

**Os Pilares da Atitude Filosófica:**
1. **Estranhamento:** Olhar para o que é 'normal' (como o uso excessivo de celulares) e achar estranho.
2. **Interrogação:** Transformar o que parece óbvio em uma pergunta.
3. **Reflexão:** Pensar sobre o próprio pensamento.

Filosofar é, acima de tudo, ter a coragem de usar a própria inteligência para não ser manipulado.`,
            methodology: "Roda de conversa sobre 'verdades' inquestionáveis da juventude.",
            activities: [
              { id: "act1", title: "Desconstruindo o 'Todo mundo sabe'", description: "Escolha uma frase que você ouve muito (ex: 'Homem não chora' ou 'Dinheiro é tudo') e faça três perguntas filosóficas sobre ela.", questions: ["Qual frase você escolheu?", "Por que as pessoas acreditam nisso sem questionar?", "Quais as consequências de aceitar essa ideia como verdade absoluta?"] },
              { id: "act2", title: "O seu Porquê", description: "Qual é a pergunta que mais te incomoda hoje sobre o seu futuro ou sobre o mundo?", questions: ["Escreva sua pergunta e explique por que ela é importante para você:"] }
            ],
            reflectionQuestions: ["Você se sente dono das suas ideias ou sente que repete o que os outros dizem?", "A dúvida te causa medo ou curiosidade?"]
          },
          {
            id: "1-1-2",
            title: "Aula 2: Da Caverna de Ontem aos Algoritmos de Hoje",
            objectives: ["Analisar a transição do Mito para o Logos", "Identificar novos 'mitos' na cultura digital"],
            theory: `Antigamente, os gregos explicavam o mundo através de mitos: trovões eram a fúria de Zeus. Hoje, nós rimos disso, mas será que não temos nossos próprios mitos?

O **Mito** é uma explicação baseada na fé, na autoridade e na emoção. O **Logos** é a busca por explicações baseadas na razão e na prova.

**O Perigo dos Mitos Modernos:**
Hoje, os algoritmos criam "bolhas" que funcionam como a Caverna de Platão. Eles nos mostram apenas o que queremos ver, reforçando nossos preconceitos e nos impedindo de enxergar a realidade completa. 

A Filosofia é o esforço de trocar a 'história bonita' (Mito) pela 'verdade necessária' (Logos).`,
            methodology: "Comparação entre narrativas de influenciadores e fatos científicos.",
            activities: [
              { id: "act1", title: "Detectando Mitos na Rede", description: "Identifique um 'perfil perfeito' de rede social que você segue. Aquilo é a realidade ou um mito construído?", questions: ["O que torna aquela imagem um 'mito'?", "Como a busca por essa 'perfeição' afeta a saúde mental dos jovens?"] },
              { id: "act2", title: "Fé vs Razão", description: "Em que momentos da sua vida você age mais pelo 'Mito' (emoção/tradição) e em quais age pelo 'Logos' (lógica)?", questions: ["Dê um exemplo de cada situação:"] }
            ],
            reflectionQuestions: ["A ciência pode explicar tudo?", "Os mitos são necessários para a vida humana?"]
          },
          {
            id: "1-1-5",
            title: "Aula 5: Heráclito e o Mundo Instantâneo",
            objectives: ["Compreender o conceito de Devir", "Relacionar a mudança constante com a ansiedade juvenil"],
            theory: `Heráclito dizia: "Tudo flui" (*Panta Rhei*). Nada é permanente, exceto a própria mudança. Imagine sua vida: suas células mudam, seus gostos musicais de dois anos atrás parecem estranhos agora, seus amigos mudam.

**O Devir na Era do Click:**
Vivemos em um tempo onde a mudança é acelerada. Uma "trend" morre em uma semana. Heráclito nos ensina que tentar segurar o tempo é impossível. O conflito (a luta dos opostos) é o que faz o mundo girar. Sem o dia, não entenderíamos a noite; sem a tristeza, a alegria não teria sentido.`,
            methodology: "Análise de fotos antigas dos alunos e discussão sobre identidade.",
            activities: [
              { id: "act1", title: "O Rio da sua Vida", description: "Se você não é a mesma pessoa de ontem, o que garante que você continua sendo 'você'?", questions: ["O que mudou em você no último ano?", "Existe algo em você que nunca muda? O quê?"] },
              { id: "act2", title: "O Lado Bom do Conflito", description: "Heráclito dizia que a guerra/conflito é pai de todas as coisas. Pense em um problema que você enfrentou e que te fez crescer.", questions: ["Qual foi o problema?", "Como esse 'conflito' te transformou em alguém melhor?"] }
            ],
            reflectionQuestions: ["A velocidade do mundo hoje te gera ansiedade? Como a ideia de que 'tudo passa' pode te ajudar?"]
          },
          {
            id: "1-1-8",
            title: "Aula 8: Demócrito e a Realidade Invisível",
            objectives: ["Conhecer o Atomismo", "Refletir sobre o materialismo e o propósito da vida"],
            theory: `Imagine que você quebra uma barra de chocolate infinitamente. Demócrito dizia que chegaríamos em uma partícula indivisível: o **Átomo**. 

Para ele, tudo o que existe — inclusive sua alma e seus pensamentos — são apenas átomos se chocando no vazio. É uma visão **materialista**. 

**A Pergunta que fica:**
Se somos apenas um conjunto de peças físicas se movendo, onde fica nossa liberdade? Somos apenas "máquinas biológicas" ou existe algo a mais que a ciência não explica?`,
            methodology: "Debate sobre Inteligência Artificial e consciência.",
            activities: [
              { id: "act1", title: "Somos Máquinas?", description: "Se um robô fosse feito de átomos idênticos aos seus e programado para ter suas memórias, ele seria você?", questions: ["Sim ou não? Justifique:", "O que nos diferencia de um objeto inanimado?"] },
              { id: "act2", title: "A Ordem no Caos", description: "Demócrito achava que tudo era acaso e necessidade. Você sente que sua vida tem um destino ou que você constrói cada passo?", questions: ["Sua visão sobre o destino:"] }
            ],
            reflectionQuestions: ["O fato de sermos feitos de matéria diminui a beleza da vida?"]
          }
        ]
      },
      {
        id: 2,
        title: "2º Bimestre: O Humano como Centro do Debate",
        lessons: [
          {
            id: "1-2-10",
            title: "Aula 10: Sócrates e a Arte de Incomodar",
            objectives: ["Entender a Ironia e a Maiêutica", "Valorizar a humildade intelectual"],
            theory: `Sócrates não escreveu livros. Ele caminhava pela praça e fazia perguntas que irritavam quem achava que sabia de tudo. Sua frase famosa "Só sei que nada sei" não é sinal de burrice, mas de **honestidade**. 

**O Método:**
1. **Ironia:** Ele fingia ignorância para mostrar que o outro estava cheio de preconceitos.
2. **Maiêutica:** "Parto das ideias". Ele acreditava que a verdade já está dentro de você, e o papel do professor é apenas ajudar a "dar à luz" esse conhecimento.

Socrátizar hoje é ter a coragem de dizer "eu não sei" em um mundo onde todos querem ter opinião sobre tudo no Twitter.`,
            methodology: "Simulação de um diálogo socrático sobre 'O que é o amor?'.",
            activities: [
              { id: "act1", title: "Limpando a Mente", description: "Liste três coisas que você 'tinha certeza' quando era criança e que hoje descobriu que não são bem assim.", questions: ["Exemplos de ideias que mudaram:", "Como você se sentiu ao descobrir que estava errado?"] },
              { id: "act2", title: "Sendo Socrático", description: "Se você encontrasse um influenciador que ostenta uma vida perfeita, que pergunta 'socrática' você faria para ele?", questions: ["Sua pergunta:"] }
            ],
            reflectionQuestions: ["Por que as pessoas têm tanto medo de admitir que não sabem algo?", "Você prefere uma mentira confortável ou uma verdade que incomoda?"]
          },
          {
            id: "1-2-13",
            title: "Aula 13: Aristóteles e o Equilíbrio (O Meio-Termo)",
            objectives: ["Compreender a Ética das Virtudes", "Aplicar o conceito de equilíbrio às escolhas juvenis"],
            theory: `Aristóteles achava que a felicidade (*Eudaimonia*) não é um prêmio que você ganha, mas um jeito de viver. E o segredo está no **Equilíbrio**.

**A Virtude é o Meio-Termo:**
- **Excesso:** Temeridade (fazer coisas perigosas sem pensar).
- **Falta:** Covardia (ter medo de tudo).
- **Equilíbrio (Virtude):** Coragem.

Isso vale para tudo: comida, sono, estudo, uso de redes sociais. O vício está nos extremos. A virtude está em saber a medida certa para você.`,
            methodology: "Gráfico de equilíbrio das atividades diárias.",
            activities: [
              { id: "act1", title: "Encontrando a Medida", description: "Pense no seu uso do celular. Onde estaria o excesso, a falta e o equilíbrio?", questions: ["Excesso:", "Falta:", "Equilíbrio (Virtude):"] },
              { id: "act2", title: "Amizade Real", description: "Para Aristóteles, existem amizades por interesse, por prazer e a amizade verdadeira (pelo bem do outro).", questions: ["Como você diferencia um 'colega de rolê' de um amigo virtuoso?", "Você tem sido um amigo virtuoso para alguém?"] }
            ],
            reflectionQuestions: ["A felicidade depende mais do que acontece com você ou de como você reage ao que acontece?"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "2ª Série",
    description: "Convivência: Ética, Poder e Liberdade",
    color: "bg-emerald-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: Quem Manda em Quem? (Política)",
        lessons: [
          {
            id: "2-1-31",
            title: "Aula 31: Maquiavel e o Jogo do Poder",
            objectives: ["Diferenciar Moral de Política", "Analisar a liderança na vida real"],
            theory: `Maquiavel chocou o mundo ao dizer que um governante não precisa ser "bonzinho", ele precisa ser **eficiente**. Para ele, na política, os fins (manter a ordem e o poder) justificam os meios.

**Virtù e Fortuna:**
- **Virtù:** É a astúcia, a capacidade de agir na hora certa (não é virtude cristã!).
- **Fortuna:** É a sorte, os imprevistos da vida.

Um bom líder é aquele que tem a *Virtù* para dominar a *Fortuna*. Na escola, no esporte ou no trabalho, você verá que nem sempre o mais "legal" é o que consegue liderar o grupo.`,
            methodology: "Análise de lideranças em séries (ex: House of Cards, Game of Thrones).",
            activities: [
              { id: "act1", title: "Amado ou Temido?", description: "Maquiavel dizia que é melhor ser temido do que amado, se não puder ser os dois. Você concorda?", questions: ["Sua opinião aplicada a um capitão de time ou líder de sala:", "Quais os riscos de ser apenas 'amado' em uma posição de liderança?"] },
              { id: "act2", title: "Estratégia no Cotidiano", description: "Pense em um objetivo que você quer muito. O que seria agir com 'Virtù' para alcançá-lo?", questions: ["Seu objetivo:", "Sua estratégia (Virtù):"] }
            ],
            reflectionQuestions: ["É possível ser um político 100% honesto e vencer?", "Você já precisou ser 'frio' para resolver um problema sério?"]
          }
        ]
      },
      {
        id: 2,
        title: "2º Bimestre: O que eu devo fazer? (Ética)",
        lessons: [
          {
            id: "2-2-38",
            title: "Aula 38: Kant e a Regra que vale para todos",
            objectives: ["Entender o Imperativo Categórico", "Refletir sobre a integridade pessoal"],
            theory: `Immanuel Kant criou um teste simples para saber se algo é certo ou errado: o **Imperativo Categórico**.

Pergunte-se: "Se todo mundo fizesse o que eu estou prestes a fazer, o mundo seria um lugar bom?". 
Se você vai colar na prova, imagine se todos colassem: o diploma não valeria nada. Se você vai mentir, imagine se todos mentissem: a confiança deixaria de existir.

Para Kant, a ética não depende de como você se sente, mas da sua **razão** e do seu **dever**. É fazer o certo porque é o certo, mesmo que ninguém esteja vendo.`,
            methodology: "Aplicação do teste de Kant a dilemas escolares comuns.",
            activities: [
              { id: "act1", title: "O Teste da Universalidade", description: "Escolha uma pequena 'trapaça' do dia a dia (ex: jogar lixo no chão, furar fila).", questions: ["O que aconteceria se 1 milhão de pessoas fizessem isso ao mesmo tempo?", "Por que tendemos a abrir exceções para nós mesmos?"] },
              { id: "act2", title: "Pessoas não são Coisas", description: "Kant diz que nunca devemos usar as pessoas apenas como 'meios' para nossos fins.", questions: ["Dê um exemplo de quando alguém é usado como objeto (em relacionamentos ou trabalho):"] }
            ],
            reflectionQuestions: ["Você age para 'se dar bem' ou para fazer o que é correto?", "A ética morre quando ninguém está olhando?"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "3ª Série",
    description: "Existência: Sentido, Liberdade e Escolhas",
    color: "bg-purple-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: O Peso da Liberdade (Existencialismo)",
        lessons: [
          {
            id: "3-1-53",
            title: "Aula 53: Sartre e a Angústia de Escolher",
            objectives: ["Compreender a Liberdade Radical", "Identificar a Má-Fé nas desculpas cotidianas"],
            theory: `Sartre disse: "Estamos condenados a ser livres". Não há um manual de instruções para a vida. Você não nasceu com um "destino" escrito. Você é o que você faz com o que fizeram de você.

**A Má-Fé:**
É quando damos desculpas para não assumir a responsabilidade pelas nossas escolhas: "Ah, eu sou assim porque meu signo é tal", "Eu não estudo porque meus pais não me apoiam", "Eu não mudo porque 'nasci assim'". 

Para o existencialismo, isso é mentir para si mesmo. Você é o único arquiteto do seu futuro.`,
            methodology: "Criação de um 'Manifesto de Responsabilidade Pessoal'.",
            activities: [
              { id: "act1", title: "Destruindo Desculpas", description: "Identifique uma 'Má-Fé' (desculpa) que você usa para não mudar algo que te incomoda.", questions: ["Qual é a desculpa?", "Como seria sua vida se você assumisse 100% da responsabilidade por isso a partir de hoje?"] },
              { id: "act2", title: "Criando sua Essência", description: "Se você pudesse definir quem você quer ser em três palavras, sem levar em conta o que sua família quer, quais seriam?", questions: ["Suas três palavras:"] }
            ],
            reflectionQuestions: ["A liberdade te assusta ou te motiva?", "Se Deus ou o Destino não existem, a vida perde o sentido ou ganha mais valor?"]
          }
        ]
      }
    ]
  }
];
