const express = require('express')
const router = express.Router()
const { postPatient, getPatient, getPatientById, getPatientByStatus, updatePatient, getPatientAndTestDetails, deletePatient } = require('../controllers/patientController')

router.post('/post', postPatient)

router.get('/get', getPatient)

router.get('/getPatientById/:id', getPatientById)

router.get('/getPatientByStatus/:status', getPatientByStatus)

router.put('/:id', updatePatient)

router.get('/getPatientAndTestDetails/:id', getPatientAndTestDetails)

router.delete('/:id', deletePatient)


module.exports = router