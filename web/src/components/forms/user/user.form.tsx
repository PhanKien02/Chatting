import ImageUpload from "@/components/imageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUser } from "@/models/user.model";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface UserFormProps {
    formMethod: UseFormReturn<{
        email: string;
        fullName: string;
        phone: string;
        avatarUrl: string;
    }, any, {
        email: string;
        fullName: string;
        phone: string;
        avatarUrl: string;
    }>
    onSubmit: any;
    dataForm?: IUser;
}
function UserForm({ formMethod, onSubmit, dataForm }: UserFormProps) {
    const [file, setFile] = useState<File>()
    const { register, reset, handleSubmit, formState: { errors } } = formMethod;
    // formMethod.setValue('avatarUrl', file?.)
    console.log({ file });

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-10">
                <ImageUpload file={file} setFile={setFile} mode="avatar" />
                <div>
                    <Label htmlFor='fullName'>Họ và tên</Label>
                    <Input
                        className="w-full"
                        id='fullName'
                        type='text'
                        defaultValue={dataForm?.fullName}
                        {...register('fullName', {
                            required: 'Vui lòng nhập tên người dùng',
                        })}
                        required
                        placeholder='nhập tên người dùng'
                    />
                    {errors.fullName && <p className='text-red-500 ml-4'>{errors.fullName.message}</p>}
                </div>
            </form>
        </div>
    );
}

export default UserForm;