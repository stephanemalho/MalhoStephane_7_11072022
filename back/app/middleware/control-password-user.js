const schemaPassword = require("../models/password");

module.exports = (req,res,next) => {
  if(!schemaPassword.validate(req.body.password)) {
    return res.status(400).json({ error: "Erreur de mot de passe " + schemaPassword.validate(req.body.password, { list: true }) });  }
  else {
    next();
  }
}

