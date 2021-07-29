import { Invoice, Payment } from "./classImplements";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("VIC", "Stock", 110000);
const documentTwo: hasPrint = new Payment("ADA", "Coin", 30000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
