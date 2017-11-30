var girando = false;
var total_time = 0.0;

girar = function()
{
	girando = !girando;
}

room.onLoad = function()
{
}

room.update = function(dt)
{
	var dt_sec = dt/500.0; //periodo de la gráfica
	total_time += dt_sec; //Posicion en la gráfica del coseno, a través del tiempo (eje x)
	
	var s = 0.9;
	
	var cos_part = (Math.cos(total_time)); //Posicion en la gráfica coseno, entre -1 y +1 (eje y)
	
	if (girando) {
		s = cos_part*0.1+0.8; //Min 0.7, Max 0.9. Modificamos la amplitud
	}

	room.objects["logo_js"].scale.x = s;
	room.objects["logo_js"].scale.y = s;
	room.objects["logo_js"].scale.z = s;
	
	room.objects["logo_js"].ypiv.y = s;
}
