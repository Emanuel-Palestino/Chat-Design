import Contact from "./Contact"

const ContactsList = props => {
	return (
		<div className="h-full w-1/3 rounded-3xl bg-white p-4" >
			<h3 className="text-2xl text-center mb-2">Contacts</h3>
			<div>
				{
					props.contacts.map(contact => (
						<Contact contact={contact} previewMessages={props.previewMessages.find(msg => msg.id === contact.id)} key={contact.id} />
					))
				}
			</div>
		</div>
	)
}

export default ContactsList