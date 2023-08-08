export interface locations {
    id: number,
    city: string,
    timezone: string,
    location: {
        type: string,
        coordinates: number[]
    }
}