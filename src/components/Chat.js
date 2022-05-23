import { useChat } from "../context/ChatContext"

const Chat = () => {
	const { chat } = useChat()

	if (chat.id == undefined) {
		return (
			<div className="h-full w-2/3 rounded-3xl bg-white p-6 flex justify-center items-center" >
				<p className="text-3xl text-slate-500">Select a contact to start messaging</p>
			</div>

		)
	}

	return (
		<div className="h-full w-2/3 rounded-3xl bg-white p-6" >
			<h1>{chat.id}</h1>
		</div>
	)
}

export default Chat