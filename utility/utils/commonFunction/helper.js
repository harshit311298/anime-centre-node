module.exports={
    objectToArray(data){
     let result=[]
     console.log(data)
     Object.keys(data).map(o=>{
        result.push(data[o])
     })
     return result
    }
}