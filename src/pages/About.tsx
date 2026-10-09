import Button from '../components/Button'

type AboutProps = { username?: string }

function About({ username }: AboutProps) {
  return (
    <section>
      <h2>About</h2>
      {username && <p>Welcome, {username}!</p>}
      <p>This page lives in remote-app and is loaded through remoteEntry.js.</p>
      <Button label="Counter" />
    </section>
  )
}

export default About
