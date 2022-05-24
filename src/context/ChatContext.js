import { createContext, useContext, useState } from 'react'

export const ChatContext = createContext()

export const useChat = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
	const [ chat, setChat ] = useState({})
	const [ contact, setContact ] = useState({})

	const changeChat = chat => {
		setChat(chat)
	}

	const changeContact = contact => {
		setContact(contact)
	}

	return (
		<ChatContext.Provider value={{ chat, changeChat, contact, changeContact }}>
			{children}
		</ChatContext.Provider>
	)
}