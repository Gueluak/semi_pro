var tab_test = []
tab_test[0] = new creat_css("ressource/cv_blue.png");
tab_test[1] = new creat_css("ressource/cv_blue.png");
tab_test[2] = new creat_css("ressource/balance_o.png");

function resize(id, size)
{
	if ($(id).css('height') == "0px")
		$(id).css('height', size);
	else
		$(id).css('height', '0px');
}