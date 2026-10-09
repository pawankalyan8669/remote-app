import { useState, type FormEvent } from 'react'

type LoginProps = { onLogin?: (username: string) => void }

// Demo only: no real authentication. The page doesn't know about routing;
// whoever renders it (host or this app) decides what happens after login.
function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!username || !password) return
    onLogin?.(username)
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 280, margin: '0 auto' }}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login
