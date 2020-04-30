(this.webpackJsonpfirst_react=this.webpackJsonpfirst_react||[]).push([[0],{18:function(e,a,t){e.exports=t(34)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),s=t.n(o),i=(t(23),t(5)),l=t(6);t(24),t(25);var c=function(){return r.a.createElement("div",{className:"background"},r.a.createElement("header",null,r.a.createElement("title",null,"First_React"),r.a.createElement("h1",{className:"Title"},"Ant's SFPOPOS"),r.a.createElement("h3",{className:"Title-Subtitle"},"Anthony's San Francisco Privately Owned Public Open Spaces"),r.a.createElement("div",{className:"nav-link"},r.a.createElement(i.c,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/"},"List"),r.a.createElement(i.c,{className:"nav-link",activeClassName:"nav-link-active",to:"/about"},"About"))))};t(31);var d=function(e){var a=e.name,t=e.image,n=e.address,o=e.hours,s=e.id;return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/details/".concat(s)},r.a.createElement("img",{src:"".concat("/first_react","images/").concat(t),width:"300",height:"300",alt:"Hello"})),r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/details/".concat(s)},a)),r.a.createElement("addr",null,n),r.a.createElement("h3",{className:"highlighter"},o))},m=(t(32),t(9));var u=function(){var e=m.map((function(e,a){var t=e.title,n=e.address,o=e.images,s=e.hours;return r.a.createElement(d,{id:a,key:t,name:t,address:n,image:o[0],hours:s})}));return r.a.createElement("div",{className:"POPOSList"},e)};var h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About SFPOPOS"),r.a.createElement("p",null,"POPOS are publicly accessible spaces in forms of plazas, terraces, atriums, small parks, and even snippets which are provided and maintained by private developers. In San Francisco, POPOS mostly appear in the Downtown office district area."))};var f=function(e){var a=e.match.params.id,t=m[a],n=t.images,o=t.title,s=t.desc,i=t.hours,l=t.features,c=t.geo;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"".concat("/first_react","images/").concat(n[0]),alt:o})),r.a.createElement("div",null,r.a.createElement("h1",null,o),r.a.createElement("p",null,s),r.a.createElement("p",null,i),r.a.createElement("p",null,l),r.a.createElement("p",null,c.lat," ",c.lon)))};t(33);var p=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"footer"},r.a.createElement("h4",null,"The Year is ",e,"! ~ Anthony S. Protho \xa92020 "))};var g=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(l.a,{exact:!0,path:"/",component:u}),r.a.createElement(l.a,{path:"/about",component:h}),r.a.createElement(l.a,{path:"/details/:id",component:f}),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('[{"title":"Transamerica Redwood Park","desc":"Located in the shadow of the Transamerica Pyramid, Redwood Park is one of the Financial District\'s greenest and most serene spots. Here, towering redwoods surround a half acre of statues and a large central water feature. Plus, the park is often empty, which means there\'s almost always a bench available for the hogging. Potential visitors take note: The park is closed every evening","address":"600 Montgomery St San Francisco, CA","hours":"Mon - Fri 7am - 5:30pm","geo":{"lat":37.7952005,"lon":-122.4027927},"images":["transamerica-redwood-park.jpg"],"website":"https://pyramidcenter.com/point-of-interest/redwood-park/","features":["outdoors","coffee"]},{"title":"Empire Park","desc":"Empire Park is a charming little oasis tucked away on Commercial Street, where Chinatown meets the Financial District. This space was once an alleyway, and now features plenty of seating, a fountain, and ample amounts of greenery. The park is a must-visit for anyone needing respite from the busy streets of downtown. Be sure to check out the charming water feature by Pepo Pichler in the courtyard.","address":"648 Commercial St San Francisco, CA","hours":"Mon - Fri 7am - 5:30pm","geo":{"lat":37.7942109,"lon":-122.4037971},"images":["empire-park.jpg"],"website":"https://www.artandarchitecture-sf.com/empire-park.html","features":["outdoors","art"]},{"title":"50 California Street","desc":"Right across the street from 101 California\'s giant POPOS is the plaza at 50 California Street. This green space comes complete with a Starbucks and lots of areas to sit and watch the cable cars clang down California.","address":"50 California St San Francisco, CA 94111","hours":"Mon - Fri 7am - 5:30pm","geo":{"lat":37.79408,"lon":-122.3973817},"images":["50-california-st.jpg"],"features":["outdoors","toilet"]},{"title":"Embarcadero Center Walkways","desc":"Right across the street from 101 California\'s giant POPOS is the plaza at 50 California Street. This green space comes complete with a Starbucks and lots of areas to sit and watch the cable cars clang down California.","address":"275 Battery St San Francisco, CA 94111","hours":"","geo":{"lat":37.7939413,"lon":-122.4002143},"images":["embarcadero-center.jpg"],"features":["outdoors","toilet","coffee"]},{"title":"343 Sansome Roof Garden","desc":"The terrace at 343 Sansome Street is one of the FiDi\'s best-kept secrets, and it\'s also been called downtown\'s best outdoor lunch spot. It features tables, benches, planters filled with seasonal flowers, and views of a portion of the bay. Plenty of the space\'s Yelp reviews mention that it\'s never crowded. The space is open from 10 a.m. to 5 p.m. Monday through Friday.","address":"343 Sansome St San Francisco, CA","hours":"Mon - Fri 10am - 5pm","geo":{"lat":37.7936454,"lon":-122.4014547},"images":["343-sansome-roof-garden.jpg"],"opens":"10am","closes":"5pm","features":["outdoors"]},{"title":"Garden Terrace at 150 California","desc":"The Garden Terrace at 150 California has great views of the FiDi\'s gleaming office towers, and plenty of space to sit and take in some fresh air. A huge metal art installation adds some pizzazz to the terrace, and it\'s rarely ever crowded.","address":"150 California St San Francisco, CA","hours":"Mon - Fri 9am - 6pm","geo":{"lat":37.7936648,"lon":-122.3964805},"images":["garden-terrace-at-150-california.jpg"],"features":["outdoors","art","coffee"]},{"title":"101 California","desc":"101 California has the most expansive public plaza on California Street. The space features orderly rows of planters placed on terraced podiums, as well as a central fountain and seating.","address":"101 California St San Francisco, CA","hours":"Open at all times.","geo":{"lat":37.7930342,"lon":-122.398342},"images":["101-california.jpg"],"features":["outdoors","art","coffee"]},{"title":"100 Pine","desc":"Tucked away amid a stand of soaring buildings, the urban garden at 100 Pine is accessible via the building lobby or through a not-so-obvious passageway on Front Street. It doesn\u2019t get much in the way of sun, but last we checked in, there\u2019s a cafe open till 3 p.m. as well as seating and planters.","address":"100 Pine St San Francisco, CA","hours":"10am - 6pm","geo":{"lat":37.79247,"lon":-122.398758},"images":["100-pine.jpg"],"features":["outdoors"]},{"title":"525 Market Street Plaza","desc":"The plaza at 525 Market is one of the most pleasant plazas in the Financial District, thanks in part to the new fountain near the sidewalk: a two-tiered circular water element made of clear acrylic. The plaza, which gets a lot of sunlight during the daytime, is surrounded by eateries, which makes it one of the most popular lunch spots in the FiDi.","address":"525 Market St San Francisco, CA","hours":"","geo":{"lat":37.7905074,"lon":-122.3991585},"images":["525-market-street-plaza.jpg"],"features":["outdoors","coffee"]},{"title":"Citigroup Center","desc":"The former Paris-London Bank building was built in 1912, and hollowed out to make way for public space at the base of the Citigroup Center. The elegant enclosed atrium features Moolicious (a crepe stand), a fountain, seating, and more than a dozen queen palms. It\u2019s also smack dab in front of Bird\u2019s new headquarters.","address":"1 Sansome St San Francisco, CA","hours":"Open during business hours.","geo":{"lat":37.7904996,"lon":-122.4007974},"images":["citigroup-center.jpg"],"features":["outdoors","power","toilet","coffee"]},{"title":"555 California","desc":"The former Paris-London Bank building was built in 1912, and hollowed out to make way for public space at the base of the Citigroup Center. The elegant enclosed atrium features Moolicious (a crepe stand), a fountain, seating, and more than a dozen queen palms. It\u2019s also smack dab in front of Bird\u2019s new headquarters.","address":"555 California St.","hours":"Open at all times.","geo":{"lat":37.79225,"lon":-122.40379},"images":["555-california.jpg"],"features":["outdoors"]}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.e48c7274.chunk.js.map