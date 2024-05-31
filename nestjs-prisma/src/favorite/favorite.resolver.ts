import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { FavoriteService } from './favorite.service';
import { Favorite } from './entities/favorite.entity';
import { CreateFavoriteInput } from './dto/create-favorite.input';

@Resolver(() => Favorite)
export class FavoriteResolver {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Query(() => Favorite, { name: 'favorite' })
  findFavorites(@Args('id', { type: () => ID }) id: string) {
    return this.favoriteService.findFavorites(id);
  }

  @Mutation(() => Favorite)
  createFavorite(@Args('createFavoriteInput') createFavoriteInput: CreateFavoriteInput) {
    return this.favoriteService.createFavorite(createFavoriteInput);
  }

  @Mutation(() => Favorite)
  removeFavorite(@Args('id', { type: () => ID }) id: string) {
    return this.favoriteService.removeFavorite(id);
  }
}