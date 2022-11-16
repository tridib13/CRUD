import express, {Request, Response} from 'express';
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Listening on Port 5000')
}) 