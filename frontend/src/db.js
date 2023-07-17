import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017/fidim"; // Replace with your MongoDB connection string
const dbName = 'yourDatabaseName'; // Replace with your database name

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Export the database object for use in other files
  module.exports = db;
});
