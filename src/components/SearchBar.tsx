import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="hidden sm:flex items-center gap-2 rounded-md 
        px-2 py-1 ring-1 ring-gray-200 shadow-md">
            <Search className="w-4 h-4 text-gray-500" />
            <input id="search" placeholder="Search..." className="text-sm outline-0" />
        </div>
    )
}

export default SearchBar