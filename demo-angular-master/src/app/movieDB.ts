export interface MovieDB{
    id:number;
    title: string; 
    language:string;
    comments:string;
    releaseDate:string;
    poster_path:string;
    adult:boolean;
    overview:string;
    genre_ids:Array<number>;
    original_title:string;
    backdrop_path:string;
    popularity:number;
    vote_count:number;
    video:boolean;
    vote_average:number
}