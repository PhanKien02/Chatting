'use client';

import LoadingComponent from '@/components/loading';

// ----------------------------------------------------------------------

export default function Loading() {
    return (
        <div className='px-5 w-full flex flex-grow-[1] min-h-full items-center justify-center'>
            <LoadingComponent />
        </div>
    );
}
