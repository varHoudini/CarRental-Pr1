const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Je kunt elke beschikbare poort gebruiken

// Functie om een nieuwe MySQL-verbinding te maken
function createDBConnection() {
  return mysql.createConnection({
    host: "ID324796_s24css.db.webhosting.be",
    user: "ID324796_s24css",
    password: "v9Q3rQ75Wi6ikN4svT42",
    database: "ID324796_s24css",
    connectTimeout: 20000, // Pas de waarde aan indien nodig
  });
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Initiële MySQL-verbinding
let db = createDBConnection();

// Verbind met MySQL
function connectToDatabase() {
  db = createDBConnection();

  db.connect((err) => {
    if (err) {
      console.error("MySQL verbindingsfout:", err);
      setTimeout(connectToDatabase, 2000); // Probeer opnieuw na 2 seconden
    } else {
      console.log("Verbonden met MySQL-database");
    }
  });

  // Behandel MySQL-verbindingsfouten
  db.on("error", (err) => {
    console.error("MySQL verbindingsfout:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Probeer opnieuw verbinding te maken als de verbinding is verbroken
      connectToDatabase();
    } else {
      throw err;
    }
  });
}

// Schakel CORS in
app.use(cors());

// Verbind met de database
connectToDatabase();

// Voeg hier je routes toe
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Fout bij het ophalen van gebruikers:", err);
      res.status(500).send("Fout bij het ophalen van gebruikers.");
      return;
    }
    res.json(results);
  });
});

// Start de server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
