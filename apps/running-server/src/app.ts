import { Run, GetRunsResponse } from "shared-api-models/src/models";
import express from "express";

const app = express();
const port = 3001;
let runs = [
  {
    id: 0,
    paceInMS: 100,
    distance: 5.3,
    timeInMS: 100,
    date: new Date().toISOString(),
    name: "Run 1",
  } as Run,

  {
    id: 1,
    paceInMS: 100,
    distance: 5.3,
    timeInMS: 100,
    date: new Date().toISOString(),
    name: "Run 2",
  } as Run,
  {
    id: 2,
    paceInMS: 100,
    distance: 5.3,
    timeInMS: 100,
    date: new Date().toISOString(),
    name: "Run 3",
  } as Run,
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/runs", (req, res) => {
  const returnObject = {
    runs: runs,
  } as GetRunsResponse;
  console.log("loading runs");
  res.json({ runs: runs });
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is running on ${port}`);
});
