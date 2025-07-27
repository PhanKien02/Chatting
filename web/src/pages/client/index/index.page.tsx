export function IndexPage() {
    return <>
        <div className="flex flex-col h-[89vh] gap-5 overflow-hidden">
            {/* Dòng trên: Clients + Notification */}
            <div className="flex flex-row gap-4 w-full h-1/4 px-4 pt-4">
                <div className="flex gap-4">
                    <div className="bg-white rounded-2xl w-[274px] h-full text-black text-center">client</div>
                    <div className="bg-white rounded-2xl w-[274px] h-full text-black text-center">client</div>
                    <div className="bg-white rounded-2xl w-[274px] h-full text-black text-center">client</div>
                </div>
                <div className="bg-white rounded-2xl flex-1 h-full text-black">notification</div>
            </div>

            {/* Dòng dưới: List task + Message */}
            <div className="flex flex-row gap-4 w-full flex-1 px-4  min-h-0">
                <div
                    className="bg-green-500 h-full"
                    style={{
                        width: `calc(274px * 3 + 2 * 1rem)`, // 3 client width + 2x gap-4 (1rem = 16px)
                    }}
                >
                    list task
                </div>
                <div className="bg-white flex-1 h-full overflow-hidden">
                    message
                </div>
            </div>
        </div>

    </>
}