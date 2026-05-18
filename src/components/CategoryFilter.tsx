interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onSelect('todas')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selected === 'todas'
            ? 'bg-indigo-600 text-white'
            : 'bg-white border border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-500'
        }`}
      >
        Todas
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selected === category
              ? 'bg-indigo-600 text-white'
              : 'bg-white border border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-500'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter