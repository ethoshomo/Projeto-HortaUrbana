// Multer é um middleware que trabalha com multipart/form-data
// para upload de arquivos. Ele adiciona um objeto 'file' ou 'files'
// no body por meio de declaração na rota (upload.single ou upload.array).
// Como parâmetro de single, devemos informar 'fieldname' (name = atributo input)

// Pacote utilizado para auxiliar no salvamento de arquivos
const multer = require('multer')

// Pacote para controlar o path do projeto
const path = require('path')

// Configuração de destinação e nome do arquivo
const storage = multer.diskStorage({

    // Configura onde o arquivo será salvo
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '..', '..', 'public', 'images'))
    },

    //Configura o nome do arquivo para evitar confusão
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// O objeto do multer previamente configurado realiza o upload.
const upload = multer({storage: storage})

module.exports = upload
