INVESTIGAR 20 COMANDOS DE GITHUB

1. git init
Descripción del comando: Inicializa un nuevo repositorio Git local en el directorio actual. 
Ejemplo de caso de uso: En un proyecto web se crea una carpeta vacía, se abre la terminal y se ejecuta git init para empezar a rastrear los cambios de tus archivos.

2. git commit
Descripción del comando: Guarda los cambios que están en el área de preparación en el historial del repositorio.
Ejemplo de caso de uso: Después de escribir código, se hace un git commit -m para registrar ese avance.

3. git log
Descripción del comando: Muestra el historial cronológico de los commits realizados en el repositorio. Permite ver el autor, la fecha, el identificador único y el mensaje de cada cambio guardado.
Ejemplo de caso de uso: Se quiere revisar los cambios que hizo algún compañero. Se usa git log para ver la lista de modificaciones.

4. git checkout
Descripción del comando: Permite cambiar entre diferentes ramas o restaurar archivos en el directorio de trabajo a un estado anterior.
Ejemplo de caso de uso: Se está trabajando en la rama main, y se desea cambiar a la rama de desarrollo para continuar programando ahí, se ejecuta git checkout desarrollo.

5. git add
Descripción del comando: Añade los archivos modificados o nuevos al área de preparación, indicandole a Git qué cambios se desean incluir en el próximo commit
Ejemplo de caso de uso: Se modifico index.html y estilos.css, pero solo se quiere guardar los cambios del HTML por ahora, se usa git add index.html para prepararlo.

6. git status
Descripción del comando: Muestra el estado actual del directorio de trabajo. Te dice qué archivos han sido modificados, cuáles en el área de preparación y cuáles no están siendo rastreados por Git. 
Ejemplo de caso de uso: No recuerdas que archivos modificaste, ejecutas git status para ver una lista rápida de cambios pendientes.

7. git branch
Descripción del comando: Se utiliza para listar, crear o eliminar ramas. Las ramas te permiten aislar tu trabajo de desarrollo sin afectar la línea principal.
Ejemplo de caso de uso: Para no romper lo que ya funciona, se ejecuta git brach nueva-rama para crear un espacio de trabajo seguro.

8. git merge
Descripción del comando: Fusiona el historial de una rama independiente con la rama en la que te encuentras actualmente. Une los caminos de desarrollo que se separaron.
Ejemplo de caso de uso: Al terminar de hacer cambios en nueva-rama, Te cambias a main y ejecutas git merge nueva-rama para integrar esa funcionalidad al proyecto.

9. git clone
Descripción del comando: Descarga una copia exacta de un repositorio remoto, a tu maquina local, configurando automáticamente el enlace de seguimiento.
Ejemplo de caso de uso:  Te unes a un nuevo equipo de desarrollo. Te pasan el enlace del proyecto y ejecutas git clone "la url" para tener todo el código en tu computadora.


10. git push
Descripción del comando: Sube los commits guardados en tu repositorio local hacia el repositorio remoto. Sirve para compartir tus cambios al resto del equipo.
Ejemplo de caso de uso: Ejecutas git push origin main para enviar tus commits a la nube.

11. git pull
Descripción del comando: Descarga los cambios más recientes desde el repositorio remoto y los fusiona inmediatamente con tu rama local.
Ejemplo de caso de uso: Antes de escribir código, ejecutas git pull, para asegurarte de tener los cambios que tus compañeros subieron.

12. git remote
Descripción del comando: Permite administrar las conexiones con repositorios remotos. Sirve para ver qué servidores remotos están vinculados o para añadir uno nuevo.  
Ejemplo de caso de uso: Creaste un repositorio local con git init y quieres conectarlo a un repositorio vacío que acabas de crear en GitHub. Usas git remote add origin <URL-de-GitHub>.


13. git fetch
Descripción del comando: Descarga el historial y las referencias del repositorio remoto a tu máquina local, pero no modifica ni fusiona nada en tus archivos de trabajo actuales. Solo permite ver que hay de nuevo.
Ejemplo de caso de uso: Se quiere revisar si alguien ha subido cambios a la rama remota, pero no quieres alterar el código actual, se ejecuta git fetch para actualizar el mapa del servidor.

14. git rm
Descripción del comando: Elimina archivos del área de preparación y tambien del disco duro de la computadora, dejando registro de la eliminación para el próximo commit.
Ejemplo de caso de uso: Ejecutas git rm archivo-obsoleto.txt para borrarlo por completo del control de versiones.

15. git reset
Descripción del comando: Deshace cambios. Puede mover el estado actual del repositorio a un commit especifico anterior, sacando archivos del área de preparación o borrando commits locales.
Ejemplo de caso de uso: Ejecutas git reset archivo.txt para sacarlo del área de preparación antes de hacer el commit.

16. git revert
Descripción del comando: Crea un nuevo commit que hace exactamente lo opuesto a un commit anterior. Sirve para revertir errores de forma segura en repositorios compartidos sin borrar el historial existente.
Ejemplo de caso de uso: En lugar de borrar el historial, usas git revert id-del-commit para regenerar un cambio que deshaga ese error limpiamente.

17. git stash
Descripción del comando: Guarda de manera temporal los cambios que tienes en el directorio de trabajo, en una pila interna, dejando el proyecto completamente limpio sin necesidad de hacer un commit.
Ejemplo de caso de uso: El código no compila, pero surge una emergencia en producción. Usas git stash para guardar el código que no compila, arreglas la emergencia en otra rama, y luego recuperas el trabajo.


18. git tag
Descripción del comando: Se utiliza para marcar puntos específicos en el historial de commits como importantes. Generalmente se usa para señalar versiones de lanzamiento de Software.
Ejemplo de caso de uso: La aplicación web está lista para salir al público en su primera versión oficial. Ejecutas git tag -a v1.0.0 -m "Primera versión estable" en el commit final para etiquetarlo.


19. git diff
Descripción del comando: Muestra la diferencia exacta línea por línea entre los archivos del directorio de trabajo actual y los que están guardados en el área de preparación o en el último commit.
Ejemplo de caso de uso: El archivo config.js no funciona y no recuerdas qué le moviste. Ejecutas git diff config.js para ver exactamente qué líneas borraste o añadiste desde la última vez.


20. git config
Descripción del comando: Configura las variables de Git, como el nombre de usuario, el correo electrónico, el editor de texto predeterminado o los alias de comandos.
Ejemplo de caso de uso: Se instaló Git por primera vez en una computadora. Ejecutas git config --global user.name "Tu Nombre" y git config --global user.email "tu@correo.com" para que tus futuros commits lleven tu autoría.

