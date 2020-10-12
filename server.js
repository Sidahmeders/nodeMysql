const express = require('express');

const app = express();

app.use('/people', require('./routes/people.routes'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${port}...`));
