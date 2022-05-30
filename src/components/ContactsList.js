import Contact from "./Contact"

const ContactsList = props => {
	return (
		<div className="h-full w-1/3 rounded-3xl bg-white p-6 flex flex-col gap-2" >
			<h3 className="text-3xl text-center">Contacts</h3>
			<div className="overflow-y-auto">
				{
					props.contacts.map(contact => (
						<Contact contact={contact} key={contact.id} />
					))
				}
			</div>
		</div>
	)
}

export default ContactsList