import { createServer } from 'http';
import fetch from 'node-fetch';

const appServer = createServer((req, res) => {
    if (req.url === "/asteroids"){
        fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-04&end_date=2023-07-07&api_key=DEMO_KEY')
        .then(res =>res.json())
        .then(data => {
            const ast = data.near_earth_objects['2023-07-08'];
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(`<h2>Asteroides</h2>`)
            ast.forEach(asteroid => {
                res.write(`<h3>${asteroid.name}</h3>`)
                res.write(`<p>Diametro: ${asteroid.estimated_diameter.meters.estimated_diameter_max} meters</p>`)
                res.write(`<p>Fecha de aproximacion mas cercana: ${asteroid.close_approach_data[0].close_approach_date_full}</p>`);
                res.write(`<p>Velocidad relativa: ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>`);
                res.write(`<p>Distancia de la tierra: ${asteroid.close_approach_data[0].miss_distance.kilometers} km</p>`);
                res.write('<hr>');
            });
            res.end();
        });

    };
});





const config = {
    hostname: "127.6.16.15",
    port:4000
};

appServer.listen(config,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
});