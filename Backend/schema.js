const mong = require('mongoose')

const user_login = new mong.Schema({
    user_id :{
        type : String ,
        unique : true ,
        required : true 
    },
    password : {
        type : String 
        // required : true 
    } , 
    email : {
        type : String
    }
})

const recipie_d = new mong.Schema({
   title :{
    type : String , 
   },
   category : {
    type : String ,
   },
   ingredients :{
    type : String ,
   }, 
   description : {
    type : String,
   }
})

const login_details = mong.model('user-details' , user_login)
const recipie_details = mong.model('recipie-details' , recipie_d)
module.exports = {login_details , recipie_details}