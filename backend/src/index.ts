import express, {Request, Response} from 'express';
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.get('/', (_: Request, res: Response) => {
    res.json({
        user: 1,
        password: 'password'
    })
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})