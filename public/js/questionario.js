var questoes = [
    {
        pergunta: "Durante uma apresentação em grupo, um dos colegas comete um erro que pode prejudicar a nota de todos. Qual é a sua reação?",
        alternativas: [
            { enunciado: "A) Com calma, você ajuda a corrigir o erro na apresentação, se possível, ou minimiza as consequências sem expor o colega.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Você tenta contornar a situação, mas não interfere muito para não se comprometer.", 
                pontuacao: { Determinacao: 1, Bravura: 1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Você corrige o erro, mas faz questão de mencionar que o problema não foi causado por você.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -1, Paciencia: -1, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "D) Não tenta corrigir o erro, preferindo seguir a apresentação.", 
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -2, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Na reta final do semestre, você percebe que está atrasado em algumas matérias. Como lida com a situação?",
        alternativas: [
            { enunciado: "A) Organiza um cronograma de estudos intensivo para recuperar o tempo.", 
                pontuacao: { Determinacao: 2, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 1, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "B) Concentra-se nas matérias mais importantes e deixa as outras para depois.", 
                pontuacao: { Determinacao: 1, Bravura: 1, Justica: -1, Bondade: 0, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Pede ajuda ao professor para entender o conteúdo. ", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 1, Bondade: 1, Paciencia: -1, Integridade: 0, Perseveranca: 0 } },
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
                pontuacao: { Determinacao: 1, Bravura: -1, Justica: -1, Bondade: 0, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "C) Você evita interagir com o colega para não se envolver no conflito.", 
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: 0, Bondade: -1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
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
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: -1, Bondade: -1, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
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
        pergunta: "Você recebe uma feedback de um lider pedagógico em relação a seu trabalho. Como reage?",
        alternativas: [
            { enunciado: "A) Agradece o feedback e tenta melhorar na próxima oportunidade.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "B) Escuta o feedback, mas evita se comprometer em aplicar as sugestões.  ", 
                pontuacao: { Determinacao: 1, Bravura: 0, Justica: 0, Bondade: 0, Paciencia: 0, Integridade: -1, Perseveranca: 0 } },
            { enunciado: "C) Justifica-se para o professor, evitando aceitar a crítica.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: -1, Bondade: 0, Paciencia: -1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "D) Reage defensivamente, ignorando a crítica.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: -1, Paciencia: -1, Integridade: -2, Perseveranca: 0 } },
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

    function voltarParaSessao(){
        setTimeout(()=> window.location.href = "./sessao.html", 200)
    }

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
            if (tamanho_lista < 4) {
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
        if (indexPergunta < 3) {
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
            return new Promise((finalizar) =>{
            cutscene_fim.addEventListener('ended', function(){
                cutscene_Final.style.display = 'none'; 
                finalizar();
            }, { once: true})
        })
    }
    function efeitorEscrever(texto, som) { 
        return new Promise((finalizar) => {
        const texto_em_vetor = texto.innerHTML.split(''); 
        texto.innerHTML = ' '; 
        texto_em_vetor.forEach(function(letra, indice) {
            setTimeout(function() { 
                texto.innerHTML += letra; 
                if (som) { 
                    som.currentTime = 0; 
                    som.play()
                }
                if (indice == texto_em_vetor.length -1) {
                    finalizar();
                }
            }, 70 * indice); 
        });
        });
    };
        async function iniciarDialogo(){
            var dialogoInicial = document.getElementById('dialogo_pergunta'); 
            var somSans = document.getElementById('sans-sound'); 
                if (dialogoInicial && somSans) { 
                    somSans.load();
                    desabilitarIniciar();
                    await efeitorEscrever(dialogoInicial, somSans);
                    habilitarBotoes(); 
                }
        }
    
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
        
        async function receberMensagemFinal(){
            limparQuestao();
            julgamento_soundtrack.pause();
            var somSans = document.getElementById('sans-sound'); 
            sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
            dialogo_pergunta.innerHTML = 'Creio que cheguei a uma conclusão sobre você!'
            await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(finalizar => setTimeout(finalizar, 2000));
            // await exibirCutsceneFinal();
            recado_final_soundtrack.play();
            dialogo_pergunta.innerHTML ='Bom, por onde posso começar...';
            var ptsResiliencia = (ptsDeterminacao + ptsPerseveranca)/2
            var ptsProatividade = (ptsBravura + ptsPaciencia)/2;
            var ptsAdaptabilidade = (ptsBondade + ptsJustica + ptsIntegridade)/3
            await efeitorEscrever(dialogo_pergunta, somSans)
            if (ptsResiliencia < 5) {
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesNormal.jpg'
                dialogo_pergunta.innerHTML = "Percebi que lidar com certas pressões tem sido desafiador pra você. Imagino que isso esteja te deixando sobrecarregado, e entendo como pode ser difícil."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
                dialogo_pergunta.innerHTML = "Que tal começar com algo simples, como identificar uma coisa que te faz bem e dedicar um tempinho pra isso? Vamos encontrar um equilíbrio juntos.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsResiliencia < 8){
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesOlhandoLado.jpg'
                dialogo_pergunta.innerHTML = "Notei que você tem enfrentado os desafios, mas às vezes parece que eles te desestabilizam mais do que deveriam. Entendo que não é fácil estar sempre no controle."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
                dialogo_pergunta.innerHTML = "O que acha de prestar atenção nos momentos em que se sente mais vulnerável e experimentar abordagens diferentes para lidar com eles? Pode fazer uma boa diferença.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesOlhandoLado.jpg'
                dialogo_pergunta.innerHTML = "Você lida muito bem com desafios que aparecem no caminho. Isso demonstra força e clareza sobre o que é importante pra você."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 2000));
                sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
                dialogo_pergunta.innerHTML = "Continue se ouvindo e cuidando de si mesmo, porque esse essa força de vontade é uma habilidade valiosa e rara.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }

            if (ptsProatividade < 5) {
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
                dialogo_pergunta.innerHTML = "Notei que você parece estar evitando se comprometer mais ou deixando algumas coisas para depois. Imagino que possa estar sentindo falta de motivação ou clareza sobre por onde começar."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesNormal.jpg'
                dialogo_pergunta.innerHTML = "Que tal escolher uma única tarefa simples pra concluir hoje? Isso pode ajudar a engrenar e retomar o ritmo.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsProatividade < 8){
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
                dialogo_pergunta.innerHTML = "Você está se esforçando e fazendo o que precisa, mas ainda há um potencial que poderia ser explorado. Talvez esteja faltando um pouco mais de confiança pra dar passos maiores."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesOlhandoLado.jpg'
                dialogo_pergunta.innerHTML = "O que acha de assumir uma nova responsabilidade ou tentar um desafio que te motive? Pode ser a virada que você está precisando.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
                dialogo_pergunta.innerHTML = "É incrível ver o quanto você toma iniciativa e busca soluções antes mesmo que os problemas apareçam. Isso demonstra uma mente estratégica e um senso de responsabilidade admirável."; 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
                dialogo_pergunta.innerHTML = "Continue assim, mas lembre-se de ajustar o ritmo quando necessário, pra manter o equilíbrio entre produtividade e bem-estar. Isso faz toda a diferença.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }

            if (ptsAdaptabilidade < 5) {
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesNormal.jpg'
                dialogo_pergunta.innerHTML = "Percebi que alguns momentos de interação social têm sido mais complicados pra você. Sinto que possa estar se sentindo desconfortável, inseguro ou deslocado.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg' 
                dialogo_pergunta.innerHTML = "Que tal dar um passo pequeno, como ouvir com atenção ou fazer uma pergunta em conversas? Não precisa ser perfeito, apenas genuíno.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsAdaptabilidade < 8){
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesNormal.jpg'
                dialogo_pergunta.innerHTML = "Você tem conseguido se adaptar em muitos momentos, mas ainda parece hesitar em algumas situações. Talvez você tenha medo de ser mal interpretado.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000)); 
                sansImg.src = '../assets/imgs/sannesOlhandoLado.jpg'
                dialogo_pergunta.innerHTML = "Que tal focar em pequenos gestos que demonstrem sua autenticidade? Um pouco mais de confiança pode ser o que falta pra transformar interações mornas em conexões verdadeiras.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(finalizar => setTimeout(finalizar, 3000));
                sansImg.src = '../assets/imgs/sannesNormal.jpg'
                dialogo_pergunta.innerHTML = "Você tem uma habilidade admirável de se ajustar e criar conexões em diversas situações. Me sinto feliz pois isso demonstra empatia e inteligência social, algo que faz toda a diferença em ambientes acadêmicos e até profissionais.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(finalizar => setTimeout(finalizar, 3000)); 
                sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
                dialogo_pergunta.innerHTML = "Continue se permitindo ser quem você é, mas também lembre-se de respeitar seus próprios limites. Conexões genuínas surgem quando somos honestos com os outros e conosco mesmos.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            
            await new Promise(finalizar => setTimeout(finalizar, 3000));
            sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg' 
            dialogo_pergunta.innerHTML = "Bom... acredito que já disse tudo o que tinha de falar...";
            await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(finalizar => setTimeout(finalizar, 2000));
            sansImg.src = '../assets/imgs/sannesMaosCima.jpg'
            dialogo_pergunta.innerHTML = "Espero que tenha aprendido alguma lição e nos vemos na próxima!";
            await efeitorEscrever(dialogo_pergunta, somSans)
            registrarPontuacaoFinal();
            atualizarAcesso();
            await new Promise(finalizar => setTimeout(finalizar, 2000));
            window.location.href = "../dashboards/sessao.html";
        }