const fs = require('fs');
const path = require('path');
const config = require('./config');
module.export = function (app) {
    Object.keys(config).forEach(key => {
        app.use(key, function (req, res) {
            const filename = path.join(__dirname, config[key].local);
            console.log(app);
            console.log(filename);
        })
    })
}