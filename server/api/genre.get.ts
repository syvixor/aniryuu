import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const { genre, page } = getQuery(event);
    const hianime = new HiAnime.Scraper();
    const data = await hianime.getGenreAnime(genre as string, page as number);
    return {
        data: data.animes,
        pagination: {
            currentPage: data.currentPage,
            totalPages: data.totalPages,
            hasNextPage: data.hasNextPage
        }
    }
});