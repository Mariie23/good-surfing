export default function findUser(value, key, users) {
  return users.find((user) => user[key].toLowerCase() === value);
}
