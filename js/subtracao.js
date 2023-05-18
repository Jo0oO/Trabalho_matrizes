var matriz = new Array();
var matriz1 = new Array();
var resultado = new Array();

matriz.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);
matriz.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);
matriz.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);

matriz1.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);
matriz1.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);
matriz1.push([parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100)), parseInt(Math.ceil(Math.random() * 100))]);

document.write('<div id=subtração>');

document.write("<table border=1>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write('<h2>-</h2>');

document.write('<br>');

document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write('<br>');

for (i = 0; i < matriz1.length; i++) {
    resultado.push([]);
    for (j = 0; j < matriz1[i].length; j++) {
        resultado[i][j] = (matriz1[i][j] - matriz[i][j]);
    }
}
document.write('<br>');

document.write('<h2>=</h2>');

document.write("<table border=1>");
for (i = 0; i < resultado.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < resultado[i].length; x++) {
        linha = linha + "<td>" + resultado[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write('</div>');

document.write('<br>');