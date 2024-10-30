import { Request, Response } from 'express'
import { createNewsService, deleteNewsService, findAllNewsService, findNewsByIdService, updateNewsService } from '../services/news.service'

export const createNews = async (req: Request, res: Response) => {
    try {
        const news = await createNewsService(req.body)
        return res.status(201).json(news)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const findAllNews = async (req: Request, res: Response) => {
    const news = await findAllNewsService()
    return res.status(200).json(news)
}

export const findNewsById = async (req: Request, res: Response) => {
    const news = await findNewsByIdService(Number(req.params.id))
    return res.status(200).json(news)
}

export const updateNews = async (req: Request, res: Response) => {
    try {
        const news = await updateNewsService(Number(req.params.id), req.body)
        return res.status(200).json(news)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    try {
        await deleteNewsService(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(400).json(error)
    }
}
