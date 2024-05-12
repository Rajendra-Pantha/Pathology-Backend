const patient = require("../Models/patient")
const test = require("../Models/test")
const postPatient = async(req, res) => {
    try{
        const body = req.body
            const newUser = await patient.create(body)
            if(newUser){
                res.status(200).json({
                "status": "success",
                "message": "Patient save successfully",
                "data": newUser 
              })
            }
            else{
                res.status(200).json({
                    "status": "fail",
                    "message": "Patient save fail",
 
                })
            }
                   
       }
    catch(err){
        res.status(404).json({
            "status": "fail",
            "error": err
        })
    }
}

const getPatient = async(req, res) => {
    try{
        const patientData = await patient.find({})
        if (patientData){
            res.status(200).json({
                "status": "success",
                "message": "Data fetch successfully",
                "data": patientData
            })
        }
        else{
            res.status(200).json({ 
             "status": "fail",
             "message": "Data not found"
            })
        }
    }
    catch(err)
    {
     res.status(404).json({
     "status": "fail",
    "message": "Data not found",
      "error": err
     })    
    }
}

const getPatientById = async(req, res) => {
    const {id} = req.params
    try{
      const individualPatientData = await patient.findOne({_id : id})
        if (individualPatientData){
            res.status(200).json({
                "status": "success",
                "message":"Data fetched successfully",
                "data": individualPatientData
            })

        }
        else{
            res.status(404).json({
                "status": "fail",
                "message": "Data cannot find",
            })
        }

    }catch(err){
        res.status(404).json({
            "status": "fail",
            "message": "Data not found",
            "error": err
        })    
    }
}

const getPatientByStatus = async(req, res) => {
    const {status} = req.params
 try{
     const individualPatientData = await patient.find({status: status})
     if (individualPatientData){
        res.status(200).json({
            "status": "success",
            "message": "Data fetch successfully",
            "data": individualPatientData
        })
     }
     else{
         res.status(404).json({
             "status": "fail",
             "message": "Data cannot find",
         })
     }
 }catch(err){
     res.status(404).json({
         "status": "fail",
         "message": "Data not found",
         "error": err
     })    
 }
}

const updatePatient = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const updatePatient = await patient.findOneAndUpdate({ _id: id }, body, { new: true });

        if (updatePatient) {
            res.status(200).json({
                "status": "success",
                "message": "Patient successfully updated",
                "data": updatePatient
            });
        } else {
            res.status(404).json({
                "status": "fail",
                "message": "Data not found or no changes were made"
            });
        }
    } catch (err) {
        res.status(500).json({
            "status": "error",
            "message": "Failed to update patient",
            "error": err
        });
    }
};

const getPatientAndTestDetails = async(req, res) =>{
    const {id} = req.params
    try{
    const findPatient = await patient.findById(id)
    if(findPatient){
        const findTest = await test.findById(findPatient.selected_test)
        res.status(200).json({
            "status":"success",
            "message":"found successfully",
            "patient": findPatient,
            "test": findTest
        })
    }
    else{
       res.status(404).json ({
        "status": "fail",
        "message": "cannot find"
    })
    }

    }catch(err){
        res.status(404).json({
            "status": "error",
            "message": "Failed",
            "error": err
        });
    }
}

const deletePatient = async(req, res) => {
  const {id} = req.params
  try{
await patient.deleteOne({_id: id})
   res.status(200).json({
    "status":"success",
    "message":"Successfully delete"
   })
  } catch (err) {
      res.status(404).json({
          "status": "error",
          "message": "Failed",
          "error": err
      });
  }
}


module.exports = { postPatient, getPatient, getPatientById, getPatientByStatus, updatePatient, getPatientAndTestDetails, deletePatient }