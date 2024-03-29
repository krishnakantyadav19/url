const mongooose = require('mongoose');
const shortId = require('shortid')
//asdfasdfawefasgsdfgaergF

const shortUrlSchema = new mongooose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongooose.model('shortUrl', shortUrlSchema)