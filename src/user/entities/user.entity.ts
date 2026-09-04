import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text', { nullable: true })
  name?: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { nullable: true })
  image_url?: string;

  @Column('boolean', { default: true })
  is_active: boolean;
}
