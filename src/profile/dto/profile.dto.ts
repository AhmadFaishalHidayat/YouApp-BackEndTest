import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateUserProfileDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly birthday: string;

  @IsNotEmpty()
  @IsNumber()
  readonly height: number;

  @IsNotEmpty()
  @IsNumber()
  readonly weight: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly interests: string[];
}

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly birthday?: string;

  @IsOptional()
  @IsNumber()
  readonly height?: number;

  @IsOptional()
  @IsNumber()
  readonly weight?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly interests?: string[];
}

export class AddInterestDto {
  @IsNotEmpty()
  @IsString()
  readonly interest: string;
}

export class DeleteInterestDto {
  @IsNotEmpty()
  @IsString()
  readonly interest: string;
}
