import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!: string
}

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password?: string
}