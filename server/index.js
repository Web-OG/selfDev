import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import UserRouter from './routers/userRouter/index.js';
import PostRouter from './routers/postRouter/index.js';
import ProfileRouter from './routers/profileRouter/index.js';

const ONE_WEEK_IN_MILLISECONDS = 604800000;

const app = express();
const port = process.env.PORT || 7000;

const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({error: err});
  next();
};
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(session(
  {
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: ONE_WEEK_IN_MILLISECONDS
    },
    store: MongoStore.create({mongoUrl: process.env.DB_URL})
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('static'));
app.use(fileUpload({}));

app.use('/user', UserRouter);
app.use('/posts', PostRouter);
app.use('/profile', ProfileRouter);

app.use(errorHandler);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (e) {
    console.log('🤬 Something went wrong: ' + e);
  }
};

startServer();