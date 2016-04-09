require("shelljs/global");

var images = ls("../images/*.jpg"); // fs.readdirSync
echo(images);                       // console.log

var thumbsDirectory = "../images/thumbs";
rm("-rf", thumbsDirectory); // fs.rmdirSync
mkdir(thumbsDirectory);     // fs.mkdirSync
