const routes = module.exports = require('next-routes')();

routes
.add('books', '/books/:slug')
/*
.add('blog', '/blog/:slug')
.add('user', '/user/:id', 'profile')
.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: 'beta', pattern: '/v3', page: 'v3'})
*/