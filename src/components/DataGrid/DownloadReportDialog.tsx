import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLazyDownloadReportQuery } from "@/state";
import { Pencil, X } from "lucide-react";
import React, { useState } from "react";
import { filtersMap, sortsMap } from "./configMap";

function DownloadReportDialog({
  sortBy,
  filters,
  visibleColumns,
  startDate,
  endDate,
  recordName,
  totalRecords,
}) {
  const [name, setName] = useState(
    `${new Date().toLocaleDateString()}_${recordName}_Report`
  );
  const [isEditable, setIsEditable] = useState(false);
  const [open, setOpen] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    );
  };

  function formatDate2(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().substring(0, 10);
  }
  const [downloadReport] = useLazyDownloadReportQuery();
  const handleDownload = () => {
    const params = new URLSearchParams();
   
    sortBy.forEach((sort) => {
      params.append("sort", sortsMap[recordName][sort.id]);
      params.append("direction", sort.desc ? "DESC" : "ASC");
    });
    filters.forEach((filter) => {
      params.append(filtersMap[filter.id], filter.value);
    });
    const fieldsValue = Object.keys(visibleColumns).join(",");
    params.append("fields", fieldsValue);
    params.append("fileName", name);
    params.append("startDate", formatDate2(startDate));
    params.append("endDate", formatDate2(endDate));

    downloadReport({ recordName, queries: params.toString() })
      .unwrap()
      .then(async (data) => {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${name}.csv`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading the CSV export data:", error);
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Report</DialogTitle>
          <DialogDescription>
            Max 5000 Records can be downloaded.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm w-28">Report Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditable}
              className="text-sm text-gray-600 outline-none py-1 px-2 w-full border border-gray-300 rounded-md"
            />

            {!isEditable ? (
              <Pencil
                onClick={() => setIsEditable(true)}
                size={16}
                className="cursor-pointer"
              />
            ) : (
              <X
                onClick={() => setIsEditable(false)}
                size={16}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm w-28">Duration:</span>
            <span className="text-sm text-gray-600">
              {formatDate(startDate)} - {formatDate(endDate)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm w-28">Filters:</span>
            <span className="text-sm text-gray-600">
              {filters.length > 0 ? "Filter Applied" : "No Filter Applied"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-sm w-28">Total Records:</span>
            <span className="text-sm text-gray-600">{totalRecords}</span>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={() => {
              handleDownload();
            }}
          >
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DownloadReportDialog;
