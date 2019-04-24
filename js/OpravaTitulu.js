class OpravaTitulu {
  constructor() {
    this.hotovaJmena = [];
    this.vlozenaJmena = document.getElementById("jmena");
    this.potvrditButton = document.getElementById("potvrdit");
    this.prehoditButton = document.getElementById("prehodit");

    this.opravaJmen();

  }

  opravaJmen() {
    this.potvrditButton.onclick = () => {
      this.prehodit = false;
      this.hotovaJmena = [];
      const jmena = this.vlozenaJmena.value.split(/\n/g);
      console.log("test zobrazení jmen: " + jmena);

      for (let i = 0; i < jmena.length; i++) {
        let jmeno = new Jmena (jmena[i].toLocaleLowerCase());
        console.log(jmeno.vstupniJmeno);
        this.hotovaJmena.push(jmeno.celeJmeno);
      };
      console.log(this.hotovaJmena);
      document.getElementById("prostorNaJmena").innerHTML = this.hotovaJmena.join("<br>");
    };
    this.prehoditButton.onclick = () => {
      this.prehodit = true;
      this.hotovaJmena = [];
      const jmena = this.vlozenaJmena.value.split(/\n/g);
      console.log("test zobrazení jmen: " + jmena);

      for (let i = 0; i < jmena.length; i++) {
        let jmeno = new Jmena (jmena[i].toLocaleLowerCase());
        console.log(jmeno.vstupniJmeno);
        this.hotovaJmena.push(jmeno.titulPredJmenem + jmeno.vlastniPrijmeni + " " + jmeno.vlastniJmeno + jmeno.titulZaJmenem);
      };
      console.log(this.hotovaJmena);
      document.getElementById("prostorNaJmena").innerHTML = this.hotovaJmena.join("<br>");
    };
  }
}