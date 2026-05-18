// TIPOS DE NOTAS

export interface Note {
  id: number
  title: string
  content: string
  category: string
  createdAt: string
}

export interface CreateNoteDTO {
  title: string
  content: string
  category: string
}

// TIPOS DE TAREAS

export interface Task {
  id: number
  title: string
  description: string
  category: string
  completed: boolean
  deadline: string | null
  createdAt: string
}

export interface CreateTaskDTO {
  title: string
  description: string
  category: string
  deadline: string | null
}

// TIPOS GENERALES

export interface ApiResponse<T> {
  data: T
  message?: string
}