const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    test_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    fasting:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:"https://firebase.google.com/images/products/test-lab/test-lab-1.png"
    },
    normal_range:{
        type:String,
        required:true
    },
    abnormal_range:{
        type:String,
        required:true
    }
},
{
    timestamps:{
        createdAt:true,
        update:true
    }
}
)

const test = mongoose.model('test',testSchema)
module.exports = test