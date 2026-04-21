import { useState } from 'react'
import type { Game, Status, Platform } from '../types/game'

type GameFormData = Omit<Game, 'id' | 'createdAt'>

interface Props {
  initialData?: Partial<GameFormData>
  onSubmit: (data: GameFormData) => Promise<void>
  onCancel: () => void
  submitLabel?: string
}

const platforms: Platform[] = ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
const statuses: { value: Status; label: string }[] = [
  { value: 'pending', label: 'Pendiente' },
  { value: 'in-progress', label: 'En progreso' },
  { value: 'completed', label: 'Completado' },
]

export default function GameForm({ initialData, onSubmit, onCancel, submitLabel = 'Guardar' }: Props) {
  const [form, setForm] = useState<GameFormData>({
    title: initialData?.title ?? '',
    platform: initialData?.platform ?? 'PC',
    genre: initialData?.genre ?? '',
    status: initialData?.status ?? 'pending',
    hoursEstimated: initialData?.hoursEstimated ?? 0,
    score: initialData?.score,
    notes: initialData?.notes ?? '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof GameFormData, string>>>({})
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const newErrors: Partial<Record<keyof GameFormData, string>> = {}
    if (!form.title.trim()) newErrors.title = 'El título es obligatorio'
    if (!form.genre.trim()) newErrors.genre = 'El género es obligatorio'
    if (form.hoursEstimated < 0) newErrors.hoursEstimated = 'Las horas no pueden ser negativas'
    if (form.score !== undefined && (form.score < 0 || form.score > 10)) {
      newErrors.score = 'La puntuación debe estar entre 0 y 10'
    }
    return newErrors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitting(true)
    try {
      await onSubmit(form)
    } finally {
      setSubmitting(false)
    }
  }

  function handleChange(field: keyof GameFormData, value: string | number | undefined) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
        <input
          type="text"
          value={form.title}
          onChange={e => handleChange('title', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nombre del juego"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Plataforma *</label>
        <select
          value={form.platform}
          onChange={e => handleChange('platform', e.target.value as Platform)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {platforms.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Género *</label>
        <input
          type="text"
          value={form.genre}
          onChange={e => handleChange('genre', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="RPG, Acción, Estrategia..."
        />
        {errors.genre && <p className="text-red-500 text-xs mt-1">{errors.genre}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estado *</label>
        <select
          value={form.status}
          onChange={e => handleChange('status', e.target.value as Status)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Horas estimadas</label>
        <input
          type="number"
          value={form.hoursEstimated}
          onChange={e => handleChange('hoursEstimated', Number(e.target.value))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={0}
        />
        {errors.hoursEstimated && <p className="text-red-500 text-xs mt-1">{errors.hoursEstimated}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Puntuación (0-10)</label>
        <input
          type="number"
          value={form.score ?? ''}
          onChange={e => handleChange('score', e.target.value === '' ? undefined : Number(e.target.value))}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={0}
          max={10}
          placeholder="Opcional"
        />
        {errors.score && <p className="text-red-500 text-xs mt-1">{errors.score}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
        <textarea
          value={form.notes}
          onChange={e => handleChange('notes', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="¿En qué punto lo dejaste? ¿Qué te pareció?"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {submitting ? 'Guardando...' : submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-200 text-gray-700 rounded-lg py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}