import { Schema, model } from 'mongoose';

const entitySchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Entity = model('Entities', entitySchena)