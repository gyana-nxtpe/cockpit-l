/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Column } from "@tanstack/react-table";
import { Filter } from "lucide-react";
import * as React from "react";

interface FilterVariant {
  value: string;
  label: string;
}

interface ColumnMeta {
  filterVariant?: FilterVariant[];
}

const FilterDropDown = ({ column }: { column: Column<any, unknown> }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnFilterValue: any = column.getFilterValue() || [];

  const meta = (column.columnDef.meta as ColumnMeta) ?? {};
  const filterVariant = meta?.filterVariant || [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Filter className="w-5 h-5 cursor-pointer" />
          {/* filters count */}

          {columnFilterValue.length > 0 && (
            <span className="absolute -top-1 -right-1 px-1 text-xs font-semibold text-white bg-blue-500 rounded-full cursor-pointer">
              {columnFilterValue.length}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit max-h-[15rem] overflow-y-scroll">
        {filterVariant.map((item: { value: string; label: string }) => {
          return (
            <DropdownMenuCheckboxItem
              key={item.value}
              checked={columnFilterValue.includes(item.value)}
              onCheckedChange={(checked) => {
                column.setFilterValue((old: string[] = []) => {
                  if (checked) {
                    return [...old, item.value];
                  } else {
                    return old.filter((x) => x !== item.value);
                  }
                });
              }}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropDown;
