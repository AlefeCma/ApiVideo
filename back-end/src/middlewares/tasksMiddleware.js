const validateBody = (req,res,next) =>{
    const {body} = req
    if(body.title === undefined ||body.status === undefined){
        return res.status(400).json({massage:'the filed "title" or "status" is required'})
    } else if(body.title === ''||body.status === ''){
        return res.status(400).json({massage:'the filed "title" or "status" is required'})
    }
    next()
}
module.exports={
    validateBody
}