import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from 'src/schemas/cat.schema';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  public findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  public create(@Body() dto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(dto);
  }
}
