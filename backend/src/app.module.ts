import { CartController } from './cart/cart.controller';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5342,
			username: 'root',
			password: 'root',
			database: 'test',
			entities: [],
			// set to false in prod
			synchronize: true,
		}),
	],
	controllers: [UsersController, ProductsController, CartController],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
