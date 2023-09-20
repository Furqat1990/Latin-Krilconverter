const { isEmpty } = require('./helper');

class TextProcess {
    #text = null;

    constructor(text) {
        this.#text = text;
    }

    /**
     * 
     * @param {String} latin_uz Latin letters as a string
     * @param {String} kril_uz Kril letters as a string
     * @returns {Object} return latin, kril upper and lower letters
     */
    createLetters(latin_uz, kril_uz) {
        isEmpty(latin_uz, 'latin letter');
        isEmpty(kril_uz, 'kril letter');

        if (latin_uz.length !== kril_uz.length) throw new Error('Letters not equal each other');

        const lk = {};

        for (let i = 0; i < latin_uz.length; i++) {
            lk[lk[latin_uz[i]] = kril_uz[i]] = latin_uz[i];
            lk[lk[latin_uz[i].toLowerCase()] = kril_uz[i].toLowerCase()] = latin_uz[i].toLowerCase() ;
        }
        return lk;
    }

    /**
     * 
     * @param {Arrays} doubles an array consisting of object
     * @returns {Object} object 
     */
    createDoubleLetters(doubles) {
        isEmpty(doubles, 'double letters');

        const dlk = {};

        for (let double of doubles) {
            dlk[dlk[double.latin] = double.kril] = double.latin;
            dlk[dlk[double.latin.toLowerCase()] = double.kril.toLowerCase()] = double.latin.toLowerCase();
        }
        return dlk;
    }

    /**
     * 
     * @param {Text} text current text
     * @param {Object} chars chars
     * @returns {Text} return converted text
     */
    convert(text, chars) {
        isEmpty(text, 'Text');
        isEmpty(chars, 'Chars');

        let tempStr = '';

        for (let i = 0; i < text.length; i++) {
            let doubleChar = text[i] + text[i + 1];

            if (doubleChar in chars) {
                tempStr += chars[doubleChar];
                i++;
            } else if (text[i] in chars) {
                tempStr += chars[text[i]];
            } else {
                tempStr += text[i];
            }
        }
        return tempStr;
    }
}

module.exports = TextProcess;