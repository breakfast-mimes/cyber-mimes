import express from 'express';

let app = express();

app.get('/*', (req, res) => {
	res.send('hello');

})

app.listen(1337) => {
	console.log('listening to port')
}

