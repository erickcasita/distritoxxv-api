import { Schema, model } from 'mongoose';

const statesSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const States = model('States', statesSchena)