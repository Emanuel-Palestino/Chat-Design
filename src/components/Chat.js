import Messages from "./Messages"
import { useChat } from "../context/ChatContext"
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa'
import { useEffect } from "react"

const Chat = () => {
	useEffect(() => {
		document.getElementById(chatMessages.length - 1)?.scrollIntoView(false)
	})

	const { contact, chatMessages, changeMessages } = useChat()

	if (chatMessages.length == 0) {
		return (
			<div className="h-full w-2/3 rounded-3xl bg-white p-6 flex justify-center items-center" >
				<p className="text-3xl text-slate-500">Select a contact to start messaging</p>
			</div>
		)
	}

	const sendMessage = e => {
		e.preventDefault()
		let form = document.getElementById('new-message')
		let data = new FormData(form)
		let date = new Date()
		const newMessage = {
			date: `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`,
			time: date.toTimeString().slice(0, 5),
			content: data.get('message'),
			readed: false,
			me: true
		}

		changeMessages([...chatMessages, newMessage])
	}

	return (
		<div className="h-full w-2/3 rounded-3xl bg-white p-6 flex flex-col gap-2">
			<div className="flex">
				<div className="basis-20">
					<img className="h-16 w-16 rounded-full bg-blue-200" src={contact.avatar} />
				</div>
				<div className="grow text-xl flex items-center">{contact.first_name} {contact.last_name}</div>
			</div>

			<Messages messages={chatMessages} />

			<div className="h-12 flex justify-around">
				<form id="new-message" onSubmit={sendMessage} className="w-11/12">
					<div className="bg-gray-200 h-12 w-full rounded-3xl flex justify-between">
						<a className="w-12 h-12 rounded-full text-gray-500 flex items-center text-2xl p-[11px] cursor-pointer">
							<FaSmile />
						</a>
						<input type="text" className="h-12 outline-none grow bg-gray-200" name="message" autoComplete="off" />
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

export default Chat