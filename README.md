# DB CSS

Insere classes a partir de dados passados no atributo 'db-css'
NECESSITA JQUERY

Padrao completo: 
db-css='propriedade|valor|unidade de medida'

Padrao resumido (considera unidade de medida = 'px': 
db-css='propriedade|valor' 


Para atribuito um css 'width: 30px' coloque db-css='width|30' ou sb-css='w|30'

Para atribuito um css 'margin-left: 50%' coloque db-css='margin-left|50|%' ou db-css='ml|50|%'

Pode usar varios ao mesmo tempo, como: db-css='display|block color|red w|100'

Siglas aceitas para propriedade:
'w' = 'width';
'h' = 'height';
'c' = 'color';
'bc' = 'background-color';
'fl' 'float';
'ta' = 'text-align';
'td' = 'text-decoration';
'm' = 'margin';
'ml'= 'margin-left';
'mr' = 'margin-right';
'mt' = 'margin-top';
'mb' = 'margin-bottom';
'p' = 'padding';
'pl' = 'padding-left';
'pr' = 'padding-right';
'pt' = 'padding-top';
'pb' = 'padding-bottom';
'f' = 'font';
'fs' = 'font-size';
'fst' = 'font-style';
'ff' = 'font-family';
'fw' = 'font-weight';
'lh' = 'line-height';
'd' = 'display';
