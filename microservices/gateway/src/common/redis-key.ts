export const REDIS_KEY = {
        USER: {
                LIST: "user:list:",
                SIGN: "user:"
        },
        TOKEN: {
                REFRESH: "token:refresh:",
                ACCESS: "token:access:"
        }
}

export const buildRedisKey = (key: string, value: string | number) => {
        return key + value;
}
