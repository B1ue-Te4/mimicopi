'use server'

// サインイン・サインアウト用の関数をインポート
import { signIn, signOut } from '@/auth'

// Googleでサインインする非同期関数
export async function login() {
  await signIn('google', { redirectTo: '/' })
}

// サインアウトする非同期関数
export async function logout() {
  await signOut({ redirectTo: '/' })
}
