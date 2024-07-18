import { Token } from "./utils/token"

export const useAuth = () => {
  const login = (key: string) => {
    Token.setLoggedInIdentifier(key);
  }

  const logout = () => {
    Token.removeLoggedInIdentifier();
  }

  const isLoggin = (token) => localStorage.getItem('logged_in') === `${token}`

  return { login, logout , isLoggin }
}
export type AuthContext = ReturnType<typeof useAuth>;