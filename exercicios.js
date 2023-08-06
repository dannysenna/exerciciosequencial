//Exercícios JavaScript-Sequencial

//Exercício 1

var a = 7;
var b = 40; 
var c = 20;
var x = a+(b/c);

console.log(x);

//Exercício 2

var nota1 = 5;
var nota2 = 7;
var nota3= 9;
var p1 = 2;
var p2 = 3;
var p3 = 5;

var mp =(nota1*p1+nota2*p2+nota3*p3)/(p1+p2+p3);

console.log(mp);

//Exercício 3

var ds = 30000;
var h = Math.floor (ds/3600);
var mr= ds%3600;
var m = Math.floor(mr/60);
var s = ds%60;

console.log(h+"horas"+ m + "minutos e "+ s +"segundos.");

//Exercício 4

var lado = 8;
var area = ((lado**2)*1.7)/4;

console.log (area);

//Exercício 5

var a = 5;
var b = 7;
var c = 10;
var x = ((a+b)**2)+c;

console.log (x);

//Exercício 6

var numero = 5;
var dobro = (numero-1)*2;

console.log (dobro);

//Exercício 7

var total = 1000;
var b = 200;
var n = 100;
var v = 700;
var pb = (b*100)/total;
var pn = (n*100)/total;
var pv = (v*100)/total;

console.log ("São " + total + " votos apurados, sendo: " + pb + " % de votos brancos, "+ pn + " % de votos nulos e "+ pv + " % de votos válidos.");

//Exercício 8

var d = 30;
var i = 45;
var cf = 100000;
var pd = (cf*d)/100;
var pi = (cf*i)/100;
var cc = cf + pd +pi;

console.log ("O custo ao consumidor do veículo con custo de fábrica de "+ cf+ " é de: "+ cc);

//Exercício 9

var a = 5;
var b = 15;
var c = 7;
var delta = ((b**2)-(4*a*c));
var x1 = (-b-delta)/(2*a);
var x2 = (-b+delta)/(2*a);

if (delta >= 0)
{
    console.log ("Os valores das raízes são: "+ x1 + " e " + x2);
}else
{
    console.log ("Delta Negativo.");
}

//Exercício 10

var d = 150;
var v = 65;
var t = d/v;
var rmin = Math.floor(t*60);

console.log ("O tempo médio gasto em minutos será de: " + rmin);



