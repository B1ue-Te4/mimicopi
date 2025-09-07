'use client'

import { login, logout } from '@/app/actions/auth-actions'

export function SignInButton() {
  return (
    <form action={login}>
      <button type='submit' className='w-full text-left'>
        Sign In
      </button>
    </form>
  )
}

export function SignOutButton() {
  return (
    <form action={logout}>
      <button type='submit' className='w-full text-left'>
        Sign Out
      </button>
    </form>
  )
}
