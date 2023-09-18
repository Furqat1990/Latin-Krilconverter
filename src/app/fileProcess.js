const { isEmpty, isExist } = require('./helper');

class FileProcess {

    /**
     * 
     * @param {String} filePath 
     * @param {NodeModule} fs 
     * @returns {Text} return text
     */
    read(filePath, fs) {
        isEmpty(filePath, 'FilePath');
        isEmpty(fs, 'FS module');
        isExist(filePath, fs);

        return fs.readFileSync(filePath, 'utf-8');
    }

    /**
     * 
     * @param {String} filePath 
     * @param {Text} text 
     * @param {NodeModule} fs 
     */
    write(filePath, text, fs) {
        isEmpty(filePath, 'FilePath');
        isEmpty(text, 'Text');
        isEmpty(fs, 'FS module');

        fs.writeFileSync(filePath, text);

        console.log(`File is created in \u001b[46m${filePath}\u001b[0m`);
    }
}

module.exports = new FileProcess();