module.exports = mongoose => {

    const Login = mongoose.model(
        "login",
        mongoose.Schema({
            auth_uuid: String,

        },
            {
                timestamps: true
            })
    );
    return Login;

};
