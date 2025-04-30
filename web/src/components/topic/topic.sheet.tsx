import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ITopic } from '@/models/topic.model';
import { TopicForm } from '../forms/topic/topic.form';
import { Dispatch, SetStateAction } from 'react';

type DrawProps = {
    data?: ITopic;
    refetch: Function;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export function TopicSheet({ data, refetch, open, setOpen }: DrawProps) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader className='p-2'>
                    <SheetTitle>{data ? 'Cập nhật' : 'Thêm mới'}</SheetTitle>
                </SheetHeader>
                <TopicForm refetch={refetch} dataForm={data} setOpen={setOpen} />
            </SheetContent>
        </Sheet>
    );
}
