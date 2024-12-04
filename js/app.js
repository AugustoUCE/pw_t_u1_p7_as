(function (ng) {
    const { Component, NgModule } = ng.core;
    const { BrowserModule } = ng.platformBrowser;
    const { platformBrowserDynamic } = ng.platformBrowserDynamic;
  
    console.log('app.js cargado correctamente');
  
    const AppComponent = Component({
      selector: 'app-root',
        template: `<h1>Hola mundo: Angular!</h1>
        `
    }).Class({
      constructor: function() {}
    });
  
 
  })(window.ng);
  