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
                pontuacao: { Determinacao: 2, Bravura: 1, Justica: 2, Bondade: 1, Paciencia: -2, Integridade: 1, Perseveranca: 2 } },
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