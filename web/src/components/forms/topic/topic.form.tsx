import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { TopicSchema } from './topic-schema';
import { SheetClose } from '@/components/ui/sheet';
import { ITopic } from '@/models/topic.model';
import { topicService } from '@/services/topic.service';

type TopicFormProp = {
    setOpen: Dispatch<SetStateAction<boolean>>;
    dataForm?: ITopic;
    refetch: Function;
};
type TopicPayload = z.infer<typeof TopicSchema>;
export function TopicForm({ dataForm, setOpen, refetch }: TopicFormProp) {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TopicPayload>({
        resolver: zodResolver(TopicSchema),
        defaultValues: dataForm,
    });
    const onSubmit: SubmitHandler<TopicPayload> = data => {
        !dataForm
            ? topicService.createTopic(data).then(() => {
                  setOpen(false);
                  refetch();
                  toast({
                      title: 'Thêm mới thành công',
                      description: 'Thêm mới loại sách thánh công!',
                      variant: 'success',
                  });
              })
            : topicService.updateTopic(dataForm._id, data).then(() => {
                  setOpen(false);
                  refetch();
                  toast({
                      title: 'Update thành công',
                      description: 'Update loại sách thánh công!',
                      variant: 'success',
                      duration: 3000,
                  });
              });
    };

    return (
        <div className={cn('flex flex-col gap-6')}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6'>
                    <div className='grid gap-2'>
                        <Label htmlFor='name'>Tên</Label>
                        <Input
                            id='name'
                            type='name'
                            defaultValue={dataForm?.name}
                            {...register('name', {
                                required: 'Vui lòng nhập tên loại sách',
                            })}
                            required
                            placeholder='nhập tên loại sách'
                        />
                        {errors.name && <p className='text-red-500 ml-4'>{errors.name.message}</p>}
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor='name'>Màu đại diện</Label>
                        <Input
                            id='color'
                            type='color'
                            defaultValue={dataForm?.color}
                            {...register('color', {
                                required: 'Vui lòng chọn màu đại diện',
                            })}
                            placeholder='nhập tên loại sách'
                        />
                        {errors.color && <p className='text-red-500 ml-4'>{errors.color.message}</p>}
                    </div>
                    <Button type='submit'>OK</Button>
                </div>
            </form>
        </div>
    );
}
