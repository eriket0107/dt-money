import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransacionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

import LogoImage from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransacionButton>Nova Transação</NewTransacionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
