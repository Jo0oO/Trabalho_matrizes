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

document.write('<h2>x</h2>');

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
    resultado[i] = [];
    for (j = 0; j < matriz1.length; j++) {
      resultado[i][j] = 0;
      for (k = 0; k < matriz1.length; k++) {
        resultado[i][j] += matriz[i][k] * matriz1[k][j];
      }
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