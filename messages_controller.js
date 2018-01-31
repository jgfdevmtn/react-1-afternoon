const messages = []

const id = 0

const create = (req, res, next) => {
	const { text, time } = req.body
	messages.push({id, text, time})
	id++
	res.status(200).send( messages );
}

const update = (req, res) => {
	const { text } = req.body
	const updateID = req.params.id
	const messageIndex = messages.findIndex( message => message.id == updateID)
	let message = messages[messageIndex]
}

const read = (req, res) => {
	return res.send(messages) 
}

const del = (req, res, next) => {
	const id = req.params.id;
	messageIndex = messages.findIndex(message => message.id == deleteID)
	messages.splie(messageIndex, 1)
	res.send(messges)
}


module.exports = {
	create,
	read,
	update,
	del
}


