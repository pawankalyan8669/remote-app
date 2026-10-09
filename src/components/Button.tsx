import { useState } from 'react'

type ButtonProps = { label?: string }

function Button({ label = 'Remote Button' }: ButtonProps) {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      style={{ padding: '8px 16px', border: '2px dashed tomato', borderRadius: 6 }}
    >
      {label} (from remote-app) — clicked {count} times
    </button>
  )
}

export default Button
