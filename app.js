import express, { json } from 'express';
import { config } from 'dotenv';
import schoolRoutes from './routes/schoolRoutes.js';

const app = express();
config();
app.use(json());

app.use('/api/schools', schoolRoutes);
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
