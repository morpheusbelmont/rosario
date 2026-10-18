# Santo Rosario HTML5

Aplicación estática para rezar el Santo Rosario con los cuatro grupos de misterios, oraciones, seguimiento del progreso, cuentas interactivas y lectura de voz del navegador.

## Archivos
- `index.html`: estructura de la aplicación.
- `style.css`: diseño adaptable y botón flotante «Continuar».
- `script.js`: secuencia de oraciones, misterios, guardado local y audio.

## Publicar en GitHub Pages
1. Crea un repositorio público y carga estos tres archivos en la raíz.
2. En el repositorio, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique el sitio.

## Notas
- El progreso se guarda en el almacenamiento local del navegador y no se sincroniza entre dispositivos.
- El audio utiliza la API de síntesis de voz del navegador. Las voces disponibles dependen del dispositivo y del navegador.
- La secuencia de cada misterio es: anuncio y meditación, Padrenuestro, diez Avemarías, Gloria al Padre y jaculatoria de Fátima. Al finalizar los cinco misterios aparecen la Salve, la oración final y la señal de la cruz.
