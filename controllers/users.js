const data = require('../data/index')
const newUser = require('../data/sampleUser')

const listUsers = (req, res) => {
  try{
    res.json(data)
  }catch(error){
    res.status(404).json({ error: error.message })
  }
}

const showUser = (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const user = data.find(user => user.id === id)
    if(!user) throw new Error('User not found')
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: 'User not found' })
  }
}

const createUser = (req, res) => {
  try {
    newUser.id = data.length + 1
    data.push(newUser)
    res.json(newUser)
    if(!newUser) throw new Error('User not created')
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}

const updateUser = (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const user = data.find(user => user.id === id)
    user.name = newUser.name
    res.json(user)
    if(!user) throw new Error('User not found')
  } catch (error) {
    res.status(400).json({ error: 'User not found' })
  }
}

const deleteUser = (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const user = data.find(user => user.id === id)
    if(!user) throw new Error('User not found')
    const index = data.indexOf(user)
    data.splice(index, 1)
    res.json(user)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }