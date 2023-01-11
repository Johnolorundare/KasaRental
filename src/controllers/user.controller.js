const { Configuration, OpenAIApi, embeddings_utils ,get_embedding, cosine_similarity } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const UserModel = require('../model/user.model');

const handleUpdateProfileImage = async (req, res) => {
    try{
        const { userId, imageUrl } = req.body;
        const user = await UserModel.find({ _id: userId });
        user['profileImage'] = imageUrl;
         console.log(user);
        const updatedUser = await UserModel.replaceOne({ _id: userId }, user);
        return res.status(201).json({
            message: "Profile picture updated",
            success: true,
            updatedUser,
            statusCode: 201
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error,
            statusCode
        });
    }
}
const handleGenerateProfileImage = async (req, res) => {
    try {
        const { prompt, size, n } = req.body;
        const response = await openai.createImage({ prompt, size, n });
        const { data: images } = response.data;

        return res.status(201).json({
            message: "Images generated successfully",
            success: true,
            images,
            statusCode: 201
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error,
            statusCode
        });
    }
}
const handleRegister = async (req, res) => {
    try{
        let newUser = new UserModel(req.body);
        newUser = await newUser.save();
        // return console.log(newUser);
        return res.status(201).json({
            message: "Registration Successful!",
            success: true,
            newUser,
            statusCode: 201
        });
    }catch(error){
        const statusCode = error.code === 11000 ? 409 : 500;
        const message = error.code === 11000 ? "Email already exists" : "Registration unsuccessful!";
        return res.status(statusCode).json({
            message,
            success: false,
            error,
            statusCode
        });
    }

    // const userExists = UserModel.countDocuments({ username });
}

async function handleLogin(req, res){
    try{          
        let { username, password } = req.body;
        username = username.trim();
         
        const user = await UserModel.login(username, password);
        return res.status(200).json({
            message: "Login Successful",
            user,
            statusCode: 200,
            success: true
        });
    }catch(error){
        return res.status(401).json({
            message: "Login Unsuccessful",
            error,
            statusCode: 401,
            success: false
        });
       
    }

}

module.exports = {
    handleRegister,
    handleLogin,
    handleGenerateProfileImage,
    handleUpdateProfileImage
};