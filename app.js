import express from 'express';

const app = express();
const PORT = 8081

app.get('/', (req, res)=>{
    res.send('Hello');
});

app.listen(PORT, ()=>{
    console.log('server listening at', PORT);
})