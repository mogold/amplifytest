import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PropertyController } from "../property.controller";
import { PropertyService } from "../property.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  addressCity: "exampleAddressCity",
  addressCountry: "exampleAddressCountry",
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressPostcode: "exampleAddressPostcode",
  createdAt: new Date(),
  id: "exampleId",
  purchaseDate: new Date(),
  sellDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  active: "true",
  addressCity: "exampleAddressCity",
  addressCountry: "exampleAddressCountry",
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressPostcode: "exampleAddressPostcode",
  createdAt: new Date(),
  id: "exampleId",
  purchaseDate: new Date(),
  sellDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    addressCity: "exampleAddressCity",
    addressCountry: "exampleAddressCountry",
    addressLine1: "exampleAddressLine1",
    addressLine2: "exampleAddressLine2",
    addressPostcode: "exampleAddressPostcode",
    createdAt: new Date(),
    id: "exampleId",
    purchaseDate: new Date(),
    sellDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  addressCity: "exampleAddressCity",
  addressCountry: "exampleAddressCountry",
  addressLine1: "exampleAddressLine1",
  addressLine2: "exampleAddressLine2",
  addressPostcode: "exampleAddressPostcode",
  createdAt: new Date(),
  id: "exampleId",
  purchaseDate: new Date(),
  sellDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Property", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PropertyService,
          useValue: service,
        },
      ],
      controllers: [PropertyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /properties", async () => {
    await request(app.getHttpServer())
      .post("/properties")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        sellDate: CREATE_RESULT.sellDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /properties", async () => {
    await request(app.getHttpServer())
      .get("/properties")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          purchaseDate: FIND_MANY_RESULT[0].purchaseDate.toISOString(),
          sellDate: FIND_MANY_RESULT[0].sellDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /properties/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/properties"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /properties/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/properties"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        purchaseDate: FIND_ONE_RESULT.purchaseDate.toISOString(),
        sellDate: FIND_ONE_RESULT.sellDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
