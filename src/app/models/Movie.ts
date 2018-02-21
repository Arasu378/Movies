import {Cast} from "./Cast";
import {Torrents} from "./Torrents";

export class Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  titlle_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  date_uploaded: string;
  generes: string[];
  download_count: number;
  like_count: number;
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
  cast: Cast[];
  torrents: Torrents[];






}
