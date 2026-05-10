interface IObserver {
  notify(phoneNumber: string): void;
}

class Telephone {
  private phoneNumbers: Set<string>;
  private observers: Set<IObserver>;

  constructor() {
    this.phoneNumbers = new Set<string>();
    this.observers = new Set<IObserver>();
  }

  public AddPhoneNumber(phoneNumber: string): void {
    this.phoneNumbers.add(phoneNumber);
  }

  public RemovePhoneNumber(phoneNumber: string): void {
    this.phoneNumbers.delete(phoneNumber);
  }

  public DialPhoneNumber(phoneNumber: string): void {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Cannot dial: The number ${phoneNumber} has not been added.`);
    }
  }

  public addObserver(observer: IObserver): void {
    this.observers.add(observer);
  }

  public removeObserver(observer: IObserver): void {
    this.observers.delete(observer);
  }

  public notifyObservers(phoneNumber: string): void {
    for (const observer of this.observers) {
      observer.notify(phoneNumber);
    }
  }
}

class PhoneNumberPrinter implements IObserver {
  public notify(phoneNumber: string): void {
    console.log(phoneNumber);
  }
}

class DialingPrinter implements IObserver {
  public notify(phoneNumber: string): void {
    console.log(`Now Dialling ${phoneNumber}`);
  }
}

// Set up the telephone
const telephone = new Telephone();

// Set up the observers
const simplePrinter = new PhoneNumberPrinter();
const dialPrinter = new DialingPrinter();

// Register the observers
telephone.addObserver(simplePrinter);
telephone.addObserver(dialPrinter);

// Add phone numbers
telephone.AddPhoneNumber("2347023232");
telephone.AddPhoneNumber("08012345678");

// Dial a phone number that has been added
telephone.DialPhoneNumber("2347023232");

// Try dialing a number that has not been added
telephone.DialPhoneNumber("09087654321");
