import { pagesData } from "./data";
import { processPages } from "./process-page";
import { PageDataItem } from './model/page-data-item';

let indexPage: PageDataItem = {
    title: 'Company Index Page',
    description: 'Index Page for Search Engine Optimization'
};

processPages(pagesData, indexPage);
