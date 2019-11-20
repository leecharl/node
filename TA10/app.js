const express = require('express')
const path = require('path')
const { Pool } = require('pg')
const pool = new Pool({connectionString: "postgres://postgres:Homer4pres!@localhost:5432/postgres"})

const port = 5000

express().use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.get('/getPerson', (req, res) => {
    const id = req.query.id
    pool.query("SELECT * from person where person_id = $1",[id],(error, results) => {
        if (error){
            throw error
        }
        console.log(results.rows[0].first_name)
        res.status(200).json(results.rows)
        
    })
}).listen(port, () => console.log('Server is listening on port ' + port))

[
    {
    "person_id": 1,
    "first_name": "Aaron",
    "last_name": "Lee",
    "dob": "1982-07-26T06:00:00.000Z"
    }
    ]
