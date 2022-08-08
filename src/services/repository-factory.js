import MangaRepository from "@/services/repositories/MangaRepository";
import ChapterRepository from "@/services/repositories/ChapterRepository";
import NewsRepository from "@/services/repositories/NewsRepository";
import AuthRepository from "@/services/repositories/AuthRepository";

const repositories = {
  auth: AuthRepository,
  manga: MangaRepository,
  chapter: ChapterRepository,
  news: NewsRepository,
};

export default {
  get: name => repositories[name],
};
