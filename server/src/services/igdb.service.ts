let accessToken: string | null = null
let tokenExpiry: number = 0

async function getAccessToken(): Promise<string> {
  if (accessToken && Date.now() < tokenExpiry) return accessToken

  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: 'POST' }
  )

  const data = await res.json() as { access_token: string; expires_in: number }
  accessToken = data.access_token
  tokenExpiry = Date.now() + data.expires_in * 1000
  return accessToken
}

export async function searchGameCovers(title: string): Promise<{ id: number; name: string; cover?: string }[]> {
  const token = await getAccessToken()

  const res = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID ?? '',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'text/plain',
    },
    body: `search "${title}"; fields name,cover.url; limit 5;`,
  })

  const data = await res.json() as { id: number; name: string; cover?: { url: string } }[]

  return data.map(game => ({
    id: game.id,
    name: game.name,
    cover: game.cover?.url?.replace('t_thumb', 't_cover_big'),
  }))
}