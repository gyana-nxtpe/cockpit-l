import { DatePickerWithRange } from "../ui/DateRangePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DownloadReportDialog from "./DownloadReportDialog";
import FilterDropDown from "./FilterDropDown";
import SearchInput from "./SearchInput";
import useServerSideData from "./useServerSideData";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDownNarrowWide,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  Loader2,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

export type ColumnDefWithVisibility<TData> = ColumnDef<TData> & {
  isVisible?: boolean;
  accessorKey: keyof TData;
};

function DataGrid({
  columns,
  recordType,
  doRefetch,
  showGlobalSearch = false,
  showFileExport = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  recordType: string;
  doRefetch?: number;
  showGlobalSearch?: boolean;
  showFileExport?: boolean;
}) {
  const [sortBy, setSortBy] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalSearch, setGlobalSearch] = useState<{
    key: string;
    value: string;
  } | null>(() => {
    const savedSearch = localStorage.getItem(recordType + "-globalSearch");
    return savedSearch ? JSON.parse(savedSearch) : null;
  });

  const getFirstDayOfMonth = () => {
    const date = new Date(); // current date
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const getCurrentDate = () => {
    return new Date(); // today's date
  };
  const [date, setDate] = useState(() => {
    // Retrieve dates from session storage if available
    const savedDates = sessionStorage.getItem(recordType + "-dateRange");
    return savedDates
      ? JSON.parse(savedDates)
      : {
          startDate: getFirstDayOfMonth().toISOString(),
          endDate: getCurrentDate().toISOString(),
        };
  });

  useEffect(() => {
    if (globalSearch) {
      localStorage.setItem(
        recordType + "-globalSearch",
        JSON.stringify(globalSearch)
      );
    } else {
      localStorage.removeItem(recordType + "-globalSearch");
    }
  }, [globalSearch, recordType]);

  useEffect(() => {
    sessionStorage.setItem(recordType + "-dateRange", JSON.stringify(date));
  }, [date, recordType]);

  const { data, paginationMetaData, refetch, isLoading, isFetching } =
    useServerSideData({
      sortBy,
      filters: columnFilters,
      pageIndex: paginationState.pageIndex,
      pageSize: paginationState.pageSize,
      recordType: recordType,
      globalSearch,
      date,
    });

  useEffect(() => {
    if (doRefetch) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doRefetch]);

  useEffect(() => {
    const visibleColumns = columns.reduce((acc, col) => {
      acc[col.accessorKey] = col?.meta?.isVisible;
      return acc;
    }, {});
    setColumnVisibility(visibleColumns);
  }, [columns]);

  // const handleLoadMore = () => {
  //   if (paginationState.pageIndex + 1 > paginationMetaData.totalElements)
  //     return;
  //   setPaginationState((pre) => {
  //     return {
  //       ...pre,
  //       pageIndex: pre.pageIndex + 1,
  //     };
  //   });
  // };

  const handleLoadNext = () => {
    if (paginationState.pageIndex + 1 > paginationMetaData.totalPages) return;
    setPaginationState((pre) => {
      return {
        ...pre,
        pageIndex: pre.pageIndex + 1,
      };
    });
  };

  const handleLoadPrev = () => {
    if (paginationState.pageIndex - 1 < 0) return;
    setPaginationState((pre) => {
      return {
        ...pre,
        pageIndex: pre.pageIndex - 1,
      };
    });
  };

  // Handler to update sorting and reset pagination
  const handleSortingChange = useCallback((newSortBy) => {
    setPaginationState((prev) => ({ ...prev, pageIndex: 0 }));
    setSortBy(newSortBy);
  }, []);

  // Handler to update filters and reset pagination
  const handleFiltersChange = useCallback((newFilters) => {
    setPaginationState((prev) => ({ ...prev, pageIndex: 0 }));
    setColumnFilters(newFilters);
  }, []);

  const handleGlobalSearch = useCallback((val) => {
    setPaginationState((prev) => ({ ...prev, pageIndex: 0 }));
    setGlobalSearch(val);
  }, []);

  const table = useReactTable({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: (data as any) ?? [],
    columns,
    state: {
      sorting: sortBy,
      pagination: paginationState,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: handleSortingChange,
    onColumnFiltersChange: handleFiltersChange,
    manualSorting: true,
    manualFiltering: true,
    onPaginationChange: setPaginationState,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div className="w-full bg-white p-6">
      <div className="flex items-center py-4 gap-4">
        {showGlobalSearch && (
          <SearchInput
            recordType={recordType}
            onChange={handleGlobalSearch}
            value={globalSearch?.value}
          />
        )}

        <DatePickerWithRange
          disabled={!!globalSearch}
          value={{
            start: new Date(date.startDate),
            end: new Date(date.endDate),
          }}
          onChange={(value) => {
            setDate({
              startDate: value.start.toISOString(),
              endDate: value.end.toISOString(),
            });
          }}
        />

        <Button className="ml-6" onClick={refetch} disabled={isFetching}>
          {isFetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isFetching ? "Loading" : "Refresh"}
        </Button>
        {/* spacer */}
        <div className="ml-auto"></div>
        {showFileExport && (
          <DownloadReportDialog
            sortBy={sortBy}
            filters={columnFilters}
            visibleColumns={columnVisibility}
            recordName={recordType}
            startDate={date.startDate}
            endDate={date.endDate}
            totalRecords={paginationMetaData?.totalElements}
          />
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Customize Table <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="max-h-[20rem] overflow-y-scroll"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-end">
        <p className="text-sm mb-4">
          {data?.length === 0
            ? "No records found."
            : `Showing ${
                paginationState.pageIndex * paginationState.pageSize + 1
              } - ${
                paginationState.pageIndex * paginationState.pageSize +
                data?.length
              } of ${paginationMetaData?.totalElements} records`}
        </p>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      <div
                        className="flex gap-1 items-center"
                        style={{
                          width: `${header.getSize()}px`,
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {header.column.getCanSort() ? (
                          <div
                            onClick={header.column.getToggleSortingHandler()}
                            className="cursor-pointer"
                          >
                            {header.column.getIsSorted() === "asc" ? (
                              <span>
                                <ArrowUpNarrowWide size={20} />
                              </span>
                            ) : header.column.getIsSorted() === "desc" ? (
                              <span>
                                <ArrowDownNarrowWide size={20} />
                              </span>
                            ) : (
                              <ArrowUpDown size={20} />
                            )}
                          </div>
                        ) : null}
                        {header.column.getCanFilter() ? (
                          <div>
                            <FilterDropDown column={header.column} />
                          </div>
                        ) : null}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between  space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="flex items-center gap-3 ">
          Pagination Size :{" "}
          <Select
            value={paginationState.pageSize.toString()}
            onValueChange={(val) => {
              setPaginationState((pre) => {
                return {
                  pageIndex:
                    pre.pageIndex + 1 >= paginationMetaData?.totalPages
                      ? 0
                      : pre.pageIndex,
                  pageSize: parseInt(val),
                };
              });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Size / Page</SelectLabel>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLoadPrev}
            disabled={paginationState.pageIndex === 0 || isLoading}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLoadNext}
            disabled={
              paginationState.pageIndex + 1 === paginationMetaData.totalPages ||
              isLoading
            }
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataGrid;
