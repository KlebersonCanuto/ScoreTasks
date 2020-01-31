const User = require("../controller/userController")
const Auth = require("./authentication")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
  try{
    const { username, password } = req.body
    const user = await User.getByUsername(username)
    const id = user.id
    const same = bcrypt.compareSync(password, user.password)
    const token = Auth.auth(id)
    if(same)
      res.status(200).send({auth: true, token: token, username: username})
    else
      res.status(302).send({auth: false})
  } catch(err){
    res.status(400).send({auth: false})
  }
}

module.exports = {
  login,
}