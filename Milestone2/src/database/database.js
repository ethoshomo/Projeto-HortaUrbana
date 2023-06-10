export const users = [
    {
        id: '45634563456',
        token: 'fasdfasdfasdf',
        nome: 'Carlos Filipe de Castro Lemos',
        rua: 'Av. São Carlense',
        bairro: 'Luftalla',
        cidade: 'Sanca',
        estado: 'SP',
        tel: '3452345',
        isAdministrator: true,
        isAdmin: true,
        email: 'admin@admin.com',
        password: '123456'
    },
    {
        id: '45634563457',
        token: '4wrefgwsdfgwergqwer',
        nome: 'João Gabriel Sasseron',
        rua: 'Av. São Carlense',
        bairro: 'Luft',
        cidade: 'Sanca',
        estado: 'SP',
        tel: '534252345',
        isAdministrator: true,
        isAdmin: false,
        email: 'prod@prod.com',
        password: '123456'
    },

    {
        id: '45634563458',
        token: '98ydasfg98hyads0fgy0sdf8yg',
        nome: 'Pão',
        rua: 'Av. São Carlense',
        bairro: 'Luft',
        cidade: 'Sanca',
        estado: 'SP',
        tel: '534252345',
        isAdministrator: false,
        isAdmin: false,
        email: 'user@user.com',
        password: '123456'
    }
]

export const produtos = [
    {
        id: 'Tomate',
        _id: '1029348102',
        descricao: 'Fresco',
        imgName: 'tomate.jpg',
        preco: '2.50',
        quantidade: '20',
        totalProduct: 1,
        produtor: 'João Gabriel Sasseron',
        id_produtor: '45634563457'
    },
    {
        id: 'Pepino',
        _id: '1029348103',
        descricao: 'Fresco',
        imgName: 'pepino.jpg',
        preco: '1.50',
        quantidade: '25',
        totalProduct: 1,
        produtor: 'João Gabriel Sasseron',
        id_produtor: '45634563457'
    },
    {
        id: 'Alface',
        _id: '1029348104',
        descricao: 'Fresco',
        imgName: 'alface.jpg',
        preco: '0.50',
        quantidade: '30',
        totalProduct: 1,
        produtor: 'Carlos Filipe de Castro Lemos',
        id_produtor: '45634563456'
    }
]