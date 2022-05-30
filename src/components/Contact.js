import { useChat } from "../context/ChatContext"

const Contact = props => {
	const { first_name, last_name, avatar, id } = props.contact
	const { changeChat, changeContact, changeMessages, previewMessages, changePreview } = useChat()
	const { lastMessage, unreadMessages } = previewMessages.find(msg => msg.id === id)

	const showChat = async id => {
		// Get message from contact id
		const res = await fetch(`http://localhost:3000/api/messages/${id}`)
		const data = await res.json()
		changeChat(data)
		changeMessages(data.messages)
		changeContact(props.contact)

		// Mark messages as read
		previewMessages.find(msg => msg.id === id).unreadMessages = 0
		changePreview(previewMessages)
	}

	return (
		<div className="cursor-pointer select-none border-b border-gray-200 p-4 flex hover:bg-gray-100" onClick={() => showChat(id)}>
			<div className="w-1/4">
				<img className="h-14 w-14 rounded-full" src={avatar} />
			</div>

			<div className="w-3/4 flex items-center flex-wrap">
				<div className={'flex basis-full ' + (unreadMessages > 0 ? 'font-semibold' : '')}>
					<p className="w-5/6">{first_name} {last_name}</p>
					<p className="w-1/6 text-right">{lastMessage.time}</p>
				</div>
				<div className="flex basis-full justify-between">
					<p className="w-5/6 text-slate-500">{(lastMessage.me ? 'you: ' : '') + lastMessage.content}</p>
					<Badge unreadMessages={unreadMessages} />
				</div>
			</div>

		</div>
	)
}

const Badge = props => {
	if (props.unreadMessages > 0)
		return <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-center">{props.unreadMessages}</span>
}

export default Contact