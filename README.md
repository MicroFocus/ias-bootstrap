# IAS Bootstrap

Provides a stylesheet for use with
[UX Aspects](https://uxaspects.github.io/UXAspects/), the official
CSS/JS framework for Micro Focus Identity, Access, and Security (IAS)
products. UX Aspects is based on
[Bootstrap](https://getbootstrap.com/docs/3.3/) and
[NGX-Bootstrap](https://valor-software.com/ngx-bootstrap).

To see the effects of the IAS Bootstrap stylesheet on UX Aspects, as
well as view examples and best practices, refer to the
[IAS Bootstrap documentation page](https://microfocus.github.io/ias-bootstrap).


## Installation

IAS Bootstrap is available in the npm repository, and can be installed
via the `npm install` command:

```
$ npm install @microfocus/ias-bootstrap
```

## Using with Angular

As stated on the UX Aspects home page: "UX Aspects is based on
best-of-breed, open source technologies, including Angular, Bootstrap
and D3. It is easy to include in your web applications with NPM."

The example below shows how to create an angular project from scratch
with the angular command-line utility, and then install and reference UX
Aspects and IAS Bootstrap.

Create a new Angular project:
```
$ ng new MyApp
$ cd MyApp
```

Install ux-aspects and ias-bootstrap:
```
$ npm install @ux-aspects/ux-aspects @microfocus/ias-bootstrap
```

Open the file: angular.json, and add the following lines to the "styles"
section (note: `"src/styles.css"` should already be there):
```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "node_modules/@ux-aspects/ux-aspects/styles/ux-aspects.css",
  "node_modules/@microfocus/ias-bootstrap/dist/ias-bootstrap.css",
  "node_modules/@microfocus/ias-icons/dist/ias-icons.css",
  "src/styles.css"
],
```

Run the app:
```
$ ng serve
```

Open your browser to: http://localhost:4200 and you'll see your app's
welcome page. To see the IAS style in use, edit the file:
`src/app/app.component.html`, and add some components that use bootstrap
or ux-aspects components, such as:
```
<div class="btn-container">
  <button type="button" class="btn btn-default">Text Button</button>
  <button type="button" class="btn btn-default" disabled>Disabled Text Button</button>
</div>
```
