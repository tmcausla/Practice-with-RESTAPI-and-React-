import db from '../../db/db.js';

export const getItem = id => {
    try {
        const pet = db?.pets?.filter(pet => pet?.id === id)[0];
        return pet;

    } catch (err) {
        console.log("Error", err);
    }
}

export const listItems = () => {
    try {
        return db?.pets;

    } catch (err) {
        console.log("Error", err);
    }
}

export const editItem = (id, data) => {
    try {
        const idx = db.pets.findIndex(pet => pet.id === id);

        if (idx === -1) throw new Error ("Pet not found");
        else {
            db.pets[idx] = data;
            return db.pets[idx];
        }

    } catch (err) {
        console.log("Error", err);
    }
}

export const addItem = data => {
    try {
        const newPet = { id: db.pets.length + 1, ...data };
        db.pets.push(newPet);
        return newPet;

    } catch (err) {
        console.log("Error", err);
    }
}

export const deleteItem = id => {
    try {
        const idx = db.pets.findIndex(pet => pet.id === id);

        if (idx === -1) throw new Error("Pet not found");
        else {
            db.pets.splice(idx, 1);
            return db.pets;
        }

    } catch (err) {
        console.log("Error", err);
    }
}