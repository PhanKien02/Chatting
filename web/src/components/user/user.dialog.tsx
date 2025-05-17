import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IUser } from "@/models/user.model";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import UserForm from "../forms/user/user.form";
import { UserSchema } from "../forms/user/user-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type DialogProps = {
    data?: IUser;
    refetch: Function;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
type UserPayload = z.infer<typeof UserSchema>;
export function UserDialog({ open, refetch, setOpen, data }: DialogProps) {
    const methods = useForm<UserPayload>({
        resolver: zodResolver(UserSchema),
        defaultValues: data
    })
    const onSubmit = (data: UserPayload) => console.log(data)

    return (
        <Dialog open={open} onOpenChange={setOpen} modal>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <UserForm formMethod={methods} onSubmit={onSubmit} dataForm={data} />
                <DialogFooter>
                    <Button onClick={() => onSubmit(methods.getValues())} type="button">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 
