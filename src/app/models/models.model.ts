export interface ExampleForm {
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: number | null;
}

export interface pizzaToppingsModel {
    topping: string;
    selected: boolean;
}
