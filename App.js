const exp=require('express');
const app=exp();
app.get('/',(req,res)=>{
    return res.send('Hello worls');
})
app.listen(3000,()=>{
    console.log("Server is listening ");
})