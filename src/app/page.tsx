export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ol>
      <li><a href="/email" className='underline'>Demo without media queries</a></li>
      <li><a href="/email-media" className='underline'>Demo with media queries</a></li>
      </ol>
    </main>
  )
}
