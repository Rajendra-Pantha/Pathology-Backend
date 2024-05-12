const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    enter_name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "Pending"
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    examined_by: {
        type: String,
        required: true
    },
    modal_examined_date: {
        type: String,
        required: true
    },
    selected_test: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    modal_report_date: {
        type: String,
        required: true
    },
    result:[
        {
            name: {
                type: String,
                required: true
            },
            range: {
                type: String,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            result: {
                type: String,
                required: true
            },
        }
    ]
},
    {
        timestamps: {
            createdAt: true,
            update: true
        }
    }
)

const patient = mongoose.model('patient',patientSchema)
module.exports = patient