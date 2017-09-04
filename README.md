## Pasos

+ **Crear una nueva aplicación:** ng new proyecto -p -st --style=scss
+ **Instalar la nueva aplicación:** npm install

+ **Instalar material:** npm install --save @angular/material @angular/cdk
+ **Instalar animaciones material:** npm install --save @angular/animations
+ **Instalar iconos material:**
++ npm install material-design-icons --save
++ modificar .angular-cli.json y añadír en styles "../node_modules/material-design-icons/iconfont/material-icons.css"

+ **Crear módulo layout que contendrá la estructura:**
++ ng g m core/layout --routing
++ ng g c core/layout/shell --export --flat --it --is
++ ng g c core/layout/top-bar
++ ng g c core/layout/main-content
++ ng g c core/layout/footer

+ **Cambiar el routing de forChild a forRoot:** en 'layout-routing.module.ts'

+ **Crear el módulo inicio:**
++ ng g m routes/inicio
++ ng g c routes/inicio/inicio --flat --export

+ **Enlazar módulo:**
++ Añadir el <nav> en el 'top-barcomponent.html'
++ Añadir la estructura a 'shell.components.ts'
++ Añadir <router-outlet></router-outlet> en 'main-content.componenet.html'
++ Importar el componente 'inicio' para cambiar el routing del layout
++ Importar el módulo 'inicio' en el layout