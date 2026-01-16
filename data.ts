
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
        title: "1º Bimestre: A Origin de Filosofia e os Pré-Socráticos",
        lessons: [
          {
            id: "1-1-1",
            title: "Aula 1: O que é Filosofia?",
            objectives: ["Diferenciar o saber do achar", "Entender a atitude filosófica"],
            theory: `A Filosofia não é um conjunto de respostas prontas, mas a arte de fazer perguntas que ninguém quer fazer. No dia a dia, vivemos no "senso comum": aceitamos o que os influenciadores dizem, o que a família repete e o que o algoritmo nos mostra. Filosofar é dar um "passo atrás" e perguntar: "Por que eu acredito nisso?". É a coragem de usar a própria razão para não ser apenas um eco do mundo, mas uma voz própria.`,
            methodology: "Debate sobre 'Verdade vs. Opinião' nas redes sociais.",
            activities: [{ id: "act1", title: "Saindo do Automático", description: "Identifique uma 'certeza' sua.", questions: ["De onde veio essa ideia?", "Existem provas para ela ou você apenas a aceitou?"] }],
            reflectionQuestions: ["Você prefere uma mentira confortável ou uma verdade perturbadora?"]
          },
          {
            id: "1-1-2",
            title: "Aula 2: Do Mito ao Logos",
            objectives: ["Entender a transição do pensamento mítico para o racional"],
            theory: `O Mito explica o mundo através de histórias emocionais e deuses. O Logos explica através da lógica e da observação. Na Grécia antiga, isso foi uma revolução. Hoje, ainda vivemos entre mitos (como o mito de que o consumo traz felicidade) e o Logos (a ciência). Transitar para o Logos significa buscar a causa real das coisas, não apenas uma história bonita.`,
            methodology: "Análise de propagandas que criam 'mitos' modernos.",
            activities: [{ id: "act1", title: "Mitos de Hoje", description: "Qual 'mito' você vê na internet?", questions: ["Como a razão pode desmascarar esse mito?", "Por que os mitos ainda nos atraem tanto?"] }],
            reflectionQuestions: ["A ciência matou a magia do mundo?"]
          },
          {
            id: "1-1-3",
            title: "Aula 3: Tales de Mileto: o primeiro filósofo",
            objectives: ["Compreender a busca pela Arché"],
            theory: `Tales olhou para a natureza e disse: "Tudo é água". Parece simples, mas foi a primeira vez que alguém buscou um princípio natural (*Arché*) sem recorrer aos deuses. No Tocantins, com nossos rios Araguaia e Tocantins, entendemos bem o valor da água. Tales nos ensina que o universo tem uma unidade material que a razão pode descobrir.`,
            methodology: "Discussão sobre a importância da água na vida e no pensamento.",
            activities: [{ id: "act1", title: "Princípio Único", description: "Se Tales estivesse vivo hoje, o que ele diria?", questions: ["A água ainda é o elemento mais vital?", "O que acontece se perdermos nossa Arché natural?"] }],
            reflectionQuestions: ["Você consegue ver a conexão entre todas as coisas?"]
          },
          {
            id: "1-1-4",
            title: "Aula 4: Anaximandro: o infinito como princípio",
            objectives: ["Conhecer o conceito de Ápeiron"],
            theory: `Anaximandro achava que a água era limitada demais para ser a origem de tudo. Ele propôs o *Ápeiron*: o indeterminado, o infinito. Para ele, tudo nasce e morre para pagar a injustiça de existir. É um pensamento profundo sobre o tempo e o equilíbrio do universo.`,
            methodology: "Visualização do espaço sideral e reflexão sobre o infinito.",
            activities: [{ id: "act2", title: "O Indeterminado", description: "O que é o infinito para você?", questions: ["Pode algo vir do nada?", "O universo tem fim?"] }],
            reflectionQuestions: ["O que te causa mais medo: o nada ou o infinito?"]
          },
          {
            id: "1-1-5",
            title: "Aula 5: Heráclito: o filósofo do devir",
            objectives: ["Compreender o fluxo constante da realidade"],
            theory: `Heráclito dizia: "Tudo flui". Você não é a mesma pessoa que era ontem. Suas células mudaram, seus pensamentos mudaram. O conflito entre opostos (dia e noite, amor e ódio) é o que move o mundo. A mudança não é um erro, é a essência da vida.`,
            methodology: "Comparação entre fotos de infância e o presente.",
            activities: [{ id: "act3", title: "O Rio da Vida", description: "Reflita sobre suas mudanças.", questions: ["O que nunca muda em você?", "A mudança te assusta ou te motiva?"] }],
            reflectionQuestions: ["Você está em guerra com a mudança?"]
          },
          {
            id: "1-1-6",
            title: "Aula 6: Parmênides: o filósofo do Ser",
            objectives: ["Entender a imutabilidade do Ser"],
            theory: `Ao contrário de Heráclito, Parmênides dizia que a mudança é uma ilusão dos sentidos. O "Ser é". Existe uma verdade profunda que não muda nunca. Para ele, a razão nos leva ao eterno, enquanto os sentidos nos enganam com o passageiro.`,
            methodology: "Debate: A essência de uma pessoa pode mudar?",
            activities: [{ id: "act4", title: "A Verdade Imutável", description: "Busque algo que nunca muda.", questions: ["Existe alguma verdade absoluta?", "Por que nossos sentidos nos enganam?"] }],
            reflectionQuestions: ["O que em você é eterno?"]
          },
          {
            id: "1-1-7",
            title: "Aula 7: Empédocles e Anaxágoras: tentativas de síntese",
            objectives: ["Conhecer o pluralismo pré-socrático"],
            theory: `Esses filósofos tentaram unir Heráclito e Parmênides. Empédocles falou dos quatro elementos movidos pelo Amor e pelo Ódio. Anaxágoras falou das sementes (*homeomerias*) movidas pela Inteligência (*Nous*). Eles mostram que a realidade é uma mistura complexa.`,
            methodology: "Criação de diagramas sobre as forças que movem o mundo.",
            activities: [{ id: "act5", title: "Forças do Mundo", description: "O que move a sociedade hoje?", questions: ["O amor e o ódio ainda explicam o comportamento humano?", "Existe uma inteligência por trás do universo?"] }],
            reflectionQuestions: ["O mundo é fruto do acaso ou de um plano?"]
          },
          {
            id: "1-1-8",
            title: "Aula 8: Demócrito e o Atomismo",
            objectives: ["Entender a base materialista da realidade"],
            theory: `Demócrito foi longe: tudo é feito de átomos e vazio. Até nossa alma seria feita de átomos finos. É uma visão materialista: não precisamos de deuses para explicar a matéria, apenas as leis da física. O mundo é uma grande máquina de partículas.`,
            methodology: "Uso de blocos de montar para exemplificar o atomismo.",
            activities: [{ id: "act6", title: "Blocos da Realidade", description: "Se tudo é átomo, o que é o sentimento?", questions: ["Como átomos podem gerar pensamentos?", "O vazio é necessário para a vida?"] }],
            reflectionQuestions: ["Somos apenas máquinas biológicas?"]
          },
          {
            id: "1-1-9",
            title: "Aula 9: Síntese Bimestral",
            objectives: ["Revisar e conectar os conceitos pré-socráticos"],
            theory: `Neste bimestre, viajamos da água de Tales ao átomo de Demócrito. Vimos a luta entre a mudança (Heráclito) e a permanência (Parmênides). Todos eles tentaram responder: "Qual a origem de tudo?". Agora, estamos prontos para sair da natureza e olhar para o ser humano.`,
            methodology: "Mapa mental gigante conectando todos os filósofos vistos.",
            activities: [{ id: "act7", title: "Meu Mapa Filosófico", description: "Conecte as ideias.", questions: ["Qual filósofo você mais gostou?", "Como essas ideias antigas ajudam a entender o mundo hoje?"] }],
            reflectionQuestions: ["Sua mente está mais aberta do que no início do bimestre?"]
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
            objectives: ["Conhecer a Ironia e a Maiêutica"],
            theory: `Sócrates não escreveu livros; ele conversava nas praças. Sua missão era incomodar quem achava que sabia tudo. "Só sei que nada sei" é o ápice da sabedoria. Ele usava a Ironia para quebrar certezas e a Maiêutica para fazer as pessoas "darem à luz" suas próprias ideias. Morreu para ser fiel à sua consciência.`,
            methodology: "Prática do diálogo socrático em sala.",
            activities: [{ id: "act8", title: "O Peso da Dúvida", description: "Duvide de algo 'óbvio'.", questions: ["O que é a amizade?", "Você pode provar que ela existe?"] }],
            reflectionQuestions: ["Você tem coragem de admitir que não sabe?"]
          },
          {
            id: "1-2-11",
            title: "Aula 11: Platão: o mundo das ideias",
            objectives: ["Diferenciar aparência de realidade"],
            theory: `Para Platão, este mundo que vemos é uma cópia borrada do Mundo das Ideias. O Mito da Caverna mostra que vivemos presos a sombras (opiniões, fakes, aparências). A educação é o esforço de sair da caverna e contemplar a luz da Verdade.`,
            methodology: "Análise de um filme ou série sobre realidade simulada.",
            activities: [{ id: "act9", title: "Sombras Modernas", description: "Quais são as sombras da sua caverna?", questions: ["O celular é uma nova caverna?", "Como podemos ver a luz?"] }],
            reflectionQuestions: ["Você prefere ser feliz na ilusão ou livre na verdade?"]
          },
          {
            id: "1-2-12",
            title: "Aula 12: A República de Platão: Justiça e Política",
            objectives: ["Compreender a cidade ideal"],
            theory: `Platão imaginou uma cidade onde cada um faz o que tem aptidão: os trabalhadores, os soldados e o Filósofo-Rei. Para ele, a política é uma questão de saber técnico e sabedoria, não de popularidade. A justiça é cada parte cumprindo sua função em harmonia.`,
            methodology: "Simulação: Criando a escola ideal.",
            activities: [{ id: "act10", title: "Minha Calípolis", description: "Como seria sua cidade ideal?", questions: ["Quem deveria governar?", "O que é justo em uma sociedade desigual?"] }],
            reflectionQuestions: ["A democracia é o melhor sistema?"]
          },
          {
            id: "1-2-13",
            title: "Aula 13: Aristóteles: A Filosofia prática",
            objectives: ["Entender a ética da virtude e do meio-termo"],
            theory: `Aristóteles trouxe a filosofia de volta para a terra. Para ele, a felicidade (*Eudaimonia*) se alcança pelo hábito da virtude. A virtude é o "meio-termo" entre dois vícios. Ex: A coragem está entre a covardia e a temeridade.`,
            methodology: "Mapeamento das virtudes necessárias no cotidiano.",
            activities: [{ id: "act11", title: "Buscando o Equilíbrio", description: "Analise seu comportamento.", questions: ["Em que você é exagerado?", "Como chegar ao meio-termo?"] }],
            reflectionQuestions: ["Você é feliz ou apenas sente prazeres passageiros?"]
          },
          {
            id: "1-2-14",
            title: "Aula 14: Aristóteles: política e sociedade",
            objectives: ["Compreender o ser humano como animal político"],
            theory: `O homem é um *Zoon Politikon*. Só somos humanos plenamente vivendo na *Polis*. A política para Aristóteles é a ética aplicada ao coletivo: o objetivo do Estado deve ser o bem-comum e a felicidade de todos os cidadãos.`,
            methodology: "Debate sobre o papel do cidadão na escola.",
            activities: [{ id: "act12", title: "Animal Político", description: "Como você participa da sua comunidade?", questions: ["A política é suja ou nós que nos afastamos?", "O que é o bem-comum hoje?"] }],
            reflectionQuestions: ["Você vive para si ou para o todo?"]
          },
          {
            id: "1-2-15",
            title: "Aula 15: Lógica Aristotélica",
            objectives: ["Aprender as regras do raciocínio"],
            theory: `Aristóteles criou o Silogismo: se A é B e B é C, logo A é C. A lógica é a ferramenta (Órganon) do pensamento correto. Ela nos protege de cair em mentiras e falácias. Pensar com lógica é pensar com clareza.`,
            methodology: "Oficina de detecção de falácias em anúncios.",
            activities: [{ id: "act13", title: "Pensando Certo", description: "Crie silogismos.", questions: ["Todos os jovens gostam de música; eu sou jovem; logo...", "Onde a lógica falha nas discussões de internet?"] }],
            reflectionQuestions: ["Você é lógico ou emocional?"]
          },
          {
            id: "1-2-16",
            title: "Aula 16: Comparação entre Sócrates, Platão e Aristóteles",
            objectives: ["Sintetizar o período clássico"],
            theory: `Sócrates questionou, Platão idealizou, Aristóteles organizou. Juntos, eles formam a base de tudo o que pensamos sobre ética, política e verdade. Comparar esses três é entender como o pensamento humano evoluiu do questionamento à sistematização.`,
            methodology: "Quadro comparativo dinâmico.",
            activities: [{ id: "act14", title: "Os Três Pilares", description: "Qual método você prefere?", questions: ["Perguntar (Sócrates), Imaginar (Platão) ou Observar (Aristóteles)?", "Justifique sua escolha."] }],
            reflectionQuestions: ["Qual deles faz mais sentido na sua vida hoje?"]
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
            objectives: ["Conhecer o Teocentrismo"],
            theory: `Na Idade Média, o foco mudou da razão pura para a Fé. Deus é o centro de tudo (*Teocentrismo*). A filosofia tornou-se a "serva da teologia". O desafio era conciliar a sabedoria grega com os dogmas cristãos.`,
            methodology: "Análise de imagens de catedrais medievais.",
            activities: [{ id: "act15", title: "Deus no Centro", description: "Como a religião moldou o pensamento?", questions: ["A fé exclui a razão?", "O que é verdade por fé?"] }],
            reflectionQuestions: ["Onde você busca suas verdades: na fé ou na prova?"]
          },
          {
            id: "1-3-18",
            title: "Aula 18: Santo Agostinho: Fé e Razão",
            objectives: ["Conhecer a Teoria da Iluminação"],
            theory: `Agostinho foi influenciado por Platão. Ele dizia: "Creio para entender". Para ele, a verdade está dentro de nós, mas só a luz de Deus pode iluminar nossa mente para que possamos enxergá-la. É uma filosofia da interioridade.`,
            methodology: "Momento de introspecção e silêncio.",
            activities: [{ id: "act16", title: "Luz Interior", description: "Reflita sobre sua intuição.", questions: ["Você já sentiu que 'sabia' algo sem ninguém ensinar?", "A fé ajuda a entender o mundo?"] }],
            reflectionQuestions: ["O que ilumina seus caminhos?"]
          },
          {
            id: "1-3-19",
            title: "Aula 19: Santo Tomás de Aquino: Razão e Fé em harmonia",
            objectives: ["Conhecer a Escolástica"],
            theory: `Influenciado por Aristóteles, Tomás de Aquino acreditava que Fé e Razão não se contradizem porque ambas vêm de Deus. Ele criou as "Cinco Vias" para provar a existência de Deus usando a lógica. A razão pode nos levar até certo ponto; a fé completa o caminho.`,
            methodology: "Debate sobre ciência e religião.",
            activities: [{ id: "act17", title: "As Cinco Vias", description: "Analise um argumento de Tomás.", questions: ["O mundo precisa de uma 'causa primeira'?", "A ordem da natureza prova um criador?"] }],
            reflectionQuestions: ["Ciência e religião podem ser amigas?"]
          },
          {
            id: "1-3-20",
            title: "Aula 20: João Duns Escoto e Guilherme de Ockham",
            objectives: ["Entender o Nominalismo e a separação fé/razão"],
            theory: `Ockham criou a "Navalha de Ockham": a explicação mais simples costuma ser a correta. Ele separou definitivamente a fé da razão, dizendo que Deus não pode ser provado pela lógica, apenas aceito pela fé. Isso abriu caminho para a ciência moderna.`,
            methodology: "Aplicação da 'Navalha de Ockham' a mistérios cotidianos.",
            activities: [{ id: "act18", title: "A Navalha de Ockham", description: "Simplifique um problema.", questions: ["Por que gostamos de complicar as coisas?", "Deus precisa ser explicado pela lógica?"] }],
            reflectionQuestions: ["Você é uma pessoa prática ou mística?"]
          },
          {
            id: "1-3-21",
            title: "Aula 21: Renascimento: transição para a modernidade",
            objectives: ["Conhecer o Antropocentrismo"],
            theory: `O Renascimento colocou o ser humano de volta no centro (*Antropocentrismo*). É a valorização da capacidade humana, da arte e da descoberta. O mundo deixou de ser apenas um lugar de passagem para o céu e tornou-se um lugar para ser explorado e compreendido.`,
            methodology: "Análise de obras de Da Vinci e Michelangelo.",
            activities: [{ id: "act19", title: "Homem Vitruviano", description: "O que o ser humano é capaz de fazer?", questions: ["O que mudou na visão sobre o homem?", "Como a arte reflete a liberdade?"] }],
            reflectionQuestions: ["Você se sente o centro da sua própria história?"]
          },
          {
            id: "1-3-22",
            title: "Aula 22: A revolução científica",
            objectives: ["Entender o Heliocentrismo e o método experimental"],
            theory: `Copérnico, Galileu e Kepler mudaram nossa posição no universo: a Terra não é o centro. Isso quebrou certezas milenares. A ciência passou a exigir observação, matemática e experimento. O conhecimento tornou-se poder sobre a natureza.`,
            methodology: "Simulação do sistema solar e experimentos simples.",
            activities: [{ id: "act20", title: "Novos Mundos", description: "Como a ciência muda nossa vida?", questions: ["Por que foi difícil aceitar que a Terra se move?", "A ciência nos dá poder ou responsabilidade?"] }],
            reflectionQuestions: ["Você aceitaria uma verdade que destrói tudo o que você acredita?"]
          },
          {
            id: "1-3-23",
            title: "Aula 23: Síntese bimestral: medieval ao renascimento",
            objectives: ["Rever a jornada da fé para a razão científica"],
            theory: `Neste bimestre, vimos como o pensamento oscilou entre o céu e a terra. Da submissão à fé na Idade Média à explosão de criatividade e ciência no Renascimento. Vimos que a dúvida é o que faz a humanidade avançar.`,
            methodology: "Linha do tempo comparativa.",
            activities: [{ id: "act21", title: "Transição de Eras", description: "O que ficou de cada época?", questions: ["Ainda somos medievais em algum aspecto?", "O que é ser 'renascentista' hoje?"] }],
            reflectionQuestions: ["Qual é a maior invenção humana: a fé ou a ciência?"]
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
            objectives: ["Compreender o Racionalismo e o Cogito"],
            theory: `Descartes decidiu duvidar de tudo para encontrar uma certeza absoluta. Ele duvidou dos sentidos, dos sonhos e até da matemática. Mas ele percebeu uma coisa: se ele duvida, ele pensa. "Penso, logo existo" (*Cogito, ergo sum*). A razão é o único guia seguro.`,
            methodology: "Exercício de 'dúvida metódica'.",
            activities: [{ id: "act22", title: "Duvido, logo existo", description: "Tente duvidar da sua própria existência.", questions: ["Você pode provar que não está em uma simulação?", "Por que a razão é importante?"] }],
            reflectionQuestions: ["O que é impossível de duvidar?"]
          },
          {
            id: "1-4-25",
            title: "Aula 25: John Locke: o empirismo inglês",
            objectives: ["Entender a Tábula Rasa"],
            theory: `Locke discordava de Descartes. Para ele, nascemos como uma "folha em branco" (*Tábula Rasa*). Todo o nosso conhecimento vem da experiência dos sentidos. Nada está na mente que não tenha passado antes pelos olhos, ouvidos ou mãos.`,
            methodology: "Experiência sensorial (cheiros, texturas) e debate.",
            activities: [{ id: "act23", title: "Folha em Branco", description: "O que você aprendeu apenas pela experiência?", questions: ["Podemos saber algo sem nunca ter visto?", "Como os sentidos moldam quem somos?"] }],
            reflectionQuestions: ["Você aprende mais lendo ou vivendo?"]
          },
          {
            id: "1-4-26",
            title: "Aula 26: Thomas Hobbes: o contrato social",
            objectives: ["Analisar a visão pessimista do Estado de Natureza"],
            theory: `Hobbes achava que, sem leis, o homem seria o "lobo do homem". Viveríamos em uma guerra de todos contra todos. Para termos paz, fazemos um contrato social e entregamos o poder a um soberano forte (o Leviatã). Segurança é mais importante que liberdade.`,
            methodology: "Análise do livro/filme 'O Senhor das Moscas'.",
            activities: [{ id: "act24", title: "O Lobo do Homem", description: "O que aconteceria se a polícia sumisse?", questions: ["Somos maus por natureza?", "Por que precisamos de leis?"] }],
            reflectionQuestions: ["Você prefere ser livre e inseguro ou protegido e vigiado?"]
          },
          {
            id: "1-4-27",
            title: "Aula 27: John Locke: liberalismo político",
            objectives: ["Compreender os direitos naturais"],
            theory: `Para Locke, o contrato social serve para proteger nossos direitos naturais: Vida, Liberdade e Propriedade. Se o governo não protege isso, o povo tem o direito de se rebelar. É a base das democracias modernas.`,
            methodology: "Criação de uma 'Declaração de Direitos' da turma.",
            activities: [{ id: "act25", title: "Meus Direitos", description: "O que ninguém pode tirar de você?", questions: ["O Estado pode mandar na sua vida privada?", "Por que a propriedade é um direito para Locke?"] }],
            reflectionQuestions: ["O que é ser livre para você?"]
          },
          {
            id: "1-4-28",
            title: "Aula 28: Jean-Jacques Rousseau: a vontade geral",
            objectives: ["Entender o 'Bom Selvagem' e a Democracia Direta"],
            theory: `Rousseau dizia que o homem nasce bom, mas a sociedade o corrompe. O contrato social deve ser a expressão da "Vontade Geral", onde todos participam. A verdadeira liberdade é obedecer às leis que nós mesmos criamos para o bem de todos.`,
            methodology: "Debate sobre desigualdade social.",
            activities: [{ id: "act26", title: "Vontade de Todos vs. Geral", description: "Diferencie o interesse privado do público.", questions: ["A sociedade te melhorou ou te piorou?", "Como ouvir a voz de todos?"] }],
            reflectionQuestions: ["Você é corrompido pela pressão dos outros?"]
          },
          {
            id: "1-4-29",
            title: "Aula 29: O iluminismo: a idade da razão",
            objectives: ["Conhecer os ideais de Liberdade, Igualdade e Fraternidade"],
            theory: `O Iluminismo foi o movimento de "saída da menoridade" da humanidade. Sapere Aude: tenha coragem de saber! Defendia a razão contra a superstição, a ciência contra o dogma e a liberdade contra a tirania. Moldou o mundo em que vivemos hoje.`,
            methodology: "Análise de slogans iluministas e sua presença atual.",
            activities: [{ id: "act27", title: "Luzes da Razão", description: "O que precisa ser iluminado hoje?", questions: ["Ainda existem trevas na sociedade?", "Como a educação nos liberta?"] }],
            reflectionQuestions: ["Você tem coragem de pensar por si mesmo?"]
          },
          {
            id: "1-4-30",
            title: "Aula 30: Síntese bimestral: modernidade e iluminismo",
            objectives: ["Finalizar o ano letivo conectando a filosofia à vida"],
            theory: `Terminamos o ano entendendo como o pensamento moderno criou nossos conceitos de ciência, política e direitos humanos. Vimos que a Filosofia não é coisa do passado, mas a ferramenta que usamos para construir o futuro. Você agora tem os instrumentos para ser um cidadão crítico e consciente.`,
            methodology: "Cápsula do tempo: uma carta para o 'eu' do futuro sobre o que aprendeu.",
            activities: [{ id: "act28", title: "Legado do Ano", description: "O que você leva dessa jornada?", questions: ["Qual ideia mudou sua forma de ver o mundo?", "Como você vai usar a filosofia daqui para frente?"] }],
            reflectionQuestions: ["Você se sente mais livre do que quando o ano começou?"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "2ª Série",
    description: "Convivência: Filosofia, Política e Ética",
    color: "bg-emerald-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: Liberalismo e Contrato Social",
        lessons: [
          {
            id: "2-1-31",
            title: "Aula 31: Maquiavel: realismo político",
            objectives: ["Diferenciar moral privada de moral pública"],
            theory: `Maquiavel é o pai da ciência política moderna. Ele diz que o governante deve ver o mundo como ele é, não como deveria ser. Ter *Virtù* é ter astúcia para enfrentar a *Fortuna* (sorte). Às vezes, para manter a paz no Estado, o líder precisa tomar decisões que parecem crueis mas são necessárias. A política não é para amadores.`,
            methodology: "Análise de liderança em games de estratégia.",
            activities: [{ id: "act31", title: "O Príncipe Moderno", description: "Como um líder deve agir?", questions: ["É melhor ser amado ou temido?", "Os fins justificam os meios na política?"] }],
            reflectionQuestions: ["Você sacrificaria um amigo pelo bem da sala inteira?"]
          },
          {
            id: "2-1-32",
            title: "Aula 32: Hobbes revisitado: o Leviatã e o poder absoluto",
            objectives: ["Entender a necessidade da autoridade"],
            theory: `Sem um poder comum, vivemos com medo. Hobbes argumenta que o contrato social é um pacto de submissão: damos nossa liberdade ao Estado (Leviatã) para que ele garanta nossa sobrevivência. A ordem é o valor supremo.`,
            methodology: "Debate sobre segurança pública e câmeras de vigilância.",
            activities: [{ id: "act32", title: "Segurança ou Liberdade?", description: "Avalie o papel do Estado.", questions: ["O Estado deve ter poder total?", "O que aconteceria se as leis sumissem hoje?"] }],
            reflectionQuestions: ["Você confia nas pessoas por natureza?"]
          },
          {
            id: "2-1-33",
            title: "Aula 33: Locke aprofundado: liberalismo e direitos naturais",
            objectives: ["Aprofundar nos direitos fundamentais"],
            theory: `Para Locke, o ser humano já tem direitos antes de existir governo: vida, liberdade e propriedade. O Estado só existe para ser o "juiz" desses direitos. Se o governante ataca a liberdade, o povo tem o direito de removê-lo. É o limite do poder.`,
            methodology: "Discussão sobre o direito à propriedade privada no Brasil.",
            activities: [{ id: "act33", title: "Meus Direitos Naturais", description: "O que o governo nunca pode te tirar?", questions: ["Por que a propriedade é importante para Locke?", "Onde termina sua liberdade e começa a do outro?"] }],
            reflectionQuestions: ["Você sente que sua liberdade é respeitada?"]
          },
          {
            id: "2-1-34",
            title: "Aula 34: Rousseau aprofundado: democracia e vontade geral",
            objectives: ["Compreender a soberania popular"],
            theory: `Rousseau acredita que só somos livres quando obedecemos a leis que nós mesmos criamos. A "Vontade Geral" não é a soma dos desejos egoístas, mas o que é melhor para a comunidade. O povo é o verdadeiro soberano, não o rei.`,
            methodology: "Simulação de uma assembleia popular.",
            activities: [{ id: "act34", title: "Vontade de Todos vs. Geral", description: "Aponte a diferença.", questions: ["O que é bom para você, mas ruim para a turma?", "Como decidir o futuro de um país de forma justa?"] }],
            reflectionQuestions: ["Você participa das decisões da sua escola?"]
          },
          {
            id: "2-1-35",
            title: "Aula 35: Comparação das teorias contratualistas",
            objectives: ["Sintetizar as visões de Estado"],
            theory: `Hobbes quer ordem; Locke quer liberdade; Rousseau quer igualdade. Cada um deles deu uma peça do que chamamos hoje de Democracia Liberal. Entender essas diferenças é entender por que o mundo político é tão dividido.`,
            methodology: "Criação de um infográfico comparativo.",
            activities: [{ id: "act35", title: "O Estado Ideal", description: "Qual contrato você assinaria?", questions: ["Qual teoria faz mais sentido no Brasil atual?", "Justifique sua resposta baseada em fatos."] }],
            reflectionQuestions: ["Você se sente parte de um 'contrato social'?"]
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
            objectives: ["Diferenciar ética de moral"],
            theory: `Moral são as regras de comportamento (o que fazemos). Ética é a reflexão sobre essas regras (por que fazemos). A moral muda com a cultura e o tempo; a ética busca princípios universais. Ser ético é decidir o que é certo mesmo quando ninguém está olhando.`,
            methodology: "Análise de dilemas morais cotidianos (ex: achar dinheiro no pátio).",
            activities: [{ id: "act36", title: "O Certo e o Errado", description: "Dê exemplos de moral vs. ética.", questions: ["O que é imoral hoje, mas era moral há 50 anos?", "Por que precisamos de ética?"] }],
            reflectionQuestions: ["Suas ações combinam com o que você diz?"]
          },
          {
            id: "2-2-37",
            title: "Aula 37: Ética aristotélica: virtudes e felicidade",
            objectives: ["Praticar a ética do meio-termo"],
            theory: `A ética de Aristóteles é a do equilíbrio. A virtude não nasce conosco, é um hábito. Se você quer ser justo, aja com justiça todos os dias. A felicidade é o resultado de uma vida vivida com excelência e propósito.`,
            methodology: "Criação de um 'diário de virtudes'.",
            activities: [{ id: "act37", title: "O Hábito do Bem", description: "Qual virtude você quer desenvolver?", questions: ["Qual o ponto de equilíbrio na sua vida hoje?", "Como evitar os excessos?"] }],
            reflectionQuestions: ["O que te faz verdadeiramente feliz?"]
          },
          {
            id: "2-2-38",
            title: "Aula 38: Kant e o imperativo categórico",
            objectives: ["Entender a ética do dever"],
            theory: `Kant diz: não faça aos outros o que você não quer que seja uma lei para todos. Se você mente, você gostaria que todos mentissem sempre? Se não, então mentir é errado, não importa a situação. A ética é uma obrigação da razão, baseada no respeito à dignidade humana.`,
            methodology: "Aplicação do teste da universalização em fofocas.",
            activities: [{ id: "act38", title: "Teste de Kant", description: "Universalize uma ação sua.", questions: ["E se todos fizessem o que você fez?", "O ser humano deve ser sempre um fim, nunca um meio. O que isso significa?"] }],
            reflectionQuestions: ["Você age por dever ou por interesse?"]
          },
          {
            id: "2-2-39",
            title: "Aula 39: Utilitarismo: a ética das consequências",
            objectives: ["Compreender a ética pragmática"],
            theory: `Para o Utilitarismo (Bentham e Mill), o que importa é o resultado: a maior felicidade para o maior número de pessoas. É uma ética de cálculo. Às vezes, o sacrifício de poucos é aceitável pelo bem de muitos. É a lógica usada em hospitais e governos.`,
            methodology: "Debate: O Dilema do Trem.",
            activities: [{ id: "act39", title: "Calculando a Felicidade", description: "Resolva um dilema utilitarista.", questions: ["É justo sacrificar um para salvar dez?", "Como medir a dor e o prazer?"] }],
            reflectionQuestions: ["A maioria sempre tem razão?"]
          },
          {
            id: "2-2-40",
            title: "Aula 40: Comparação das teorias éticas",
            objectives: ["Sintetizar as bases da moralidade"],
            theory: `Vimos três caminhos: Caráter (Aristóteles), Dever (Kant) e Consequência (Utilitarismo). Na vida real, alternamos entre eles. Saber qual ética estamos usando nos ajuda a tomar decisões mais conscientes e justas.`,
            methodology: "Role-play de um conselho de ética escolar.",
            activities: [{ id: "act40", title: "Meu Código de Ética", description: "Crie suas 3 regras de ouro.", questions: ["Qual das três teorias você mais usa?", "Justifique sua escolha com um exemplo real."] }],
            reflectionQuestions: ["Você é uma pessoa de princípios ou de resultados?"]
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
            objectives: ["Entender a alienação e a mais-valia"],
            theory: `Marx analisa como o trabalho no capitalismo nos afasta de nós mesmos (*alienação*). O trabalhador produz o que não pode comprar. A história é movida pela luta de classes. Para Marx, a filosofia não deve apenas interpretar o mundo, mas transformá-lo.`,
            methodology: "Análise da cadeia de produção de um smartphone.",
            activities: [{ id: "act41", title: "Trabalho e Consumo", description: "Onde está a alienação hoje?", questions: ["Por que consumimos tanto?", "O que é 'luta de classes' no século XXI?"] }],
            reflectionQuestions: ["Você é dono do seu tempo ou seu tempo é vendido?"]
          },
          {
            id: "2-3-42",
            title: "Aula 42: Michel Foucault: poder e disciplina",
            objectives: ["Analisar a microfísica do poder"],
            theory: `O poder para Foucault não está só no topo, está em todo lugar: na escola, na fábrica, no hospital. Somos vigiados por olhos invisíveis (Panóptico) e treinados para sermos "corpos dóceis". Hoje, o algoritmo é o nosso maior vigilante.`,
            methodology: "Discussão sobre câmeras, redes sociais e privacidade.",
            activities: [{ id: "act42", title: "Vigiados e Punidos", description: "Identifique o poder no seu dia a dia.", questions: ["Como a escola te molda?", "Por que obedecemos mesmo sem ninguém olhando?"] }],
            reflectionQuestions: ["Você age para agradar ao 'olhar' dos outros nas redes?"]
          },
          {
            id: "2-3-43",
            title: "Aula 43: Hannah Arendt: a condição humana",
            objectives: ["Compreender a ação política e o totalitarismo"],
            theory: `Arendt defende a política como o espaço da fala e da liberdade. Ela nos alerta sobre a "Banalidade do Mal": como pessoas comuns podem cometer atrocidades apenas obedecendo ordens sem pensar. Agir politicamente é aparecer para o mundo e começar algo novo.`,
            methodology: "Análise de discursos de ódio e extremismo.",
            activities: [{ id: "act43", title: "Pensar o que fazemos", description: "O que é 'banalidade do mal' hoje?", questions: ["É possível ser mau apenas por não pensar?", "Qual a importância da vida pública?"] }],
            reflectionQuestions: ["Você tem coragem de dizer 'não' a uma ordem injusta?"]
          },
          {
            id: "2-3-44",
            title: "Aula 44: Comparação dos pensadores políticos contemporâneos",
            objectives: ["Sintetizar a crítica ao poder moderno"],
            theory: `Marx olhou para a economia, Foucault para a disciplina e Arendt para a ação. Eles nos ajudam a entender as sombras da nossa sociedade e a buscar caminhos para uma liberdade real e participativa.`,
            methodology: "Fórum de discussão sobre o futuro da democracia.",
            activities: [{ id: "act44", title: "Diagnóstico do Presente", description: "Quem mais acerta sobre o mundo atual?", questions: ["A economia (Marx) ou a vigilância (Foucault) mandam mais?", "Justifique."] }],
            reflectionQuestions: ["O que te faz sentir um cidadão ativo?"]
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
            objectives: ["Entender o Véu da Ignorância"],
            theory: `Rawls propõe um experimento: se você não soubesse quem seria na sociedade (rico ou pobre, homem ou mulher), quais regras você criaria? Isso é o "Véu da Ignorância". A justiça é equidade: garantir que os menos favorecidos tenham as melhores chances possíveis.`,
            methodology: "Jogo: 'A Sociedade sob o Véu'.",
            activities: [{ id: "act45", title: "Justiça como Equidade", description: "Crie uma regra justa para sua escola.", questions: ["O que é uma desigualdade justa?", "Como o véu da ignorância muda sua opinião?"] }],
            reflectionQuestions: ["Você aceitaria sua vida se ela fosse sorteada ao acaso?"]
          },
          {
            id: "2-4-46",
            title: "Aula 46: Amartya Sen: desenvolvimento como liberdade",
            objectives: ["Compreender as capacidades humanas"],
            theory: `Desenvolvimento não é só dinheiro (PIB), é ter liberdade para escolher a vida que se quer levar. Isso exige saúde, educação e voz política. Ser pobre é ser privado de capacidades. A justiça deve focar no que as pessoas são capazes de ser e fazer.`,
            methodology: "Análise do IDH do Tocantins comparado a outros estados.",
            activities: [{ id: "act46", title: "Minhas Capacidades", description: "O que você é livre para fazer?", questions: ["Ter dinheiro é o mesmo que ter liberdade?", "O que falta na sua cidade para as pessoas serem mais livres?"] }],
            reflectionQuestions: ["O que te impede de alcançar seu potencial?"]
          },
          {
            id: "2-4-47",
            title: "Aula 47: Direitos humanos: fundamentos e desafios",
            objectives: ["Analisar a Declaração Universal"],
            theory: `Os direitos humanos são o reconhecimento da dignidade inerente a todo ser humano. Eles são universais, mas sofrem ataques constantes. A filosofia fundamenta esses direitos não na lei, mas na nossa própria humanidade. Defendê-los é defender a nós mesmos.`,
            methodology: "Estudo de casos reais de violação de direitos.",
            activities: [{ id: "act47", title: "Dignidade Humana", description: "Qual direito é o mais urgente hoje?", questions: ["Por que os direitos humanos são criticados?", "Como protegê-los no dia a dia?"] }],
            reflectionQuestions: ["Você respeita quem pensa diferente de você?"]
          },
          {
            id: "2-4-48",
            title: "Aula 48: Ações afirmativas e justiça social",
            objectives: ["Debater as cotas e a reparação histórica"],
            theory: `A justiça social exige tratar os desiguais de forma desigual para atingir a igualdade real. As ações afirmativas (como as cotas) são ferramentas de reparação e inclusão. É a diferença entre igualdade (dar o mesmo) e equidade (dar o necessário).`,
            methodology: "Debate estruturado sobre o sistema de cotas.",
            activities: [{ id: "act48", title: "Corrigindo o Jogo", description: "Dê sua opinião fundamentada.", questions: ["A meritocracia funciona em um mundo desigual?", "Como a história do Brasil justifica as cotas?"] }],
            reflectionQuestions: ["Você se sente responsável pela justiça no seu país?"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "3ª Série",
    description: "Escolha: Existencialismo, Ciência, Tecnologia e Meio Ambiente",
    color: "bg-purple-600",
    bimesters: [
      {
        id: 1,
        title: "1º Bimestre: Filosofia Contemporânea e Existencialismo",
        lessons: [
          {
            id: "3-1-49",
            title: "Aula 49: Introdução à Filosofia contemporânea",
            objectives: ["Situar a filosofia pós-grandes guerras", "Entender a crise da razão"],
            theory: `A filosofia contemporânea nasce do choque das guerras e da perda da fé no progresso ilimitado. A razão, que prometia a paz, criou a bomba atômica. O foco muda para o cotidiano, a linguagem e a existência concreta. Não buscamos mais a 'Verdade Única', mas entendemos as 'verdades' de cada contexto.`,
            methodology: "Análise de notícias sobre conflitos globais atuais.",
            activities: [{ id: "act49", title: "O Mundo em Crise", description: "O que mudou na nossa forma de pensar?", questions: ["A tecnologia nos tornou mais racionais?", "O que é ser 'contemporâneo' para você?"] }],
            reflectionQuestions: ["Você acredita que a humanidade está evoluindo ou apenas mudando?"]
          },
          {
            id: "3-1-50",
            title: "Aula 50: Soren Kierkegaard: a angústia da escolha",
            objectives: ["Compreender o conceito de angústia", "Diferenciar os estágios da vida"],
            theory: `Kierkegaard é o pai do existencialismo. Para ele, a liberdade é uma vertigem. Sentimos angústia porque temos que escolher o tempo todo, e cada escolha mata uma possibilidade. Ele fala dos estágios: Estético (prazer), Ético (dever) e Religioso (fé). Viver é decidir quem você quer ser diante de Deus ou do nada.`,
            methodology: "Dinâmica de escolha difícil (Dilema dos Caminhos).",
            activities: [{ id: "act50", title: "A Vertigem da Liberdade", description: "Por que escolher dá medo?", questions: ["Você já sentiu 'frio na barriga' antes de uma decisão?", "É melhor ter poucas ou muitas opções?"] }],
            reflectionQuestions: ["O que você faz com a sua liberdade?"]
          },
          {
            id: "3-1-51",
            title: "Aula 51: Friedrich Nietzsche: crítica aos valores",
            objectives: ["Entender o Niilismo e a Morte de Deus"],
            theory: `Nietzsche diz que os valores tradicionais (moral cristã) são 'moral de escravos' que enfraquecem a vida. Ele anuncia a 'Morte de Deus' (o fim das verdades absolutas) e propõe o *Ubermensch* (Além-do-homem): aquele que cria seus próprios valores e diz 'sim' à vida como ela é, com dor e prazer.`,
            methodology: "Análise da letra de músicas de rock/rap que questionam o sistema.",
            activities: [{ id: "act51", title: "Criação de Valores", description: "O que é bom apenas porque os outros dizem?", questions: ["Quais valores da sociedade você mudaria?", "O que é 'viver perigosamente' hoje?"] }],
            reflectionQuestions: ["Você é um camelo (obedece), um leão (se revolta) ou uma criança (cria)?"]
          },
          {
            id: "3-1-52",
            title: "Aula 52: Martin Heidegger: ser e tempo",
            objectives: ["Conhecer o conceito de Dasein", "Diferenciar vida autêntica de inautêntica"],
            theory: `Heidegger diz que somos *Dasein* (Ser-aí), lançados no mundo sem pedir. Vivemos na 'inautenticidade' quando apenas seguimos a massa (o 'eles'). A única certeza é a morte. Quando aceitamos que somos 'seres-para-a-morte', paramos de perder tempo com bobagens e começamos a viver de forma autêntica.`,
            methodology: "Exercício: Se você tivesse apenas um ano de vida, o que faria?",
            activities: [{ id: "act52", title: "Ser-Aí", description: "Onde você está lançando sua vida?", questions: ["O que te faz agir como 'todo mundo'?", "Como a pressa te impede de 'ser'?"] }],
            reflectionQuestions: ["Você está vivendo sua vida ou a vida que esperam de você?"]
          },
          {
            id: "3-1-53",
            title: "Aula 53: Jean-Paul Sartre: existencialismo e liberdade",
            objectives: ["Compreender que 'a existência precede a essência'"],
            theory: `Para Sartre, não nascemos com um destino. Primeiro existimos, depois nos definimos pelas nossas escolhas. "O homem está condenado a ser livre". Não há desculpas: se você é triste, você escolheu como reagir à tristeza. A 'Má-fé' é fingir que não temos escolha.`,
            methodology: "Debate sobre responsabilidade e desculpas comuns.",
            activities: [{ id: "act53", title: "Condenado a Escolher", description: "Assuma a responsabilidade.", questions: ["O que é 'Má-fé' no seu dia a dia?", "Por que a liberdade pode ser um fardo?"] }],
            reflectionQuestions: ["Quem é você quando ninguém está olhando?"]
          },
          {
            id: "3-1-54",
            title: "Aula 54: Simone de Beauvoir: feminismo existencialista",
            objectives: ["Analisar a frase 'Não se nasce mulher, torna-se mulher'"],
            theory: `Beauvoir aplicou o existencialismo à condição feminina. Ser 'mulher' não é biologia, é uma construção social (essência imposta). Ela defende que a mulher deve ser o 'Sujeito' de sua própria vida, não o 'Outro' definido pelo homem. A liberdade deve ser conquistada por todos.`,
            methodology: "Análise de estereótipos de gênero na mídia.",
            activities: [{ id: "act54", title: "Tornar-se Humano", description: "Quais papéis sociais te prendem?", questions: ["O que a sociedade espera de um homem e de uma mulher?", "Como quebrar essas essências impostas?"] }],
            reflectionQuestions: ["Você é livre para ser quem quiser?"]
          },
          {
            id: "3-1-55",
            title: "Aula 55: Albert Camus: o absurdo da existência",
            objectives: ["Entender o Mito de Sísifo", "Conhecer o conceito de revolta"],
            theory: `Camus diz que a vida é absurda: buscamos sentido em um universo que não nos responde. Como Sísifo, que empurra a pedra montanha acima para vê-la cair sempre. A solução não é o suicídio, mas a 'revolta': viver com intensidade apesar do absurdo. "É preciso imaginar Sísifo feliz".`,
            methodology: "Discussão sobre rotina e repetição.",
            activities: [{ id: "act55", title: "Empurrando a Pedra", description: "Encontre alegria no esforço.", questions: ["Sua rotina parece absurda às vezes?", "Como ser feliz mesmo sem um 'grande propósito'?"] }],
            reflectionQuestions: ["O que te faz levantar da cama todos os dias?"]
          },
          {
            id: "3-1-56",
            title: "Aula 56: Comparação das filosofias existencialistas",
            objectives: ["Sintetizar a angústia, a liberdade e o absurdo"],
            theory: `Neste bimestre, vimos que existir é um desafio constante. Kierkegaard nos deu a fé, Nietzsche o poder de criar, Sartre a responsabilidade total e Camus a coragem de viver o absurdo. Agora, você entende que sua vida é sua maior obra de arte.`,
            methodology: "Painel criativo: Minha Filosofia de Vida.",
            activities: [{ id: "act56", title: "Resumo da Existência", description: "Qual existencialista você é hoje?", questions: ["Escolha um conceito e aplique a um problema seu.", "Como essas ideias mudam seu futuro?"] }],
            reflectionQuestions: ["Você está pronto para ser o autor da sua história?"]
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
            objectives: ["Entender o que é ciência hoje", "Diferenciar fato de interpretação"],
            theory: `A ciência não é mais vista como uma verdade absoluta e eterna, mas como o melhor conhecimento que temos agora. A epistemologia estuda como validamos esse conhecimento. No mundo das *fake news*, entender o que torna algo científico é vital para não sermos enganados.`,
            methodology: "Comparação entre notícias científicas e boatos de WhatsApp.",
            activities: [{ id: "act57", title: "O que é Ciência?", description: "Defina o saber confiável.", questions: ["Por que confiamos na ciência?", "Como um cientista prova que está certo?"] }],
            reflectionQuestions: ["Você acredita em tudo o que lê?"]
          },
          {
            id: "3-2-58",
            title: "Aula 58: Karl Popper: falseabilidade da ciência",
            objectives: ["Compreender o critério de demarcação"],
            theory: `Para Popper, uma teoria só é científica se puder ser testada e provada falsa. Se uma ideia explica tudo e não aceita críticas (como horóscopo ou teorias da conspiração), ela não é ciência. A ciência avança por tentativas e erros.`,
            methodology: "Teste de hipóteses: O que pode ser falseado?",
            activities: [{ id: "act58", title: "Provando o Erro", description: "Crie uma frase que possa ser falseada.", questions: ["Por que a crítica é boa para a ciência?", "Como saber se uma teoria é pseudociência?"] }],
            reflectionQuestions: ["Você aceita ser corrigido quando está errado?"]
          },
          {
            id: "3-2-59",
            title: "Aula 59: Thomas Kuhn: paradigmas científicos",
            objectives: ["Conhecer o conceito de Revolução Científica"],
            theory: `Kuhn diz que a ciência vive de 'Paradigmas' (modelos aceitos). Quando surgem muitos problemas que o modelo não explica, ocorre uma crise e uma 'Revolução'. Ex: quando mudamos da física de Newton para a de Einstein. A ciência não é apenas lógica, é também social.`,
            methodology: "Linha do tempo das grandes mudanças de pensamento.",
            activities: [{ id: "act59", title: "Mudança de Lentes", description: "O que é um paradigma hoje?", questions: ["Podemos estar vivendo em um paradigma errado?", "Por que as pessoas resistem a novas ideias?"] }],
            reflectionQuestions: ["Qual ideia você achava certa e hoje sabe que mudou?"]
          },
          {
            id: "3-2-60",
            title: "Aula 60: Paul Feyerabend: anarquismo metodológico",
            objectives: ["Refletir sobre a liberdade na busca pelo saber"],
            theory: `Feyerabend foi o 'enfant terrible' da ciência. Ele dizia que "tudo vale" (*anything goes*). Para ele, não existe um método único. Grandes descobertas aconteceram porque cientistas quebraram as regras. A ciência não deve ser uma nova religião dogmática.`,
            methodology: "Debate: A ciência deve ter limites?",
            activities: [{ id: "act60", title: "Ciência sem Regras", description: "Pense fora da caixa.", questions: ["A imaginação é mais importante que o método?", "Onde a regra atrapalha a descoberta?"] }],
            reflectionQuestions: ["Você é uma pessoa metódica ou criativa?"]
          },
          {
            id: "3-2-61",
            title: "Aula 61: Filosofia e tecnologia",
            objectives: ["Analisar a técnica como modo de vida"],
            theory: `A tecnologia não é só ferramenta, é como vemos o mundo. Heidegger nos alertou que a técnica nos faz ver a natureza apenas como 'recurso' para estoque. Perdemos a capacidade de contemplar. Somos usados pelas nossas próprias máquinas?`,
            methodology: "Análise do tempo de tela e dependência digital.",
            activities: [{ id: "act61", title: "O Senhor das Máquinas", description: "Quem manda em quem?", questions: ["Você conseguiria viver sem internet por um mês?", "Como o celular mudou sua forma de pensar?"] }],
            reflectionQuestions: ["Sua tecnologia te liberta ou te escraviza?"]
          },
          {
            id: "3-2-62",
            title: "Aula 62: Inteligência artificial e ética",
            objectives: ["Debater o futuro da IA e o sentido do humano"],
            theory: `Se uma IA pode criar arte e escrever textos, o que sobra para o humano? Estudamos os riscos éticos: algoritmos viciados, desemprego e a perda da privacidade. A IA deve estar a serviço da vida, não o contrário.`,
            methodology: "Teste de ferramentas de IA generativa e crítica dos resultados.",
            activities: [{ id: "act62", title: "A Mente na Máquina", description: "A IA pode ter ética?", questions: ["Uma IA deve decidir quem vive em um acidente?", "O que uma máquina nunca terá que um humano tem?"] }],
            reflectionQuestions: ["Você tem medo do futuro tecnológico?"]
          },
          {
            id: "3-2-63",
            title: "Aula 63: Biotecnologia e bioética",
            objectives: ["Discutir engenharia genética e limites da vida"],
            theory: `Podemos editar o DNA, escolher características de bebês e prolongar a vida. Mas devemos? A bioética coloca limites: respeito à autonomia, justiça e não-maleficência. O risco é criarmos uma nova desigualdade genética.`,
            methodology: "Debate sobre edição genética e clonagem.",
            activities: [{ id: "act63", title: "Designers de Gente", description: "Você mudaria seu DNA?", questions: ["É ético criar seres humanos 'perfeitos'?", "Quem teria acesso a essas tecnologias?"] }],
            reflectionQuestions: ["O que define a nossa dignidade: nosso DNA ou nossas ações?"]
          },
          {
            id: "3-2-64",
            title: "Aula 64: Tecnologia e sociedade",
            objectives: ["Sintetizar o impacto da tecnologia na democracia"],
            theory: `Terminamos o bimestre vendo como a tecnologia molda a política (redes sociais, bolhas, vigilância). A filosofia da tecnologia nos chama para sermos cidadãos digitais críticos, não apenas consumidores passivos.`,
            methodology: "Criação de um 'Manifesto para uma Tecnologia Ética'.",
            activities: [{ id: "act64", title: "Cidadania Digital", description: "Como melhorar o mundo online?", questions: ["Como sair da sua bolha digital?", "A tecnologia ajuda ou atrapalha a democracia?"] }],
            reflectionQuestions: ["Como você quer ser lembrado no mundo digital?"]
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
            objectives: ["Entender o Antropoceno", "Reconhecer a urgência climática"],
            theory: `Vivemos no Antropoceno: a época em que o homem mudou o planeta. A crise ambiental não é só falta de árvores, é uma crise de pensamento. Achamos que o mundo é infinito e está aqui só para nós. Precisamos de uma nova forma de habitar a Terra.`,
            methodology: "Análise de dados climáticos locais do Tocantins.",
            activities: [{ id: "act65", title: "O Peso do Humano", description: "Como você afeta o planeta?", questions: ["O que é o Antropoceno?", "Por que demoramos tanto para agir?"] }],
            reflectionQuestions: ["O planeta precisa de nós ou nós precisamos dele?"]
          },
          {
            id: "3-3-66",
            title: "Aula 66: Ética ambiental: antropocentrismo vs ecocentrismo",
            objectives: ["Diferenciar visões de mundo ambientais"],
            theory: `O Antropocentrismo foca só no homem (o mundo é um almoxarifado). O Ecocentrismo vê a vida como um todo com valor intrínseco (a montanha e o rio têm direitos). A ética ambiental nos convida a sair do umbigo humano e respeitar todas as formas de vida.`,
            methodology: "Caminhada ecológica ou observação da natureza local.",
            activities: [{ id: "act66", title: "O Valor da Vida", description: "Um animal vale tanto quanto um homem?", questions: ["Por que protegemos uns animais e comemos outros?", "O que é uma visão ecocêntrica?"] }],
            reflectionQuestions: ["Você se sente parte da natureza?"]
          },
          {
            id: "3-3-67",
            title: "Aula 67: Desenvolvimento sustentável",
            objectives: ["Criticar o modelo de consumo", "Conhecer a Agenda 2030"],
            theory: `Sustentabilidade é usar o que precisamos hoje sem comprometer o futuro dos seus filhos. O modelo de 'comprar e jogar fora' é insustentável. Precisamos de uma economia circular e de um consumo consciente.`,
            methodology: "Cálculo da pegada ecológica dos alunos.",
            activities: [{ id: "act67", title: "Consumo Consciente", description: "Reduza seu impacto.", questions: ["O que você comprou e não precisava?", "Como a escola pode ser mais sustentável?"] }],
            reflectionQuestions: ["Dá para ser feliz consumindo menos?"]
          },
          {
            id: "3-3-68",
            title: "Aula 68: Mudanças climáticas e responsabilidade",
            objectives: ["Debater a justiça climática"],
            theory: `As mudanças climáticas afetam mais os pobres, que menos poluíram. Hans Jonas propõe o 'Princípio Responsabilidade': ajamos de modo que a vida humana futura continue sendo possível. Temos um dever ético com quem ainda não nasceu.`,
            methodology: "Estudo de caso: O impacto do calor no Tocantins.",
            activities: [{ id: "act68", title: "Dever com o Futuro", description: "O que você diria para um jovem de 2100?", questions: ["Quem deve pagar pela crise climática?", "Como você pode agir localmente?"] }],
            reflectionQuestions: ["Você se preocupa com as gerações futuras?"]
          },
          {
            id: "3-3-69",
            title: "Aula 69: Ecofeminismo",
            objectives: ["Relacionar a dominação da mulher e da natureza"],
            theory: `O ecofeminismo argumenta que a exploração da natureza e a opressão das mulheres têm a mesma raiz patriarcal e dominadora. Defende uma ética do cuidado e da cooperação, valorizando a vida e a regeneração contra o lucro a qualquer custo.`,
            methodology: "Roda de conversa sobre cuidado e preservação.",
            activities: [{ id: "act69", title: "Ética do Cuidado", description: "Cuidar é um ato político.", questions: ["Por que a natureza é vista como feminina?", "Como o cuidado pode salvar o planeta?"] }],
            reflectionQuestions: ["Quem cuida de você? E de quem você cuida?"]
          },
          {
            id: "3-3-70",
            title: "Aula 70: Direitos da natureza",
            objectives: ["Conhecer leis que protegem rios e florestas como sujeitos"],
            theory: `Alguns países e cidades já reconhecem rios (como o Ganges ou rios no Brasil) como 'pessoas jurídicas'. Eles têm direito a existir e serem protegidos. Isso muda a filosofia do direito: a natureza deixa de ser objeto e vira sujeito.`,
            methodology: "Simulação de um tribunal: O Rio Tocantins processa o Estado.",
            activities: [{ id: "act70", title: "Natureza Sujeito", description: "Defenda um elemento natural.", questions: ["Um rio pode ter advogados?", "Quais seriam os direitos de uma árvore?"] }],
            reflectionQuestions: ["Se a natureza pudesse falar, o que ela diria de nós?"]
          },
          {
            id: "3-3-71",
            title: "Aula 71: Filosofia indígena e meio ambiente",
            objectives: ["Aprender com o 'Bem Viver' e as ideias de Ailton Krenak"],
            theory: `Os povos originários nos ensinam o 'Bem Viver': harmonia com a terra. Krenak diz que precisamos 'adiar o fim do mundo' contando histórias e percebendo que somos a própria Terra. A natureza não é algo fora de nós; nós somos a natureza.`,
            methodology: "Leitura e audição de textos de Ailton Krenak.",
            activities: [{ id: "act71", title: "Adiar o Fim do Mundo", description: "O que é o 'Bem Viver'?", questions: ["O que podemos aprender com os povos indígenas?", "Como viver sem destruir o que nos sustenta?"] }],
            reflectionQuestions: ["Sua vida está conectada com o lugar onde você mora?"]
          },
          {
            id: "3-3-72",
            title: "Aula 72: Futuro da humanidade e planeta",
            objectives: ["Sintetizar as esperanças e deveres ambientais"],
            theory: `Concluímos que a sustentabilidade exige uma mudança de alma. Não é só reciclar lixo, é reciclar o pensamento. O futuro depende da nossa capacidade de cooperação e de amor pela vida em todas as suas formas.`,
            methodology: "Criação de uma exposição fotográfica ou artística: 'O Amanhã que Queremos'.",
            activities: [{ id: "act72", title: "Projeto Terra", description: "Desenhe o futuro sustentável.", questions: ["O que você vai mudar nos seus hábitos hoje?", "Como sua profissão futura pode ser verde?"] }],
            reflectionQuestions: ["Você é um otimista ou um pessimista sobre o futuro?"]
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
            objectives: ["Refletir sobre o 'Quem sou eu?'", "Entender a identidade como processo"],
            theory: `A identidade não é algo fixo. Somos uma mistura de nossa história, nossa cultura e nossas escolhas. Para a filosofia, o 'eu' é uma construção que nunca termina. Conhecer a si mesmo é o primeiro passo para a liberdade.`,
            methodology: "Construção de um 'Mapa da Identidade' pessoal.",
            activities: [{ id: "act73", title: "Quem Sou Eu?", description: "Vá além do nome e idade.", questions: ["Quais rótulos te deram que você quer jogar fora?", "O que te torna único?"] }],
            reflectionQuestions: ["Se você perdesse todas as suas memórias, quem você seria?"]
          },
          {
            id: "3-4-74",
            title: "Aula 74: Multiculturalismo e diversidade",
            objectives: ["Valorizar a diferença", "Combater o preconceito"],
            theory: `A diversidade é a maior riqueza da humanidade. O multiculturalismo defende que nenhuma cultura é superior. O preconceito nasce do medo do desconhecido. Filosofar sobre a diversidade é aprender a ver a beleza na diferença e a lutar por respeito.`,
            methodology: "Análise de conflitos culturais e casos de superação.",
            activities: [{ id: "act74", title: "O Outro em Mim", description: "Pratique a empatia.", questions: ["Por que a diferença incomoda tanto?", "Como sua cultura te define?"] }],
            reflectionQuestions: ["Você aceita o diferente ou apenas o tolera?"]
          },
          {
            id: "3-4-75",
            title: "Aula 75: Filosofia afro-brasileira",
            objectives: ["Conhecer a filosofia da ancestralidade e do Ubuntu"],
            theory: `A filosofia não nasceu só na Grécia. A filosofia africana nos traz o *Ubuntu*: "Eu sou porque nós somos". Focamos na força da coletividade, na importância dos ancestrais e na resistência contra o racismo. A identidade brasileira é profundamente marcada por essa sabedoria.`,
            methodology: "Roda de conversa sobre coletividade e ancestralidade.",
            activities: [{ id: "act75", title: "Ubuntu", description: "O que é coletividade?", questions: ["Como você ajuda seu grupo a crescer?", "O que você herdou dos seus antepassados?"] }],
            reflectionQuestions: ["Você consegue ser feliz sozinho?"]
          },
          {
            id: "3-4-76",
            title: "Aula 76: Gênero e sexualidade",
            objectives: ["Entender as construções sociais de gênero", "Respeitar a diversidade"],
            theory: `Discutimos como a sociedade dita como devemos nos comportar com base no gênero. A filosofia nos ajuda a desconstruir preconceitos e a entender que o respeito à orientação sexual e à identidade de gênero é um direito humano fundamental. Liberdade é ser quem se é.`,
            methodology: "Debate sobre direitos LGBTQIA+ e respeito.",
            activities: [{ id: "act76", title: "Respeito e Liberdade", description: "Combata o preconceito.", questions: ["O que é 'ser homem' ou 'ser mulher' para a sociedade?", "Como o preconceito afeta a vida das pessoas?"] }],
            reflectionQuestions: ["Você se sente livre para expressar quem você é?"]
          },
          {
            id: "3-4-77",
            title: "Aula 77: Juventude e projeto de vida",
            objectives: ["Pensar o futuro com propósito", "Planejar sonhos"],
            theory: `Projeto de Vida não é só escolher uma profissão, é escolher que tipo de ser humano você quer ser. É alinhar seus talentos, seus valores e o que o mundo precisa. A filosofia te dá a base para não viver 'deixa a vida me levar', mas para pilotar sua própria existência.`,
            methodology: "Criação de um 'Plano de Voo' para os próximos 5 anos.",
            activities: [{ id: "act77", title: "Meu Projeto de Vida", description: "Quais são seus sonhos?", questions: ["O que você ama fazer?", "Como você pode contribuir para o mundo?"] }],
            reflectionQuestions: ["Se o dinheiro não existisse, o que você faria da vida?"]
          },
          {
            id: "3-4-78",
            title: "Aula 78: Filosofia e vida do trabalho",
            objectives: ["Refletir sobre o sentido do trabalho", "Trabalho vs Emprego"],
            theory: `Trabalho é ação humana sobre o mundo. Pode ser libertador ou alienante. Discutimos a ética no trabalho, a importância da realização pessoal e como o trabalho deve servir à vida, não o contrário. O que você faz define o mundo que você constrói.`,
            methodology: "Entrevistas com profissionais de diferentes áreas sobre propósito.",
            activities: [{ id: "act78", title: "Trabalho com Alma", description: "Trabalho não é só salário.", questions: ["Para que serve o trabalho?", "Como evitar o esgotamento (burnout) no futuro?"] }],
            reflectionQuestions: ["Você quer trabalhar para viver ou viver para trabalhar?"]
          },
          {
            id: "3-4-79",
            title: "Aula 79: Cidadania e participação social",
            objectives: ["Sintetizar a jornada filosófica", "Incentivar o protagonismo juvenil"],
            theory: `Chegamos ao fim da jornada. Ser cidadão é participar da vida pública. A filosofia te ensinou a duvidar, a pensar, a sentir o outro e a cuidar do mundo. Agora, o protagonismo é seu. O Tocantins e o mundo esperam pela sua contribuição crítica e apaixonada.`,
            methodology: "Cerimônia de encerramento com apresentação dos Projetos de Vida.",
            activities: [{ id: "act79", title: "Meu Legado", description: "O que você deixa para a escola?", questions: ["Como você vai participar da sua comunidade?", "Qual a pergunta filosófica que você levará para sempre?"] }],
            reflectionQuestions: ["Você é hoje a pessoa que queria ser quando o ano começou?"]
          }
        ]
      }
    ]
  }
];
