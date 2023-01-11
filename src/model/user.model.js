const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        default: 'none'
    },
    profileImage: {
        type: String,
        default: 'none'
    },
    password: {
        type: String,
        requried: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


userSchema.statics.login = async function(username, password){
    const user = await this.findOne({username});
    if (user){       
        const auth = await bcrypt.compare(password, user.password);

        if (auth){ 
            return user;
        }
        throw Error ('incorrect password');
    }

    throw Error ('incorrect username')
}



module.exports = model("User", userSchema);