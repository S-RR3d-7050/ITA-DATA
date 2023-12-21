const fs = require('fs');

function splitFile(inputFilePath, linesPerFile = 5) {
    const content = fs.readFileSync(inputFilePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim() !== '');

    for (let i = 0; i < lines.length; i += linesPerFile) {
        const outputFilePath = `${i / linesPerFile + 1}.txt`;
        const slicedLines = lines.slice(i, i + linesPerFile).join('\n');
        fs.writeFileSync(outputFilePath, slicedLines);
    }
}

const inputFile = 'torrent_links.txt';  // Replace with your input file name
const linesPerFile = 5;

splitFile(inputFile, linesPerFile);
