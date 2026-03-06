export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

export const metadata = {
  title: 'Dreamscape Studio',
  description: 'Content management for Dreamscape',
}
