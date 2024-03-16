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

const login_details = mong.model('user-details' , user_login)
module.exports = {login_details}