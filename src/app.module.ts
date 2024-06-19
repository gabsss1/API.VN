import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ApoderadoModule } from './apoderado/apoderado.module';
import { DniModule } from './dni/dni.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { DocentesModule } from './docentes/docentes.module';
import { SeccionModule } from './seccion/seccion.module';
import { CursosModule } from './cursos/cursos.module';
import { HorariosModule } from './horarios/horarios.module';
import { MatriculaModule } from './matricula/matricula.module';
import { GradoModule } from './grado/grado.module';
import { SalonModule } from './salon/salon.module';
import { PeriodoAcademicoModule } from './periodo-academico/periodo-academico.module';

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
      ssl: {
        rejectUnauthorized: false
      }
    }),
    //Modules
    UsuariosModule,
    AuthModule,
    ApoderadoModule,
    DniModule,
    AlumnosModule,
    DocentesModule,
    SeccionModule,
    CursosModule,
    HorariosModule,
    MatriculaModule,
    GradoModule,
    SalonModule,
    PeriodoAcademicoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
