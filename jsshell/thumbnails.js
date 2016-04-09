require("shelljs/global");

var images = ls("images/*.jpg"); // fs.readdirSync
echo(images);                    // console.log

rm("-rf", "images/thumbs"); // fs.rmdirSync
mkdir("images/thumbs");     // fs.mkdirSync
