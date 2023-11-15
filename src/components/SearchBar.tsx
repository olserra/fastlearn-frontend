import svgs from "@/helpers/svgs";
import { ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-12">
      <form className="max-w-md w-[900px] px-4" onSubmit={onSubmit}>
        <div className="relative">
          {svgs.searchIcon}
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
