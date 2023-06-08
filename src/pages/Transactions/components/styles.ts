import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    max-height: 3.375rem;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 0;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-300']};
      border: 1px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

export const Loading = styled.span`
  display: inline-block;
  font-size: 0;
  align-items: center;
  justify-content: center;
  /* border: 0.25rem solid ${(props) => props.theme['green-500']}; */

  &:after {
    content: '';
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-500']} transparent
      ${(props) => props.theme['green-500']} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
