/**
 * Using the template engine render the values into the template
 */

const requireOption = require('./requireOption');
const path = require('path');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.render(viewName, res.tpl);
        console.log('render: ' + viewName);        
        return res.sendFile(path.resolve('static/pages/'+viewName+'.html'));
        res.end();
    };

};