import { useChat } from "../context/ChatContext"
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa'

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
			<div className="w-full flex" >
				<div className="basis-20">
					<img className="h-16 w-16 rounded-full bg-blue-200" src="#" />
				</div>
				<div className="grow text-xl flex items-center">Contact Name</div>
			</div>
			<div className="w-full overflow-y-auto" style={{ height: 'calc(100% - 3rem - 4rem)' }}>
				<div className="float-right w-fit max-w-[65%] min-h-[56px] bg-violet-700 p-5 rounded-l-xl rounded-b-xl text-white mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje que yo envío
					<div className="w-full text-gray-200 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>
				<div className="float-right w-fit max-w-[65%] min-h-[56px] bg-violet-700 p-5 rounded-l-xl rounded-b-xl text-white mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje que yo envío
					<div className="w-full text-gray-200 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>
				<div className="float-right w-fit max-w-[65%] min-h-[56px] bg-violet-700 p-5 rounded-l-xl rounded-b-xl text-white mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje que yo envío
					<div className="w-full text-gray-200 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>

				<div className="float-left w-fit max-w-[65%] min-h-[56px] bg-gray-200 p-5 rounded-r-xl rounded-b-xl text-gray-700 mb-2">
					esto es un mensaje de prueba a ver qué pasa con el div. Este es un mensaje de la otra persona.
					<div className="w-full text-gray-500 text-xs text-right">00:00</div>
				</div>
			</div>
			<div className="w-full h-12 flex justify-around">
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

export default Chat