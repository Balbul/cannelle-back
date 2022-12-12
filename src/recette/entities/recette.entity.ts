import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type RecetteDocument = HydratedDocument<Recette>;
export enum EMidiSoir {
  midi = 'midi',
  soir = 'soir',
}
export enum EDessertEntreePlat {
  dessert = 'dessert',
  entree = 'entrée',
  plat = 'plat',
}

@Schema()
export class Recette {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imageUri: number;

  @Prop({ required: false })
  recetteUri: string;

  @Prop({ required: true })
  tagMidiSoir: EMidiSoir[];

  @Prop({ required: true })
  tagDessertEntreePlat: EDessertEntreePlat[];

  @Prop({ required: false })
  jourProg: Date[];
}

export const RecetteSchema = SchemaFactory.createForClass(Recette);
