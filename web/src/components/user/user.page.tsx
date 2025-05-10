import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '../ui/input';
import useDebounce from '@/hooks/useDebounce';
import Loading from '../loading';
import { useGetAllUser } from '@/hooks/queries/useGetAllUser';
import { IUser } from '@/models/user.model';
import { UserDialog } from './user.dialog';

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
            accessorKey: 'fullName',
            header: 'Họ Tên',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'action',
            header: 'Action',
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
                    variant={'default'}
                >
                    Thêm người dùng <Plus />
                </Button>
            </div>
            <DataTable
                data={users.datas || []} totalCount={users.totalResults || 0} columns={columns} limit={limit} setLimit={setLimit} page={page} setPage={setPage} />
            <UserDialog refetch={refetch} data={data} open={open} setOpen={setOpen} />
        </>
    );
}

export default UserPage;
