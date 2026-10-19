import exp from 'express';
import user_class from './User.mjs';
import fs from 'fs';
const app=exp();
app.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000');
});
app.use(exp.json());
const users=[];
users.push(new user_class(1,'senthil',3098398798));
users.push(new user_class(2,'senthil',3098398798));
users.push(new user_class(3,'yesh',3098398798));
users.push(new user_class(4,'bose',3098398798));
users.push(new user_class(5,'nathan',3098398798));
users.push(new user_class(6,'jegan',3098398798));
console.log("hi man");

app.post('/create',(req,res)=>{
    
    const user=req.body;
    let user_id=user.id;
    let user_name=user.user_name;
    let user_phone_number=user.phone_number;
    let user1=new user_class(user_id,user_name,user_phone_number);
    users.push(user1);
    return res.status(200).json(user1);
})
app.get('/Allusers',(req,res)=>{
  const query=req.query;
  const filter=query.filter;
  const value=query.value;
  if(filter && value){
    let ans=[];
  for(let obj of users){
    if(obj[filter].toLowerCase()===value.toLowerCase()){
      ans.push(obj);
    }
  }
  return res.send(ans);
}
else{
  return res.send(users);
}
})
app.get('/users/:id',(req,res)=>{
  let param=req.params;
  for(let object of users){
    if(object.user_id===Number(param.id)){
      res.send(object);
    }
  }
  return res.status(404).sendFile('./docs/Error.html',{root:process.cwd()});
  
})