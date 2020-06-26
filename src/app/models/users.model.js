const { stringify } = require("querystring");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            Username: String,
            Email: String,
            PhoneNumber: String,
            SkillSets: String,
            Hobby: String,
            CreatedDate: String,
            UpdatedDate: String
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("Users ", schema);
    return User;
};