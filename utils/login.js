const User = require("../controller/userController")
const Auth = require("./authentication")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
  try{
    const { email, password } = req.body
    const user = await User.getByEmail(email)
    const id = user.id
    const same = bcrypt.compareSync(password, user.password)
    const token = Auth.auth(id)
    if(same)
      res.status(200).send({auth: true, token: token})
    else
      res.status(302).send({auth: false})
  } catch(err){
    res.status(400).send({auth: false})
  }
}

const getData = async (req, res) => {
  try{
    const id = Auth.getUser(req)
    const user = await User.getById(id)
    res.status(200).send(user)
  } catch(err){
    res.status(400).send()
  }
}

const isValid = (req, res) => {
  try{
    const valid = Auth.isValid(req)
    res.status(200).send({valid})
  } catch(err){
    res.status(200).send({valid: false})
  }
}

module.exports = {
  login,
  isValid,
  getData
}