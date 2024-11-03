import { Product } from '../types/product';

type Data = { 
    products: Product[];
};

export const data: Data = {
    products: [
        {
            id: 1,
            name: 'Arroz Branco Caçarola',
            price: 6.98,
            image: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/199045/Arroz-Polido-CACAROLA-Tipo-1-Pacote-1kg-.jpg?v=637915967598030000',
            description: 'Arroz polido, ideal para o dia a dia.'
        },
        {
            id: 2,
            name: 'Feijão Preto Tio João',
            price: 11.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGPnOB86eYRz8IeY6P5S9NcMlC_m7E40Miw&s',
            description: 'Feijão preto de alta qualidade, ótimo para feijoadas.'
        },
        {
            id: 3,
            name: 'Açúcar União',
            price: 4.89,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpw3AYbFBzcp5oUhT61YiVQ72iuRhC4RiEA&s',
            description: 'Açúcar refinado, perfeito para adoçar suas receitas.'
        },
        {
            id: 4,
            name: 'Sal Cisne',
            price: 1.28,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnWqjdetVlLQhnOiGelGPlhDgmhWOqNkVqA&s',
            description: 'Sal fino, ideal para temperar alimentos.'
        },
        {
            id: 5,
            name: 'Bolacha Cream Cracker',
            price: 5.15,
            image: 'https://static.clubeextra.com.br/img/uploads/1/978/24033978.png',
            description: 'Bolachas crocantes, perfeitas para lanches.'
        },
        {
            id: 6,
            name: 'Iogurt Nestle',
            price: 4.89,
            image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/beirario/media/uploads/produtos/foto/be0f781ada5bcfile.png',
            description: 'Iogurte cremoso, ideal para um lanche saudável.'
        },
        {
            id: 7,
            name: 'Coca Cola 2L',
            price: 15,
            image: 'https://cdn.dooca.store/149445/products/vchckervavlvinjypyr2ifilotle1dlt6lbr_620x620+fill_ffffff.png?v=1724757765&webp=0',
            description: 'Refrigerante sabor cola, refrescante e delicioso.'
        },
        {
            id: 8,
            name: 'Hortifrúti',
            price: 3,
            image: 'https://png.pngtree.com/png-vector/20240123/ourlarge/pngtree-banana-fruit-png-png-image_11463666.png',
            description: 'Frutas frescas e saudáveis, para um lanche nutritivo.'
        },
    ]
};
export const products = data.products;
