interface OnyeNlebaAnya {
  notify(nọmba: string): void;
}

class Ekwenti {
  private nọmbaEkwenti: Set<string>;
  private ndịNlebaAnya: Set<OnyeNlebaAnya>;

  constructor() {
    this.nọmbaEkwenti = new Set<string>();
    this.ndịNlebaAnya = new Set<OnyeNlebaAnya>();
  }

  public AddPhoneNumber(nọmba: string): void {
    this.nọmbaEkwenti.add(nọmba);
  }

  public RemovePhoneNumber(nọmba: string): void {
    this.nọmbaEkwenti.delete(nọmba);
  }

  public DialPhoneNumber(nọmba: string): void {
    if (this.nọmbaEkwenti.has(nọmba)) {
      this.notifyObservers(nọmba);
    } else {
      console.log(`Enweghị ike ịkpọ: Achọtaghị nọmba a ${nọmba}`);
    }
  }

  public addObserver(onye: OnyeNlebaAnya): void {
    this.ndịNlebaAnya.add(onye);
  }

  public removeObserver(onye: OnyeNlebaAnya): void {
    this.ndịNlebaAnya.delete(onye);
  }

  public notifyObservers(nọmba: string): void {
    for (const onye of this.ndịNlebaAnya) {
      onye.notify(nọmba);
    }
  }
}

class OnyeNlebaAnyaMbu implements OnyeNlebaAnya {
  public notify(nọmba: string): void {
    console.log(nọmba);
  }
}

class OnyeNlebaAnyaAbo implements OnyeNlebaAnya {
  public notify(nọmba: string): void {
    console.log(`Now Dialling ${nọmba}`);
  }
}

// Set up the ekwenti (telephone)
const ekwenti = new Ekwenti();

// Set up the ndị nleba anya (observers)
const obi = new OnyeNlebaAnyaMbu();
const ngozi = new OnyeNlebaAnyaAbo();

// Register the observers
ekwenti.addObserver(obi);
ekwenti.addObserver(ngozi);

// Add phone numbers
ekwenti.AddPhoneNumber("2347023232");
ekwenti.AddPhoneNumber("08012345678");

// Dial a phone number that has been added
ekwenti.DialPhoneNumber("2347023232");

// Try dialing a number that has not been added
ekwenti.DialPhoneNumber("09087654321");
