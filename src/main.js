var lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("data/letters.txt"),
});

const returnCharacters = (kind) => {
  lineReader.on("line", function (line) {
    const tokens = line.split(" ");
    //console.log("Line from file:", line);
    if (tokens[0] == kind) {
      console.log("Now returning your " + kind + ":");
      console.log("contents: " + tokens[2]);
      console.log("content length: " + tokens[1]);
    }
  });
};

returnCharacters("consonants");
