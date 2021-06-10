let tableData = require('../data/table-data.js');
let waitingListData = require('../data/waitinglist-data.js');



module.exports = function (app) {
  // Routes can go here...
    app.get('api/tables', function (req, res) {
        res.json(tableData);
    });
    
    app.get("api/waitlist", function (req, res) {
        res.json(waitingListData);
    });
};
