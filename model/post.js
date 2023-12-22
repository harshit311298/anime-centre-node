const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const mongoosePaginate = require("mongoose-paginate-v2");
const userTypEnums=require('../enums/userTypes')
const statusEnum=require('../enums/status')

const options = {
    collection: "post",
    timestamps: true
};

const schemaDefination = new schema(
    {
        userId:{type:mongoose.Types.ObjectId,ref:'user'},
        type: { type: String,enum:["Video","Image"] },
        title: { type: String },
        description: { type: String },
        mediaUrl:{type:String},
        status: { type: String, default: statusEnum.data.ACTIVE}
    },
    options
);

module.exports = mongoose.model("post", schemaDefination);
