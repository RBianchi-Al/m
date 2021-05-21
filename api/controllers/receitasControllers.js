module.exports = {
    menuReceitasControllers,   
};

function menuReceitasControllers(req, res){
    res.render('receitas/frm_receitasMenu.ejs', {title: 'Menu Receitas',
                                                 texto: 'Menu de Receitas'});
}
