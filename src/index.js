const express = require('express')
const router = express.Router()

    .get('', async (req, res) => {
        res.status(200).json({
            "titulo": "Projeto Caramelo",
            "version": "1.0.0",
            "message": "Voltado para animais - gatos e cachororos - em situação de vunerabilidade na região metropolitana do Recife procurando uma lar temporário ou uma adoção responsável. Terá uma base de dados de hosts que pode ser abrigos, ONGs ou pessoas que se disponibilizam para abrigar os animais até sua possivel adoção."
        })
    })

module.exports = router