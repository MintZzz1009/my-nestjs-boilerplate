import { IsNumber, IsString } from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';

export class FilterUserDto {
  roles?: Role[] | null;
}

export class SortUserDto {
  @IsString()
  orderBy: keyof User;

  @IsString()
  order: string;
}

export class QueryUserDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  filters?: FilterUserDto | null;

  sort?: SortUserDto[] | null;
}
