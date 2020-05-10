//--на кожний компонент робиться роут і відмальовується--

// const Foo = { template:`<div>foo</div>` };
// const Boo = { template:`<div>boo</div>` };
//
// const routes = [
//     { path:'/foo', component:Foo },
//     { path:'/boo', component:Boo }
// ];
//
// const router = new VueRouter({
//   routes
// });
//
// const app = new Vue({router}).$mount('#app');

//--відмальовує один компонент в який заходить різне id і відмальовує вміст id,який заходить(динамічно)--

const User = { template:`<div>hello {{$route.params.id}}</div>` }

const router = new VueRouter({
    routes:[{ path:'/user/:id',component:User}]
})

const app = new Vue({router}).$mount('#app')
