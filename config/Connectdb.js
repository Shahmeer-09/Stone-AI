const mongoose = require('mongoose');


const Dbconnecction = async () => { 
    try {
          await mongoose.connect(process.env.MONGO_URL)
          console.log(`Database connected ${mongoose.connection.host}`);
    } catch (error) {
          console.log(`Error while connecting with database ${error}`);
    }
}

module.exports = Dbconnecction;