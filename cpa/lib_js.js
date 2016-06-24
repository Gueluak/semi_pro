function	creat_div_into(d_css, parent, content, id)
{
	if (arguments.length == 4)
		$('div id = '+id+' class = '+arguments[3]+' >').html(content).appento($(parent));
	else 
		$('div id = '+id+' >').html(content).appento(parent)
	d_css.css_aply(id);
}

function	creat_css(img, d_start, d_end, color)
{
	this.logo_src = img;
	this.start_date = d_start;
	this.end_date = d_end;
	this.color = color;
	this.css_aply = function(id, today)
	{
		$('#' + id + 'img src = ' + img).appento($('#' + id));
		$('#' + id).css('left', ft_comp_date(today, d_start));
		$('#' + id).css('width', ft_comp_date(d_start, d_end));
		$('#' + id).css('background-color', color);
	};
}

function	ft_comp_date(date_1, date_2)
{
	return ((date_2 - date_1) / (3600 * 24));
}