"use client";

import React from "react";
import PageTitle from "@/components/PageTitle";
import UserPage from "@/components/pages/admin/user/user.page";

export default function Users() {
    return (
        <div className='flex flex-col gap-5  w-full'>
            <PageTitle title='Users' />
            <UserPage />
        </div>
    );
}
