import express from "express";
import dotenv from "dotenv";
import inventoryRouter from "./routers/inventoryRouter.js";
import { onError } from "./utils/response.js";

dotenv.config();

const app = express();
app.use(express.json());

const host = process.env.HOST;
const port = process.env.PORT;

app.use("/inventories", inventoryRouter);

app.use((err, req, res, next) => {
    onError(res, err.message, 400);
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});