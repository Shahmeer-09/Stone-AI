const ErrorMiddleWare  = (err, req, res, next)=>{
     const msg = err.message || "Internal Server Error"
     const status = err.status || 500
     res.status(status).json({
         success: false,
         msg, 
         status,
     })
}

module.exports = ErrorMiddleWare;