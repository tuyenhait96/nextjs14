import { auth } from '@clerk/nextjs/server';
import React from 'react'
import PageNotFound from '../../not-found';
import { redirect } from 'next/navigation';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const { userId } : { userId: string | null } = auth();
    if (!userId) return redirect('/sign-in');

    return (
        <div>{children}</div>
    )
}

export default AdminLayout