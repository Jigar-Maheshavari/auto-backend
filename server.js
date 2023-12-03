const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use JSON parsing middleware
app.use(bodyParser.json());



app.get('/', (req, res) => {

    res.send(`Hello, World! ${new Date()}`,);

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
