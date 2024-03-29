//require('dotenv').config()
import express from 'express'
const app= express()
const port=3000
app.get('/',(req,res)=>
{
    res.send("hello mr. shaikh faqruddin")
})

app.get('/api/jokes',(req,res)=>
{
    const jokes=[
        {
            id:1,
            title:"joke 1",
            content:"this is the first joke"
        },
        {
            id:2,
            title:"joke 2",
            content:"this is the second joke"
        },
        {
            id:3,
            title:"joke 3",
            content:"this is the third joke"
        },
        {
            id:4,
            title:"joke 4",
            content:"this is the fourth joke"
        },
        {
            id:5,
            title:"joke 5",
            content:"this is the fifth joke"
        },
   ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`the server is running at port ${port}`)
})