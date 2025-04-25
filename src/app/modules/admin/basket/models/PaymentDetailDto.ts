import { BinDto } from "./BinDto";
import { InstallmentTableDto } from "./InstallmentTableDto";
import { VirtualPosDto } from "./VirtualPosDto";
export class PaymentDetailDto {
    bin!: BinDto;
    installmentTables!: InstallmentTableDto[];
    virtualPos!: VirtualPosDto;
}
