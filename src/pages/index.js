import ContactsList from "../components/ContactsList"
import Chat from "../components/Chat"

const Index = ({ contacts }) => {
	return (
		<div className="w-full h-screen bg-indigo-100 p-6 flex gap-6" >
			<ContactsList contacts={contacts} />
			<Chat />
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://reqres.in/api/users?page=1`)
	const data = await res.json()
	const messages = await fetch('http://localhost:3000/api/previewMessages')
	const unread = await messages.json()
	return { props: { contacts: data.data, previewMessages: unread.previewMessages } }
}

export default Index