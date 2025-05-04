'use strict'
import Cookies from "js-cookie";

export function setCookie(cookieName: string, data: any) {
    Cookies.set(cookieName, JSON.stringify(data));
}

export function getCookie(cookieName: string) {
    const cookieValue = Cookies?.get(cookieName) ?? "{}";
    const value = JSON.parse(cookieValue);
    return Object.keys(value).length ? value : undefined;
}
export function removeCookie(cookieName: string) {
    Cookies.remove(cookieName);
}

export function clearCookies() {
    const cookies = Cookies.get();
    for (const cookieName in cookies) {
        Cookies.remove(cookieName);
    }
}
