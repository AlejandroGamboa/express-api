import e from "express";

const app = e();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
