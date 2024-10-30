import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNewsDTO {
    @IsString()
    @IsNotEmpty()
    title!: string

    @IsOptional()
    @IsBoolean()
    publicated?: boolean

    @IsInt()
    @IsNotEmpty()
    userId!: number
}

export class UpdateNewsDTO {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string

    @IsOptional()
    @IsBoolean()
    publicated?: boolean
}