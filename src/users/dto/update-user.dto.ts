import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
// import { Transform } from 'class-transformer';
// import { Role } from '../../roles/entities/role.entity';
// import { IsEmail, IsOptional, MinLength } from 'class-validator';
// import { Status } from 'src/statuses/entities/status.entity';
// import { FileEntity } from 'src/files/entities/file.entity';
// import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @Transform(lowerCaseTransformer)
  // @IsOptional()
  // @IsEmail()
  // email?: string | null;
  // @IsOptional()
  // @MinLength(6)
  // password?: string;
  // provider?: string;
  // socialId?: string | null;
  // @IsOptional()
  // firstName?: string | null;
  // @IsOptional()
  // lastName?: string | null;
  // @IsOptional()
  // photo?: FileEntity | null;
  // @IsOptional()
  // role?: Role | null;
  // @IsOptional()
  // status?: Status;
  // hash?: string | null;
  // 이거 굳이 왜 입력하지? 이미 Partial인데...
}
