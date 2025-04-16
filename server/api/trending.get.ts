import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const { page } = getQuery(event);
    const hianime = new HiAnime.Scraper();
    return await hianime.getCategoryAnime("top-airing", page as number);
});