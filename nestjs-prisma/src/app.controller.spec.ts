import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { FavoriteService } from './favorite/favorite.service';

/**
 * Test suite for the AppController class.
 */
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService, FavoriteService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  /**
   * Test case for the getFavorites method.
   */
  describe('getFavorites', () => {
    it('should return an array of favorites', async () => {
      const result = [{ id: '1', userId: '1', productId: '1' }];
      jest.spyOn(appController, 'getFavorites').mockImplementation(() => Promise.resolve(result));

      expect(await appController.getFavorites('1')).toBe(result);
    });
  });

  /**
   * Test case for the addFavoriteProduct method.
   */
  describe('addFavoriteProduct', () => {
    it('should return a favorite', async () => {
      const result = { id: '1', userId: '1', productId: '1' };
      jest.spyOn(appController, 'addFavoriteProduct').mockImplementation(() => Promise.resolve(result));

      expect(await appController.addFavoriteProduct('1', '1')).toBe(result);
    });
  });

  /**
   * Test case for the removeFavoriteProduct method.
   */
  describe('removeFavoriteProduct', () => {
    it('should return a favorite', async () => {
      const result = { id: '1', userId: '1', productId: '1' };
      jest.spyOn(appController, 'removeFavoriteProduct').mockImplementation(() => Promise.resolve(result));

      expect(await appController.removeFavoriteProduct('1')).toBe(result);
    });
  });
});
