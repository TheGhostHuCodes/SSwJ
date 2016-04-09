require("shelljs/global");
var lwip = require("lwip");
var path = require("path");
var fs = require("fs");
var readlineSync = require('readline-sync');

var imagesDirectory = "../images";

var images = ls(`${imagesDirectory}/*.jpg`);
echo(images); // console.log

var thumbsDirectory = path.join(imagesDirectory, "thumbs");
if (fs.existsSync(thumbsDirectory)) {
    // prompt.
    var response = readlineSync.keyInYN(
      `The ${thumbsDirectory} exists, would you like to wipe it out and continue?`);
    if (!response) {
        echo("Aborting termination of thumbnails");
        exit();
    }
    rm("-rf", thumbsDirectory); // fs.rmdirSync
}
mkdir(thumbsDirectory); // fs.mkdirSync

images.forEach(imageFile => {
    lwip.open(imageFile, (error, image) => {
        var fileName = path.basename(imageFile);
        var thumbFile = path.join(thumbsDirectory, fileName);

        image.batch()
          .contain(42, 42, "black")
          .writeFile(thumbFile, err => {
              if (err) {
                  console.error(err);
                  return;
              }
              echo(`${thumbFile} done`);
              exec(`eog ${thumbFile}`);
          });
    });
});
