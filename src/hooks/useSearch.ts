import { useState, useMemo } from 'react'

/**
 * Custom hook para filtrar una lista por texto y categoría
 * @param items - Lista de elementos a filtrar
 * @param searchFields - Campos del objeto por los que buscar
 */
function useSearch<T extends Record<string, unknown>>(
  items: T[],
  searchFields: (keyof T)[]
) {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todas')

  // useMemo evita recalcular el filtro en cada render si no cambian los datos
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Filtro por texto
      const matchesText = searchText === '' || searchFields.some(field => {
        const value = item[field]
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchText.toLowerCase())
        }
        return false
      })

      // Filtro por categoría
      const matchesCategory =
        selectedCategory === 'todas' ||
        item['category'] === selectedCategory

      return matchesText && matchesCategory
    })
  }, [items, searchText, selectedCategory, searchFields])

  return {
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    filteredItems
  }
}

export default useSearch