class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const pets = [];

function addPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  displayPetList();
  clearForm();
}

function displayPetList() {
  const petListContainer = document.getElementById("petList");
  petListContainer.innerHTML = "";

  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome Pet: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petListContainer.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById("petForm").reset();
}
