import { Schema, model } from 'mongoose';

const townSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    entity: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Town = model('Towns', townSchena)