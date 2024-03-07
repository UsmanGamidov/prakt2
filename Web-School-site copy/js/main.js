const teachers = [
  {
    img: './imgs/усман.png',
    name: 'Перкупский',
    position: 'Профессиональный перекуп',
    description: 'Он один из самых профессиональных перекупов в мире. Он работал в Гугле',
  },
  {
    img: './imgs/ислам.jpg',
    name: 'ДЖ ислам',
    position: 'Профессиональный скупатель курсов',
    description: 'Он один из самых профессиональных скупщиков курсов в мире. Он вышел на валберис',
  },
  {
    img: './imgs/мирзо.png',
    name: 'НГ мирзо',
    position: 'Профессиональный сис админ',
    description: 'Он один из самых профессиональных сис админов был бы но черный. Он работает в РЦО',
  },
  {
    img: './imgs/патхов.jpg',
    name: 'ДОТА МЕН',
    position: 'Профессиональный играет в доту',
    description: 'Он уже 2 недели не читал мангу пожтому лучший в мире.',
  },
  {
    img: './imgs/муха.jpg',
    name: 'Я не понял',
    position: 'Профессиональный чил мен',
    description: 'Он является максимально чил меном в компании',
  },
  {
    img: './imgs/миша.jpg',
    name: 'Миша опер',
    position: 'Профессионально держит район',
    description: 'Он являеться одним из лучших на своем районе(Универсам)',
  },
];

teachers.map((teacher) => {
  const teachersContainer = document.getElementById('teachers');
  const teacherContainer = document.createElement('div');
  teacherContainer.className = 'teacher col-lg-6 col-12 d-flex';
  // Img
  const teacherImage = document.createElement('img');
  teacherImage.src = teacher.img;
  teacherContainer.appendChild(teacherImage);
  /* Content */
  const content = document.createElement('div');
  content.className = 'content text-start ms-3';
  teacherContainer.appendChild(content);
  // Name
  const teacherName = document.createElement('h3');
  teacherName.className = 'name h5 mt-3';
  teacherName.textContent = teacher.name;
  content.appendChild(teacherName);
  // Position
  const teacherPosition = document.createElement('h4');
  teacherPosition.classPosition = 'position';
  teacherPosition.textContent = teacher.position;
  content.appendChild(teacherPosition);
  // description
  const teacherDescription = document.createElement('p');
  teacherDescription.classDescription = 'description';
  teacherDescription.textContent = teacher.description;
  content.appendChild(teacherDescription);
  // append to html
  return teachersContainer.appendChild(teacherContainer);
});