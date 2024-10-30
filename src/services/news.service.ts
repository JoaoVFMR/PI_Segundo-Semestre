import { CreateNewsDTO, UpdateNewsDTO } from "../dtos/news.dto";
import { createNews, deleteNews, findAllNews, findNewsById, updateNews } from "../repositories/news.repository";

export const createNewsService = async (data: CreateNewsDTO) => {
    return createNews(data)
}

export const findAllNewsService = async () => {
    return findAllNews()
}

export const findNewsByIdService = async (id: number) => {
    return findNewsById(id)
}

export const updateNewsService = async (id: number, data: UpdateNewsDTO) => {
    return updateNews(id, data)
}

export const deleteNewsService = async (id: number) => {
    return deleteNews(id)
}

