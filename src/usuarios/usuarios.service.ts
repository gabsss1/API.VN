import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usersRepository: Repository<Usuario>
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usersRepository.save(createUsuarioDto);
  }

  async findOneByEmail(email_usuario: string) {
    return await this.usersRepository.findOneBy({ email_usuario });
  }
}
