const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({test: 'testing'});
});

// Dynamically figures out which port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);