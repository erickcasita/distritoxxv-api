import { Schema, model } from 'mongoose';

const municipalitiesSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    clvestado: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Municipalities = model('Municipalities', municipalitiesSchena)