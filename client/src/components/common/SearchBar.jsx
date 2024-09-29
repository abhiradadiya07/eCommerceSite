/* eslint-disable react/prop-types */
import { Input } from "../ui/input"

const SearchBar = ({ onSearch }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="w-1/2 gap-1 ">
            <Input placeholder="Search products..." className="border-foreground border-2 dark:text-white" onChange={handleSearchChange}/>
        </div>
    );
};

export default SearchBar;
