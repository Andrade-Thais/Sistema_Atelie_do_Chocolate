class MessageParser {
    constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    const knownOptions = [
      { keyword: "bolos", id: 1 },
      { keyword: "doces", id: 2 },
      { keyword: "salgados", id: 3 },
      { keyword: "mini lanches", id: 4 },
      { keyword: "buffet", id: 5 },
    ];

    const knownSubOptions = [
      { keywords: ["bolo personalizado", "bolo comum"], id: 1 },
      { keywords: ["brigadeiro", "beijinho", "brigadeiro de paçoca", "bicho de pé", "brigadeiro de nutella", "brigadeiro de ninho", "brigadeiro de churros", "cascata de chocolate"], id: 2 },
      { keywords: ["coxinha", "bolinha de queijo", "bolinho de carne", "esfiha de carne", "esfiha de frango", "esfiha de calabresa", "quibe", "crepe suico"], id: 3 },
      { keywords: ["mini hambúrguer", "mini hotdog"], id: 4 },
      { keywords: ["serviços de buffet"], id: 5 },
    ];

    const selectedOption = knownOptions.find((option) =>
      lowercase.includes(option.keyword)
    );

    if (selectedOption) {
      this.actionProvider[`handle${selectedOption.keyword.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`](selectedOption.id);
      return;
    }

    const selectedSuboption = knownSubOptions.find((suboption) =>
      suboption.keywords.some((keyword) => lowercase.includes(keyword))
    );

    if (selectedSuboption) {
      switch (selectedSuboption.id) {
        case 1:
          this.actionProvider.handleTiposBolos();
          break;
        case 2:
          this.actionProvider.handleTiposDoces();
          break;
        case 3:
          this.actionProvider.handleTiposSalgados();
          break;
        case 4:
          this.actionProvider.handleTiposMiniLanches();
          break;
        case 5:
          this.actionProvider.handleTiposBuffet();
          break;
        default:
          break;
      }
    }
  }
}

export { MessageParser };