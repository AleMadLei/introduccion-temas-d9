# introduccion-temas-d9
Proyecto introductorio para el desarrollo de temas.

Uso libre para realizar modificaciones si lo requiren.

Basado en el proyecto [Docker4Drupal](https://github.com/wodby/docker4drupal).

## Requisitos y configuración previa.

* Tener `docker` y `docker-compose` instalados en la máquina.
* Agregar el vhost `d9-tematizacion.local` apuntando a la ip de la computadora. Si es local `127.0.0.1`

## Comandos

Comandos de `make` para facilitar ciertas tareas.

* `up`: Para iniciar los contenedores.
* `down`: Para detener los contenedores.
* `composer "parámetros"`: Para usar `composer` en el contenedor de PHP.
* `drush "comando y parámetros"`: Para usar `drush` en el contenedor de PHP.
* `drupal "comando y parámetros"`: Para usar `drupal` (drupal console) en el contenedor de PHP.
* `shell`: Para ingresar al contenedor de PHP en una sesión de `bash`.
* `shell-node`: Para ingresar al contenedor de NodeJS en una sesión de `bash`.

## Estructura

* La carpeta `project` contiene la base de Drupal usando el [proyecto recomendado](https://github.com/drupal/recommended-project).
* Se debe realizar la instalación con composer `make composer install`. El código de Drupal no se almacena en el repo.
Solo estará nuestro trabajo.
* La carpeta `data` contiene la base de datos de `MySQL`.

## Trabajo

* Instalar drupal con drush `make drush "si --existing-config"
* Navegar a la ruta e ingresar como administrador.
* Realizar el trabajo a necesidar.

## Author

Alejandro Madrigal Leiva
TanRen Tech

