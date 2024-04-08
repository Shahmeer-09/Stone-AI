

const ErrorMiddleWare  = (err, req, res, next)=>{
    //  console.log(err.message.split(':')[1].includes("Response was blocked due to SAFETY"));
    if(err.message.split(':')[0].includes("[GoogleGenerativeAI Error]")){
     const  msg= "Response was blocked due to safety reasons"
     const status = 400
     res.status(status).json({
         success: false,
         msg,
         status,
     })
    }
    else{
     const msg = err.message || "Internal Server Error"
     const status = err.status || 500
     res.status(status).json({
         success: false,
         msg, 
         status,
     })
    }
}

module.exports = ErrorMiddleWare;