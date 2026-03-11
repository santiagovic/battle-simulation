import { PartialType } from '@nestjs/mapped-types';
import { CreateBatalhaDto } from './create-batalha.dto';

export class UpdateBatalhaDto extends PartialType(CreateBatalhaDto) {}
