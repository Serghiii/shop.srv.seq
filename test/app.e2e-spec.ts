import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(() => app.close());

  describe('Auth', () => {

    describe('POST /auth/register', () => {
      it('should validate request', () => {
        return request(app.getHttpServer())
          .post('/auth/register')
          .set('Accept', 'application/json')
          .send({
            phone: "+380633821941",
            email: "sv_sergius@ukr.net",
            password: "11111"
          })
          .expect(400)
          .expect(res => {
            // Check the body
            console.log(res.body)
            // Should have an error about the password
            expect(res.body.message).toContain('Пароль має бути не менше 6 символів')
            // Should have an error about the date being later than 13 years ago
            expect(
              res.body.message.find((m: string) => m.startsWith('maximal allowed date for dateOfBirth'))
            ).toBeDefined()
          })
      })
    })

    // it('/ (GET)', () => {
    //   return request(app.getHttpServer())
    //     .get('/')
    //     .expect(200)
    //     .expect('Hello World!');
    // });

  })

});
