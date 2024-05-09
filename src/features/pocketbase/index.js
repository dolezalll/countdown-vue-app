import PocketBase from 'pocketbase'

const client = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

client.autoCancellation(false)

export default client
