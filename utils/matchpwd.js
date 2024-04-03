
const bcrypt = require('bcryptjs')
const matchPwd =async (password, validpwd)=>{
         const macth= await bcrypt.compare(password, validpwd)
        return macth
}
module.exports=matchPwd;