import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Transacion {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionConextType {
  transactions: Transacion[]
}

interface TransactionContextProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionConextType)

export const TransactionProvider = ({children} : TransactionContextProps) => {
  const [transactions, setTransactions] = useState<Transacion[]>([])
  
  const getTransactions = async () => {
    const reponse = await fetch('http://localhost:3333/transactions')
    const data = await reponse.json()

    setTransactions(data)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  const context = useContext(TransactionContext)
  return context
}