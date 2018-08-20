/**
 * Created by Andy on 2017-11-15.
 */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//connect to mongodb url
mongoose.connect('');

//connection to mongodb + success msg
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//to send http GET request
router.rout('/issue').get((req, res) =>{
    //mongoose models
    Issue.find((err, issues) => {
        if(err)
            console.log(err);
        else
            res.json(issues);
    })
});
//middleware
app.use('/', router);

app.listen(4000, () => console.log ("Express server running on port 4000"));
