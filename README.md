# hello-next

This a basic NextJs app, that can be used as a sacaffold for building real apps. 

## CSS-in-JS implemented using EmotionJs and Styled-Components

Its fully integrated with EmotionJS and Styled-System and configured with a basic `theme`. Its ready to keep building an uiLibrary using primitives/atoms components.

Already have a Box component implementing all system-functions that makes you able to pass css via props. 

Check for emotionjs and Styled-System

### TODO
A good idea would be to finish up a basic on `uiLibrary` creating basic components (using smooth-ui as example) to have a reusable library for another apps.


## Serveless mode, using now.sh to automatic deployment on each PR

Its configured to produce a deploy the app on each PULL-REQUEST into a now.sh environement.

Serverless aproach which will build a lambda for each page. This a feature that combined with now nextjs page-independent approach works perfectly 

You can deploy your app anywhere Node.js is supported. Just run `npm run next build` `npm run next start` 

## TODO

### Providing configuration values.

check https://nextjs.org/docs/#exposing-configuration-to-the-server--client-side

## Some useful notes about nextJs 

###getInitialProps

only is executed on Pages ( ../pages/*)   .. not components!
if SSR: will executed on page load
if client side: (this only gets executed when navigating is don via Link or routing APIs.

official doc: 
For the initial page load, getInitialProps will execute on the server only. getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs.

Note: getInitialProps can not be used in children components. Only in pages.

vs ComponentDidMount

   ( only is executed on ClientSide:  example componentDidMount is the correct place to access window, as the component is only mounted client-side (but render happens on both client & server).

it is a lifecyle hook it is callled just before the render method is called .Data fetched in it cannot be passed in as a prop.

it can be called in component as well as in pages. it not a good place to make asynchronous call as it dont wait to async operation to complete. so if it runs at server and your async operation is written in it ..will not get completed and it comes to the client without getting data

When use getInitialProps or ComponentDidMount

ComponentDidMount: is React implementation and it's always triggered on the Browser.
You might ask, 'so when should I use this or that', actually it is very confusing and at the same time very simple, here is a rule of thumb:

use GetInitialProps to fetch data when your component acts as a Page, and you want to provide the data as Props.
use ComponentDidMount on children components ( that are not Pages ) or when you want to update the state upon Ajax call.


Como usar objects de browser like window, localstorage, sessionStorage 

Que pasa cuando se usa window.* or Cookies….    localstorage .. etc on SSR con next? Como resuelve esto? 
 Code in componentDidMount will only be executed on the client. You may also want to check if there isn't some alternative universal library which may suit your needs.

   ( only is executed on ClientSide:  example onComponentDidMount is the correct place to access window, as the component is only mounted client-side (but render happens on both client & server).

Como integrar con Redux

La idea es que existe un wrapper   (`next-redux-wrapper`)  https://github.com/kirill-konshin/next-redux-wrapper/blob/master/packages/wrapper/src/index.tsx  que es lo que hace es que wrappear en _app.js (app custom) cual para client-side rendering crea el store una sola vez, pero que para para SSR , lo crea en cada request (getInitialProps) ya que no hay forma de tener un shared global state, asique lo hace por cada request.

La forma que hay que manejar seguramente es como actuar en cada actionCreator la logica, ya que seguramente cambien seis CLientside or SSR , asique hay que tener cuidado con eso. 

Entonces para hacer una integración limpia, deberíamos tener _app.js wrappeado con withRedux , y también wrappear <Provider store ={store) … >  creando el store como siempre

Y luego en componentes y paginas solo usar connect o lo que queramos hacer para acceder al state.
