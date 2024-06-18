import express from 'express';
import connectDB from './src/db/mongoConnection.js';
import corsMiddleware from './src/middlewares/corsMiddlewares.js';
import router from './src/routing/index.js';

try {
    const app = express();
    await connectDB();
    
    app.use(express.json());
    app.use(corsMiddleware);
    app.use('/api',router);
     
    const port = process.env.PORT || 5000
    app.listen(port,() => console.log("el servidor esta escuchando"))
} catch (error) {
    console.error('el servidor esta webon', error);
}

