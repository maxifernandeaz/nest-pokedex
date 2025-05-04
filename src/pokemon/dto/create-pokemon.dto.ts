import { IsInt, IsPositive, IsString, Min, MinLength, minLength } from "class-validator";

export class CreatePokemonDto {

    // IsINt, IsPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, Minling
    @IsString()
    @MinLength(1)
    name: string;
}
