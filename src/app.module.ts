import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: process.env.DATABASE_NAME,
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    //Modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
