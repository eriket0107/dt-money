import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer, Loading } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransaction } from '../../../context/useTransaction'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { getTransactions } = useTransaction()

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await getTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        {!isSubmitting ? <MagnifyingGlass size={20} /> : <Loading />}
        Buscar
      </button>
    </SearchFormContainer>
  )
}
