import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Breed, BreedDocument } from 'src/schemas/breed.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

import { Model } from 'mongoose';
@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private breedModel: Model<BreedDocument>,
  ) {}
  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    return new this.breedModel(createBreedDto).save();
  }

  async findAll() {
    return this.breedModel.find();
  }

  findOne(name: string) {
    return this.breedModel.findOne({name});
  }

  update(name: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({name}, {$set : {...updateBreedDto}});
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
