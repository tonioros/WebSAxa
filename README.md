# WebSAxa
Web API para AXA Control servicio de Clientes Mecanica

# RUTAS DEL WEBSERVICE (~*.*)~  #

## Auto ##
1. /api/auto/au/:idAuto
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, en el metodo GET, un único automóvil.

2. /api/auto/us/:idUsuario
    - Utilizable unicamente con el método GET, el cual retorna todos los automóviles de un usuario.

3. /api/auto
    - Para metodo POST.

## Calendario ##
1. /api/Cal/cli/:idCliente
    - Unicamente para método GET y devuelve todos los calendarios de un solo cliente.

2. /api/Cal/aut/:idAuto
    - Unicamente para método GET y devuelve todos los calendarios de un solo Automovil.

3. /api/Cal/emp/:idEmpresa
    - Unicamente para método GET y devuelve todos los calendarios de una sola Empresa.

4. /api/Calendario
    - Se utiliza en los métodos GET y POST, devolviendo, con GET, todos los calendarios (sin filtro alguno).

5. /api/Cal/:idCalendario
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, en el metodo GET, un único calendario.

## Comentario Servicio ##
1. /api/cs/:idComentarioS
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, en el metodo GET, un único comentario

2. /api/cs/serv/:idServicio
    - Unicamente para método GET y devuelve todos los comentarios de un Servicio.

3. /api/cs/cli/:idCliente
    - Unicamente para método GET y devuelve todos los comentarios de solo un Cliente, sin importar en que servicio se haya efectuado el comentario.

4. /api/cs
    - Para método POST.

## Detalle Servicio ~(+.+)~ ##
1. /api/ds/serv/:idServicio
    - Unicamente para método GET y devuelve los detalles de un Servicio.

2. /api/ds/:idDetalleS
    - Se utiliza DELETE y GET. Obteniendo como resultado, en el metodo GET, un único detalle. Raramente no existe el PUT.

3. /api/ds
    - Para método POST.

## Empresa ##
1. /api/empresa/
    - Se utiliza en los métodos GET y POST, devolviendo con GET, todas las empresas (sin filtro alguno).

2. /api/empresa/:idEmpresa
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, con el metodo GET, una única empresa.

3. /api/empresa/cd/:codigo
    - Selecciona una empresa en base al código, recordando que el código es único.

## Factura
1. GET: /api/factura/em/:idEmpresa
    - Obtener facturas por empresa

2. GET: /api/empresa/cl/:idCliente
    - Obtener facturas por cliente especifico.

3. POST: /api/empresa/
    - Agregar facturas.
__Una factura no se elimina ni se edita solo se agreaga__

## Servicio ##
1. /api/servicio/emp/:idEmpresa
    - Unicamente para método GET y selecciona todos los servicios dados en una sola empresa.

2. /api/servicio/auto/:idAuto
    - Unicamente para método GET y selecciona todos los servicios dados a un automovil sin importar la empresa, mecánico ni fecha.

3. /api/servicio/mec/:idMecanico
    - Unicamente para método GET y selecciona todos los servicios dados por un mecánico.

4. /api/servicio/cl/:idCliente
    - Unicamente para método GET y selecciona todos los servicios dados por un cliente.

5. /api/servicio/:dia/:mes/:anio
    - Unicamente para método GET y selecciona todos los servicios dados en unA fecha en específica, dada en la URL como parametros, primero el día, luego el mes y por último el año.

6. /api/servicio/:idServicio
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, con el metodo GET, una único servicio.

7. /api/servicio
    - Para método POST

## Usuario ##
1. /autenticar
    - Selecciona y verifica un usuario para poder ingresar a la aplicación por método POST.

2. /api/usuario/emp/:idEmpresa
    - Unicamente para método GET y selecciona los usuarios de una empresa.

3. /api/usuario/co/:correo
    - ??? Preguntar a xocoy

4. /api/usuario/:idUsuario
    - Se utiliza en PUT, DELETE y GET. Obteniendo como resultado, con el metodo GET, una único usuario.

5. /api/usuario
    - Para método POST

# FIN ~(*.*~) #