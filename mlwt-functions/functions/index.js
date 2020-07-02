const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/getTemps', (req, res) => {
  admin
    .firestore()
    .collection('waterTemps')
    .orderBy('time', 'desc')
    .get()
    .then((data) => {
      let waterTemps = [];
      data.forEach((doc) => {
        waterTemps.push({
          tempId: doc.id,
          tempF: doc.data().tempF,
          time: doc.data().time
        });
      });	
      return res.json(waterTemps);
     })
     .catch(err => console.error(err));
})

app.post('/addTemperature', (req, res) => {  
  const newTemp = {
    tempF: req.body.tempF,
    time: new Date().toISOString()
  };
  
  admin
    .firestore()
    .collection('waterTemps')
    .add(newTemp)
    .then((doc) => {
	  res.json({ message: `Temperature ${doc.id} added successfully.` });
	})
	.catch(err => {
	  res.status(500).json({ error: 'Something went wrong.' })	;
	  console.error(err);
	});
});

// This sets up the base url + /api/ route
exports.api = functions.https.onRequest(app);
