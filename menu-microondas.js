function controleTempo(tempoPadrao, tempoDeterminado) {
  if (tempoDeterminado > tempoPadrao * 3) {
    return "KABUMM 💥";
  } else if (tempoDeterminado < tempoPadrao) {
    return "O tempo é insuficiente 🧊";
  } else if (tempoDeterminado > tempoPadrao * 2) {
    return "A sua comida queimou 😥";
  } else {
    return null;
  }
}

function menuMicroondas(opcao, tempo) {
  console.log(" ------  //// ------");
  let tempoPadrao = null;
  switch (opcao) {
    case 1:
      console.log("Pipoca 🍿");
      tempoPadrao = 10;
      break;
    case 2:
      console.log("Macarrão 🍝");
      tempoPadrao = 8;
      break;
    case 3:
      console.log("Carne 🍖");
      tempoPadrao = 15;
      break;
    case 4:
      console.log("Feijão 🍛");
      tempoPadrao = 12;
      break;
    case 5:
      console.log("Brigadeiro 🍫");
      tempoPadrao = 8;
      break;
  }

  let tempoDeterminado = tempoPadrao;

  if (tempo) {
    tempoDeterminado = tempo;
  }
  if (!tempoPadrao) {
    return console.log("Prato inexistente!❌");
  }
  let mensagem = controleTempo(tempoPadrao, tempoDeterminado);

  if (mensagem) {
    console.log(mensagem);
  }
  console.log("Prato pronto, bom apetite!!! 😋");
}

menuMicroondas(6, 10);  //Prato Inexistente
menuMicroondas(2, 10);  //Prato Macarrão com tempo menor que o dobro.
menuMicroondas(4, 25);  //Prato Feijão maior que o dobro do tempo (Queimou).
menuMicroondas(1, 8);   //Prato Pipoca com tempo menor que o padrão.
menuMicroondas(5, 30);  //Prato Brigadeiro com o tempo 3x maior que o padrao.
menuMicroondas(3);      //Prato Carne com o tempo padrão.
