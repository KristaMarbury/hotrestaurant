// dependencies
const express = require("express");
const path = require('path');

//tells node that we are creating an express server
const app = express();

//set initial port
const PORT = process.env.PORT || 3001;

//database
const tables = [
    {
      customerName: "K-Leigh",
      phoneNumber: "18001800",
      customerEmail: "nah@yahoo.com",
      customerID: "255366",
    },
];

const waitlist = [
  {
    customerName: "Waiting",
    phoneNumber: "18001800",
    customerEmail: "nah@yahoo.com",
    customerID: "255366",
  },
];

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/home.html'));
});

app.get("/api/tables", (req, res) => res.json(tables));

//get waitlist tables
app.get("/api/waitlist", (req, res) => res.json(waitlist));


//start the server
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
