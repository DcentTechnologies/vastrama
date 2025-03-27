import express from 'node:express';

const app = express();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
    });