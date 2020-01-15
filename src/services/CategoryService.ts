import { createClientAsync, Client } from "soap";
import {
  Auth,
  Category,
  ErrorType,
  ResponseStatus,
  CustomError,
  PagingData,
  CategoryAttribute
} from "../interfaces";

export class CategoryService {
  private serviceUrl: string = "https://api.n11.com/ws/CategoryService.wsdl";
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  /*
  async GetCategoryAttributes(
    categoryId: number,
    pagingData: PagingData
  ): Promise<CategoryAttribute[]> {
    let args = {
      auth: this.auth,
      pagingData: pagingData,
      categoryId: categoryId
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetCategoryAttributesAsync(args);
    const data: CategoryAttribute[] = response[0];
    return data;
  }
  */

  async GetTopLevelCategories(): Promise<Category[] | ErrorType> {
    let args = {
      auth: this.auth
    };

    try {
      const client: Client = await createClientAsync(this.serviceUrl);
      const response = await client.GetTopLevelCategoriesAsync(args);
      const { result } = response[0].categoryList;
      if (result.status === ResponseStatus.FAILURE) {
        return result; // TODO
      }
      return result; // TODO
    } catch (err) {
      return CustomError;
    }
  }

  async GetSubCategories(categoryId: number): Promise<Category[] | ErrorType> {
    let args = {
      auth: this.auth,
      categoryId: categoryId.toString()
    };

    try {
      const client: Client = await createClientAsync(this.serviceUrl);
      const response = await client.GetSubCategoriesAsync(args);
      const { result } = response[0].subCategoryList;
      if (result.status === ResponseStatus.FAILURE) {
        return result; // TODO
      }
      return result; // TODO
    } catch (err) {
      return CustomError;
    }
  }

  async GetParentCategory(categoryId: number): Promise<Category[] | ErrorType> {
    let args = {
      auth: this.auth,
      categoryId: categoryId.toString()
    };

    try {
      const client: Client = await createClientAsync(this.serviceUrl);
      const response = await client.GetParentCategoryAsync(args);
      const { result } = response[0];
      if (result.status === ResponseStatus.FAILURE) {
        return result; // TODO
      }
      return result; // TODO
    } catch (err) {
      return CustomError;
    }
  }

  async GetCategoryAttributeValue() {}
  async GetCategoryAttributesId() {}
  async GetCategoryAttributes(
    categoryId: number,
    pagingData: PagingData
  ): Promise<ErrorType> {
    let args = {
      auth: this.auth,
      pagingData: pagingData,
      categoryId: categoryId
    };

    try {
      const client: Client = await createClientAsync(this.serviceUrl);
      const response = await client.GetCategoryAttributesAsync(args);
      const { result } = response[0];
      if (result.status === ResponseStatus.FAILURE) {
        return result; // TODO
      }
      return result;
    } catch (err) {
      return CustomError;
    }
  }
}
