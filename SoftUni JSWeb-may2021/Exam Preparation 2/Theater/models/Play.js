const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: { type: String, required: [true, 'Please enter Title'] },
    description: { type: String, required: [true, 'Write description'], maxLength: [50, 'Description must be max 50 chars!'] },
    imageUrl: { type: String, required: [true, 'Add image please'] },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Play', schema);