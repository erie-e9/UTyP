import mongoose, { Schema } from 'mongoose';

const CampusSchema = new Schema({
    camname: {
        type: String,
        required: 'Campus name is required',
        unique: true,
        minlength: [3, 'Campus name must to be longer that 3 characters'],
        maxlength: [50, 'Campus name is very longer']
    },
    camlogo: {
        type: String,
        required: 'Campus logo is required'
    },
    // camaddress: {
    //     type: String,
    //     required: 'Campus address is required',
    //     minlength: [20, 'Campus address must to be longer that characters'],
    //     maxlength: [250, 'Campus address is very longer']
    // },
    camphone: {
        type: String,
        unique: true,
        required: 'Campus phone is required',
        minlength: [9, 'Campus phone must to be longer that 9 characters'],
        maxlength: [13, 'Campus phone is very longer']
    },
    camcellphone: {
        type: String,
        unique: true,
        minlength: [9, 'Campus cellphone must to be longer that 9 characters'],
        maxlength: [13, 'Campus cellphone is very longer']
    },
    camemail: {
        type: String,
        required: 'Campus email is required',
        unique: true,
        maxlength: [100, 'Campus email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Campus email is incorrect type of email']
    },
    camcode: {
        type: String,
        required: 'Campus code is required',
        unique: true,
        minlength: [3, 'Campus code must to be longer that 3 characters']
    },
    camstate: {
        type: String,
        required: 'Campus state is required',
        minlength: [3, 'Campus state must to be longer that 3 characters'],
        maxlength: [25, 'Campus state too long']
    },
    camcity: {
        type: String,
        required: 'Campus city is required',
        minlength: [3, 'Campus city must to be longer that 3 characters'],
        maxlength: [25, 'Campus city too long']
    },
    camstreet: {
        type: String,
        required: 'Campus street is required',
        minlength: [3, 'Campus street must to be longer that 3 characters'],
        maxlength: [25, 'Campus street too long']
    },
    camzip: {
        type: Number,
        required: 'Campus zip is required',
        min: [5, 'Campus zip must to be 5 characters']
    },
    camgeolocation: {
        type: String,
        required: 'Campus geolocation is required',
    },
}, { timestamps: true });

export default mongoose.model('Campus', CampusSchema);