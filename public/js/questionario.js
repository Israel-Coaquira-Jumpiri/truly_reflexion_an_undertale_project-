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
            { enunciado: "Você tenta acalmar a situação e conversar com o colega depois.", 
                pontuacao: { Determinacao: 0, Bravura: 0, Justica: 0, Bondade: 1, Paciencia: 1, Integridade: 1, Perseveranca: 0 } },
            { enunciado: "Você ignora o comportamento dele e foca na tarefa.", 
                pontuacao: { Determinacao: 1, Bravura: -1, Justica: -1, Bondade: -1, Paciencia: 1, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "Você evita interagir com o colega para não se envolver no conflito.", 
                pontuacao: { Determinacao: -1, Bravura: -1, Justica: 0, Bondade: -2, Paciencia: 0, Integridade: 0, Perseveranca: 0 } },
            { enunciado: "Responde ao comportamento rude da mesma forma para demonstrar que não aceita.", 
                pontuacao: { Determinacao: 0, Bravura: 1, Justica: 0, Bondade: -2, Paciencia: -2, Integridade: -1, Perseveranca: 0 } },
        ]
    },
    {
        pergunta: "Você vê um colega receber elogios por uma tarefa que, na verdade, foi feita por você. Qual é a sua atitude?",
        alternativas: [
            { enunciado: "A) Conversa com o colega de forma amigável para esclarecer a situação.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "B) Agradece o elogio sem corrigir o erro, mas sente-se incomodado.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "C) Ignora a situação, mas evita colaborar com o colega no futuro.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "D) Corrige o elogio em público, deixando claro que você foi o responsável.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Um colega pede ajuda para uma tarefa, mas você também está sobrecarregado. Como você responde?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Você vê um colega com dificuldades para realizar uma tarefa. O que você faz?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Você vê um colega com dificuldades para realizar uma tarefa. O que você faz?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Você vê um colega com dificuldades para realizar uma tarefa. O que você faz?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Você vê um colega com dificuldades para realizar uma tarefa. O que você faz?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
    {
        pergunta: "Você vê um colega com dificuldades para realizar uma tarefa. O que você faz?",
        alternativas: [
            { enunciado: "Oferece ajuda imediatamente.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Espera que ele peça ajuda.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Ignora e foca no seu trabalho.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
            { enunciado: "Comenta com outros colegas sobre isso.", 
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: 2, Integridade: 1, Perseveranca: 2 } },
        ]
    },
];