const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve validation key
app.get('/validation-key.txt', (req, res) => {
    res.type('text/plain');
    res.send('cefc3ac44cdbbea470881534ced3b575e61706a7310cd2a60fc242553d9a198c8588944b7df8352ac4806bb89f8584b86c439bd1fcbb1c789e154ce3cb3dc73f');
});

// Serve frontend (optional)
app.use(express.static('../../frontend/build'));

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
