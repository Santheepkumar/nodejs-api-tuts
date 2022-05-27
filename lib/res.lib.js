function formatResponse(res, data, status) {
  res.type("json").status(status).send(JSON.stringify(data, null, 2, "\n"));
}

export { formatResponse };
