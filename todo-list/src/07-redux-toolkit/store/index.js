import { configureStore } from "@reduxjs/toolkit";

import text from "../form/text.slice";
import list from "../list/list.slice";

const store = configureStore({ reducer: { text, list } });

export default store;
