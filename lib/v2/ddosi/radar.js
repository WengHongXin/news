module.exports = {
    'www.ddosi.org': {
        _name: '๐ฐ้จ่โ๐ฐ',
        '.': [
            {
                title: '้ฆ้กต',
                docs: 'https://docs.rsshub.app/blog.html#yu-cong-bo-ke-shou-ye',
                source: ['/'],
                target: '/ddosi/',
            },
            {
                title: 'ๅ็ฑป',
                docs: 'https://docs.rsshub.app/blog.html#yu-cong-bo-ke-fen-lei',
                source: ['/category/:category/'],
                target: '/ddosi/category/:category',
            },
        ],
    },
};
