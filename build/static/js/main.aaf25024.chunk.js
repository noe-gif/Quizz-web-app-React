(this["webpackJsonpnaruto-quizz"]=this["webpackJsonpnaruto-quizz"]||[]).push([[0],{56:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s(3),a=s.n(i),r=s(18),o=s.n(r),c=s(13),l=s(8),u=(s(56),function(){return Object(n.jsx)("div",{className:"banner-container",children:Object(n.jsx)("h1",{children:Object(n.jsx)("a",{href:"/",children:"Naruto Quizz"})})})}),d=s(6),j=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1];console.log(s);var r=Object(i.useRef)(null);Object(i.useEffect)((function(){r.current.classList.add("startingImg"),setTimeout((function(){r.current.classList.remove("startingImg"),a(!0)}),1e3)}),[]);var o=function(){r.current.classList.contains("leftImg")?r.current.classList.remove("leftImg"):r.current.classList.contains("rightImg")&&r.current.classList.remove("rightImg")},l=s&&Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("div",{className:"leftBox",children:Object(n.jsx)(c.b,{onMouseOver:function(){r.current.classList.add("leftImg")},onMouseOut:o,className:"btn-welcome",to:"/signup",children:"Inscription"})}),Object(n.jsx)("div",{className:"rightBox",children:Object(n.jsx)(c.b,{onMouseOver:function(){r.current.classList.add("rightImg")},onMouseOut:o,className:"btn-welcome",to:"/login",children:"Connexion"})})]});return Object(n.jsx)("main",{ref:r,className:"welcomePage",children:l})},h=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"footer-container",children:[Object(n.jsx)("p",{children:"Projet r\xe9alis\xe9 par moi - 2020"}),Object(n.jsx)("p",{children:"\xaeDisclaimer: disclaimer ou pas... machin chouette rien \xe0 foutre"})]})})},b=s(26),p=s(28),A=(s(60),s(62),{apiKey:"AIzaSyBX31yNFiAA3-NcgxByLO3Ve1xDSqBhALY",authDomain:"naruto-quizz.firebaseapp.com",databaseURL:"https://naruto-quizz.firebaseio.com",projectId:"naruto-quizz",storageBucket:"naruto-quizz.appspot.com",messagingSenderId:"712472165018",appId:"1:712472165018:web:4aa21a659f4b353b04bd23"}),m=function e(){var t=this;Object(b.a)(this,e),this.signupUser=function(e,s){return t.auth.createUserWithEmailAndPassword(e,s)},this.loginUser=function(e,s){return t.auth.signInWithEmailAndPassword(e,s)},this.signoutUser=function(){return t.auth.signOut()},this.passwordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.user=function(e){return t.db.doc("users/".concat(e))},p.a.initializeApp(A),this.auth=p.a.auth(),this.db=p.a.firestore()},O=a.a.createContext(null),x=m,g=s(48),v=function(){var e=Object(i.useContext)(O),t=Object(i.useState)(!1),s=Object(d.a)(t,2),a=s[0],r=s[1];Object(i.useEffect)((function(){!0===a&&(console.log("D\xe9connexion"),e.signoutUser())}),[a,e]);return Object(n.jsxs)("div",{className:"logoutContainer",children:[Object(n.jsxs)("label",{className:"switch",children:[Object(n.jsx)("input",{onChange:function(e){r(e.target.checked)},type:"checkbox",checked:a}),Object(n.jsx)("span",{className:"slider round","data-tip":"D\xe9connexion"})]}),Object(n.jsx)(g.a,{place:"left",effect:"solid"})]})},f=s(19),C=s(49),w=s(43),q=s(50),I=s(47),B=s(22),N=(s(65),[{fournisseur:"Donkey Geek (https://www.youtube.com/c/DonkeyGeek)",sujet:"Application Marvel Quiz pour apprentissage React JS",quizz:{"D\xe9butant":[{id:0,question:"De quelle \xe9quipe fait partie Iceman?",options:["The X-Men","The Fantastic Four","The Invaders","The Liberators"],answer:"The X-Men",heroId:1009362},{id:1,question:"Dans les X-Men, quelle substance constitue le squelette de Wolverine ?",options:["Cavorite","Vibranium","Adamantium","Neutronium"],answer:"Cavorite",heroId:1009718},{id:2,question:"Quel est le nom de Spider-Man, apparu pour la premi\xe8re fois en 1962 ?",options:["Tom Parker","John Parker","Peter Parker","Alan Parker"],answer:"Tom Parker",heroId:1009610},{id:3,question:"Comment s'appelait Wolverine quand il \xe9tait cavalier d'Apocalypse?",options:["Rage","Death","Destruction","Oblivion"],answer:"Rage",heroId:1009718},{id:4,question:"Quel super-h\xe9ros ne se s\xe9pare jamais de son marteau forg\xe9 par les nains ?",options:["Bizarro","Flash","Venom","Thor"],answer:"Bizarro",heroId:1009664},{id:5,question:"Quelle couleur est associ\xe9e \xe0 Hulk ?",options:["Le jaune","Le rouge","Le vert","Le bleu"],answer:"Le jaune",heroId:1009351},{id:6,question:"Quel super-h\xe9ros ressemble \xe0 un \xeatre de pierre ?",options:["Plastic Man","The Thing","Hawkman","Superboy"],answer:"Plastic Man",heroId:1009662},{id:7,question:"De qui Edwin Jarvis est-il le majordome?",options:["Bruce Wayne","Charles Xavier","Tony Stark","Henry Steven"],answer:"Bruce Wayne",heroId:1009368},{id:8,question:"Quel super-h\xe9ros porte un costume inspir\xe9 du drapeau am\xe9ricain ?",options:["Tigra","Blade","Iron Man","Captain America"],answer:"Tigra",heroId:1009220},{id:9,question:"Y compris ses pouces, combien de doigts sur les deux mains poss\xe8de The Thing?",options:[8,6,10,4],answer:8,heroId:1009662}],"Confirm\xe9":[{id:0,question:"Qui est Logan dans la bande dessin\xe9e de Marvel Comics 'X-Men' ?",options:["Cyclope","Colossus","Wolverine","Caliban"],answer:"Cyclope",heroId:1009718},{id:1,question:"Quel super h\xe9ros est int\xe9ress\xe9 par Sue Storm?",options:["X-Men","Illuminati","Spider-Man","Namor"],answer:"X-Men",heroId:1009466},{id:2,question:"Quel humain devient surpuissant gr\xe2ce \xe0 une armure de haute technologie ?",options:["Cyclope","Iron Man","Wolverine","Thor"],answer:"Cyclope",heroId:1009368},{id:3,question:"Laquelle de ces propositions d\xe9signe un ennemi embl\xe9matique de Spider-Man ?",options:["Lizard","Thanos","Void","Green Goblin"],answer:"Lizard",heroId:1014985},{id:4,question:"GHOST RIDER est connu comme \xe9tant",options:["Le diable motard","L'esprit de la haine","L'esprit de vengeance","Le cr\xe2ne rouge"],answer:"Le diable motard",heroId:1009318},{id:5,question:"Avant de devenir Radioactive Man, Chen Lu \xe9tait ..",options:["Un espion","Un physicien nucl\xe9aire","Un soldat","Un pilote"],answer:"Un espion",heroId:1009526},{id:6,question:"Quel super-h\xe9ros ayant perdu la vue poss\xe8de des organes sensoriels d\xe9velopp\xe9s ?",options:["Daredevil","Flash","Superman","Captain America"],answer:"Daredevil",heroId:1009262},{id:7,question:"Avant de se tourner vers une vie de crime, Mysterio \xe9tait...",options:["Cascadeur","Artiste d'effets sp\xe9ciaux","Magicien","Sapeur pompier"],answer:"Cascadeur",heroId:1010952},{id:8,question:"Fin Fang Foom est un alien de ..",options:["Krypton","Maklu IV","Mars","Vulcan"],answer:"Krypton",heroId:1009303},{id:9,question:"DOCTOR DOOM a fr\xe9quent\xe9 le m\xeame coll\xe8ge que...",options:["Tony Stark","Peter Parker","Reed Richards","Bruce Banner"],answer:"Tony Stark",heroId:1009281}],Expert:[{id:0,question:"Quand elle a travaill\xe9 pour Hydra, la premi\xe8re mission de Spider-Woman \xe9tait de...",options:["S\xe9duire Iron-Man","S\xe9duire Spider-Man","Tuer The Black Widow","Tuer Nick Fury"],answer:"S\xe9duire Iron-Man",heroId:1009608},{id:1,question:"Quel super-h\xe9ros cr\xe9\xe9 par Marvel Comics est aveugle de naissance ?",options:["Flash","Thor","Cyclope","Stick"],answer:"Flash",heroId:1009626},{id:2,question:"Spider-Man a \xe9t\xe9 sollicit\xe9 pour cr\xe9er la Spider-Mobile par la soci\xe9t\xe9 de publicit\xe9 de ...",options:["Carter Lombardo","Max Shrek","Reed Richards","Spider Company"],answer:"Carter Lombardo",heroId:1009610},{id:3,question:"Quelle h\xe9ro\xefne de Daredevil est une tueuse professionnelle ?",options:["Ultron","Catwoman","Elektra","Wonder Woman"],answer:"Ultron",heroId:1009288},{id:4,question:"O\xf9 r\xe9side Mandarin devenu r\xe9cemment le patron du Sin-Cong Wong Chu?",options:["The Valley of Spirits","The Mountains of Asgard","The Canyons of Atlantis","The Cave of Souls"],answer:"The Valley of Spirits",heroId:1009421},{id:5,question:"Quel super-h\xe9ros poss\xe8de les m\xeames pouvoirs que Spider-Man ?",options:["Venom","Green Arrow","Blade","Bizarro"],answer:"Venom",heroId:1010788},{id:6,question:"Nick Fury a un fr\xe8re devenu m\xe9chant. Quel est son nom?",options:["Venom","Viper","The Red Skull","Scorpio"],answer:"Venom",heroId:1011007},{id:7,question:"Miss Marvel n'a jamais \xe9t\xe9 connue sous le nom de:",options:["Captain Marvel","Rogue","Warbird","Binary"],answer:"Captain Marvel",heroId:1010338},{id:8,question:"Quelle est l'h\xe9ro\xefne proche du Docteur Strange cr\xe9\xe9e en 1964 ?",options:["Felina","Clea","Monica","Elsa"],answer:"Felina",heroId:1009239},{id:9,question:"\xc9tant enfant, Storm a tent\xe9 de ...",options:["Incendier un village avec un coup de foudre","Devenir le chef d'un gang","Voler la voiture du professeur Xavier","Faire les poches du professeur Xavier"],answer:"Incendier un village avec un coup de foudre",heroId:1009629}]}}]),Q=s(44),F=s.n(Q),E=function(e){var t=e.levelNames,s=e.quizLevel,a=Object(i.useState)([]),r=Object(d.a)(a,2),o=r[0],c=r[1];return Object(i.useEffect)((function(){var e=t.map((function(e){return{title:e.toUpperCase()}}));c(e)}),[t]),Object(n.jsx)("div",{className:"levelsContainer",style:{background:"transparent"},children:Object(n.jsx)(F.a,{steps:o,activeStep:s,circleTop:0,activeTitleColor:"#d31017",activeColor:"#d31017",completeTitleColor:"#E0E0E0",defaultTitleColor:"#E0E0E0",completeColor:"#E0E0E0",completeBarColor:"#E0E0E0",size:50,circleFontSize:20})})},M=a.a.memo(E),z=function(e){var t=e.idQuestion,s=e.maxQuestion,a=function(e,t){return 100/e*t}(s,t+1);return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsxs)("div",{className:"percentage",children:[Object(n.jsxs)("div",{className:"progressPercent",children:["Question: ",t+1,"/",s]}),Object(n.jsxs)("div",{className:"progressPercent",children:["Progression: ",a,"%"]})]}),Object(n.jsx)("div",{className:"progressBar",children:Object(n.jsx)("div",{className:"progressBarChange",style:{width:"".concat(a,"%")}})})]})},R=a.a.memo(z),P=s(45),y=function(e){var t=e.loadingMsg,s=e.styling;return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("div",{className:"loader"}),Object(n.jsx)("p",{style:s,children:t})]})},D=function(e){var t=e.showModal,s=e.children,i=e.hideModal;return t&&Object(n.jsx)("div",{className:"modalBackground",onClick:i,children:Object(n.jsx)("div",{className:"modalContainer",children:s})})},S=a.a.forwardRef((function(e,t){var s=e.levelNames,a=e.score,r=e.maxQuestion,o=e.quizLevel,c=e.percent,l=e.loadLevelQuestions,u=Object(i.useState)([]),j=Object(d.a)(u,2),h=j[0],b=j[1],p=Object(i.useState)(!1),A=Object(d.a)(p,2),m=A[0],O=A[1];Object(i.useEffect)((function(){b(t.current)}),[t]);var x=r/2;a<x&&setTimeout((function(){l(o)}),3e3);var g=a>=x?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"stepsBtnContainer",children:o<s.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"successMsg",children:"Bravo, passez au niveau suivant!"}),Object(n.jsx)("button",{className:"btnResult success",onClick:function(){return l(o)},children:"Niveau suivant"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{className:"successMsg",children:[" ",Object(n.jsx)(P.a,{size:"50px"}),"Bravo, vous \xeates un expert!"]}),Object(n.jsx)("button",{className:"btnResult s  uccess",onClick:function(){return l(0)},children:"Acceuil"})]})}),Object(n.jsxs)("div",{className:"percentage",children:[Object(n.jsxs)("div",{className:"progressPercent",children:["R\xe9ussite: ",c,"%"]}),Object(n.jsxs)("div",{className:"progressPercent",children:["Note: ",a,"/",r]})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"stepsBtnContainer",children:Object(n.jsx)("p",{className:"failureMsg",children:"Vous avez \xe9chou\xe9"})}),Object(n.jsxs)("div",{className:"percentage",children:[Object(n.jsxs)("div",{className:"progressPercent",children:["R\xe9ussite: ",c,"%"]}),Object(n.jsxs)("div",{className:"progressPercent",children:["Note: ",a,"/",r]})]})]}),v=a>=x?h.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.question}),Object(n.jsx)("td",{children:e.answer}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{className:"btnInfo",onClick:function(){return e.heroId,void O(!0)},children:"Infos"})})]},e.id)})):Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:"3",children:Object(n.jsx)(y,{loadingMsg:"pas de r\xe9ponses!",styling:{textAlign:"center",color:"red"}})})});return Object(n.jsxs)(i.Fragment,{children:[g,Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"Les r\xe9ponses aux quesions pos\xe9es:"}),Object(n.jsx)("div",{className:"answerContainer",children:Object(n.jsxs)("table",{className:"answers",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Question"}),Object(n.jsx)("th",{children:"R\xe9ponses"}),Object(n.jsx)("th",{children:"Infos"})]})}),Object(n.jsx)("tbody",{children:v})]})}),Object(n.jsxs)(D,{showModal:m,hideModal:function(){O(!1)},children:[Object(n.jsx)("div",{className:"modalHeader",children:Object(n.jsx)("h2",{children:"Titre"})}),Object(n.jsx)("div",{className:"modalBody",children:Object(n.jsx)("h3",{children:"Titre 2"})}),Object(n.jsx)("div",{className:"modalFooter",children:Object(n.jsx)("button",{className:"modalBtn",children:"Fermer"})})]})]})})),L=a.a.memo(S),U=s(46);B.a.configure();var H=function(e){Object(q.a)(s,e);var t=Object(I.a)(s);function s(e){var n;return Object(b.a)(this,s),(n=t.call(this,e)).storedDataRef=a.a.createRef(),n.loadQuestions=function(e){var t=N[0].quizz[e];if(t.length>=n.state.maxQuestion){n.storedDataRef.current=t;var s=t.map((function(e){e.answer;return Object(C.a)(e,["answer"])}));n.setState({storedQuestions:s})}else console.log("pas assez de questions")},n.showToastMsg=function(){n.state.showWelcomeMsg||(n.setState({showWelcomeMsg:!0}),B.a.warn("Bienvenue ".concat(n.props.userData.pseudo,", Bonne chance!"),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,bodyClassName:"toastify-color-welcome"}))},n.getPercentage=function(e,t){return t/e*100},n.gameOver=function(e){e>=50?n.setState({quizLevel:n.state.quizLevel+1,percent:e}):n.setState({percent:e})},n.nextQuestion=function(){n.state.idQuestion===n.state.maxQuestion-1?n.setState({quizEnd:!0}):n.setState((function(e){return{idQuestion:e.idQuestion+1}}));var e=n.storedDataRef.current[n.state.idQuestion].answer;n.state.userAnswer===e?(n.setState((function(e){return{score:e.score+1}})),B.a.success("Juste!! +1",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,bodyClassName:"toastify-color"})):B.a.error("Faux, 0",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,bodyClassName:"toastify-color"})},n.submitAnswer=function(e){n.setState({userAnswer:e,btnDisabled:!1})},n.loadLevelQuestions=function(e){n.setState(Object(f.a)(Object(f.a)({},n.initialState),{},{quizLevel:e})),n.loadQuestions(n.state.levelNames[e])},n.initialState={levelNames:["D\xe9butant","Confirm\xe9","Expert"],quizLevel:0,maxQuestion:10,storedQuestions:[],question:null,options:[],idQuestion:0,btnDisabled:!0,userAnswer:null,score:0,showWelcomeMsg:!1,quizEnd:!1,percent:null},n.state=n.initialState,n}return Object(w.a)(s,[{key:"componentDidMount",value:function(){this.loadQuestions(this.state.levelNames[this.state.quizLevel])}},{key:"componentDidUpdate",value:function(e,t){if(this.state.storedQuestions!==t.storedQuestions&&this.state.storedQuestions.length&&(this.setState({question:this.state.storedQuestions[this.state.idQuestion].question,options:this.state.storedQuestions[this.state.idQuestion].options}),console.log(this.state.storedQuestions[this.state.idQuestion].question)),this.state.idQuestion!==t.idQuestion&&this.state.storedQuestions.length&&this.setState({question:this.state.storedQuestions[this.state.idQuestion].question,options:this.state.storedQuestions[this.state.idQuestion].options,userAnswer:null,btnDisabled:!0}),this.state.quizEnd!==t.quizEnd){var s=this.getPercentage(this.state.maxQuestion,this.state.score);this.gameOver(s)}this.props.userData.pseudo!==e.userData.pseudo&&this.showToastMsg(this.props.userData.pseudo)}},{key:"render",value:function(){var e=this,t=this.props.userData.pseudo;console.log("Hi ".concat(t,"!"));var s=this.state.options.map((function(t,s){return Object(n.jsxs)("p",{className:"answerOptions ".concat(e.state.userAnswer===t?"selected":null),onClick:function(){return e.submitAnswer(t)},children:[Object(n.jsx)(U.a,{}),"    ",t]},s)}));return this.state.quizEnd?Object(n.jsx)(L,{ref:this.storedDataRef,levelNames:this.state.levelNames,score:this.state.score,maxQuestion:this.state.maxQuestion,quizLevel:this.state.quizLevel,percent:this.state.percent,loadLevelQuestions:this.loadLevelQuestions}):Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)(M,{levelNames:this.state.levelNames,quizLevel:this.state.quizLevel}),Object(n.jsx)(R,{idQuestion:this.state.idQuestion,maxQuestion:this.state.maxQuestion}),Object(n.jsx)("h2",{children:this.state.question}),s,Object(n.jsx)("button",{onClick:this.nextQuestion,className:"btnSubmit",disabled:this.state.btnDisabled,children:this.state.idQuestion<this.state.maxQuestion-1?"Suivant":"Terminer"})]})}}]),s}(i.Component),Y=function(e){var t=Object(i.useContext)(O),s=Object(i.useState)(null),a=Object(d.a)(s,2),r=a[0],o=a[1],c=Object(i.useState)({}),l=Object(d.a)(c,2),u=l[0],j=l[1];return Object(i.useEffect)((function(){var s=t.auth.onAuthStateChanged((function(t){t?o(t):e.history.push("/login")}));return null!=r&&t.user(r.uid).get().then((function(e){if(e&&e.exists){var t=e.data();j(t)}})).catch((function(e){console.log(e.message)})),function(){s()}}),[r]),null===r?Object(n.jsx)(y,{loadingMsg:"Authentification...",styling:{textAlign:"center",color:"#FFFFFF"}}):Object(n.jsx)("div",{className:"quiz-bg",children:Object(n.jsxs)("div",{className:"container",style:{height:"1000px"},children:[Object(n.jsx)(v,{}),Object(n.jsx)(H,{userData:u})]})})},T=function(e){var t=Object(i.useContext)(O),s=Object(i.useState)(""),a=Object(d.a)(s,2),r=a[0],o=a[1],l=Object(i.useState)(""),u=Object(d.a)(l,2),j=u[0],h=u[1],b=Object(i.useState)(!1),p=Object(d.a)(b,2),A=p[0],m=p[1],x=Object(i.useState)(""),g=Object(d.a)(x,2),v=g[0],f=g[1];Object(i.useEffect)((function(){j.length>5&&""!==r?m(!0):!0===A&&m(!1)}),[j,r,A]);return Object(n.jsx)("div",{className:"signUpLoginBox",children:Object(n.jsxs)("div",{className:"slContainer",children:[Object(n.jsx)("div",{className:"formBoxLeftLogin"}),Object(n.jsx)("div",{className:"formBoxRight",children:Object(n.jsxs)("div",{className:"formContent",children:[""!==v&&Object(n.jsx)("span",{children:v.message}),Object(n.jsx)("h2",{children:"Connexion"}),Object(n.jsxs)("form",{onSubmit:function(s){s.preventDefault(),t.loginUser(r,j).then((function(t){console.log(t),o(""),h(""),e.history.push("/welcome")})).catch((function(e){f(e),o(""),h("")}))},children:[Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:function(e){return o(e.target.value)},value:r,type:"mail",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:function(e){return h(e.target.value)},value:j,type:"password",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"})]}),A?Object(n.jsx)("button",{children:"Connexion"}):Object(n.jsx)("button",{disabled:!0,children:"Connexion"})]}),Object(n.jsxs)("div",{className:"linkContainer",children:[Object(n.jsx)(c.b,{className:"simpleLink",to:"/signup",children:"Nouveau sur Naruto-Quizz ? Inscrivez-vous."}),Object(n.jsx)("br",{}),Object(n.jsx)(c.b,{className:"simpleLink",to:"/forgetpassword",children:"Mot de passe oubli\xe9 ? Cliquez ici"})]})]})})]})})},V=s(27),k=function(e){var t=Object(i.useContext)(O),s={pseudo:"",email:"",password:"",confirmPassword:""},a=Object(i.useState)(s),r=Object(d.a)(a,2),o=r[0],l=r[1],u=Object(i.useState)(""),j=Object(d.a)(u,2),h=j[0],b=j[1],p=function(e){l(Object(f.a)(Object(f.a)({},o),{},Object(V.a)({},e.target.id,e.target.value)))},A=o.pseudo,m=o.email,x=o.password,g=o.confirmPassword,v=""===A||""===m||""===x||x!==g?Object(n.jsx)("button",{disabled:!0,children:"Inscription"}):Object(n.jsx)("button",{children:"Inscription"}),C=""!==h&&Object(n.jsx)("span",{children:h.message});return Object(n.jsx)("div",{className:"signUpLoginBox",children:Object(n.jsxs)("div",{className:"slContainer",children:[Object(n.jsx)("div",{className:"formBoxLeftSignup"}),Object(n.jsx)("div",{className:"formBoxRight",children:Object(n.jsxs)("div",{className:"formContent",children:[C,Object(n.jsx)("h2",{children:"Inscription"}),Object(n.jsxs)("form",{onSubmit:function(n){n.preventDefault();var i=o.email,a=o.password,r=o.pseudo;t.signupUser(i,a).then((function(e){return t.user(e.user.uid).set({pseudo:r,email:i,password:a})})).then((function(t){l(Object(f.a)({},s)),e.history.push("/login")})).catch((function(e){b(e),l(Object(f.a)({},s))}))},children:[Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:p,value:A,type:"text",id:"pseudo",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"pseudo",children:"Pseudo V2"})]}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:p,value:m,type:"text",id:"email",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:p,value:x,type:"password",id:"password",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"password",children:"Mot de passe"})]}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:p,value:g,type:"password",id:"confirmPassword",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"confirmPassword",children:"Confirmer le mot de passe"})]}),v]}),Object(n.jsx)("div",{className:"linkContainer",children:Object(n.jsx)(c.b,{className:"simpleLink",to:"/login",children:"D\xe9j\xe0 inscrit ? Connectez-vous."})})]})})]})})},K={textAlign:"center",marginTop:"50px"},X={display:"black",margin:"40px auto",width:"500px"},G=function(){return Object(n.jsxs)("div",{className:"quizz-bg",children:["a",Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{style:K,children:"Oups, cette page n'existe pas!"}),Object(n.jsx)("img",{style:X,src:"data:image/png;base64,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",alt:"error page"})]})]})},W=function(e){var t=Object(i.useContext)(O),s=Object(i.useState)(""),a=Object(d.a)(s,2),r=a[0],o=a[1],l=Object(i.useState)(null),u=Object(d.a)(l,2),j=u[0],h=u[1],b=Object(i.useState)(null),p=Object(d.a)(b,2),A=p[0],m=p[1],x=""===r;return Object(n.jsx)("div",{className:"signUpLoginBox",children:Object(n.jsxs)("div",{className:"slContainer",children:[Object(n.jsx)("div",{className:"formBoxLeftForget"}),Object(n.jsx)("div",{className:"formBoxRight",children:Object(n.jsxs)("div",{className:"formContent",children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),j&&Object(n.jsx)("span",{style:{border:"1px solid green",background:"green",color:"#ffffff"},children:j}),A&&Object(n.jsx)("span",{children:A.message}),Object(n.jsx)("h2",{children:"Mot de passe oubli\xe9 ?"}),Object(n.jsxs)("form",{onSubmit:function(s){s.preventDefault(),t.passwordReset(r).then((function(){m(null),h("Consultez ".concat(r," pour changer votre mot de passe")),o(""),setTimeout((function(){e.history.push("/login")}),5e3)})).catch((function(e){m(e),o("")}))},children:[Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{onChange:function(e){return o(e.target.value)},value:r,type:"mail",autoComplete:"off",required:!0}),Object(n.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(n.jsx)("button",{disabled:x,children:"R\xe9cup\xe9rer"})]}),Object(n.jsx)("div",{className:"linkContainer",children:Object(n.jsx)(c.b,{className:"simpleLink",to:"/login",children:"D\xe9j\xe0 inscrit ? Connectez-vous."})})]})})]})})},J=s(0);var Z=function(){return Object(n.jsx)(c.a,{children:Object(n.jsxs)(J.b.Provider,{value:{style:{verticalAlign:"middle"}},children:[Object(n.jsx)(u,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(n.jsx)(l.a,{path:"/welcome",component:Y}),Object(n.jsx)(l.a,{path:"/login",component:T}),Object(n.jsx)(l.a,{path:"/signup",component:k}),Object(n.jsx)(l.a,{path:"/ForgetPassword",component:W}),Object(n.jsx)(l.a,{component:G})]}),Object(n.jsx)(h,{})]})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,89)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(O.Provider,{value:new x,children:Object(n.jsx)(Z,{})}),document.getElementById("root")),$()}},[[85,1,2]]]);
//# sourceMappingURL=main.aaf25024.chunk.js.map