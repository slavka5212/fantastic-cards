(this["webpackJsonpfantastic-cards"]=this["webpackJsonpfantastic-cards"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),s=n.n(c),o=(n(12),n(3)),i=n(4),u=n(5),l=n(6),h=(n(13),n(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"person",src:"https://robohash.org/2".concat(e.person.id,"?set=set4&size=180x180")}),r.a.createElement("h2",null," ",e.person.name," "))}),p=(n(15),function(e){return r.a.createElement("div",{className:"card-list"},e.persons.map((function(e){return r.a.createElement(h,{key:e.id,person:e})})))}),m=(n(16),function(e){return r.a.createElement("input",{className:"search-box",type:"search",placeholder:e.placeholder,onChange:e.onChange})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={persons:[],searchText:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({persons:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.persons,a=t.searchText,c=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Fantastic kitties"),r.a.createElement(m,{placeholder:"Search kitties",onChange:function(t){return e.setState({searchText:t.target.value})}}),r.a.createElement(p,{persons:c}))}}]),n}(a.Component);s.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.260ca7f0.chunk.js.map