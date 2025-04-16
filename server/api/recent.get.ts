import { HiAnime } from "aniwatch";

export default defineEventHandler(async (event) => {
    const hianime = new HiAnime.Scraper();
    return await hianime.getCategoryAnime("recently-updated");
});