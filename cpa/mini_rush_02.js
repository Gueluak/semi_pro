
function lapin(id, size, pourcent,ext_color, int_color) // trace des cercle dans un id de type canvas
{
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");
    var agl = pourcent * 2 / 100;
    ctx.clearRect(0,0,200,200);
    px = document.body.clientHeight * (size / 34);
    ctx.fillStyle = ext_color;
    ctx.strokeStyle = ext_color;
    for(var i = 0; i <= 10; i++) 
    {
        ctx.beginPath();
        ctx.arc(px, px , px - i / 2, 0, agl * Math.PI);  // exterieur du cercle
        ctx.stroke();
    };
    ctx.fillStyle = int_color;
    ctx.strokeStyle = int_color;
    ctx.beginPath();
    ctx.arc(px, px , px * 0.9, 0, 2 * Math.PI);  //interieur du cercle
    ctx.fill();
    ctx.stroke();
}

function protocol()
{
    lapin("droit01", 2.7, 45,"#69e0a9", "#1abc9c");
    lapin("droit02", 2.7, 87,"#39a019", "#1abc9c");
    lapin("droit03", 2.7, 50,"#096059", "#1abc9c");
    lapin("droit04", 2.7, 25,"#1980a9", "#1abc9c");
}
var idgen = 0;
var posx = 4;
var day = new Date();
var start = 0;
var end = 0;
protocol();
console.log(day)
var test = day.getYear();

$( window ).resize(function() {
  protocol();
});

$('.TLflag').click(function()
{
    var name = '#TL' + $(this).attr('id');
    var disp = $(name).css('display');
    if (disp == 'inline-block')
    {
        $(name).css('display', 'none');
        $(this).css('background-color','#ecf0f1')
    }
    else
    {

        $(this).css('background-color','#d4d9dc')
        $(name).css('display', 'inline-block');
    }
});

function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;
    console.log(date2);
                // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp)/24 /60 /60 /1000);   // Nombre de jours restants
    diff.day = tmp + 1;
     
    return diff.day;
}

$('#03a').click(function()
{
    $('#formulaire').css('display', 'block');
});

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}

function div_recalc(id_div)
{
        console.log('malin = '+ start +'///'+ end);
    $(id_div).siblings().each(function ()
    {
        var dstart = $(this).attr('dstart');
        var dend = $(this).attr('dend');
        console.log('lapin = '+ dstart +'///'+ dend);
        if (dstart > start && dstart < end)
        {
            console.log(dstart);
        }
        if (dend > start && dend < end)
        {
            console.log(dend);
        }
    })
    //$(element).parent().siblings().each(function(index,element)
}

$('#check_ok').click(function()
    {
        var obj = new Object();
            obj.name = '#ssdiv' + idgen;
            obj.nom = document.getElementById('form_nom').value;
            obj.size = (document.getElementById('form_duree').value) / 10;
            obj.revenue = document.getElementById('form_revenue').value;
            obj.color = document.getElementById('form_color').value;
            console.log(obj.color);
            var tmp = document.getElementById('form_date').value;
            console.log(tmp + "   rien   " + (tmp[5] * 10 + tmp[6] * 1));
            if (tmp){obj.date = new Date((tmp[0] * 1000 + tmp[1] * 100 + tmp[2] * 10 + tmp[3] * 1),(-1 + tmp[5] * 10 + tmp[6] * 1),(tmp[8] * 10 + tmp[9] * 1));obj.start = 4 + (dateDiff(day,obj.date) / 10);}else{obj.start = 0;}
        
        if (!IsNumeric(obj.size) || obj.size == 0) {$('#formulaire').css('display', 'none');return;};
        console.log("date = "+obj.date);
        obj.start = (obj.start != 0 ? obj.start : posx);
        console.log("start = "+obj.start);
        //verif a faire dans sverif
        var sverif = 2;
        $('<div id = ssdiv' + idgen + '1 class = in sverif = ' + sverif + ' dstart = ' + obj.start + ' dend = ' + (obj.size + obj.start) + '>').html(obj.nom).appendTo('#lTL01');
        $(obj.name + '1').css('width', obj.size + 'vh');
        $(obj.name + '1').css('left', obj.start + 'vh');
        $(obj.name + '1').css('background-color', obj.color);
        console.log(obj.revenue > 0);
        if (IsNumeric(obj.revenue) && obj.revenue > 0)
        {
        console.log('lapin');
            $('<div id = ssdiv' + idgen + '3 class = in sverif = ' + sverif + ' dstart = ' + obj.start + ' dend = ' + (obj.size + obj.start) + '>').html(obj.revenue).appendTo('#lTL03'); 
            $(obj.name + '3').css('width', obj.size + 'vh');
            $(obj.name + '3').css('left', obj.start + 'vh');
        $(obj.name + '3').css('background-color', obj.color);
        }
        if (IsNumeric(obj.revenue) && obj.revenue < 0)
        {
            $('<div id = ssdiv' + idgen + '2 class = in sverif = ' + sverif + ' dstart = ' + obj.start + ' dend = ' + (obj.size + obj.start) + '>').html(obj.revenue).appendTo('#lTL02');
            $(obj.name + '2').css('width', obj.size + 'vh');
            $(obj.name + '2').css('left', obj.start + 'vh');
        $(obj.name + '2').css('background-color', obj.color);
        }
        console.log("posx = " + posx);
        console.log("obj.size = " + obj.size);
        console.log("obj.start = " + obj.start);
        console.log("obj.size + obj.start = " + (obj.size + obj.start));
        console.log("posx > obj.size + obj.start = " + (posx > obj.size + obj.start));
        posx = (posx > obj.size + obj.start ? posx : obj.size + obj.start);
        $('#formulaire').css('display', 'none');
        start = obj.start;
        end = (start + obj.size);
        div_recalc('#ssdiv' + idgen + '1');
        idgen++;9
    });
/* var size = 25
    var name = 'lapin'
    var graf = '#lTL01'
    $('<div id = ssdiv' + idgen + ' class="in">').html(name).appendTo(graf);
    var name = '#ssdiv' + idgen;
    idgen++;

    $(name).css('width', size + 'vh');
    $(name).css('left', posx + 'vh');
    posx += size;*/