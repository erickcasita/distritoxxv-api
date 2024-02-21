import { Schema, model } from 'mongoose';

const affiliationSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    },
    entity: {
        type: String,
        required: true,
        trim: true
    },
    town: {
        type: String,
        required: true,
        trim: true
    },
    postcode: {
        type: Number,
        required: true
    },
    secction_vote: {
        type: Number
    },
    phone_number: {
        type: Number

    },
    address_home: {
        type: String,
        required: true,
        trim: true
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Affiliations = model('Affiliations', affiliationSchena)