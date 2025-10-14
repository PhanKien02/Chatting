import { Test, TestingModule } from '@nestjs/testing';
<<<<<<<< HEAD:microservices/notification-service/src/modules/firebase/firebase.service.spec.ts
import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseService],
    }).compile();

    service = module.get<FirebaseService>(FirebaseService);
========
import { ConversationService } from './conversation.service';

describe('ConversationService', () => {
  let service: ConversationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationService],
    }).compile();

    service = module.get<ConversationService>(ConversationService);
>>>>>>>> 9519d7e07f7f20747cc8bf17a3afe9b176a638d8:microservices/gateway/src/modules/conversation/conversation.service.spec.ts
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
