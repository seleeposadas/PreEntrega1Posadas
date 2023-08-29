//Batalla pokemon

//variables a usar
//variables que va a usar el usuario
let sNombre;
let nHacer;
//variables que va a usar el pokemon del usuario
let nPokemon;
let sPokemon;
let nVida = 100;
let sPoderPokemon1;
let sPoderPokemon2;
//Ver si usar esto
let nPoderPokemon1 = 1;
let nPoderPokemon2 = 2;
//variables que va a usar el pokemon rival
let nPokemonRival;
let sPokemonRival;
let sPoderPokemonRival1;
let sPoderPokemonRival2;
let nVidaRival = 100;
let nAtaqueRival;
//variables de daño de ataque
let nDanioPoder1 = 50;
let nDanioPoder2 = 40;
//otras variables
let bDesconectar = false;
//Funciones
//BATALLA
function ataque(pokemon, poder, vida, pokemonRival, sPoder1, sPoder2){
    if (poder == 1){
        alert(pokemon + " usó " + sPoder1);
        vida = Math.trunc(vida * (1 - (nDanioPoder1/100)));
        alert(pokemonRival + " tiene " + vida + " de vida ahora!");
    }else if (poder == 2){
        alert(pokemon + " usó " + sPoder2);
        vida = Math.trunc(vida * (1 - (nDanioPoder2/100)));
        alert(pokemon + " debilito la defensa de " + pokemonRival);
        alert(pokemonRival + " tiene " + vida + " de vida ahora!");
    } else {
        alert("Por favor, seleccione una opcion válida");
        //break;
    }
    return vida;
}

//Inicio

for(let i = 0; i<=3; i++){
    sNombre = prompt("Ingrese su nombre");  

    if ((sNombre == undefined || sNombre == "") && i == 3 ){
        alert("No ingresaste un nombre válido! Se cerrará el juego");
        break;
    } else if(sNombre == undefined || sNombre == ""){
        alert("Por favor, ingrese un nombre");
        continue;
    } else {
        alert("Bienvenido/a a esta pequeña demo de pokemón!");
        alert("¡Hola a todos! ¡Bienvenidos al mundo de POKÉMON! ¡Me llamo OAK! ¡Pero la gente me llama el PROFESOR POKÉMON! \n¡Este mundo está habitado por unas criaturas llamadas POKÉMON! Para algunos, los POKÉMON son mascotas. Pero otros los usan para pelear. \nEn cuanto a mí... Estudio a los POKÉMON como profesión.");
        alert("¡Bien! ¡Tu nombre es !" + sNombre + " \n Mi nieto y tu han sido rivales desde niños, se llama Bruce. \n¡Tu propia leyenda POKÉMON está a punto de comenzar! ¡Te espera un mundo de sueños y aventuras con los POKÉMON! ¡Adelante!");
        alert(sNombre + ", primero, para continuar tu aventura, elije uno de estos tres Pokemones. \n Puedes elegir a Bulbasaur: Es un Pokemón tipo planta/veneno. Los Bulbasaur son extraordinariamente fuertes y muy difíciles de capturar en libertad. \n Puedes elegir un Charmander: Es un Pokemón tipo fuego. Una flama arde en la punta de su cola desde su nacimiento. Se dice que el Charmander muere si su flama llega a apagarse. \n Squirtle: Es un Pokemón de tipo agua. Squirtle es una de las especies más difíciles de encontrar.Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.");
        for(let j = 0; j<=3; j++){
            nPokemon = Number(prompt( sNombre + "! \n Por favor, seleccione un Pokemón . \n1- Bulbasaur. \n2-Charmander. \n3-Squirtle"));
            if(j == 3 && (isNaN(nPokemon) || nPokemon <= 0 || nPokemon >= 4)){
                bDesconectar = true;
                alert("No elegiste una opción válida! Se cerrará el juego");
                break;
            } else if (isNaN(nPokemon) || nPokemon <= 0 || nPokemon >= 4){
                alert(sNombre + ", por favor elije una opción válida!");
                continue;
            } else {
                break;
            }
        }
        if (bDesconectar === true) {
            alert("Se finalizó el juego");
            break;
        } else {
            switch (nPokemon) {
                case 1:
                    sPokemon = 'Bulbasaur';
                    sPoderPokemon1 = 'Placaje';
                    sPoderPokemon2 = 'Gruñido';
                    //rival
                    nPokemonRival = 1;
                    sPokemonRival = 'Charmander';
                    sPoderPokemonRival1 = 'Arañazo';
                    sPoderPokemonRival2 = 'Gruñido';
                    break;
                case 2:
                    sPokemon = 'Charmander';
                    sPoderPokemon1 = 'Arañazo';
                    sPoderPokemon2 = 'Gruñido';
                    //rival
                    nPokemonRival = 2;
                    sPokemonRival = 'Squirtle';
                    sPoderPokemonRival1 = 'Placaje';
                    sPoderPokemonRival2 = 'Látigo';
                    break;
                case 3:
                    sPokemon = 'Squirtle';
                    sPoderPokemon1 = 'Placaje';
                    sPoderPokemon2 = 'Látigo';
                    //rival
                    nPokemonRival = 3;
                    sPokemonRival = 'Bulbasaur';
                    sPoderPokemonRival1 = 'Placaje';
                    sPoderPokemonRival2 = 'Gruñido';
                    break;
            }
            alert(sNombre + " Haz elegido a " + sPokemon);
            alert("Excelente elección! Confio en que sabrás entrenarlo y cuidarlo muy bien!");
            alert("Bruce: \n Ya que mi abuelo te dio un Pokemón. \n Vamos a ver si sabes manejarlo! \n Te reto a una batalla! \n Pokemón yo te elijo!");
            alert(sPokemonRival + " tiene " + nVidaRival + " de vida y es nivel 5.");

            for(let k = 0; k <= 3; k++){
                nHacer = Number(prompt("Que deberia hacer " + sPokemon + "? \n1-Luchar. \n2-Huir."));
                if(k == 3 && (nHacer == NaN || nHacer <= 0 || nHacer > 2)){
                    bDesconectar === true;
                    alert("No elegiste una opción válida! Se cerrará el juego");
                    break;
                } else if (nHacer == NaN || nHacer <= 0 || nHacer > 2){
                    alert(sNombre + ", por favor elije una opción válida!");
                    continue;
                } else {
                    break;
                }
            }

            if (bDesconectar === true){
                alert("Se finalizó el juego");
                break;
            } else{
                alert(sPokemon + " Tiene " + nVida + " de vida y es nivel 5.");
                if (nHacer == 1){
                    do {
                         nHacer = Number(prompt("Elige con que poder atacar a " + sPokemonRival + " \n1- " + sPoderPokemon1 + "\n2- " + sPoderPokemon2));
                         if (nVidaRival == 0){
                            alert(sPokemonRival + " tiene " + nVidaRival + " de vida!");
                            break;
                         } else{
                            nVidaRival = ataque(sPokemon, nHacer, nVidaRival, sPokemonRival, sPoderPokemon1, sPoderPokemon2);
                         }
                         if (nVida == 0){
                            alert(sPokemon + " tiene " + nVida + " de vida!");
                            break;
                         } else{
                            nAtaqueRival = Math.floor((Math.random() * 2) + 1);
                            nVida = ataque(sPokemonRival, nAtaqueRival, nVida, sPokemon, sPoderPokemonRival1, sPoderPokemonRival2);
                         }
                       } while ((nVida > 0) && (nVidaRival > 0));
                } else {
                        alert("Soldado que huye, sirve para otra batalla. \nNo tienes nada que demostrar, nos vemos!");
                        bDesconectar = true
                }

                if(bDesconectar === true){
                    alert("Huiste como un campeón/na");
                    alert("Gracias por llegar hasta acá! Haz finalizado el juego");
                    break;
                } else{
                    if (nVida <= 0){
                        alert("Bruce y " + sPokemonRival + " te han derrotado. Parece que te hace falta entrenamiento! Te recomiendo ir a un gimnasio Pokemón y alli entrenar!");
                        alert("Haz finalizado el juego");
                        break;
                    } else if (nVidaRival <= 0){
                        alert("Felicitaciones, " + sNombre + "! Vos y " + sPokemon + " han salido victoriosos! \n Bruce ya puede dejar de hacerte bullying!");
                        alert("Haz completado el juego!");
                        break;
                    }
                }
            }
        }
    }
}


