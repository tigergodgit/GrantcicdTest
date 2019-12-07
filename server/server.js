const app = require("express")();

app.use("/static", express.static(path.join(__dirname, "dist")));

app.listen(9090, () => {
  console.log(`Server is running at port 9090`);
});
