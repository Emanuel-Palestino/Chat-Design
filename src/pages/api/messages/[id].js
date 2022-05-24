import messages from '../../../samples/Messages.json'

export default function handler({ query: { id }}, res) {
	res.status(200).json(messages.find(user => user.id == id))
}
