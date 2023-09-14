import { FormControl } from "@angular/forms";

export interface FormsModel {
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    address: FormControl<string | null>;
    city: FormControl<string | null>;
    state: FormControl<string | null>;
    zipCode: FormControl<number | null>;
}