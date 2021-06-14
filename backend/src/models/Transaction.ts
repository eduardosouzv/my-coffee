import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  users_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  transaction: User;

  @Column()
  products_id: string;
}

export default Transaction;
