import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '../../ui/password-input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './login-schema';
import SvgLogoGoogle from '@/components/svgs/google-logo';
import { userService } from '../../../services/user.service';
import { RoleType } from '@/models/user.model';
import { useToast } from '@/hooks/use-toast';
import { useAuthContext } from '@/contexts/auth.context';
import { setCookie } from 'cookies-next/client';
import { useRouter } from 'next/navigation';

type LoginPayload = z.infer<typeof LoginSchema>;
export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const { toast } = useToast();
    const router = useRouter();
    const { setUserLogin } = useAuthContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginPayload>({
        resolver: zodResolver(LoginSchema),
    });
    const onSubmit: SubmitHandler<LoginPayload> = (data) => {
        userService
            .login({ ...data, role: RoleType.ADMIN })
            .then(({ data }) => {
                setUserLogin(data.user);
                setCookie('accessToken', data.accessToken);
                setCookie('refreshToken', data.refreshToken);
                router.push('/');
                toast({
                    title: 'Đăng nhập thành công',
                    description: 'Chào mừng bạn đến với TaleNet!',
                    variant: 'success',
                });
            })
            .catch((error) => {
                toast({
                    title: 'Đăng nhập thất bại',
                    description: error.message,
                    variant: 'destructive',
                    duration: 1000,
                });
            });
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Đăng nhập</CardTitle>
                    <CardDescription>
                        Nhập tài khoản mật khẩu để đăng nhập
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Tài khoản</Label>
                                <Input
                                    id="login"
                                    type="login"
                                    {...register('login')}
                                    placeholder="nhập tài khoản"
                                    required
                                />
                                {errors.login && (
                                    <p className="text-red-500 ml-4">
                                        {errors.login.message}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center flex-wrap">
                                    <Label htmlFor="password">Mật khẩu</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:text-green-500"
                                    >
                                        Quên mật khẩu?
                                    </a>
                                </div>
                                <PasswordInput
                                    {...register('password')}
                                    id="password"
                                    placeholder="Nhập mật khẩu
                                "
                                />
                                {errors.password && (
                                    <p className="text-red-500 ml-4">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" className="w-full">
                                Đăng nhập
                            </Button>
                            <Button variant="ghost" className="w-full">
                                Đăng nhập bằng Google <SvgLogoGoogle />
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Bạn chưa có tài khoản?{' '}
                            <a
                                href="#"
                                className="underline underline-offset-4 text-green-500"
                            >
                                Đăng ký
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
