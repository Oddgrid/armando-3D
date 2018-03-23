
/*
*dibuja la cuadricula y capas canvas
*@autor <klaveruno@gmail.com>
*/



	function cuadricula(sizeCuadricula,w,h,colorgrid,callback) {


     callback(w,h);
	 


	}
////fin cudricula




//funcion que renderisa	
window.onload=function() {
//crea el canvas 
	function creaCanva(w,h,id,regi) {
		var canv = document.createElement("canvas");
		    canv.setAttribute("width",w)
		    canv.setAttribute("height",h)
		    canv.setAttribute("style","border:1px solid " +regi)
		    
		    canv.setAttribute("id",id)
		    canv.innerHTML;

		   document.body.appendChild(canv);  
	}




var w=window.innerWidth-22;
var h=window.innerHeight-22;
console.log(w+","+h)

	var sizeCuadricula=10;
	var colorgrid="#d3d3d3";
	
//captura las dimenciones de las ventanas cuando cambian de tamaño
window.addEventListener("resize", function(){

	w=window.innerWidth-22;
	h=window.innerHeight-22;

	
     

	 cuadricula(sizeCuadricula,w,h,colorgrid,function (w,h) {
	 	var canv = document.getElementById("canvasGrid");
var ctx = canv.getContext("2d");

     canv.setAttribute("width",w)
	 canv.setAttribute("height",h)
	 	for (var x=0; x<=w; x=x+sizeCuadricula){
  ctx.moveTo(x,0);
  ctx.lineTo(x,h);




}

  for (var y=0; y<=h; y=y+sizeCuadricula){
  ctx.moveTo(0,y);
  ctx.lineTo(w,y);
  
}


  ctx.strokeStyle = colorgrid;
ctx.stroke();
	 });


	 cuadricula(sizeCuadricula,w,h,colorgrid,function (w,h) {

	var canvas1 = document.getElementById("myCanvas");
var ctx = canvas1.getContext("2d");

canvas1.setAttribute("width",w)
	 canvas1.setAttribute("height",h)
ctx.fillStyle = "#FF0000";
ctx.fillRect(100,100,150,75);
	
})
	     //location.reload();
});
 

////////////////////fin evento	  
 
 creaCanva(w,h,"canvasGrid",colorgrid);
 creaCanva(w,h,"myCanvas",colorgrid);
	
cuadricula(sizeCuadricula,w,h,colorgrid,function (w,h) {

	var canv = document.getElementById("canvasGrid");
var ctx = canv.getContext("2d");

canv.setAttribute("width",w)
	 canv.setAttribute("height",h)
	 	for (var x=0; x<=w; x=x+sizeCuadricula){
  ctx.moveTo(x,0);
  ctx.lineTo(x,h);




}

  for (var y=0; y<=h; y=y+sizeCuadricula){
  ctx.moveTo(0,y);
  ctx.lineTo(w,y);
  
}


  ctx.strokeStyle = colorgrid;
ctx.stroke();
	 });
cuadricula(sizeCuadricula,w,h,colorgrid,function (w,h) {

	var canvas1 = document.getElementById("myCanvas");
var ctx = canvas1.getContext("2d");

canvas1.setAttribute("width",w)
	 canvas1.setAttribute("height",h)
ctx.fillStyle = "#FF0000";
ctx.fillRect(100,100,150,75);
	
})
	 
	



}
