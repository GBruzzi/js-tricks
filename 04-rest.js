const me = {
  id: 1,
  name: 'Guilherme',
  addres: 'BH',
  phone: '3423423421',
  skills: ['node', 'react', 'BD']
}

// Rest operator ( pegar o resto das propriedades )
const { addres, skills, ...restUser } = me;

const [ primary, ...restSkills ] = skills;

console.log(primary);
console.log(restUser);
console.log(restSkills);