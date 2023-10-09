import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PostType {
  Image = 'Image',
  Video = 'Video',
  Text = 'Text',
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: PostType, default: PostType.Text })
  post_type: PostType;

  @Column()
  submitted_by: string;

  @Column()
  date: Date | null;

  @Column()
  file_path: string | null;

  @Column()
  text: string | null;
}