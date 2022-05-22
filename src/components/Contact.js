const Contact = (props) => {
	const { first_name, last_name, avatar } = props.contact

	return (
		<div className="border-b border-gray-200 p-2 flex cursor-pointer hover:bg-gray-100">
			<div className="flex-auto w-1/4">
				<img className="h-14 w-14 rounded-full bg-blue-200" src={avatar} />
			</div>

			<div className="flex-auto w-3/4 flex items-center flex-wrap">
				<div className="flex basis-full">
					<p className="w-5/6 font-semibold">{first_name} {last_name}</p>
					<p className="w-1/6 text-right font-semibold">00:00</p>
				</div>
				<div className="flex basis-full justify-between">
					<p className="w-5/6 text-slate-500">Last message</p>
					<span className="w-6 h-6 rounded-full bg-amber-500 text-white text-center pl-px">0</span>
				</div>
			</div>

		</div>
	)
}

export default Contact