# 🐙 GITHUB DESDE CERO - GUÍA COMPLETA

**GitHub desde Cero** es un sitio educativo completo diseñado para enseñar GitHub desde los fundamentos hasta conceptos avanzados, con explicaciones claras, ejemplos prácticos y código listo para usar.

> *"GitHub es el portafolio del desarrollador moderno. Tu perfil de GitHub es tu nuevo CV."*

---

## 🎯 ¿Qué es este Proyecto?

Este proyecto proporciona un recurso educativo gratuito para aprender GitHub, incluyendo:

- **Documentación completa** de cada tema
- **Ejemplos de código** listos para ejecutar
- **Ejercicios prácticos** para reforzar el aprendizaje
- **Sitio web educativo** con navegación intuitiva

---

## 📚 Contenido del Curso

### Módulo 1: Fundamentos

1. **Introducción**
   - ¿Qué es GitHub?
   - Diferencias entre Git y GitHub
   - Creación de cuenta

2. **Instalación**
   - Configurar Git local
   - Autenticación SSH
   - GitHub CLI (gh)
   - GitHub Desktop

3. **Conceptos básicos**
   - Repositorios
   - Commits y branches
   - Push y Pull
   - Sincronización

### Módulo 2: Intermedio

4. **Ejemplos prácticos**
   - Pull Requests
   - Code Review
   - Issues y Projects
   - Wikis y Discussions

5. **Buenas prácticas**
   - README profesional
   - .gitignore efectivo
   - Licencias open source
   - Convenciones de commits

### Módulo 3: Avanzado

6. **Casos reales**
   - GitHub Actions (CI/CD)
   - GitHub Pages
   - GitHub Packages
   - Security features

7. **Proyecto final**
   - Proyecto completo con CI/CD
   - Deploy automático
   - Documentación profesional

---

## 🗂️ Estructura del Proyecto

```
POO-CSHARP/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── main.js         # JavaScript del sitio
└── README.md
```

---

## 🚀 Cómo Usar este Proyecto

### Opción 1: Navegar el Sitio Web

1. Abre `index.html` en tu navegador
2. Navega por las secciones del curso
3. Haz clic en los temas para ver la documentación detallada

### Opción 2: Ejecutar los Ejemplos

1. Crea cuenta en github.com
2. Instala Git y GitHub CLI
3. Sigue los ejemplos prácticos

### Requisitos

- Cuenta gratuita en GitHub
- Git instalado localmente
- Navegador web moderno

---

## 📝 Ejemplos Rápidos

### Crear Repositorio

```bash
# Usando GitHub CLI
gh repo create mi-proyecto
cd mi-proyecto

# O manualmente en github.com
# Luego clonar
git clone https://github.com/usuario/mi-proyecto.git
```

### Pull Request

```bash
# Crear rama para feature
git checkout -b feature/nueva-funcionalidad

# Hacer cambios y commit
git add .
git commit -m "Add nueva funcionalidad"

# Push y crear PR
git push origin feature/nueva-funcionalidad
gh pr create --title "Add nueva funcionalidad"
```

### GitHub Actions

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

### README.md Profesional

```markdown
# Mi Proyecto

Descripción breve del proyecto.

![Badge](https://img.shields.io/badge/version-1.0.0-blue)

## 🚀 Características

- Feature 1
- Feature 2

## 📦 Instalación

\`\`\`bash
npm install
\`\`\`

## 📖 Uso

\`\`\`bash
npm start
\`\`\`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
```

### GitHub Pages

```yaml
# .github/workflows/pages.yml
name: Deploy to Pages
on:
  push:
    branches: ["main"]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

---

## 🎓 Metodología de Aprendizaje

### 1. Leer la Teoría
Cada tema comienza con una explicación clara del concepto.

### 2. Ver Ejemplos
Los ejemplos de código muestran la aplicación práctica.

### 3. Practicar
Los ejercicios te permiten aplicar lo aprendido.

### 4. Experimentar
Modifica los ejemplos para entender cómo funcionan.

---

## 🔧 Comandos Esenciales

### GitHub CLI

```bash
# Autenticar
gh auth login

# Listar repos
gh repo list

# Crear repo
gh repo create nombre --public

# Crear PR
gh pr create --title "Titulo" --body "Descripcion"

# Ver PRs
gh pr list
```

### Git + GitHub

```bash
# Clonar repo
git clone https://github.com/usuario/repo.git

# Configurar remoto
git remote add origin url

# Push inicial
git push -u origin main

# Sync con upstream
git fetch upstream
git merge upstream/main
```

---

## 📖 Recursos Adicionales

### Documentación Oficial

- [GitHub Docs](https://docs.github.com/)
- [GitHub CLI Manual](https://cli.github.com/manual/)
- [GitHub Actions Docs](https://docs.github.com/actions)

### Herramientas Recomendadas

- **GitHub Desktop** - Cliente gráfico
- **GitHub CLI** - Línea de comandos
- **VS Code GitHub Extension** - Integración editor

### Comunidades

- [GitHub Community](https://github.community/)
- [Stack Overflow - GitHub](https://stackoverflow.com/questions/tagged/github)
- [Reddit r/github](https://www.reddit.com/r/github/)

---

## 💡 Consejos para Principiantes

1. **Perfil completo**: Agrega foto, bio y links.
2. **README del perfil**: Crea un repo con tu username.
3. **Proyectos pinned**: Muestra tu mejor trabajo.
4. **Contribuye**: Participa en open source.
5. **Green squares**: Mantén actividad consistente.

---

## ⚠️ Mejores Prácticas

### Seguridad

- Nunca subas credenciales
- Usa secrets para tokens
- Habilita 2FA en tu cuenta

### Colaboración

- Issues descriptivos
- PRs pequeños y enfocados
- Code review constructivo

### Organización

- README claro en cada repo
- Licencia apropiada
- .gitignore completo

---

## 🧪 Ejercicios Prácticos

### Nivel Básico

1. Crea tu perfil de GitHub
2. Sube tu primer repositorio
3. Personaliza tu README

### Nivel Intermedio

1. Crea y mergea un PR
2. Usa Issues para tracking
3. Configura GitHub Pages

### Nivel Avanzado

1. Implementa GitHub Actions
2. Publica un package
3. Contribuye a open source

---

## 👨‍💻 Desarrollado por Isaac Esteban Haro Torres

**Ingeniero en Sistemas · Full Stack · Automatización · Data**

- 📧 Email: zackharo1@gmail.com
- 📱 WhatsApp: 098805517
- 💻 GitHub: https://github.com/ieharo1
- 🌐 Portafolio: https://ieharo1.github.io/portafolio-isaac.haro/

---

© 2026 Isaac Esteban Haro Torres - Todos los derechos reservados.
