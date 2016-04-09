require("shelljs/global");
var lwip = require("lwip");
var path = require("path");

var images = ls("../images/*.jpg"); // fs.readdirSync
echo(images);                       // console.log

var thumbsDirectory = "../images/thumbs";
rm("-rf", thumbsDirectory); // fs.rmdirSync
mkdir(thumbsDirectory);     // fs.mkdirSync

images.forEach(imageFile => {
    lwip.open(imageFile, (error, image) => {
        echo(imageFile);
        echo(`Width: ${image.width()}, Height: ${image.height()}`);

        var fileName = path.basename(imageFile);
        echo(`basename: ${fileName}`);
        var thumbFile = path.join(thumbsDirectory, fileName);
        echo(`thumbFile: ${thumbFile}`);
    });
});
