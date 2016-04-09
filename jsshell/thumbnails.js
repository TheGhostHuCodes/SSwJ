require("shelljs/global");
var lwip = require("lwip");
var path = require("path");

var images = find("../images/").filter(file => file.match(/\.jpg$/i));
echo(images);                       // console.log

var thumbsDirectory = "../thumbs";
rm("-rf", thumbsDirectory); // fs.rmdirSync
mkdir(thumbsDirectory);     // fs.mkdirSync

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
