let canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    line, circle;
    del = new Path2D();
    let r = 300 / 2;
    for(let d = 0;d < 60; ++d) {
        let angle = (d / 60) * (2 * Math.PI);
        let pX = Math.cos(angle) * r;
        let pY = -Math.sin(angle) * r;
        let qX = 0.9 * pX;
        let qY = 0.9 * pY;
        pY = - pY;
        qY= - qY;
        pX += r; pY += r;
        qX += r; qY += r;
        del.moveTo(pX,pY);
        del.lineTo(qX,qY);
        context.stroke(del);
    }

let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
seconds = 30;
minutes = 15;
hours = 20;

secondsAngle = Math.PI / 2 - (seconds * 60) * (2 * Math.PI);
minutesAngle = Math.PI / 2 - (minutes * 60) * (2 * Math.PI);
hoursAngle = Math.PI / 2 - ((hours % 12) / 12) * (2 * Math.PI);

line = new Path2D();

let pX = 0.9 * Math.cos(secondsAngle) * r;
let pY = 0.9 * -Math.sin(secondsAngle) * r;
pY = - pY;
pX += r; 
pY += r;
line.moveTo(150,150);
line.lineTo(pX,pY);
context.stroke(line);
circle = new Path2D();
circle.arc(150,150,150,0,2* Math.PI);

context.stroke(circle);

