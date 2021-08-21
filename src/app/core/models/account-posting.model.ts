import { AccountPostingItem } from "./account-posting-item.model";

export class AccountPosting {
    totalQuantity: number;
    totalAmount: number;
    totalNetAmount: number;
    totalAverageAmount: number;
    initialDate: Date;
    finalDate: Date;
    items: AccountPostingItem[];
}
