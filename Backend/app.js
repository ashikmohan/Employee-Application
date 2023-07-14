const express=require('express');
const app=new express();
const morgan=require('morgan');
const cors= require('cors');
const jwt=require('jsonwebtoken');



// app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/login',async (req,res)=>{
try {
    console.log(req.body)
    var email=req.body.email;
    var pwd=req.body.password;

    if(email=='abc123@gmail.com' && pwd=='abcd1234'){
        let payload={email:email,password:pwd};
        let token=jwt.sign(payload,'secretkey')
        res.status(200).send({message:'Success',token:token});
    }
    else{
        res.status(404).send({message:'Unauthorised'});
    }
} catch (error) {
    res.status(404).send({message:'Not Found'})
}

})

app.listen(5000,()=>{
    console.log(`server started`)
});