import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    const hianime = new HiAnime.Scraper();
    const data = await hianime.getInfo(id as string);
    return {
        id: data.anime.info.id,
        name: data.anime.info.name,
        poster: data.anime.info.poster,
        description: data.anime.info.description,
        type: data.anime.info.stats.type,
        season: data.anime.moreInfo.premiered,
        status: data.anime.moreInfo.status,
        score: data.anime.moreInfo.malscore,
        genres: data.anime.moreInfo.genres,
        studio: data.anime.moreInfo.studios,
        links: {
            anilist: data.anime.info.anilistId,
            mal: data.anime.info.malId
        },
        cast: data.anime.info.charactersVoiceActors
    }
});