import expressPizzaria from '../images/expressPizzaria.png';
import habits from '../images/habits.png';
import notificationsService from '../images/notificationsService.jpg';
import spaceMusics from '../images/spaceMusics.png';
import flipTimer from '../images/flipTimer.png';
import planetCards from '../images/planetCards.png';

const projects = [
  {
    title: 'Express pizzaria',
    description: 'Este é um projeto fullstack de uma pizzaria fictícia que tem como objetivo possibilitar a realização de pedidos online de pizzas.',
    image: expressPizzaria,
    gitHubLink: 'https://github.com/Pedro-28/express-pizzaria',
    deployLink: 'https://express-pizzaria.vercel.app/'
  },
  {
    title: 'Habits',
    description: 'Este é um projeto fullstack de gerenciamento de hábitos, onde você pode cadastrar os hábitos que deseja concluir nos dias da semana desejados. O projeto foi desenvolvido com o objetivo de ajudar os usuários a organizar suas rotinas diárias e acompanhar o progresso de seus hábitos.',
    image: habits,
    gitHubLink: 'https://github.com/Pedro-28/habits',
    deployLink: null
  },
  {
    title: 'Notifications service',
    description: 'Este projeto é uma API para gerenciar notificações para usuários, desenvolvido utilizando os princípios do Clean Code, Clean Architecture e Programação Orientada a Objetos. Além disso, foi adotado o padrão de projeto Domain-Driven Design (DDD) e os princípios do SOLID para promover uma estrutura organizada e de fácil manutenção.',
    image: notificationsService,
    gitHubLink: 'https://github.com/Pedro-28/notifications-service',
    deployLink: null
  },
  {
    title: 'Flip timer',
    description: 'É um temporizador que simula um relógio flip retro, o projeto foi desenvolvido com react, css puro e a biblioteca swiper',
    image: flipTimer,
    gitHubLink: 'https://github.com/Pedro-28/FlipTimer',
    deployLink: 'https://flip-timer.vercel.app/'
  },
  {
    title: 'Planet cards',
    description: 'É um projeto simples sobre os planetas do sistema solar, foi desenvolvido com html, css puro e javascript',
    image: planetCards,
    gitHubLink: 'https://github.com/Pedro-28/planet-cards',
    deployLink: 'https://pedro-28.github.io/planet-cards/'
  },
  {
    title: 'Space musics',
    description: 'É um app de músicas fictício, o projeto foi desenvolvido pensando na responsividade, utilizei react, css puro, api do iTunes e localstorage',
    image: spaceMusics,
    gitHubLink: 'https://github.com/Pedro-28/SpaceMusics',
    deployLink: 'https://space-musics.vercel.app/'
  },
];

export default projects;
