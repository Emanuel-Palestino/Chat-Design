const Messages = props => {
	return (
		<div className="grow overflow-y-auto flex flex-col gap-2">
			{
				props.messages.map((message, i) => {
					message.readed = true
					return (
						<div id={i} key={i} className={(message.me ? 'self-end bg-violet-700 rounded-l-xl text-white ' : 'self-start bg-gray-200 rounded-r-xl text-gray-700 ') + 'w-fit max-w-[65%] rounded-b-xl p-5'}>
							{message.content}
							<div className={(message.me ? 'text-gray-200 ' : 'text-gray-500 ') + 'w-full text-xs text-right'}>{message.time}</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Messages