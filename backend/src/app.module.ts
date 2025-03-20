import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './(auth)/auth.module';
import { UsersModule } from './(users)/users.module';
import { PostsModule } from './(posts)/posts.module';
import { CommentsModule } from './(comments)/comments.module';
import { LocaleMiddleware } from './global/middlewares/locale.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    PostsModule, 
    CommentsModule,
    ConfigModule.forRoot({isGlobal: true,})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LocaleMiddleware)
      .forRoutes('*');
  }
}
