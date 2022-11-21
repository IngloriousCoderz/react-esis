import { configureStore } from "@reduxjs/toolkit";

import text from "./text";
import list from "./list";

const store = configureStore({ reducer: { text, list } });

export default store;
