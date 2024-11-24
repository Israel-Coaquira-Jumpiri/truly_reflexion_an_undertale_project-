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
                    som.play()
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
        
        async function receberMensagemFinal(){
            limparQuestao();
            julgamento_soundtrack.pause();
            var somSans = document.getElementById('sans-sound'); 
            sansImg.src = '../assets/imgs/sannesOlhosFechados.jpg'
            dialogo_pergunta.innerHTML = 'Creio que cheguei a uma conclusão sobre você!'
            await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(resolve => setTimeout(resolve, 2000));
            await exibirCutsceneFinal();
            recado_final_soundtrack.play();
            dialogo_pergunta.innerHTML ='Bom, por onde posso começar...';
            await efeitorEscrever(dialogo_pergunta, somSans)

            if (ptsDeterminacao > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Ei, sua determinação está bem alta! Dá pra ver que você não desiste fácil e isso é incrível. Sinto-me inspirado ao ver como você se mantém firme mesmo quando as coisas ficam difíceis. Continue nesse ritmo, porque é com essa energia que grandes coisas acontecem!";
                await efeitorEscrever(dialogo_pergunta, somSans)
                if (ptsBravura > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua bravura parece estar de parabéns! Isso mostra que você não teme enfrentar desafios. Sinto-me animado porque determinação e bravura juntas criam um combo imbatível. Que tal continuar explorando essa força pra ir ainda mais longe?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, percebi que sua bravura não tá tão alta quanto poderia. Isso pode dificultar a hora de dar o primeiro passo em situações desafiadoras. Que tal começar enfrentando pequenos desafios e ir aumentando aos poucos?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsJustica > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua justiça tá no ponto, o que é ótimo, porque quem tem determinação e senso de justiça geralmente faz escolhas incríveis. Sinto-me orgulhoso em ver como você busca equilíbrio e respeito nas suas decisões. Continue assim, pois este mundo precisa de pessoas como você!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, sua justiça parece estar um pouco desequilibrada. Isso pode significar que às vezes você se perde entre o que é melhor pra você e o que é justo pros outros. Tente refletir sobre o impacto das suas decisões pra encontrar um equilíbrio maior.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'E sua bondade? Muito show! Isso significa que você tem um coração generoso e tá sempre disposto a ajudar os outros. É uma qualidade rara, e você deveria se orgulhar disso. O mundo precisa de mais pessoas assim.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Percebi que sua bondade poderia crescer um pouco mais. Isso não quer dizer que você não seja gentil, mas pequenos gestos podem fazer uma grande diferença. Tente prestar atenção nas oportunidades de ser mais empático no dia a dia.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência é tão forte quanto sua determinação, o que mostra que você sabe esperar pelo momento certo pra agir. Essa combinação faz de você alguém que pensa no longo prazo e evita decisões precipitadas.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência parece estar em falta, o que pode dificultar esperar pelo momento certo ou lidar com situações que exigem calma. Tente respirar fundo e lembrar que às vezes as melhores coisas levam tempo pra acontecer.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade está boa também! Isso mostra que você mantém seus valores mesmo nas situações difíceis, e isso é algo que merece respeito. Dá pra confiar que você vai fazer o certo, mesmo quando ninguém tá olhando.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Notei que sua integridade não é seu forte. Talvez você esteja enfrentando pressões externas que tão te desviando do que acredita ser certo. Reflita sobre o que realmente importa pra você e use isso como guia.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'E pra fechar com chave de ouro, sua perseverança é admirável! Isso prova que você não desiste fácil e tá sempre buscando alcançar seus objetivos, não importa o quanto o caminho seja difícil. Continue assim!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança parece estar um pouco fraca. Isso pode significar que você tá se sentindo desmotivado em algumas situações. Lembra por que começou? Reconectar com seus objetivos pode te ajudar a encontrar forças pra continuar.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            } else{
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Percebi que sua determinação precisa ser trabalhada. Sinto-me preocupado porque, sem determinação, nós acabamos meio perdidos no caminho, mas não se preocupe. É normal passar por isso as vezes, o importante é se levantar e tentar de novo, focando no que realmente importa.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                if (ptsBravura > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Mas, olha lá sua bravura está muito boa! Sinto-me animado porque, quando você tem coragem, pode superar qualquer coisa. A determinação pode não estar onde deveria, mas a coragem te ajuda a continuar, mesmo sem saber exatamente o que fazer. Que tal usar sua bravura para ir atrás de coisas que realmente te motivem? Isso vai te dar aquele empurrãozinho pra seguir em frente.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, percebi que sua bravura não tá tão alta quanto poderia. Isso pode dificultar a hora de dar o primeiro passo em situações desafiadoras. Que tal começar enfrentando pequenos desafios e ir aumentando aos poucos?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsJustica > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém percebi que sua justiça está legal! Sinto-me feliz porque, mesmo sem toda a determinação, você ainda se preocupa com o que é certo. Você tem um norte! Embora às vezes ele pareça um pouco distante. Que tal dar mais atenção a isso e pensar no que é justo para te dar um motivo extra de seguir adiante?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Além disso, percebi que sua justiça está um pouco baixa. Sinto-me inquieto porque, sem agir de acordo com o que é certo, a determinação fica sem direção. Que tal dar mais atenção ao que é justo pra você? Isso vai ajudar a trazer um pouco mais de clareza, e talvez até te motive a encontrar a determinação que você precisa.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'E a bondade também está no seu lado positivo. Sinto-me tocado porque, quando você tem bondade, é mais fácil encontrar propósito nas ações. Isso vai te ajudar a dar um foco maior, mesmo quando a determinação não parece tão forte. Que tal praticar mais a bondade e deixar ela guiar seus próximos passos?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Percebi que a bondade está baixa. Sinto-me preocupado, porque, sem bondade, fica difícil de manter a determinação e encontrar um propósito. Que tal começar com pequenos gestos de bondade, mesmo que você não tenha muita motivação? Sei que você irá conseguir!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Ah, e sua paciência também tá bem alta, né? Sinto-me aliviado porque a paciência vai te ajudar a seguir em frente sem pressa, mesmo quando a determinação não está lá. Você vai saber esperar o momento certo e continuar a jornada, sem pressões desnecessárias. Isso é fundamental pra te ajudar a superar essa fase de baixa determinação.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Notei que a paciência tá bem abaixo. Sinto-me desconfortável, porque, sem paciência, sua determinação vai ser como tentar correr sem ter fôlego. Que tal dar uma pausa e tentar ser mais calmo consigo mesmo? Respire fundo, e com o tempo a paciência vai se encaixando com a sua determinação.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Por fim, a sua integridade também tá boa, o que é uma grande vantagem. Sinto-me confiante porque, quando você tem integridade, é mais fácil manter o foco nos objetivos, mesmo que a determinação não seja a maior. Que tal usar seus princípios pra trazer mais força pra sua caminhada? Isso vai ajudar muito.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Percebi que sua integridade também está baixa. Sinto-me atendo porque, sem uma base sólida de valores, fica difícil continuar quando a determinação tá em baixa. Que tal refletir mais sobre seus princípios e o que realmente importa pra você? Isso pode te ajudar a encontrar a força pra buscar a determinação de volta';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança tá legal, o que é bom! Isso mostra que, mesmo quando as coisas ficam difíceis, você continua indo em frente. Que tal usar essa força de persistência pra reacender a chama da determinação? Às vezes, só precisamos de um empurrãozinho.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A sua perseverança parece baixa. Sinto-me preocupado, porque isto pode te deixar sem direção. Mas calma, isso acontece com todo mundo às vezes. Que tal começar pequeno? Com uma meta simples, que você pode conquistar, e trabalhe nela um passo de cada vez. Persistência é algo que cresce com prática, e ela vai trazer a determinação junto.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }

            if (ptsBravura > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Sua bravura tá tão forte que parece até que você tá pronto pra enfrentar qualquer desafio. Sinto-me inspirado porque essa coragem de seguir em frente é o que faz toda a diferença quando as coisas complicam. Mantenha-se firme, porque você tá indo muito bem!";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsJustica > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua justiça tá alinhada com essa bravura, o que mostra que você não só enfrenta os desafios, mas também pensa em fazer o que é certo. Sinto-me orgulhoso porque coragem com justiça é uma combinação rara. Continue assim, e você vai longe!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, percebi que sua justiça tá um pouco de lado. Sinto-me preocupado porque coragem sem justiça pode levar a decisões impulsivas ou até prejudicar outros. Vamos tentar refletir mais antes de agir? Sei que você consegue.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Além disso, sua bondade está legal! Me faz pensar que sua bravura não é só pra você, mas também pra ajudar quem tá por perto. Fico feliz porque ser corajoso e bondoso ao mesmo tempo é algo que impacta positivamente todo mundo ao seu redor. Não perca isso!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Notei que sua bondade não tá tão presente. Sinto-me atento porque coragem sem empatia pode afastar as pessoas ao seu redor. Que tal tentar pequenos gestos de gentileza? Isso pode fortalecer suas conexões amigo.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência está legal! Porque bravura com paciência mostra que você sabe a hora certa de agir. Sinto-me tranquilo porque você tá mostrando que coragem também é saber esperar pelo momento ideal. Continue assim!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência precisa de um reforço. Sinto-me inquieto porque bravura sem paciência pode levar a decisões precipitadas. Vamos pensar em como ser mais estratégico? Esperar o momento certo é tão importante quanto agir.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade chama a atenção. Bravura sem integridade pode ser perigosa, mas você equilibra isso perfeitamente. Sinto-me seguro porque sei que suas decisões têm base em valores fortes. Continue sendo essa pessoa íntegra e corajosa!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade parece estar um pouco mal. Sinto-me preocupado porque bravura sem valores pode levar você pra atalhos errados. Vamos trabalhar nisso? Conectar suas ações aos seus valores vai te fortalecer, eu garanto.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Por fim, sua perseverança está ótima! Bravura e perseverança juntas formam uma força imensa, porque você não só enfrenta desafios, mas continua até superá-los. Sinto-me confiante porque você tem consistência. Mantenha esse ritmo, parceiro!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança tá oscilando. Sinto-me atento porque bravura sem persistência pode fazer com que você desista antes de alcançar seus objetivos. Que tal se comprometer com pequenos passos diários? Sei que você consegue manter o foco!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            } else{
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Sua bravura tá tão forte que parece até que você tá pronto pra enfrentar qualquer desafio. Sinto-me inspirado porque essa coragem de seguir em frente é o que faz toda a diferença quando as coisas complicam. Mantenha-se firme, porque você tá indo muito bem!";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsJustica > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua justiça é admirável, isso é algo que poucos têm. Mas sua bravura tá um pouco baixa, o que pode dificultar agir mesmo quando sabe o que é certo. Sinto-me esperançoso porque você já tem a ética certa, só precisa confiar mais no seu instinto.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Percebo que sua justiça está baixa também, o que pode dificultar agir quando situações desafiadoras aparecem. Sinto-me preocupado porque deixar passar o que é certo pode trazer arrependimentos. Que tal começar refletindo sobre pequenos passos pra mudar isso?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua bondade está legal, você é o tipo de pessoa que fortalece o ambiente! Mas com a bravura baixa, talvez esteja hesitando em tomar a iniciativa de ajudar ainda mais. Sinto-me otimista porque já vejo o potencial aí, só falta um empurrãozinho.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A sua bondade está baixa... pode parecer difícil se conectar com os outros ou dar aquele primeiro passo. Sinto-me reflexivo porque às vezes todos precisamos de um empurrão pra sair da zona de conforto. Que tal começarmos com pequenos atos de gentileza?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência está legal. Mas percebo que, com bravura baixa, talvez você esteja esperando demais pra agir. Sinto-me confiante porque paciência e coragem juntos podem ser uma combinação poderosa.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A paciência está baixa também, está faltando a habilidade de esperar resultados e a iniciativa também... Sinto-me atento porque me pergunto: o que tem te segurado ultimamente? Talvez seja hora de ajustar o foco e ser mais gentil consigo mesmo.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Integridade alta... Isso mostra que você é uma pessoa de princípios. Mas sem bravura, pode ser difícil defender esses valores em situações difíceis. Sinto-me animado porque já tá no caminho certo, só falta dar aquele passo a mais.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade está um pouco baixa, o que pode tornar difícil manter seus valores nas decisões. Sinto-me preocupado porque isso pode gerar conflitos internos. Que tal começar identificando o que é mais importante pra você e agir com isso em mente?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança tá legal, você definitivamente não desiste fácil. Mas a bravura baixa pode estar te impedindo de arriscar em coisas novas. Sinto-me encorajado porque sei que, com essa persistência, a coragem vai vir naturalmente.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Com bravura e perseverança baixas, pode parecer que desistir é a saída mais fácil. Sinto-me esperançoso porque você ainda tá aqui, o que já mostra que algo em você quer mudar. Vamos tentar, um passinho de cada vez? Pequenas vitórias fazem grandes diferenças.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }

            if (ptsJustica > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Seu senso de justiça é muito bom. Sinto-me orgulhoso porque buscar o que é certo não é só importante, mas necessário pra criar um impacto positivo ao seu redor. Continue assim, porque o mundo precisa de mais pessoas assim!";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sabe o que complementa perfeitamente sua justiça? Sua bondade! Sinto-me inspirado porque ser justo e gentil ao mesmo tempo é o que cria harmonia nos relacionamentos. Continue sendo assim!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, sua bondade tá um pouco baixa. Isto me preocupa porque justiça sem empatia pode ser rígida demais. Vamos tentar colocar um pouco mais de compaixão em suas decisões? Isso pode tornar seus esforços mais eficazes.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Além disso, sua paciência mostra que você sabe esperar e avaliar antes de agir, o que reforça ainda mais sua justiça. Sinto-me tranquilo porque esse tipo de atitude constrói confiança e respeito. Não perca isso!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, sua paciência está baixa. Sinto-me atento porque justiça sem paciência pode levar a julgamentos apressados. Que tal exercitar mais escuta e reflexão antes de agir? Tenho certeza de que isso vai fortalecer sua presença.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade tá legal também, o que é incrível. Sinto-me seguro porque justiça com integridade é a base de decisões maduras. Mantenha-se fiel aos seus valores, porque isso é uma força que ninguém pode tirar de você';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua integridade está deixando a desejar. Isso me deixa apreensivo pois talvez você esteja fugindo um pouco de seus valores, pensando que é justo. Que tal refletirmos a respeito? Eu sei que você pode melhorar!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'E pra fechar, sua perseverança tá alinhada com sua justiça. Sinto-me confiante porque isso mostra que você luta pelo que acredita até o fim. Não pare, porque o impacto que você pode causar é maior do que imagina!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança precisa ser trabalhada. Isso pode significar que você não consegue finalizar o que começa. Repito, Lembra por que começou? Reconectar com seus objetivos pode te ajudar a encontrar forças pra continuar.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            } else{
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Eu notei que sua justiça tá meio baixa... Sinto-me preocupado, porque isso pode afetar como você se relaciona com os outros. Mas sei que você tem o potencial pra melhorar, só precisamos trabalhar nisso juntos";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsBondade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Embora sua justiça não esteja no melhor nível, vejo que sua bondade é forte. Sinto-me esperançoso porque sua bondade pode ajudar a compensar um pouco, mas precisamos focar mais na justiça também. Vamos encontrar esse equilíbrio?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Ambas, justiça e bondade, estão precisando de atenção... Sinto-me preocupado, porque essas duas qualidades são importantes pra ajudar você a lidar com os outros de forma mais equilibrada. Que tal a gente tentar melhorar um pouco cada uma delas?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua paciência parece estar ótima, eu me sinto esperançoso, pois com essa paciência, você não realiza julgamentos apressados, e com ela podemos trabalhar o seu senso de justiça... Topa?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Justiça e paciência baixas, pode te levar a um caminho de julgamentos apressados e imorais, sinto me preocupado, pois são competências muito importantes para bons trabalhos em equipe, que tal tentarmos melhorar isso?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Mesmo com sua justiça um pouco baixa, a integridade tá lá em cima! Isso é algo bem positivo. Sinto-me otimista porque sua integridade pode guiar suas escolhas, mas seria bom se a justiça estivesse mais em alta também. Que tal focarmos nisso?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Com a justiça e a integridade abaixo, as coisas podem ficar difíceis... Sinto-me frustrado, porque essas qualidades são essenciais para as suas decisões. Mas sei que você pode melhorar. Vamos trabalhar nelas, juntos?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Você tem perseverança, e isso é ótimo! Sinto-me encorajado porque, com essa perseverança, você pode superar qualquer dificuldade, inclusive em relação à justiça. Vamos trabalhar juntos para deixar sua justiça mais forte?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sei que você tem potencial, mas tanto a justiça quanto a perseverança estão precisando de mais atenção... Sinto-me um pouco preocupado, mas com um pouco mais de esforço, você vai conseguir melhorar. Vamos focar nisso?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }
            if (ptsBondade > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Percebi que a bondade tá meio em baixa... Sinto que isso pode afetar suas relações com os outros. Mas não se preocupe, você pode melhorar, e eu tô aqui pra ajudar nisso.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                
                if (ptsPaciencia > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Você tem paciência, e isso é algo raro. Mesmo que a bondade esteja baixa, isso mostra que você tem a capacidade de melhorar, de agir com mais calma e mais compreensão. Só precisa dar o primeiro passo.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Bondade e paciência estão precisando de mais atenção... Isso pode te fazer se sentir um pouco distante ou impaciente com os outros. É um sinal de que talvez seja hora de repensar como você se conecta com quem está ao seu redor.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A integridade que você tem é forte. Isso me dá uma esperança de que, mesmo com a bondade em baixa, você pode transformar suas ações e impactar o mundo ao seu redor com sua honestidade e valores sólidos.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Com a bondade e a integridade em baixa, sinto que há uma desconexão com o que realmente importa. Eu sei que você pode melhorar isso, mas precisa se olhar de forma mais honesta e decidir mudar. Eu acredito que você consegue.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Eu vejo sua perseverança, e ela é impressionante. Mesmo com a bondade em baixa, sinto me confiante, pois acredito que você tem a força necessária para melhorar, passo a passo. Só não se esqueça de olhar com mais empatia para os outros.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Quando a bondade e a perseverança estão fracas, parece que é fácil desanimar. Eu sei que pode ser difícil, mas eu sinto que você tem capacidade de se levantar. Apenas dê um passo de cada vez, que a mudança virá.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }
            if (ptsPaciencia > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "sua paciência é algo que dá pra sentir de longe. Sinto-me tranquilo porque, com essa habilidade, você consegue lidar com os desafios de forma serena e estratégica. Continue assim, porque paciência é uma das maiores forças que alguém pode ter!";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sabe o que complementa sua paciência? Sua integridade. Sinto-me seguro porque paciência aliada a valores sólidos é o que constrói relacionamentos e decisões duradouras. Continue sendo essa pessoa centrada e fiel aos seus princípios!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Porém, percebi que sua integridade tá um pouco baixa. Sinto-me preocupado porque paciência sem valores claros pode te levar a esperar demais sem agir. Que tal refletir sobre suas prioridades e alinhar suas escolhas? Isso vai te fortalecer ainda mais!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'E sua perseverança tá alta também, o que mostra que você não só espera, mas continua firme até alcançar seus objetivos. Sinto-me motivado porque paciência com persistência é o que realmente faz as coisas acontecerem. Mantenha esse equilíbrio poderoso!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança tá precisando de um empurrão. Sinto-me atento porque paciência sem ação pode acabar virando acomodação. Vamos transformar essa calma em passos consistentes? Pequenos avanços podem levar a grandes conquistas!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            } else{
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "A paciência não tá no seu melhor momento, e eu entendo... a vida pode ser bem agitada. Só que isso pode te fazer reagir de forma impetuosa. Precisa respirar fundo e tentar dar espaço pras coisas acontecerem com mais calma.";
                await efeitorEscrever(dialogo_pergunta, somSans)

                if (ptsIntegridade > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Apesar da paciência estar em falta, sua integridade se destaca. Isso mostra que, mesmo em momentos de pressa, você tem a capacidade de agir de forma honesta e verdadeira. Só lembre-se de que agir com calma também é parte disso.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Com a paciência e a integridade em baixa, fica difícil tomar decisões que tragam resultados positivos. Você talvez sinta uma urgência de agir, mas, sem refletir, acaba prejudicando sua conexão com os outros. É hora de desacelerar e pensar mais nas suas atitudes.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }

                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Você tem perseverança, e isso é algo que poucos possuem. A paciência pode estar em baixa, mas sua determinação em seguir em frente é admirável. Apenas não se deixe levar pela pressa. A persistência também precisa de tempo.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A paciência e a perseverança estão fraquinhas, né? Isso pode te fazer sentir que nada vai pra frente. Mas eu sei que você tem o que é preciso pra mudar, só precisa dar espaço para as coisas fluírem no seu tempo. Acredite em você.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }
            if (ptsIntegridade > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Sua integridade é algo incrível de se ver. Sinto-me seguro porque ser fiel aos seus valores é a base de qualquer grande realização. Continue assim, porque o mundo precisa de mais pessoas que fazem o certo mesmo quando ninguém está olhando.";
                await efeitorEscrever(dialogo_pergunta, somSans)
                
                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Além disso, sua perseverança tá no mesmo nível, o que mostra que você não só tem valores sólidos, mas também tem a força pra lutar por eles. Sinto-me motivado porque integridade com perseverança é a base de um impacto duradouro. Continue assim, você tá indo muito bem!';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Sua perseverança parece estar um pouco fraca. Você está precisando ser um pouco mais consistente com seus valores. Lembre do que é importante para você! Eu sei que você consegue!.';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            } else{
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Eu sinto que você tem se distanciado um pouco dos seus valores e princípios. Isso pode estar gerando insegurança nas suas decisões. Precisamos dar mais atenção àquilo que é realmente importante, pra que as coisas fluam de forma mais sincera. Que tal refletir mais antes de agir?";
                await efeitorEscrever(dialogo_pergunta, somSans)
                
                if (ptsPerseveranca > 6) {
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'Mesmo com a integridade um pouco comprometida, sua perseverança se mantém firme. Isso é bom, mas a persistência sem um norte claro pode te levar a resultados insatisfatórios. É importante alinhar suas ações com seus valores, assim você não vai apenas continuar, mas seguir de forma mais forte. Você poderia refletir sobre suas escolhas?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                } else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    dialogo_pergunta.innerHTML = 'A falta de integridade e perseverança pode estar te deixando sem rumo, e eu sinto que isso deve ser difícil. Se continuar nesse caminho, as coisas tendem a desmoronar. Eu te encorajo a encontrar o equilíbrio entre o que é certo e o que realmente importa pra você. Vamos tentar fortalecer essas qualidades, juntos?';
                    await efeitorEscrever(dialogo_pergunta, somSans)
                }
            }
            if (ptsPerseveranca > 6) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "Você tá com a perseverança lá em cima, hein? Sinto-me inspirado porque é assim que se conquistam grandes coisas: com determinação, foco e uma dose generosa de paciência. Essa persistência de seguir em frente, não importa o que aconteça, é realmente um diferencial. Continue com essa energia!";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 3000));
                dialogo_pergunta.innerHTML = "A falta de perseverança é algo que me preocupa... sei que os desafios podem te deixar desmotivado. Mas você tem o que é preciso para seguir em frente. Precisamos encontrar maneiras de reaquecer a sua vontade de continuar, mesmo quando tudo estiver difícil. Você pode tentar dar o primeiro passo novamente?";
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