console.log('utils.js');
const name = 'usmi';

//exporting modules in this file so that the modules can be used in the file that acceses this file

const add = function (a,b) {
    return a + b
}

module.exports = add