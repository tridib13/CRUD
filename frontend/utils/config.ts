interface Config {
    url: string
}

export const config: Config = process.env.NODE_ENV === 'development' ? {url: process.env.DEV_URL!} : {url: process.env.PROD_URL!}