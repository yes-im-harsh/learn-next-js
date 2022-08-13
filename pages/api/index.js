export default (req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello" }));
};
