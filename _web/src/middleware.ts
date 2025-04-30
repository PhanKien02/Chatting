import { NextRequest, } from 'next/server';

export function middleware(req: NextRequest) { }
//     const token = req.cookies.get('accessToken'); // Lấy token từ cookie
//     const url = req.nextUrl;

//     if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/') || url.pathname.startsWith('/api/')) {
//         return NextResponse.next();
//     }

//     if (token && ['/auth/sign-in', '/auth/sign-up'].includes(url.pathname))
//         return NextResponse.redirect(new URL('/dashboard', req.url));

//     // Nếu không có token và không phải đang truy cập trang login hoặc sign-up
//     if (!token && !['/auth/sign-in', '/auth/sign-up'].includes(url.pathname)) {
//         return NextResponse.redirect(new URL('/auth/sign-in', req.url));
//     }

//     // Nếu đã có token và truy cập trang login hoặc sign-up, chuyển hướng đến dashboard
//     if (token && ['/auth/sign-in', '/auth/sign-up', '/auth'].includes(url.pathname)) {
//         return NextResponse.redirect(new URL('/dashboard', req.url));
//     }

//     if (url.pathname === '/auth') {
//         return NextResponse.redirect(new URL('/auth/sign-in', req.url));
//     }

//     if (url.pathname === '/') {
//         return NextResponse.redirect(new URL('/dashboard', req.url));
//     }

//     // Cho phép tiếp tục với các request hợp lệ
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/:path*'], // Áp dụng middleware cho tất cả các đường dẫn
// };
