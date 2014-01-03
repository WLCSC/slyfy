var fs = require('fs');
var pix_regx = new RegExp("\.png|\.jpg|\.svg");
var files;
var directory = "/home/sam/Pictures";
files = fs.readdirSync(directory);

$( function() {
for( index = 0;index < files.length;index++) {
  file = files[index];
  if(JSON.stringify(file).match(pix_regx)) {
    console.log(file);
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
