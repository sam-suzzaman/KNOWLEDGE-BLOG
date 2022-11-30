const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PeopleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Passowrd is requried"],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            minLength: [20, "Description is too short"],
            maxLength: [200, "Description is too long"],
        },
        avatar: {
            type: String,
        },
        address: {
            type: String,
            trim: true,
        },
        contactNumber: {
            type: String,
            trim: true,
        },
        // socialURL: [{ path: String, name: String }],

        // socialURL: [
        //     {
        //         URLname: { type: String },
        //         URLpath: { type: String },
        //     },
        // ],

        // _id: mongoose.Schema.Types.ObjectId,
        role: {
            type: String,
            enum: ["ADMIN", "AUTHOR", "USER"],
            default: "USER",
        },
    },
    {
        timestamps: true,
    }
);

// Hashing Password
PeopleSchema.pre("save", async function (next) {
    const password = this.password;
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = bcrypt.hashSync(password, salt);
    this.password = hashedPassword;
    next();
});
const PeopleModel = mongoose.model("PeopleCollection", PeopleSchema);

module.exports = PeopleModel;

// ============================================
// const obj = [
//     {
//         URLname: "facebook",
//         URLpath: "http://localhost:2000",
//     },
//     {
//         URLname: "twitter",
//         URLpath: "http://localhost:2000",
//     },
//     {
//         URLname: "github",
//         URLpath: "http://localhost:2000",
//     },
// ];
