const express = require("express");
const path = require("path");
const pokemonRoute = require("./route/pokemon");
const matchRoute = require("./route/matches");


const app = express();

const cors = require('cors')

app.use(cors({origin:"*", optionsSuccessStatus: 200}))

app.use("/pokemon", pokemonRoute )
app.use('/matches', matchRoute);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`server started on port${PORT}`));

