(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var r=a(1),n=a(9),b=(a(0),a(200)),c={lip:2,title:"Libra Roles and Permissions",authors:"Sam Blackshear, Tim Zakian, Junkil Park",status:"last call",type:"informational",created:"06/26/2020"},i={id:"lip-2",title:"Libra Roles and Permissions",description:"# Summary",source:"@site/all-docs__GENERATED/lip-2.md",permalink:"/lip-2",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/lip-2.md"},o=[{value:"Roles",id:"roles",children:[{value:"Notes",id:"notes",children:[]},{value:"Move Implementation",id:"move-implementation",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"Notes",id:"notes-1",children:[]},{value:"Move Implementation",id:"move-implementation-1",children:[]}]}],l={rightToc:o};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"summary"},"Summary"),Object(b.b)("hr",null),Object(b.b)("p",null,"This LIP describes the conceptual model and implementation of access control on the Libra blockchain."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"abstract--motivation"},"Abstract / Motivation"),Object(b.b)("hr",null),Object(b.b)("p",null,"Libra uses a variant of ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Role-based_access_control"}),"role-based access control")," (RBAC) to restrict access to sensitive on-chain operations."),Object(b.b)("p",null,"A ",Object(b.b)("em",{parentName:"p"},"role")," is an entity with some authority in the Libra system. Every account in the Libra system is created with a single, immutable role that is granted at the time the account is created. Creating an account with a particular role is a privileged operation (e.g., only an account with the ParentVASP role can create an account with the ChildVASP role). In some cases, the role is globally unique (e.g., there is only one account with the LibraRoot role). In other cases, there may be many accounts with the given role (e.g., ChildVASP)."),Object(b.b)("p",null,"A ",Object(b.b)("em",{parentName:"p"},"permission")," is the authority to perform a sensitive action in the Libra system. Each permission may be assigned to one or more roles (usually only one), and each role may have zero or more permissions. Permissions can be assigned in genesis, upon account creation (most common), or claimed by an existing account with the appropriate role. Like roles, some permissions are globally unique (e.g., the permission to mint a particular currency type) and some are not."),Object(b.b)("p",null,"Both roles and permissions can be parameterized by types (e.g., the AddCurrency(",Object(b.b)("strong",{parentName:"p"},"type"),") permission) and account address values (e.g., ChildVASP(",Object(b.b)("strong",{parentName:"p"},"addr"),"))."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"specification"},"Specification"),Object(b.b)("hr",null),Object(b.b)("p",null,"Mathematically, we can view Libra role/permissions as a pair of relations over three sets:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Sets: Role, Privilege, Address"),Object(b.b)("li",{parentName:"ul"},"Relations: Privilege -> Role (a many-many relation) and Address -> Role (a partial function)")),Object(b.b)("p",null,"This LIP focuses on defining the Roles and Privileges sets and the Privilege -> Role relation because these are fairly static. The relations only change when we add new roles/permissions or update the existing allocation of permissions. By contrast, the Address -> Role function is highly dynamic--it is updated by any transaction that creates a new account."),Object(b.b)("h2",{id:"roles"},"Roles"),Object(b.b)("p",null,"The current roles in Libra are:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"A"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"B"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"C"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"D"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"E"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"F"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"G"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Granted by")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Unique?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Address")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Has balances?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Account limits?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Freezable?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Transaction priority"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"genesis"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Globally"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"0xA550C18"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"2"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"genesis"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Globally"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"0xB1E55ED"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per Association member"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ValidatorOperator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"At most one per Validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"5"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"DesignatedDealer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"6"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ParentVASP"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per VASP"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ChildVASP(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ParentVASP"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"0")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"LibraRoot - The root authority of Libra. Controlled jointly by Libra Payment Networks and the Association Council."),Object(b.b)("li",{parentName:"ul"},"TreasuryCompliance - A Libra Payment Networks entity responsible for day-to-day treasury (e.g. minting, burning), and compliance (e.g., updating on-chain exchange rates, freezing accounts) operations."),Object(b.b)("li",{parentName:"ul"},"Validator - The on-chain representation of a Libra Association member."),Object(b.b)("li",{parentName:"ul"},"ValidatorOperator - An entity authorized to operate one or more validator nodes on behalf of an Association member."),Object(b.b)("li",{parentName:"ul"},"Designated Dealer - An entity that manages fiat transfers to/from the Libra reserve."),Object(b.b)("li",{parentName:"ul"},"ParentVASP - The primary account of a regulated custodial wallet operating on the Libra blockchain."),Object(b.b)("li",{parentName:"ul"},"ChildVASP(",Object(b.b)("strong",{parentName:"li"},"addr"),") - A child account of a the ParentVASP account at ",Object(b.b)("strong",{parentName:"li"},"addr"))),Object(b.b)("h3",{id:"notes"},"Notes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},'The "Granted by" column specifies which role can create accounts with the given role type (e.g., only LibraRoot can create accounts with the Validator role).'),Object(b.b)("li",{parentName:"ul"},"The LibraRoot and TreasuryCompliance roles are globally unique and granted to the addresses ",Object(b.b)("inlineCode",{parentName:"li"},"0x0...A550C18")," and ",Object(b.b)("inlineCode",{parentName:"li"},"0x0...B1E55ED")," (respectively)."),Object(b.b)("li",{parentName:"ul"},"The addresses ",Object(b.b)("inlineCode",{parentName:"li"},"0x0...0")," and ",Object(b.b)("inlineCode",{parentName:"li"},"0x...0")," are special addresses that can never contain an account. ",Object(b.b)("inlineCode",{parentName:"li"},"0x0"),' is a "reserved address" that cannot store any data and ',Object(b.b)("inlineCode",{parentName:"li"},"0x1")," is where the Move modules implementing the Libra Framework logic are stored."),Object(b.b)("li",{parentName:"ul"},"The administrative roles LibraRoot, TreasuryCompliance, Validator, and ValidatorOperator cannot hold balances in any currency and thus cannot receive funds sent from other accounts."),Object(b.b)("li",{parentName:"ul"},"The DesignatedDealer, ParentVASP, and ChildVASP roles can each hold balances in any currency. ParentVASP and ChildVASP accounts have daily limits on their incoming and outgoing transfers and total balance. DesignatedDealer accounts are not subject to these limits."),Object(b.b)("li",{parentName:"ul"},'All accounts with roles other than LibraRoot and TreasuryCompliance can be "frozen". A frozen account cannot send any transactions or receive funds from other accounts.'),Object(b.b)("li",{parentName:"ul"},"To ensure that important system transactions are executed promptly, the Libra mempool prioritizes transactions sent by non-VASP accounts. LibraRoot transactions have the highest priority, TreasuryCompliance transactions have the second highest, and so on. The mempool compares transactions by role priority first and gas price second.")),Object(b.b)("h3",{id:"move-implementation"},"Move Implementation"),Object(b.b)("p",null,"Roles are implemented in the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/Roles.md#module-0x1roles"}),Object(b.b)("inlineCode",{parentName:"a"},"Roles"))," Move module. Every account contains a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/Roles.md#resource-roleid"}),Object(b.b)("inlineCode",{parentName:"a"},"Roles::RoleId"))," resource with an integer code to identify the role. The codes are:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"const LIBRA_ROOT_ROLE_ID: u64 = 0;\nconst TREASURY_COMPLIANCE_ROLE_ID: u64 = 1;\nconst DESIGNATED_DEALER_ROLE_ID: u64 = 2;\nconst VALIDATOR_ROLE_ID: u64 = 3;\nconst VALIDATOR_OPERATOR_ROLE_ID: u64 = 4;\nconst PARENT_VASP_ROLE_ID: u64 = 5;\nconst CHILD_VASP_ROLE_ID: u64 = 6;\n")),Object(b.b)("h2",{id:"permissions"},"Permissions"),Object(b.b)("p",null,"The current permissions in Libra are:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"I"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"J"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Permission")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Granted to")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Unique?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("strong",{parentName:"td"},"Transferable?"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MintCurrency(",Object(b.b)("strong",{parentName:"td"},"type"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per currency ",Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"2"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{Enable,Disable}Minting(",Object(b.b)("strong",{parentName:"td"},"type"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per currency ",Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"BurnCurrency(",Object(b.b)("strong",{parentName:"td"},"type"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per currency ",Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"PreburnCurrency(",Object(b.b)("strong",{parentName:"td"},"type"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"DesignatedDealer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"5"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"UpdateExchangeRate(",Object(b.b)("strong",{parentName:"td"},"type"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per currency ",Object(b.b)("strong",{parentName:"td"},"type")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"6"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"UpdateDualAttestationLimit"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{Freeze,Unfreeze}Account"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"TreasuryCompliance"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"8"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"RegisterNewCurrency"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"9"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ProcessWriteSetTransaction"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"10"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"UpdateLibraProtocolVersion"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"11"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"UpdateVMConfig"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"12"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"PublishModule"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"13"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{Add,Remove}Validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LibraRoot"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"14"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"UpdateValidatorConfig(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ValidatorOperator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"15"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"{Set,Remove}ValidatorOperator(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per validator"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"RotateDualAttestationInfo(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ParentVASP, DesignatedDealer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per VASP/DesignatedDealer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"N")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"17"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"RotateAuthenticationKey(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Account at ",Object(b.b)("strong",{parentName:"td"},"addr")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per address"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"18"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WithdrawalCapability(",Object(b.b)("strong",{parentName:"td"},"addr"),")"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Account at ",Object(b.b)("strong",{parentName:"td"},"addr")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Per address"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Y")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"MintCurrency(",Object(b.b)("strong",{parentName:"li"},"type"),"): Create currency of the given ",Object(b.b)("strong",{parentName:"li"},"type")),Object(b.b)("li",{parentName:"ul"},"{Enable,Disable}Minting(",Object(b.b)("strong",{parentName:"li"},"type"),"): Enable and disable minting the currency of the given ",Object(b.b)("strong",{parentName:"li"},"type")),Object(b.b)("li",{parentName:"ul"},"BurnCurrency(",Object(b.b)("strong",{parentName:"li"},"type"),"): Destroy currency of the given ",Object(b.b)("strong",{parentName:"li"},"type")),Object(b.b)("li",{parentName:"ul"},"PreburnCurrency(",Object(b.b)("strong",{parentName:"li"},"type"),"): Create a burn request for the currency of the given ",Object(b.b)("strong",{parentName:"li"},"type")," to be fulfilled or canceled by the holder of BurnCurrency"),Object(b.b)("li",{parentName:"ul"},"UpdateExchangeRate(",Object(b.b)("strong",{parentName:"li"},"type"),"): Update the exchange rate from each non-LBR currency ",Object(b.b)("strong",{parentName:"li"},"type")," to LBR"),Object(b.b)("li",{parentName:"ul"},"UpdateDualAttestationLimit: Update the amount above which VASP <-> VASP transactions must use the travel rule protocol"),Object(b.b)("li",{parentName:"ul"},"{Freeze,Unfreeze}Account: Prevent an account from sending transactions or receiving funds"),Object(b.b)("li",{parentName:"ul"},"RegisterNewCurrency: Add a new currency type to the system"),Object(b.b)("li",{parentName:"ul"},"ProcessWriteSetTransaction: Process writeset transactions (i.e., direct writesets and admin scripts) to update the Libra protocol by changing on-chain Move modules and/or global state"),Object(b.b)("li",{parentName:"ul"},"UpdateLibraProtocolVersion: Change the current Libra protocol version. This will atomically update the behavior of node software"),Object(b.b)("li",{parentName:"ul"},"UpdateVMConfig: Update the transaction script allowlist, module publishing options, or gas costs"),Object(b.b)("li",{parentName:"ul"},"PublishModule: Publish a new Move module"),Object(b.b)("li",{parentName:"ul"},"{Add,Remove}Validator: Add and remove validators"),Object(b.b)("li",{parentName:"ul"},"UpdateValidatorConfig(",Object(b.b)("strong",{parentName:"li"},"addr"),"): Rotate the consensus public key and network address for the validator account at ",Object(b.b)("strong",{parentName:"li"},"addr")),Object(b.b)("li",{parentName:"ul"},"{Set,Remove}ValidatorOperator(",Object(b.b)("strong",{parentName:"li"},"addr"),"): Set and remove the address of the operator account that has permission to rotate the consensus public key of the validator account at ",Object(b.b)("strong",{parentName:"li"},"addr")),Object(b.b)("li",{parentName:"ul"},"RotateDualAttestationInfo(",Object(b.b)("strong",{parentName:"li"},"addr"),"): Change the public key and endpoint URL that ",Object(b.b)("strong",{parentName:"li"},"addr")," uses for the KYC and travel rule protocols"),Object(b.b)("li",{parentName:"ul"},"RotateAuthenticationKey(",Object(b.b)("strong",{parentName:"li"},"addr"),"): Rotate the authentication key for the account at ",Object(b.b)("strong",{parentName:"li"},"addr")),Object(b.b)("li",{parentName:"ul"},"WithdrawCapability(",Object(b.b)("strong",{parentName:"li"},"addr"),"): Decrease the balance of the account at ",Object(b.b)("strong",{parentName:"li"},"addr"))),Object(b.b)("h3",{id:"notes-1"},"Notes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},'The "Granted to" column specifies which role(s) can be assigned the given privilege'),Object(b.b)("li",{parentName:"ul"},"All privileges are granted to an account upon creation, and most remain in that account forever. There are three exceptions: UpdateValidatorConfig, RotateAuthenticationKey and Withdraw.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"UpdateValidatorConfig is granted to a Validator account upon creation, but can be delegated to a ValidatorOperator. The Validator can subsequently revoke the privilege and delegate to a different operator."),Object(b.b)("li",{parentName:"ul"},'Both RotateAuthenticationKey and Withdraw are "transferable" privileges that can be be extracted from their original account and placed in a resource elsewhere (including one published under a different account).')))),Object(b.b)("h3",{id:"move-implementation-1"},"Move Implementation"),Object(b.b)("p",null,"Conceptually, each permission encodes the authority to mutate some piece of on-chain state. Each permission check is implemented inside the module that performs this mutation."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/Libra.md"}),Object(b.b)("inlineCode",{parentName:"a"},"Libra")),": MintCurrency, {Enable,Disable}Minting, BurnCurrency, PreburnCurrency, UpdateExchangeRate, RegisterNewCurrency."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/DualAttestation.md"}),Object(b.b)("inlineCode",{parentName:"a"},"DualAttestation")),": UpdateDualAttestationLimit, RotateDualAttestationInfo"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/AccountFreezing.md"}),Object(b.b)("inlineCode",{parentName:"a"},"AccountFreezing")),": {Freeze, Unfreeze}Account"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraWriteSetManager.md"}),Object(b.b)("inlineCode",{parentName:"a"},"WriteSetManager")),": ProcessWriteSetTransaction"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraVersion.md"}),Object(b.b)("inlineCode",{parentName:"a"},"LibraVersion")),": UpdateLibraProtocolVersion"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraVMConfig.md"}),Object(b.b)("inlineCode",{parentName:"a"},"LibraVMConfig")),": UpdateVMConfig"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraSystem.md"}),Object(b.b)("inlineCode",{parentName:"a"},"LibraSystem")),": {Add,Remove}Validator, UpdateValidatorConfig, {Set,Remove}ValidatorOperator"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/doc/LibraAccount.md"}),Object(b.b)("inlineCode",{parentName:"a"},"LibraAccount")),": RotateAuthenticationKey, Withdraw")))}O.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),O=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=O(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=O(a),j=r,m=d["".concat(c,".").concat(j)]||d[j]||p[j]||b;return a?n.a.createElement(m,i({ref:t},l,{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);