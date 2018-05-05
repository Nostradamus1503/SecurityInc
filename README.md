# SecurityInc
Compania de seguros. ABM de clientes. ABM de planes de Seguros. ABM Cliente-Plan.


##################################################################
#                           SEGUROS                              #
##################################################################

#Endpoint Alta Seguros
POST /Securities/

#Endpoint Traer Todos Los Seguros
GET /Securities/

#Endpoint Traer un Seguros
GET /Securities/{id}

#Endpoint Modificar Seguros
PUT /Securities/{id}

#Endpoint Borrar Seguros
DELETE /Securities/{id}


########################   T A B L A   ###########################
# seguro_id
# seguro_nombre
# seguro_tipo
# seguro_importe

##################################################################
#                          CLIENTES                              #
##################################################################


#Endpoint Alta Cliente
POST /Clients/

#Endpoint Traer Todos Los Clientes
GET /Clients/

#Endpoint Traer Todos Los Clientes de 1 Tipo de Seguro
GET /Securities/{id}/Clients/

#Endpoint Traer un Cliente
GET /Clients/{id}

#Endpoint Modificar Cliente
PUT /Clients/{id}

#Endpoint Borrar Cliente
DELETE /Clients/{id}

########################   T A B L A   ###########################
# cliente_id
# cliente_nombre
# cliente_dni_tipo
# cliente_dni_nro

##################################################################
#                           POLIZAS                              #
##################################################################

#Endpoint Traer Todos Los Seguros
GET /Securities/{id}/policies/
GET /policies/
GET /policies/{id}
GET Securities/Clients/{id}/policies/
GET Securities/{id}/Clients/{id}/policies/

#Endpoint Traer un Seguros
GET /Policies/{id}

#Endpoint Modificar Seguros
PUT /Policies/{id}

#Endpoint Borrar Seguros
DELETE /policies/{id}

#Endpoint Alta Seguros
PUT Securities/{id}/Clients/{id}/policies/
