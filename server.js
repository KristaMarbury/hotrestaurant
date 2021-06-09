// dependencies
const { table } = require("console");
const express = require("express");
const path = require('path');

//tells node that we are creating an express server
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  {
    customerName: "Dick Grayson",
    phoneNumber: "18001800",
    customerEmail: "noice@yahoo.com",
    customerID: "254364",
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

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/reservation.html"));
});

app.post("/api/tables", (req, res) => {
    const newTable = req.body;
    if (tables.length < 5) {
        tables.push(newTable);
        res.json(true);
    } else {
        waitlist.push(newTable);
        res.json(false);
    }
    
});

//clear out the data
app.post('/api/clear', (req, res) => {
    tables.length = 0;
    waitlist.length =0;

    res.json({ ok: true });
});

app.get("/api/tables", (req, res) => res.json(tables));

//get waitlist tables
app.get("/api/waitlist", (req, res) => res.json(waitlist));


//start the server
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));
