export const emergencias = [
    {
        id: 1,
        titulo: "Enchentes no Rio Grande do Sul",
        pais: "Brasil",
        localizacao: "Rio Grande do Sul",
        categoria: "Inundação",
        relevancia: "",
        data: "28/04/2024",
        descricao: "Fortes chuvas causam inundações severas, afetando milhares de pessoas e infraestruturas.",
        pedidos: 1250
    },
    {
        id: 2,
        titulo: "Queimada na Amazônia",
        pais: "Brasil",
        localizacao: "Amazônia",
        categoria: "Incêndio",
        relevancia: "",
        data: "09/12/2024",
        descricao: "Incêndios florestais de grandes proporções destroem a floresta, ameaçando a biodiversidade.",
        pedidos: 127
    },
    {
        id: 3,
        titulo: "Incêndio Florestal em Califórnia",
        pais: "Estados Unidos",
        localizacao: "Califórnia",
        categoria: "Incêndio",
        relevancia: "",
        data: "22/12/2024",
        descricao: "Fogo se espalha rapidamente pelas colinas, exigindo evacuações e mobilização de bombeiros.",
        pedidos: 843
    },
    {
        id: 4,
        titulo: "Onda de Calor Extremo na Europa",
        pais: "Sul da Europa",
        localizacao: "Sul da Europa",
        categoria: "Calor extremo",
        relevancia: "",
        data: "13/08/2024",
        descricao: "Temperaturas recordes causam problemas de saúde, incêndios e estresse hídrico.",
        pedidos: 300
    },
    {
        id: 5,
        titulo: "Terremoto no Japão",
        pais: "Terremoto",
        localizacao: "Sul da Europa",
        categoria: "Terremoto",
        relevancia: "",
        data: "02/06/2025",
        descricao: "Forte terremoto atinge a região, causando danos estruturais e interrupções em serviços.",
        pedidos: 980
    },
    {
        id: 6,
        titulo: "Enchentes em Bangladesh",
        pais: "Bangladesh",
        localizacao: "Sylhet",
        categoria: "Inundação",
        relevancia: "",
        data: "20/05/2025",
        descricao: "Chuvas de monções deixaram milhares de desabrigados em regiões rurais, danificando plantações e casas.",
        pedidos: 1020
    },
    {
        id: 7,
        titulo: "Incêndio em Valparaíso",
        pais: "Chile",
        localizacao: "Valparaíso",
        categoria: "Incêndio",
        relevancia: "",
        data: "11/01/2025",
        descricao: "Incêndio florestal atinge áreas urbanas, forçando evacuações e destruindo centenas de moradias.",
        pedidos: 540
    },
    {
        id: 8,
        titulo: "Surto de Dengue em Manila",
        pais: "Filipinas",
        localizacao: "Manila",
        categoria: "Saúde",
        relevancia: "",
        data: "25/03/2025",
        descricao: "Sistema de saúde sobrecarregado após aumento drástico de casos de dengue durante a estação chuvosa.",
        pedidos: 750
    },
    {
        id: 9,
        titulo: "Deslizamento em Medellín",
        pais: "Colômbia",
        localizacao: "Medellín",
        categoria: "Deslizamento",
        relevancia: "",
        data: "05/04/2025",
        descricao: "Chuvas intensas causam deslizamentos de terra em encostas urbanas, deixando mortos e desaparecidos.",
        pedidos: 390
    },
    {
        id: 10,
        titulo: "Terremoto em Taiwan",
        pais: "Taiwan",
        localizacao: "Hualien",
        categoria: "Terremoto",
        relevancia: "",
        data: "10/03/2025",
        descricao: "Sismo de magnitude 6.9 causa colapso de edifícios e bloqueios em estradas, dificultando resgates.",
        pedidos: 875
    },
    {
        id: 11,
        titulo: "Alerta de Tsunami no Pacífico Sul",
        pais: "Ilhas Salomão",
        localizacao: "Guadalcanal",
        categoria: "Tsunami",
        relevancia: "",
        data: "18/05/2025",
        descricao: "Após terremoto submarino, alerta de tsunami é emitido para dezenas de comunidades costeiras.",
        pedidos: 460
    },
    {
        id: 12,
        titulo: "Calor extremo no sul da Ásia",
        pais: "Índia",
        localizacao: "Nova Délhi",
        categoria: "Calor extremo",
        relevancia: "",
        data: "15/05/2025",
        descricao: "Temperaturas ultrapassam os 47°C, causando colapsos no fornecimento de energia e aumento de mortes por insolação.",
        pedidos: 670
    },
    {
        id: 13,
        titulo: "Crise humanitária em Gaza",
        pais: "Palestina",
        localizacao: "Faixa de Gaza",
        categoria: "Crises humanitarias",
        relevancia: "",
        data: "30/04/2025",
        descricao: "Conflitos armados intensificam a crise de abastecimento de água, alimentos e serviços médicos.",
        pedidos: 2100
    },
    {
        id: 14,
        titulo: "Furacão na Flórida",
        pais: "Estados Unidos",
        localizacao: "Miami",
        categoria: "Ciclone e furacão",
        relevancia: "",
        data: "12/09/2024",
        descricao: "Furacão categoria 4 atinge a costa, com ventos acima de 200 km/h e maré de tempestade.",
        pedidos: 1900
    }
]

emergencias.forEach((emergencia) => {
  if (emergencia.pedidos > 1000) {
    emergencia.relevancia = "Crítica";
  } else if (emergencia.pedidos > 600) {
    emergencia.relevancia = "Alta";
  } else if (emergencia.pedidos > 100) {
    emergencia.relevancia = "Média";
  } else {
    emergencia.relevancia = "Baixa";
  }
});