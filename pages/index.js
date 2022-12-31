import Link from 'next/link'
const Index = () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
      <p>This is a test.</p>
    </Link>
  </div>
)
export default Index;
