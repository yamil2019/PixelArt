//VARIABLES GLOBALES

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var cursorColores = document.getElementById("indicador-de-color");
var botonApretado = false;
var colorElegido;



var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', (event) => {
    colorActual = colorPersonalizado.value;
    colorElegido = colorActual;
    $('#indicador-de-color').css('background-color', colorElegido);
  
  });


function paletaColores(){
  for(var i = 0; i< nombreColores.length; i++){
    var divNuevo = document.createElement("div");
    divNuevo.style.backgroundColor = nombreColores[i];
    divNuevo.setAttribute("class", "color-paleta");
    document.getElementById("paleta").appendChild(divNuevo);
  }
}
paletaColores();

function grillaDinamica(){
  for(var i = 0; i<1750; i++){
    var divGrilla = document.createElement("div");
    divGrilla.setAttribute('id', 'idGrilla');
    divGrilla.style.backgroundSize = "1px";
    document.getElementById("grilla-pixeles").appendChild(divGrilla);
    };
};

grillaDinamica();

//jquery start


$(document).ready(function() {
  $('.color-paleta').click(function(){
    var colorElegido = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', colorElegido);
  });
  
  $(document).mouseup(function() {
     botonApretado = false;
  })

  .mousedown(function() {
    botonApretado = true;
  })

  $('#grilla-pixeles div').mouseover(function(){
    if(botonApretado) {
      var colorElegido = $('#indicador-de-color').css('background-color');
    $(this).css('background-color', colorElegido);
    }
  })

  
  $('#borrar').click(function(){
    $('#grilla-pixeles div').each(function(){
      $(this).animate({backgroundColor: 'white'}, 1000);
    });
  });

  $('#batman').click(function(){
    $('#grilla-pixeles').toggle(1000, cargarSuperheroe(batman))
  });


  $('#wonder').click(function(){
    $('#grilla-pixeles').toggle(1000, cargarSuperheroe(wonder));
  });

  $('#flash').click(function(){
    $('#grilla-pixeles').toggle(1000, cargarSuperheroe(flash));
  });
  
  $('#invisible').click(function(){
    $('#grilla-pixeles').toggle(1000, cargarSuperheroe(invisible));
  });

  $('#guardar').click(function(){
    guardarPixelArt();
  })



});



