class Jmena {
    constructor(vstupniJmeno) {
        this.vstupniJmeno = vstupniJmeno;
     
        this.titulPredJmenem = [];
        this.titulZaJmenem = [];

        this.vycistiJmeno(this.vstupniJmeno);
        this.tvorbaTitulu();
        this.naplneniTitulu(this.vstupniJmeno);
        this.rozdelitJmeno(this.vstupniJmeno);
        this.sestavJmeno();

    }

    vycistiJmeno(n) {
        //zbytecne opakovani
        for (let t = 0; t < 10; t++) {
            n = n.replace("ph.d.", "ph");
            n = n.replace("ph.d", "ph");
            n = n.replace("phd", "ph");
            n = n.replace(",", " ");
            n = n.replace(".", " ");
            n = n.replace("  ", " ");
        }
        n = n.split(" ");
        this.vstupniJmeno = n;
    }

    tvorbaTitulu() {
        let prof = new Titul("prof", "prof. ");
        let doc = new Titul("doc", "doc. ");
        let mudr = new Titul("mudr", "MUDr. ");
        let phdr = new Titul("phdr", "PhDr. ");
        let pharmdr = new Titul("pharmdr", "PharmDr. ");
        let rndr = new Titul("rndr", "RNDr. ");
        let ing = new Titul("ing", "Ing. ");
        let mgr = new Titul("mgr", "Mgr. ");
        let bc = new Titul("bc", "Bc. ");
        let phd = new Titul("ph", ", Ph.D.");
        let dis = new Titul("dis", ", DiS.");
        let csc = new Titul("csc", ", CSc.");
        let mba = new Titul("mba", ", MBA");
        this.titulyPredJmeny = [prof, doc, mudr, phdr, rndr, pharmdr, ing, mgr, bc];
        this.titulyZaJmeny = [dis, phd, csc, mba];
    }

    naplneniTitulu(jmeno) {
        for (let t = 0; t < this.titulyPredJmeny.length; t++) {
            if (jmeno.includes(this.titulyPredJmeny[t].nazev)) {
                this.titulPredJmenem.push(this.titulyPredJmeny[t].text);
                jmeno.splice(jmeno.indexOf(this.titulyPredJmeny[t].nazev), 1);
            }
        }
        for (let t = 0; t < this.titulyZaJmeny.length; t++) {
            if (jmeno.includes(this.titulyZaJmeny[t].nazev)) {
                this.titulZaJmenem.push(this.titulyZaJmeny[t].text);
                jmeno.splice(jmeno.indexOf(this.titulyZaJmeny[t].nazev), 1);
            }
        }
        this.vstupniJmeno = jmeno;
        console.log("test 5: " + this.vstupniJmeno);
        console.log("Test 3: " + this.titulPredJmenem + jmeno + this.titulZaJmenem); // funguje
    }

    rozdelitJmeno(jmeno) {
        if (jmeno.includes("")) {
            jmeno.splice(jmeno.indexOf(""), 1);            
        }
        if (jmeno.length == 2) {
            this.vlastniJmeno = jmeno[0].charAt(0).toUpperCase() + jmeno[0].slice(1);
            this.vlastniPrijmeni = jmeno[1].charAt(0).toUpperCase() + jmeno[1].slice(1);
            console.log("test 8: " + this.vlastniPrijmeni);
        } else if (jmeno.length == 3) {
            this.vlastniJmeno = jmeno[0].charAt(0).toUpperCase() + jmeno[0].slice(1)
            this.vlastniPrijmeni = jmeno[1].charAt(0).toUpperCase() + jmeno[1].slice(1)
            this.vlastniPrijmeni = this.vlastniPrijmeni + " " + jmeno[2].charAt(0).toUpperCase() + jmeno[2].slice(1)
            console.log("test 9: " + this.vlastniPrijmeni);
        }
    }

    sestavJmeno() {
        if (this.prehodit) {
            this.celeJmeno = this.titulPredJmenem.join("") + this.vlastniPrijmeni + " " + this.vlastniJmeno + this.titulZaJmenem.join("");
        } else {
            this.celeJmeno = this.titulPredJmenem.join("") + this.vlastniJmeno + " " + this.vlastniPrijmeni + this.titulZaJmenem.join("");
        }
        console.log("test na zaver: " + this.titulPredJmenem);
        console.log("test celeho jmena: " + this.celeJmeno)
    }

}