/**
 * Created by slema on 29/5/17.
 */
let a = 1;
let html="<h1>hola</h1>"+
        "<p>Hola amigos</p>"+
        "<img src='algunUrl' alt=''>" +
        "<a href='google'>Ir a google</a>";
let nombreUsuario = "Santiago Lema";
let htmlConTemplateStrings=`
<h1></h1>
<p>${nombreUsuario}</p>
<li>fjdsio</li><li>fjdskl</li><li>fjdksl</li><li>fjdskl</li><li>fsdjkl</li>
`;
console.log(htmlConTemplateStrings);