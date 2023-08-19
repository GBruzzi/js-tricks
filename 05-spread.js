const me = {
  id: 1,
  name: 'Guilherme',
  addres: 'BH',
  phone: '3423423421',
  skills: ['node', 'react', 'BD'],
  student: true
}

// spread operator ( 'espealhar' os dados para cria um novo objeto )

const updatedMe = {
  ...me,
  skills: [...me.skills, 'next'],
  student: false
}

console.log(me);
console.log(updatedMe)