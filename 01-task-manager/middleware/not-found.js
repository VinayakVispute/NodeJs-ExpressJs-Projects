const notFound = (req, res) => res.status(404).send("Route Doesnt Exist");

module.exports = notFound;
