import Contact from "./Contact"

const ContactsList = () => {
	return (
		<div className="h-full w-1/3 rounded-3xl bg-white p-4" >
			<h3 className="text-2xl text-center mb-2">Contacts</h3>
			<div>
				<Contact />
			</div>
		</div>
	)
}

export default ContactsList