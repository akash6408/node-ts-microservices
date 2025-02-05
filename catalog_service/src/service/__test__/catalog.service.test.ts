import { ICatalogRepository } from "../../interfaces/catalogRepository.interface";
import { CatalogRepository } from "../../repository/catalog.repository";
import { CatalogService } from "../catalog.service";

describe("catalogService", () => {
  let repository: ICatalogRepository;

  beforeEach(() => {
    // Change the CatalogRepository to MockCatalogRepository later.
    repository = new CatalogRepository();
  });

  afterEach(() => {
    repository = {} as CatalogRepository;
  });

  describe("createProduct", () => {
    test("should create product", async () => {
        const service = new CatalogService(repository)
        const result = await service.createProduct({})
    });

    test("should throw error with product already exist", () => {});
  });
});
