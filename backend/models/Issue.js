import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Isssue = new Schema({
   title:{
       type: String
   },
   responsible:{
     type: String
   },
    description:{
       type: String
    },
    severity:{
       type: String
    },
    status:{
       type: String,
        default: 'Open'
    }

});

export default mongoose.model('Issue', Isssue);