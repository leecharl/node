
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Start server and process the data
app.get('/mail', function(req, res) {
    getWeight(req, res);
})

// Listen to the port
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
})

function getWeight(req, res) {
    var reqUrl = url.parse(req.url, true);


    var mailType = reqUrl.query.mailType;
    var weight = Number(reqUrl.query.weight);

    calculateWeight(res, mailType, weight);
}

function calculateWeight(res, mailType, weight) {
    var result = 0.0;
    switch (mailType) {
        case "Letters (Stamped)":
            if (weight < 1) {
                result = .55;
            } else if (weight < 2) {
                result = .70;
            } else if (weight < 3) {
                result = .85;
            } else if (weight < 3.5) {
                result = 1.00;
            } 
            break;

        case "Letters (Metered)":
            if (weight < 1) {
                result = .50;
            } else if (weight < 2) {
                result = .65;
            } else if (weight < 3) {
                result = .80;
            } else if (weight < 3.5) {
                result = .95;
            } 
            break;

        case "Large Envelopes (Flats)":
            if (weight < 1) {
                result = 1.00;
            } else if (weight < 2) {
                result = 1.15;
            } else if (weight < 3) {
                result = 1.30;
            } else if (weight < 4) {
                result = 1.45;
            } else if (weight < 5) {
                result = 1.60;
            } else if (weight < 6) {
                result = 1.75;
            } else if (weight < 7) {
                result = 1.90;
            } else if (weight < 8) {
                result = 2.05;
            } else if (weight < 9) {
                result = 2.20;
            } else if (weight < 10) {
                result = 2.35;
            } else if (weight < 11) {
                result = 2.50;
            } else if (weight < 12) {
                result = 2.65;
            } else if (weight < 13) {
                result = 2.80;
            } 
            break;

        case "First-Class Package Service—Retail":
            if (weight < 1) {
                result = 3.66;
            } else if (weight < 2) {
                result = 3.66;
            } else if (weight < 3) {
                result = 3.66;
            } else if (weight < 4) {
                result = 3.66;
            } else if (weight < 5) {
                result = 4.39;
            } else if (weight < 6) {
                result = 4.39;
            } else if (weight < 7) {
                result = 4.39;
            } else if (weight < 8) {
                result = 4.39;
            } else if (weight < 9) {
                result = 5.19;
            } else if (weight < 10) {
                result = 5.19;
            } else if (weight < 11) {
                result = 5.19;
            } else if (weight < 12) {
                result = 5.19;
            } else if (weight < 13) {
                result = 5
                71;
            } 
            break;
    }
    
    var result = result.toString();
    var params = {mailType: mailType, weight: weight, cost: result};

    res.render('pages/results', params);
}