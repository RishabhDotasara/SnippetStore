import { SearchIcon } from "../icons/SearchIcon";

interface SearchButtonProps {
  onClick?: () => void;
}

export const SearchButton = ({ onClick }: SearchButtonProps) => (
  <button
    type="submit"
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 flex items-center "
  >
    <SearchIcon className="w-4 h-4" />
  </button>
);
