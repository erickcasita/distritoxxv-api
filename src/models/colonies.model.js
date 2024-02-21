import { Schema, model } from 'mongoose';

const coloniesSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cdgpostal: {
        type: Number,
        required: true
    },
    clvmunicipio: {
        type: String,
        required: true
    },
    clvestado: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Colonies = model('Colonies', coloniesSchena)