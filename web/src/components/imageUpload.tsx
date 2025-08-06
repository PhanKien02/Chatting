"use client";

import { useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import { AvatarFallback } from "@radix-ui/react-avatar";
import User from "./svgs/user";
import Image from "next/image";
interface FileUploadProps {
    file?: File | undefined;
    setFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
    files?: FileList | undefined;
    setFiles?: React.Dispatch<React.SetStateAction<FileList | undefined>>;
    mode?: "avatar" | "image" | "multi";
}
export default function ImageUpload({ setFile, setFiles, mode = "image" }: FileUploadProps) {
    const [images, setImages] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const readers = Array.from(files).map(file => {
            return new Promise<string>(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(file);
                if (files.length > 1) setFiles?.(files);
                else setFile?.(file);
            });
        });

        Promise.all(readers).then(results => setImages(results));
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='relative' onClick={triggerFileSelect}>
                {mode === "avatar" ? (
                    <Avatar className='w-24 h-24 flex justify-center items-center border shadow'>
                        <AvatarImage src={images[0]} alt='Avatar' className='object-cover rounded-md border' />
                        <AvatarFallback>
                            <User width={50} height={50} />
                        </AvatarFallback>
                    </Avatar>
                ) : (
                    <div className='mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground w-140 h-140'>
                        {mode === "multi" ? (
                            <div className='grid grid-cols-3 gap-2 '>
                                {images.map((img, i) => (
                                    <Image key={i} src={img} alt={`Upload ${i}`} className='w-20 h-20 object-cover rounded-md border' />
                                ))}
                            </div>
                        ) : (
                            <Image src={images[0]} alt='Uploaded image' className='w-40 h-40 object-cover rounded-md border shadow' />
                        )}
                    </div>
                )}
                <Button size='icon' variant='secondary' className='absolute bottom-0 right-0 w-8 h-8 p-1 rounded-full'>
                    <CameraIcon className='w-4 h-4' />
                </Button>

                <input type='file' accept='image/*' className='hidden' ref={fileInputRef} onChange={handleFileChange} multiple={mode == "multi" ? true : false} />
            </div>
        </div>
    );
}
