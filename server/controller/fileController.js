const db = require('../models/animeModel.js');
const fileController = {};

fileController.getManga = (req, res, next) => {
    const text = 'SELECT _id as id, title, thumbnail FROM manga';

    db.query(text, (error, data) => {
        if(error) throw error;
        res.locals.manga = data.rows;
        next();
    });
}


fileController.getAnime = (req, res, next) => {
    const text = 'SELECT _id as id, title, thumbnail FROM anime';

    db.query(text, (error, data) => {
        if(error) throw error;
        res.locals.anime = data.rows;
        next();
    });
}

fileController.infoForAnime = (req, res, next) => {
    const text = 'SELECT * FROM anime WHERE _id=$1';

    const { id } = req.params;

    db.query(text, [id], (error, data) => {
        if(error) throw error;

        res.locals.info = data.rows[0];
        next();
    })
}

fileController.infoForManga = (req, res, next) => {
    const text = 'SELECT * FROM manga WHERE _id=$1';

    const { id } = req.params;

    db.query(text, [id], (error, data) => {
        if(error) throw error;

        res.locals.info = data.rows[0];
        next();
    })
}

module.exports = fileController;

// CREATE TABLE account(
//     user_id serial PRIMARY KEY,
//     username VARCHAR (50) UNIQUE NOT NULL,
//     password VARCHAR (50) NOT NULL,
//     email VARCHAR (355) UNIQUE NOT NULL,
//     created_on TIMESTAMP NOT NULL,
//     last_login TIMESTAMP
//  );

/*

CREATE TABLE status(
    _id serial PRIMARY KEY,
    status VARCHAR(16) NOT NULL
)


CREATE TABLE genre(
    _id serial PRIMARY KEY,
    genre_name VARCHAR(32) NOT NULL
)

CREATE TABLE anime (
    _id serial PRIMARY KEY,
    title VARCHAR(128) UNIQUE NOT NULL,
    description TEXT,
    episodes INTEGER NOT NULL DEFAULT 0,
    start_date DATE NULL, 
    end_date DATE NULL,
    status INTEGER NOT NULL,  
    thumbnail VARCHAR,
    studio VARCHAR(50) NOT NULL,
    FOREIGN KEY (status) REFERENCES status (_id)
)


CREATE TABLE anime_genre(
    _id serial PRIMARY KEY,
    anime_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    FOREIGN KEY (anime_id) REFERENCES anime (id)
    FOREIGN KEY (genre_id)  REFERENCES genre (id)
)

CREATE TABLE manga(
    _id serial PRIMARY KEY,
    title VARCHAR (50) UNIQUE NOT NULL,
    description TEXT,
    chapters NUMBER NOT NULL DEFAULT 0,
    start_date DATE NULL,
    end_date DATE NULL, 
    status INTEGER,
    thumbnail VARCHAR,
    author VARCHAR(128) NOT NULL,
    FOREIGN KEY (status) REFERENCES status (_id)
)

CREATE TABLE manga_genre(
    _id serial PRIMARY KEY,
    manga_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    FOREIGN KEY (anime_id) REFERENCES manga (id)
    FOREIGN KEY (genre_id)  REFERENCES genre (id)
)
*/