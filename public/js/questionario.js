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
            }, 70 * i); 
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
            if (ptsDeterminacao < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Olha, parece que sua determinação tá meio apagada, e isso me deixa preocupado." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu percebo que você pode estar enfrentando barreiras que tornam tudo mais difícil."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que eu realmente desejo é ver você se reconectar com aquilo que importa pra você." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Que tal pensar em um pequeno objetivo, só pra dar aquele primeiro passo? Lembre-se: até uma faísca pode acender uma chama.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsDeterminacao <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Sua determinação tá no jogo, e isso é muito bom. Eu percebo que você tá buscando, e isso me deixa esperançoso, porque é um sinal de que você não desistiu."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Mas sabe, às vezes, só persistir não é o bastante. O que você acha de tentar um novo jeito de abordar as coisas? Pode ser uma chance de ver até onde essa força pode te levar"
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Caramba, sua determinação tá tão forte que parece que você pode enfrentar qualquer coisa!" 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa inspirado, porque mostra o quanto você tá comprometido com o que quer alcançar."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Só que, até mesmo os mais determinados precisam lembrar: não é sobre correr sempre, mas sobre saber quando dar uma pausa."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Reserve um momento pra recarregar, porque o caminho ainda é longo e cheio de possibilidades"
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsBravura < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu percebo que, talvez, você tenha hesitado um pouco na hora de enfrentar desafios."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa um pouco preocupado, porque eu sei que, por dentro, você tem mais força do que imagina."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que eu gostaria de ver é você se arriscar mais, até que seja confortável." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Que tal tentar dar um pequeno passo fora da sua zona de conforto e ver como se sente?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsBravura <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem mostrado coragem, mesmo que não seja fácil. Isso me dá esperança, porque significa que você tá tentando, mesmo quando o medo aparece."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Mas olha, ser bravo não significa não ter medo, significa agir apesar dele."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu gostaria de ver você tomando mais decisões corajosas, nem que seja aos poucos, sem pressa de ser perfeito. Isso vai te fortalecer."
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Uau, você tem encarado os desafios de frente, não tem medo de se expor e isso me impressiona."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu sinto uma energia positiva vindo disso, porque mostra que você tem o que é preciso pra se lançar em qualquer situação."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Só lembre-se, bravura também é saber quando pedir ajuda, quando compartilhar o peso." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Talvez, se você tiver um momento pra refletir antes de seguir, isso pode te trazer mais força."
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsJustica < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Percebo que em algumas situações, pode ser difícil encontrar o equilíbrio e fazer o que é certo."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa um pouco triste, porque sei que você quer fazer o bem, mas às vezes fica difícil escolher o melhor caminho."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Gostaria de te sugerir que, na próxima vez que sentir esse impasse, pense um pouco sobre o impacto das suas escolhas nos outros." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso pode te ajudar a tomar decisões mais justas.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsJustica <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem tentado, e isso é visível. Eu sinto que você está buscando agir com justiça, mesmo quando a situação não é fácil."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Porém, às vezes, a dúvida ainda pode te paralisar."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                dialogo_pergunta.innerHTML = "Eu gostaria de te convidar a continuar ouvindo mais as pessoas ao seu redor, refletindo mais sobre o que é justo para todos."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Às vezes, esse pequeno ajuste pode fazer uma grande diferença.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem sido uma pessoa muito justa, sempre tentando fazer o que é certo, mesmo quando não é o caminho mais fácil." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa tranquilo, porque vejo que você leva isso muito a sério."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                dialogo_pergunta.innerHTML = "No entanto, é importante lembrar que ninguém é perfeito."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Mesmo nas situações difíceis, se você puder refletir antes de tomar decisões..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "pode encontrar maneiras de ser ainda mais justo com todos, incluindo você mesmo."
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsBondade < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Percebo que, às vezes, pode ser difícil ser gentil, especialmente quando você se sente desmotivado ou frustrado."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me preocupa, porque vejo que você tem muito potencial para espalhar bondade..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "mas talvez ainda não esteja reconhecendo como pequenas atitudes podem fazer grande diferença."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Gostaria de sugerir que, ao invés de se concentrar no que está fora de seu controle..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "tente fazer algo bom, mesmo que seja pequeno, todos os dias. Isso pode te ajudar a ver o impacto positivo.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsBondade <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem mostrado gestos de bondade, mas sinto que, em alguns momentos, falta aquela espontaneidade."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu sei que você tem um coração bom e que se importa com os outros..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = " mas pode ser que, por medo de errar ou de não ser suficiente, você se retraia."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Que tal tentar ser um pouco mais gentil com você mesmo?"
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso pode te ajudar a também expandir sua bondade para os outros, sem pressa."
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu vejo que você tem se dedicado a ser uma pessoa genuinamente bondosa."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa bem tranquilo, porque é um reflexo de seu caráter."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Mas, lembre-se: a bondade verdadeira também inclui ser gentil consigo mesmo, mesmo quando as coisas não saem como esperado." 
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Quando você se der o devido valor, sua bondade pode crescer ainda mais."
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsPaciencia < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Percebo que, quando as coisas não vão como o esperado, você tende a se frustar rapidamente, o que é completamente compreensível."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu sinto que, às vezes, isso pode te impedir de lidar com situações difíceis de uma maneira mais tranquila."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me preocupa, porque sei que a paciência pode trazer clareza e ajudar a lidar com os desafios de forma mais leve."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Que tal tentar respirar fundo e dar um passo atrás quando algo não sair como planejado? Isso pode te ajudar a agir com mais calma.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsPaciencia <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem mostrado alguma paciência..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "mas, em algumas situações, sinto que poderia se permitir um pouco mais de flexibilidade."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Sei que, às vezes, o ambiente exige muito de você, mas a paciência é uma habilidade que cresce com a prática."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "E eu sinto que, quando você sente que o controle está fugindo, talvez seja o momento de confiar no processo."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que você acha de, em situações desafiadoras, tentar dar um tempo para si mesmo antes de reagir?"
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "É admirável ver como você tem sido paciente, principalmente nos momentos em que as coisas não são fáceis."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me tranquiliza, porque sei que você tem uma visão mais ampla e equilibrada das situações."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "No entanto, sinto que pode ser necessário manter esse equilíbrio também com você mesmo."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Às vezes, a paciência precisa começar com a autocompaixão."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que você acha de continuar cultivando essa paciência para si mesmo também?"
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsIntegridade < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Notei que em algumas situações, a sua integridade tem sido desafiada."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso pode ser uma consequência de pressões externas, mas também sinto que isso pode impactar a confiança que os outros têm em você."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu me preocupo com o impacto que isso pode ter nos seus relacionamentos e na sua própria paz de espírito."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu entendo que as coisas nem sempre são simples, mas que tal tentar ser mais honesto consigo mesmo sobre suas escolhas?"
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso pode trazer mais confiança para você e para quem está ao seu redor.";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsIntegridade <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem demonstrado integridade na maioria das vezes..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "mas percebo que há momentos em que você poderia ser um pouco mais fiel aos seus princípios."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me deixa com uma sensação de que talvez você se perca um pouco em algumas situações."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu entendo que há muita pressão, mas talvez, ao alinhar suas ações com o que você acredita, você se sentirá mais forte e em paz."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que acha de, ao tomar decisões, refletir um pouco mais sobre o que é mais importante para você?"
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu vejo que a sua integridade tem sido um ponto forte e uma base sólida para as suas ações..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "e isso me deixa tranquilo, porque sei que você pode ser confiável, mesmo nos momentos mais difíceis."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso me faz acreditar que você tem uma visão clara do que é certo..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "No entanto, sinto que é sempre bom continuar a manter essa postura firme, mesmo quando os ventos da vida ficam mais fortes."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Você tem sido um exemplo para os outros, mas que tal reforçar ainda mais isso, cuidando de sua integridade em cada pequeno gesto?"
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            if (ptsPerseveranca < 5) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Percebo que, em algumas situações, você tem se sentido paralisado ou desmotivado, o que pode ser frustrante."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "A perseverança, mais do que insistir em algo, é sobre saber quando dar o próximo passo, mesmo quando as coisas não saem como o esperado."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Talvez seja hora de olhar para o que está te impedindo de continuar e decidir dar um pequeno passo..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "mesmo que ele pareça insignificante. O que acha de tentar isso?";
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else if (ptsPerseveranca <= 7){
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Vejo que você tem conseguido continuar em frente, mas parece que algo ainda te pesa..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "como se as dificuldades te deixassem indeciso sobre qual direção seguir."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Isso é normal, e é bom que você tenha se mantido firme até aqui."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Porém, a perseverança também é saber onde investir sua energia."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Que tal dar uma olhada nas pequenas vitórias que já conquistou e perceber o que te motiva a seguir?"
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = " Isso pode ajudar a criar mais clareza e confiança."
                await efeitorEscrever(dialogo_pergunta, somSans)
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Eu vejo que você tem uma força impressionante para continuar, mesmo quando o caminho é desafiador."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Sua perseverança realmente brilha, e isso é algo valioso..."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Porém, percebo que, com essa força, você também precisa garantir que está se cuidando ao longo da jornada."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "Às vezes, um pouco de descanso e reflexão pode renovar essa energia."
                await efeitorEscrever(dialogo_pergunta, somSans)
                await new Promise(resolve => setTimeout(resolve, 1000));
                dialogo_pergunta.innerHTML = "O que acha de equilibrar sua perseverança com momentos de pausa para recarregar?"
                await efeitorEscrever(dialogo_pergunta, somSans)
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            dialogo_pergunta.innerHTML = "Bom... acredito que já disse tudo o que tinha de falar...";
            await efeitorEscrever(dialogo_pergunta, somSans)
            await new Promise(resolve => setTimeout(resolve, 1000));
            dialogo_pergunta.innerHTML = "Espero que tenha aprendido alguma lição e nos vemos na próxima!";
            await efeitorEscrever(dialogo_pergunta, somSans)
            registrarPontuacaoFinal();
            atualizarAcesso();
            await new Promise(resolve => setTimeout(resolve, 3000));
            window.location.href = "../dashboards/sessao.html";
        }