import { ReactNode } from 'react'
import { AuthProvider } from './AuthContext'

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
