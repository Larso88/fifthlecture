import express from "express";

const app = express();

app.get("/login", (req, res,next) => {
  res.json( {"username": "Noen Andre Person"})
})

app.listen(3000);