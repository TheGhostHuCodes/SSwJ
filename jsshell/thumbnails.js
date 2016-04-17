#!/usr/bin/env node

require("shelljs/global");
var lwip = require("lwip");
var path = require("path");
var fs = require("fs");
var readlineSync = require('readline-sync');
var options = require("./options.js");

/*global ls echo exit rm mkdir exec*/
var size = options.size;
var imagesDirectory = options.imagesDirectory;

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

        image.batch().contain(size, size, "black").writeFile(thumbFile, err => {
            if (err) {
                console.error(err);
                return;
            }
            echo(`${thumbFile} done`);
            exec(`eog ${thumbFile}`);
        });
    });
});
