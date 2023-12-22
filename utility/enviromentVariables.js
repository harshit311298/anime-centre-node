let local={
    port:'http://localhost:1964',
    swaggerurl:'localhost:1964',
    "nodemailer": {
        "service": "gmail",
        "email": "fortestingpurpose0077@gmail.com",
        "password": "bztzdeyoecetitik"
    },
    cloudinary:{
        cloud_name: "dfjgvik8w",
        api_key: "655862627178536",
        api_secret: "v1JIYYHQAz2hmOouIyDgckdQlZ8"
    },
    DATA_ENCRYPTION:"finovac",
    acess_key:"AKIAY45TKYDDVZXJA6EK",
    secret_access_key:"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",
    fast2smsapiKeys:"PZxqiBMXYVJQTopS3tFhNEeaOwk8ucCmUvIldy6RGrDz5b0jW9xpDfVE6Wh5iNP4z3jm7BaS2OZnMrYL",
    JWT_SECRET_KEY:"anime-centre299865"
},
staging={
    port:'https://finovac-node.onrender.com',
    swaggerurl:'finovac-node.onrender.com',
    "nodemailer": {
        "service": "gmail",
        "email": "fortestingpurpose0077@gmail.com",
        "password": "bztzdeyoecetitik"
    },
    cloudinary:{
        cloud_name: "dfjgvik8w",
        api_key: "655862627178536",
        api_secret: "v1JIYYHQAz2hmOouIyDgckdQlZ8"
    },
    DATA_ENCRYPTION:"finovac",
    acess_key:"AKIAY45TKYDDVZXJA6EK",
    secret_access_key:"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",
    fast2smsapiKeys:"PZxqiBMXYVJQTopS3tFhNEeaOwk8ucCmUvIldy6RGrDz5b0jW9xpDfVE6Wh5iNP4z3jm7BaS2OZnMrYL",
    JWT_SECRET_KEY:"anime-centre299865"
}

module.exports={
    local,staging
}