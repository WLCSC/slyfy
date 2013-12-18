var fs = require('fs');
var pix_regx = new RegExp("\.png|\.jpg|\.svg");
var files;
var directory = "C:\\Users\\Administrator\\Pictures";
files = fs.readdirSync(directory);
for( index = 0;index < files.length;index++) {
  file = files[index];
  if(JSON.stringify(file).match(pix_regx)) {
    console.log(file);
  }
}
/*while(true) {
if(files == fs.readdirSync(directory)){
console.log("Files are all the same.");
}
else{
files = fs.readdirSync(directory);
}

}*/
