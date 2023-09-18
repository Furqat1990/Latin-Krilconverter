const fs = require('fs');
const path = require('path');

const TextProcess = require('./src/app/textProcess');
const fileProcess = require('./src/app/fileProcess');
const letters = require('./src/app/letters');
const { concatTwoObj } = require('./src/app/helper');

const fullPath = path.join(process.cwd(), 'public/text.txt');

const text = fileProcess.read(fullPath, fs);
const textProcess = new TextProcess(text);

const lkLetters = textProcess.createLetters(letters.latin_uz, letters.kril_uz);
const doubledLetters = textProcess.createDoubleLetters(letters.doubles);
const concatedObj = concatTwoObj(lkLetters, doubledLetters);
const convertedText = textProcess.convert(text, concatedObj);

fileProcess.write(path.join(process.cwd(), 'public/converted.txt'), convertedText, fs);