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
mongoose.connect('mongodb://localhost:27017/issues', { useNewUrlParser: true });

//connection to mongodb + success msg
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//to send http GET request
router.route('/issues').get((req, res) =>{
    //mongoose models
    Issue.find((err, issues) => {
        if(err)
            console.log(err);
        else
            res.json(issues);
    })
});

//any url link after route issue is the id
router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if(err)
            console.log(err)
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to add new data')
        })
});
router.route('/issues/update/:id').post((req, res) => {
   Issue.findById(req.params.id, (err, issue) => {
       if(!issue)
           return next(new Error('Could not load document'));
       else{
           issue.title = req.body.responsible;
           issue.description = req.body.description;
           issue.severity = req.body.severity;
           issue.status = req.body.status;

           //store in db as we update
           issue.save().then(issue => {
               res.json('Update done')
           }).catch(err => {
               res.status(400).send('Update failed');
           });
       }
   });
});

router.route('issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if(err)
            res.json(err);
        else res.json('Remove successfully');
    });
});

//middleware
app.use('/', router);

app.listen(4000, () => console.log ("Express server running on port 4000"));
