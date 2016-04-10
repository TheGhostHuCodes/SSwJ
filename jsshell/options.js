var program = require("commander");

program.version("1.0")
  .option("-s, --size <integer>",
          "The image size to shrink to, both height and width.", 200)
  .option("-d, --directory <path>",
          "The directory of images to create thumbnails for.")
  .parse(process.argv);

if (!program.directory) {
    echo("Images directory expected");
    program.help()
}

module.exports.imagesDirectory = program.directory;
module.exports.size = parseInt(program.size);
