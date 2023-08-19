// Object destructuring

const me = {
  id: 1,
  name: 'Guilherme',
  addres: 'BH',
  phone: '3423423421',
  skills: ['node', 'react', 'BD']
}

// Traditional way

const name = me.name;

console.log(name);

// Destructuring

const { addres, phone, id, skills } = me;

console.log(addres, phone, id);

const [ primary, secondary ] = skills;

console.log(primary,secondary);
