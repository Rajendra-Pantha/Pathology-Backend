const test = require('../Models/test')

postTest = async(req, res) =>{
try{
 const body = req.body
 const isDataExist = await test.findOne({test_name: body.test_name})
    if (isDataExist){
    res.status(202).json({
        "status": "fail",
        "message": "Data already exist"
    })
    }

    else{
        const testEnter = await test.create(body)
        res.status(200).json({
            "status":"success",
            "message": "successfully added data",
            "data": testEnter
        })
    }
}

catch(err){
    res.status(404).json({
        error:err,
        message:"fault"
    })
}
}

const getTest = async(req, res) => {
    try{
        const testData = await test.find({})
        if(testData){
            res.status(200).json({
                "status": "success",
                "message":"Data fetch successfully",
                "data": testData
            })
        }

        else{
           res.status(404).json({
            "status": "fail",
            "message": "data not found"
           }) 

        }

    }catch(err){
     res.status(404).json({
        "error":err,
        "message":"fault"
     })
    }
}

const getTestId = async (req, res) => {
    const {id} = req.params;
    try{
        const getTestById = await test.find({_id: id})
        if(getTestById){
            res.status(200).json({
                "status": "success",
                "message": "Data fetch successfully",
                "data": getTestById
            })
        }
    
        else{
            res.status(404).json({
                "status": "fail",
                "message": "data not found",
               
            })
        }
    }
    catch(err){
        res.status(404).json({
            "status":"fail",
            "message":"fault"
        })
    }
}


module.exports = { postTest, getTest, getTestId }