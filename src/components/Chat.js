import { useChat } from "../context/ChatContext"
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa'

const Chat = () => {
	const { chat, contact } = useChat()

	if (chat.id == undefined) {
		return (
			<div className="h-full w-2/3 rounded-3xl bg-white p-6 flex justify-center items-center" >
				<p className="text-3xl text-slate-500">Select a contact to start messaging</p>
			</div>

		)
	}

	return (
		<div className="h-full w-2/3 rounded-3xl bg-white p-6 flex flex-col gap-2">
			<div className="flex">
				<div className="basis-20">
					<img className="h-16 w-16 rounded-full bg-blue-200" src={contact.avatar} />
				</div>
				<div className="grow text-xl flex items-center">{contact.first_name} {contact.last_name}</div>
			</div>

			<Messages messages={chat.messages} />

			<div className="h-12 flex justify-around">
				<form id="message" className="w-11/12">
					<div className="bg-gray-200 h-12 w-full rounded-3xl flex justify-between">
						<a className="w-12 h-12 rounded-full text-gray-500 flex items-center text-2xl p-[11px] cursor-pointer">
							<FaSmile />
						</a>
						<input type="text" className="h-12 outline-none grow bg-gray-200" />
						<a className="w-12 h-12 rounded-full text-gray-500 flex items-center text-2xl p-[11px] cursor-pointer">
							<FaPaperclip />
						</a>
					</div>
				</form>
				<button form="message" className="rounded-full bg-emerald-500 w-12 h-12 p-[11px] flex items-center text-2xl text-white">
					<FaPaperPlane />
				</button>
			</div>
		</div>
	)
}

const Messages = props => {
	return (
		<div className="grow overflow-y-auto flex flex-col gap-2">
			{
				props.messages.map((message, i) => {
					message.readed = true
					return (
						<div key={i} className={(message.me ? 'self-end bg-violet-700 rounded-l-xl text-white ' : 'self-start bg-gray-200 rounded-r-xl text-gray-700 ') + 'w-fit max-w-[65%] min-h-[56px] rounded-b-xl p-5'}>
							{message.content}
							<div className={(message.me ? 'text-gray-200 ' : 'text-gray-500 ') + 'w-full text-xs text-right'}>{message.time}</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Chat