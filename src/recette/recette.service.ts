import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { Recette, RecetteDocument } from './entities/recette.entity';

@Injectable()
export class RecetteService {
  constructor(
    @InjectModel(Recette.name) private recetteModel: Model<RecetteDocument>,
  ) {}

  create(createRecetteDto: CreateRecetteDto) {
    return 'This action adds a new recette';
  }

  findAll() {
    return this.recetteModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} recette`;
  }

  update(id: number, updateRecetteDto: UpdateRecetteDto) {
    return `This action updates a #${id} recette`;
  }

  remove(id: number) {
    return `This action removes a #${id} recette`;
  }
}
