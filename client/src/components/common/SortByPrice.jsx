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
  
  const SortByPrice = ({ orderBy, onSelect }) => {
    return (
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[180px] text-foreground  border-2 border-foreground">
          <SelectValue  placeholder="Sort By Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Order By</SelectLabel>
            {/* "All" Option */}
            <SelectItem value="All">All</SelectItem>
            {/* Dynamic category options */}
            {orderBy.map((orderBy, index) => (
              <SelectItem key={index} value={orderBy}>
                {orderBy}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };
  
  export default SortByPrice;
  
  