const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://gauri:gauri@gauri.iqfwwq0.mongodb.net/reservation?retryWrites=true&w=majority&appName=Gauri',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection

db.on('error',console.error.bind(console,'MongoDB connection error:'))

db.once('open',function(){
    console.log("connected to the database")
})

module.exports=db;