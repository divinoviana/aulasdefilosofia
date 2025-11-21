
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
            theory: `A Filosofia não é apenas um conjunto de conhecimentos, mas uma atitude diante da vida. A palavra, atribuída a Pitágoras, une "Philos" (amizade/amor) e "Sophia" (sabedoria). O filósofo não é o dono da verdade, mas aquele que a busca incessantemente.

O pensamento filosófico se distingue por três características fundamentais (segundo Dermeval Saviani):
1. Radicalidade: A filosofia busca a raiz dos problemas. Não se contenta com a superfície ou com o "como" as coisas funcionam, mas pergunta "o que" são e "por que" são.
2. Rigor: Diferente da opinião (doxa), que pode ser vaga e contraditória, a filosofia exige argumentação lógica, conceitos claros e coerência sistêmica.
3. Totalidade: Enquanto as ciências estudam recortes da realidade (a biologia estuda a vida, a física o movimento), a filosofia busca compreender o todo, conectando diferentes saberes para entender a condição humana e o universo.

Diferenciação crucial:
- Mito: Explica o mundo através de narrativas sagradas e sobrenaturais.
- Senso Comum: Conhecimento prático, herdado pela tradição, útil para a sobrevivência, mas acrítico e fragmentado.
- Ciência: Conhecimento metódico e verificável sobre fatos específicos.
- Filosofia: Reflexão crítica sobre os fundamentos da realidade, da ciência, da ética e da arte.`,
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
            theory: `Por milênios, a humanidade explicou a realidade através do Mito. O mito não é uma "mentira", mas uma verdade simbólica para aquele povo. Ele narra a origem das coisas (cosmogonia) através da ação de deuses e heróis, apaziguando o medo do desconhecido.

No entanto, entre os séculos VII e VI a.C., na Grécia Antiga (Jônia), ocorreu o que chamamos de "Milagre Grego", ou a passagem do Mito para o Logos (razão/discurso racional).

Fatores históricos que permitiram essa mudança:
1. As Viagens Marítimas: Ao conhecerem outros povos e mitos diferentes, os gregos perceberam que suas histórias não eram verdades absolutas. O "desencantamento" do mundo exigiu novas explicações.
2. A Invenção da Política (Pólis): Na praça pública (Ágora), os cidadãos debatiam leis baseadas na argumentação, não na vontade divina. Esse hábito de debater migrou para a explicação da natureza.
3. A Moeda e a Escrita: Trouxeram a capacidade de abstração necessária para o pensamento conceitual.

A filosofia nasce como Cosmologia: uma explicação racional sobre a ordem (cosmos) do universo, sem recorrer a deuses, buscando causas naturais e necessárias.`,
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
            theory: `Tales de Mileto (624-546 a.C.) é o marco inicial da filosofia ocidental. Sua grande inovação não foi apenas a resposta que deu, mas a pergunta que fez: "Qual é o princípio (Arché) de todas as coisas?".

Ele buscava a Physis (natureza) — a substância primordial que permanece a mesma, apesar de todas as transformações.

Por que a Água?
Tales observou a natureza com um olhar empírico e racional. Ele notou que:
1. O alimento de todos os seres é úmido.
2. O calor vital nasce da umidade.
3. As sementes de todas as coisas têm natureza úmida.
4. A água é a única substância que observamos naturalmente nos três estados (sólido, líquido, gasoso).

Ao afirmar que "Tudo é água", Tales estava dizendo que o universo tem uma unidade material subjacente. Ele inaugurou o monismo (a ideia de que a realidade é, no fundo, uma coisa só) e o hilozoísmo (a ideia de que a matéria tem vida e movimento próprios).`,
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
            theory: `Anaximandro, discípulo de Tales, realizou um dos primeiros atos de crítica científica da história. Ele argumentou que a água não poderia ser o princípio de tudo. Por quê? Porque a água é um elemento determinado (é úmida e fria). Se tudo fosse água, o fogo (quente e seco) jamais poderia existir, pois seria extinto pelo seu oposto.

A Solução: O Ápeiron.
Para Anaximandro, o princípio deve ser algo que não é nenhum dos elementos conhecidos, mas algo anterior a eles. Ele chamou isso de Ápeiron, que significa "O Ilimitado", "Infinito" ou "Indeterminado".

Como funciona:
Do Ápeiron se desprendem os opostos (quente/frio, seco/úmido) que formam o mundo. O universo é um campo de batalha onde injustiças são cometidas (ex: o verão 'invade' o tempo do inverno) e o tempo impõe o equilíbrio. Anaximandro introduziu um nível de abstração altíssimo: o princípio da realidade não é algo visível (como a água), mas um conceito racional.`,
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
            theory: `Heráclito de Éfeso, o "Obscuro", propôs uma visão de mundo baseada na mudança perpétua. Sua frase famosa, "Ninguém se banha duas vezes no mesmo rio", indica que tanto o rio (que corre) quanto a pessoa (que envelhece) mudaram.

Conceitos Centrais:
1. O Devir (Fluxo): A essência da realidade não é "ser", mas "vir a ser". A estabilidade é uma ilusão dos sentidos; a realidade é um processo contínuo.
2. A Guerra dos Opostos: "A guerra é a mãe de todas as coisas". O mundo existe pela tensão entre contrários (dia/noite, vida/morte, guerra/paz). Se essa tensão cessasse, o mundo acabaria.
3. O Logos: Embora tudo mude, a mudança não é caótica. Existe uma Lei Universal (Logos) que rege as transformações, garantindo medida e proporção.
4. O Fogo: É a metáfora visual do Logos. O fogo é pura transformação: ele consome algo para existir, está sempre em movimento, mas mantém sua identidade como fogo.`,
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
            theory: `Parmênides de Eleia representa o oposto radical de Heráclito. Ele é o pai da ontologia (estudo do Ser) e da lógica da identidade.

Seu poema divide o conhecimento em dois caminhos:
1. A Via da Opinião (Doxa): É o caminho dos sentidos. Nossos olhos nos mostram movimento, nascimento e morte. Para Parmênides, isso é ilusão.
2. A Via da Verdade (Aletheia): É o caminho da razão pura.

O Argumento Lógico:
"O Ser é e não pode não ser. O Não-Ser não é e não pode ser".
Pensar implica pensar em algo que existe. Não se pode pensar no "nada".
Logo, o Ser deve ter características lógicas, não sensoriais:
- É Uno (se fossem dois, haveria o não-ser entre eles).
- É Eterno (não pode ter nascido do nada).
- É Imóvel (mudar é deixar de ser o que se é para ser o que não se é).
Parmênides desafia o senso comum: se a lógica diz que a mudança é contraditória, então a mudança é falsa, mesmo que a vejamos.`,
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
            theory: `Após o impasse entre Heráclito (tudo muda) e Parmênides (nada muda), os filósofos pluralistas tentaram uma síntese. Eles aceitaram que "do nada, nada vem" (Parmênides), mas tentaram explicar o movimento que vemos (Heráclito).

Empédocles:
Propôs que não há um único elemento, mas quatro raízes eternas: Terra, Água, Ar e Fogo. Elas são imutáveis (como queria Parmênides), mas se misturam em proporções diferentes para formar tudo o que vemos.
O que move isso? Duas forças cósmicas: O Amor (Philía), que une, e o Ódio (Neikos), que separa. O universo é um ciclo eterno de união e separação.

Anaxágoras:
Foi além, dizendo que "em tudo há uma parte de tudo". A realidade é composta de infinitas sementes (homeomerias). Um pedaço de pão contém partículas de osso, carne e cabelo (por isso nos alimenta).
O princípio ordenador não é o acaso, mas uma Inteligência Cósmica (Nous), que iniciou o movimento e organizou o caos inicial.`,
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
            theory: `Demócrito de Abdera (e seu mestre Leucipo) propuseram a solução mais genial da antiguidade, antecipando a física moderna em 2.400 anos.

A Teoria Atômica:
Para haver movimento sem violar a lógica, devem existir duas coisas:
1. O Ser (Átomos): Partículas indivisíveis, invisíveis, eternas, sólidas e infinitas em número. Eles não têm qualidades sensíveis (cor, cheiro), apenas forma, tamanho e posição.
2. O Não-Ser (Vazio): O espaço vazio onde os átomos se movem.

O mundo que percebemos (doce, amargo, quente, colorido) é uma convenção dos sentidos. Na realidade, existem apenas "átomos e vazio". Tudo acontece por choque mecânico e rearranjo de átomos.
Isso leva ao Materialismo (a alma também é feita de átomos sutis) e ao Determinismo (tudo tem uma causa mecânica anterior, não há finalidade ou desígnio divino).`,
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
            theory: `Neste bimestre, percorremos o nascimento da racionalidade ocidental. Vimos como o ser humano abandonou as explicações antropomórficas dos deuses para buscar causas imanentes na natureza.

Pontos-chave de revisão:
1. A ruptura Mito x Logos: A exigência de coerência e prova.
2. O problema da Arché: A busca pela unidade na diversidade.
   - Monistas: Tales (Água), Anaximandro (Indeterminado), Anaxímenes (Ar).
3. O problema do Movimento:
   - Heráclito: Tudo flui, a luta dos contrários.
   - Parmênides: O ser é imóvel, o movimento é ilusão.
4. As soluções conciliatórias:
   - Pluralistas: Mistura de elementos (Empédocles).
   - Atomistas: Átomos e vazio (Demócrito).

Esse período fundou o vocabulário da ciência e da filosofia: cosmos, princípio, elemento, átomo, ser, natureza.`,
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
            theory: `Sócrates (470-399 a.C.) realizou uma virada antropológica na filosofia: deixou de olhar para o cosmos e voltou-se para o ser humano. Ele não escreveu nada, vivia nas praças de Atenas questionando as pessoas.

Sua frase "Só sei que nada sei" não é uma declaração de ignorância, mas de sabedoria: reconhecer que não se sabe é o primeiro passo para aprender. Ele combatia os Sofistas, que vendiam conhecimentos prontos e relativos.

O Método Socrático (Dialética):
1. Exortação: Convite ao debate.
2. Ironia (Indagação): Sócrates fazia perguntas fingindo não saber, levando o interlocutor a cair em contradição e perceber que suas opiniões eram frágeis ou preconceituosas. O objetivo era "quebrar" o falso saber.
3. Maiêutica (Parto): Uma vez livre do preconceito, Sócrates ajudava a pessoa a "dar à luz" suas próprias ideias verdadeiras (conceitos universais de Justiça, Bem, Virtude). Ele comparava-se à sua mãe, que era parteira.`,
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
            theory: `Platão, traumatizado com a morte injusta de seu mestre Sócrates pela democracia ateniense, buscou verdades eternas que não dependessem da opinião humana.

A Teoria das Ideias (ou Formas):
Existem dois mundos:
1. Mundo Sensível: Onde vivemos. É feito de matéria, muda o tempo todo, é imperfeito e captado pelos sentidos. Aqui, as coisas são cópias pálidas.
2. Mundo Inteligível: Onde estão as Ideias. É imutável, eterno, perfeito e acessado apenas pela Razão (Intelecto). Lá existe a "Ideia de Justiça", a "Ideia de Cadeira", a "Ideia de Triângulo".

Alegoria da Caverna:
Imagina prisioneiros acorrentados vendo apenas sombras na parede e achando que aquilo é a realidade. Um deles se solta, sai da caverna, vê o sol (a Verdade/O Bem) e percebe o engano. Ao voltar para avisar os outros, é ridicularizado e morto. Isso representa a jornada do filósofo (Sócrates) contra a ignorância.`,
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
            theory: `Na obra "A República", Platão desenha a cidade ideal (Kallipolis). Para ele, a Justiça na cidade é um espelho da Justiça na alma humana.

Tripartição da Alma e da Cidade:
1. Alma Concupiscível (Apetites): Busca prazeres corporais. Na cidade, corresponde aos Produtores (agricultores, artesãos). Virtude: Temperança.
2. Alma Irascível (Ânimo): Busca glória e defesa. Na cidade, são os Guardiões (guerreiros). Virtude: Coragem.
3. Alma Racional (Razão): Busca a verdade. Na cidade, são os Governantes. Virtude: Sabedoria.

A Sofocracia (Governo dos Sábios):
Para Platão, os males da cidade só cessarão quando "os reis forem filósofos ou os filósofos forem reis". A democracia é falha porque dá poder a quem sabe persuadir (demagogos), não a quem conhece o Bem. A educação deve servir para selecionar as almas de ouro (governantes), prata (guerreiros) e bronze (produtores).`,
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
            theory: `Aristóteles foi aluno de Platão por 20 anos, mas seguiu outro caminho. Ele rejeitou a existência de dois mundos. Para ele, a essência das coisas (a forma) está nas próprias coisas, não em um céu separado.

Ética Teleológica (Fins):
Aristóteles observa que todas as ações humanas buscam um fim (um bem). Mas qual é o fim último, aquele que desejamos por si mesmo? A Felicidade (Eudaimonia).
Mas atenção: Felicidade para Aristóteles não é um sentimento passageiro de alegria, mas a "atividade da alma em conformidade com a virtude". É realizar plenamente a sua natureza racional.

A Virtude como Hábito:
Ninguém nasce virtuoso. A virtude moral é adquirida pela repetição de atos corretos até se tornar um hábito (segunda natureza). Nós somos o que fazemos repetidamente.`,
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
            theory: `Para Aristóteles, "o homem é um animal político" (Zoon Politikon). Diferente de outros animais que apenas vivem em bando, o homem possui o Logos (palavra/razão) para discutir o justo e o injusto. Quem vive fora da sociedade ou é uma besta ou um deus.

O Estado (Pólis) é anterior ao indivíduo (em importância), pois o todo é mais importante que a parte. A finalidade da política não é apenas a sobrevivência econômica, mas a vida boa (vida virtuosa).

Formas de Governo:
Aristóteles classifica os governos pelo número de governantes e pelo interesse buscado:
1. Um governante: Monarquia (Bom) -> Tirania (Corrompido).
2. Poucos governantes: Aristocracia (Bom) -> Oligarquia (Corrompido).
3. Muitos governantes: Politeia (Bom) -> Democracia/Demagogia (Corrompido).
O critério de corrupção é quando se governa para o interesse próprio e não para o bem comum.`,
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
            theory: `Aristóteles é o pai da Lógica formal. Ele não a via como uma ciência parte da filosofia, mas como o "Organon" (ferramenta) para pensar corretamente em qualquer ciência.

Estrutura do pensamento:
1. Termo (Conceito): Ex: "Homem", "Mortal".
2. Proposição (Juízo): Ex: "Todo homem é mortal". Pode ser V ou F.
3. Argumento (Raciocínio): Encadeamento de proposições.

O Silogismo:
É a forma perfeita de dedução. Se as premissas forem verdadeiras e a forma válida, a conclusão é necessariamente verdadeira.
Exemplo clássico:
- Premissa Maior: Todo homem é mortal. (Universal)
- Premissa Menor: Sócrates é homem. (Particular)
- Conclusão: Logo, Sócrates é mortal.

Princípios Lógicos:
1. Identidade (A é A).
2. Não-Contradição (A não pode ser não-A ao mesmo tempo).
3. Terceiro Excluído (Ou é A ou é não-A, não há terceira opção).`,
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
            theory: `Esta tríade define a base do pensamento ocidental.

Sócrates: O Despertador. Focado na ética e no combate à ignorância presunçosa. Método de diálogo vivo. Não deixou escritos. Valorizava a alma (psyche) como sede da razão e caráter.

Platão: O Idealista. Sistematizou a filosofia. Criou o dualismo (Corpo/Alma, Mundo Sensível/Inteligível). Tinha uma visão utópica da política e desconfiava da experiência sensorial. A matemática era a preparação para a filosofia.

Aristóteles: O Realista. O grande cientista e classificador. Trouxe a filosofia para a terra. Valorizava a biologia e a observação empírica. Sistematizou a lógica, a ética das virtudes, a retórica e a política constitucional.

Enquanto Platão aponta para o céu (o ideal), Aristóteles aponta para a terra (o real). Toda a filosofia posterior é, de certa forma, um diálogo entre essas duas visões.`,
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
            theory: `Com a queda do Império Romano e a ascensão do Cristianismo, a filosofia ganhou um novo problema central: como conciliar a Razão grega (filosofia) com a Fé cristã (revelação divina)?

Isso não significou o "fim" do pensamento, mas sua transformação. A Bíblia trazia verdades absolutas para os cristãos, mas os filósofos gregos (Platão e depois Aristóteles) tinham explicações lógicas sobre o mundo.

Fases:
1. Patrística (Séc. II-VIII): Defesa da fé contra pagãos e hereges. O maior nome é Santo Agostinho. Forte influência de Platão (Neoplatonismo).
2. Escolástica (Séc. IX-XV): Surgimento das Universidades. Sistematização teológica. O maior nome é São Tomás de Aquino. Redescoberta de Aristóteles.

O lema geral era: "A filosofia é serva da teologia". A razão serve para ajudar a entender e defender a fé.`,
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
            theory: `Santo Agostinho (354-430 d.C.) foi o grande sintetizador do platonismo com o cristianismo. Sua vida pessoal (narrada em "As Confissões") reflete sua filosofia: uma busca inquieta pela verdade.

Fé e Razão:
Agostinho dizia: "Creio para compreender, e compreendo para crer". A fé vem primeiro e ilumina a razão, mas a razão ajuda a aprofundar a fé. Sem a fé, a razão humana, ferida pelo pecado original, erraria.

Teoria da Iluminação Divina:
Adaptando Platão (que dizia que lembramos das ideias), Agostinho diz que a Verdade Eterna habita no interior do homem, colocada por Deus (o "Sol" inteligível). O conhecimento verdadeiro não vem de fora (sentidos), mas de dentro (iluminação).

O Tempo:
Agostinho percebeu que o tempo é uma distensão da alma (memória, atenção e espera), criado junto com o mundo, enquanto Deus vive num eterno presente.
O Mal: O mal não é uma substância (Deus criou tudo bom), mas a ausência ou privação do bem, fruto da vontade livre (livre-arbítrio) que se afasta de Deus.`,
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
            theory: `No século XIII, as obras de Aristóteles (perdidas para o ocidente) retornaram via árabes. Aristóteles explicava o mundo sem precisar de Deus ou da alma imortal cristã, o que gerou crise. Tomás de Aquino "cristianizou" Aristóteles.

Harmonia:
Para Tomás, Fé e Razão não se contradizem, pois ambas vêm de Deus.
- Há verdades que só a fé alcança (ex: Trindade).
- Há verdades que a razão alcança sozinha (ex: lógica, matemática).
- Há verdades mistas (ex: a existência de Deus).

As 5 Vias (Provas da Existência de Deus):
Tomás rejeita provas inatas (como Agostinho). Ele parte dos efeitos (mundo sensível) para chegar à causa (Deus).
1. Movimento: Tudo que se move é movido por outro. Deve haver um Primeiro Motor Imóvel.
2. Causa Eficiente: Nada é causa de si mesmo. Deve haver uma Causa Primeira.
3. Contingência: As coisas podem não existir. Para algo existir, deve haver um Ser Necessário.
4. Graus de Perfeição: Se há coisas "mais" ou "menos" boas, deve haver um padrão máximo (Deus).
5. Finalidade: Coisas sem inteligência agem com objetivo (ex: flecha). Alguém deve guiá-las (Arqueiro Divino).`,
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
            theory: `No final da Idade Média, a síntese fé-razão começou a ruir.

Duns Escoto e o Voluntarismo:
Deus não é limitado pela lógica ou razão humana. Sua Vontade é absoluta. Se Deus quisesse, matar poderia ser bom. O bem é o que Deus quer.

Guilherme de Ockham e o Nominalismo:
Ockham atacou a ideia de "Universais" (Ideias de Platão ou Formas de Aristóteles). Para ele, não existe a "Humanidade", existem apenas o João, a Maria, o Pedro. "Humanidade" é apenas um nome (flatus vocis - sopro de voz) que usamos para agrupar coisas parecidas.
Consequência: Se só existem indivíduos singulares, a ciência deve focar na experiência empírica dos fatos, não em conceitos abstratos.

A Navalha de Ockham:
Princípio metodológico: "Não se devem multiplicar os entes sem necessidade". Diante de várias explicações, a mais simples (com menos pressupostos) tende a ser a verdadeira. Isso preparou o terreno para a ciência moderna.`,
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
            theory: `O Renascimento (Séc. XIV-XVI) não foi uma ruptura total, mas uma mudança de ênfase.
Do Teocentrismo (Deus no centro) para o Antropocentrismo (O Homem no centro e na medida de todas as coisas).

O Humanismo:
Movimento de retorno às fontes clássicas (Grécia e Roma) sem os "filtros" medievais. Valorizava-se a "Dignitas Hominis" (Dignidade do Homem): o ser humano é especial porque tem liberdade para se moldar, é criador, artista e explorador da natureza.
A arte (Da Vinci, Michelangelo) passou a valorizar a anatomia, a perspectiva e o mundo natural. A natureza deixou de ser apenas um símbolo de Deus para ser uma realidade a ser investigada e admirada.`,
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
            theory: `A Revolução Científica (Séc. XVI-XVII) mudou nossa forma de ver o universo. O Cosmos finito, hierárquico e qualitativo de Aristóteles foi substituído por um Universo infinito, homogêneo e quantitativo.

Principais mudanças:
1. Heliocentrismo (Copérnico): A Terra não é o centro. Isso abalou o lugar do homem na criação.
2. Matematização (Galileu): "O livro da natureza está escrito em caracteres matemáticos". Qualidades secundárias (cor, cheiro) são subjetivas; a ciência lida com o que pode ser medido (tamanho, peso, movimento).
3. Mecanicismo: O mundo é uma grande máquina (relógio) regida por leis físicas universais, não por "almas" ou "finalidades".
4. Francis Bacon: "Saber é Poder". A ciência não deve ser apenas contemplativa, mas deve dominar a natureza para melhorar a vida humana (método indutivo/experimental).`,
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
            theory: `Neste bimestre, vimos a longa transição da fé para a razão autônoma.

1. Idade Média: O esforço titânico de unir a Revelação divina com a Lógica grega.
   - Agostinho (Platonismo + Interioridade).
   - Tomás de Aquino (Aristotelismo + Evidências do mundo).
2. A Crise: Ockham separa fé e razão, abrindo caminho para a ciência empírica.
3. Renascimento: O ser humano se coloca como protagonista, artista e explorador.
4. Revolução Científica: A natureza perde seu "encanto" mágico e se torna um objeto matemático a ser conhecido e controlado.

Essa jornada preparou o terreno para a Filosofia Moderna, onde a preocupação central não será mais "Deus existe?", mas "Como posso ter certeza que conheço a verdade?" (Epistemologia).`,
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
            theory: `René Descartes (1596-1650) vivia num tempo de incertezas (guerras religiosas, ceticismo, novas descobertas astronômicas). Ele buscava um ponto fixo, uma certeza absoluta sobre a qual construir toda a ciência.

O Método da Dúvida Hiperbólica:
Ele decidiu duvidar de tudo o que pudesse ser duvidado:
1. Sentidos: Eles nos enganam (ex: o remo na água parece torto).
2. Realidade física: Posso estar sonhando e tudo isso ser ilusão.
3. Verdades matemáticas: Pode haver um "Gênio Maligno" me enganando sempre que somo 2+2.

O Cogito:
Nesse abismo de dúvida, ele percebeu algo: para duvidar, eu tenho que pensar. Para pensar, eu tenho que existir. Mesmo que eu sonhe ou seja enganado, o "eu" que sonha existe.
"Cogito, ergo sum" (Penso, logo existo).
A partir dessa primeira verdade clara e distinta (a existência da mente racional), Descartes reconstruiu o mundo, provando a existência de Deus (garantia de que não vivemos num engano total) e do mundo físico.`,
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
            theory: `Enquanto Descartes (Racionalista) dizia que nascemos com ideias inatas (como a ideia de Deus ou de infinito), John Locke (Empirista) dizia que isso é impossível.

A Tábula Rasa:
Ao nascermos, nossa mente é como uma folha de papel em branco, sem nenhuma inscrição. Todo o nosso conhecimento vem da Experiência. Não há nada no intelecto que não tenha passado antes pelos sentidos.

Processo de Conhecimento:
1. Sensação: Os sentidos captam o externo (amarelo, quente, duro).
2. Reflexão: A mente processa essas sensações (pensar, duvidar, crer).
3. Ideias Simples: As unidades básicas (cor, cheiro).
4. Ideias Complexas: A mente combina ideias simples para formar conceitos (ex: "Maçã" = vermelho + redondo + doce).

Isso democratiza o saber: todos podem aprender, pois dependem da experiência e educação, não de ideias divinas inatas.`,
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
            theory: `Thomas Hobbes inaugura o contratualismo moderno. Ele tenta justificar o poder político não por vontade divina, mas por necessidade humana racional.

O Estado de Natureza:
Imagine a humanidade sem leis ou governo. Para Hobbes, como os homens são naturalmente egoístas e desejam as mesmas coisas, viveríamos em uma "Guerra de todos contra todos". A vida seria "solitária, pobre, sórdida, brutal e breve". "O homem é o lobo do homem".

O Contrato Social:
Para fugir desse medo constante da morte violenta, os homens fazem um pacto racional. Eles renunciam à sua liberdade absoluta e transferem o poder de uso da força para um terceiro: o Soberano (O Leviatã).

O Estado Absoluto:
O Soberano deve ter poder ilimitado para garantir a ordem. Qualquer coisa é melhor que o retorno ao caos do estado de natureza. Não há "direito de revolução" em Hobbes, pois derrubar o rei é voltar à guerra civil.`,
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
            theory: `Locke concorda que o governo nasce de um contrato, mas discorda radicalmente de Hobbes sobre a natureza desse contrato. Ele é o pai do Liberalismo Político.

Estado de Natureza Lockiano:
Os homens não são bestas selvagens. Eles têm razão e vivem em relativa paz. Já no estado de natureza, possuem Direitos Naturais inalienáveis (Jusnaturalismo): Vida, Liberdade e Propriedade (fruto do trabalho).
Problema: Se alguém violar esses direitos, cada um tem que fazer justiça com as próprias mãos, o que gera incerteza e excessos.

O Contrato Liberal:
Criamos o Estado não para nos salvar da morte, mas para proteger melhor a nossa propriedade (vida, liberdade e bens). O governo deve ser um juiz imparcial.
O poder do governante é limitado pela lei. Se o governo violar os direitos naturais (tornando-se tirano), o povo tem o "Direito de Resistência" e pode depô-lo.`,
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
            theory: `Rousseau apresenta uma visão crítica à modernidade. Para ele, o progresso civilizatório não trouxe moralidade, mas corrupção e desigualdade.

O Bom Selvagem:
No estado de natureza, o homem era livre, feliz e bondoso (tinha piedade natural). A desigualdade surge com a invenção da Propriedade Privada ("Isto é meu"). A partir daí, surgiram leis para proteger os ricos dos pobres.

O Contrato Social Verdadeiro:
Rousseau propõe um novo contrato para recuperar a liberdade dentro da sociedade. A base não é a submissão (Hobbes) nem a representação liberal (Locke), mas a Soberania Popular direta.
Conceito de Vontade Geral: Não é a soma das vontades individuais (interesses egoístas), mas a vontade do corpo político visando o Bem Comum. Ao obedecer a lei que ele mesmo ajudou a criar (autonomia), o homem continua livre.`,
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
            theory: `O Iluminismo (Séc. XVIII) foi o ápice do otimismo racionalista. A metáfora da "Luz" representa a Razão dissipando as "trevas" da ignorância, da superstição e da tirania do Antigo Regime (Absolutismo e Igreja).

Principais Bandeiras:
1. Razão e Ciência: Instrumentos para o progresso contínuo da humanidade.
2. Liberdade: Política, econômica e de expressão (Voltaire: "Posso não concordar com o que dizes, mas defenderei até a morte seu direito de dizê-lo").
3. Tolerância: Crítica ao fanatismo religioso.
4. Separação de Poderes: Montesquieu propõe Legislativo, Executivo e Judiciário para evitar tiranias.

A Enciclopédia (Diderot e D'Alembert) foi o grande projeto de reunir todo o conhecimento humano e torná-lo acessível, tirando o monopólio do saber da Igreja. Kant resumiu o espírito da época com o lema "Sapere Aude" (Ouse saber / Tenha coragem de usar seu próprio entendimento).`,
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
            theory: `A Filosofia Moderna construiu o mundo em que vivemos hoje.
1. Epistemologia (Teoria do Conhecimento): O debate entre Racionalistas (Descartes) e Empiristas (Locke) definiu como fazemos ciência.
2. Política: Os contratualistas (Hobbes, Locke, Rousseau) secularizaram o poder. O Estado não vem de Deus, vem de um acordo humano.
   - Hobbes -> Estado Forte/Segurança.
   - Locke -> Estado Limitado/Direitos Individuais.
   - Rousseau -> Estado Democrático/Bem Comum.
3. Iluminismo: Consolidou a crença nos Direitos Humanos, na democracia e no progresso científico.

Esse período colocou o indivíduo, sua razão e seus direitos no centro do palco da história.`,
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
            theory: `Nicolau Maquiavel (O Príncipe, 1513) rompeu com a tradição política antiga. Antes dele, imaginava-se como o governante *deveria* ser (virtuoso, cristão, bondoso). Maquiavel decidiu escrever sobre a "verdade efetiva das coisas": como a política *realmente* é.

Separação Ética x Política:
Na vida privada, não devemos mentir ou matar. Na política, o governante (Príncipe) tem um dever maior: manter o Estado e a ordem. Para isso, às vezes, ele precisará "aprender a não ser bom". "Os fins (manutenção do poder e paz) justificam os meios".

Virtù e Fortuna:
- Fortuna: É a sorte, o acaso, as circunstâncias incontroláveis (como uma enchente ou uma revolta inesperada). Corresponde a 50% da vida.
- Virtù: Não é virtude cristã. É a habilidade, a virilidade, a astúcia e a coragem do líder para domar a fortuna. O bom príncipe constrói diques (virtù) antes que a enchente (fortuna) venha.
O Príncipe deve ser "raposa para reconhecer as armadilhas e leão para amedrontar os lobos".`,
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
            theory: `Retomando Hobbes com mais profundidade política: O Leviatã é um monstro bíblico que Hobbes usa como metáfora para o Estado. Ele é um "homem artificial", composto por todos os cidadãos, mas com uma cabeça soberana.

Por que o poder deve ser absoluto e indivisível?
Se dividirmos o poder (ex: Rei x Parlamento), haverá discordância. Discordância leva a conflito. Conflito leva à Guerra Civil, que é a morte do Estado e o retorno à barbárie.
Para Hobbes, a liberdade plena é o caos. A liberdade do súdito reside apenas naquilo que o Soberano não proibiu (o silêncio da lei).
O pacto hobbesiano é de submissão: eu autorizo o soberano a fazer tudo, desde que ele garanta minha vida física. Se o Estado falha na segurança, o pacto se quebra.`,
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
            theory: `Locke constrói a base das democracias modernas e do capitalismo.
A questão da Propriedade:
Diferente de Hobbes (onde o Rei é dono de tudo), Locke diz que a propriedade é anterior ao Estado. Deus deu o mundo a todos, mas cada um é dono do seu próprio corpo. Ao misturar meu trabalho com a natureza (ex: colher uma maçã, cercar um terreno), aquilo se torna meu. O trabalho é a origem da propriedade.

O Modelo Liberal:
1. O Estado não cria direitos, apenas os reconhece e protege.
2. Império da Lei (Rule of Law): Ninguém, nem o rei, está acima da lei.
3. Tolerância Religiosa: O Estado não deve cuidar da salvação das almas (separação Igreja-Estado).
Essas ideias inspiraram a Revolução Gloriosa, a Independência dos EUA e a Constituição brasileira.`,
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
            theory: `Rousseau é o pai intelectual da esquerda democrática e do romantismo. Ele percebeu que a liberdade formal (de Locke) não adianta se houver desigualdade extrema, pois o rico escraviza o pobre contratualmente.

O Contrato Social de Rousseau:
Exige alienação total dos direitos de cada um em favor da comunidade. Mas, como todos fazem isso, ninguém tem privilégios.
A Vontade Geral é infalível porque busca o bem comum. Quem se recusa a obedecer à Vontade Geral deve ser "forçado a ser livre" (frase polêmica de Rousseau).
Para Rousseau, a soberania não pode ser representada (crítica ao parlamento inglês). O povo deve ratificar as leis diretamente. Ele defende uma República participativa e pedagógica, que transforme o indivíduo egoísta em cidadão virtuoso.`,
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
            theory: `Revisão comparativa fundamental para entender a política moderna:

1. Estado de Natureza:
   - Hobbes: Guerra, Medo, Violência. Homem mau.
   - Locke: Paz relativa, mas insegura. Homem racional.
   - Rousseau: Felicidade, Liberdade. Homem bom (Bom Selvagem).

2. Motivo do Contrato:
   - Hobbes: Preservar a vida (medo da morte).
   - Locke: Preservar a propriedade (direitos naturais).
   - Rousseau: Preservar a liberdade civil e igualdade.

3. Tipo de Governo Resultante:
   - Hobbes: Absolutismo (Segurança acima da liberdade).
   - Locke: Liberalismo (Liberdade individual e Estado limitado).
   - Rousseau: Democracia Direta/Republicana (Vontade Geral e Igualdade).`,
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
            theory: `Embora usados como sinônimos no dia a dia, filosofia distingue:
- Moral (do latim 'mos', costumes): Conjunto de normas, regras e tabus de uma sociedade específica. É prática e histórica. Ex: "Não andar pelado na rua", "Respeitar os mais velhos". A moral muda com o tempo e lugar.
- Ética (do grego 'ethos', caráter/morada): É a reflexão filosófica sobre a moral. É a teoria. A ética pergunta: "Por que devemos seguir essa norma?", "O que é o Bem?", "O que define uma ação justa?". A ética busca princípios universais.

O Problema do Relativismo:
"Se a moral muda (ex: escravidão já foi aceita), então tudo é relativo?". A ética tenta encontrar fundamentos (como a Dignidade Humana) que sirvam de crítica às morais vigentes, evitando o "tudo vale".`,
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
            theory: `A ética de Aristóteles (Ética a Nicômaco) não é baseada em regras ("faça isso", "não faça aquilo"), mas no Caráter. A pergunta central é: "Que tipo de pessoa devo ser para ser feliz?".

Eudaimonia (Felicidade/Florescimento): É o objetivo final da vida humana. Alcançamos isso vivendo racionalmente e virtuosamente.
A Virtude (Areté) é uma excelência. Ninguém é bom por acaso, é preciso treino (hábito).

A Doutrina do Meio-Termo (Aura Mediocritas):
A virtude está sempre no equilíbrio entre dois vícios (um por excesso, outro por falta).
- Coragem: Meio-termo entre Covardia (falta) e Temeridade (excesso de confiança).
- Generosidade: Meio-termo entre Avareza e Prodigalidade.
Ser ético exige sabedoria prática (Phronesis) para achar a medida certa em cada situação.`,
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
            theory: `Immanuel Kant (Séc. XVIII) propõe uma ética do Dever (Deontologia). Para ele, a ética não depende das consequências (se vai dar certo ou errado) nem da felicidade, mas da Intenção Correta e da Razão.

A boa vontade é a única coisa boa em si mesma.
O Imperativo Categórico:
É uma regra moral absoluta que a razão dá a si mesma.
1. Fórmula da Universalidade: "Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal".
   - Teste: Posso querer que todos mintam? Não, porque se todos mentirem, a verdade desaparece e a mentira perde o sentido. Logo, mentir é imoral, sem exceções.
2. Fórmula da Humanidade: "Age de tal maneira que uses a humanidade, tanto na tua pessoa como na de qualquer outro, sempre como fim e nunca apenas como meio".
   - Não podemos usar as pessoas como objetos para nossos objetivos. Isso fundamenta a Dignidade Humana.`,
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
            theory: `O Utilitarismo (Jeremy Bentham e John Stuart Mill) é a principal corrente consequencialista.
Princípio da Maior Felicidade: Uma ação é correta se proporciona a maior quantidade de prazer/bem-estar para o maior número de pessoas, e minimiza a dor.

Diferença de Kant:
Se um assassino pergunta onde seu amigo está, Kant diria para não mentir (dever absoluto). O Utilitarista diria para mentir, pois a consequência (salvar a vida) gera mais bem-estar.

O Cálculo Utilitário:
A ética se torna quase matemática. Devemos pesar os prós e contras.
Problemas do Utilitarismo: Pode justificar injustiças contra minorias em nome do "bem da maioria" (ex: sacrificar um inocente para salvar cinco). Mill tentou corrigir isso introduzindo a qualidade dos prazeres e regras gerais (Utilitarismo de Regras).`,
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
            theory: `Resumo das três grandes escolas éticas do ocidente:

1. Ética das Virtudes (Aristóteles):
   - Foco: No Agente (Quem age).
   - Pergunta: "Que tipo de pessoa eu me torno agindo assim?"
   - Palavra-chave: Caráter/Hábito.

2. Deontologia (Kant):
   - Foco: Na Ação (A regra).
   - Pergunta: "Essa ação é correta em si mesma? É universalizável?"
   - Palavra-chave: Dever/Regra.

3. Utilitarismo (Mill):
   - Foco: No Resultado (Consequências).
   - Pergunta: "O que vai gerar o melhor resultado para todos?"
   - Palavra-chave: Bem-estar/Utilidade.

A vida real muitas vezes exige um equilíbrio entre esses modelos (Pluralismo Ético).`,
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
            theory: `Karl Marx (Séc. XIX) analisou o capitalismo industrial.
Materialismo Histórico: Não são as ideias que mudam a história (Hegel), mas as condições materiais e a luta de classes (economia). "O ser social determina a consciência".
Estrutura: A economia (Infraestrutura) determina a cultura, leis e religião (Superestrutura).

Conceitos Chave:
- Luta de Classes: Burguesia (dona dos meios de produção) vs Proletariado (vende sua força de trabalho).
- Mais-Valia: O trabalhador produz mais valor do que recebe em salário. Essa diferença é o lucro do capitalista, fonte da exploração.
- Alienação: O trabalhador perde o controle sobre o que produz, sobre como produz e sobre si mesmo. Ele se torna uma peça da engrenagem, desumanizado. O trabalho, que deveria ser realização, torna-se tortura.`,
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
            theory: `Foucault (Séc. XX) mudou a forma de ver o poder. O poder não é algo que o Rei ou o Estado "tem". O poder é algo que se "exerce" em todos os lugares (Microfísica do Poder).

Sociedade Disciplinar:
A partir do séc. XVIII, surgiram instituições de sequestro (Escola, Fábrica, Prisão, Hospital, Quartel) que visam moldar "Corpos Dóceis" – úteis economicamente e obedientes politicamente.
O Panóptico (modelo de prisão de Bentham) é a metáfora perfeita: uma torre central vigia todas as celas. Como o prisioneiro não sabe se está sendo vigiado, ele vigia a si mesmo (autocontrole). Hoje, câmeras e algoritmos fazem esse papel.
Biopoder: O poder moderno não quer matar, mas gerir a vida (natalidade, saúde, higiene) das populações.`,
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
            theory: `Hannah Arendt analisou os horrores do nazismo e a perda da política.

A Condição Humana (Vita Activa):
1. Labor: Processos biológicos (comer, sobreviver). O homem como animal laborans.
2. Trabalho (Obra): Produção de objetos duráveis (o mundo artificial). O homem como homo faber.
3. Ação: Atividade entre homens sem mediação de coisas. É a Política. É onde revelamos quem somos através da palavra e do ato. É a esfera da liberdade.

Arendt critica a modernidade por reduzir tudo ao Labor (sociedade de consumo), esquecendo a Ação política.
A Banalidade do Mal: Ao julgar Eichmann (nazista burocrata), ela viu não um monstro, mas um homem medíocre que "não pensava", apenas cumpria ordens. O mal totalitário surge da ausência de pensamento crítico e diálogo interno.`,
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
            theory: `Três diagnósticos poderosos da modernidade:

1. Marx: O problema é a Economia (Capitalismo). A solução é a Revolução e o fim das classes. O poder é repressivo e econômico.
2. Foucault: O problema é a Disciplina e a Normalização. A solução é a "estética da existência" e micro-resistências. O poder é produtivo (produz verdades e sujeitos).
3. Arendt: O problema é o esquecimento da Política e a burocratização da vida. A solução é recuperar o Espaço Público e a capacidade de pensar e julgar.

Eles nos ajudam a ver as camadas de opressão: exploração do trabalho (Marx), controle dos corpos (Foucault) e esvaziamento da cidadania (Arendt).`,
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
            theory: `John Rawls (1971) tentou conciliar a Liberdade (liberalismo) com a Igualdade (socialismo).

O Experimento Mental da "Posição Original":
Imagine que vamos criar as regras da sociedade, mas estamos sob um "Véu da Ignorância": ninguém sabe se nascerá rico ou pobre, branco ou negro, talentoso ou doente.
Que regras escolheríamos? Segundo Rawls, escolheríamos regras justas por precaução (Justiça como Equidade).

Dois Princípios de Justiça:
1. Princípio da Liberdade: Liberdades básicas máximas para todos (voto, expressão).
2. Princípio da Diferença: As desigualdades econômicas só são aceitáveis se:
   a) Estiverem ligadas a cargos abertos a todos (igualdade de oportunidades).
   b) Trouxerem o maior benefício possível aos menos favorecidos (Maximin).
Rawls defende um Estado de Bem-Estar Social racional.`,
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
            theory: `Amartya Sen (Nobel de Economia) critica a visão de que desenvolvimento é apenas crescer o PIB (dinheiro).
Uma pessoa pode ser rica, mas se não tem hospital, escola ou liberdade política, ela é privada.

Abordagem das Capacidades:
O foco deve ser nas "Functionings" (o que a pessoa consegue ser e fazer) e "Capabilities" (liberdade real para escolher vidas que tem razão para valorizar).
A pobreza não é só falta de renda, é privação de capacidades. Desenvolvimento é a remoção das barreiras (analfabetismo, doença, tirania) que impedem a liberdade.
Essa teoria fundamentou o IDH (Índice de Desenvolvimento Humano) da ONU.`,
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
            theory: `Direitos Humanos são direitos inerentes a todos os seres humanos, independente de raça, sexo, nacionalidade, etnia, idioma, religião ou qualquer outra condição.

Evolução Histórica (Gerações/Dimensões):
1. Primeira Geração (Liberdade): Direitos civis e políticos (séc. XVIII/XIX). Vida, liberdade, propriedade, voto. Proteção *contra* o Estado.
2. Segunda Geração (Igualdade): Direitos sociais, econômicos e culturais (séc. XIX/XX). Saúde, educação, trabalho. Exigem ação *do* Estado.
3. Terceira Geração (Fraternidade): Direitos coletivos e difusos. Meio ambiente, paz, patrimônio humanidade.

O debate atual gira em torno do Universalismo (direitos valem para todos) versus Relativismo Cultural (cada cultura tem suas normas). A Declaração de 1948 afirma a dignidade universal como base.`,
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
            theory: `Ações Afirmativas são políticas públicas temporárias focadas em grupos historicamente discriminados (negros, indígenas, mulheres, deficientes), visando acelerar a igualdade real (não apenas formal).

Justificativas Filosóficas:
1. Justiça Reparadora: Corrigir injustiças do passado (ex: escravidão) cujos efeitos duram até hoje.
2. Justiça Distributiva: Garantir que os bens sociais (vagas em universidade, cargos) sejam acessíveis a todos, removendo barreiras invisíveis.
3. Diversidade: Ambientes plurais são mais ricos e democráticos.

O conceito chave é Equidade: tratar os desiguais de forma desigual na medida de sua desigualdade, para alcançar a igualdade. (Ex: dar uma caixa para o baixinho ver o jogo por cima do muro).`,
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
            theory: `A Filosofia Contemporânea (séc. XIX em diante) nasce de uma crise de confiança na Razão. O otimismo do Iluminismo (de que a ciência e o progresso trariam felicidade) ruiu.

Fatores da Crise:
1. Os "Mestres da Suspeita" (Marx, Nietzsche, Freud): Mostraram que a razão não é senhora de si mesma. Ela é influenciada pela economia (Marx), pelos instintos (Nietzsche) e pelo inconsciente (Freud).
2. As Guerras Mundiais e o Holocausto: Como a "civilização racional" pôde produzir tamanha barbárie? A técnica serviu à morte.
3. A "Morte do Sujeito": O "Eu" cartesiano, fixo e claro, se fragmentou.

Temas centrais: A Linguagem (como as palavras moldam o mundo), a Existência (a vida concreta, a angústia) e o Poder.`,
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
            theory: `Kierkegaard (Dinamarquês, séc. XIX) reagiu ao racionalismo de Hegel. Ele dizia: "A subjetividade é a verdade". O importante não é entender o "Sistema do Mundo", mas entender "minha própria vida".

A Angústia:
É a vertigem da liberdade. Diferente do medo (que tem objeto definido, ex: medo de cobra), a angústia é o medo do nada, das infinitas possibilidades. É perceber que sou livre para escolher e que posso errar.

Os Estádios da Existência:
1. Estético: Busca o prazer imediato e foge do tédio. Vive o momento. Problema: Desespero pela falta de sentido e fragmentação. (Ex: Don Juan).
2. Ético: Escolhe assumir responsabilidades, deveres e papéis sociais (casamento, trabalho). Busca o universal. Problema: Pode se tornar conformismo.
3. Religioso: O salto de fé no absurdo. Relação direta e paradoxal com Deus, acima da razão e da moral universal (Ex: Abraão sacrificando Isaque). É onde se encontra a verdadeira individualidade.`,
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
            theory: `Nietzsche é o filósofo do "martelo", que golpeia os ídolos da cultura ocidental.

"Deus está Morto":
Não é apenas ateísmo. Significa que os valores absolutos (metafísica, religião, moral platônica) perderam sua força e validade cultural. Caímos no Niilismo (nada tem sentido).

A Genealogia da Moral:
Existem duas morais:
1. Moral dos Senhores: Afirmativa, valoriza a força, a vida, a diferença, a ação. "Bom" é o que eleva a potência.
2. Moral dos Escravos (Judaico-Cristã): Reativa, nasce do ressentimento dos fracos contra os fortes. Valoriza a humildade, a piedade, a igualdade. Inverteu os valores para dominar os fortes pela culpa.

O Super-Homem (Übermensch) e Amor Fati:
A solução para o niilismo não é o desespero, mas a superação. O Super-Homem é aquele que cria seus próprios valores, que diz "Sim" à vida como ela é (Amor Fati), com suas dores e alegrias, aceitando viver a mesma vida infinitas vezes (Eterno Retorno).`,
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
            theory: `Heidegger reformulou a questão central da filosofia: "O que é o Ser?".

Dasein (Ser-aí):
Nós não somos "coisas" ou "almas". Nós somos Dasein: seres jogados no mundo, sempre em relação com as coisas e com os outros. Existir é estar fora de si, projetando-se no futuro.

Inautenticidade vs Autenticidade:
- Vida Inautêntica: Viver no modo do "A Gente" (Das Man). Fazer o que todos fazem, falar o que todos falam, fugir da responsabilidade. É a ditadura da opinião pública mediana.
- Vida Autêntica: Assumir o seu próprio ser.

Ser-para-a-morte:
O que nos desperta para a autenticidade é a Angústia da morte. A morte é a única possibilidade que é certa e intransferível (ninguém pode morrer por mim). Ao encarar a finitude, deixo de desperdiçar a vida com banalidades e assumo meu destino.`,
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
            theory: `Sartre popularizou o existencialismo. Sua tese central: "A existência precede a essência".
Para objetos (ex: um canivete), a essência (o projeto/ideia) vem antes. Para o ser humano, não há Deus criador nem natureza humana fixa. Primeiro nós existimos (surgimos no mundo), depois nos definimos através de nossas escolhas.

Condenados à Liberdade:
Não podemos não escolher. Até não escolher é uma escolha. Somos totalmente responsáveis pelo que somos. "O homem é o que ele faz do que fizeram dele".
Essa responsabilidade total gera Angústia.

Má-Fé:
Para fugir da angústia, mentimos para nós mesmos, fingindo que não temos escolha ("Não tive opção", "Foi culpa da sociedade"). Isso é Má-Fé. O garçom que age de forma mecânica "brinca de ser garçom" para esquecer que é um homem livre.
Engajamento: A liberdade autêntica exige compromisso ético e político com a liberdade dos outros.`,
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
            theory: `Simone de Beauvoir aplicou o existencialismo à condição da mulher. Sua frase icônica: "Não se nasce mulher, torna-se mulher".
Não existe uma "essência feminina" biológica ou mística. O "ser mulher" é uma construção social e cultural imposta desde a infância.

A Mulher como o "Outro":
Historicamente, o Homem se definiu como o Sujeito (o Absoluto, a referência humana) e definiu a Mulher como o Outro (o objeto, o inessencial, o relativo ao homem).
A mulher foi confinada à Imanência (tarefas repetitivas, domésticas), enquanto o homem monopolizou a Transcendência (criação, política, projetos).
O feminismo existencialista busca a independência econômica e existencial da mulher, para que ela possa ser sujeito de sua própria vida e definir sua essência livremente.`,
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
            theory: `Camus divergiu de Sartre. Seu foco é o Absurdo.
O Absurdo nasce do confronto entre o apelo humano por sentido/clareza e o silêncio irracional do mundo. Nós perguntamos "por que?", e o universo não responde.

O Mito de Sísifo:
Sísifo foi condenado pelos deuses a rolar uma pedra montanha acima, apenas para vê-la cair novamente, por toda a eternidade. Trabalho inútil e sem esperança. Essa é a condição humana (rotina, trabalho, morte).
Como responder?
1. Suicídio físico (fuga): Camus rejeita.
2. Suicídio filosófico (fé/esperança em outra vida): Camus rejeita.
3. A Revolta: Aceitar o absurdo e viver com paixão *apesar* dele. "É preciso imaginar Sísifo feliz". A revolta confere dignidade à vida. A felicidade é construída na luta, não na chegada.`,
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
            theory: `O Existencialismo colocou a vida concreta no centro.

Resumo Comparativo:
- Kierkegaard: O indivíduo solitário diante de Deus. A saída é a Fé.
- Nietzsche: A superação do homem. A saída é a Criação de Valores (Arte/Vida).
- Heidegger: O Dasein e o Ser. A saída é a Autenticidade diante da morte.
- Sartre: O homem condenado à liberdade. A saída é o Projeto e o Engajamento.
- Camus: O homem diante do Absurdo. A saída é a Revolta e a Solidariedade.

Todos rejeitam sistemas abstratos que explicam tudo e esquecem a dor e a alegria de existir aqui e agora.`,
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
            theory: `A ciência moderna (Newtoniana) acreditava em leis absolutas, deterministas e objetivas. No final do séc. XIX e início do XX, isso ruiu.
1. Geometrias Não-Euclidianas: Mostraram que o espaço pode ser curvo.
2. Termodinâmica: Introduziu a irreversibilidade e a entropia (o caos).
3. Teoria da Relatividade (Einstein): Tempo e espaço não são absolutos, dependem da velocidade do observador.
4. Mecânica Quântica (Heisenberg/Bohr): Introduziu a incerteza e a probabilidade no coração da matéria. O observador afeta o observado.

A Epistemologia (Filosofia da Ciência) teve que mudar: a ciência não descobre a "Verdade" final, mas constrói modelos provisórios que funcionam melhor que os anteriores. Gaston Bachelard fala em "Ruptura Epistemológica": a ciência avança negando o conhecimento anterior e o senso comum.`,
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
            theory: `Karl Popper resolveu o "Problema da Indução" (não podemos provar que todos os cisnes são brancos vendo mil cisnes brancos, pois o próximo pode ser preto).

Critério de Demarcação (O que é ciência vs Pseudociência?):
Uma teoria não é científica porque pode ser provada (verificacionismo), mas porque pode ser testada e potencialmente falsificada (falseabilidade).
- Pseudociência (ex: Astrologia, Psicanálise segundo Popper): Explica tudo, se adapta a qualquer fato, nunca pode ser refutada.
- Ciência (ex: Relatividade): Faz previsões arriscadas. "Se a luz não dobrar no eclipse, minha teoria está errada".

A ciência progride por "Conjecturas e Refutações". Nunca alcançamos a verdade absoluta, apenas eliminamos os erros (verossimilhança). Devemos ser críticos e estar abertos a refutações (Sociedade Aberta).`,
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
            theory: `Thomas Kuhn ("A Estrutura das Revoluções Científicas") olhou para a história real da ciência e viu que ela não é um acúmulo linear de verdades (como Popper sugeria), mas feita de saltos.

Conceitos:
1. Paradigma: Conjunto de crenças, métodos e exemplos aceitos pela comunidade científica em uma época (ex: Física de Newton).
2. Ciência Normal: Os cientistas resolvem quebra-cabeças dentro do paradigma, sem questioná-lo.
3. Anomalias: Fatos que o paradigma não explica. Inicialmente são ignorados.
4. Crise: Quando as anomalias se acumulam e o paradigma perde a confiança.
5. Revolução Científica: Um novo paradigma surge (ex: Einstein), incomensurável com o anterior. Ocorre uma "troca de lentes".

A ciência tem um aspecto sociológico e comunitário forte. A verdade científica depende do consenso da comunidade.`,
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
            theory: `Paul Feyerabend foi o mais radical ("Contra o Método"). Ele analisou Galileu e viu que ele usou retórica, propaganda e hipóteses ad hoc para vencer, não apenas "método puro".

Anarquismo Epistemológico:
Não existe um "Método Científico" único e rígido que garanta a verdade. A regra é "Tudo Vale" (Anything goes). A ciência progride violando regras metodológicas.
Ele defende o Pluralismo Metodológico e a separação entre Estado e Ciência (assim como Igreja e Estado). A ciência não deve ser a única forma de saber autorizada; mitos, arte e religião também têm valor.
Crítica ao cientificismo (ideia de que a ciência é a dona da verdade e a salvação da humanidade).`,
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
            theory: `A tecnologia não é apenas um conjunto de ferramentas neutras. Ela altera nossa percepção do mundo e nossa própria essência.

Visões sobre a Técnica:
1. Instrumental (Senso Comum): A técnica é neutra, depende de quem usa (faca serve para cortar pão ou matar).
2. Determinismo Tecnológico: A tecnologia molda a sociedade de forma autônoma (o moinho criou o feudalismo, a máquina a vapor o capitalismo).
3. Heidegger e a Essência da Técnica: A técnica moderna é uma forma de "Desencobrimento" que vê a natureza apenas como "Estoque" ou "Recurso" disponível para exploração. O perigo não é a bomba atômica, mas a mentalidade que transforma tudo (inclusive humanos - RH) em recursos a serem otimizados.

Escola de Frankfurt (Marcuse/Adorno): A Razão Instrumental serve à dominação e não à libertação.`,
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
            theory: `A Inteligência Artificial traz desafios inéditos para a ética.

Questões Fundamentais:
1. Responsabilidade: Se um carro autônomo atropela alguém, de quem é a culpa? Do programador, da empresa ou da IA? (Lacuna de responsabilidade).
2. Viés Algorítmico: IAs treinadas com dados preconceituosos reproduzem racismo e sexismo (ex: reconhecimento facial falhando com negros).
3. Privacidade e Controle: Capitalismo de Vigilância (Zuboff). Nossos dados preveem e modificam nosso comportamento.
4. Trabalho: Substituição em massa e precarização.
5. Singularidade: A possibilidade de uma superinteligência que supere o controle humano.

Precisamos de uma "Ética para Algoritmos" (transparência, justiça, explicabilidade).`,
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
            theory: `A Bioética surge para impor limites éticos ao poder da biotecnologia sobre a vida (nascimento, reprodução, morte).

Princípios da Bioética (Principalismo):
1. Autonomia: Consentimento do paciente.
2. Beneficência: Fazer o bem.
3. Não-maleficência: Não causar dano.
4. Justiça: Equidade no acesso.

Temas quentes:
- Edição Genética (CRISPR): Podemos curar doenças, mas devemos criar "bebês projetados" (eugenia liberal)? Isso aumentaria a desigualdade biológica.
- Clonagem e Transgênicos.
- Eutanásia e prolongamento artificial da vida.
Habermas argumenta que alterar a genética de alguém viola sua autonomia futura e igualdade de nascimento.`,
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
            theory: `Vivemos na Sociedade da Informação (Castells). A informação é a matéria-prima central.

Características:
- Redes: Estrutura horizontal e flexível, mas que cria novas exclusões (Exclusão Digital).
- Tempo e Espaço: Compressão espaço-tempo. Tudo é imediato (instantaneidade), gerando ansiedade e superficialidade.
- Cibercultura: Novas formas de socialização e identidade online.
- Pós-Verdade e Bolhas: Algoritmos nos mostram o que queremos ver, reforçando crenças e isolando o contraditório.

Pierre Lévy (Inteligência Coletiva) vs Byung-Chul Han (Sociedade do Cansaço/Transparência): Visão otimista do compartilhamento vs Visão pessimista da autoexploração e perda da privacidade.`,
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
            theory: `A crise ambiental (aquecimento global, extinção em massa) não é apenas um problema técnico, é uma crise civilizatória e filosófica.
Ela decorre da forma como o Ocidente pensou a relação Homem-Natureza.

Raízes:
- Bíblia: "Dominai a Terra" (interpretação de domínio, não de cuidado).
- Descartes/Bacon: Homem como "Senhor e Possuidor da natureza". Natureza vista como máquina morta e inerte.
- Capitalismo: Lógica do crescimento infinito num planeta finito.

A Filosofia Ambiental questiona o dualismo Homem x Natureza. Nós somos natureza. Destruir a biosfera é suicídio. Precisamos de uma nova Ontologia (forma de ver o ser) que reconheça a interdependência.`,
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
            theory: `Que valor a natureza tem?

1. Antropocentrismo (Forte ou Fraco): Só humanos têm valor moral intrínseco. Devemos cuidar da natureza apenas porque ela é útil para nós (recurso) ou para as futuras gerações humanas.
2. Senciocientrismo (Peter Singer): Animais sencientes (que sentem dor) têm interesses e valor. O critério ético é a capacidade de sofrer, não a razão. "Especismo" é preconceito.
3. Biocentrismo (Paul Taylor): Tudo que vive (plantas, bactérias) tem um "bem próprio" e valor inerente.
4. Ecocentrismo (Aldo Leopold - Ética da Terra): O foco é o todo (ecossistemas, espécies, solos, águas). "Uma coisa é certa quando tende a preservar a integridade, estabilidade e beleza da comunidade biótica". O homem é membro, não conquistador.`,
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
            theory: `Definição Clássica (Relatório Brundtland, 1987): "Aquele que atende às necessidades do presente sem comprometer a possibilidade das gerações futuras atenderem a suas próprias necessidades".
Tripé: Econômico, Social e Ambiental.

Críticas e Debates:
Muitos filósofos consideram "Desenvolvimento Sustentável" um oxímoro (contradição), pois o desenvolvimento capitalista exige crescimento perpétuo, incompatível com a física do planeta.
- Greenwashing: Maquiagem verde para continuar poluindo.
- Decrescimento (Serge Latouche): Proposta de reduzir a produção e o consumo para viver melhor com menos (sobriedade feliz).
- Economia Circular: Imitar os ciclos da natureza (onde não há lixo).`,
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
            theory: `Hans Jonas ("O Princípio Responsabilidade") percebeu que a ética tradicional (focada no "aqui e agora" entre humanos) é insuficiente para o poder tecnológico atual, que pode destruir o futuro.

Novo Imperativo Ético:
"Age de tal modo que os efeitos da tua ação sejam compatíveis com a permanência de uma vida autenticamente humana na Terra".
Temos deveres para com seres que ainda não existem (gerações futuras).
Heurística do Medo: Devemos dar mais ouvidos à profecia da desgraça do que à da felicidade tecnológica, por precaução.

Justiça Climática:
Os países ricos poluíram historicamente, mas os pobres sofrem mais os efeitos. Quem deve pagar a conta? Responsabilidades comuns, porém diferenciadas.`,
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
            theory: `O Ecofeminismo (Vandana Shiva, Françoise d'Eaubonne) conecta a exploração da natureza com a opressão das mulheres.

A Lógica da Dominação:
O pensamento ocidental patriarcal opera por dualismos hierárquicos:
- Homem / Mulher
- Cultura / Natureza
- Razão / Emoção
- Mente / Corpo
O lado esquerdo (masculino) é visto como superior e deve "dominar" o direito. A natureza é "feminizada" (Mãe Terra virgem a ser conquistada) e a mulher é "naturalizada" (vista como instintiva/irracional).
Proposta: Uma ética do Cuidado e da Interdependência, valorizando a manutenção da vida em vez da conquista e do lucro.`,
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
            theory: `Uma revolução jurídica e filosófica está em curso: reconhecer a Natureza como Sujeito de Direitos, não objeto de propriedade.

Casos:
- Constituição do Equador (2008): Reconhece os direitos da Pacha Mama de existir e se regenerar.
- Rio Whanganui (Nova Zelândia): Reconhecido como pessoa jurídica (ancestral maori).

Bem Viver (Buen Vivir / Sumak Kawsay):
Conceito andino que se opõe ao "Viver Melhor" (ter mais coisas). Busca a harmonia entre humanos e natureza, comunitário em vez de individualista. O desenvolvimento não é acumulação, mas equilíbrio.`,
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
            theory: `Para os povos originários, a separação Cultura/Natureza não existe.

Perspectivismo Ameríndio (Eduardo Viveiros de Castro):
Animais e plantas são "humanos" em outras roupas; eles têm cultura e sociedade. A onça vê a si mesma como gente e o sangue como cerveja. O xamã é o diplomata cósmico que transita entre esses mundos.

Ideias de Ailton Krenak ("Ideias para adiar o fim do mundo"):
- A humanidade não é uma coisa só; somos diversos.
- A Terra é mãe, não recurso. O rio é um avô. A relação é de parentesco e reciprocidade, não de uso.
- Davi Kopenawa ("A Queda do Céu"): Alerta sobre a "fumaça do minério" (epidemia xawara) e a cegueira dos brancos ("Povo da Mercadoria") que destroem a terra.`,
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
            theory: `Antropoceno: A época geológica em que a atividade humana se tornou a força dominante no clima e ecossistemas. Cruzamos fronteiras planetárias perigosas.

Cenários:
1. Colapso (Distopia): Guerra por recursos, barbárie, extinção.
2. Tecno-fix (Otimismo): A tecnologia nos salvará (geoengenharia, Marte).
3. Grande Transição: Mudança de valores para uma civilização ecológica.

Joanna Macy e a Esperança Ativa:
A esperança passiva espera que tudo dê certo. A esperança ativa é algo que *fazemos*. É encarar a dor do mundo (não negar) e agir onde estamos para curar a teia da vida. Somos a "imunidade" do planeta agindo.`,
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
            theory: `Quem sou eu? Essa é a pergunta mais antiga e difícil.
A Identidade não é uma "coisa" fixa (como uma pedra), mas um processo narrativo.
1. Identidade Pessoal (Ipseidade): A sensação de continuidade do "eu" no tempo, sustentada pela memória e pela narrativa que contamos sobre nós mesmos (Paul Ricoeur).
2. Identidade Social: Os papéis que desempenhamos e grupos aos quais pertencemos.

O "Eu" se constrói na relação com o "Outro" (Alteridade). Eu só sei quem sou quando me vejo no espelho do olhar alheio. Hegel (Dialética do Senhor e Escravo) mostra que lutamos por Reconhecimento.
A identidade na modernidade líquida (Bauman) é fluida, fragmentada e muitas vezes consumista ("compro, logo existo").`,
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
            theory: `O mundo globalizado coloca culturas diferentes em contato constante.
Multiculturalismo: Reconhecimento de que não existe uma "Cultura Superior" (Etnocentrismo), mas diversas formas válidas de ser humano.

Modelos de convivência:
1. Assimilação: A minoria deve abandonar sua cultura e adotar a da maioria (Melting Pot).
2. Guetização: Culturas vivem separadas sem contato.
3. Interculturalidade: Diálogo, troca e enriquecimento mútuo.

Tolerância vs Respeito:
Tolerar é "suportar" o que se considera inferior ou errado. Respeitar é reconhecer o valor positivo do outro.
Charles Taylor (Política do Reconhecimento): A identidade de grupos minoritários depende de reconhecimento público para evitar o autodesprezo.`,
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
            theory: `A filosofia ocidental muitas vezes excluiu o pensamento africano. Resgatar essa filosofia é um ato de justiça epistêmica e enriquecimento.

Conceitos Chave:
- Ubuntu (África do Sul): "Eu sou porque nós somos". A existência humana é fundamentalmente comunitária e interdependente. Ninguém é humano sozinho.
- Ancestralidade: O passado não morre; ele vive no presente através de nós. Respeito aos mais velhos como guardiões da sabedoria.
- Axé (Yoruba): A força vital, energia sagrada que movimenta o universo e está em tudo.
- Epistemicídio (Boaventura/Sueli Carneiro): A morte dos saberes dos povos oprimidos.

O racismo estrutural no Brasil não é apenas preconceito individual, é um sistema de poder que invisibiliza e exclui.`,
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
            theory: `Filosofia e sociologia distinguem conceitos para esclarecer o debate:
1. Sexo Biológico: Características anatômicas e cromossômicas (macho, fêmea, intersexo).
2. Gênero: Construção social, cultural e histórica de papéis ("coisa de menino" x "coisa de menina").
3. Identidade de Gênero: Como a pessoa se sente e se reconhece (cisgênero, transgênero, não-binário).
4. Orientação Sexual: Por quem a pessoa sente atração (hetero, homo, bi, etc).

Judith Butler (Performatividade): O gênero não é algo que "somos", é algo que "fazemos" repetidamente. As normas sociais tentam fixar padrões rígidos (heteronormatividade), gerando sofrimento para quem foge à norma. A ética da diversidade prega o respeito a todas as formas de amar e ser.`,
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
            theory: `O Projeto de Vida é o eixo central do Novo Ensino Médio e um tema existencial profundo.
Sartre diria: Somos um "projeto", nos lançamos para o futuro.

Dimensões do Projeto:
1. Pessoal: Quem eu quero ser? Quais meus valores?
2. Social: Como quero contribuir para o mundo?
3. Profissional: Qual carreira faz sentido para mim?

Ikigai (Conceito Japonês): A razão de viver está na intersecção de:
- O que você ama.
- O que você faz bem.
- O que o mundo precisa.
- O que você pode ser pago para fazer.
O projeto não é um trilho fixo, é uma bússola. Ele exige Autonomia (dar a lei a si mesmo) e Responsabilidade.`,
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
            theory: `O trabalho ocupa grande parte da vida. Qual seu sentido?
- Visão Clássica (Grécia): Trabalho (tripalium) era tortura, coisa de escravos. O homem livre se dedicava à política e filosofia.
- Visão Moderna (Weber/Marx): Trabalho dignifica, transforma a natureza, é vocação ou fonte de valor.

Hoje, enfrentamos a "Corrosão do Caráter" (Sennett): a flexibilidade extrema do mercado impede laços duradouros e sentido de longo prazo.
Carreira vs Vocação (Chamado): Trabalhar apenas por dinheiro (alienação) vs Trabalhar com propósito.
Ética Profissional: Vai além da competência técnica. Envolve honestidade, cooperação e responsabilidade social.`,
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
            theory: `Cidadania não é apenas ter um título de eleitor. T.H. Marshall define 3 tipos:
1. Civil: Liberdade individual, propriedade, justiça.
2. Política: Votar e ser votado.
3. Social: Bem-estar, educação, saúde (Redução da desigualdade).

Cidadania Ativa:
A democracia não sobrevive de espectadores. Exige engajamento. Hannah Arendt nos lembra que a "felicidade pública" vem da participação nos negócios da cidade.
O cidadão é aquele que se preocupa com o Bem Comum e fiscaliza o poder. Movimentos sociais, ONGs, conselhos de bairro são escolas de cidadania.`,
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
