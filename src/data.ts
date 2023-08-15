import { PageData } from "./model/page-data";

export const pagesData: PageData[] = [
    {
        path: 'produto',
        redirectPath: 'produto/{{id}}',
        itens: [
            {
                id: '1',
                title: 'Título Produto 1',
                description: 'Descrição do Produto 1',
                infos: {nome: 'Produto 1', valor: '$ 10,00', 'avaliação': '5 estrelas'}
            },
            {
                id: '2',
                title: 'Título Produto 2',
                description: 'Descrição do Produto 2',
                infos: {nome: 'Produto 2', valor: '$ 20,00', 'avaliação': '4 estrelas'}
            }
        ]
    },{
        path: 'servico',
        redirectPath: 'servico/{{id}}',
        itens: [
            {
                id: '1',
                title: 'Título Serviço 1',
                description: 'Descrição do Serviço 1',
                infos: {nome: 'Serviço 1', valor: '$ 20,00', 'avaliação': '5 estrelas'}
            },
            {
                id: '2',
                title: 'Título Serviço 2',
                description: 'Descrição do Serviço 2',
                infos: {nome: 'Serviço 2', valor: '$ 40,00', 'avaliação': '4 estrelas'}
            }
        ]
    }
] 
