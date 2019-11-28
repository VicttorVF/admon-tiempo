const express = require ('express');
const app = express();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);


app.get('/', (req, res) => {
    res.static(__filename);
});


app.listen(app.get('port'),() => {
    console.log('Listen on port '+ app.get('port'));
});