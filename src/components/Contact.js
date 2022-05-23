import { useChat } from "../context/ChatContext"

const Contact = (props) => {
	const { first_name, last_name, avatar, id } = props.contact
	const { lastMessage, unreadMessages } = props.previewMessages
	const { changeChat } = useChat()

	return (
		<div className="border-b border-gray-200 p-4 flex cursor-pointer hover:bg-gray-100" onClick={() => changeChat(id)}>
			<div className="flex-auto w-1/4">
				<img className="h-14 w-14 rounded-full bg-blue-200" src={avatar} />
			</div>

			<div className="flex-auto w-3/4 flex items-center flex-wrap">
				<div className={'flex basis-full ' + (unreadMessages > 0 ? 'font-semibold' : '')}>
					<p className="w-5/6">{first_name} {last_name}</p>
					<p className="w-1/6 text-right">{lastMessage.time}</p>
				</div>
				<div className="flex basis-full justify-between">
					<p className="w-5/6 text-slate-500">{lastMessage.content}</p>
					<Badge unreadMessages={unreadMessages} />
				</div>
			</div>

		</div>
	)
}

const Badge = props => {
	if (props.unreadMessages > 0)
		return <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-center pl-px">{props.unreadMessages}</span>
}

export default Contact