import express from 'express';
import bodyParser from 'body-parser';
import './db/conn'
import { UserRoute } from './routes/UserRoutes';
import cors from "cors"


const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/user',UserRoute)


app.get('/hello', (req, res) => {
    res.send('Hello from this side');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
