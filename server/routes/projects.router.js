const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/** -------- GETS PROJECTS FROM DATABASE ------- **/
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects"';
    pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
    })
});

/** POSTS NEW PROJECT TO DATABASE AND CONVERTS LANGUAGE NAME TO ID TO BE STORED IN PROJECTS TABLE **/
router.post('/', (req, res) => {
    console.log(req.body);
    const newProject = req.body;
    if (newProject.tag_id === 'React') {
        newProject.tag_id = 1;
    }
    else if (newProject.tag_id === 'jQuery') {
        newProject.tag_id = 2;
    }
    else if (newProject.tag_id === 'Node') {
        newProject.tag_id = 3;
    }
    else if (newProject.tag_id === 'SQL') {
        newProject.tag_id = 4;
    }
    else if (newProject.tag_id === 'Redux') {
        newProject.tag_id = 5;
    }
    else if (newProject.tag_id === 'HTML') {
        newProject.tag_id = 6;
    }
    else {
        newProject.tag_id = null;
    }
//QUERY TEXT INTO PROJECTS DATABASE
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing POST project query', err);
            res.sendStatus(500);
        });
});

/** -------- DELETES PROJECTS FROM DATABASE ON CLICK (admin page) ------- **/
router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM projects WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE projects query', err);
            res.sendStatus(500);
        });
});











module.exports = router;