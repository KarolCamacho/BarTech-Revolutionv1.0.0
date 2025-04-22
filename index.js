const exp = require('express');
require('dotenv').config();
const router = require('./routes/router');
const app = exp();

app.use(exp.json());
app.use(use.urlencoded({ extended: false }));

app.use('/bartech', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});