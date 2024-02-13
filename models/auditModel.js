const mongoose = require('mongoose')

const AuditModelSchema = mongoose.Schema(
    {   
        type: {
            type: String
        },
        filePath: {
            type: String,
            required: true,
            default: ''
        },
        fileName: {
            type: String,
            required: true,
            default: ''
        },
        file_mapping_name: {
            type: String,
            required: true
        },
        createdBy: {
            type: String
        },
        createdOn: {
            type: String
        },
        creationTime: {
            type: String
        }
    }
)
module.exports = mongoose.model('auditing',AuditModelSchema, 'Audit_Model' );