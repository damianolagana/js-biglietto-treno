const prezzoKm = "0.21" 

let chilometri = Number(prompt("Quanti chilometri vuoi percorrere?")) 
let prezzoBiglietto = prezzoKm * chilometri



if (chilometri == null || chilometri == ""){
    alert("Non hai inserito i chilometri");
} 
 



let età = Number(prompt("Quanti anni hai?")) 

if (età < 18 ){
    prezzoBiglietto = (prezzoKm * chilometri) * 0.2;
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");
} else if (età > 65){
    prezzoBiglietto = (prezzoKm * chilometri) * 0.4;
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");

} else {
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");
}




