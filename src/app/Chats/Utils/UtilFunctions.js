  
//Lida com a escolha de categoria de serviço (Bolo, Doce, etc.) feita pelo usuário, mostrando as opções disponíveis para cada uma delas.
export function HandleOpcao(opcaoDesejada, setUltimaOpcaoDesejada, opcoesDesejadas, setOpcoesDesejadas, setMostrarProximasOpcoes, conteudoPedido, setConteudoPedido) {
    setUltimaOpcaoDesejada(opcaoDesejada);
    setMostrarProximasOpcoes(true);
    setConteudoPedido([...conteudoPedido, opcaoDesejada]);
}
//Lida com a escolha dos serviços disponíveis, feita pelo usuário.
export function HandleOpcoes(event, conteudoPedido, setConteudoPedido, opcoesDesejadas, setOpcoesDesejadas, setMostrarProximasOpcoes) {
    event.preventDefault();
    const opcoesSelecionadas = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    setOpcoesDesejadas([...opcoesDesejadas, ...opcoesSelecionadas]);
    setConteudoPedido([...conteudoPedido, ...opcoesSelecionadas]);
    setMostrarProximasOpcoes(true);
    console.log(opcoesSelecionadas);
}
  
//Lida com a exibição dos serviços disponíveis, de acordo com a escolha do usuário.
export function ShowOpcoes(ultimaOpcaoDesejada, opcoesMostradas, setOpcoesMostradas) {
  const opcao = ultimaOpcaoDesejada;
  switch (opcao) {
    case "Bolos":
      setOpcoesMostradas(["Bolo Personalizado", "Bolo Comum"]);
      break;
    case "Doces":
      setOpcoesMostradas(["Brigadeiro", "Beijinho", "Cajuzinho", "Brigadeiro de Nutella", "Brigadeiro de Paçoca", "Bicho de Pé"]);
      break;
    case "Salgados":
      setOpcoesMostradas(["Coxinha", "Bolinho de Queijo", "Bolinho de Carne", "Esfiha de Calabresa", "Esfiha de Carne", "Esfiha de Frango", "Risole", "Quibe", "Crepe Suíço"])
      break;
    case "Mini Lanches":
      setOpcoesMostradas(["Enroladinho de Salsicha", "Mini Hambúrguer"])
      break;
    case "Serviços de Buffet":
      setOpcoesMostradas(["Pacote 1", "Pacote 2", "Pacote 3"]);
      break;
    default:
      break;
  }
}
