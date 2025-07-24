import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('accessToken'); // Lấy token từ cookie
    const url = req.nextUrl;

    if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/') || url.pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    if (token && ['/auth/login', '/auth/register'].includes(url.pathname)) return NextResponse.redirect(new URL('/', req.url));

    // Nếu không có token và không phải đang truy cập trang login hoặc register
    if (!token && !['/auth/login', '/auth/register'].includes(url.pathname)) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Nếu đã có token và truy cập trang login hoặc register, chuyển hướng đến dashboard
    if (token && ['/auth/login', '/auth/register', '/auth'].includes(url.pathname)) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (url.pathname === '/auth') {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Cho phép tiếp tục với các request hợp lệ
    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'], // Áp dụng middleware cho tất cả các đường dẫn
};
