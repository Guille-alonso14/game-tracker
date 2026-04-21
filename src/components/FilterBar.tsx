import type { Status, Platform } from '../types/game'

interface Props {
  statusFilter: Status | 'all'
  platformFilter: Platform | 'all'
  onStatusChange: (status: Status | 'all') => void
  onPlatformChange: (platform: Platform | 'all') => void
}

const statuses: { value: Status | 'all'; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'pending', label: 'Pendiente' },
  { value: 'in-progress', label: 'En progreso' },
  { value: 'completed', label: 'Completado' },
]

const platforms: { value: Platform | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'PC', label: 'PC' },
  { value: 'PlayStation', label: 'PlayStation' },
  { value: 'Xbox', label: 'Xbox' },
  { value: 'Nintendo Switch', label: 'Nintendo Switch' },
  { value: 'Mobile', label: 'Mobile' },
]

export default function FilterBar({
  statusFilter,
  platformFilter,
  onStatusChange,
  onPlatformChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Estado</label>
        <select
          value={statusFilter}
          onChange={e => onStatusChange(e.target.value as Status | 'all')}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {statuses.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Plataforma</label>
        <select
          value={platformFilter}
          onChange={e => onPlatformChange(e.target.value as Platform | 'all')}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {platforms.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}