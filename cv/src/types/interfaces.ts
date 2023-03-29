export interface LocationOrigin {
    name: string,
    url: string
}


export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
}

export interface User extends Character {
    type: string,
    gender: string,
    origin: LocationOrigin,
    location: LocationOrigin,
    image: string,
    episode: string [],
    url: string,
    created: string
}
