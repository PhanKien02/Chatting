import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/hooks/usePagination";

interface ServerSidePaginationProps {
    limit: number;
    setLimit: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageSizeOptions?: number[];
    totalCount: number;
}

export function TablePagination({
    totalCount,
    pageSizeOptions = [5, 10, 20, 50],
    setLimit,
    limit,
    page,
    setPage,

}: ServerSidePaginationProps) {
    const paginationRange = usePagination({
        page,
        totalCount,
        limit,
        siblingCount: 1,
    });

    if (page === 0 || !paginationRange) {
        return null;
    }
    const lastPage = paginationRange[paginationRange.length - 1] as number;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-4">
                <Select value={limit.toString()} onValueChange={value => setLimit(+value)}>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder={limit} />
                    </SelectTrigger>
                    <SelectContent>
                        {pageSizeOptions.map((option) => (
                            <SelectItem key={option} value={option.toString()}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(page - 1);
                            }}
                            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                    {paginationRange.map((pageNumber, index) => {
                        if (pageNumber === "DOTS") {
                            return <PaginationEllipsis key={index} />;
                        }

                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(pageNumber as number);
                                    }}
                                    className={page === pageNumber ? "bg-blue-500 text-white" : ""}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}
                    <PaginationItem>
                        <PaginationNext
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                            }}
                            className={page >= lastPage ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}