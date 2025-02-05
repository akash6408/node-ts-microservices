import { Product } from "../models/product.model";

export interface ICatalogRepository {
  create(data: any): Promise<Product>;
  update(data: any): Promise<Product>;
  delete(id: any): Promise<void>;
  find(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
}
