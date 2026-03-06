interface DreamBadgeProps {
  label: string
  type?: 'type' | 'mood'
}

export default function DreamBadge({ label, type = 'type' }: DreamBadgeProps) {
  const bgColor = type === 'type' ? 'bg-accent-primary/20' : 'bg-accent-moon/20'
  const textColor = type === 'type' ? 'text-accent-glow' : 'text-accent-moon'
  const borderColor = type === 'type' ? 'border-accent-primary/30' : 'border-accent-moon/30'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${bgColor} ${textColor} ${borderColor}`}
    >
      {label}
    </span>
  )
}
