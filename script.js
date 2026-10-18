/* ==========================================
   SANTO ROSARIO HTML5
   Oraciones, misterios, progreso y audio
========================================== */

"use strict";

const CLAVE_GUARDADO = "santoRosarioProgresoV2";

const ORACIONES = {
  cruz: "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor, Dios nuestro. En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
  credo: "Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.",
  contricion: "Señor mío, Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío; por ser tú quien eres, bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. También me pesa que puedas castigarme con las penas del infierno. Ayudado de tu divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.",
  padreNuestro: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.",
  aveMaria: "Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
  gloria: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
  fatima: "Oh Jesús, perdónanos nuestros pecados, sálvanos del fuego del infierno y guía todas las almas al Cielo, especialmente aquellas que necesitan más de tu misericordia.",
  salve: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. Amén.",
  final: "Oh Dios, cuyo Hijo unigénito, por su vida, muerte y resurrección, nos alcanzó el premio de la vida eterna, concédenos a quienes meditamos estos misterios del Santísimo Rosario de la bienaventurada Virgen María, imitar lo que contienen y alcanzar lo que prometen. Por Jesucristo, nuestro Señor. Amén."
};

const MISTERIOS = {
  gozosos: {
    nombre: "Misterios Gozosos",
    dias: "Lunes y sábado",
    descripcion: "Contemplamos la alegría de la Encarnación y la infancia de Jesús.",
    items: [
      ["La Encarnación del Hijo de Dios", "Contemplamos la humildad de María al recibir el anuncio del ángel y su respuesta confiada a Dios."],
      ["La Visitación de María a su prima Isabel", "Meditamos la caridad de María, que se pone en camino para acompañar y servir a Isabel."],
      ["El Nacimiento del Hijo de Dios en Belén", "Contemplamos a Jesús que nace en sencillez y trae esperanza al mundo."],
      ["La Presentación del Niño Jesús en el templo", "Meditamos la fidelidad de María y José, que presentan a Jesús al Señor."],
      ["El Niño Jesús perdido y hallado en el templo", "Contemplamos a Jesús entre los doctores y renovamos nuestro deseo de buscar a Dios."]
    ]
  },
  luminosos: {
    nombre: "Misterios Luminosos",
    dias: "Jueves",
    descripcion: "Contemplamos la vida pública de Jesús y la luz de su misión.",
    items: [
      ["El Bautismo de Jesús en el Jordán", "Meditamos el bautismo de Jesús y la manifestación del amor del Padre."],
      ["La autorrevelación de Jesús en las bodas de Caná", "Contemplamos la confianza de María y el primer signo de Jesús."],
      ["El anuncio del Reino de Dios y la invitación a la conversión", "Escuchamos la llamada de Jesús a vivir con misericordia y cambiar el corazón."],
      ["La Transfiguración del Señor", "Contemplamos la gloria de Cristo que fortalece la fe de sus discípulos."],
      ["La institución de la Eucaristía", "Meditamos el don de Jesús, que se entrega y permanece con nosotros."]
    ]
  },
  dolorosos: {
    nombre: "Misterios Dolorosos",
    dias: "Martes y viernes",
    descripcion: "Acompañamos a Jesús en su pasión y entrega por amor.",
    items: [
      ["La oración de Jesús en el huerto", "Contemplamos la oración de Jesús en Getsemaní y su entrega confiada a la voluntad del Padre."],
      ["La flagelación del Señor", "Meditamos el sufrimiento de Jesús y su amor perseverante."],
      ["La coronación de espinas", "Contemplamos a Jesús humillado y recordamos la dignidad de cada persona."],
      ["Jesús con la cruz a cuestas camino del Calvario", "Acompañamos a Jesús en el camino de la cruz y pedimos fortaleza en nuestras pruebas."],
      ["La crucifixión y muerte de Jesús", "Meditamos el amor llevado hasta el extremo y la esperanza que nace de la entrega de Cristo."]
    ]
  },
  gloriosos: {
    nombre: "Misterios Gloriosos",
    dias: "Miércoles y domingo",
    descripcion: "Celebramos la Resurrección y la esperanza de la vida eterna.",
    items: [
      ["La Resurrección del Señor", "Celebramos a Cristo resucitado, vencedor del pecado y de la muerte."],
      ["La Ascensión del Señor al cielo", "Contemplamos a Jesús glorificado y renovamos nuestra esperanza."],
      ["La venida del Espíritu Santo", "Meditamos el don del Espíritu Santo, que fortalece y guía a la Iglesia."],
      ["La Asunción de María al cielo", "Contemplamos a María junto a Dios como signo de esperanza."],
      ["La coronación de María como Reina del cielo y de la tierra", "Meditamos la gloria de María y pedimos aprender de su fe y servicio."]
    ]
  }
};

let tipoActual = "gozosos";
let secuencia = [];
let indiceActual = 0;
let audioVocesEspanol = [];
let indiceVozAudio = 0;
let fraseEnReproduccion = false;

const $ = id => document.getElementById(id);

function crearPaso(titulo, texto, categoria, extra = {}) {
  return { titulo, texto, categoria, ...extra };
}

function construirSecuencia(tipo, usarCredo = true) {
  const grupo = MISTERIOS[tipo];
  const pasos = [];

  pasos.push(crearPaso("La señal de la Santa Cruz", ORACIONES.cruz, "INICIO DEL ROSARIO", {
    encabezado: "En el nombre del Padre, y del Hijo, y del Espíritu Santo."
  }));
  pasos.push(crearPaso(usarCredo ? "Credo de los Apóstoles" : "Acto de contrición",
    usarCredo ? ORACIONES.credo : ORACIONES.contricion, "ORACIÓN INICIAL"));
  pasos.push(crearPaso("Padrenuestro", ORACIONES.padreNuestro, "ORACIONES INICIALES", { beadKey: "inicio-0" }));
  for (let i = 1; i <= 3; i++) {
    pasos.push(crearPaso(`Avemaría ${i} de 3`, ORACIONES.aveMaria, "ORACIONES INICIALES", { beadKey: `inicio-${i}` }));
  }
  pasos.push(crearPaso("Gloria al Padre", ORACIONES.gloria, "ORACIONES INICIALES"));

  grupo.items.forEach((misterio, i) => {
    const n = i + 1;
    pasos.push(crearPaso(`Misterio ${n}: ${misterio[0]}`, "", `MISTERIO ${n} DE 5`, {
      meditacion: misterio[1],
      nombreMisterio: misterio[0],
      esAnuncio: true
    }));
    pasos.push(crearPaso("Padrenuestro", ORACIONES.padreNuestro, `MISTERIO ${n} · INICIO DE LA DECENA`, {
      beadKey: `decena-${n}-0`, nombreMisterio: misterio[0]
    }));
    for (let j = 1; j <= 10; j++) {
      pasos.push(crearPaso(`Avemaría ${j} de 10`, ORACIONES.aveMaria, `MISTERIO ${n} · AVEMARÍA ${j} DE 10`, {
        beadKey: `decena-${n}-${j}`, nombreMisterio: misterio[0], numeroAvemaria: j
      }));
    }
    pasos.push(crearPaso("Gloria al Padre", ORACIONES.gloria, `MISTERIO ${n} · DESPUÉS DE LAS 10 AVEMARÍAS`, {
      nombreMisterio: misterio[0], cierreDecena: true
    }));
    pasos.push(crearPaso("Jaculatoria de Fátima", ORACIONES.fatima, `MISTERIO ${n} · JACULATORIA`, {
      nombreMisterio: misterio[0], cierreDecena: true
    }));
  });

  pasos.push(crearPaso("La Salve", ORACIONES.salve, "ORACIONES FINALES"));
  pasos.push(crearPaso("Oración final", ORACIONES.final, "ORACIONES FINALES"));
  pasos.push(crearPaso("La señal de la Santa Cruz", ORACIONES.cruz, "DESPEDIDA"));
  return pasos;
}

function obtenerMisterioDelDia() {
  const dia = new Date().getDay();
  const tipoPorDia = {
    0: "gloriosos", 1: "gozosos", 2: "dolorosos",
    3: "gloriosos", 4: "luminosos", 5: "dolorosos", 6: "gozosos"
  };
  return tipoPorDia[dia];
}

function seleccionarMisterio(tipo) {
  if (!MISTERIOS[tipo]) return;
  detenerAudio(false);
  tipoActual = tipo;
  secuencia = construirSecuencia(tipo, true);
  indiceActual = 0;
  $("inicio").hidden = true;
  $("pantallaFinal").hidden = true;
  $("rosario").hidden = false;
  actualizarInterfaz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function continuarGuardado() {
  const guardado = leerProgreso();
  if (!guardado) return;
  tipoActual = guardado.tipo;
  secuencia = construirSecuencia(tipoActual, guardado.usarCredo !== false);
  indiceActual = Math.min(guardado.indice, secuencia.length - 1);
  $("inicio").hidden = true;
  $("pantallaFinal").hidden = true;
  $("rosario").hidden = false;
  actualizarInterfaz();
}

function guardarProgreso() {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify({
      tipo: tipoActual,
      indice: indiceActual,
      usarCredo: true,
      fecha: new Date().toISOString()
    }));
  } catch (error) {
    console.warn("No fue posible guardar el progreso.", error);
  }
}

function leerProgreso() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_GUARDADO));
    if (!datos || !MISTERIOS[datos.tipo] || !Number.isInteger(datos.indice) || datos.indice < 0) return null;
    return datos;
  } catch {
    return null;
  }
}

function actualizarInterfaz() {
  const paso = secuencia[indiceActual];
  if (!paso) return;

  $("tipoMisterio").textContent = MISTERIOS[tipoActual].nombre;
  $("progresoTexto").textContent = `Paso ${indiceActual + 1} de ${secuencia.length}`;
  const porcentaje = Math.round(((indiceActual + 1) / secuencia.length) * 100);
  $("progresoPorcentaje").textContent = `${porcentaje}%`;
  $("barraProgreso").style.width = `${porcentaje}%`;

  $("numeroMisterio").textContent = paso.categoria;
  $("tituloMisterio").textContent = paso.titulo;
  $("meditacion").textContent = paso.meditacion || (paso.nombreMisterio ? `Meditamos: ${paso.nombreMisterio}.` : "");
  $("meditacion").hidden = !paso.meditacion && !paso.nombreMisterio;
  $("tituloOracion").textContent = paso.esAnuncio ? "MEDITACIÓN DEL MISTERIO" : "ORACIÓN";
  $("textoOracion").textContent = paso.esAnuncio
    ? "Anuncia este misterio y dedica un momento a meditarlo antes de continuar con el Padrenuestro."
    : paso.texto;

  $("btnAnterior").disabled = indiceActual === 0;
  $("btnSiguiente").textContent = indiceActual === secuencia.length - 1 ? "Finalizar Rosario ✓" : "Continuar →";
  $("btnSiguiente").setAttribute("aria-label", indiceActual === secuencia.length - 1
    ? "Finalizar el Santo Rosario"
    : `Continuar: ${paso.esAnuncio ? "iniciar las oraciones del misterio" : "siguiente oración"}`);

  dibujarRosario();
  guardarProgreso();
  informarAudio("Listo para escuchar esta frase.");
}

function siguiente() {
  detenerAudio(false);
  if (indiceActual < secuencia.length - 1) {
    indiceActual++;
    actualizarInterfaz();
  } else {
    try { localStorage.removeItem(CLAVE_GUARDADO); } catch {}
    $("rosario").hidden = true;
    $("pantallaFinal").hidden = false;
    actualizarBotonContinuar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function anterior() {
  if (indiceActual <= 0) return;
  detenerAudio(false);
  indiceActual--;
  actualizarInterfaz();
}

function volverInicio() {
  detenerAudio(false);
  $("rosario").hidden = true;
  $("pantallaFinal").hidden = true;
  $("inicio").hidden = false;
  actualizarBotonContinuar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reiniciarRosario() {
  detenerAudio(false);
  indiceActual = 0;
  actualizarInterfaz();
}

function actualizarBotonContinuar() {
  const guardado = leerProgreso();
  $("continuarGuardado").hidden = !guardado;
  if (guardado) {
    const grupo = MISTERIOS[guardado.tipo];
    $("textoGuardado").textContent = `${grupo.nombre}: paso ${guardado.indice + 1}.`;
  }
}

function dibujarRosario() {
  const contenedor = $("rosarioCuentas");
  contenedor.replaceChildren();

  const iniciales = document.createElement("div");
  iniciales.className = "grupo-cuentas";
  agregarTituloGrupo(iniciales, "Oraciones iniciales");
  ["inicio-0", "inicio-1", "inicio-2", "inicio-3"].forEach((key, i) => {
    crearBotonCuenta(iniciales, key, i === 0 ? "P" : String(i), true);
  });
  contenedor.appendChild(iniciales);

  for (let n = 1; n <= 5; n++) {
    const grupo = document.createElement("div");
    grupo.className = "grupo-cuentas";
    agregarTituloGrupo(grupo, `Decena ${n}`);
    crearBotonCuenta(grupo, `decena-${n}-0`, "P", true);
    for (let j = 1; j <= 10; j++) {
      crearBotonCuenta(grupo, `decena-${n}-${j}`, String(j), false);
    }
    contenedor.appendChild(grupo);
  }

  sincronizarCuentas();
}

function agregarTituloGrupo(grupo, texto) {
  const titulo = document.createElement("div");
  titulo.className = "titulo-decena";
  titulo.textContent = texto;
  grupo.appendChild(titulo);
}

function crearBotonCuenta(grupo, beadKey, texto, grande) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = `cuenta-interactiva${grande ? " grande" : ""}`;
  boton.textContent = texto;
  const descripcionCuenta = beadKey.startsWith("inicio-")
    ? `oración inicial ${beadKey.split("-")[1]}`
    : `misterio ${beadKey.split("-")[1]}, cuenta ${beadKey.split("-")[2]}`;
  boton.setAttribute("aria-label", `Ir a ${descripcionCuenta}`);
  boton.dataset.beadKey = beadKey;
  boton.addEventListener("click", () => {
    const indice = secuencia.findIndex(paso => paso.beadKey === beadKey);
    if (indice >= 0) {
      detenerAudio(false);
      indiceActual = indice;
      actualizarInterfaz();
    }
  });
  grupo.appendChild(boton);
}

function sincronizarCuentas() {
  const botones = document.querySelectorAll(".cuenta-interactiva");
  botones.forEach(boton => {
    const key = boton.dataset.beadKey;
    const primerIndice = secuencia.findIndex(paso => paso.beadKey === key);
    boton.classList.toggle("activa", primerIndice === indiceActual);
    boton.classList.toggle("completada", primerIndice >= 0 && primerIndice < indiceActual);
  });
  const pasoActual = secuencia[indiceActual];
  $("estadoCuentas").textContent = pasoActual?.nombreMisterio
    ? `Misterio actual: ${pasoActual.nombreMisterio}. Paso ${indiceActual + 1} de ${secuencia.length}. Pulsa una cuenta para ir a esa Avemaría o Padrenuestro.`
    : `Paso ${indiceActual + 1} de ${secuencia.length}. Pulsa una cuenta para ir a esa oración.`;
}

/* ==========================================
   AUDIO — dos voces y frase por frase
========================================== */

function informarAudio(mensaje) {
  const estado = $("estadoAudio");
  if (estado) estado.textContent = mensaje;
}

function cargarVocesRosario() {
  if (!("speechSynthesis" in window)) {
    informarAudio("Este navegador no admite lectura de voz.");
    return;
  }

  const todas = window.speechSynthesis.getVoices();
  audioVocesEspanol = todas.filter(voz => voz.lang && voz.lang.toLowerCase().startsWith("es"));

  const selector1 = $("vozMasculina");
  const selector2 = $("vozFemenina");
  if (!selector1 || !selector2) return;

  const previo1 = selector1.value;
  const previo2 = selector2.value;

  function llenar(selector, valorPrevio, predeterminado) {
    selector.replaceChildren();
    if (!audioVocesEspanol.length) {
      const opcion = document.createElement("option");
      opcion.value = "";
      opcion.textContent = "No se encontraron voces en español";
      selector.appendChild(opcion);
      return;
    }

    audioVocesEspanol.forEach((voz, i) => {
      const opcion = document.createElement("option");
      opcion.value = String(i);
      opcion.textContent = `${voz.name} (${voz.lang})`;
      selector.appendChild(opcion);
    });

    if (valorPrevio !== "" && audioVocesEspanol[Number(valorPrevio)]) {
      selector.value = valorPrevio;
    } else {
      selector.value = String(Math.min(predeterminado, audioVocesEspanol.length - 1));
    }
  }

  llenar(selector1, previo1, 0);
  llenar(selector2, previo2, audioVocesEspanol.length > 1 ? 1 : 0);

  if (audioVocesEspanol.length === 1) {
    informarAudio("Solo hay una voz en español disponible; puedes instalar otra voz en el sistema.");
  } else if (audioVocesEspanol.length > 1) {
    informarAudio(`${audioVocesEspanol.length} voces en español disponibles. Asigna una voz a cada selector.`);
  } else {
    informarAudio("No se encontraron voces en español. Revisa las voces instaladas en tu sistema.");
  }
}

function obtenerVozActual() {
  const selector = indiceVozAudio % 2 === 0 ? $("vozMasculina") : $("vozFemenina");
  if (!selector || selector.value === "") return null;
  return audioVocesEspanol[Number(selector.value)] || null;
}

function escucharOracion() {
  if (!("speechSynthesis" in window)) {
    informarAudio("Tu navegador no admite lectura de voz.");
    return;
  }

  const texto = $("textoOracion")?.textContent?.trim();
  if (!texto) {
    informarAudio("No hay una frase para reproducir en este paso.");
    return;
  }

  window.speechSynthesis.cancel();
  if (!audioVocesEspanol.length) cargarVocesRosario();

  const voz = obtenerVozActual();
  const lectura = new SpeechSynthesisUtterance(texto);
  lectura.lang = voz?.lang || "es-CO";
  lectura.rate = 0.96;
  lectura.pitch = 1;
  lectura.volume = 1;
  if (voz) lectura.voice = voz;

  fraseEnReproduccion = true;
  informarAudio(`Reproduciendo con ${indiceVozAudio % 2 === 0 ? "Voz 1" : "Voz 2"}…`);

  lectura.onend = () => {
    fraseEnReproduccion = false;
    indiceVozAudio++;
    informarAudio("Frase finalizada. Pulsa «Escuchar frase» para repetir o continúa con la oración siguiente.");
  };

  lectura.onerror = evento => {
    fraseEnReproduccion = false;
    if (evento.error !== "canceled" && evento.error !== "interrupted") {
      informarAudio("No fue posible reproducir el audio. Prueba con otra voz.");
    }
  };

  window.speechSynthesis.speak(lectura);
}

function pausarAudio() {
  if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    informarAudio("Audio pausado.");
  }
}

function reanudarAudio() {
  if (window.speechSynthesis?.paused) {
    window.speechSynthesis.resume();
    informarAudio("Reanudando audio.");
  }
}

function detenerAudio(mostrarEstado = true) {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  fraseEnReproduccion = false;
  if (mostrarEstado) informarAudio("Audio detenido.");
}

function inicializarAplicacion() {
  document.querySelectorAll("[data-tipo]").forEach(boton => {
    boton.addEventListener("click", () => seleccionarMisterio(boton.dataset.tipo));
  });

  $("btnHoy").addEventListener("click", () => seleccionarMisterio(obtenerMisterioDelDia()));
  $("btnContinuarGuardado").addEventListener("click", continuarGuardado);
  $("btnAnterior").addEventListener("click", anterior);
  $("btnSiguiente").addEventListener("click", siguiente);
  $("btnVolver").addEventListener("click", volverInicio);
  $("btnReiniciar").addEventListener("click", reiniciarRosario);
  $("btnFinalInicio").addEventListener("click", volverInicio);

  $("btnEscuchar").addEventListener("click", escucharOracion);
  $("btnPausar").addEventListener("click", pausarAudio);
  $("btnReanudar").addEventListener("click", reanudarAudio);
  $("btnDetener").addEventListener("click", () => detenerAudio(true));

  const tipoHoy = obtenerMisterioDelDia();
  $("recomendacionDia").textContent = MISTERIOS[tipoHoy].nombre;
  $("diaDescripcion").textContent = `${MISTERIOS[tipoHoy].dias}: ${MISTERIOS[tipoHoy].descripcion}`;

  actualizarBotonContinuar();
  cargarVocesRosario();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.addEventListener("voiceschanged", cargarVocesRosario);
  }
}

document.addEventListener("DOMContentLoaded", inicializarAplicacion);
