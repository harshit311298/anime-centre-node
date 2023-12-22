// exceptions
const forgotPassword=require('./mailFunction/forgotPassword')
const otp_verification=require('./mailFunction/OTP_VERIFICATION')
module.exports = {
    forgotPassword,
    otp_verification
};
