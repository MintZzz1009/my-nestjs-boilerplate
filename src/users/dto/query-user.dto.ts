import {
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type, Transform, plainToInstance } from 'class-transformer';
import { User } from '../entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';

export class FilterUserDto {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Role)
  roles?: Role[] | null;
}

export class SortUserDto {
  @IsString()
  orderBy: keyof User;

  @IsString()
  order: string;
}

export class QueryUserDto {
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page: number;

  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit: number;

  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(FilterUserDto, JSON.parse(value)) : undefined,
  )
  @ValidateNested()
  @Type(() => FilterUserDto)
  filters?: FilterUserDto | null;

  @IsOptional()
  @Transform(({ value }) =>
    value ? plainToInstance(SortUserDto, JSON.parse(value)) : undefined,
  )
  @ValidateNested({ each: true })
  @Type(() => SortUserDto)
  sort?: SortUserDto[] | null;
}
