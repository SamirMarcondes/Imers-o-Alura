function search() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento selecionado no console
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado e constrói o HTML dos resultados
    for (let dado of dados) {
      // Cria um novo elemento de resultado
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href=${dado.link} target="_blank">More informations.</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
  }

//console.log(dados);




