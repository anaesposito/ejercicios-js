const sumar = (nro1, nro2) => {
  return nro1 + nro2;
};
console.log(sumar(2, 3)); // 5
console.log(sumar(1.2, 3.4)); // 4.6
console.log(sumar(3, -5)); // -2

const restar = (nro1, nro2) => {
  return nro1 - nro2;
};
console.log(restar(3, 2)); // 1
console.log(restar(10, 5.5)); // 4.5
console.log(restar(3, 5)); // -2

const multiplicar = (nro1, nro2) => {
  return nro1 * nro2;
};

console.log(multiplicar(2, 3)); // 6
console.log(multiplicar(4, 0.5)); // 2

const dividir = (nro1, nro2) => {
  return nro1 / nro2;
};

console.log(dividir(2, 3)); // 0.666666666666
console.log(dividir(1.2, 3.4)); // 0.35294117647058826
console.log(dividir(3, -5)); // -0.6

const calcularAreaTriangulo = (nro1, nro2) => {
  return (nro1 * nro2) / 2;
};

console.log(calcularAreaTriangulo(3, 4)); // 6
console.log(calcularAreaTriangulo(5, 6)); // 15

const gritar = (palabra) => {
  let grito = "¡" + palabra + "!";
  return grito;
};

console.log(gritar("hola")); // ¡hola!
console.log(gritar("aaaaaa")); // ¡aaaaaa!

const obtenerNombreCompleto = (nombre, apellido) => {
  let nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
};

console.log(obtenerNombreCompleto("Ada", "Lovelace")); // 'Ada Lovelace'
console.log(obtenerNombreCompleto("Ana", "Esposito"));

const saludar = (nombre) => {
  let saludo = `Hola ${nombre}, un gusto conocerte`;
  return saludo;
};
console.log(saludar("Ada")); // 'Hola Ada, un gusto conocerte'
console.log(saludar("Ana"));

const saludarGritando = (nombre, apellido) => {
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  const saludo = saludar(nombreCompleto);
  const grito = gritar(saludo);
  return grito;
};

console.log(saludarGritando("Ada", "Lovelace")); // ¡Hola Ada Lovelace, un gusto conocerte!

const obtenerDatosDeCiudad = (ciudad, poblacion, pais) => {
  const datosCompletos = `La ciudad de ${ciudad} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}`;
  return datosCompletos;
};

console.log(obtenerDatosDeCiudad("Santa Fe", 545606, "Argentina")); // 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'
console.log(obtenerDatosDeCiudad("Amsterdam", 9283839, "Paises Bajos"));
console.log(obtenerDatosDeCiudad("Buenos Aires", 37362628, "Argentina"));

const convertirHorasEnSegundos = (hora) => {
  const tiempo = hora * 60 * 60;
  return tiempo;
};

console.log(convertirHorasEnSegundos(1)); // 3600
console.log(convertirHorasEnSegundos(3)); // 10800
console.log(convertirHorasEnSegundos(4.5)); // 16200

const calcularPerimetroRectangulo = (ancho, alto) => {
  const calculo = (ancho + alto) * 2;
  return calculo;
};

console.log(calcularPerimetroRectangulo(3.2, 5)); // 16.4
console.log(calcularPerimetroRectangulo(10, 20)); // 60

const calcularPorcentaje = (numero, porciento) => {
  const porcentaje = (porciento * numero) / 100;
  return porcentaje;
};

console.log(calcularPorcentaje(100, 15)); // 15
console.log(calcularPorcentaje(10, 50)); // 5
console.log(calcularPorcentaje(200, 10)); // 20

const sumarPorcentaje = (numero, porciento) => {
  const porcentaje = calcularPorcentaje(numero, porciento);
  const sumadoTotal = porcentaje + numero;
  return sumadoTotal;
};

console.log(sumarPorcentaje(100, 15)); // 115
console.log(sumarPorcentaje(10, 50)); // 15
console.log(sumarPorcentaje(200, 10)); // 220

const restarPorcentaje = (numero, porciento) => {
  const porcentaje = calcularPorcentaje(numero, porciento);
  const restaTotal = numero - porcentaje;
  return restaTotal;
};

console.log(restarPorcentaje(100, 15)); // 85
console.log(restarPorcentaje(10, 40)); // 6
console.log(restarPorcentaje(200, 10)); // 180

const calcularFPS = (fps, minutos) => {
  const totalMinutos = 60 * minutos;
  const totalFps = fps * totalMinutos;
  return totalFps;
};
console.log(calcularFPS(1, 1)); // 60
console.log(calcularFPS(10, 2)); // 1200
console.log(calcularFPS(2, 3)); // 360

const obtenerRivales = (rival1, rival2) => {
  const rivales = `${rival1} vs. ${rival2}`;
  return rivales;
};

console.log(obtenerRivales("JavaScript", "Python")); // `JavaScript vs. Python`
console.log(obtenerRivales("Coca", "Pepsi")); // `Coca vs. Pepsi`
console.log(obtenerRivales("Perros", "Gatos")); // `Perros vs. Gatos`

const generarEmail = (usuario, dominio) => {
  const email = `${usuario}@${dominio}.com`;
  return email;
};
console.log(generarEmail("adalovelace", "gmail")); // 'adalovelace@gmail.com'
console.log(generarEmail("anaesposito", "gmail"));

const calcularPuntaje = (facil, normal, dificil) => {
  const resultado = facil * 3 + normal * 5 + dificil * 10;
  return resultado;
};

console.log(calcularPuntaje(3, 0, 0)); // 9
console.log(calcularPuntaje(0, 2, 1)); // 20
console.log(calcularPuntaje(5, 1, 2)); // 40
