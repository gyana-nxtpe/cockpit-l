import { useSearchQuery } from "@/state/services/getSearchData";
import { useDebounce } from "@uidotdev/usehooks";
import { Loader2, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const SearchInput = ({
  recordType,
  onChange,
  value,
}: {
  recordType: string;
  onChange: (obj: { key: string; value: string }) => void;
  value: string;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchText, 500);
  const [loading, setLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const {
    data: searchResult,
    isLoading,
    isFetching,
  } = useSearchQuery(
    {
      recordName: recordType,
      queries: debouncedSearchText,
    },
    { skip: debouncedSearchText === "" || searchText?.length < 3 }
  );
  useEffect(() => {
    if (!!value) setSearchText(value);
    else setSearchText("");
  }, [value]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setShowResult(false);
    } else {
      setShowResult(true);
    }
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setLoading(isLoading || isFetching);
  }, [isLoading, isFetching]);

  const onResultClick = (obj: { key: string; value: string }) => {
    setSearchText(obj.value);
    setShowResult(false);
    onChange(obj);
  };

  return (
    <div className="w-fit relative">
      <div
        className="flex gap-2 items-center w-[15rem] border border-gray-200 rounded-md px-2 py-1 bg-white shadow-sm  
    "
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          className="placeholder:text-sm text-sm focus:outline-none h-full w-full py-2"
        />
        {searchText?.length > 0 ? (
          <X
            className="text-gray-600 cursor-pointer"
            onClick={() => {
              setSearchText("");
              setShowResult(false);
              onChange(null);
            }}
          />
        ) : (
          <Search className="text-gray-600 cursor-pointer" />
        )}
      </div>
      {/* Search Result  */}
      {showResult && (
        <div className="absolute top-12 py-2 left-0 w-full bg-white border border-gray-200 rounded-md shadow-sm z-20">
          <div className="p-2 text-xs">Search Result In</div>

          {loading && <Loader2 className="mx-auto h-6 w-6 animate-spin" />}

          {!loading && searchResult &&
            Object.keys(searchResult).every(
              (key) => searchResult[key].length === 0
            ) && (
              <div className="text-xs text-gray-800 p-2 font-bold">
                No Result Found
              </div>
            )}

          {searchText.length < 3 && (
            <div className="text-xs text-gray-800 p-2">
              Please enter at least 3 characters
            </div>
          )}

          {!loading && searchText.length >= 3 && (
            <div className="overflow-y-scroll max-h-[10rem]">
              {Object.keys(searchResult ?? {}).map((key) => {
                if (searchResult[key].length === 0) return null;
                return (
                  <div key={key} className="px-2  border-gray-200">
                    <div className="text-xs text-black font-bold mb-3">
                      {key}
                    </div>
                    <div className="flex flex-col gap-2">
                      {searchResult[key].map((item) => {
                        return (
                          <div
                            key={item}
                            onClick={() => onResultClick({ key, value: item })}
                            className="text-xs text-gray-800 cursor-pointer
                          hover:bg-gray-100 p-1 rounded-md
                      "
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
