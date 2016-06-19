function	creat_div_into(d_css, parent, content, id)
{
	if (arguments.length == 4)
		$('div id = '+id+' class = '+arguments[3]+' >').html(content).appento(parent);
	else 
		$('div id = '+id+' >').html(content).appento(parent);
	d_css.css_aply(id);
}

