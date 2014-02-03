var fs = require('fs');
var pix_regx = new RegExp("\.[png|PNG|jpg|JPG|jpeg|JPEG]");
var files;
var directory = "pics";
files = fs.readdirSync(directory);

$( function() {
		console.log("howdy");
    for( index = 0;index < files.length;index++) {
        file = files[index];
            console.log(file);
        if(JSON.stringify(file).match(pix_regx)) {
            console.log("<div id='"+JSON.stringify(file).replace(/"/g, "")+"'> <img src='"+directory + "/"+JSON.stringify(file).replace(/"/g, "") +"' /></div>");
            $("#slideshow_area").append("<div id=\""+JSON.stringify(file).replace(/"/g, "")+"\"> <img src='"+directory + "/"+JSON.stringify(file).replace(/"/g, "") +"' /></div>");
        }
    }
});

/*while(true) {
  if(files == fs.readdirSync(directory)){
  console.log("Files are all the same.");
  }
  else{
  files = fs.readdirSync(directory);
  }

  }*/


var count = files.length;
var ctr = 0;

function init() {
    var offset = 0;
    for(var i = 0; i < ctr; i++) {
        offset += 416;
    }
    $('#slideshow_area').animate({top: '-='+offset}, 0);
}
function slideDown() {
    $('#slideshow_area').animate({top: '-=416'}, 0);
}

function slideToTop() {
    $('#slideshow_area').animate({top: '0'}, 0);
}

function timerTick() {
    ctr++;
    slideDown();
    if(ctr >= count) {
        slideToTop();
        ctr = 0;
    }
}

window.setInterval(function() { timerTick(); }, 11000);

