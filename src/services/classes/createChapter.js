export default function createChapterFromResource(data) {
    return {
        id: data.id,
        volume: data.volume,
        number: data.number,
        name: data.name,
        manga: data.manga,
        team: data.team,
        media: data.media,
        free_at: data.free_at,
        created_at: data.created_at,
    }
}