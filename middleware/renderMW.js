/**
 * Using the template engine render the values into the template
 */

const requireOption = require('./requireOption');
const path = require('path');

module.exports = function (objectrepository, viewName, title) {
    return function (req, res) {
        //res.render(viewName, res.tpl);
        console.log('render: ' + viewName);
        res.locals.title=title;
        //return res.sendFile(path.resolve('static/pages/'+viewName+'.html'));
        res.render(viewName,res.locals);
        res.end();
    };

};