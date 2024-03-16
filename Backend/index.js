const bodyParser = require('body-parser')
const ex = require('express')
const mong = require('mongoose')
const { login_details } = require('./schema')
const cor = require('cors')

const run = ex()
run.use(bodyParser.json())
run.use(cor({credentials: true , origin:'http://localhost:5173'}))


//db connection
async function connect_to_db(){
    try{
        await mong.connect('mongodb+srv://admin:root1234@cluster0.apqylvz.mongodb.net/recipie_sharing_platform?retryWrites=true&w=majority&appName=Cluster0')
        const port = 5000 || process.env.PORT 
        run.listen(port , function(){
            console.log('listening at port : ' + port)
            // console.log(a)
        })
    }
    catch(er) {
        console.log(er)
    }
}  

run.post('/signup' , async function(request , response){
    try{
        // console.log("2")
        await login_details.create({
            "user_id"  : request.body.user_id , 
            "password" : request.body.password ,
            "email" : request.body.email 
        })
        response.status(200).json({
            "status"  : "success" , 
            "content " : "added"
        })
    }
    catch(er){
        response.status(500).json({
            "status" : "failure" , 
            "content" : "corrupted" ,
            "error" : er
        })
    }
})

connect_to_db()