/// <reference path='./typings.d.ts' />
import * as json from "../data/awards.json";
import { months, I18nText, EntryDateType, Entry, RawEntry } from "./library";
const awards: RawEntry[] = json.default ? json.default : json;

const entries: Entry[] = [];
for (const re of awards) {
  entries.push(new Entry(re.date, re.text, re.type));
}

export default entries;
