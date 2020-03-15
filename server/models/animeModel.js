const { Pool } = require('pg');
const PG_URI = 'postgres://xoeikvmc:sXfwyjBfIIZe33SURhgPnDfC6KYF6JHR@drona.db.elephantsql.com:5432/xoeikvmc';

const pool  = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}