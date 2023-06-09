const User = require ('../model/user')



  const registerNewUser =async (req,res)=>{
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "Registration Success"
      })
    }
  }

  const loginUser =async (req,res)=>{
    // console.log(req.body)
    const data = await User.findOne({phoneNumber:req.body.phoneNumber})
    if(data) {
      res.json({
        isLoggedIn:true,
        msg: "Login Successfully",
        id: data._id
      })
    }else{
      res.json({
        isLoggedIn:false,
        msg: "User does not exist"
      })
    }
  }

  const getAllUser =  async (req,res)=>{
    const data = await User.find()
    if(data){
      res.json({
      userList: data
      })
    }
  }
 
  const getUserDetailsById = async (req,res)=>{
    const data = await User.findById(req.params.id)
    if(data){
      res.json({
      userList: data
      })
    }
  }

  module.exports ={registerNewUser,loginUser,getAllUser,getUserDetailsById} 