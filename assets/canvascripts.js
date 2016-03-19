$(document).ready(function(){



if ($.browser.msie) {
}else{

var c = document.querySelector("#canvas"),
		ctx = c.getContext("2d");



 var canvas = oCanvas.create({
	canvas: "#canvas",
	fps: 60
});

var button = canvas.display.ellipse({
	x: 210,
	y: 390,
	radius: 15,

		fill: "linear-gradient(315deg, #333, #666)",
	shadow: "0 0 20px rgba(0,0,0, 0.8)"
});

canvas.addChild(button);

var increase = true;
 button.stroke= "20px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
button.bind("click tap", function () {
	if (increase) {
	  increase3 = true;
		increase = false;
         arc.animate({
	radius: 32,
   },100);
        arc2.animate({	x: 210,
	y: 390,
	radius: 32,
	start: 110,
	end: -170,
	stroke: "5px linear-gradient(315deg, #EC49EA, #013)"},100);
       this.fill= "linear-gradient(315deg, #666, #111)";
       this.stroke= "20px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
       this.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();

		this.stop().animate({
		 	x: 210,
	y: 390,
				radius_x: 15,
	radius_y: 15,
			rotation: 0
		},100, "easeOutCirc", function(){ $('.features').animate({'opacity' : '0'},{duration:100});$('#feature1').animate({'opacity' : '1'},{duration:1000});});
	} else {
        increase3 = false;
		increase = true;
         arc2.animate({	x: 210,
	y: 390,
	radius: 32,
	start: 110,
	end: 0,
	stroke: "5px linear-gradient(315deg, #079, #013)"},100);
        this.fill= "linear-gradient(315deg, #333, #666)";
         this.stroke= "2px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
        this.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();
$('.features').animate({'opacity' : '0'},{duration:100});
       $('#feature1').animate({'opacity' : '0'});

		this.animate({
		  	x: 210,
	y: 390,
				radius_x: 15,
	radius_y: 15,
			rotation: 10
		},100, "easeOutCirc");
	}
});

//arc


var arc = canvas.display.arc({
	x: 210,
	y: 390,
	radius: 123,
	start: 110,
	end: -10,
	stroke: "15px linear-gradient(315deg, #079, #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc);
var arc2 = canvas.display.arc({
	x: 210,
	y: 390,
	radius: 32,
	start: 110,
	end: 0,
	stroke: "5px linear-gradient(315deg, #079, #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc2);
  canvas.setLoop(function () {
	arc.rotation++;
    	arc2.rotation--;
        	arc3.rotation--;
    	arc4.rotation++;
        	arc6.rotation--;
    	arc5.rotation++;

});
 canvas.timeline.start();

 var c2 = document.querySelector("#canvas2"),
		ctx = c2.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle   = '#00f';
    ctx.lineWidth   = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.moveTo(150,0);
    ctx.lineTo(130,25);
    ctx.lineTo(0,25);
    ctx.stroke();
     ctx.closePath();

     ctx.fillStyle    = 'rgba(255,255,255,0.6)';

ctx.font         = 'bold 15px Calibri';



$('#canvas2').bind("click tap", function () {
	if (increase) {
	   increase3 = true;
		increase = false;

       button.fill= "linear-gradient(315deg, #666, #111)";
       button.stroke= "2px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
       button.shadow= "0 0 20px rgba(0,0,0, 0.8)";
        arc.animate({
          start: 150,
	end: 360,
	radius: 102,
   },500);
     arc2.animate({	x: 210,
	y: 390,
	radius: 32,
	start: 0,
	end: 260,
	stroke: "5px linear-gradient(315deg, #EC49EA, #013)"},100);
canvas.redraw();

		button.stop().animate({
		     	x: 210,
	y: 390,
				radius_x: 15,
	radius_y: 15,
			rotation: 0
		},100, "easeOutCirc", function(){$('.features').animate({'opacity' : '0'},{duration:100}); $('#feature1').animate({'opacity' : '1'},{duration:1000});});
	} else {
        increase3 = false;
		increase = true;
        arc.animate({
          start: 0,
	end: 230,
	radius: 52,
   },100);
          arc2.animate({	x: 210,
	y: 390,
	radius: 32,
	start: 110,
	end: 0,
	stroke: "5px linear-gradient(315deg, #079, #013)"},100);

        button.fill= "linear-gradient(315deg, #333, #666)";
         button.stroke= "20px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
        button.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();
$('.features').animate({'opacity' : '0'},{duration:100});
       $('#feature1').animate({'opacity' : '0'});
		button.animate({
		  	x: 210,
	y: 390,
				radius_x: 15,
	radius_y: 15,
			rotation: 10
		},100, "easeOutCirc");
	}
});



var image = canvas.display.image({
	x: 210,
	y: 390,
	origin: { x: "center", y: "center" },
	image: "images/ship6.png",
	tile: false,

	width: 20,
	height: 20
});

canvas.addChild(image);





//canvas button 2
var button2 = canvas.display.ellipse({
	x: 410,
	y: 120,
	radius: 15,
		fill: "linear-gradient(315deg, #333, #666)",
	shadow: "0 0 20px rgba(0,0,0, 0.8)"
});

canvas.addChild(button2);

var increase2 = true;






var arc3 = canvas.display.arc({
	x: 410,
	y: 120,
	radius: 23,
	start: 10,
	end: -70,
	stroke: "15px linear-gradient(315deg, #079, #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc3);
var arc4 = canvas.display.arc({
	x: 410,
	y: 120,
	radius: 35,
	start: 210,
	end: 60,
	stroke: "5px linear-gradient(315deg, rgb(236, 73, 234), #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc4);

 canvas.timeline.start();

 var c2 = document.querySelector("#canvas3"),
		ctx = c2.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle   = '#00f';
    ctx.lineWidth   = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.moveTo(150,50);
    ctx.lineTo(130,25);
    ctx.lineTo(0,25);
    ctx.stroke();
     ctx.closePath();

     ctx.fillStyle    = 'rgba(255,255,255,0.6)';

ctx.font         = 'bold 15px Calibri';



$('#canvas3').bind("click tap", function () {
	if (increase2) {
		increase2 = false;
         arc3.animate({
   	x: 410,
	y: 120,
	radius: 3,
	start: 10,
	end: -70,
	stroke: "15px linear-gradient(315deg, #079, #013)"},300);
       $('#window').animate({'left' : '-1850px'},{duration: 2000, easing: 'easeOutCirc'});
      $(document).find('.wbottle').animate({'opacity' : '0'});
	} else {
		increase2 = true;
        arc3.animate({
   	x: 410,
	y: 120,
	radius: 23,
	start: 10,
	end: -70,
	stroke: "15px linear-gradient(315deg, #079, #013)"},300);
       $('#window').animate({'left' : '0px'},{duration: 2000, easing: 'easeOutCirc'});
        $(document).find('.wbottle').animate({'opacity' : '1'});
	}
});



var image2 = canvas.display.image({
	x: 410,
	y: 120,
	origin: { x: "center", y: "center" },
	image: "images/ship3.png",
	tile: false,

	width: 20,
	height: 20
});

canvas.addChild(image2);



//options canvas element

var button3 = canvas.display.ellipse({
	x: 360,
	y: 700,
	radius: 1,

		fill: "linear-gradient(315deg, #333, #666)",
	shadow: "0 0 20px rgba(0,0,0, 0.8)"
});

canvas.addChild(button3);

var increase3 = true;
 button3.stroke= "2px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
button3.bind("click tap", function () {
	if (increase3) {
	  increase = true;
		increase3 = false;
        arc5.animate({	x: 360,
	y: 700,
	radius: 15,
	start: 110,
	end: -170,
	stroke: "5px linear-gradient(315deg, #EC49EA, #013)"},100);
       this.fill= "linear-gradient(315deg, #666, #111)";
       this.stroke= "2px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
       this.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();

		this.stop().animate({
		 	x: 360,
	y: 700,
				radius_x: 15,
	radius_y: 15,
			rotation: 0
		},100, "easeOutCirc", function(){ $('.features').animate({'opacity' : '0'},{duration:100}); $('#options2').animate({'opacity' : '1'},{duration:1000});});
	} else {
        increase = false;
		increase3 = true;
         arc5.animate({	x: 360,
	y: 700,
	radius: 15,
	start: 110,
	end: 0,
	stroke: "2px linear-gradient(315deg, #079, #013)"},100);
        this.fill= "linear-gradient(315deg, #333, #666)";
         this.stroke= "20px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
        this.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();
$('.features').animate({'opacity' : '0'},{duration:100});
       $('#options2').animate({'opacity' : '0'});

		this.animate({
		  	x: 360,
	y: 700,
				radius_x: 15,
	radius_y: 15,
			rotation: 10
		},100, "easeOutCirc");
	}
});

//arc


var arc6 = canvas.display.arc({
	x: 360,
	y: 700,
	radius: 3,
	start: 110,
	end: -70,
	stroke: "15px linear-gradient(315deg, #079, #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc6);
var arc5 = canvas.display.arc({
	x: 360,
	y: 700,
	radius: 15,
	start: 110,
	end: 0,
	stroke: "5px linear-gradient(315deg, #079, #013)",
    shadow: "0 0 10px rgba(0,0,0, 1)"
});

canvas.addChild(arc5);

 canvas.timeline.start();

 var c4 = document.querySelector("#canvas4"),
		ctx = c4.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle   = '#00f';
    ctx.lineWidth   = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.moveTo(150,0);
    ctx.lineTo(130,25);
    ctx.lineTo(0,25);
    ctx.stroke();
     ctx.closePath();

     ctx.fillStyle    = 'rgba(255,255,255,0.6)';

ctx.font         = 'bold 15px Calibri';


$('#canvas4').bind("click tap", function () {
	if (increase3) {
	   increase = true;
		increase3 = false;

       button3.fill= "linear-gradient(315deg, #666, #111)";
       button3.stroke= "2px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
       button3.shadow= "0 0 20px rgba(0,0,0, 0.8)";
     arc5.animate({	x: 360,
	y: 700,
	radius: 35,
	start: 110,
	end: -170,
	stroke: "5px linear-gradient(315deg, #EC49EA, #013)"},100);
canvas.redraw();

		button3.stop().animate({
		     	x: 360,
	y: 700,
				radius_x: 15,
	radius_y: 15,
			rotation: 0
		},100, "easeOutCirc", function(){
        $('.features').animate({'opacity' : '0'},{duration:100});
        $('#options2').animate({'opacity' : '1'},{duration:1000});});
	} else {
        increase = false;
		increase3 = true;
          arc5.animate({		x: 360,
	y: 700,
	radius: 15,
	start: 110,
	end: 0,
	stroke: "5px linear-gradient(315deg, #079, #013)"},100);

        button3.fill= "linear-gradient(315deg, #333, #666)";
         button3.stroke= "20px linear-gradient(315deg, rgba(236, 73, 234,1), rgba(153, 75, 239,1))";
        button3.shadow= "0 0 20px rgba(0,0,0, 0.8)";
canvas.redraw();
$('.features').animate({'opacity' : '0'},{duration:100});
       $('#options2').animate({'opacity' : '0'});
		button3.animate({
		  	x: 360,
	y: 700,
				radius_x: 15,
	radius_y: 15,
			rotation: 10
		},100, "easeOutCirc");
	}
});



var image3 = canvas.display.image({
	x: 360,
	y: 700,
	origin: { x: "center", y: "center" },
	image: "images/ship1.png",
	tile: false,

	width: 20,
	height: 20
});

canvas.addChild(image3);







 }
});
