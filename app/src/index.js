const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI || 'mongodb://mongodb:27017';
const dbName = 'notes';

app.use(express.json());

app.get('/notes', async (req, res) => {
    try {
        const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);

        const notesCollection = db.collection('notes');

        const notes = await notesCollection.find().toArray();

        client.close();

        res.json(notes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/notes', async (req, res) => {
    try {
        const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);

        const notesCollection = db.collection('notes');

        const { title, description, createDate } = req.body;

        await notesCollection.insertOne({ title, description, createDate });

        client.close();

        res.status(201).json({ message: 'Note added successfully', note: { title, description, createDate } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
