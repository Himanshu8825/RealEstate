import mongoose from "mongoose";

//! Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures usernames are unique
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures emails are unique
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://imgs.search.brave.com/jLTwrBSRPcoyhBJs1uPbMl500isS1N2O0JlI3BLUQoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc'
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

//! Create the User model from the schema
const User = mongoose.model('User', userSchema);

export default User;
