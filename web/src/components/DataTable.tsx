"use client";

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TablePagination } from "./pagination";
import { Dispatch, SetStateAction } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    limit: number;
    setLimit: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageSizeOptions?: number[];
    totalCount: number;
}

export function DataTable<TData, TValue>({ columns, data, totalCount, limit, setLimit, page, setPage, pageSizeOptions = [5, 10, 20, 50] }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination: {
                pageIndex: 0,
                pageSize: 10,
            },
        },
    });

    return (
        <div className='h-full'>
            <div className='rounded-md border-2 dark:border-white h-full'>
                <Table className='h-full'>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className='h-full'>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination limit={limit} setLimit={setLimit} page={page} setPage={setPage} pageSizeOptions={pageSizeOptions} totalCount={totalCount} />
        </div>
    );
}
