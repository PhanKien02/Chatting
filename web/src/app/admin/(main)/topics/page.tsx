'use client';

import React from 'react';
import PageTitle from '@/components/PageTitle';
import TopicPage from '@/components/topic/topic.page';

export default function Topic() {
    return (
        <div className='h-full'>
            <PageTitle title='Loại sách' />
            <TopicPage />
        </div>
    );
}
