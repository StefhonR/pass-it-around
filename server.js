const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send(`
        <h1>99 Apostles of <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMD0BOUwkVHG-S0zQmDbRbuYKBQQYNTf4GpRT277b4Ads1wfciZO7P2MBSi5OHCpi46M&usqp=CAU" alt="He who sees" style="width: 100px; border-radius: 05%;"/> watching...</h1>
        <a href='/98'>appease them with a lil jig</a>
        `);
});

app.get('/0', function(req, res) {
    res.send(`<a href='/'>Start over</a>`)
})

app.get('/:number_of_bottles', function(req, res) {
    res.send(`
        <h1>${req.params.number_of_bottles} Apostles of <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMD0BOUwkVHG-S0zQmDbRbuYKBQQYNTf4GpRT277b4Ads1wfciZO7P2MBSi5OHCpi46M&usqp=CAU" alt="He who sees" style="width: 100px; border-radius: 05%;"/> watching...</h1>
        <a href=${req.params.number_of_bottles - 1}>appease them with a lil jig</a>
        `)
})


app.listen(3000, function () {
    console.log('Listening on port 3000');
});

