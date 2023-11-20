import express, {
    Express,
    Request,
    Response,
    Errback,
    NextFunction
} from "express";
import 'dotenv/config';
import mongoose from 'mongoose';
import PostRouter from "./routers/postRouter";
import fileUpload from "express-fileupload"

const app: Express = express();
const port = process.env.PORT || 7000;

const errorHandler = (err:Errback, req: Request, res: Response, next: NextFunction) =>{
    res.status(500);
    res.render('error', { error: err });
    next()
}

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/posts', PostRouter)
app.use(errorHandler)

app.get('/', (req: Request, res: Response) => {
    res.json('Express + TypeScript Server!)');
});

app.post('/', (req: Request, res: Response) => {
    const  {lala} = req.body
    res.status(200).json(`Вы отправили следующие данные: ${lala}`)
} )

const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL as string)
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    } catch (e) {
        console.log('Something went wrong: ' + e)
    }
}

startServer()