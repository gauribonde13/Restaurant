const express=require('express')
const dbConnect=require('./dbConnect/dbConnect')
const app=express()
const port=7000;
const reservationRoute=require('./routes/reservationRoute')
app.use(express.json())
app.use('/api/reserUser',reservationRoute)

//app.get('/',(req,res)=>res.send('hello project'))

app.listen(port,()=>console.log(`App listening on port ${port}`))
