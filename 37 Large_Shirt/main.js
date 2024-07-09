function make_shirt(Siza, Message) {
    if (Siza === void 0) { Siza = "Large"; }
    if (Message === void 0) { Message = "I love typescript"; }
    console.log("You selected ".concat(Siza, " size with ").concat(Message, " printed on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Javascript");
