
// buisness logic for AddressBook
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] !== undefined) {
        return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;

};

AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
    return false;
    }
    delete this.contacts[id];
    return true;
};



//buisness logic for contact
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

Contact.prototype.update = function(newFirstName, newLastName, newPhoneNumber) {
    if (newFirstName !== this.firstName || newLastName !== this.lastName || newPhoneNumber !== this.phoneNumber) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.phoneNumber = newPhoneNumber;
    }
}
