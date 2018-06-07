import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const BookSchema = new Schema({
    id_library: {
        type: String,
        required: 'Book id_library is required',
    },
    id_category: {
        type: String,
        required: 'Book id_category is required',
    },
    bname: {
        type: String,
        required: 'Book name is required',
        unique: true,
        minlength: [3, 'Book name must be longer that 3 characters'],
        maxlength: [250, 'Book name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    bdescription: {
        type: String,
        minlength: [3, 'Book description must be longer that 3 characters'],
        maxlength: [500, 'Book description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    byear: {
        type: String,
        required: 'Book year is required',
        minlength: [4, 'Book year must be longer that 4 characters'],
        maxlength: [4, 'Book year is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    bauthor: {
        type: String,
        required: 'Book author is required',
        minlength: [3, 'Book author must be longer that 3 characters'],
        maxlength: [100, 'Book author is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    bprice: {
        type: Number,
        required: 'Book price is required',
        min: [1, 'Book price must be longer that 1 character'],
        max: [5, 'Book price is very longer'], //! checar longitud
        validate: [validators.isLength(1, 5), validators.isFloat()]
    },
    beditorial: {
        type: String,
        required: 'Book editorial is required',
        minlength: [3, 'Book editorial must be longer that 3 characters'],
        maxlength: [100, 'Book editorial is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    bnumberedition: {
        type: String,
        required: 'Book number edition is required',
        minlength: [1, 'Book number edition must be longer that 1 character'],
        maxlength: [3, 'Book number edition is very longer'],
        validate: [validators.isLength(1, 3)]
    },
    bpages: {
        type: Number,
        required: 'Book pages is required',
        min: [2, 'Book pages must be longer that 2 characters'],
        max: [5, 'Book pages is very longer'],
        validate: [validators.isLength(2, 5), validators.isNumeric()]
    },
    bquantitystock: {
        type: Number,
        required: 'Book quantity stock is required',
        min: [1, 'Book quantity stock must be longer that 1 character'],
        validate: [validators.isNumeric()]
    },
    bisenabled: {
        type: Boolean,
        required: 'Book isenabled is required',
        default: false
    },
    bregisteredbyuser: {
        type: String,
        required: 'Book registeredbyuser is required'
    },
    bupdatedbyuser: {
        type: String,
    },
    bdeletedbyuser: {
        type: String,
    },
    bdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);