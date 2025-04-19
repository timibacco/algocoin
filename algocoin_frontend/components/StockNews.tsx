import express, { Request, NextFunction, json } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001; // You can change the port if needed

app.use(cors());

app.use((req: Request, res: any, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/tiingo/test', async (req: any, res: any) => {
    try {
        const response = await axios.get(`https://api.tiingo.com/api/test?token=${process.env.TIINGO_API_KEY}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Tiingo API' });
    }
});

app.get('/api/tiingo/news', async (req: any, res: any) => {
    const { symbol } = req.query;
    try {
        const response = await axios.get(`https://api.tiingo.com/tiingo/news?tickers=${symbol}&token=${process.env.TIINGO_API_KEY}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news from Tiingo API' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});