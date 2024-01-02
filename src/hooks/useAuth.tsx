import { useCallback, useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type AuthParams = {
  email: string
  password: string
}

const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = useCallback(async ({ email, password }: AuthParams) => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      let errorMessage = error.message

      if (errorMessage === 'User already registered') {
        errorMessage = 'This email address is already used.'
      }

      throw new Error(errorMessage)
    }
  }, [])

  const signInWithEmailAndPassword = useCallback(
    async ({ email, password }: AuthParams) => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        throw new Error(error.message)
      }
    },
    []
  )

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    window.location.assign(window.location.origin as unknown as string)
  }, [])

  return {
    session,
    signUp,
    signInWithEmailAndPassword,
    signOut
  }
}

export default useAuth
