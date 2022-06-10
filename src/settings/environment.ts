import getConfig from 'next/config'

const nextConfig = getConfig()

export const appEnv = {
  apiHost: nextConfig.publicRuntimeConfig.API_HOST
}
