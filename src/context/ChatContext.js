import { createContext, useContext, useState } from 'react'

export const ChatContext = createContext()

export const useChat = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
	const [chat, setChat] = useState({})
	const [contact, setContact] = useState({})
	const [chatMessages, setChatMessages] = useState([])
	const [previewMessages, setPreviewMessages] = useState(children.props.previewMessages)

	const changeChat = chat => {
		setChat(chat)
	}

	const changeContact = contact => {
		setContact(contact)
	}

	const changeMessages = messages => {
		setChatMessages(messages)
	}

	const changePreview = preview => {
		setPreviewMessages(preview)
	}

	return (
		<ChatContext.Provider value={
			{
				chat,
				changeChat,
				contact,
				changeContact,
				chatMessages,
				changeMessages,
				previewMessages,
				changePreview
			}
		}>
			{children}
		</ChatContext.Provider>
	)
}