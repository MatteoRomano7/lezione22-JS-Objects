class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}

// Esempio di utilizzo della classe User
const utente1 = new User("Mario", "Rossi", 30, "Milano");
const utente2 = new User("Luca", "Bianchi", 28, "Roma");

const risultatoConfronto = utente1.confrontaEta(utente2);
console.log(risultatoConfronto);
