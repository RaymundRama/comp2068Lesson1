var weather = require('weather-js');

weather.find({search:"L4C 5R9", degreeType:'C'}, function(err, result) {
    if(err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
});
