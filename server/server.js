import express from "express";

const app = express();

app.get("/login", (req, res,next) => {
  res.json( {"username": "Noen Andre Person"});
})


app.post( "/login", (req, res, next) => {
  res.sendStatus(401);
})
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`)
});