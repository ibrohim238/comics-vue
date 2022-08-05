import MangaRepository from "@/services/repositories/MangaRepository";
import ChapterRepository from "@/services/repositories/ChapterRepository";
import HistoryRepository from "@/services/repositories/HistoryRepository";
import AuthRepository from "@/services/repositories/AuthRepository";

const repositories = {
  auth: AuthRepository,
  manga: MangaRepository,
  chapter: ChapterRepository,
  history: HistoryRepository,
};

export default {
  get: name => repositories[name],
};
