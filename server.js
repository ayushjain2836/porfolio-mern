const express= require('express');
const cors= require('cors');
const dotenv = require('dotenv');
const path= require('path')

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/', (req,res)=>{
    res.send('<H1>node server0</H1>')
})

const PORT = process.env.PORT||5000

app.listen(PORT,()=>{
    console.log("server running")
})
