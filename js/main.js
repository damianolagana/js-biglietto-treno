const prezzoKm = "0.21" 

let chilometri = Number(prompt("Quanti chilometri vuoi percorrere?")) 
let età = Number(prompt("Inserisci la tua età")) 

let prezzoBiglietto = prezzoKm * chilometri



if (chilometri == null || chilometri == ""){
    alert("Non hai inserito i chilometri");
} 
 

if( isNaN(età)){
    alert("L'età è errata. Non verranno applicate scontistiche")
} else {
    let scontoMinori = prezzoBiglietto * 0.2
    let scontoOver65 = prezzoBiglietto * 0.4

    if (età < 18 ){
        prezzoBiglietto -= scontoMinori;
        alert("Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + "€");
    } else if (età > 65){
        prezzoBiglietto -= scontoOver65;
        alert("Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + "€");

    } else {
        alert("Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + "€");
    }

}






