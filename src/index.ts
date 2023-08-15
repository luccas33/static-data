import { pagesData } from "./data";
import { processPage } from "./process-page";

pagesData.forEach(page => processPage(page));
