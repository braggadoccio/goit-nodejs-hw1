import { nanoid } from "nanoid";

const contactsPath = path.join("db", "contacts.json");

const listContacts = async (contactId) => {
  try {
  } catch (error) {}
};

const getContactsById = async (contactId) => {
  try {
  } catch (error) {}
};

const removeContact = async (contactId) => {
  try {
  } catch (error) {}
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    const allContacts = [...contacts, newContact];
    await FileSystem.writeFile(
      contactsPath,
      JSON.stringify(allContacts, null, 2)
    );
    return newContact;
  } catch (error) {
    console.error("Error adding new contact:", error.message);
  }
};

export { listContacts, getContactsById, removeContact, addContact };
