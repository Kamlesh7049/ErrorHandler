const express=require("express");
const app=express();
// const multer=require('multer');
const bodyparser=require('body-parser')
const cors=require('cors');
const errHandler=require("./middleware/errorHandler")

require("dotenv").config();
const port=process.env.PORT || 3000;

app.use(cors());
//Body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());



//Gloabal Lavel Middleware Exception Handling Error
// ---------------------------------------------------

// app.get("/home",(req,res)=>{
//     res.send("Welcome to home page");
// })
// app.get("/about",(req,res,next)=>{
//     try{
//         let a=10;
//         let b=0;
//         if(b==0)
//         {
//             throw new Error("App zero se divide nahi karta");
//         }
//         let c=a/b;
//         res.status(200).send({ans:c});
//     }catch(error){
//         next(error)
//     }

// })
// app.get("/service",(req,res,next)=>{
//     //code may generate error
//     const err=new Error("ye service ka error massage hai")
//     next(err);

// })
// app.get("/join",(req,res)=>{
//     res.send("Welcome to join page");
// })
// app.get("/contact",(req,res,next)=>{
//     const err=new Error("ye contact page ki error hai");
//     next(err);
// })

// app.use(errHandler);

// app.listen(port,()=>{
//     console.log(`server run on ${port}!!!`)
// })




//Funtion lavel Excepton Handling Error

app.get('/home',(req,res)=>{
    res.send("Welcome to home page");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about page");

})
app.get('/contact',function(req,res,next){
    //Create an error and pass it to the next funtion 
    var err=new Error('Not found Something went wrong');
    next(err);
});
app.get('/photo',function(req,res,next){
    //Create an error and pass it to the next funtion
    var err1=new Error('Not found Something went wrong photom page');
    next(err1);
})
app.use(function(err,req,res,next){
    res.status(500).send("Oops,this is my error something went wrong.");

})
app.listen(port,()=>{
    
})