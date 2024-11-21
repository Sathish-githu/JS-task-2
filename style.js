// Question-1

class Book {
    title;
    author;
    isbn;
    costructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    checkOut() {
        console.log(this.title, "has been taken")
    }
    returnBook() {
        console.log(this.title, "has been returned")
    }
    updateTitle(newTitle) {
        this.title = newTitle;
    }
}
var b1 = new Book("Harry", "JK robin", 100);
b1.checkOut();
b1.returnBook();
b1.updateTitle("Harry Potter");
console.log(b1);

console.log("--------------------------------")

// Question-2

class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(amount) {
        console.log(this.price,100, "discount is applied")
    }
    getPriceAfterDiscount(amount) {
        console.log(this.price,1900, "price after discount")
    }
}
var Shirt = new Product("Tshirt", 1000, "cotton");
Shirt.applyDiscount();
Shirt.getPriceAfterDiscount();
console.log(Shirt);

console.log("-----------------------------")

// Qyestion-3


class BankAccount {
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName, accountNumber,balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance=balance;
    }
    deposit(amount){
        console.log(this.accountHolderName,amount,"has been deposited")

    } 
    withdraw(amount){
        console.log(this.accountHolderName,amount,"has been withdrawen")
    }
    getBalance(){
        console.log(this.accountNumber,"of",this.accountHolderName,"has balance of",this.balance)
    }
}
var Account=new BankAccount("Sathish",795549415,5000);
Account.deposit(7000);
Account.withdraw(2000);
Account.getBalance(5000);
console.log(Account);

console.log("------------------------------------")

// Question-4

class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log('car mileage is',this.mileage);
        this.mileage=miles+this.mileage;
    }
    getMileage(){
        console.log('The mileage of',this.licensePlate,'is','100');
    }
}
var car = new Vehicle ('super fast','APDB7036' ,'100');
car.drive(50);
car.getMileage();
console.log(car);

console.log("-----------------------------------")

// QUESTION 5


class Bsection{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log(this.name,'current garde is', this.grade);
    }
}
var Student = new Bsection('anuradha','A');
Student.setGrade('A');
Student.getGrade();
console.log(Student);