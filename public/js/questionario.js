var questoes = [
    {
        pergunta: "Durante uma apresentação em grupo, um dos colegas comete um erro que pode prejudicar a nota de todos. Qual é a sua reação?",
        alternativas: [
            { enunciado: "A) Com calma, você ajuda a corrigir o erro na apresentação, se possível, ou minimiza as consequências sem expor o colega.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Você tenta contornar a situação, mas não interfere muito para não se comprometer.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "C) Você corrige o erro, mas faz questão de mencionar que o problema não foi causado por você.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: -1, Integridade: -2, Perseveranca: 0 } },
            { enunciado: "D) Não tenta corrigir o erro, preferindo seguir a apresentação.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -1, Paciencia: 0, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Na reta final do semestre, você percebe que está atrasado em algumas matérias. Como lida com a situação?",
        alternativas: [
            { enunciado: "A) Organiza um cronograma de estudos intensivo para recuperar o tempo.", 
                pontuacao: { Determinacao: 2, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "B) Concentra-se nas matérias mais importantes e deixa as outras para depois.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "C) Pede ajuda ao professor para entender o conteúdo. ", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Decide relaxar e deixar para o próximo semestre o que não der tempo.", 
                pontuacao: { Determinacao: -2, Bravura: -1, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você descobre que a maioria dos seus colegas colou em uma prova difícil. O que faz?",
        alternativas: [
            { enunciado: "A) Você decide fazer a prova honestamente, mesmo que isso signifique uma nota menor.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Ignora a situação e se concentra apenas no seu próprio desempenho.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 1, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "C) Não comenta com ninguém, mas sente que foi prejudicado por não colar.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "D) Reclama para outros colegas sobre a vantagem que os outros tiveram.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: -1, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Durante uma discussão em grupo, uma decisão importante precisa ser tomada, mas ninguém quer assumir a responsabilidade. O que você faz?",
        alternativas: [
            { enunciado: "A) Assume a responsabilidade, mesmo sabendo que isso pode te sobrecarregar.", 
                pontuacao: { Determinacao: 1, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Sugerir que o grupo faça uma votação", 
                pontuacao: { Determinacao: -2, Bravura: -1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Aguarda que outra pessoa assuma a responsabilidade, evitando se comprometer.", 
                pontuacao: { Determinacao: -2, Bravura: -2, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Fica em silêncio e deixa que o grupo siga sem decisão.", 
                pontuacao: { Determinacao: -3, Bravura: -1, Justica: -1, Bondade: -1, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Um colega está claramente estressado e sendo rude com a equipe. Qual é a sua reação?",
        alternativas: [
            { enunciado: "A) Você tenta acalmar a situação e conversar com o colega depois.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Você ignora o comportamento dele e foca na tarefa.", 
                pontuacao: { Determinacao: 1, Bravura: -1, Justica: -1, Bondade: -1, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Você evita interagir com o colega para não se envolver no conflito.", 
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Responde ao comportamento rude da mesma forma para demonstrar que não aceita.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: -2, Paciencia: -2, Integridade: -1, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você vê um colega receber elogios por uma tarefa que, na verdade, foi feita por você. Qual é a sua atitude?",
        alternativas: [
            { enunciado: "A) Conversa com o colega de forma amigável para esclarecer a situação.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Agradece o elogio sem corrigir o erro, mas sente-se incomodado.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: -2, Bondade: 0, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Ignora a situação, mas evita colaborar com o colega no futuro.", 
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Corrige o elogio em público, deixando claro que você foi o responsável.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: -1, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Um colega pede ajuda para uma tarefa, mas você também está sobrecarregado. Como você responde?",
        alternativas: [
            { enunciado: "A) Explica sua situação e oferece uma ajuda breve, se possível", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Recomenda que ele procure o lider pedagógico para ajudá-lo.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 1, Bondade: 1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Prefere não se envolver.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 0, Bondade: -1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Recusa de imediato, pois não tem tempo para ajudar.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: -2, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Durante um projeto em equipe, você percebe que um colega está assumindo crédito pelo trabalho de todos. Qual é a sua atitude?",
        alternativas: [
            { enunciado: "A) Fala com o colega diretamente e sugere dividir o crédito de forma justa.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Comenta com o líder do grupo sobre o problema.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Aceita a situação, mas se sente incomodado em silêncio.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "D) Corrige publicamente, expondo o colega de maneira direta.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você recebe uma crítica construtiva de um lider pedagógico sobre seu trabalho. Como reage?",
        alternativas: [
            { enunciado: "A) Agradece o feedback e tenta melhorar na próxima oportunidade.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Escuta o feedback, mas evita se comprometer em aplicar as sugestões.  ", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "C) Justifica-se para o professor, evitando aceitar a crítica.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: -1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Reage defensivamente, ignorando a crítica.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Em uma situação de pressão extrema, você percebe que cometeu um erro importante. O que faz?",
        alternativas: [
            { enunciado: "A) Admite o erro rapidamente e se oferece para corrigi-lo.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Informa o erro para o responsável, mas evita se envolver na solução.", 
                pontuacao: { Determinacao: -1, Bravura: 0, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Não comenta sobre o erro e tenta corrigi-lo discretamente.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "D) Ignora o erro e espera que ninguém perceba.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -2, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Durante uma reunião, você discorda da opinião de um colega. Como você age?",
        alternativas: [
            { enunciado: "A) Expõe sua opinião de forma respeitosa e clara, sem desvalorizar a do colega.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Comenta que discorda, mas evita aprofundar para não criar conflito.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Concorda superficialmente, mas ignora o que o colega disse depois.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Ignora a opinião do colega e mantém sua visão sem justificar.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Seu amigo está sendo criticado por um erro que foi causado por outra pessoa. Qual é a sua postura?",
        alternativas: [
            { enunciado: "A) Defende o amigo, explicando a verdadeira situação para evitar injustiça.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Comenta com outras pessoas que o erro não foi dele, mas evita se envolver diretamente.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "C) Ignora a situação, pensando que não é sua responsabilidade.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Deixa que ele lide com a situação, acreditando que não é problema seu.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você recebe uma tarefa desafiadora com prazo curto. Qual é a sua atitude?",
        alternativas: [
            { enunciado: "A) Enfrenta o desafio e organiza seu tempo para dar o melhor de si.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 1 } },
            { enunciado: "B) Faz o que consegue, mas considera pedir ajuda se o prazo apertar.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: -1 } },
            { enunciado: "C) Tenta fazer, mas considera abandonar caso fique muito difícil.", 
                pontuacao: { Determinacao: -1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Sente que não consegue lidar e desiste, comunicando o abandono ao responsável.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: -2 } },
        ]
    },
    {
        pergunta: "Durante uma atividade de grupo, um colega não está colaborando. O que você faz?",
        alternativas: [
            { enunciado: "A) Conversa diretamente com ele para entender o que está acontecendo e oferecer ajuda, se necessário.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Dou um toque sutil para que ele se envolva mais na atividade.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Faço o trabalho sozinho e deixo o colega de lado, pois prefiro evitar conflitos.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: -1, Bondade: -1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Comento sobre a situação com o resto do grupo, mas não abordo o colega diretamente.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você tem uma apresentação para fazer, mas está muito nervoso e não quer falar em público. Como você lida com isso?",
        alternativas: [
            { enunciado: "A) Prática bastante e tenta focar no conteúdo, mesmo que ainda sinta nervosismo.", 
                pontuacao: { Determinacao: 1, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Pede para outra pessoa do grupo fazer a apresentação em seu lugar, caso isso seja permitido.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "C) Fala o básico e termina rapidamente, evitando contato visual.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: -1 } },
            { enunciado: "D) Evita a apresentação completamente, alegando que está indisposto.", 
                pontuacao: { Determinacao: -2, Bravura: 0, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você é designado para uma função de liderança em um projeto que não se sente totalmente preparado para liderar. Qual é sua atitude?",
        alternativas: [
            { enunciado: "A) Assume a função e busca orientação para fazer o melhor trabalho possível.", 
                pontuacao: { Determinacao: 1, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Aceita a função, mas comunica suas dúvidas ao responsável.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "C) Aceita a função, mas espera que outros do grupo liderem mais ativamente.", 
                pontuacao: { Determinacao: -1, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Recusa o papel, preferindo não correr riscos.", 
                pontuacao: { Determinacao: 0, Bravura: -2, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você está em uma aula e percebe que alguns colegas estão fazendo comentários negativos sobre o professor. O que você faz?",
        alternativas: [
            { enunciado: "A) Não participa dos comentários e foca na aula, evitando distrações.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Tenta mudar de assunto, dizendo que não quer se envolver.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 0, Paciencia: 0, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "C) Concorda e participa da conversa para não se sentir excluído.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "D) Incentiva os comentários, acrescentando críticas suas.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você percebe que um colega está sendo excluído durante uma atividade em grupo. Qual é a sua atitude?",
        alternativas: [
            { enunciado: "A) Tenta envolver o colega nas discussões, pedindo sua opinião.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 1, Bondade: 1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Conversa discretamente com o colega para ver se ele quer se integrar.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: 0, Bondade: 1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Continua a atividade com o restante do grupo e ignora a situação.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Ignora o colega e evita a responsabilidade de incluí-lo.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -2, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você percebe que está muito cansado e com pouca concentração, mas ainda tem atividades para terminar. O que você faz?",
        alternativas: [
            { enunciado: "A) Faz uma pausa para descansar e retoma as atividades depois.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "B) Continua trabalhando até terminar tudo, mesmo com o cansaço.", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 1 } },
            { enunciado: "C) Adia as atividades, planejando terminar em outro momento.", 
                pontuacao: { Determinacao: -1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Pede ajuda para alguém, dividindo as tarefas.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você está liderando uma atividade em grupo, mas alguns membros não estão seguindo suas instruções. Como você reage?",
        alternativas: [
            { enunciado: "A) Conversa com os membros para entender suas dificuldades e ajusta as instruções.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Reforça as instruções, pedindo que sigam para o bem do grupo.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: -1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Faz a sua parte e permite que eles ajam como preferirem.", 
                pontuacao: { Determinacao: 0, Bravura: -1, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Ignora a situação e se concentra apenas no que precisa entregar.", 
                pontuacao: { Determinacao: 0, Bravura: -2, Justica: -2, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: -2 } },
        ]
    }
];
    var lista_selecionada = [];
    var indexPergunta = 0;
    var ptsDeterminacao = 5;
    var ptsBravura = 5;
    var ptsJustica = 5;
    var ptsBondade = 5;
    var ptsPaciencia = 5;
    var ptsIntegridade = 5;
    var ptsPerseveranca = 5;

    function receberPontuacaoAtual(){
        if (sessionStorage.PRIMEIRO_ACESSO == 0) {;
            ptsDeterminacao = 5;
            ptsBravura = 5;
            ptsJustica = 5;
            ptsBondade = 5;
            ptsPaciencia = 5;
            ptsIntegridade = 5;
            ptsPerseveranca = 5;
        } else{
        fetch(`/pontuacoes/listarPontuacao/${sessionStorage.ID_USUARIO}`, {
            method: "GET",
        }).then(function (respostaPontuacoes) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (respostaPontuacoes.ok) {
                console.log(respostaPontuacoes);

                respostaPontuacoes.json().then(dados => {
                    console.log(dados[0]);
                    console.log(JSON.stringify(dados[0]));
                    ptsDeterminacao = dados[0].determinacao;
                    ptsBravura = dados[0].bravura;
                    ptsJustica = dados[0].justica;
                    ptsBondade = dados[0].bondade;
                    ptsPaciencia = dados[0].paciencia;
                    ptsIntegridade = dados[0].integridade;
                    ptsPerseveranca = dados[0].perseveranca;
                });
            } else {
                console.log("Houve um erro ao puxar os dados do questionario anterior!");
                respostaPontuacoes.text().then(texto => {
                    console.error(texto);
                });
            }
        }).catch(function (erro) {
            console.log(erro);
        })
        return false;
    }
    }
    function registrarPontuacaoFinal(){
        fetch("/pontuacoes/cadastrarPontuacao", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                determinacaoServer: ptsDeterminacao,
                bravuraServer: ptsBravura,
                justicaServer: ptsJustica,
                bondadeServer: ptsBondade,
                pacienciaServer: ptsPaciencia,
                integridadeServer: ptsIntegridade,
                perseverancaServer: ptsPerseveranca,
                fkUsuarioServer: sessionStorage.ID_USUARIO
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
        
              if (resposta.ok) {
                console.log("Pontuação cadastrada com sucesso!");
              } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
            });
          return false;
    }
    function atualizarAcesso(){
        sessionStorage.PRIMEIRO_ACESSO = 1;
        fetch("/usuarios/atualizarAcesso", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idUsuarioServer: sessionStorage.ID_USUARIO,
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
        
              if (resposta.ok) {
                console.log("Atualização realizada com sucesso!");
              } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
            });
        
          return false;
    }
    
    function iniciarQuestionario(){
        butao_som.play();
        caixa_batalha.style.display = 'grid';
        barra_jogador.style.display = 'flex'
        areabotoes.style.display = 'flex';
        botaoIniciar.style.display = 'none';
        criarQuestionario();
    }
    function criarQuestionario(){
        julgamento_soundtrack.play()
        var lista_questoes = [];
        for (var contador = 0; contador < 1; contador++) {
            var numeroAleatorio = Math.random();
            var questaoAleatoria = Math.floor(numeroAleatorio * 20)
            var questaoExistente = lista_questoes.includes(questaoAleatoria)
            if (questaoExistente == false) {
                lista_questoes.push(questaoAleatoria);
            }
            var tamanho_lista = lista_questoes.length;
            if (tamanho_lista < 10) {
                contador--
            } else{
                lista_selecionada = lista_questoes;
                renderizarQuestao();
            }
        }
    }
    function cadastrarPontuacoesFinais(){
        fetch("/pontuacoes/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                determinacaoServer: ptsDeterminacao,
                bravuraServer: ptsBravura,
                justicaServer: ptsJustica,
                bondadeServer: ptsBondade,
                pacienciaServer: ptsPaciencia,
                integridadeServer: ptsIntegridade,
                perseverancaServer: ptsPerseveranca,
                fkUsuarioServer: sessionStorage.ID_USUARIO
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
            if (resposta.ok) {
                console.log(resposta);
            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }
        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
    
    function limparQuestao(){
        enunciado_a.innerHTML = '';
        enunciado_b.innerHTML = '';
        enunciado_c.innerHTML = '';
        enunciado_d.innerHTML = '';
        
        opcao_a.disabled = true;
        opcao_a.style.border = '0.5vh solid #733f1d'
        opcao_a.style.color = '#733f1d'
        opcao_b.disabled = true;
        opcao_b.style.border = '0.5vh solid #733f1d'
        opcao_b.style.color = '#733f1d'
        opcao_c.disabled = true;
        opcao_c.style.border = '0.5vh solid #733f1d'
        opcao_c.style.color = '#733f1d'
        opcao_d.disabled = true;
        opcao_d.style.border = '0.5vh solid #733f1d'
        opcao_d.style.color = '#733f1d'
    }
    function desabilitarIniciar(){
        botaoIniciar.disabled = true;
        botaoIniciar.style.border = '0.5vh solid #733f1d'
        botaoIniciar.style.color = '#733f1d'
    }
    function habilitarBotoes(){
        botaoIniciar.disabled = false;
        botaoIniciar.style.border = '0.5vh solid #FF7F27';
        botaoIniciar.style.color = '#FF7F27';
        opcao_a.disabled = false;
        opcao_a.style.border = '0.5vh solid #FF7F27';
        opcao_a.style.color = '#FF7F27';
        opcao_b.disabled = false;
        opcao_b.style.border = '0.5vh solid #FF7F27';
        opcao_b.style.color = '#FF7F27';
        opcao_c.disabled = false;
        opcao_c.style.border = '0.5vh solid #FF7F27';
        opcao_c.style.color = '#FF7F27';
        opcao_d.disabled = false;
        opcao_d.style.border = '0.5vh solid #FF7F27';
        opcao_d.style.color = '#FF7F27';
    }
    async function renderizarQuestao(){
        dialogo_pergunta.innerHTML = questoes[lista_selecionada[indexPergunta]].pergunta;
        limparQuestao();
        var som_do_sans = document.getElementById('sans-sound');   
        lvJogador.innerHTML = `LV ${indexPergunta+1}`
        await efeitorEscrever(dialogo_pergunta, som_do_sans);
        enunciado_a.innerHTML = questoes[lista_selecionada[indexPergunta]].alternativas[0].enunciado;
        enunciado_b.innerHTML = questoes[lista_selecionada[indexPergunta]].alternativas[1].enunciado;
        enunciado_c.innerHTML = questoes[lista_selecionada[indexPergunta]].alternativas[2].enunciado;
        enunciado_d.innerHTML = questoes[lista_selecionada[indexPergunta]].alternativas[3].enunciado;
        habilitarBotoes()
        console.log("Lista selecionada", lista_selecionada);
    }
    function escolher(alternativa){
        butao_som.play();
        if (indexPergunta < 9) {
        if (alternativa == 'A') {
            ptsDeterminacao += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Determinacao;
            ptsBravura += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Bravura;
            ptsJustica += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Justica;
            ptsBondade += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Bondade;
            ptsPaciencia += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Paciencia;
            ptsIntegridade += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Integridade;
            ptsPerseveranca += questoes[lista_selecionada[indexPergunta]].alternativas[0].pontuacao.Perseveranca;
        } else if (alternativa == 'B'){
            ptsDeterminacao += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Determinacao;
            ptsBravura += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Bravura;
            ptsJustica += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Justica;
            ptsBondade += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Bondade;
            ptsPaciencia += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Paciencia;
            ptsIntegridade += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Integridade;
            ptsPerseveranca += questoes[lista_selecionada[indexPergunta]].alternativas[1].pontuacao.Perseveranca;
        } else if (alternativa == 'C'){
            ptsDeterminacao += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Determinacao;
            ptsBravura += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Bravura;
            ptsJustica += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Justica;
            ptsBondade += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Bondade;
            ptsPaciencia += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Paciencia;
            ptsIntegridade += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Integridade;
            ptsPerseveranca += questoes[lista_selecionada[indexPergunta]].alternativas[2].pontuacao.Perseveranca;
        } else if (alternativa == 'D'){
            ptsDeterminacao += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Determinacao;
            ptsBravura += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Bravura;
            ptsJustica += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Justica;
            ptsBondade += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Bondade;
            ptsPaciencia += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Paciencia;
            ptsIntegridade += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Integridade;
            ptsPerseveranca += questoes[lista_selecionada[indexPergunta]].alternativas[3].pontuacao.Perseveranca;
        }
        indexPergunta++
            console.log("Pontuação de Determinação Atual: ", ptsDeterminacao);
            console.log("Pontuação de Bravura Atual: ", ptsBravura);
            console.log("Pontuação de Justiça Atual: ", ptsJustica);
            console.log("Pontuação de Bondade Atual: ", ptsBondade);
            console.log("Pontuação de Paciência Atual: ", ptsPaciencia);
            console.log("Pontuação de Integridade Atual: ", ptsIntegridade);
            console.log("Pontuação de Perseverança Atual: ", ptsPerseveranca);
            renderizarQuestao();
        if (ptsDeterminacao < 0) {
            ptsDeterminacao = 0;        
        } else if (ptsDeterminacao > 10) {
            ptsDeterminacao = 10;
        }
        if (ptsBravura < 0) {
            ptsBravura = 0;        
        } else if (ptsBravura > 10) {
            ptsBravura = 10;
        }
        if (ptsJustica < 0) {
            ptsJustica = 0;        
        } else if (ptsJustica > 10) {
            ptsJustica = 10;
        }
        if (ptsBondade < 0) {
            ptsBondade = 0;        
        } else if (ptsBondade > 10) {
            ptsBondade = 10;
        }
        if (ptsPaciencia < 0) {
            ptsPaciencia = 0;        
        } else if (ptsPaciencia > 10) {
            ptsPaciencia = 10;
        }
        if (ptsIntegridade < 0) {
            ptsIntegridade = 0;        
        } else if (ptsIntegridade > 10) {
            ptsIntegridade = 10;
        }
        if (ptsPerseveranca < 0) {
            ptsPerseveranca = 0;        
        } else if (ptsPerseveranca > 10) {
            ptsPerseveranca = 10;
        }
        } else {
            console.log("Finalizado");
            console.log("Pontuação de Determinação Final: ", ptsDeterminacao);
            console.log("Pontuação de Bravura Final: ", ptsBravura);
            console.log("Pontuação de Justiça Final: ", ptsJustica);
            console.log("Pontuação de Bondade Final: ", ptsBondade);
            console.log("Pontuação de Paciência Final: ", ptsPaciencia);
            console.log("Pontuação de Integridade Final: ", ptsIntegridade);
            console.log("Pontuação de Determinação Final: ", ptsPerseveranca);
            receberMensagemFinal()

        }
    }
    async function exibirCutsceneFinal(){
        cutscene_Final.style.display = 'flex'; 
        cutscene_fim.currentTime = 0;
        cutscene_fim.play();
            return new Promise((resolve) =>{
            cutscene_fim.addEventListener('ended', function(){
                cutscene_Final.style.display = 'none'; 
                resolve();
            }, { once: true})
        })
    }
    function efeitorEscrever(texto, som) { 
        return new Promise((resolve) => {
        const texto_em_vetor = texto.innerHTML.split(''); 
        texto.innerHTML = ' '; 
        texto_em_vetor.forEach(function(letra, i) {
            setTimeout(function() { 
                texto.innerHTML += letra; 
                if (som) { 
                    som.currentTime = 0; 
                    som.play().catch(error => console.error('Erro ao reproduzir áudio:', error));  
                }
                if (i == texto_em_vetor.length -1) {
                    resolve();
                }
            }, 75 * i); 
        }); 
        }); 
    }
        document.addEventListener('DOMContentLoaded', async function() { 
            const dialogoInicial = document.getElementById('dialogo_pergunta'); 
            const somSans = document.getElementById('sans-sound'); 
                if (dialogoInicial && somSans) { 
                    // Carrega o áudio para garantir que ele esteja pronto para ser reproduzido 
                    somSans.load();
                    desabilitarIniciar();
                    await efeitorEscrever(dialogoInicial, somSans);
                    habilitarBotoes(); 
                } else { 
                    console.error('texto #dialogo_pergunta ou #sans-sound não encontrado.'); 
                }
            }
        );
        function somDeMenuCursor(botao){
            if (botao.disabled === false) {
                botao.style.color = '#ffff00';
                botao.style.border = '0.5vh solid #ffff00';
                butao_hover_som.play();
            }
        }
        function voltarOriginal(botao){
            if (botao.disabled ==- false) {
                botao.style.border = '0.5vh solid #FF7F27';
                botao.style.color = '#FF7F27';
            }
        }
        
        async function receberMensagemFinal (){
            limparQuestao();
            julgamento_soundtrack.pause();
            var somSans = document.getElementById('sans-sound'); 
            sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
            dialogo_pergunta.innerHTML = 'Creio que cheguei a uma conclusão sobre você!'
            await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(resolve => setTimeout(resolve, 2000));
                await exibirCutsceneFinal();
    
            recado_final_soundtrack.play();
            dialogo_pergunta.innerHTML ='';
            if (ptsBondade < 6 && ptsJustica < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Heh, você tá meio... na defensiva, né? Ser gentil não mata ninguém, cara. E, olha, até a justiça precisa de uma mãozinha. Pensa nisso e...';
                    await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsPaciencia < 6 && ptsPerseveranca < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = 'Parece que a pressa te pegou, huh? Lembra que nem todo caminho precisa ser percorrido com o pé no acelerador. Dá uma respirada e segue firme e...';
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsIntegridade < 6 && ptsBravura < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = 'Se esconder nas sombras, huh? Isso até funciona... mas, às vezes, a integridade e a coragem são o que fazem alguém brilhar. Tenta dar a cara a tapa de vez em quando e...';
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = 'sabe... às vezes, é fácil ficar nas sombras, mas... onde tá a coragem nisso? Talvez seja hora de dar um passo à frente e, uh... fazer a coisa certa, sabe?';
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsDeterminacao >= 6 && ptsBondade < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = 'Heh, vejo que você é bem determinado. Isso é bom. Só... não deixa de ser uma pessoa legal no processo, beleza? Determinação é legal, mas gentileza faz o mundo girar e...';
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsBondade >= 5 && ptsBondade <= 7 && ptsBravura >= 5 && ptsBravura <= 7 && ptsDeterminacao >= 5 && ptsDeterminacao <= 7 && ptsIntegridade >= 5 && ptsIntegridade <= 7 && ptsJustica >= 5 && ptsJustica <= 7 && ptsPaciencia >= 5 && ptsPaciencia <= 7 && ptsPerseveranca >= 5 && ptsPerseveranca <= 7) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = 'Nada mal, nada mal! Tá andando na linha... mas será que isso é o suficiente? Sempre dá pra ser um pouco mais determinado... ou bondoso... ou corajoso... Sabe como é...';
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Heh... parece que você ainda tem bastante o que aprender. Nada de errado nisso. Só... não desiste agora, ok? Mesmo que pareça difícil. Isso pode ser o começo de algo melhor.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Parece que tem um monte de coisas pra ajustar aí. Mas relaxa... nem todo mundo é um 'super-herói' da primeira vez. Dá uma olhada onde pode melhorar e tenta de novo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsBondade >=7 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da BONDADE? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsBondade < 6 && ptsBravura >=7 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da BRAVURA? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao >=7  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da DETERMINAÇÃO? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade >=7 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da INTEGRIDADE? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
    
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica >=7 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da JUSTIÇA? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia >=7 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da PACIÊNCIA? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
    
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6  && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca >=7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Oh, então você é o campeão da PERSEVERANÇA? Legal, mas lembra que focar só numa coisa pode te deixar cego pra outras. Quem sabe a vida te pede algo além disso... então fica esperto.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } 
            if(ptsBondade > 8 && ptsBravura > 8 && ptsDeterminacao > 8  && ptsIntegridade > 8 && ptsJustica > 8 && ptsPaciencia > 8 && ptsPerseveranca > 8){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Bem, bem, olha só quem tá pronto pra ser o novo modelo de comportamento! Não vou mentir... é meio impressionante. Só não esquece de continuar assim, ou você acaba... bem, sabe como.";
                await efeitorEscrever(dialogo_pergunta, somSans)
    
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Parece que você anda fazendo tudo certo. Quem diria, hein? Mas... sabe, ninguém é perfeito. Ou é? Heh, só não deixa essa confiança subir à cabeça...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Hmm, parece que a sua determinação tá meio... capenga. A vida pode te derrubar, mas, heh, que tal levantar um pouquinho mais rápido da próxima vez?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica >=7 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Olha só... você parece saber o que é justo, mas... e a bondade? Tá meio em falta. Lembra que às vezes é preciso ser justo e gentil. Nem todo mundo é um vilão pra você julgar, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade >=7 && ptsBravura < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é uma boa pessoa, não vou negar. Mas... às vezes, bondade precisa de um empurrãozinho de coragem. Que tal tentar mostrar isso mais na prática? Do tipo... colocar a cara a tapa e tudo e...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia >=7 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe esperar. Legal. Só não esquece que paciência sem ação... é só, tipo, uma longa soneca. Acorda pra vida, parceiro...";
                await efeitorEscrever(dialogo_pergunta, somSans)
    
            }
            if(ptsJustica < 6 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "É, parece que você anda dando umas... escorregadas por aí. O que foi? Decidiu que as regras são... opcionais? Às vezes, é bom lembrar que o que vai... volta, parceiro...";
                await efeitorEscrever(dialogo_pergunta, somSans)
    
            }
            if(ptsBravura >=7 && ptsDeterminacao >=7 && ptsPaciencia < 6  && ptsBondade < 8){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Olha só o herói destemido! Só toma cuidado, valente... Determinação sem paciência e bondade pode, uh... acabar sendo meio solitária, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia  >=7 && ptsPerseveranca >=7 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe esperar e seguir firme, mas... integridade? Huh, talvez isso seja algo pra refletir. Porque continuar no caminho errado... ainda é seguir o caminho errado, entende?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade  >=7 && ptsIntegridade >=7 && ptsBravura < 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é um dos bons, não vou negar. Mas... às vezes os bons precisam de um pouco mais de... fogo, sabe? Coragem pra enfrentar o que vier. Só bondade não leva você tão longe...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca  >=7 && ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6 && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é Perseverante! Você sabe se manter firme... mas e o resto? Não adianta só persistir se o caminho não é o certo. Só... um toque...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao  >=7 && ptsBondade < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Olha só, você tem determinação. Isso é legal. Mas... às vezes, ser determinado demais sem se importar com os outros pode acabar... mal, sabe? Dá uma chance pros outros de vez em quando...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura >=7 && ptsJustica >=7 && ptsPaciencia < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você gosta de fazer a coisa certa, não importa o custo, huh? Mas, às vezes, acelerar demais... faz você perder o que tá ao redor. Paciência, meu amigo... a vida não é só um sprint...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Hm, tá me dizendo que integridade e persistência não são muito sua praia? É... bom, talvez seja hora de rever os atalhos. Eles parecem fáceis, mas no fim... você acaba dando uma volta...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade >=7 && ptsJustica < 6 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é uma pessoa boa, sem dúvida. Só que... nem sempre só a bondade resolve. Às vezes, é preciso fazer o que é justo, mesmo que seja difícil. Que tal equilibrar isso um pouco?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica >= 9 && ptsBravura < 7 && ptsDeterminacao < 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é do tipo que gosta de ver tudo certo. Mas... quando chega a hora de se arriscar pra fazer o certo, talvez falte um empurrãozinho. Tá na hora de se jogar um pouco mais...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia >= 9 && ptsBravura < 7 && ptsDeterminacao < 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Paciência é uma virtude, eu sei. Mas só esperar não vai resolver tudo. Às vezes, é preciso agir e... arriscar um pouco. Que tal tentar sair da zona de conforto?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade >= 9 && ptsBondade < 7 && ptsBravura < 7 && ptsDeterminacao < 7 && ptsJustica < 7 && ptsPaciencia < 7 && ptsPerseveranca < 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Uau, olha só! Uma pessoa íntegra. Isso é legal, mas... integridade sem um pouco de ação é tipo... uma estátua. Bela de ver, mas parada. Que tal usar toda essa integridade pra fazer algo?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade >= 7 && ptsBondade < 6 && ptsBravura >= 7 && ptsDeterminacao >= 7 && ptsJustica >= 7 && ptsPaciencia >= 7 && ptsPerseveranca >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá indo bem, parceiro. Só cuidado pra não ser... hã, 'certinho demais'. Às vezes, ser legal com os outros faz mais diferença do que qualquer regra...";
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Bondade nunca é demais, sabe? Um 'por favor' aqui, um 'obrigado' ali, pode fazer mais diferença do que você imagina...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsIntegridade >= 7 && ptsPaciencia < 6 && ptsBravura >= 7 && ptsDeterminacao >= 7 && ptsJustica >= 7 && ptsBondade >= 7 && ptsPerseveranca >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá mandando bem na maioria das áreas, mas, sério, apressado desse jeito, vai acabar queimando a largada. Relaxa um pouco, as coisas também têm seu tempo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsIntegridade >= 7 && ptsBravura < 6 && ptsPaciencia >= 7 && ptsDeterminacao >= 7 && ptsJustica >= 7 && ptsBondade >= 7 && ptsPerseveranca >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Tá quase perfeito, mas parece que você hesita na hora de enfrentar desafios de frente. Coragem não é a ausência de medo, é só... dar aquele passo mesmo com medo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsIntegridade >= 7 && ptsPerseveranca < 6 && ptsPaciencia >= 7 && ptsDeterminacao >= 7 && ptsJustica >= 7 && ptsBondade >= 7 && ptsBravura >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá indo bem, mas desistir no meio do caminho? Não parece seu estilo. Levanta, sacode a poeira e termina o que começou...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsIntegridade >= 7 && ptsJustica < 6 && ptsPaciencia >= 7 && ptsDeterminacao >= 7 && ptsPerseveranca >= 7 && ptsBondade >= 7 && ptsBravura >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá indo bem, mas tá fechando os olhos pra algumas injustiças ao seu redor. Que tal levantar a voz por quem precisa?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsIntegridade >= 7 && ptsDeterminacao < 6 && ptsPaciencia >= 7 && ptsJustica >= 7 && ptsPerseveranca >= 7 && ptsBondade >= 7 && ptsBravura >= 7){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Hmm, parece que você é bom em ficar parado quando precisa se mover. Tá tudo bem, só não esquece que a vida não vai esperar você decidir se quer entrar no jogo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade > 6 && ptsBondade < 6 && ptsDeterminacao > 6  && ptsPaciencia < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Olha só, o guerreiro determinado. Só cuidado pra não atropelar os outros enquanto segue seu caminho. Uma dose de bondade e paciência nunca fez mal a ninguém, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura < 5 && ptsBondade > 6 && ptsDeterminacao < 5  && ptsPaciencia > 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é calmo, tranquilo e boa gente... mas a vida às vezes pede um pouco de ousadia. Que tal colocar um pouquinho de ação nesse seu coração bondoso? Sair da zona de conforto pode ser divertido...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica < 6 && ptsPaciencia < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Justiça e paciência meio em baixa, huh? Lembre-se, às vezes a pressa ou o interesse próprio podem atrapalhar o que é realmente justo. Dá uma maneirada na impaciência, só um conselho...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia > 6 && ptsIntegridade > 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Hm, você é do tipo que espera a maré passar e mantém seus princípios. Só que... às vezes, remar contra a corrente também é necessário. Vai lá, dá um pouco mais de gás!";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsPerseveranca < 6 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Parece que você quer fazer o que é certo... só que, às vezes, falta força pra seguir até o fim. Ser justo é bom, mas ser consistente é ainda melhor...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsBravura > 6 && ptsPaciencia < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você gosta de resolver as coisas rápido e de forma justa, né? Só cuidado pra não ser tipo um furacão. Às vezes, dar um tempo ajuda a ver outras soluções...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsPerseveranca > 6 && ptsBravura < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe insistir até conseguir, e isso é ótimo. Mas, às vezes, falta dar o primeiro passo em situações arriscadas. Que tal tentar? O chão tá firme, eu acho...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsPaciencia > 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é uma boa pessoa, sem dúvida. Mas... ser bom sem ser justo pode deixar coisas importantes passarem. Que tal equilibrar a balança, hein?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é do tipo que quer que tudo seja justo, mas... nem sempre a justiça vem rápido ou fácil. Persistir é chato, eu sei, mas no final... pode valer a pena...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca > 6 && ptsPaciencia > 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe aguentar os trancos e seguir em frente, e isso é ótimo. Só cuidado pra não ignorar quando algo errado tá acontecendo ao seu redor. Falar é difícil, mas necessário...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsBravura < 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tem um coração grande, mas parece que ele fica meio tímido quando precisa se arriscar. Às vezes, ser bom também significa ser forte o bastante pra agir...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsIntegridade < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Determinado você é, sem dúvida. Só que, sem um pouco de honestidade e senso de justiça, você pode acabar atropelando uns valores importantes no caminho...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsBondade > 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você se esforça e tem um coração de ouro, mas... ser bonzinho demais pode acabar desequilibrando a balança. Às vezes, dizer 'não' também é importante...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade > 6 && ptsBravura < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Ah, um bastião da moralidade, hein? Isso é legal, mas, se você não sustentar suas escolhas, elas acabam caindo por conta própria. Bora levantar a coragem aí...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca > 6 && ptsPaciencia > 6 && ptsDeterminacao < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é o mestre em esperar... e esperar... mas quando é hora de agir, parece que fica no modo de descanso. Justiça não acontece sozinha, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura > 6 && ptsJustica > 6 && ptsBondade < 6 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você gosta de lutar pelo que é certo, mas, às vezes, esquece de ser gentil no caminho. A integridade também tá no jeito como você trata os outros, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsPaciencia > 6 && ptsDeterminacao < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "É, você é ótimo em cuidar dos outros, mas... e de você? A vida não vai desacelerar só porque você tá indo no seu ritmo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura > 6 && ptsIntegridade > 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tem coragem e é justo, mas parece que desiste quando as coisas não dão certo rápido. Spoiler: algumas coisas boas levam tempo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsPerseveranca > 6 && ptsBondade < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe se esforçar e persistir, mas... e se o esforço estiver no caminho errado? Persistência sem propósito pode ser só... teimosia disfarçada...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsBondade < 6 && ptsBravura < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é tipo um juiz imparcial, só que às vezes ser justo demais te faz parecer um pouco... frio. Que tal aquecer isso com um toque de empatia?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsIntegridade < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você corre atrás do que quer, mas o caminho que escolhe... nem sempre é o mais reto. Ser determinado é bom, mas que tal ajustar sua bússola moral?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca > 6 && ptsBravura < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é tipo uma tartaruga: vai devagar e chega longe. Só que... às vezes, a tartaruga precisa se levantar e lutar pelo que é certo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsJustica > 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Ser gentil e justo é ótimo, mas... quando é que você vai se colocar em primeiro lugar? Não dá pra ajudar os outros com o tanque vazio...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao < 6 && ptsIntegridade > 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Ei, pelo menos você tem a verdade do seu lado. Só que, sem ação e coragem, a integridade não passa de uma boa intenção...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if(ptsBondade < 6 && ptsBravura < 6 && ptsDeterminacao > 6 && ptsIntegridade < 6 && ptsJustica < 6 && ptsPaciencia < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá tentando, e isso já é um começo. Só lembra que dá pra melhorar em cada passo. Determinação é só o começo da história...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca > 6 && ptsIntegridade > 6 && ptsBondade < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você segue seus valores e não desiste, mas... o que adianta persistir se o caminho não é justo com os outros? Dá uma ajustada nisso aí...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura > 6 && ptsDeterminacao > 6 && ptsPaciencia < 6 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é uma força da natureza, mas, às vezes, parece que tá passando por cima das pessoas sem perceber. Ser forte também é ser gentil...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia > 6 && ptsBondade > 6 && ptsBravura < 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é super tranquilo e ajuda quem precisa, mas falta aquela faísca pra começar. Que tal dar o primeiro passo e ver o que acontece?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsPaciencia < 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tem um bom senso do que é certo, mas tá faltando energia pra colocar isso em prática. E, sério, apressar as coisas nunca ajuda...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsJustica < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tem um coração enorme, mas coração sem ação não resolve tudo. Ser bom também significa lutar pelo que é justo, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsIntegridade < 6 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tem um senso de justiça invejável, mas, sem bondade e honestidade, justiça pode virar frieza. Equilibrar isso faz toda a diferença...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBravura > 6 && ptsPaciencia < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é o tipo que enfrenta qualquer coisa... mas será que tá enfrentando pelos motivos certos? Coragem sem justiça pode virar só... caos..";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsDeterminacao > 6 && ptsIntegridade < 6 && ptsBravura < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você não desiste, o que é impressionante, mas às vezes parece que tá esquecendo o que é certo e quem você pode ajudar no caminho...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia > 6 && ptsBravura < 6 && ptsJustica < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe esperar, mas esperar pra sempre não é a solução. Alguma hora, tem que levantar e lutar pelo que é certo, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsIntegridade > 6 && ptsPaciencia < 6 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você segue o que é certo, mas parece que tá esquecendo de colocar um pouco de empatia no processo. Justiça sem bondade pode ser só... dureza...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsPaciencia > 6 && ptsJustica < 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você é gentil e sabe esperar, mas tá faltando energia pra lutar pelo que importa. Dá pra ser bom e determinado ao mesmo tempo, sabe?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPerseveranca > 6 && ptsBravura < 6 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você segue firme, mas será que tá indo na direção certa? Às vezes, é preciso coragem pra parar e avaliar o impacto no caminho...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsJustica > 6 && ptsPaciencia < 6 && ptsBondade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe o que é certo, mas a pressa em corrigir tudo tá deixando as pessoas pra trás. Justiça com um toque de bondade nunca faz mal...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsBondade > 6 && ptsJustica < 6 && ptsPerseveranca < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você se preocupa com os outros, mas tá faltando aquele empurrão pra agir e persistir. Bondade sem ação é só intenção...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsPaciencia > 6 && ptsBravura < 6 && ptsIntegridade < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Esperar e observar é bom, mas tá na hora de ser honesto consigo mesmo e enfrentar o que precisa. Paciência só não resolve tudo...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if(ptsIntegridade > 6 && ptsJustica > 6 && ptsDeterminacao < 6){
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você sabe o que é certo e vive de acordo com isso, mas será que tá fazendo o suficiente pra alcançar o que realmente importa?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Bom... acredito que já disse tudo o que tinha de falar...";
                await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Espero que tenha aprendido alguma lição e nos vemos na próxima!";
                await efeitorEscrever(dialogo_pergunta, somSans)
            registrarPontuacaoFinal();
            atualizarAcesso();
            await new Promise(resolve => setTimeout(resolve, 3000));
            window.location.href = "../dashboards/sessao.html";
        }