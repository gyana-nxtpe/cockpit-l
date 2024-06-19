/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { useGetTableQuery } from "state";
import { filtersMap, sortsMap } from "./configMap";

function useServerSideData({
  sortBy,
  filters,
  pageIndex,
  pageSize,
  recordType,
  date,
  globalSearch,
}) {
  console.log("running rv api call");

  if (!date.startDate || !date.endDate) {
    date.startDate = new Date().toISOString();
    date.endDate = new Date().toISOString();
  }

  const queryString = useCallback(() => {
    return prepareQueryParams(
      sortBy,
      filters,
      pageIndex,
      pageSize,
      date,
      globalSearch,
      recordType
    );
  }, [sortBy, filters, pageIndex, pageSize, date, globalSearch, recordType]);
  const {
    data: responseData,
    error,
    refetch,
    isLoading,
    isFetching,
  } = useGetTableQuery({
    endpoint: "record",
    recordName: recordType,
    queries: queryString(),
  });

  //   const shouldRefetch = () => {
  //     if (sortBy.length === 0 && filters.length === 0) return false;
  //   };

  //   useEffect(() => {
  //     if (!shouldRefetch()) return;
  //     refetch();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [sortBy, filters, pageIndex, pageSize, recordType]);
  const data =
    responseData?.content.filter((item) => {
      if (recordType === "notify") {
        return !(item as any).template.includes("OTP");
      } else {
        return true;
      }
    }) || [];
  const paginationMetaData: {
    totalElements: number;
    totalPages: number;
    size: number;
    page: number;
  } = {
    totalElements: responseData?.totalElements,
    totalPages: responseData?.totalPages,
    size: responseData?.size,
    page: responseData?.page,
  };

  return {
    data,
    isLoading: isLoading || isFetching,
    error,
    paginationMetaData,
    refetch,
    isFetching,
  };
}

function prepareQueryParams(
  sortBy,
  filters,
  pageIndex,
  pageSize,
  date,
  globalSearch,
  recordType
) {
  const params = new URLSearchParams();
  

  sortBy.forEach((sort) => {
    params.append("sort", sortsMap[recordType][sort.id]);
    params.append("direction", sort?.desc ? "DESC" : "ASC");
  });

  filters.forEach((filter) => {
    params.append(filtersMap[filter.id], filter.value);
  });

  params.append("page", pageIndex.toString());
  params.append("size", pageSize.toString());
  params.append("startDate", formatDate(date.startDate));
  params.append("endDate", formatDate(date.endDate));
  if (!!globalSearch) {
    params.append(globalSearch?.key, globalSearch?.value);
    params.delete("startDate");
    params.delete("endDate");
    params.delete("sort");
    params.delete("direction");
    params.delete("page");
    params.delete("size");
  }

  return params.toString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date.toISOString().substring(0, 10);
}

export default useServerSideData;
