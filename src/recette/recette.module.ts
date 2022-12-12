import { Recette, RecetteSchema } from './entities/recette.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetteController } from './recette.controller';
import { RecetteService } from './recette.service';

@Module({
  controllers: [RecetteController],
  providers: [RecetteService],
  imports: [
    MongooseModule.forFeature([{ name: Recette.name, schema: RecetteSchema }]),
  ],
})
export class RecetteModule {}
