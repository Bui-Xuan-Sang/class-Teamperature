class Temperature {
    celsius;
    fahrenheit;
    kenvin;

    constructor(celsius, fahrenheit, kenvin) {
        this.celsius = celsius;
        this.fahrenheit = fahrenheit;
        this.kenvin = kenvin;
    }

    getCelsius() {
        return this.celsius;
    }

    setCelsius(celsius) {
        this.celsius = celsius;
    }

    getFahrenheit() {
        return this.fahrenheit;
    }
    getKenvin() {
        return this.kenvin;
    }
    getCelsiusToFahrenheit() {
        return this.celsius * 1.8000 + 32.00;
    }

    getCelsiusToKenvin() {
        return this.celsius + 273.15;
    }
}