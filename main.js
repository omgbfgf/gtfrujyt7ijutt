
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(150, 143, 430 ,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(270, 200, 40 ,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(350, 200, 40 ,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(430, 200, 40 ,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(310, 230, 40 ,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(390, 230, 40 ,0, 2*Math.PI);
ctx.stroke();