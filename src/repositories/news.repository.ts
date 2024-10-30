import { CreateNewsDTO, UpdateNewsDTO } from '../dtos/news.dto'
import News from '../entities/news.entity'

export const createNews = async (data: CreateNewsDTO) => {
    return News.create({ data })
}

export const findAllNews = async () => {
    return News.findMany()
}

export const findNewsById = async (id: number) => {
    return News.findFirst({ where: { id } })
}

export const updateNews = async (id: number, data: UpdateNewsDTO) => {
    return News.update({ where: { id }, data })
}

export const deleteNews = async (id: number) => {
    return News.delete({ where: { id } })
}