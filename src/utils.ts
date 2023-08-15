
export function getUrl(baseUrl: string, path: string) {
    baseUrl = (baseUrl || '').trim();
    path = (path || '').trim();
    baseUrl = baseUrl.startsWith('http') ? baseUrl : 'http://' + baseUrl;
    baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    return baseUrl + path;
}

export function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
