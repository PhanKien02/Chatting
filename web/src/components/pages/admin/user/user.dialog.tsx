import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IUser } from "@/models/user.model";
import { Dispatch, SetStateAction } from "react";
import UserForm from "@/components/forms/user/user.form";
type DialogProps = {
    data?: IUser;
    refetch: Function;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function UserDialog({ open, setOpen, data }: DialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen} modal>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{data ? "Cập nhật thông tin người dùng" : "Thêm mới người dùng"}</DialogTitle>
                </DialogHeader>
                <div className='overflow-y-auto max-h-[500px] p-5'>
                    <UserForm dataForm={data} />
                </div>
            </DialogContent>
        </Dialog>
    );
}
