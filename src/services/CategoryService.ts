import { createClientAsync, Client } from "soap";
import { Auth, Category } from "interfaces";

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

  async GetTopLevelCategories(): Promise<Category[]> {
    let args = {
      auth: this.auth
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetTopLevelCategoriesAsync(args);
    const data: Category[] = response[0].categoryList;
    return data;
  }

  async GetSubCategories(categoryId: number): Promise<Category[]> {
    let args = {
      auth: this.auth,
      categoryId: categoryId
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetSubCategoriesAsync(args);
    const data: Category[] = response[0].subCategoryList;
    return data;
  }

  async GetParentCategory(categoryId: number) {
    let args = {
      auth: this.auth,
      categoryId: categoryId
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetParentCategoryAsync(args);
    const data: Category[] = response[0].parentCategory;
    return data;
  }

  async GetCategoryAttributeValue() {}
  async GetCategoryAttributesId() {}
  async GetCategoryAttributes() {}
}
