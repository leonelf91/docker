(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientes/clientes.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientes/clientes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-75 my-2\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Listado de clientes</h5>\n    <div class=\"my-2 text-left\">\n\n      <button class=\"btn btn-rounded btn-primary\" type=\"button\" [routerLink]=\"['/clientes/form']\">Crear cliente</button>\n\n    </div>\n    <app-loader></app-loader>\n    <div *ngIf=\"clientes?.length==0\" class=\"alert alert-info\">\n      No hay clientes en la base de datos!\n    </div>\n    <table class=\"table table-bordered table-striped\" *ngIf=\"clientes?.length>0\">\n      <thead>\n        <th>Nro. Cliente</th>\n        <th>Nombre / Razon Social</th>\n        <th>DNI / CUIT</th>\n        <th>Editar</th>\n        <th>Eliminar</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cliente of clientes\">\n          <td>{{cliente.id}}</td>\n          <td>{{cliente.nombre}}</td>\n          <td>{{cliente.dniCuit}}</td>\n          <td>\n            <button type=\"button\" [routerLink]=\"['/clientes/form',cliente.id]\" class=\"btn btn-primary\">Editar</button>\n          </td>\n          <td>\n            <button type=\"button\" (click)='delete(cliente)' class=\"btn btn-danger\">Eliminar</button>\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n    <nav aria-label=\"Page navigation example\">\n      <div class=\"row p-3\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"rewind()\">Previous</a></li>\n          <li class=\"page-item\" *ngFor=\"let i of numerosFooterPaginador\" [ngClass]=\"{'page-item active': i.actual }\">\n            <a class=\"page-link\" (click)=\"setPage(i.numero-1)\"  >{{ i.numero }}</a>\n          </li>\n\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"forward()\">Next</a></li>\n        </ul>\n        <label for=\"size\">\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          Registros por página:\n          &nbsp;&nbsp;\n        </label>\n        <select [(ngModel)]=\"size\" required (change)=\"onChangeSize()\" class=\"form-control\" style=\"width:auto;\" name=\"size\">\n          <option selected value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clientes/form.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clientes/form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"alert alert-danger\" *ngIf=\"errores?.length > 0\">\n  <li *ngFor=\"let err of errores\" >\n    {{ err }}\n  </li>\n</ul>\n\n<div class=\"card bg-dark text-white  my-2\">\n  <div class=\"card-header\">\n    {{ titulo }}\n  </div>\n  <div class=\"card-body\">\n\n    <form>\n      <div class=\"form-group row\" *ngIf=\"cliente.id\">\n        <label for=\"id\" class=\"col-form-label col-sm-2\">Nro de cliente</label>\n        <div class=\"col-sm-6\">\n          {{cliente.id}}\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"nombre\" class=\"col-form-label col-sm-2\">Nombre (*)</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.nombre\" name=\"nombre\" required minlength=\"4\" #nombre=\"ngModel\">\n\n          <div class=\"alert alert-danger\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\n            <div *ngIf=\"nombre.errors.required\">\n              Nombre es requerido\n            </div>\n            <div *ngIf=\"nombre.errors.minlength\">\n              El nombre debe tener al menos 4 caracteres.\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"dniCuit\" class=\"col-form-label col-sm-2\">Dni/Cuit (*)</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\" class=\"form-control w-50\" [(ngModel)]=\"cliente.dniCuit\" name=\"dniCuit\" required minlength=\"8\" #dniCuit=\"ngModel\" >\n\n          <div class=\"alert alert-danger\" *ngIf=\"dniCuit.invalid && (dniCuit.dirty || dniCuit.touched)\">\n            <div *ngIf=\"dniCuit.errors.required\">\n              Dni/Cuit es requerido\n            </div>\n            <div *ngIf=\"dniCuit.errors.minlength\">\n              El Dni/Cuit debe tener al menos 8 caracteres.\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"provincia\" class=\"col-form-label col-sm-2\">Provincia (*)</label>\n        <div class=\"col-sm-6\">\n\n          <select [(ngModel)]=\"cliente.provincia\" required class=\"form-control w-50\" name=\"provincia\">\n            <option selected=\"selected\" disabled >Seleccione una opcion...</option>\n            <option value=\"BUENOS AIRES\">Buenos Aires</option>\n            <option value=\"CABA\">CABA</option>\n            <option value=\"MISIONES\">Misiones</option>\n          </select>\n          <!--input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.provincia\" name=\"provincia\" required #provincia=\"ngModel\"-->\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"categoriaIva\" class=\"col-form-label col-sm-2\">Categoria de IVA (*)</label>\n        <div class=\"col-sm-6\">\n\n          <select [(ngModel)]=\"cliente.categoriaIva\" required class=\"form-control w-50\" name=\"categoriaIva\">\n            <option selected=\"selected\" disabled >Seleccione una opcion...</option>\n            <option value=\"CONSUMIDOR_FINAL\">Consumidor Final</option>\n            <option value=\"RESPONSABLE_INSCRIPTO\">Responsable Inscripto</option>\n            <option value=\"MONOTRIBUTISTA\">Monotributista</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-form-label col-sm-2\">Email (*)</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.email\" name=\"email\" required email #email=\"ngModel\">\n\n          <div class=\"alert alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n            <div *ngIf=\"email.errors.required\">\n              Email es requerido\n            </div>\n            <div *ngIf=\"email.errors.email\">\n              El Email debe tener un formato valido\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"direccion\" class=\"col-form-label col-sm-2\">Direccion</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.direccion\" name=\"direccion\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"telefono\" class=\"col-form-label col-sm-2\">Telefono</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control w-50\" [(ngModel)]=\"cliente.telefono\" name=\"telefono\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"contactoComercial\" class=\"col-form-label col-sm-2\">Contacto Comercial</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control w-50\" [(ngModel)]=\"cliente.contactoComercial\" name=\"contactoComercial\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"codPostal\" class=\"col-form-label col-sm-2\">Codigo Postal</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control w-25\" [(ngModel)]=\"cliente.codPostal\" name=\"codPostal\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\" *ngIf=\"cliente.id\">\n        <label for=\"fechaIngreso\" class=\"col-form-label col-sm-2\">Fecha de ingreso</label>\n        <div class=\"col-sm-6 w-25\">\n          {{cliente.fechaIngreso | date:\"dd-MM-yyyy\"}}\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-primary\" role=\"button\" (click)='create()' *ngIf=\"!cliente.id else elseBlock\">Crear</button>\n\n          <ng-template #elseBlock>\n            <button class=\"btn btn-primary\" role=\"button\" (click)='update()'>Editar</button>\n          </ng-template>\n\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/facturas/form.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/facturas/form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"alert alert-danger\" *ngIf=\"errores?.length > 0\">\n  <li *ngFor=\"let err of errores\" >\n    {{ err }}\n  </li>\n</ul>\n\n<div class=\"card bg-dark text-white  my-2\">\n  <div class=\"card-header\">\n    {{ titulo }}\n  </div>\n  <div class=\"card-body\">\n\n    <form>\n\n\n      <div class=\"form-group row\">\n        <label for=\"rubro\" class=\"col-form-label col-sm-2\">Cliente (*)</label>\n        <div class=\"col-sm-8\">\n\n          <div class=\"alert alert-info\" *ngIf=\"factura.cliente.id\">\n            {{factura.cliente.id}} - {{factura.cliente.nombre}} - DNI/CUIT: {{factura.cliente.dniCuit}} - {{factura.cliente.categoriaIva}}\n            <button type=\"button\" (click)='desseleccionarCliente()' class=\"btn btn-danger\">Borrar seleccion</button>\n          </div>\n          <button class=\"btn btn-rounded btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal2\" *ngIf=\"!factura.cliente.id\">Buscar cliente</button>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"nroFactura\" class=\"col-form-label col-sm-2\">Clase (*)</label>\n        <div class=\"col-sm-6\">\n          {{factura.claseComprobante}}\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"nroFactura\" class=\"col-form-label col-sm-2\">Nro. Factura (*)</label>\n        <div class=\"col-sm-6\">\n          {{factura.nroComprobante}}\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"fechaCreacion\" class=\"col-form-label col-sm-2\">Fecha de creacion</label>\n        <div class=\"col-sm-6\">\n          {{factura.fechaCreacion | date:\"dd-MM-yyyy\"}}\n        </div>\n      </div>\n\n\n\n      <div class=\"card w-75 my-2\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-dark\">Items de la factura</h5>\n          <div class=\"my-2 text-left\">\n\n            <button class=\"btn btn-rounded btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\">Agregar Item</button>\n\n          </div>\n          <app-loader></app-loader>\n          <div *ngIf=\"factura.items?.length==0\" class=\"alert alert-info\">\n            No hay items cargados!\n          </div>\n\n          <table class=\"table table-bordered table-striped\" *ngIf=\"factura.items?.length>0\">\n            <thead>\n              <th>Cod. Producto</th>\n              <th>Descripcion</th>\n              <th>Cantidad</th>\n              <th>P. Unitario</th>\n              <th>P. Total</th>\n              <th>Eliminar</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of factura.items\">\n                <td>{{item.producto.codProducto}}</td>\n                <td>{{item.producto.descripcion}}</td>\n                <td>{{item.cantidad}}</td>\n                <td>{{item.precioUnitario  | number:'1.2-2'}} $</td>\n                <td>{{item.precioTotal  | number:'1.2-2'}} $</td>\n                <td>\n                  <button type=\"button\" (click)='eliminarItem(item)' class=\"btn btn-danger\">Eliminar</button>\n                </td>\n\n              </tr>\n\n            </tbody>\n          </table>\n          <div class=\"alert alert-info\">\n            Total Iva 21 : {{factura.totalIva21  | number:'1.2-2'}} $ <br>\n            Total Iva 10.5 : {{factura.totalIva105  | number:'1.2-2'}} $ <br>\n            Total Facturado : {{factura.totalFacturado  | number:'1.2-2'}} $\n          </div>\n\n        </div>\n\n      </div>\n\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-primary\" role=\"button\" (click)='generarFacturacion()' >Finalizar facturacion</button>\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n</div>\n\n<!-- Modal PRODUCTOS-->\n<div class=\"modal fade bd-example-modal-lg\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Agregar Item</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n\n        <div class=\"card w-100 my-2\">\n          <div class=\"card-body\" *ngIf=\"!itemNuevo.producto\">\n            <form>\n              <div class=\"form-group row\">\n                <div class=\"col-sm-6\">\n                  <input type=\"text\" placeholder=\"Ingrese nombre o DNI/Cuit\"  class=\"form-control\" [(ngModel)]=\"filtroProductos\" name=\"filtroProductos\">\n                </div>\n                <button class=\"btn btn-primary\" role=\"button\" (click)='cargarProductos()' >Buscar</button>\n              </div>\n            </form>\n            <h5 class=\"card-title\">Seleccione un producto</h5>\n            <app-loader></app-loader>\n            <div *ngIf=\"productos?.length==0\" class=\"alert alert-info\">\n              No hay productos en la base de datos!\n            </div>\n            <table class=\"table table-bordered table-striped\" *ngIf=\"productos?.length>0\">\n              <thead>\n                <th>Cod. Producto</th>\n                <th>Descripcion</th>\n                <th>Rubro</th>\n                <th>Seleccionar</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let producto of productos\">\n                  <td>{{producto.codProducto}}</td>\n                  <td>{{producto.descripcion}}</td>\n                  <td>{{producto.rubro}}</td>\n                  <td>\n                    <button type=\"button\" (click)='seleccionarProducto(producto)' class=\"btn btn-primary\">Seleccionar</button>\n                  </td>\n\n                </tr>\n\n              </tbody>\n            </table>\n            <nav aria-label=\"Page navigation example\">\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" (click)=\"rewindProductos()\">Previous</a></li>\n                <li class=\"page-item\" *ngFor=\"let i of numerosFooterPaginadorProductos\" [ngClass]=\"{'page-item active': i.actual }\">\n                  <a class=\"page-link\" (click)=\"setPageProductos(i.numero-1)\"  >{{ i.numero }}</a>\n                </li>\n\n                <li class=\"page-item\"><a class=\"page-link\" (click)=\"forwardProductos()\">Next</a></li>\n              </ul>\n            </nav>\n\n          </div>\n\n          <div class=\"card-body\" *ngIf=\"itemNuevo.producto\">\n            <h5 class=\"card-title\">Producto seleccionado</h5>\n            <div class=\"alert alert-info\">\n              {{itemNuevo.producto.codProducto}} - {{itemNuevo.producto.descripcion}} - {{itemNuevo.producto.rubro}}\n            </div>\n            <button type=\"button\" (click)='borrarSeleccionProducto()' class=\"btn btn-danger\">Borrar seleccion</button>\n\n            <div class=\"form-group row my-3\">\n              <label for=\"cantidad\" class=\"col-form-label col-sm-2\">Cantidad (*)</label>\n              <div class=\"col-sm-6\">\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"itemNuevo.cantidad\" name=\"cantidad\" required #cantidad=\"ngModel\">\n\n                <div class=\"alert alert-danger\" *ngIf=\"cantidad.invalid && (cantidad.dirty || cantidad.touched)\">\n                  <div *ngIf=\"cantidad.errors.required\">\n                    Cantidad es requerido\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"punitario\" class=\"col-form-label col-sm-2\">Precio Unitario (*)</label>\n              <div class=\"col-sm-6\">\n                <input type=\"number\" class=\"form-control\" (keypress)=\"omit_special_char($event)\" [(ngModel)]=\"itemNuevo.precioUnitario\" name=\"precioUnitario\" required #precioUnitario=\"ngModel\">\n\n                <div class=\"alert alert-danger\" *ngIf=\"precioUnitario.invalid && (precioUnitario.dirty || precioUnitario.touched)\">\n                  <div *ngIf=\"precioUnitario.errors.required\">\n                    Precio unitario es requerido\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)='agregarItem()'>Aceptar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- MODAL CLIENTES -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"exampleModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Seleccionar cliente</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n\n        <div class=\"card w-100 my-2\">\n          <div class=\"card-body\">\n            <form>\n              <div class=\"form-group row\">\n                <div class=\"col-sm-6\">\n                  <input type=\"text\" placeholder=\"Ingrese nombre o DNI/Cuit\"  class=\"form-control\" [(ngModel)]=\"filtroClientes\" name=\"filtroClientes\">\n                </div>\n                <button class=\"btn btn-primary\" role=\"button\" (click)='cargarClientes()' >Buscar</button>\n              </div>\n            </form>\n            <h5 class=\"card-title\">Seleccione un cliente</h5>\n            <app-loader></app-loader>\n            <div *ngIf=\"clientes?.length==0\" class=\"alert alert-info\">\n              No hay clientes en la base de datos!\n            </div>\n            <table class=\"table table-bordered table-striped\" *ngIf=\"clientes?.length>0\">\n              <thead>\n                <th>Nro. Cliente</th>\n                <th>Nombre / Razon Social</th>\n                <th>DNI / CUIT</th>\n                <th>Seleccionar</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let cliente of clientes\">\n                  <td>{{cliente.id}}</td>\n                  <td>{{cliente.nombre}}</td>\n                  <td>{{cliente.dniCuit}}</td>\n                  <td>\n                    <button type=\"button\" (click)='seleccionarCliente(cliente)' class=\"btn btn-primary\" data-dismiss=\"modal\">Seleccionar</button>\n                  </td>\n\n                </tr>\n\n              </tbody>\n            </table>\n\n            <nav aria-label=\"Page navigation example\">\n              <ul class=\"pagination\">\n                <li class=\"page-item\"><a class=\"page-link\" (click)=\"rewindClientes()\">Previous</a></li>\n                <li class=\"page-item\" *ngFor=\"let i of numerosFooterPaginadorClientes\" [ngClass]=\"{'page-item active': i.actual }\">\n                  <a class=\"page-link\" (click)=\"setPageClientes(i.numero-1)\"  >{{ i.numero }}</a>\n                </li>\n\n                <li class=\"page-item\"><a class=\"page-link\" (click)=\"forwardClientes()\">Next</a></li>\n              </ul>\n            </nav>\n\n          </div>\n\n\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)='agregarItem()'>Aceptar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- MODAL FACTURA -->\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModal3\">Open Modal</button>\n<div class=\"modal fade bd-example-modal-lg\" id=\"exampleModal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Factura</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)='finalizarFacturacion()'>\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)='print()'>Imprimir</button>\n            <div id=\"invoice\">\n\n              <div class=\"invoice overflow-auto\">\n                  <div style=\"min-width: 600px\">\n                      <header>\n                          <div class=\"row text-center\">\n                            <div class=\"col\">\n                              <h2>\n                              <p class=\"text-center badge badge-primary text-wrap\" > {{factura.claseComprobante}} </p>\n                              </h2>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col\">\n                                  <a target=\"_blank\" href=\"https://lobianijs.com\">\n                                      <img src=\"http://lobianijs.com/lobiadmin/version/1.0/ajax/img/logo/lobiadmin-logo-text-64.png\" data-holder-rendered=\"true\" />\n                                      </a>\n                              </div>\n\n                              <div class=\"col company-details\">\n                                  <h2 class=\"name\">\n                                      <a target=\"_blank\" href=\"https://lobianijs.com\">\n                                      EMPRESA PEPE\n                                      </a>\n                                  </h2>\n                                  <div>General San Martin, Buenos Aires</div>\n                                  <div>4755-8797</div>\n                                  <div>info@empresa.com.ar</div>\n                              </div>\n                          </div>\n                      </header>\n                      <main>\n                          <div class=\"row contacts\">\n                              <div class=\"col invoice-to\">\n                                  <h2 class=\"to\">{{factura.cliente.nombre}}</h2>\n                                  <div class=\"address\"> {{factura.cliente.categoriaIva}} </div>\n                                  <div class=\"address\">{{factura.cliente.direccion}}, {{factura.cliente.provincia}}</div>\n                                  <div class=\"address\">DNI/CUIT: {{factura.cliente.dniCuit}}</div>\n                                  <div class=\"email\"><a href=\"mailto:john@example.com\">{{factura.cliente.email}}</a></div>\n                              </div>\n                              <div class=\"col invoice-details\">\n                                  <div class=\"text-gray-light\">Factura N°:</div>\n                                  <h1 class=\"invoice-id\">{{factura.nroComprobante}}</h1>\n                                  <div class=\"email\">Cuit : {{factura.cuitEmpresa}}</div>\n                                  <div class=\"email\">Ingresos brutos : {{factura.iibbEmpresa}}</div>\n                                  <div class=\"email\">Inicio actividades : {{factura.inicioActividadesEmpresa}}</div>\n                                  <div class=\"email\">Fecha de emision : {{factura.fechaCreacion  | date:\"dd-MM-yyyy\"}}</div>\n                                  <div class=\"email\">Fecha de vencimiento : {{factura.fechaCreacion | date:\"dd-MM-yyyy\"}}</div>\n                              </div>\n                          </div>\n                          <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                              <thead>\n                                  <tr>\n                                      <th>CANT.</th>\n                                      <th class=\"text-left\">DESCRIPTION</th>\n                                      <th class=\"text-right\">P. UNITARIO</th>\n                                      <th class=\"text-right\">ALICUOTA IVA</th>\n                                      <th class=\"text-right\">IMPORTE</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n\n                                <tr *ngFor=\"let item of factura.items\">\n                                  <td class=\"no\">{{item.cantidad}}</td>\n                                  <td class=\"text-left\"><a>{{item.producto.codProducto}}</a> - {{item.producto.descripcion}}</td>\n                                  <td class=\"unit\">{{item.precioUnitario  | number:'1.2-2'}} $</td>\n                                  <td class=\"qty\">{{item.producto.tipoIva}} %</td>\n                                  <td class=\"total\">{{item.precioTotal  | number:'1.2-2'}} $</td>\n                                </tr>\n\n                              </tbody>\n                              <tfoot>\n                                  <tr>\n                                      <td colspan=\"2\"></td>\n                                      <td colspan=\"2\">SUBTOTAL</td>\n                                      <td>{{factura.subTotal | number:'1.2-2'}} $</td>\n                                  </tr>\n                                  <tr *ngIf=\"factura.totalIva105\">\n                                      <td colspan=\"2\"></td>\n                                      <td colspan=\"2\">ALICUOTA IVA 10.5%</td>\n                                      <td>{{factura.totalIva105 | number:'1.2-2'}} $</td>\n                                  </tr>\n                                  <tr *ngIf=\"factura.totalIva105\">\n                                      <td colspan=\"2\"></td>\n                                      <td colspan=\"2\">ALICUOTA IVA 21%</td>\n                                      <td>{{factura.totalIva21 | number:'1.2-2'}} $</td>\n                                  </tr>\n                                  <tr>\n                                      <td colspan=\"2\"></td>\n                                      <td colspan=\"2\">TOTAL</td>\n                                      <td>{{factura.totalFacturado | number:'1.2-2'}} $</td>\n                                  </tr>\n                              </tfoot>\n                          </table>\n                          <div class=\"thanks\">Muchas gracias!</div>\n                          <div class=\"notices\">\n                              <div>ORIENTACION AL CONSUMIDOR DE PCIA. BS. AS.</div>\n                              <div class=\"notice\">TEL: 0800-222-9842</div>\n                          </div>\n                      </main>\n                      <footer>\n                          Invoice was created on a computer and is valid without the signature and seal.\n                      </footer>\n                  </div>\n                  <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->\n                  <div></div>\n              </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-primary rounded-top text-center\">\n  <div class=\"container py-2\">\n    <p class=\"text-white my-2\">\n      Powered by LAF !\n    </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Barra de navegacion</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/facturas\" *ngIf=\"estaLogeado()\">Facturacion</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/clientes\" *ngIf=\"estaLogeado()\">Clientes</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/productos\" *ngIf=\"estaLogeado()\">Productos</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/libroIvaVentas\" *ngIf=\"estaLogeado()\">Libro iva ventas</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n\n      </li>\n\n\n    </ul>\n    <span class=\"navbar-text\">\n      <div class=\"row\">\n        <div class=\"container\">\n          <button type=\"button\" class=\"btn btn-outline-light\" routerLink=\"/login\" *ngIf=\"!estaLogeado()\">\n            Login\n          </button>\n        </div>\n        <a class =\"nav-link\" *ngIf=\"estaLogeado()\">Bienvenido, {{usuarioLogeado()}} !</a>\n        <a class =\"nav-link\" href=\"#\" (click)=\"logout()\" *ngIf=\"estaLogeado()\">\n          <img src=\"assets/images/logout.png\">\n        </a>\n\n      </div>\n    </span>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/libro-iva-ventas/libro-iva-ventas.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/libro-iva-ventas/libro-iva-ventas.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"alert alert-danger\" *ngIf=\"errores?.length > 0\">\n  <li *ngFor=\"let err of errores\" >\n    {{ err }}\n  </li>\n</ul>\n<div class=\"card w-75 my-2\">\n  <div class=\"card-body\">\n\n    <form class=\"m-3\">\n      <div class=\"form-group row\">\n        <div class=\"input-group\">\n          <label for=\"fechaDesde\">Fecha desde:</label>\n          <input class=\"form-control ml-2 col-2\" placeholder=\"yyyy-mm-dd\"\n                 name=\"fechaDesde\" [(ngModel)]=\"fechaDesde\" ngbDatepicker #desde=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"desde.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n      <!--pre>Model: {{ fechaDesde | json }}</pre-->\n      <div class=\"form-group row\">\n        <div class=\"input-group\">\n          <label for=\"fechaHasta\">Fecha hasta:</label>\n          <input class=\"form-control ml-2 col-2\" placeholder=\"yyyy-mm-dd\"\n                 name=\"fechaHasta\" [(ngModel)]=\"fechaHasta\" ngbDatepicker #hasta=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"hasta.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <button class=\"btn btn-rounded btn-primary\" type=\"button\" (click)=\"cargarFacturas()\">Buscar cliente</button>\n      </div>\n    </form>\n\n    <h5 class=\"card-title\">Listado de facturas</h5>\n    <app-loader></app-loader>\n    <div *ngIf=\"facturas?.length==0\" class=\"alert alert-info\">\n      No hay facturas en la base de datos!\n    </div>\n    <table class=\"table table-bordered table-striped\" *ngIf=\"facturas?.length>0\">\n      <thead>\n        <th>Fecha creacion</th>\n        <th>Clase</th>\n        <th>Tipo</th>\n        <th>Nro. comprobante</th>\n        <th>Nro. del cliente</th>\n        <th>Nombre del cliente</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let factura of facturas\">\n          <td>{{factura.fechaCreacion}}</td>\n          <td>{{factura.claseComprobante}}</td>\n          <td>{{factura.tipoComprobante}}</td>\n          <td>{{factura.nroComprobante}}</td>\n          <td>{{factura.cliente.id}}</td>\n          <td>{{factura.cliente.nombre}}</td>\n        </tr>\n\n      </tbody>\n    </table>\n    <nav aria-label=\"Page navigation example\">\n      <div class=\"row p-3\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"rewind()\">Previous</a></li>\n          <li class=\"page-item\" *ngFor=\"let i of numerosFooterPaginador\" [ngClass]=\"{'page-item active': i.actual }\">\n            <a class=\"page-link\" (click)=\"setPage(i.numero-1)\"  >{{ i.numero }}</a>\n          </li>\n\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"forward()\">Next</a></li>\n        </ul>\n        <label for=\"size\">\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          Registros por página:\n          &nbsp;&nbsp;\n        </label>\n        <select [(ngModel)]=\"size\" required (change)=\"onChangeSize()\" class=\"form-control\" style=\"width:auto;\" name=\"size\">\n          <option selected value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card bg-dark text-white  my-2\">\n  <div class=\"card-header\">\n    Login\n  </div>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <label for=\"Usuario\">Usuario</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usuario.username\" name=\"username\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"usuario.password\" name=\"password\" >\n        </div>\n      </div>\n\n      <button class=\"btn btn-primary\" role=\"button\" (click)='login()'>Login</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productos/form.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productos/form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"alert alert-danger\" *ngIf=\"errores?.length > 0\">\n  <li *ngFor=\"let err of errores\" >\n    {{ err }}\n  </li>\n</ul>\n\n<div class=\"card bg-dark text-white  my-2\">\n  <div class=\"card-header\">\n    {{ titulo }}\n  </div>\n  <div class=\"card-body\">\n\n    <form>\n\n\n      <div class=\"form-group row\">\n        <label for=\"codProducto\" class=\"col-form-label col-sm-2\">Cod. Producto (*)</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"producto.codProducto\" name=\"codProducto\" required minlength=\"4\" #codProducto=\"ngModel\">\n\n          <div class=\"alert alert-danger\" *ngIf=\"codProducto.invalid && (codProducto.dirty || codProducto.touched)\">\n            <div *ngIf=\"codProducto.errors.required\">\n              Cod. Producto es requerido\n            </div>\n            <div *ngIf=\"codProducto.errors.minlength\">\n              El Cod. Producto debe tener al menos 4 caracteres.\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"descripcion\" class=\"col-form-label col-sm-2\">Descripcion (*)</label>\n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"producto.descripcion\" name=\"descripcion\" required minlength=\"4\" #descripcion=\"ngModel\">\n\n          <div class=\"alert alert-danger\" *ngIf=\"descripcion.invalid && (descripcion.dirty || descripcion.touched)\">\n            <div *ngIf=\"descripcion.errors.required\">\n              Descripcion es requerido\n            </div>\n            <div *ngIf=\"descripcion.errors.minlength\">\n              El Descripcion debe tener al menos 4 caracteres.\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label for=\"rubro\" class=\"col-form-label col-sm-2\">Rubro (*)</label>\n        <div class=\"col-sm-6\">\n\n          <select [(ngModel)]=\"producto.rubro\" required class=\"btn btn-secondary dropdown-toggle\" name=\"rubro\">\n            <option selected=\"selected\" disabled >Seleccione una opcion...</option>\n            <option value=\"CABLES\">Cables</option>\n            <option value=\"COMPONENTES\">Componentes</option>\n            <option value=\"ACCESORIOS\">Accesorios</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"tipoIva\" class=\"col-form-label col-sm-2\">Tipo de IVA (*)</label>\n        <div class=\"col-sm-6\">\n\n          <select [(ngModel)]=\"producto.tipoIva\" required class=\"btn btn-secondary dropdown-toggle\" name=\"tipoIva\">\n            <option selected=\"selected\" disabled >Seleccione una opcion...</option>\n            <option value=\"10.5\">10.5</option>\n            <option value=\"21\">21</option>\n          </select>\n\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group row\" *ngIf=\"producto.id\">\n        <label for=\"fechaCreacion\" class=\"col-form-label col-sm-2\">Fecha de creacion</label>\n        <div class=\"col-sm-6\">\n          {{producto.fechaCreacion | date:\"dd-MM-yyyy\"}}\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6\">\n          <button class=\"btn btn-primary\" role=\"button\" (click)='create()' *ngIf=\"!producto.id else elseBlock\">Crear</button>\n\n          <ng-template #elseBlock>\n            <button class=\"btn btn-primary\" role=\"button\" (click)='update()'>Editar</button>\n          </ng-template>\n\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productos/productos.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productos/productos.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-75 my-2\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Listado de productos</h5>\n    <div class=\"my-2 text-left\">\n\n      <button class=\"btn btn-rounded btn-primary\" type=\"button\" [routerLink]=\"['/productos/form']\">Crear producto</button>\n\n    </div>\n    <app-loader></app-loader>\n    <div *ngIf=\"productos?.length==0\" class=\"alert alert-info\">\n      No hay productos en la base de datos!\n    </div>\n    <table class=\"table table-bordered table-striped\" *ngIf=\"productos?.length>0\">\n      <thead>\n        <th>Cod. Producto</th>\n        <th>Descripcion</th>\n        <th>Rubro</th>\n        <th>Editar</th>\n        <th>Eliminar</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let producto of productos\">\n          <td>{{producto.codProducto}}</td>\n          <td>{{producto.descripcion}}</td>\n          <td>{{producto.rubro}}</td>\n          <td>\n            <button type=\"button\" [routerLink]=\"['/productos/form',producto.id]\" class=\"btn btn-primary\">Editar</button>\n          </td>\n          <td>\n            <button type=\"button\" (click)='delete(producto)' class=\"btn btn-danger\">Eliminar</button>\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n    <nav aria-label=\"Page navigation example\">\n      <div class=\"row p-3\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"rewind()\">Previous</a></li>\n          <li class=\"page-item\" *ngFor=\"let i of numerosFooterPaginador\" [ngClass]=\"{'page-item active': i.actual }\">\n            <a class=\"page-link\" (click)=\"setPage(i.numero-1)\"  >{{ i.numero }}</a>\n          </li>\n\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"forward()\">Next</a></li>\n        </ul>\n        <label for=\"size\">\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          Registros por página:\n          &nbsp;&nbsp;\n        </label>\n        <select [(ngModel)]=\"size\" required (change)=\"onChangeSize()\" class=\"form-control\" style=\"width:auto;\" name=\"size\">\n          <option selected value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n      </div>\n    </nav>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/utils/loader/loader.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/utils/loader/loader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- loader.component.html -->\n<div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!loading\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'facturacion';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/productos/productos.component.ts");
/* harmony import */ var _productos_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productos/producto.service */ "./src/app/productos/producto.service.ts");
/* harmony import */ var _facturas_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facturas/form.component */ "./src/app/facturas/form.component.ts");
/* harmony import */ var _facturas_factura_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./facturas/factura.service */ "./src/app/facturas/factura.service.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clientes/cliente.service */ "./src/app/clientes/cliente.service.ts");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _clientes_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clientes/form.component */ "./src/app/clientes/form.component.ts");
/* harmony import */ var _productos_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./productos/form.component */ "./src/app/productos/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/loader/loader.component */ "./src/app/utils/loader/loader.component.ts");
/* harmony import */ var _utils_loader_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/loader/loader.service */ "./src/app/utils/loader/loader.service.ts");
/* harmony import */ var _utils_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/loader/loader-interceptor */ "./src/app/utils/loader/loader-interceptor.ts");
/* harmony import */ var _login_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/auth-interceptor.service */ "./src/app/login/auth-interceptor.service.ts");
/* harmony import */ var _libro_iva_ventas_libro_iva_ventas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./libro-iva-ventas/libro-iva-ventas.component */ "./src/app/libro-iva-ventas/libro-iva-ventas.component.ts");
























// Interceptors


const routes = [
    { path: '', redirectTo: '/clientes', pathMatch: 'full' },
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__["ClientesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'clientes/form', component: _clientes_form_component__WEBPACK_IMPORTED_MODULE_15__["FormClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'clientes/form/:id', component: _clientes_form_component__WEBPACK_IMPORTED_MODULE_15__["FormClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'productos', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__["ProductosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'productos/form', component: _productos_form_component__WEBPACK_IMPORTED_MODULE_16__["FormProductoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'productos/form/:id', component: _productos_form_component__WEBPACK_IMPORTED_MODULE_16__["FormProductoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'facturas', component: _facturas_form_component__WEBPACK_IMPORTED_MODULE_9__["FormFacturaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'libroIvaVentas', component: _libro_iva_ventas_libro_iva_ventas_component__WEBPACK_IMPORTED_MODULE_25__["LibroIvaVentasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__["ProductosComponent"],
            _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__["ClientesComponent"],
            _clientes_form_component__WEBPACK_IMPORTED_MODULE_15__["FormClienteComponent"],
            _productos_form_component__WEBPACK_IMPORTED_MODULE_16__["FormProductoComponent"],
            _facturas_form_component__WEBPACK_IMPORTED_MODULE_9__["FormFacturaComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _libro_iva_ventas_libro_iva_ventas_component__WEBPACK_IMPORTED_MODULE_25__["LibroIvaVentasComponent"],
            _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)
        ],
        providers: [_productos_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"], _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_12__["ClienteService"], _facturas_factura_service__WEBPACK_IMPORTED_MODULE_10__["FacturaService"], _login_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                useClass: _login_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptorService"],
                multi: true
            },
            _utils_loader_loader_service__WEBPACK_IMPORTED_MODULE_22__["LoaderService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _utils_loader_loader_interceptor__WEBPACK_IMPORTED_MODULE_23__["LoaderInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clientes/cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/clientes/cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/appSettings */ "./src/app/utils/appSettings.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ClienteService = class ClienteService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + '/api/clientes';
    }
    getClientes(page, size, order, asc) {
        return this.http.get(this.urlEndPoint + `?page=${page}&size=${size}&order=${order}&asc=${asc}&filtro=`);
    }
    getClientesConFiltro(page, size, order, asc, filtro) {
        return this.http.get(this.urlEndPoint + `?page=${page}&size=${size}&order=${order}&asc=${asc}&filtro=${filtro}`);
    }
    create(cliente) {
        return this.http.post(this.urlEndPoint, cliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    getCliente(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            this.router.navigate(['/clientes']);
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error al editar', e.error.mensaje, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    update(cliente) {
        return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ClienteService);



/***/ }),

/***/ "./src/app/clientes/cliente.ts":
/*!*************************************!*\
  !*** ./src/app/clientes/cliente.ts ***!
  \*************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
class Cliente {
}


/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.service */ "./src/app/clientes/cliente.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ClientesComponent = class ClientesComponent {
    constructor(clienteService, router) {
        this.clienteService = clienteService;
        this.router = router;
        this.page = 0;
        this.size = 5;
        this.order = 'nombre';
        this.asc = true;
        this.isFirst = false;
        this.isLast = false;
    }
    ngOnInit() {
        this.cargarClientes();
    }
    cargarClientes() {
        this.clienteService.getClientes(this.page, this.size, this.order, this.asc).subscribe(rtaJson => {
            this.clientes = rtaJson.clientes;
            this.isFirst = rtaJson.paginador.first;
            this.isLast = rtaJson.paginador.last;
            this.totalPages = new Array(rtaJson.paginador.totalPaginas);
            this.numerosFooterPaginador = rtaJson.paginador.paginas;
        }, err => {
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error('Mensaje de error desde el backend: ' + err.message);
        });
    }
    delete(cliente) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Está seguro?',
            text: `¿Seguro que desea eliminar al cliente ${cliente.nombre}?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                this.clienteService.delete(cliente.id).subscribe(response => {
                    this.clientes = this.clientes.filter(cli => cli !== cliente);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Cliente Eliminado!', `Cliente ${cliente.nombre} eliminado con éxito.`, 'success');
                });
            }
        });
    }
    sort() {
        this.asc = !this.asc;
        this.cargarClientes();
    }
    rewind() {
        if (!this.isFirst) {
            this.page--;
            this.cargarClientes();
        }
    }
    forward() {
        if (!this.isLast) {
            this.page++;
            this.cargarClientes();
        }
    }
    setPage(page) {
        this.page = page;
        this.cargarClientes();
    }
    setOrder(order) {
        this.order = order;
        this.cargarClientes();
    }
    onChangeSize() {
        console.log(this.size);
        this.cargarClientes();
    }
};
ClientesComponent.ctorParameters = () => [
    { type: _cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientes',
        template: __webpack_require__(/*! raw-loader!./clientes.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientes/clientes.component.html")
    })
], ClientesComponent);



/***/ }),

/***/ "./src/app/clientes/form.component.ts":
/*!********************************************!*\
  !*** ./src/app/clientes/form.component.ts ***!
  \********************************************/
/*! exports provided: FormClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClienteComponent", function() { return FormClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente */ "./src/app/clientes/cliente.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente.service */ "./src/app/clientes/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let FormClienteComponent = class FormClienteComponent {
    constructor(clienteService, router, activatedRoute) {
        this.clienteService = clienteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cliente = new _cliente__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.titulo = "Crear cliente";
    }
    ngOnInit() {
        this.cargarCliente();
    }
    cargarCliente() {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
            }
        });
    }
    create() {
        this.clienteService.create(this.cliente).subscribe(respuestaJson => {
            this.router.navigate(['/clientes']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Nuevo cliente', `${respuestaJson.mensaje} : ${respuestaJson.cliente.nombre}`, 'success');
        }, e => {
            if (e.status == 401) {
                console.error('ERROR 401!!!');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }
        });
    }
    update() {
        this.clienteService.update(this.cliente).subscribe(respuestaJson => {
            this.router.navigate(['/clientes']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Cliente actualizado', `${respuestaJson.mensaje} : ${respuestaJson.cliente.nombre}`, 'success');
        }, err => {
            this.errores = err.error.errors;
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error(err.error.errors);
        });
    }
};
FormClienteComponent.ctorParameters = () => [
    { type: _cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FormClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/clientes/form.component.html")
    })
], FormClienteComponent);



/***/ }),

/***/ "./src/app/facturas/app.component.css":
/*!********************************************!*\
  !*** ./src/app/facturas/app.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invoice{\n    padding: 30px;\n}\n\n.invoice {\n    position: relative;\n    background-color: #FFF;\n    min-height: 680px;\n    padding: 15px\n}\n\n.invoice header {\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #3989c6\n}\n\n.invoice .company-details {\n    text-align: right\n}\n\n.invoice .company-details .name {\n    margin-top: 0;\n    margin-bottom: 0\n}\n\n.invoice .contacts {\n    margin-bottom: 20px\n}\n\n.invoice .invoice-to {\n    text-align: left\n}\n\n.invoice .invoice-to .to {\n    margin-top: 0;\n    margin-bottom: 0\n}\n\n.invoice .invoice-details {\n    text-align: right\n}\n\n.invoice .invoice-details .invoice-id {\n    margin-top: 0;\n    color: #3989c6\n}\n\n.invoice main {\n    padding-bottom: 50px\n}\n\n.invoice main .thanks {\n    margin-top: -100px;\n    font-size: 2em;\n    margin-bottom: 50px\n}\n\n.invoice main .notices {\n    padding-left: 6px;\n    border-left: 6px solid #3989c6\n}\n\n.invoice main .notices .notice {\n    font-size: 1.2em\n}\n\n.invoice table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-bottom: 20px\n}\n\n.invoice table td,.invoice table th {\n    padding: 15px;\n    background: #eee;\n    border-bottom: 1px solid #fff\n}\n\n.invoice table th {\n    white-space: nowrap;\n    font-weight: 400;\n    font-size: 16px\n}\n\n.invoice table td h3 {\n    margin: 0;\n    font-weight: 400;\n    color: #3989c6;\n    font-size: 1.2em\n}\n\n.invoice table .qty,.invoice table .total,.invoice table .unit {\n    text-align: right;\n    font-size: 1.2em\n}\n\n.invoice table .no {\n    color: #fff;\n    font-size: 1.6em;\n    background: #3989c6\n}\n\n.invoice table .unit {\n    background: #ddd\n}\n\n.invoice table .total {\n    background: #3989c6;\n    color: #fff\n}\n\n.invoice table tbody tr:last-child td {\n    border: none\n}\n\n.invoice table tfoot td {\n    background: 0 0;\n    border-bottom: none;\n    white-space: nowrap;\n    text-align: right;\n    padding: 10px 20px;\n    font-size: 1.2em;\n    border-top: 1px solid #aaa\n}\n\n.invoice table tfoot tr:first-child td {\n    border-top: none\n}\n\n.invoice table tfoot tr:last-child td {\n    color: #3989c6;\n    font-size: 1.4em;\n    border-top: 1px solid #3989c6\n}\n\n.invoice table tfoot tr td:first-child {\n    border: none\n}\n\n.invoice footer {\n    width: 100%;\n    text-align: center;\n    color: #777;\n    border-top: 1px solid #aaa;\n    padding: 8px 0\n}\n\n@media print {\n    .invoice {\n        font-size: 11px!important;\n        overflow: hidden!important\n    }\n\n    .invoice footer {\n        position: absolute;\n        bottom: 10px;\n        page-break-after: always\n    }\n\n    .invoice>div:last-child {\n        page-break-before: always\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjdHVyYXMvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mYWN0dXJhcy9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnZvaWNle1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbnZvaWNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBtaW4taGVpZ2h0OiA2ODBweDtcbiAgICBwYWRkaW5nOiAxNXB4XG59XG5cbi5pbnZvaWNlIGhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzOTg5YzZcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHRcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyAubmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5pbnZvaWNlIC5jb250YWN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS10byB7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS10byAudG8ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIC5pbnZvaWNlLWlkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjMzk4OWM2XG59XG5cbi5pbnZvaWNlIG1haW4ge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4XG59XG5cbi5pbnZvaWNlIG1haW4gLnRoYW5rcyB7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHhcbn1cblxuLmludm9pY2UgbWFpbiAubm90aWNlcyB7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMzk4OWM2XG59XG5cbi5pbnZvaWNlIG1haW4gLm5vdGljZXMgLm5vdGljZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbVxufVxuXG4uaW52b2ljZSB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRkLC5pbnZvaWNlIHRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZcbn1cblxuLmludm9pY2UgdGFibGUgdGgge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE2cHhcbn1cblxuLmludm9pY2UgdGFibGUgdGQgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMzk4OWM2O1xuICAgIGZvbnQtc2l6ZTogMS4yZW1cbn1cblxuLmludm9pY2UgdGFibGUgLnF0eSwuaW52b2ljZSB0YWJsZSAudG90YWwsLmludm9pY2UgdGFibGUgLnVuaXQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMS4yZW1cbn1cblxuLmludm9pY2UgdGFibGUgLm5vIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGJhY2tncm91bmQ6ICMzOTg5YzZcbn1cblxuLmludm9pY2UgdGFibGUgLnVuaXQge1xuICAgIGJhY2tncm91bmQ6ICNkZGRcbn1cblxuLmludm9pY2UgdGFibGUgLnRvdGFsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzk4OWM2O1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5pbnZvaWNlIHRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICAgIGJvcmRlcjogbm9uZVxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ZCB7XG4gICAgYmFja2dyb3VuZDogMCAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYVxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICBjb2xvcjogIzM5ODljNjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzk4OWM2XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRmb290IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuLmludm9pY2UgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XG4gICAgcGFkZGluZzogOHB4IDBcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuaW52b2ljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50XG4gICAgfVxuXG4gICAgLmludm9pY2UgZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5c1xuICAgIH1cblxuICAgIC5pbnZvaWNlPmRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5c1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/facturas/factura.service.ts":
/*!*********************************************!*\
  !*** ./src/app/facturas/factura.service.ts ***!
  \*********************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/appSettings */ "./src/app/utils/appSettings.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let FacturaService = class FacturaService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + '/api/facturas';
    }
    obtenerFacturas(page, size, order, asc, fechaDesde, fechaHasta) {
        return this.http.get(this.urlEndPoint + `/libroIvaVentas?page=${page}&size=${size}&order=${order}&asc=${asc}&filtroFechaDesde=${fechaDesde}&filtroFechaHasta=${fechaHasta}`);
    }
    obtenerProximoNroFactura(tipoComprobante, claseComprobante) {
        return this.http.get(this.urlEndPoint + `/obtenerProximoNroFactura?tipoComprobante=${tipoComprobante}&claseComprobante=${claseComprobante}`);
    }
    create(factura) {
        return this.http.post(this.urlEndPoint, factura).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                let errores;
                console.error(e.errors);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error de solicitud', 'Solucionar errores mencionados en rojo', 'error');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    getFactura(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            this.router.navigate(['/facturas']);
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error al editar', e.error.mensaje, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    update(factura) {
        return this.http.put(`${this.urlEndPoint}/${factura.idFactura}`, factura).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
};
FacturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
FacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FacturaService);



/***/ }),

/***/ "./src/app/facturas/factura.ts":
/*!*************************************!*\
  !*** ./src/app/facturas/factura.ts ***!
  \*************************************/
/*! exports provided: Factura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factura", function() { return Factura; });
class Factura {
}


/***/ }),

/***/ "./src/app/facturas/facturaItem.ts":
/*!*****************************************!*\
  !*** ./src/app/facturas/facturaItem.ts ***!
  \*****************************************/
/*! exports provided: FacturaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaItem", function() { return FacturaItem; });
class FacturaItem {
}


/***/ }),

/***/ "./src/app/facturas/form.component.ts":
/*!********************************************!*\
  !*** ./src/app/facturas/form.component.ts ***!
  \********************************************/
/*! exports provided: FormFacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFacturaComponent", function() { return FormFacturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _factura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factura */ "./src/app/facturas/factura.ts");
/* harmony import */ var _facturaItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facturaItem */ "./src/app/facturas/facturaItem.ts");
/* harmony import */ var _clientes_cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clientes/cliente */ "./src/app/clientes/cliente.ts");
/* harmony import */ var _factura_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factura.service */ "./src/app/facturas/factura.service.ts");
/* harmony import */ var _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clientes/cliente.service */ "./src/app/clientes/cliente.service.ts");
/* harmony import */ var _productos_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productos/producto.service */ "./src/app/productos/producto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let FormFacturaComponent = class FormFacturaComponent {
    constructor(productoService, facturaService, clienteService, router, activatedRoute) {
        this.productoService = productoService;
        this.facturaService = facturaService;
        this.clienteService = clienteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.factura = new _factura__WEBPACK_IMPORTED_MODULE_2__["Factura"]();
        this.titulo = "Crear factura";
        this.pageProductos = 0;
        this.sizeProductos = 5;
        this.orderProductos = 'codProducto';
        this.ascProductos = true;
        this.isFirstProductos = false;
        this.isLastProductos = false;
        this.pageClientes = 0;
        this.sizeClientes = 5;
        this.orderClientes = 'nombre';
        this.ascClientes = true;
        this.isFirstClientes = false;
        this.isLastClientes = false;
    }
    ngOnInit() {
        this.limpiarVariables();
        this.cargarClientes();
        this.cargarProductos();
    }
    print() {
        this.finalizarFacturacion();
        let divToPrint = document.getElementById('invoice').innerHTML;
        let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        newWindow.document.open();
        newWindow.document.write(`
    <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" type="text/css" href="http://localhost:4200/assets/css/bootstrap.min.css"/>
          <link rel="stylesheet" type="text/css" href="http://localhost:4200/assets/css/invoice.css"/>
        </head>
        <body onload="window.print();window.close()">${divToPrint}
        <script src="http://localhost:4200/assets/js/bootstrap.min.js" type="module"></script>
        </body>
      </html>
    `);
        newWindow.document.close();
    }
    limpiarVariables() {
        this.factura.idFactura = null;
        this.factura.tipoComprobante = 'FACTURA';
        this.factura.claseComprobante = '-';
        this.factura.nroComprobante = '-';
        this.factura.fechaCreacion = new Date();
        this.factura.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]();
        this.factura.items = [];
        this.factura.totalIva21 = 0;
        this.factura.totalIva105 = 0;
        this.factura.totalFacturado = 0;
        this.itemNuevo = new _facturaItem__WEBPACK_IMPORTED_MODULE_3__["FacturaItem"]();
        this.filtroClientes = '';
        this.filtroProductos = '';
    }
    agregarItem() {
        this.itemNuevo.precioTotal = this.itemNuevo.precioUnitario * this.itemNuevo.cantidad;
        this.factura.items.push(this.itemNuevo);
        if (this.itemNuevo.producto.tipoIva == '21') {
            this.factura.totalIva21 = this.factura.totalIva21 + this.itemNuevo.precioTotal;
        }
        else {
            this.factura.totalIva105 = this.factura.totalIva105 + this.itemNuevo.precioTotal;
        }
        this.factura.totalFacturado = this.factura.totalFacturado + this.itemNuevo.precioTotal;
        this.itemNuevo = new _facturaItem__WEBPACK_IMPORTED_MODULE_3__["FacturaItem"]();
    }
    eliminarItem(item) {
        const index = this.factura.items.indexOf(item);
        if (index !== -1) {
            this.factura.items.splice(index, 1);
            if (item.producto.tipoIva == '21') {
                this.factura.totalIva21 = this.factura.totalIva21 - item.precioTotal;
            }
            else {
                this.factura.totalIva105 = this.factura.totalIva105 - item.precioTotal;
            }
            this.factura.totalFacturado = this.factura.totalFacturado - item.precioTotal;
        }
    }
    generarFacturacion() {
        console.log(this.factura);
        this.facturaService.create(this.factura).subscribe(rtaJson => {
            this.factura = rtaJson.factura;
            document.getElementById("openModalButton").click();
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()('Nuevo factura', `${rtaJson.mensaje} : ${rtaJson.factura.nroComprobante}`, 'success');
        }, e => {
            this.errores = e.error.errors;
            console.error('Codigo de error desde el backend: ' + e.status);
            console.error(e.error.errors);
        });
    }
    finalizarFacturacion() {
        this.limpiarVariables();
        this.router.navigate(['/facturas']);
    }
    create() {
        console.log(this.factura);
        this.facturaService.create(this.factura).subscribe(respuestaJson => {
            this.router.navigate(['/facturas']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()('Nuevo factura', `${respuestaJson.mensaje} : ${respuestaJson.factura.nroComprobante}`, 'success');
        }, e => {
            if (e.status == 401) {
                console.error('ERROR 401!!!');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(e);
            }
        });
    }
    update() {
        this.facturaService.update(this.factura).subscribe(respuestaJson => {
            this.router.navigate(['/facturas']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()('Factura actualizado', `${respuestaJson.mensaje} : ${respuestaJson.factura.nroComprobante}`, 'success');
        }, err => {
            this.errores = err.error.errors;
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error(err.error.errors);
        });
    }
    cargarProductos() {
        this.productoService.getProductosConFiltro(this.pageProductos, this.sizeProductos, this.orderProductos, this.ascProductos, this.filtroProductos).subscribe(respuestaJson => {
            this.productos = respuestaJson.productos;
            this.isFirstProductos = respuestaJson.paginador.first;
            this.isLastProductos = respuestaJson.paginador.last;
            this.totalPagesProductos = new Array(respuestaJson.paginador.totalPaginas);
            this.numerosFooterPaginadorProductos = respuestaJson.paginador.paginas;
        }, err => {
            /*
            this.errores = err.error.errors as string[];
            console.error('Codigo de error desde el backend: '+ err.status)
            console.error(err.error.errors)*/
            console.error('Codigo de error desde el backend: ' + err.status);
        });
    }
    sortProductos() {
        this.ascProductos = !this.ascProductos;
        this.cargarProductos();
    }
    rewindProductos() {
        if (!this.isFirstProductos) {
            this.pageProductos--;
            this.cargarProductos();
        }
    }
    forwardProductos() {
        if (!this.isLastProductos) {
            this.pageProductos++;
            this.cargarProductos();
        }
    }
    setPageProductos(page) {
        this.pageProductos = page;
        this.cargarProductos();
    }
    setOrderProductos(order) {
        this.orderProductos = order;
        this.cargarProductos();
    }
    seleccionarProducto(producto) {
        this.itemNuevo.producto = producto;
    }
    borrarSeleccionProducto() {
        this.itemNuevo.producto = null;
    }
    cargarClientes() {
        this.clienteService.getClientesConFiltro(this.pageClientes, this.sizeClientes, this.orderClientes, this.ascClientes, this.filtroClientes).subscribe(rtaJson => {
            this.clientes = rtaJson.clientes;
            this.isFirstClientes = rtaJson.paginador.first;
            this.isLastClientes = rtaJson.paginador.last;
            this.totalPagesClientes = new Array(rtaJson.paginador.totalPaginas);
            this.numerosFooterPaginadorClientes = rtaJson.paginador.paginas;
        }, err => {
            console.error('Codigo de error desde el backend: ' + err.status);
        });
    }
    sortClientes() {
        this.ascClientes = !this.ascClientes;
        this.cargarClientes();
    }
    rewindClientes() {
        if (!this.isFirstClientes) {
            this.pageClientes--;
            this.cargarClientes();
        }
    }
    forwardClientes() {
        if (!this.isLastClientes) {
            this.pageClientes++;
            this.cargarClientes();
        }
    }
    setPageClientes(page) {
        this.pageClientes = page;
        this.cargarClientes();
    }
    setOrderClientes(order) {
        this.orderClientes = order;
        this.cargarClientes();
    }
    seleccionarCliente(cliente) {
        this.factura.cliente = cliente;
        if (cliente.categoriaIva == 'RESPONSABLE_INSCRIPTO')
            this.factura.claseComprobante = 'A';
        else
            this.factura.claseComprobante = 'B';
        this.getProximoNroFactura(this.factura.claseComprobante);
    }
    desseleccionarCliente() {
        this.factura.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]();
        this.factura.claseComprobante = '-';
        this.factura.nroComprobante = '-';
    }
    getProximoNroFactura(claseComprobante) {
        this.facturaService.obtenerProximoNroFactura('FACTURA', claseComprobante).subscribe(respuestaJson => {
            this.factura.nroComprobante = respuestaJson.proximoNroFactura;
        }, err => {
            console.error('Codigo de error desde el backend: ' + err.status);
        });
    }
    omit_special_char(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        // devuelve solo los caracteres que no son especiales
        // https://www.w3schools.com/charsets/ref_html_ascii.asp
        // desde la a-z, A-Z, . , 0-9
        // k = 46 es el punto
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 46 || k == 8 || (k >= 48 && k <= 57));
    }
};
FormFacturaComponent.ctorParameters = () => [
    { type: _productos_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductoService"] },
    { type: _factura_service__WEBPACK_IMPORTED_MODULE_5__["FacturaService"] },
    { type: _clientes_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
FormFacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/facturas/form.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/facturas/app.component.css")]
    })
], FormFacturaComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n  float: left;\n  bottom: 0px;\n  height: 60px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.estaLogeado()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
    }
    estaLogeado() {
        return this.authService.estaLogeado();
    }
    usuarioLogeado() {
        return this.authService.getUsuarioLogeado();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/libro-iva-ventas/libro-iva-ventas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/libro-iva-ventas/libro-iva-ventas.component.ts ***!
  \****************************************************************/
/*! exports provided: LibroIvaVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroIvaVentasComponent", function() { return LibroIvaVentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _facturas_factura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../facturas/factura.service */ "./src/app/facturas/factura.service.ts");



let LibroIvaVentasComponent = class LibroIvaVentasComponent {
    constructor(facturaService) {
        this.facturaService = facturaService;
        this.page = 0;
        this.size = 5;
        this.order = 'fechaCreacion';
        this.asc = true;
        this.isFirst = false;
        this.isLast = false;
    }
    ngOnInit() {
        this.fechaDesde = null;
        this.fechaHasta = null;
    }
    cargarFacturas() {
        this.fechaDesdeString = '';
        this.fechaHastaString = '';
        if (this.fechaDesde && this.fechaHasta) {
            if (this.fechaDesde.year && this.fechaHasta.year) {
                this.fechaDesdeString = this.fechaDesde.year + '-' + this.fechaDesde.month + '-' + this.fechaDesde.day;
                this.fechaHastaString = this.fechaHasta.year + '-' + this.fechaHasta.month + '-' + this.fechaHasta.day;
                console.log(this.fechaDesdeString);
            }
        }
        this.facturaService.obtenerFacturas(this.page, this.size, this.order, this.asc, this.fechaDesdeString, this.fechaHastaString).subscribe(rtaJson => {
            this.facturas = rtaJson.facturas;
            this.isFirst = rtaJson.paginador.first;
            this.isLast = rtaJson.paginador.last;
            this.totalPages = new Array(rtaJson.paginador.totalPaginas);
            this.numerosFooterPaginador = rtaJson.paginador.paginas;
            this.errores = [];
        }, err => {
            this.errores = err.error.errors;
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error(err.error.errors);
        });
    }
    sort() {
        this.asc = !this.asc;
        this.cargarFacturas();
    }
    rewind() {
        if (!this.isFirst) {
            this.page--;
            this.cargarFacturas();
        }
    }
    forward() {
        if (!this.isLast) {
            this.page++;
            this.cargarFacturas();
        }
    }
    setPage(page) {
        this.page = page;
        this.cargarFacturas();
    }
    setOrder(order) {
        this.order = order;
        this.cargarFacturas();
    }
    onChangeSize() {
        console.log(this.size);
        this.cargarFacturas();
    }
};
LibroIvaVentasComponent.ctorParameters = () => [
    { type: _facturas_factura_service__WEBPACK_IMPORTED_MODULE_2__["FacturaService"] }
];
LibroIvaVentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-libro-iva-ventas',
        template: __webpack_require__(/*! raw-loader!./libro-iva-ventas.component.html */ "./node_modules/raw-loader/index.js!./src/app/libro-iva-ventas/libro-iva-ventas.component.html"),
    })
], LibroIvaVentasComponent);



/***/ }),

/***/ "./src/app/login/auth-interceptor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/login/auth-interceptor.service.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AuthInterceptorService = class AuthInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        const token = localStorage.getItem('auth_token');
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            if (err.status === 401) {
                this.router.navigate(['/login']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', `El usuario no posee permisos`, 'error');
            }
            if (err.status == 0) { //or whatever condition you like to put
                localStorage.removeItem('auth_token');
                localStorage.removeItem('username');
                this.router.navigate(['/login']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', `El servicio backend no se encuentra disponible`, 'error');
            }
            const JsonParseError = 'Http failure during parsing for';
            const matches = err.message.match(new RegExp(JsonParseError, 'ig'));
            if (err.status === 200 && matches.length === 1) {
                // return obs that completes;
                localStorage.removeItem('auth_token');
                localStorage.removeItem('username');
                this.router.navigate(['/login']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', `El tocken ha vencido`, 'error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utils_appSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/appSettings */ "./src/app/utils/appSettings.ts");








let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = _utils_appSettings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].API_ENDPOINT + '/api/login';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    login(usuario) {
        return this.http.post(this.urlEndPoint, usuario, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    estaLogeado() {
        if (localStorage.getItem('auth_token') == null)
            return false;
        else
            return true;
    }
    getUsuarioLogeado() {
        return localStorage.getItem('username');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario */ "./src/app/login/usuario.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(authService, router, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
    }
    login() {
        this.authService.login(this.usuario).subscribe(respuestaJson => {
            localStorage.setItem('auth_token', 'Bearer ' + respuestaJson.token);
            localStorage.setItem('username', respuestaJson.user.username);
            this.router.navigate(['/clientes']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Inicio sesion con exito', `${respuestaJson.mensaje}`, 'success');
        }, err => {
            this.errores = err.error.errors;
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error(err.error.errors);
        });
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html")
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/usuario.ts":
/*!**********************************!*\
  !*** ./src/app/login/usuario.ts ***!
  \**********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
}


/***/ }),

/***/ "./src/app/productos/form.component.ts":
/*!*********************************************!*\
  !*** ./src/app/productos/form.component.ts ***!
  \*********************************************/
/*! exports provided: FormProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function() { return FormProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto */ "./src/app/productos/producto.ts");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.service */ "./src/app/productos/producto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let FormProductoComponent = class FormProductoComponent {
    constructor(productoService, router, activatedRoute) {
        this.productoService = productoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.producto = new _producto__WEBPACK_IMPORTED_MODULE_2__["Producto"]();
        this.titulo = "Crear producto";
    }
    ngOnInit() {
        this.cargarProducto();
    }
    cargarProducto() {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.productoService.getProducto(id).subscribe(rta => {
                    this.producto = rta.producto;
                });
            }
        });
    }
    create() {
        this.productoService.create(this.producto).subscribe(respuestaJson => {
            this.router.navigate(['/productos']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Nuevo producto', `${respuestaJson.mensaje} : ${respuestaJson.producto.descripcion}`, 'success');
        }, e => {
            if (e.status == 401) {
                console.error('ERROR 401!!!');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(e);
            }
        });
    }
    update() {
        this.productoService.update(this.producto).subscribe(respuestaJson => {
            this.router.navigate(['/productos']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Producto actualizado', `${respuestaJson.mensaje} : ${respuestaJson.producto.descripcion}`, 'success');
        }, err => {
            this.errores = err.error.errors;
            console.error('Codigo de error desde el backend: ' + err.status);
            console.error(err.error.errors);
        });
    }
};
FormProductoComponent.ctorParameters = () => [
    { type: _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FormProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/productos/form.component.html")
    })
], FormProductoComponent);



/***/ }),

/***/ "./src/app/productos/producto.service.ts":
/*!***********************************************!*\
  !*** ./src/app/productos/producto.service.ts ***!
  \***********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/appSettings */ "./src/app/utils/appSettings.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ProductoService = class ProductoService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.urlEndPoint = _utils_appSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].API_ENDPOINT + '/api/productos';
    }
    getProductos(page, size, order, asc) {
        return this.http.get(this.urlEndPoint + `?page=${page}&size=${size}&order=${order}&asc=${asc}`);
    }
    getProductosConFiltro(page, size, order, asc, filtro) {
        return this.http.get(this.urlEndPoint + `?page=${page}&size=${size}&order=${order}&asc=${asc}&filtro=${filtro}`);
    }
    create(producto) {
        return this.http.post(this.urlEndPoint, producto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    getProducto(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            this.router.navigate(['/productos']);
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error al editar', e.error.mensaje, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    update(producto) {
        return this.http.put(`${this.urlEndPoint}/${producto.id}`, producto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            if (e.status == 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
            }
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPoint}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            console.error(e.error.mensaje);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()(e.error.mensaje, e.error.error, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        }));
    }
};
ProductoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductoService);



/***/ }),

/***/ "./src/app/productos/producto.ts":
/*!***************************************!*\
  !*** ./src/app/productos/producto.ts ***!
  \***************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
}


/***/ }),

/***/ "./src/app/productos/productos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/productos/productos.component.ts ***!
  \**************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.service */ "./src/app/productos/producto.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ProductosComponent = class ProductosComponent {
    constructor(productoService, router) {
        this.productoService = productoService;
        this.router = router;
        this.page = 0;
        this.size = 5;
        this.order = 'codProducto';
        this.asc = true;
        this.isFirst = false;
        this.isLast = false;
    }
    ngOnInit() {
        this.cargarProductos();
    }
    cargarProductos() {
        this.productoService.getProductos(this.page, this.size, this.order, this.asc).subscribe(respuestaJson => {
            this.productos = respuestaJson.productos;
            this.isFirst = respuestaJson.paginador.first;
            this.isLast = respuestaJson.paginador.last;
            this.totalPages = new Array(respuestaJson.paginador.totalPaginas);
            this.numerosFooterPaginador = respuestaJson.paginador.paginas;
        }, err => {
            /*this.errores = err.error.errors as string[];
            console.error('Codigo de error desde el backend: '+ err.status)
            console.error(err.error.errors)*/
            console.error('Codigo de error desde el backend: ' + err.status);
        });
    }
    delete(producto) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Está seguro?',
            text: `¿Seguro que desea eliminar al producto ${producto.descripcion}?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                this.productoService.delete(producto.id).subscribe(response => {
                    this.productos = this.productos.filter(cli => cli !== producto);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Producto Eliminado!', `Producto ${producto.descripcion} eliminado con éxito.`, 'success');
                });
            }
        });
    }
    sort() {
        this.asc = !this.asc;
        this.cargarProductos();
    }
    rewind() {
        if (!this.isFirst) {
            this.page--;
            this.cargarProductos();
        }
    }
    forward() {
        if (!this.isLast) {
            this.page++;
            this.cargarProductos();
        }
    }
    setPage(page) {
        this.page = page;
        this.cargarProductos();
    }
    setOrder(order) {
        this.order = order;
        this.cargarProductos();
    }
    onChangeSize() {
        console.log(this.size);
        this.page = 0;
        this.cargarProductos();
    }
};
ProductosComponent.ctorParameters = () => [
    { type: _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: __webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/productos/productos.component.html")
    })
], ProductosComponent);



/***/ }),

/***/ "./src/app/utils/appSettings.ts":
/*!**************************************!*\
  !*** ./src/app/utils/appSettings.ts ***!
  \**************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
class AppSettings {
}
//DESA
//public static API_ENDPOINT='http://localhost:8080/facturacion';
AppSettings.API_ENDPOINT = 'http://mitomcat:8080/facturacion';


/***/ }),

/***/ "./src/app/utils/loader/loader-interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/utils/loader/loader-interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.service */ "./src/app/utils/loader/loader.service.ts");

// loader.interceptors.ts




let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        this.requests.push(req);
        console.log("No of requests--->" + this.requests.length);
        this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                alert('error returned');
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/utils/loader/loader.component.css":
/*!***************************************************!*\
  !*** ./src/app/utils/loader/loader.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 50%;\n  right: 50%; /* or: left: 50%; */\n  margin-top: -..px; /* have of the elements height */\n  margin-right: -..px; /* have of the elements widht */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLFVBQVUsRUFBRSxtQkFBbUI7RUFDL0IsaUJBQWlCLEVBQUUsZ0NBQWdDO0VBQ25ELG1CQUFtQixFQUFFLCtCQUErQjtBQUN0RCIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiA1MCU7IC8qIG9yOiBsZWZ0OiA1MCU7ICovXG4gIG1hcmdpbi10b3A6IC0uLnB4OyAvKiBoYXZlIG9mIHRoZSBlbGVtZW50cyBoZWlnaHQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAtLi5weDsgLyogaGF2ZSBvZiB0aGUgZWxlbWVudHMgd2lkaHQgKi9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/utils/loader/loader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/utils/loader/loader.component.ts ***!
  \**************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/utils/loader/loader.service.ts");

//loader.interceptor.ts


let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe((v) => {
            console.log(v);
            this.loading = v;
        });
    }
    ngOnInit() {
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/utils/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/utils/loader/loader.component.css")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/utils/loader/loader.service.ts":
/*!************************************************!*\
  !*** ./src/app/utils/loader/loader.service.ts ***!
  \************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

//loader.service.ts


let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leonel/facturacionAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map