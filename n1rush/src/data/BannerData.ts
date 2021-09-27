import mortalMimage from '../assets/img/principal_banner_mobile.jpg';
import mortalDimage from '../assets/img/principal_banner_desktop.jpg';
import redMimage from '../assets/img/principal_banner_mobile_02.jpg';
import redDimage from '../assets/img/principal_banner_desktop_02.jpg';

const DataInfo = [
    {
        key: 0,
        name: 'MORTAL KOMBAT',
        imageM: mortalMimage,
        imageD: mortalDimage, 
        valueF: '299',
        valueS:',99',
        text: `
        Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.
        `,
    },
    {
        key: 1,
        name: 'RED DEAD 2',
        imageM: redMimage,
        imageD: redDimage,
        valueF: '199',
        valueS:',99',
        text: `
        RDR 2 é um prólogo do primeiro jogo, ou seja, é ambientado um pouco antes da história original. O game se passa em 1899, quando ocorre o declínio do Velho Oeste Americano.
        `,
    }
]

export default DataInfo;