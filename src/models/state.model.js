import { Schema, model } from 'mongoose';

const stateSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const State = model('States', stateSchena)