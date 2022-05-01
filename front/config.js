import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.API ? 'https://seoblog.com' : 'https://localhost:8000'

export const APP_NAME = publicRuntimeConfig.APP_NAME