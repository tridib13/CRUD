import { config } from "../utils/config"

export default async function Home() {
  const data = await getData()
  
  return (
    <div>
      <h1>{data.user}</h1>
      <h1>{data.password}</h1>
    </div>
  )
}

const getData = async () => {
  const data = await fetch(config.url, {cache: 'force-cache'})
  return data.json()
}