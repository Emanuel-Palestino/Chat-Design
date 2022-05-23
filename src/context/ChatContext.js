import { createContext, useContext, useState } from 'react'

export const ChatContext = createContext()

export const useChat = () => useContext(ChatContext)

export const ChatProvider = ({ children }) => {
	const [ chat, setChat ] = useState({})

	const changeChat = id => {
		setChat({id: id})
	}

	return (
		<ChatContext.Provider value={{ chat, changeChat }}>
			{children}
		</ChatContext.Provider>
	)
}