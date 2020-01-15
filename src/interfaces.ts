export type Result = {
  status: "success" | "failure";
};

export type Auth = {
  appKey: string;
  appSecret: string;
};

export type PagingData = {
  currentPage: number;
  pageSize: number;
};

export interface City {
  cityCode: string; // Number
  cityId: string; // Number
  cityName: string;
}

export interface District {
  id: string; // number
  name: string;
}

export interface Neighborhood {
  id: string; // number
  name: string;
}

export interface Category {
  id: string; // number
  name: string;
}

export interface CategoryAttribute {
  id: string; // number
  mandatory: string;
  multipleSelect: string;
  name: string;
  priority: string;
  valueList: [
    {
      value: string;
      id: string;
      name: string;
    }
  ];
}
