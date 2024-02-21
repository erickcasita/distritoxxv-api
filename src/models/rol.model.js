import { Schema, model } from 'mongoose';

const rolSchena = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export const Rol = model('Roles', rolSchena)