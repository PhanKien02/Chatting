'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import TopicPage from '@/components/pages/topic.page';

export default function OrdersPage() {
    return (
        <div className='h-full'>
            <PageTitle title='Loại sách' />
            <TopicPage />
        </div>
    );
}
