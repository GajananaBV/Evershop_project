class BankUser {
  public bankName: string;
  protected readonly owner: string;
  protected balance: number;
  accountType: string;

  constructor(bankName: string, owner: string, accountType: string, balance: number) {
    this.bankName = bankName;
    this.owner = owner;
    this.accountType = accountType;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  showBalance(): void {
    console.log(`Bank NAME: ${this.bankName}`);
    console.log(
      `Owner: ${this.owner}, Account Type: ${this.accountType}, Balance: ${this.balance}`
    );
  }
}

// SavingsAccount
class SavingsAccount extends BankUser {
  constructor(bankName: string, owner: string, balance: number) {
    super(bankName, owner, "Savings", balance);
  }

  addInterest(rate: number): void {
    const interest = (this.balance * rate) / 100;
    this.deposit(interest);
    console.log(`Interest added: ${interest}`);
  }
}

// CurrentAccount
class CurrentAccount extends BankUser {
  private overdraftLimit: number;

  constructor(bankName: string, owner: string, balance: number, overdraftLimit: number) {
    super(bankName, owner, "Current", balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    if (amount > this.balance + this.overdraftLimit) {
      console.log("Exceeded overdraft limit!");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }
}


const savings = new SavingsAccount("STATE BANK OF INDIA", "Gajanan", 5000);
savings.showBalance();
savings.deposit(2000);
savings.addInterest(5);
savings.showBalance();

const current = new CurrentAccount("STATE BANK OF INDIA", "Abhijit", 5000, 2000);
current.showBalance();
current.deposit(1000);
current.withdraw(6000); 
current.showBalance();
current.withdraw(2000); 
