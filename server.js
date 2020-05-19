const path = require('path');
const express = require('express');
const app = express();

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//if there is a enviroment variable with a port
const PORT = 3000 || process.env.PORT;

//run a server with port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
