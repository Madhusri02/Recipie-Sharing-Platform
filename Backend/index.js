const bodyParser = require('body-parser')
const ex = require('express')
const mong = require('mongoose')
const { login_details , recipie_details } = require('./schema')
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

//to fetch data from db
run.get('/login' , async function(request , response){
    try{
        console.log('4444')
        const exp_data = await login_details.find()
        response.status(200).json(exp_data)
        console.log("done everything !")
        }
        catch(error) {
            response.status(500).json({
                "status" : "not connected" ,
                "context" : "entry not available !"
            })
        }
})

run.post('/add-recipie' , async function(request , response){
    try{
        // console.log("2")
        await recipie_details.create({ 
            "title" : request.body.title ,
            "category" : request.body.category ,
            "ingredients" : request.body.ingredients ,
            "description" : request.body.description 
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


run.get('/recipie-details' , async function(request , response){
    try{
        console.log('5555')
        const exp_data = await recipie_details.find()
        response.status(200).json(exp_data)
        console.log("done everything !")
        }
        catch(error) {
            response.status(500).json({
                "status" : "not connected" ,
                "context" : "entry not available !"
            })
        }
})

connect_to_db()