import { defineStore } from "pinia";

export const authStore = defineStore("authStore", () => {
  const users = [];
  console.log("users" + users.length);
});
