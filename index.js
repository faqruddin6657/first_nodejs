require('dotenv').config()
const express= require('express')
const app= express()
app.get('/',(req,res)=>
{
    res.send("hello mr. shaikh faqruddin")
})

app.get('/login',(req,res)=>
{
    res.send("you are not logged in MR whoever")
})

app.listen(process.env.PORT,()=>{
    console.log(`the server is running at port ${process.env.PORT}`)
})