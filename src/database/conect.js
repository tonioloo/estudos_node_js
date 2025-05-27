const mongoose = require('mogoose')

const conectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vcm01f0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, (err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
        }

        console.log('Connected to the database successfully!');
    })
}

module.exports = conectToDatabase;