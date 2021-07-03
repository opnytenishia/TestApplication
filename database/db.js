const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://test-user:testing123@testapplicationmernstac.pp2cg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Database connection success');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;