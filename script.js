const projetos = [
  {
    nome: "Landing Page",
    descricao: "Página de apresentação pessoal responsiva",
    link: "#"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples usando JavaScript para organização de tarefas",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

container.innerHTML = "";

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);
});
