
import { defaultTemplate } from "./default-template";
import { staticDataConfigs } from "./configs";
import { PageData } from "./model/page-data";
import { PageDataItem } from "./model/page-data-item";
import { getUrl } from "./utils";

export function processTemplate(page: PageData, item: PageDataItem) {
    let infos = getInfos(item.infos);
    let titleConcat = item.title.trim().split(/ +/g).join(', ');
    let metaConcat = infos ? infos.join(', ') : titleConcat;
    let infosList = getTxtList(infos) || '';
    let template = !page.template || page.template.trim().length === 0 ? defaultTemplate : page.template;
    template = template.replace(/{ *{ *title *} *}/ig, item.title.trim());
    template = template.replace(/{ *{ *metaContent *} *}/ig, metaConcat);
    template = template.replace(/{ *{ *description *} *}/ig, item.description);
    template = template.replace(/{ *{ *infos *} *}/ig, infosList);
    template = template.replace(/{ *{ *script *} *}/ig, getScript(page, item));
    template = template.replace(/{ *{ *urls *} *}/ig, getUrlList(item.urls));
    return template;
};

function getInfos(infos?: any): string[] | undefined {
    if (!infos) return;
    let infosList = Object.keys(infos).map(k => {
        let value = infos[k];
        return value ? `${k}: ${value}` : '';
    }).filter(v => v.length > 0);
    return infosList.length === 0 ? undefined : infosList;
}

function getTxtList(infos?: string[]) {
    if (!infos || infos.length === 0) return null
    let html = infos.map(i => `<li>${i}</li>`).join('');
    return `<ul>${html}</ul>`;
}

function getUrlList(urls?: string[]) {
    if (!urls) return '';
    return `
    <nav>
        ${urls.map(url => `<a href="${url}">${url}</a>`).join('\n')}
    </nav>
    `;
}

function getScript(page: PageData, item: PageDataItem) {
    let path = page.redirectPath.replace(/{ *{ *id *} *}/ig, item.id || '');
    let url = getUrl(staticDataConfigs.baseRedirectUrl, path);
    return `<script>window.location.replace("${url}");</script>`;
}
