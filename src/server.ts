import express, { request, response } from 'express'
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.post("/courses", (request, response) => {
    const { name } = request.body
    return response.json({ name })
})
app.use("/categories", categoriesRoutes);
app.listen(3333, () => console.log("server is running!"));