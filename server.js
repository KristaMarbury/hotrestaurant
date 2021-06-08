// dependencies
const express = require("express");

//tells node that we are creating an express server
const app = express();
//set initial port
const PORT = process.env.PORT || 3001;




// Routes


//start the server
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
