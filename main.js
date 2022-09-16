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

    project.infoProject.splice(1, 0, 'img/Counter.svg');
    project.infoProject.splice(3, 0, 'img/Counter.svg');

    project.infoProject.forEach((item, index) => {
      const itemInfo = document.createElement('li');
      clientRole.appendChild(itemInfo);

      if (index === 0) {
        itemInfo.classList.add('client');
      }

      if (item === 'img/Counter.svg') {
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

      if (item === 'img/Counter.svg') {
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
    textmodal.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
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

//variables

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#mail');
const userMessage = document.querySelector('#message-text');
const errorMsg = document.querySelector('.msg');
const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const submitBtn = document.querySelector('.button-contactMe')

eventListeners()
function eventListeners() {

  document.addEventListener('DOMContentLoaded', submitForm);

  userName.addEventListener('blur', validateForm);
  userEmail.addEventListener('blur', validateForm);
  userMessage.addEventListener('blur', validateForm);
}

//functions 

function submitForm() {
  submitBtn.disabled = true;
}

function validateForm (e) {

  if(e.target.value.length > 0){
    showError('');
  } else {
    showError("Please, all fields are required.");
  }

  if(e.target.type === 'email'){
    if(emailRegex.test(e.target.value)){
      showError('');
    } else {
      showError('Please use lowercase for a valid email address.');
    }
  }

  if(userName.value !== '' && emailRegex.test(userEmail.value) && userMessage.value !== ''){
    submitBtn.disabled = false;
  } 

}

function showError(message) {
  errorMsg.textContent = message;
}