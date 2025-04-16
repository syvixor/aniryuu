import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    const hianime = new HiAnime.Scraper();
    return await hianime.getInfo(id as string);
});