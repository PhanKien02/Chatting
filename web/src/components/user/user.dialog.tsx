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
import { ScrollArea } from "../ui/scroll-area";
type DialogProps = {
    data?: IUser;
    refetch: Function;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
type UserPayload = z.infer<typeof UserSchema>;
export function UserDialog({ open, refetch, setOpen, data }: DialogProps) {

    return (
        <Dialog open={open} onOpenChange={setOpen} modal >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{data ? 'Cập nhật thông tin người dùng' : 'Thêm mới người dùng'}</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[500px] p-5">
                    <UserForm dataForm={data} />
                </div>
            </DialogContent>
        </Dialog>
    )
} 
