export default function createHistoryFromResource(data) {
    return {
        id: data.id,
        type: data.type,
        model_type: data.model_type,
        chapter: data.chapter,
    }
}