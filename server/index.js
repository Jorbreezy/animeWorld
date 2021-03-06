const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const apiRouter = require('./routes/api');

//USE
app.use('/dist', express.static(path.join(__dirname, '../build')));

//Define route handlers
app.use('/api', apiRouter);

//Main get request
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(`listening on port ${ port }`));