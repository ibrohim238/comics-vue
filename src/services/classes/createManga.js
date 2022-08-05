export default function createMangaFromResource(data) {
    return {
        id: data.id,
        name: data.name,
        slug: data.slug,
        description: data.description,
        media: data.media,
        tags: data.tags,
        rating: data.rating,
        ratings_count: data.ratings_count,
        votes: data.votes,
    }
}