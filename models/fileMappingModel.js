const mongoose = require('mongoose')

const FileMappingSchema = mongoose.Schema(
    {
        
        file_mapping_name: {
            type: String,
            required: true
        },
        attribute_list: {
            type: Number,
            required: true,
            default: 0
        },
        createdBy: {
            type: String
        },
        createdOn: {
            type: String
        },
        creationTime: {
            type: String
        },
        changedBy: {
            type: String
        },
        changedOn: {
            type: String
        },
        changedTime: {
            type: String
        },
    }
)
module.exports = mongoose.model('file_mapping',FileMappingSchema, 'FileMappings' );
/* "file_mapping_name": "filemapping1",
    "attribute_list": 0,
    "createdBy": "ABCINCADMIN",
    "createdOn": "2023-02-24T13:41:24.176Z",
    "creationtime": "2023-02-24T13:41:24.176Z",
    "changedby": "ABCD",
    "changedon": "2023-02-24T13:41:24.176Z",
    "changedtime": "2023-02-24T13:41:24.176Z" */