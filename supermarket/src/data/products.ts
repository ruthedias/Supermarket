import { Product } from '../types/product';
import { Category } from '../types/category';

type Data = { 
    products: Product[];
    categories: Category[];
};

export const data: Data = {
    categories: [
        {id:1, name:'Hortifrúti', image: 'https://i.pinimg.com/550x/bb/0b/c5/bb0bc5c210fc6cc315206811ce5fe131.jpg'},
        {id: 2, name:'Bebidas', image: 'https://clubedobarman.com/wp-content/uploads/2018/09/bottles1-1024x575.jpg'},
        {id:3, name:'Mercearia', image: 'https://gamaalimentos.com/wp-content/uploads/2023/03/produtos-da-cesta-basica-mercearia-1-300x300.png'},
        {id:4, name:'Laticínios', image: 'https://laticiniosholandes.com.br/wp-content/uploads/2023/03/03_2023_Blog_08_Laticinios.png'},
        {id:5, name:'Limpeza', image: 'https://biossen.com.br/blog/wp-content/uploads/2023/04/27-03-750x410.jpeg'},
    ],

    products: [
        {
            id: 1,
            name: 'Arroz Branco Caçarola',
            price: 6.98,
            image: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/199045/Arroz-Polido-CACAROLA-Tipo-1-Pacote-1kg-.jpg?v=637915967598030000',
            description: 'Arroz polido, ideal para o dia a dia.',
            category: 3,
        },
        {
            id: 2,
            name: 'Feijão Preto Tio João',
            price: 11.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGPnOB86eYRz8IeY6P5S9NcMlC_m7E40Miw&s',
            description: 'Feijão preto de alta qualidade, ótimo para feijoadas.',
            category: 3,
        },
        {
            id: 3,
            name: 'Açúcar União',
            price: 4.89,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpw3AYbFBzcp5oUhT61YiVQ72iuRhC4RiEA&s',
            description: 'Açúcar refinado, perfeito para adoçar suas receitas.',
            category: 3,
        },
        {
            id: 4,
            name: 'Sal Cisne',
            price: 1.28,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnWqjdetVlLQhnOiGelGPlhDgmhWOqNkVqA&s',
            description: 'Sal fino, ideal para temperar alimentos.',
            category: 3,
        },
        {
            id: 5,
            name: 'Bolacha Cream Cracker',
            price: 5.15,
            image: 'https://static.clubeextra.com.br/img/uploads/1/978/24033978.png',
            description: 'Bolachas crocantes, perfeitas para lanches.',
            category: 3,
        },
        {
            id: 6,
            name: 'Iogurt Nestle',
            price: 4.89,
            image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/beirario/media/uploads/produtos/foto/be0f781ada5bcfile.png',
            description: 'Iogurte cremoso, ideal para um lanche saudável.',
            category: 4,
        },
        {
            id: 7,
            name: 'Coca Cola 2L',
            price: 15,
            image: 'https://cdn.dooca.store/149445/products/vchckervavlvinjypyr2ifilotle1dlt6lbr_620x620+fill_ffffff.png?v=1724757765&webp=0',
            description: 'Refrigerante sabor cola, refrescante e delicioso.',
            category: 2,
        },
        {
            id: 8,
            name: 'Hortifrúti',
            price: 3,
            image: 'https://png.pngtree.com/png-vector/20240123/ourlarge/pngtree-banana-fruit-png-png-image_11463666.png',
            description: 'Frutas frescas e saudáveis, para um lanche nutritivo.', 
            category: 1,
        },
    ]
};
export const products = data.products;
export const categories = data.categories;
