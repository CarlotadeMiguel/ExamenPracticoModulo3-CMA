# Gestión de Tareas — Examen Módulo 3 CMA

## 📝 Descripción

Aplicación web estática (HTML, CSS y JavaScript) para la gestión de tareas. Permite:
- Crear y listar tareas.
- Eliminar tareas.

Desplegada en **AWS S3** como bucket público, con políticas para simular un entorno cloud.

---

## 🚀 Tecnologías usadas

- HTML, CSS, JavaScript (sin frameworks).
- AWS S3 para hosting estático.
---

## 📂 Estructura del proyecto

```
/
├── index.html # Página principal
├── styles.css # Estilos
├── script.js # Lógica de gestión de tareas
└── README.md # Este documento
```

---

## 📦 Despliegue en AWS S3

1. Crear un **bucket S3** (ej. `carnet-mis-tareas`).
2. Habilitar **hosting estático** y definir `index.html` como página principal.
3. Subir los archivos `index.html`, `styles.css`, `script.js`.
4. Configurar la política del bucket para acceso
5. Opcional: Simular distintos entornos (dev, prod) usando archivos o buckets con políticas diferentes.
