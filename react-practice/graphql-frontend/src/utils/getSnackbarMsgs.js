/**
 * helper functions for custom subscription msgs
 */

export const bookCreatedMsg = (title) =>
  `New Book Added!\nBook Title: ${title}`;

export const bookDeletedMsg = (title) => `Book Deleted!\nBook Title: ${title}`;

export const bookUpdatedMsg = (id, title) =>
  `Book Updated!\nBook Updated: ${title}\nBook Id: ${id}`;

export const authorCreatedMsg = (name) => `New Author Added!\nWelcome: ${name}`;

export const authorDeletedMsg = (name) =>
  `We'll See you Soon!\nGood Bye: ${name}`;

export const authorUpdatedMsg = (name) =>
  `What's In The Name?\n${name} Changed his/her name`;
