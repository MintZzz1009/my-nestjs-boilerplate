import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity({ name: 'file' })
export class FileEntity extends EntityHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;
}
