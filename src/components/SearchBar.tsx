interface SearchBarProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:bg-gray-700 dark:text-white"
    />
  )
}

export default SearchBar