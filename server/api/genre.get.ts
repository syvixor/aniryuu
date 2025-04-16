import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const { genre, page } = getQuery(event);
    const hianime = new HiAnime.Scraper();
    return await hianime.getGenreAnime(genre as string, page as number);
});