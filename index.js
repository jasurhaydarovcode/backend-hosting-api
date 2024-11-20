const app = require('./app');
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`\nAPI server running at http://localhost:${port}\n`);
});
