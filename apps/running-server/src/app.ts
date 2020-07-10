import express from "express";

const app = express();
const port = 3001;

app.get("/api/runs", (req, res) => {
  const runs = [
    {
      id: 0,
      paceInMS: 100,
      distance: 5.3,
      timeInMS: 100,
      date: new Date().toISOString(),
      name: "Run",
    },
  ];
  res.json({ runs: runs });
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is running on ${port}`);
});
