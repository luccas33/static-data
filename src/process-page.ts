import { staticDataConfigs } from "./configs";
import { PageData } from "./model/page-data";
import { PageDataItem } from "./model/page-data-item";
import { processTemplate } from "./process-template";
import * as fs from 'fs';
import { removeAccents } from "./utils";

export function processPage(page: PageData) {
    page.itens.forEach(item => genItemPage(page, item));
}

function genItemPage(page: PageData, item: PageDataItem) {
    let title = (item.title || '').trim().replace(/ +/g, '-');
    title = removeAccents(title).toLowerCase();
    let filePath = (staticDataConfigs.baseDir || '').trim();
    filePath = filePath.endsWith('\\') ? filePath : filePath + '\\';
    filePath += page.path;
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
    }
    filePath = `${filePath}\\${title}.html`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    let fileContent = processTemplate(page, item);
    fs.writeFileSync(filePath, fileContent);
}
