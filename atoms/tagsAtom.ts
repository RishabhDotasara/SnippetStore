import { atom } from "recoil";

const tagsAtom = atom({
    key: "searchQuery",
    default: "",
})

export {tagsAtom};