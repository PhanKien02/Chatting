import { z } from 'zod';

export const UserSchema = z.object({
    fullName: z.string().max(100, {
        message: 'Tên không được vượt quá 100 ký tự',
    }),
    phone: z.string().length(10, {
        message: 'Số điện thoại phải có 10 ký tự',
    }),
    avatarUrl: z.string().url({
        message: 'Avatar URL phải là một URL hợp lệ',
    }),
    email: z.string().email({
        message: 'Email phải là một địa chỉ email hợp lệ',
    }),
});
