/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = ({ categories, onSelect }) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[180px] text-foreground  border-2 border-foreground">
        <SelectValue  placeholder="Filter by Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {/* "All" Option */}
          <SelectItem value="All">All</SelectItem>
          {/* Dynamic category options */}
          {categories.map((category, index) => (
            <SelectItem key={index} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Filter;

