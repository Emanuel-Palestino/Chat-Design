import ContactsList from "../components/ContactsList"
import Chat from "../components/Chat"

const Index = () => {
  return (
    <div className="w-full h-full bg-indigo-100 p-6 flex gap-6" >
      <ContactsList />
      <Chat />
    </div>
  )
}

export default Index