const mongoose=require('mongoose')
const validator=require('validator')

const  reservationSchemaModel=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3, "First name must contain atleast 3 characters"],
        maxLength:[30, "First name can not exceed 30 characters"],
    },

    lastName:{
        type:String,
        required:true,
        minLength:[3, "First name must contain atleast 3 characters"],
        maxLength:[30, "First name can not exceed 30 characters"],
    },

    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "Provide a valid email"],
    },

    phone:{
        type:String,
        required:true,
        minLength:[10, "Phone no must contains 10 digit"],
        maxLength:[10, "Phone no must contains 10 digit"],
    },

    time:{
        type:String,
        required:true,
    },

    date:{
        type:String,
        required:true,
    },
})

const Reserve=mongoose.model("reserves",reservationSchemaModel)

module.exports=Reserve