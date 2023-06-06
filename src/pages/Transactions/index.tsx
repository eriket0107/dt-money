import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransacionsTable, TransactionsContainer } from "./styles"
import { useTransaction } from "../../context/useTransaction"



export const Transactions = () => {
  const {transactions} = useTransaction()

  return (
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
      <SearchForm/>
      <TransacionsTable>
        
        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                <td width={"50%"}>{transaction.description}</td> 
                <td>
                  <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                  </PriceHighlight>
                  </td>   
                <td>{transaction.category}</td>   
                <td>{transaction.createdAt}</td>   
              </tr>
              )
            })
          }
          
          
        </tbody>
      </TransacionsTable>
      </TransactionsContainer>
    </div>
  )
}