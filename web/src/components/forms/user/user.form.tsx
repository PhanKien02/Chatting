import ImageUpload from "@/components/imageUpload";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IUser } from "@/models/user.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { UserSchema } from "./user-schema";
import { z } from "zod";

interface UserFormProps {
    dataForm?: IUser;
    className?: string;
}
type UserPayload = z.infer<typeof UserSchema>;
function UserForm({ dataForm, className }: UserFormProps) {
    const form = useForm<UserPayload>({
        resolver: zodResolver(UserSchema),
        defaultValues: dataForm,
    });
    const [file, setFile] = useState<File>()
    const { register, handleSubmit } = form;
    const onSubmit = (data: any) => {
        console.log({ data });
    };
    return (
        <div className={`${className} flex flex-col gap-4`}>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <ImageUpload file={file} setFile={setFile} mode="avatar" />
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Họ và tên</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên người dùng"
                                        className="w-full"
                                        type='text'
                                        required
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex  gap-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập email"
                                            className="w-full"
                                            type='email'
                                            required
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập số điện thoại"
                                            className="w-full"
                                            type='tel'
                                            required
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    );
}

export default UserForm;