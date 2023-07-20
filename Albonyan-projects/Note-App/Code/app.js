import express from 'express';
// Posts
const app = express();

import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';


import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

// db
import connectDB from "./db/connect.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

// middlewares
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import notFoundMiddleware from "./middlewares/not-found.js";

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', notesRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        });
    } catch (err) {
        console.log(err);
    }
}

start();