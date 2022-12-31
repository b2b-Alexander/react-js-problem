const express = require('express');

const app = express();
app.enable('trust proxy');
const PORT = 4000;

app.get('/test', (req, res) => { res.json({test: "API returns data from /test url without any problems"}) });
app.get('*', (req, res) => { res.json({any: "API returns data without any problems"}) });

app.listen(PORT, () =>
  console.log(`Main API server is listening on port ${PORT}`)
);