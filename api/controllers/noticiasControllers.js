module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers
};

function menuNoticiasControllers(req, res){
    res.render('noticias/frm_noticiasMenu.ejs', {title: 'Menu Noticias',
                                                 texto: 'Menu de Noticias'});
}

function menuNoticiasEsporteControllers(req, res){
    res.render('noticias/frm_noticiasEsporteMenu.ejs', {title: 'Menu Esporte',
                                                        texto: 'Menu de Esportes'});
}

function menuNoticiasEsporteFutebolControllers(req, res){
    res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {title: 'Menu Futebol',
                                                        texto: 'Menu de Futebol'});
}
