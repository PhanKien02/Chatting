// eslint-disable-next-line prettier/prettier
import Sidebar from "@/components/Sidebar";
import { SocketContextProvider } from "@/contexts/socket.context";

/* eslint-disable prettier/prettier */
export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <SocketContextProvider>
                        <div className='w-full max-w-[1400px] absolute top-0 bottom-0 m-2 bg-transparent flex rounded-3xl shadow-xl overflow-hidden'>
                                <Sidebar />
                                <div className='flex flex-col flex-1 bg-white/80'>
                                        <div className='flex flex-1 justify-between'>{children}</div>
                                </div>
                        </div>
                </SocketContextProvider>

        );
}