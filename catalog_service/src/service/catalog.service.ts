import { ICatalogRepository } from "../interfaces/catalogRepository.interface";

export class CatalogService {

    private _repository: ICatalogRepository

    constructor(repository: ICatalogRepository) {
        this._repository = repository 
    }

  createProduct(input: any) {}

  updateproduct(input: any) {}

  // Get api should always have p
  getProducts(itemsPerPage: number, page: number) {}

  getProduct(id: number) {}

  deleteProduct(id: number) {}
}
