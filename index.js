/**
 * Get nested value from json path and optionally supply fallback value
 * @param {function} func Function that returns the json path
 * @param {*} def Fallback value when path doesn't exist
 * @returns {*} Returns found value or fallback value
 */
module.exports = function (func, def) {
    if(typeof def === 'undefined' || !def) {
        def = false; // Default fallback value is 'false'
    }

    try {
        return func();
    } catch(e) {
        return def;
    }
};
