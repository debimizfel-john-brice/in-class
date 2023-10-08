const t1 = new Test<boolean>(true);
t1.display();

const t2 = new Test<string>("true");

//* -----------------

const message1 = new SMS("0533518816", "😄");
message1.send();
const message2 = new SMS("0233518345", ["Hello", 123, "world"]);
message2.send();
const message3 = new SMS("0453518816", true);
message3.send();

