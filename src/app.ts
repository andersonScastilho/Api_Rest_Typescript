import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const router = express.Router()

router.get('/', (req,res) => {
    res.json({Hello:'Hello World'})
})

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log('Aplicação iniciada')
})