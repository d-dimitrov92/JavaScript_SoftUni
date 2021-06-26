const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: { type: String, required: [true, 'Enter Title'], minLength: [4, 'Title must be min 4 chars'] },
    description: { type: String, required: [true, 'Please enter description'], minLength: [20, 'Description must be min 20 chars'], maxLength: [50, 'Description cannot be more than 50 chars'] },
    imageUrl: { type: String, required: [true, 'Enter image URL'], match: [/^https?/, 'Image must be a valid URL' ] },
    duration: { type: String, required: [true, 'Enter duration'] },
    createdAt: { type: Date, default: Date.now },
    usersEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Course', schema);