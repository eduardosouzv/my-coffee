import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactions1623626470691 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'users_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'products_id',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['users_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
