class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, subopcoes) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  getBolosSuboptions = () => {
    return [
      { text: "Bolo Personalizado", id: 1 },
      { text: "Bolo Comum", id: 2 },
    ];
  };

  getDocesSuboptions = () => {
    return [
      { text: "Brigadeiro", id: 1 },
      { text: "Beijinho", id: 2 },
      { text: "Brigadeiro de Paçoca", id: 3 },
      { text: "Bicho de Pé", id: 4 },
      { text: "Brigadeiro de Nutella", id: 5 },
      { text: "Brigadeiro de Ninho", id: 6 },
      { text: "Brigadeiro de Churros", id: 7 },
      { text: "Cascata de Chocolate", id: 8 },
    ];
  };

  getSalgadosSuboptions = () => {
    return [
      { text: "Coxinha", id: 1 },
      { text: "Bolinha de Queijo", id: 2 },
      { text: "Bolinha de Carne", id: 3 },
      { text: "Esfiha de Carne", id: 4 },
      { text: "Esfiha de Frango", id: 5 },
      { text: "Esfiha de Calabresa", id: 6 },
      { text: "Quibe", id: 7 },
      { text: "Crepe Suíço", id: 8 },
    ];
  };

  getMiniLanchesSuboptions = () => {
    return [
      { text: "Mini Hambúrguer", id: 1 },
      { text: "Mini Hot Dog", id: 2 },
    ];
  };

  getBuffetSuboptions = () => {
    return [{ text: "Serviço 1", id: 1 }];
  };

  greet = () => {
    const message = this.createChatBotMessage(
      "Seja bem-vindo(a) ao chatbot Ateliê do Chocolate!"
    );
    this.addMessageToState(message);
  };

  handleBolos = () => {
    const message = this.createChatBotMessage(
      "Você escolheu Bolos. Confeitamos bolos personalizados com personagens ou flores com papelaria de luxo. Confira as opções abaixo!",
      {
        widget: "suboptionsBolos",
        options: this.getBolosSuboptions(),
      }
    );
    this.addMessageToState(message);
  };

  handleDoces = () => {
    const message = this.createChatBotMessage(
      "Você escolheu Doces. São doces de 10g que compõem de forma deliciosa a hora do Parabéns!! Temos as opções abaixo, clique e escolha:",
      {
        widget: "suboptionsDoces",
        options: this.getDocesSuboptions(),
      }
    );
    this.addMessageToState(message);
  };

  handleSalgados = () => {
    const message = this.createChatBotMessage(
      "Feitos com os melhores ingredientes, nossos salgados são a escolha ideal para uma explosão de sabores na sua festa. Clique agora e mergulhe nessa deliciosa seleção!",
      {
        widget: "suboptionsSalgados",
        options: this.getSalgadosSuboptions(),
      }
    );
    this.addMessageToState(message);
  };

  handleMiniLanches = () => {
    const message = this.createChatBotMessage(
      " Feitos com os melhores ingredientes, nossos mini lanches darão uma turbinada na sua festa. Clique e escolha a melhor opção para sua comemoração.",
      {
        widget: "suboptionsMiniLanches",
        options: this.getMiniLanchesSuboptions(),
      }
    );
    this.addMessageToState(message);
  };

  handleBuffet = () => {
    const message = this.createChatBotMessage(
      "Nosso Buffet completo oferece doces, salgados, bolo, mini lanches e muito mais! Para adquirir esse pacote de serviços entre em contato!",
      {
        widget: "suboptions",
        options: this.getBuffetSuboptions(),
      }
    );
    this.addMessageToState(message);
  };

  handleTiposBolos = (subopcoes) => {
    const message = this.createChatBotMessage(
      `Delicioso! Agora, determine as quantidades necessárias para cada item escolhido:`,
      {
        widget: "quantidades",
        options: subopcoes,
      }
    );
    this.addMessageToState(message);
  };

  handleEnviarPedido = (pedido) => {
    const message = this.createChatBotMessage(
      `Itens adicionados! Você deseja adicionar mais itens ao seu pedido?`,
      {
        widget: "confirmarPedido",
        options: pedido,
      }
    );
    this.addMessageToState(message);
  };

  handleTiposDoces = () => {
    const selectedDocesTexts = Array.isArray(this.selectedSuboptions)
      ? this.selectedSuboptions.map((option) => option.text)
      : [];

    const message = this.createChatBotMessage(
      `Delicioso! Você escolheu os seguintes doces: ${selectedDocesTexts.join(
        ", "
      )}. Agora escolha a quantidade necessária para os docinhos escolhidos.`,
      {
        widget: "quantidade",
      }
    );

    this.addMessageToState(message);
  };

  handleTiposSalgados = () => {
    if (this.getSalgadosSuboptions) {
      this.selectedSuboptions.push(...this.getSalgadosSuboptions());
    }
    const selectedSalgadosTexts = Array.isArray(this.selectedSuboptions)
      ? this.selectedSuboptions.map((option) => option.text)
      : [];

    const message = this.createChatBotMessage(
      `Delicioso! Você escolheu os seguintes salgados: ${selectedSalgadosTexts.join(
        ", "
      )}. Agora escolha a quantidade necessária para os salgados escolhidos.`,
      {
        widget: "quantidade",
      }
    );

    this.addMessageToState(message);
  };

  handleTiposMiniLanches = () => {
    if (this.getMiniLanchesSuboptions) {
      this.selectedSuboptions.push(...this.getMiniLanchesSuboptions());
    }
    const selectedMiniLanchesTexts = Array.isArray(this.selectedSuboptions)
      ? this.selectedSuboptions.map((option) => option.text)
      : [];

    const message = this.createChatBotMessage(
      `Delicioso! Você escolheu os seguintes lanchinhos: ${selectedMiniLanchesTexts.join(
        ", "
      )}. Agora escolha a quantidade necessária para os lanches escolhidos.`,
      {
        widget: "quantidade",
      }
    );

    this.addMessageToState(message);
  };

  handleTiposBuffet = () => {
    if (this.getBuffetSuboptions) {
      this.selectedSuboptions.push(...this.getBuffetSuboptions());
    }
    const selectedBuffetTexts = Array.isArray(this.selectedSuboptions)
      ? this.selectedSuboptions.map((option) => option.text)
      : [];

    const message = this.createChatBotMessage(
      `Delicioso! Você escolheu o pacote de buffet: ${selectedBuffetTexts.join(
        ", "
      )}. Agora escolha a quantidade necessária para os itens inclusos.`,
      {
        widget: "quantidade",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export { ActionProvider };
