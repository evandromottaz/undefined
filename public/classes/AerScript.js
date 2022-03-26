"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AerScript = void 0;
class AerScript {
    mod019(offer) {
        const mod019 = {
            origin: 'origem_de',
            destiny: 'destino_para',
            cia: 'icone_companhias_aereas',
            value: [{ old: 'preco_de' }, { price1: 'preco_por_a_partir_de' }, { price2: '' }],
            category: 'texto_acima_valor',
            url: 'link_do_botao',
        };
        for (let i in mod019) {
            document.body.innerHTML += this.getElement(mod019[i], offer);
        }
    }
    getElement(param, value) {
        return `document.querySelector('[data-fieldname="${param}"] input').value = ${value}`;
    }
    liferayForm(data) {
        data.forEach(row => {
            for (let i in row) {
                console.log(this.mod019(row[i]));
            }
        });
    }
}
exports.AerScript = AerScript;
