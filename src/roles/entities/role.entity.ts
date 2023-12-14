import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Allow, IsNumber } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity()
export class Role extends EntityHelper {
  @PrimaryColumn()
  @IsNumber()
  id: number;

  @Allow() // ? 무슨 용도인지 잘 모르겠네
  // Prevent stripping off the property when no other constraint is specified for it.
  // 이게 무슨 뜻이고 어떤 용도로 쓰이는지 잘 모르겠다.
  // If object has both allowed and not allowed properties a validation error will be thrown.
  @Column()
  name?: string;
}
