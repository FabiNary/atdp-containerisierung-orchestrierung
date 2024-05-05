const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Datenbankverbindung einrichten
const connection = mysql.createConnection({
    host: 'example-mysql',
    port: 3306,
    user: 'root',  // Ihr MySQL Benutzer
    password: 'mysql-pw',  // Ihr MySQL Passwort
    database: 'node_example'
});


connection.connect(error => {
    if (error) {
        console.error("Es ist ein Fehler aufgetreten!")

        if(error.code === "ECONNREFUSED") {
            console.error("Verbindung zur Datenbank konnte nicht hergestellt werden")
        }

        return;
    }

    connection.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE)", (error, result) => {
        if(error) console.error(error);

        console.log("Tabelle user wurde angelegt oder existiert bereits")
    });

    connection.query("INSERT IGNORE INTO users (name, email) VALUES ('Paula', 'paula@example.com')", (error, result) => {
        if(error) console.error(error);

        console.log("Paula wurde erfolgreich hinzugefügt oder existiert bereits")
    });

    connection.query("INSERT IGNORE INTO users (name, email) VALUES ('Jakob', 'jakob@example.com')", (error, result) => {
        if(error) console.error(error);

        console.log("Jakob wurde erfolgreich hinzugefügt oder existiert bereits")
    });

    console.log("Erfolgreich mit der Datenbank verbunden.");

});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) return res.send(error);
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});