const { commonResponse: response } = require('../../utility/commonResponseHandler');
const statusCode = require('../../utility/statusCode');
const messages = require('../../utility/message')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const service = require('./service')
let userTypeEnum = require('../../enums/userTypes')
let statusEnum = require('../../enums/status')
let commonFunction = require('../../utility/commonFunction')
let mailFunctions = require('../../utility/MailFunction/nodemailer')
const axios = require('axios')
let encryption = require('../../utility/crypto')
let mailtemplates=require('../../utility/MailsTemplates/mailTemplatesExecution')

module.exports={
    createPost:async(req,res)=>{
    try {
        
    } catch (error) {
        console.log("============>error", error)
        return response(res, statusCode.data.SOMETHING_WRONG, error, messages.ErrorMessage.SOMETHING_WRONG)
    }
    }
}