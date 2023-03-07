const R1 = 0.7; 
const R2 = 0.4;
const R3 = 0.2;
const P_D = 100;
const INS = 0.18;
const VAT = 0.3;

var cost_km = 0;
var cost_days = 0;
var nb_km = 0;
var nb_days = 0;

if (nb_km <= 100) {
    cost_km = nb_km *R1 + nb_days * INS;
    console.log(cost_km *= 1+ VAT);
} else{
    if (nb_km >= 101 || nb_km <= 1000) {
        cost_km = (100 * R1) + (nb_km - 100) * R2 + (nb_days * INS);
        console.log(cost_km *= 1 + VAT);
    }else{
        cost_km = (100 * R1) + (900 * R2) + (nb_km - 1000) * R2 + (nb_days * INS);
        console.log(cost_km *= 1 + VAT);
    }
}

cost_days = nb_days * P_D + nb_days * INS;
cost_days *= 1 + VAT;

if (cost_km > cost_days) {
    console.log("cost by kilometers is the best formula");
} else {
    console.log("cost by days is the best formula");
}
