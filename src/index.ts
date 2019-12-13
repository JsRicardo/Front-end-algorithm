import { TuSearch, Tu } from "./erwei/two-tu/tu/tu";

const a = new Tu("a");
const b = new Tu("b");
const c = new Tu("c");
const d = new Tu("d");
const e = new Tu("e");

a.neighbor.push(b, c);
b.neighbor.push(a, d);
c.neighbor.push(a, d);
d.neighbor.push(b, c, e);
e.neighbor.push(d);


console.log(TuSearch.bfs([a], 'e'))