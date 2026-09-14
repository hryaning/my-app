import Link from 'next/link'
import { Counter } from '@/components/Counter' // Counter를 사용할 경우

export default function AboutPage() {
  const name = "황승민"

  return (
    <div>
      <h1>이 페이지는 app/about/page.tsx입니당</h1>
      <p>{name}</p>
      <Counter />
      <br />
      <Link href="/">Home으로 이동하기</Link>
    </div>
  )
}