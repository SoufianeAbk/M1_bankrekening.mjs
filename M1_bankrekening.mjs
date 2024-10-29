import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

class Bankrekening {
    constructor(rekeningnummer, saldo, eigenaar) {
      this.rekeningnummer = rekeningnummer;
      this.saldo = saldo;
      this.eigenaar = eigenaar;
    }
  
    toonSaldo() {
      console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`);
    }
  
    overschrijving(ontvangerRekening, bedrag) {
      if (bedrag > this.saldo) {
        console.log('Onvoldoende saldo om de overschrijving te voltooien.');
      } else {
        this.saldo -= bedrag;
        ontvangerRekening.saldo += bedrag;
        console.log(`€${bedrag} is overgeschreven naar rekeningnummer ${ontvangerRekening.rekeningnummer}.`);
      }
    }
  }
  
  const bankrekening = new Bankrekening('13789', 100, 'Jan Jansen');
  const rekening2 = new Bankrekening('12002', 20, 'Piet Pietersen');
  
  bankrekening.toonSaldo();
  rekening2.toonSaldo();
  
  bankrekening.overschrijving(rekening2, 50);
  
  bankrekening.toonSaldo();
  rekening2.toonSaldo();
  

process.exit()
