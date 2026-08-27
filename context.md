# Contexto del Proyecto: Clon Frontend de Airbnb (airbnb-luis-arrieta)

Este documento describe la arquitectura, los componentes principales, las vistas y los requerimientos del clon de Airbnb mobile-first utilizando Next.js 16, TypeScript y Tailwind CSS, basado detalladamente en las capturas de pantalla de referencia provistas.

---

## 1. El Usuario y su Propósito
- **¿Quién es el usuario?**: Viajeros en busca de alojamiento temporal/vacacional (ej. habitaciones compartidas, apartamentos completos).
- **¿Qué intenta conseguir?**:
  1. **Inicio**: Buscar destinos ("Alicante", etc.), seleccionar categorías ("Todo", "Alojamientos", "Experiencias", "Servicios") y ver listas populares.
  2. **Catálogo**: Filtrar resultados con etiquetas rápidas ("Wifi", "Lavadora", "Aparcamiento", "Cocina", etc.), ver precios totales, y localizar visualmente los alojamientos en un mapa interactivo (o placeholder) con pines de precio.
  3. **Detalles**: Analizar detalladamente un hospedaje ("Hostelfly. Cama en Habitación mixta 10 pax"), ver su galería de 5 fotos, revisar la insignia "Recomendación del viajero", ver los detalles del anfitrión ("Hostel Barajas"), y usar la tarjeta de reserva interactiva para calcular el coste y seleccionar huéspedes.

---

## 2. Descripción de las Vistas y Componentes Clave

### 2.1 Página de Inicio (`/`)
- **Header/Navbar Principal**:
  - Logo de Airbnb (rojo) a la izquierda.
  - Pestañas centrales de selección: *Todo*, *Alojamientos*, *Experiencias*, *Servicios*.
  - Enlaces a la derecha: *Hazte anfitrión*, icono de Mundo (idioma) y botón de Menú de usuario con avatar.
  - **Buscador flotante (cápsula)**: Campos para *Destino* (Buscar destinos), *Fechas* (Introduce las fechas), *Viajeros* (Añade viajeros) y botón circular rosa con lupa.
- **Cuadrícula de Alojamientos**:
  - Título de sección (ej. "Alojamientos populares en Alicante").
  - Tarjetas de alojamiento (`PropertyCard`) organizadas en filas con scroll/desplazamiento.
  - En móvil, se adaptará a una columna simple o carrusel vertical continuo.

### 2.2 Página de Catálogo (`/catalog`)
- **Navbar simplificado**:
  - Logo a la izquierda, barra de búsqueda compacta tipo píldora en el centro ("Alojamientos en tu zona | Cualquier semana | 1 viajero"), y controles de perfil a la derecha.
- **Barra de Filtros**:
  - Botones tipo píldora: *Filtros*, *Wifi*, *Lavadora*, *Aparcamiento gratuito*, *Aire acondicionado*, *Cocina*, *1 baño o más*, *Llegada autónoma*, *TV*, *Admite mascotas*.
- **Vista Dividida (Split Screen - Escritorio)**:
  - **Izquierda**: Listado "Más de 1.000 alojamientos" con tarjetas de propiedad que incluyen paginación de imágenes (carrusel interno) y tags como "Recomendación del viajero" y "Cancelación gratuita".
  - **Derecha**: Mapa interactivo con pines que muestran directamente el precio en euros (ej. "180 €", "223 €"). En móvil, el mapa puede alternarse mediante un botón flotante o mostrarse debajo de la lista.

### 2.3 Vista de Detalle (`/rooms/[id]`)
- **Cabecera**:
  - Título grande (ej. "Hostelfly. Cama en Habitación mixta 10 pax").
  - Botones de acción rápida: *Compartir* y *Guardar* con iconos.
- **Galería de Fotos**:
  - Grid de 5 fotos: Una foto principal grande en la izquierda y 4 fotos secundarias en la derecha (2x2).
  - Botón flotante "Mostrar todas las fotos" en la esquina inferior derecha del grid.
- **Estructura de dos columnas (Escritorio)**:
  - **Columna Izquierda (Información)**:
    - Subtítulo: "Habitación en Madrid, España · 1 cama individual · Baño compartido · Cancelación gratuita".
    - Bloque destacado: "Recomendación del viajero" con puntuación de `4.7` estrellas y número de evaluaciones (`920`).
    - Detalles del Anfitrión: Avatar, nombre ("Hostel Barajas") y años de experiencia ("3 años de experiencia").
    - Amenities y servicios listados en cuadrícula.
  - **Columna Derecha (Tarjeta de Reserva - Sticky)**:
    - Caja de aviso: "Tu precio está por debajo de la media para 60 días".
    - Formulario de reserva:
      - Precio destacado: "180 € en total".
      - Inputs con bordes limpios para LLEGADA, SALIDA y selección de VIAJEROS.
      - Botón de reserva/CTA destacado.
      - Nota de cancelación: "Cancelación gratuita antes del 31 de agosto".

---

## 3. Especificación técnica de componentes y estado

- **`PropertyCard`**: Reutilizable entre Inicio y Catálogo. Debe admitir una propiedad con múltiples imágenes (carrusel con puntos de navegación) y badges opcionales.
- **`SearchBar`**: Controlará el filtrado de la lista en tiempo real guardando la consulta en el estado de React.
- **`BookingCard`**: Estado interno para el número de huéspedes (con límite mínimo y máximo) y selección de fechas para simular el cálculo dinámico del precio total.

