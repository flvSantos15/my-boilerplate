import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

// import { settings } from 'settings/setting'
import { User } from 'interfaces/models/User'
interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: () => Promise<void>
  signOut: () => Promise<void>
  user: User | undefined
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export async function signOut() {
  // function here
  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    // some effect here
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
      // function here
      const newUser = {
        name: 'NewUser',
        email: 'newuser@email.com'
      }
      setUser(newUser)
  }

  async function signUp() {
    // function here
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          signIn,
          user,
          signOut,
          signUp
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}