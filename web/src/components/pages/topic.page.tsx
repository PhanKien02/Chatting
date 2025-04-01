import { DataTable } from '@/components/DataTable';
import { useGetAllTopic } from '@/hooks/useGetAllTopic';
import { ITopic } from '@/models/topic.model';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { TopicSheet } from './topic.sheet';
import { Button } from '../ui/button';
import { Plus, Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import { Input } from '../ui/input';
import useDebounce from '@/hooks/useDebounce';

function TopicPage() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const searchText = useDebounce(searchTerm, 500); // Trì hoãn 500ms
    const { topics, isError, isFetching, isLoading, refetch } = useGetAllTopic({
        page,
        limit,
        searchText,
    });
    const [data, setData] = useState<ITopic>();
    const [open, setOpen] = useState(false);
    const columns: ColumnDef<ITopic>[] = [
        {
            accessorKey: 'name',
            header: 'Tên Topic',
        },
        {
            accessorKey: 'color',
            header: 'Màu',
            cell: ({ row }) => {
                return <div className={`text-[${row.getValue('color')}]`}>{row.getValue('color')}</div>;
            },
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
    if (!topics || isError || isFetching || isLoading) return <>Loading</>;
    return (
        <>
            <div className='p-2 flex justify-between'>
                <div className='relative w-80 border-2 rounded-lg ml-3.5'>
                    <Search className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3' />
                    <Input type='text' placeholder='Search' className='pl-12 pr-4' onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <Button
                    onClick={() => {
                        setOpen(true);
                    }}
                    variant={'default'}
                >
                    Cập nhât <Plus />
                </Button>
            </div>
            <DataTable columns={columns} data={topics.data} />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => setPage(page - 1)} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={() => setPage(page + 1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            <TopicSheet refetch={refetch} data={data} open={open} setOpen={setOpen} />
        </>
    );
}

export default TopicPage;
