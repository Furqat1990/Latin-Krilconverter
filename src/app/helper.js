/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {Object} two concated object 
 */

exports.concatTwoObj = function(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

/**
 * 
 * @param {String} arg any argument
 * @param {String} argName any argument name
 * @returns {Error} if arg is empty throw new Error
 */
exports.isEmpty = function(arg, argName) {
    if (!arg) throw new Error(`${argName} should not be empty`);
}

exports.isExist = function(path, fs) {
    if (!fs.existsSync(path)) throw new Error('File is not exist');
}