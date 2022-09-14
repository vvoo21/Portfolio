const hamburger = document.querySelector('.bars');
const mainMenu = document.querySelector('.main-menu');
const overlay = document.querySelector('.overlay');
const cancel = document.querySelector('.cancel');
const links = document.querySelectorAll('.menu-item');
const cardsSection = document.querySelector('.middle');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}

const projectsCard = [
  {
    id: '1',
    image: 'img/desktop1.png',
    tittle: 'Tonic',
    infoProject: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '2',
    image: 'img/desktop2.png',
    tittle: 'Multi-Post Stories',
    infoProject: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '3',
    image: 'img/desktop3.png',
    tittle: 'Facebook 360',
    infoProject: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  },

  {
    id: '4',
    image: 'img/desktop4.png',
    tittle: 'Uber Navigation',
    infoProject: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    linkLiveVersion: 'https://vvoo21.github.io/Portfolio/',
    linkSource: 'https://github.com/vvoo21/Portfolio',
  }
]

const projectView = () => {
  projectsCard.forEach((project, index) => {

    const card1 = document.createElement('div');
    card1.classList.add('works');
    cardsSection.appendChild(card1);    

    if(card1 % 2 === 1) {
      card1.classList.add('works-2');
    }

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('project-image');
    card1.appendChild(imgContainer);

    const imgCard = document.createElement('img');
    imgCard.classList.add('image');
    imgCard.setAttribute('src', project.image);
    imgCard.setAttribute('alt', 'my first project');
    imgContainer.appendChild(imgCard);

    const infoCard = document.createElement('div');
    infoCard.classList.add('projects');
    card1.appendChild(infoCard);

    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('project-tittle');
    tittleCard.innerText = project.tittle;
    infoCard.appendChild(tittleCard);

    const clientRole = document.createElement('ul');
    clientRole.classList.add('project-info');
    infoCard.appendChild(clientRole);

    project.infoProject.splice(1, 0, 'img/Counter.png');
    project.infoProject.splice(3, 0, 'img/Counter.png');

    project.infoProject.forEach((item, index) => {
      const itemInfo = document.createElement('li');
      clientRole.appendChild(itemInfo);

      if(index === 0){
        itemInfo.classList.add('client');
      }
      
      if(item === 'img/Counter.png'){
        const itemImg = document.createElement('img');
        itemImg.classList.add('imgPoint');
        itemImg.setAttribute('src', item);
        itemImg.setAttribute('alt', 'point');
        itemInfo.appendChild(itemImg);
      } else {
        itemInfo.innerText = item;
      }
    });

    const textCard = document.createElement('p');
    textCard.classList.add('primary-text');
    textCard.innerText = project.description;
    infoCard.appendChild(textCard);

    const technologyCard = document.createElement('ul');
    technologyCard.classList.add('categories');
    infoCard.appendChild(technologyCard);

    project.technologies.forEach((item, index) => {
      const technology = document.createElement('li');
      technology.innerText = item;
      technologyCard.appendChild(technology);

      if(index === 1){
        technology.classList.add('ruby');
      }
    });

    const seeProject = document.createElement('button');
    seeProject.classList.add('button');
    seeProject.innerText = 'See Project';
    infoCard.appendChild(seeProject);

  });
}

projectView();

