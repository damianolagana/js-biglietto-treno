const prezzoKm = "0.21" 

let chilometri = Number(prompt("Quanti chilometri vuoi percorrere?")) 
let prezzoBiglietto = prezzoKm * chilometri



if (chilometri == null || chilometri == ""){
    alert("Non hai inserito i chilometri");
} 
 



let età = Number(prompt("Quanti anni hai?")) 
let scontoMinori = prezzoBiglietto * 0.2
let scontoOver65 = prezzoBiglietto * 0.4

if (età < 18 ){
    prezzoBiglietto = prezzoBiglietto - scontoMinori;
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");
} else if (età > 65){
    prezzoBiglietto = prezzoBiglietto - scontoOver65;
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");

} else {
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€");
}




