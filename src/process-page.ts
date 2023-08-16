import { staticDataConfigs } from "./configs";
import { PageData } from "./model/page-data";
import { PageDataItem } from "./model/page-data-item";
import { processTemplate } from "./process-template";
import * as fs from 'fs';
import { getUrl, removeAccents } from './utils';

let urlsToAdd: string[] = [];
let urlsToRemove: string[] = [];
let urls: string[] = [];

export function processPages(pages: PageData[], indexPage?: PageDataItem) {
    pages.forEach(page => page.itens.forEach(item => genItemPage(page, item)));
    if (!indexPage) {
        clearURLs();
        return;
    };
    manageStoredURLs();
    indexPage.urls = [...urls, ...(indexPage.urls || [])];
    let rootPage: PageData = {
        path: '',
        redirectPath: '',
        itens: [indexPage]
    }
    genItemPage(rootPage, indexPage);
    clearURLs();
}

function manageStoredURLs() {
    let storePath = getBaseDir() + '\\storedURLs.json';
    let store = '';
    let existsStore = fs.existsSync(storePath);
    if (existsStore) {
        let buffStore = fs.readFileSync(storePath);
        if (buffStore) {
            store = buffStore.toString();
        }
    }
    try {
        urls = JSON.parse(store);
    } catch (ignore) {}
    urls = urls.filter(url => !urlsToRemove.find(u => u === url));
    urlsToAdd = urlsToAdd.filter(url => !urls.find(u => u === url));
    urls = [...urls, ...urlsToAdd];
    urls = urls.sort();
    if (existsStore) {
        fs.unlinkSync(storePath);
    }
    fs.writeFileSync(storePath, JSON.stringify(urls));
}

function genItemPage(page: PageData, item: PageDataItem) {
    let title = (item.title || '').trim().replace(/ +/g, '-');
    title = removeAccents(title).toLowerCase();
    let filePath = getBaseDir();
    filePath += page.path;
    let partialPath = '';
    filePath.split(/\\|\//g).forEach(part => {
        partialPath += part + '\\';
        if (!fs.existsSync(partialPath))
            fs.mkdirSync(partialPath);
    });
    filePath = `${filePath}\\${title}.html`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    let url = getUrl(staticDataConfigs.baseStaticUrl, page.path + '/' + title);
    if (item.remove) {
        urlsToRemove.push(url);
        return;
    }
    urlsToAdd.push(url);
    let fileContent = processTemplate(page, item);
    fs.writeFileSync(filePath, fileContent);
}

function getBaseDir() {
    let baseDir = (staticDataConfigs.baseDir || '').trim();
    baseDir = baseDir.endsWith('\\') ? baseDir : baseDir + '\\';
    return baseDir;
}

function clearURLs() {
    urls = [];
    urlsToAdd = [];
    urlsToRemove = [];
}
