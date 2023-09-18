const TextProcess = require('../../app/textProcess');
const text = 'Salom'

describe('TextProcess', () => {
    let textProcess;

    beforeAll(() => {
        textProcess = new TextProcess(text);
    });

    function isEmpty(latin, kril, name) {
        it(`should return if ${name} is empty`, () => {
            expect(() => textProcess.createLetters(latin, kril)).toThrowError(`${name} should not be empty`);
        });
    }

    describe('createLetters method', () => {
        const latin_uz = 'AB';
        const kril_uz = 'АБ';

        isEmpty('', kril_uz, 'latin letter');
        isEmpty(latin_uz, '', 'kril letter');

        it('should return object from latin and kril letters', () => {
            const mock = jest.spyOn(textProcess, 'createLetters');

            let returnedObj = {
                A: 'А', 'А': 'A',
                a: 'а', 'а': 'a',
                B: 'Б', 'Б': 'B',
                b: 'б', 'б': 'b'
            }

            textProcess.createLetters(latin_uz, kril_uz);

            expect(mock).toHaveBeenCalledTimes(1);
            expect(mock).toHaveBeenCalledWith(latin_uz, kril_uz);
            expect(mock).toHaveReturnedWith(returnedObj);
    
        });

        it('should return error if latin letters is not equal to kril letters', () => {
            expect(() => textProcess.createLetters('ABC', 'АБ')).toThrowError('Letters not equal each other');
        });
    });
});