# Metodologías de desarrollo ágil

## ¿Qué es Agile?

Agile engloba los enfoques para el desarrollo de software que enfatizan
la entrega incremental, la colaboración en equipo, la planificación
continua y el aprendizaje continuo. En lugar de planificar todo al
principio y entregar al final, Agile propone trabajar en ciclos cortos
y adaptarse rápido a los cambios.

Su base son 4 valores del Manifiesto Agile (2001):
- Personas e interacciones sobre procesos y herramientas
- Software funcionando sobre documentación exhaustiva
- Colaboración con el cliente sobre negociación de contratos
- Respuesta al cambio sobre seguir un plan

## ¿Qué es Scrum?

Scrum es un marco de trabajo concreto que implementa Agile. Aporta
estructura al equipo y al calendario mediante roles, eventos y
artefactos definidos.

### Roles
- **Product Owner** — decide qué se construye y en qué orden
- **Scrum Master** — facilita el proceso y elimina bloqueos
- **Dev Team** — construye el producto

### Eventos
- **Sprint** — ciclo de trabajo de 1 a 4 semanas con un objetivo claro
- **Sprint Planning** — reunión al inicio para decidir qué entra en el sprint
- **Daily Standup** — reunión diaria de 15 min
- **Sprint Review** — al final, se muestra lo construido
- **Retrospectiva** — el equipo reflexiona sobre cómo mejorar

### Artefactos
- **Product Backlog** — lista priorizada de todo lo que hay que construir
- **Sprint Backlog** — lo que entra en el sprint actual
- **Increment** — el producto funcional entregado al final del sprint

## ¿Qué es Kanban?

Kanban es un método de gestión de proyectos que ayuda a visualizar las
tareas en un tablero con columnas (Backlog → In Progress → Done) y
limitar cuántas tareas pueden estar en progreso al mismo tiempo.
No tiene sprints ni roles fijos — el trabajo fluye de forma continua.

## Diferencias entre Scrum y Kanban

| | Scrum | Kanban |
|---|---|---|
| Ciclos | Sprints fijos | Flujo continuo |
| Roles | Definidos | No obligatorios |
| Cambios | Al inicio del sprint | En cualquier momento |
| Ideal para | Proyectos con entregas definidas | Mejoras y mantenimiento continuo |

## ¿Cuándo usar cada uno?

En este proyecto uso **Scrum** para la fase de desarrollo: tengo un
backlog definido (las 15 fases), sprints claros (los 4 días de trabajo)
y entregas concretas al final de cada jornada.

Usaría **Kanban** durante la fase de testing y corrección de bugs, cuando
las tareas van surgiendo sobre la marcha sin un orden fijo — simplemente
muevo tarjetas de "encontrado" a "en progreso" a "arreglado" según voy
avanzando.