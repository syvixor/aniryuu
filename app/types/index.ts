export interface IAnime {
    id: string;
    name: string;
    jname: string;
    poster: string;
    duration: string | null;
    type: string | null;
    rating: string | null;
    episodes: {
        sub: number | null;
        dub: number | null;
    }
}

export interface IAnimeList {
    data: IAnime[];
    pagination: {
        currentPage: number;
        totalPages: number;
        hasNextPage: boolean;
    }
}

interface ICast {
    character: {
        id: string;
        poster: string;
        name: string;
        cast: string;
    },
    voiceActor: {
        id: string;
        poster: string;
        name: string;
        cast: string;
    }
}

export interface IAnimeInfo {
    id: string;
    name: string;
    poster: string;
    description: string;
    type: string;
    season: string;
    status: string;
    score: string;
    genres: string[];
    studio: string;
    links: {
        anilist: number | null;
        mal: number | null;
    },
    cast: ICast[]
}