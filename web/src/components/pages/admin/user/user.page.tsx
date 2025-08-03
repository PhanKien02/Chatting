"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllUser } from "@/hooks/queries/useGetAllUser";
import { IUser } from "@/models/user.model";
import UserDialog from "./user.dialog";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function UserPage() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState<string | undefined>();
    const searchText = useDebounce(searchTerm, 500); // Trì hoãn 500ms
    const { users, isError, isFetching, isLoading, refetch } = useGetAllUser({
        page,
        limit,
        searchText,
    });
    const [data, setData] = useState<IUser>();
    const [open, setOpen] = useState(false);

    const columns: ColumnDef<IUser>[] = [
        {
            accessorKey: "avatarUrl",
            header: "Hình ảnh",
            cell: ({ row }) => <Image src={row.original.avatarUrl || "https://img.heroui.chat/image/avatar?w=150&h=150&u=2"} alt='avatar' className='w-10 h-10 rounded-full' />,
        },
        {
            accessorKey: "fullName",
            header: "Họ Tên",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "phone",
            header: "Số Điện Thoại",
        },
        {
            accessorKey: "isActive",
            header: "Trạng Thái",
            cell: ({ row }) => (
                <span className={`${row.original.isActive ? "bg-green-500" : "bg-red-500"} p-2 rounded-3xl`}>{row.original.isActive ? "Kích hoạt" : "Vô hiệu hóa"}</span>
            ),
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <Button
                    onClick={() => {
                        setData(row.original);
                        setOpen(true);
                    }}
                    className='bg-blue-500'
                >
                    Cập nhât
                </Button>
            ),
        },
    ];
    if (!users || isError || isFetching || isLoading) return <Loading />;
    return (
        <>
            <div className='p-2 flex justify-between'>
                <div className='relative w-80 border-2 rounded-lg ml-3.5'>
                    <Search className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3' />
                    <Input type='text' value={searchTerm} placeholder='Search' className='pl-12 pr-4' onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <Button
                    onClick={() => {
                        setOpen(true);
                        setData(undefined);
                    }}
                    variant={"default"}
                >
                    Thêm người dùng <Plus />
                </Button>
            </div>
            <DataTable data={users.datas || []} totalCount={users.totalResults || 0} columns={columns} limit={limit} setLimit={setLimit} page={page} setPage={setPage} />
            <UserDialog refetch={refetch} data={data} open={open} setOpen={setOpen} />
        </>
    );
}

export default UserPage;
