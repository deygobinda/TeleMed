import React, { createContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  role: 'patient' | 'doctor'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: 'patient' | 'doctor') => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string, role: 'patient' | 'doctor') => {
    // TODO: Implement actual login logic with API call
    const newUser = {
      email : email,
      password : password,
    }
    console.log(newUser)
    const mockUser: User = { id: '1', name: 'John Doe', role: role }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}