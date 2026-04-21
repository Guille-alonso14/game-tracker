import type { Status } from '../types/game'

interface Props {
  status: Status
}

const labels: Record<Status, string> = {
  'pending': 'Pendiente',
  'in-progress': 'En progreso',
  'completed': 'Completado',
}

const colors: Record<Status, string> = {
  'pending': 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800',
}

export default function StatusBadge({ status }: Props) {
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors[status]}`}>
      {labels[status]}
    </span>
  )
}