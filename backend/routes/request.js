const express = require('express');
const router = express.Router();
const hostname = "localhost";
const port = 3000;

const app = express();

let films = [{
    name: "Avatar",
    id: "0"
}];

router.get('/', (req, res)=> {
    res.status(200).json({films});
});

router.get('/:id', (req, res) => {
    const{id} = req.params;
    const films = _.find(films, ["id", id]);
    res.status(200).json({
        message: 'User found',
        user
    });
});

router.put('/', (req, res) => {
    const{films} = req.body;
    const id = _.uniqueId();
    films.push({user, id});
    res.json({
        message: 'Just added ${id}',
        user: {user, id}
    });
});

