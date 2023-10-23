import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, //Limit each IP to 10 requests per windowMs
  message: 'Too many requests, please try again later.', //send when request exceeds max
});

app.get("/api/test", limiter, ( req:Request, res:Response ) => {
  res.send("hello world")
})

const PORT = 4000;
app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
});