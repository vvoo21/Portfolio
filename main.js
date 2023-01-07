const hamburger = document.querySelector('.bars');
const mainMenu = document.querySelector('.main-menu');
const overlay = document.querySelector('.overlay');
const cancel = document.querySelector('.cancel');
const links = document.querySelectorAll('.menu-item');
const cardsSection = document.querySelector('.middle');
const modalsSection = document.querySelector('.modal-container');

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
    image: 'img/React App.png',
    tittle: 'Crypto App',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2023'],
    description: 'This is my latest React project, I chose an API from The Crypto Compare which provides me with cryptocurrencies data, and then built my web app using React and Redux. The design guidelines are based on the Ballhead app by Nelson Sakwa',
    technologies: ['html', 'React Redux', 'css', 'javaScript'],
    linkLiveVersion: 'https://sensational-cupcake-53fe58.netlify.app/',
    linkSource: 'https://github.com/vvoo21/capstone-project-react',
  },

  {
    id: '2',
    image: 'img/Space.png',
    tittle: 'Space Travelers Hub',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'This project is as a team and We worked with the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    technologies: ['html', 'React Redux', 'css', 'javaScript'],
    linkLiveVersion: 'https://tiny-dolphin-850110.netlify.app/',
    linkSource: 'https://github.com/vvoo21/Space-Travelers-Hub',
  },

  {
    id: '3',
    image: 'img/Bookstore.png',
    tittle: 'Bookstore',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'Bookstore is a website that allows you to display a list of books, add a book, or remove a selected book',
    technologies: ['html', 'React', 'css', 'javaScript'],
    linkLiveVersion: 'https://deluxe-pie-88a66b.netlify.app/',
    linkSource: 'https://github.com/vvoo21/Bookstore',
  },

  {
    id: '4',
    image: 'img/math-magicians.png',
    tittle: 'Math Magicians',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and Read a random math-related quote.',
    technologies: ['html', 'React', 'css', 'javaScript'],
    linkLiveVersion: 'https://math-magicians-jgzl.onrender.com/',
    linkSource: 'https://github.com/vvoo21/math-magicians',
  },

  {
    id: '5',
    image: 'img/leaderboard.png',
    tittle: 'Leaderboard',
    infoProject: ['MICROVERSE', 'Full Stack Dev', '2022'],
    description: 'The leaderboard website displays scores submitted by different players. I built it using webpack, ES6 features, callbacks, and promises.',
    technologies: ['html', 'Webpack5', 'css', 'javaScript'],
    linkLiveVersion: 'https://vvoo21.github.io/Leaderboard/dist/',
    linkSource: 'https://github.com/vvoo21/Leaderboard',
  },
];

const createProjects = () => {
  projectsCard.forEach((project) => {
    const card1 = document.createElement('div');
    card1.classList.add('works');
    cardsSection.appendChild(card1);

    if (card1 % 2 === 1) {
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

      if (index === 0) {
        itemInfo.classList.add('client');
      }

      if (item === 'img/Counter.png') {
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

      if (index === 1) {
        technology.classList.add('ruby');
      }
    });

    const seeProject = document.createElement('button');
    seeProject.classList.add('button');
    seeProject.innerText = 'See Project';
    seeProject.id = project.id;
    infoCard.appendChild(seeProject);
  });
};

createProjects();

const createModal = () => {
  projectsCard.forEach((modal) => {
    const cardModal = document.createElement('div');
    cardModal.classList.add('overlay-card');
    cardModal.classList.add('hide');
    modalsSection.appendChild(cardModal);

    const modalNav = document.createElement('div');
    modalNav.classList.add('modal-nav');
    cardModal.appendChild(modalNav);

    const tittleModal = document.createElement('h2');
    tittleModal.classList.add('project-tittle', 'modal12');
    tittleModal.innerText = modal.tittle;
    modalNav.appendChild(tittleModal);

    const cancelModal = document.createElement('a');
    cancelModal.setAttribute('href', '#');
    cancelModal.classList.add('close');
    modalNav.appendChild(cancelModal);

    const cancelImg = document.createElement('img');
    cancelImg.setAttribute('src', 'img/cancel-icon.png');
    cancelImg.setAttribute('alt', 'cancel icon');
    cancelModal.appendChild(cancelImg);

    const clientRoleModal = document.createElement('ul');
    clientRoleModal.classList.add('project-info', 'modal28', 'modal12');
    cardModal.appendChild(clientRoleModal);

    modal.infoProject.forEach((item, index) => {
      const elementModal = document.createElement('li');
      clientRoleModal.appendChild(elementModal);

      if (index === 0) {
        elementModal.classList.add('client');
      }

      if (item === 'img/Counter.png') {
        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', item);
        imgItem.setAttribute('alt', 'point');
        elementModal.appendChild(imgItem);
      } else {
        elementModal.innerText = item;
      }
    });

    const imgModal = document.createElement('img');
    imgModal.classList.add('image', 'img-modal', 'modal12');
    imgModal.setAttribute('src', modal.image);
    imgModal.setAttribute('alt', 'project image');
    cardModal.appendChild(imgModal);

    const modalInfo = document.createElement('div');
    modalInfo.classList.add('modal-card-info');
    cardModal.appendChild(modalInfo);

    const textmodal = document.createElement('p');
    textmodal.classList.add('primary-text', 'modal-text', 'modal12');
    textmodal.innerText = modal.description;
    modalInfo.appendChild(textmodal);

    const technologiesModal = document.createElement('div');
    technologiesModal.classList.add('modal-tecnologies');
    modalInfo.appendChild(technologiesModal);

    const languages = document.createElement('ul');
    languages.classList.add('categories', 'categ-modal');
    technologiesModal.appendChild(languages);

    modal.technologies.push('github', 'ruby', 'Bootstraps');
    modal.technologies.splice(1, 1);

    modal.technologies.forEach((lang, index) => {
      const langModal = document.createElement('li');
      langModal.innerText = lang;
      languages.appendChild(langModal);

      if (index > 2) {
        langModal.classList.add('ruby');
      }
    });

    const imgDevider = document.createElement('img');
    imgDevider.classList.add('img-devider');
    imgDevider.setAttribute('src', 'img/devider-icon.png');
    imgDevider.setAttribute('alt', 'devider icon');
    technologiesModal.appendChild(imgDevider);

    const btnsModal = document.createElement('div');
    btnsModal.classList.add('btn-modal');
    technologiesModal.appendChild(btnsModal);

    const btnSee = document.createElement('a');
    btnSee.classList.add('button', 'btn-link');
    btnSee.setAttribute('href', modal.linkLiveVersion);
    btnSee.innerText = 'See live';
    btnsModal.appendChild(btnSee);

    const seeIcon = document.createElement('img');
    seeIcon.classList.add('icon-btn');
    seeIcon.setAttribute('src', 'img/see-live.png');
    seeIcon.setAttribute('alt', 'link liveVersion');
    btnSee.appendChild(seeIcon);

    const btnSource = document.createElement('a');
    btnSource.classList.add('button', 'btn-link');
    btnSource.setAttribute('href', modal.linkSource);
    btnSource.innerText = 'See Source';
    btnsModal.appendChild(btnSource);

    const sourceIcon = document.createElement('img');
    sourceIcon.classList.add('icon-btn');
    sourceIcon.setAttribute('src', 'img/see-source.png');
    sourceIcon.setAttribute('alt', 'link source');
    btnSource.appendChild(sourceIcon);
  });
};

createModal();

const modal = document.querySelectorAll('.overlay-card');

cardsSection.addEventListener('click', (e) => {
  if (e.target.textContent === 'See Project') {
    const { id } = e.target;
    modal[id - 1].classList.remove('hide');
    modalsSection.classList.remove('hide');
  }
});

modalsSection.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('close')) {
    modalsSection.classList.add('hide');
    e.target.parentElement.parentElement.parentElement.classList.add('hide');
  } else if (e.target.classList.contains('modal-container')) {
    modalsSection.classList.add('hide');
    modal.forEach((element) => element.classList.add('hide'));
  }
});

// variables

const userName = document.querySelector('#name');
const userMsg = document.querySelector('#message-text');
const userEmail = document.querySelector('#mail');
const errorMsg = document.querySelector('.msg');
const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  if (emailRegex.test(userEmail.value)) {
    errorMsg.textContent = '';
  } else {
    e.preventDefault();
    errorMsg.textContent = 'Please use lowercase for a valid email address.';
  }
});

form.addEventListener('input', () => {
  const contactForm = {
    name: userName.value,
    email: userEmail.value,
    message: userMsg.value,
  };

  localStorage.setItem('inputForm', JSON.stringify(contactForm));
});
