let bodyParser = require("body-parser");
let express = require("express");
let path = require("path");

//use express to set up port
let app = express();
let PORT = process.env.PORT || 8080;
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require('./app/routing/apiRoutes.js')(app);
//include htmlRoutes
require('./app/routing/htmlRoutes.js')(app);

//localhost listening
app.listen(PORT, function(){
    console.log(`App is listening on PORT: ${PORT}`)});
