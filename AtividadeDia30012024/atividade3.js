// *******ATIVIDADE DO DIA 30-01-2024*******//
// Para fins de realização de prática esta atividade estará abordando [arrays] e {objeto}, sendo
// assim utilize os recursos abordados em sala de aula para desenvolvimento da atividade:

// 1. Utilizando arrays e objetos crie uma estrutura pensando em uma biblioteca, que realiza
// empréstimos de livros para alunos devidamente matriculado em uma turma ou curso.


let Alunos = {
    nomeAluno1: "Larissa",
    nomeAluno2: "Bianca",
    nomeAluno3: "Julho",

    biblioteca: [
        ["nomeLivro1", "Autor1", "publicaao1", "editora1"],  
        ["nomeLivro2", "Autor2", "publicaao2", "editora2"],
        ["nomeLivro2", "Autor2", "publicaao2", "editora2"]]
}

// console.log(Alunos.nomeAluno1, "emprestou o livro: ", Alunos.biblioteca[0][0]); // apenas o nome do livro
// console.log(Alunos.nomeAluno1, "emprestou o livro: ", Alunos.biblioteca[0]); // todos os dados do livro



// 2. Utilizando arrays e objetos crie uma estrutura pensando em uma escola, que possui
// alunos, onde há ministração de aulas, realização de cursos, possui alunos e professores.


let escola =  {
    turmas: ["terceiroA", "terceiroB", "segundoA", "sengundoB"],
    professor: ["Carla", "Eduardo", "Cecilia"],
    materia: ["portugês", "matematica", "historia"],
    alunos: ["Ana", "Pedro", "Julho", "Vera"],         
}

console.log(escola)
console.log("Professor(a)", escola.professor[2], "ministra aulas de", escola.materia[2])
console.log ("Aluno(a)", escola.alunos[3], "esta matriculad(o)a na turma", escola.turmas[2])

