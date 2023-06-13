import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionConextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionContextProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionConextType)

export const TransactionProvider = ({ children }: TransactionContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }
  const createTransaction = async (data: CreateTransactionInput) => {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevstate) => [response.data, ...prevstate])
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        getTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  const context = useContext(TransactionContext)
  return context
}
