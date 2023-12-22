const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let commonfunction=require('../utility/utils/commonFunction/helper')
let statusEnum=require('../utility/utils/enums/status')
let userTypeEnum=require('../utility/utils/enums/userType')
let status=commonfunction.objectToArray(statusEnum.status)
let userType=commonfunction.objectToArray(userTypeEnum.data)
const userSchema = new Schema({
  fullName: String,
  email: String,
  userName: String,
  phoneNumber:String,
  password:String,
  otp:String,
  otpExpireTime:Number,
  gender:String,
  userType:{
    type:String,
    enum:userType,
    default:userTypeEnum.data.USER
  },
  otpVerified:{
    type:Boolean,
    default:false
  },
  profilePic:{
    type:String
  },
  status:{
    type:String,
    enum:status,
    default:statusEnum.status.ACTIVE
  }
},{
    timestamps:true
});
module.exports=mongoose.model('user',userSchema)
