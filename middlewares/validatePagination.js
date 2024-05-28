export const validatePagination = (req, res, next) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const page = req.query.page ? parseInt(req.query.page) : null;

  if ((limit !== null && isNaN(limit)) || (page !== null && isNaN(page))) {
    return res
      .status(400)
      .json({ error: "Los parámetros limit y page deben ser números." });
  }

  if ((limit !== null && limit <= 0) || (page !== null && page <= 0)) {
    return res
      .status(400)
      .json({ error: "Los parámetros limit y page deben ser mayores a cero." });
  }

  next();
};
