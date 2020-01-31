const jwt = require("jsonwebtoken")

const auth = (id) => {
  return jwt.sign({id}, process.env.JWTTOKEN, {
    expiresIn: '12h'
  })
}

module.exports = {
  auth,
}