/*
 * Arquivo: db-css.js
 * 
 * Deinar Bottamedi
 * 16/08/2017
 * 
 * Insere classes a partir de dados passados no atributo 'db-css'
 * NECESSITA JQUERY
 * 
 * Padrao completo: 
 * db-css='propriedade|valor|unidade de medida'
 * 
 * Padrao resumido (considera unidade de medida = 'px': 
 * db-css='propriedade|valor' 
 * 
 * 
 * Para atribuito um css 'width: 30px' coloque db-css='width|30' ou sb-css='w|30'
 * Para atribuito um css 'margin-left: 50%' coloque db-css='margin-left|50|%' ou db-css='ml|50|%'
 * 
 * Pode usar varios ao mesmo tempo, como: db-css='display|block color|red w|100'
 * 
 * Exemplo: <p db-css='c|red cursor|pointer'>TEXTE DE TEXTO</p>
 * 
 * 
 * Siglas aceitas para propriedade:
 * 
 * 'w' = 'width'
 * 'h' = 'height';
 * 'c' = 'color';
 * 'bc' = 'background-color';
 * 'fl' 'float';
 * 'ta' = 'text-align';
 * 'td' = 'text-decoration';
 * 'm' = 'margin';
 * 'ml'= 'margin-left';
 * 'mr' = 'margin-right';
 * 'mt' = 'margin-top';
 * 'mb' = 'margin-bottom';
 * 'p' = 'padding';
 * 'pl' = 'padding-left';
 * 'pr' = 'padding-right';
 * 'pt' = 'padding-top';
 * 'pb' = 'padding-bottom';
 * 'f' = 'font';
 * 'fs' = 'font-size';
 * 'fst' = 'font-style';
 * 'ff' = 'font-family';
 * 'fw' = 'font-weight';
 * 'lh' = 'line-height';
 * 'd' = 'display';
 * 
 */
$(document).ready(function () {

    //percorre todos com atributo db-css
    $('[db-css]').each(function () {
        //variavel que recebera as propriedades
        var add = "";
        
        //cria array com as propriedades passadas
        var values = $(this).attr('db-css').split(' ');
        //value[0] = propriedade
        //value[1] = valor
        //value[2] = unidade de medida

        //verifica se houve ao menos uma propriedade
        if (values[0] !== undefined) {
            
            //percorre os atributos
            for (var i = 0; i < values.length; i++) {
                
                //criar array com atributo e valor
                var value = values[i].split('|');
                
                //verifica siglas suportadas
                if (value[0] === 'w') {
                    var attr = 'width';
                } else if (value[0] === 'h') {
                    var attr = 'height';
                } else if (value[0] === 'c') {
                    var attr = 'color';
                } else if (value[0] === 'bc') {
                    var attr = 'background-color';
                } else if (value[0] === 'fl') {
                    var attr = 'float';
                } else if (value[0] === 'ta') {
                    var attr = 'text-align';
                } else if (value[0] === 'td') {
                    var attr = 'text-decoration';
                } else if (value[0] === 'm') {
                    var attr = 'margin';
                } else if (value[0] === 'ml') {
                    var attr = 'margin-left';
                } else if (value[0] === 'mr') {
                    var attr = 'margin-right';
                } else if (value[0] === 'mt') {
                    var attr = 'margin-top';
                } else if (value[0] === 'mb') {
                    var attr = 'margin-bottom';
                } else if (value[0] === 'p') {
                    var attr = 'padding';
                } else if (value[0] === 'pl') {
                    var attr = 'padding-left';
                } else if (value[0] === 'pr') {
                    var attr = 'padding-right';
                } else if (value[0] === 'pt') {
                    var attr = 'padding-top';
                } else if (value[0] === 'pb') {
                    var attr = 'padding-bottom';
                } else if (value[0] === 'f') {
                    var attr = 'font';
                } else if (value[0] === 'fs') {
                    var attr = 'font-size';
                } else if (value[0] === 'fst') {
                    var attr = 'font-style';
                } else if (value[0] === 'ff') {
                    var attr = 'font-family';
                } else if (value[0] === 'fw') {
                    var attr = 'font-weight';
                } else if (value[0] === 'lh') {
                    var attr = 'line-height';
                } else if (value[0] === 'd') {
                    var attr = 'display';
                }
                
                //se nao for encontrada a sigla
                else {
                    var attr = value[0];
                }
                
                //verifica se tem atributo e valor    
                if (value[0] !== undefined && value[1] !== undefined && value[1] !== '') {
                    var val = value[1];
                    
                    //verifica se valor foi um numero e falta medida, adicionando 'px'
                    if (!isNaN(value[1]) && !value[2]) {
                        val = val + 'px';
                    }
                    
                    //adiciona a medida passada
                    else if (value[2]) {
                        val = val + value[2];
                    }
                    
                    //monta o(s) item(ns) da classe
                    var add = add + attr + ':' + val + ';';
                }
            }
        }
        //verificar se tem algo para adicionar uma classe
        if (add !== '') {
            
            //verifica de contador foi iniciado
            if (typeof id_DB === 'undefined') {
                id_DB = 0;
            } else {
                id_DB++;
            }
            
            //monta a classe
            var classAdd = 'db-css-' + id_DB;
            var add = '\n.' + classAdd + '{' + add + '}\n';
            
            //verifica se existe um <style> no head do documento
            if ($("head style").length > 0) {
                $("head style").append(add);
            } else {
                $('<style>')
                        .prop('type', 'text/css')
                        .html(add)
                        .appendTo('head');
            }
            
            //adicioanr classe criada
            $(this).addClass(classAdd);
        }
        
        //remove propriedade db-css, mesmo se nao for criada a classe
        $(this).removeAttr('db-css');
    });
});