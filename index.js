const express = require ('express');
const routing = require('./router/routing');
const cors = require('cors');

const app = express();
const PORT = 4500;

// app.use(cors({
//     origin: '*'
// }));
app.use('/api',routing);

app.get('/',(req,res)=>{
    return res.send("API STATUS 200 ok")
})


app.listen(PORT , ()=>{
    try{
        console.log(`Server running at port: ${PORT}`)
    }
    catch(err){
        console.log("Error",err)
    }
})