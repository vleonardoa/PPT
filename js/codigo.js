function ramdon(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function eleccion(elec) {
      let Ms = "";
      if (elec == 1) {
        Ms = "Piedra";
      } else if (elec == 2) {
        Ms = "Papel";
      } else if (elec == 3) {
        Ms = "Tijera";
      } else {
        alert("!SER MAMON¡");
      }
      return Ms;
    }

  let ganadas = 0;
  let perdidas = 0;

  while (ganadas < 3 && perdidas < 3) {

    let pc = ramdon(1, 3);
    let usuario = prompt("1. Piedra, 2. Papel, 3. Tijera");

    alert("Tu has elegido " + eleccion(usuario));
    alert("Pc ha elegido " + eleccion(pc));

    //Comparación
    if (usuario == pc) {
      alert("Empate");
    } else if (usuario == 1 && pc == 3) {
      alert("Ganaste");
      ganadas = ganadas + 1;
    } else if (usuario == 2 && pc == 1) {
      alert("Ganaste");
      ganadas = ganadas + 1;
    } else if (usuario == 3 && pc == 2) {
      alert("Ganaste");
      ganadas = ganadas + 1;
    } else {
      alert("Perdiste");
      perdidas = perdidas + 1;
    }
  }
  alert("Ganaste :  " + ganadas + "   Perdiste :  " + perdidas)