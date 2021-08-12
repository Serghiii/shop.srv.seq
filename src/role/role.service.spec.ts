import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleService,
        {
          provide: 'RoleRepository',
          useValue: 'mockRepository'
        }
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
