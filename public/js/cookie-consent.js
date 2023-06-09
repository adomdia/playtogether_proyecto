var cookieconsent = function (e) {
    var o = {};

    function t(n) {
        if (o[n]) return o[n].exports;
        var i = o[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    return t.m = e, t.c = o, t.d = function (e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {enumerable: !0, get: n})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var i in e) t.d(n, i, function (o) {
            return e[o]
        }.bind(null, i));
        return n
    }, t.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function (e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, t.p = "", t(t.s = 29)
}([function (e, o, t) {
    "use strict";
    e.exports = function (e) {
        var o = [];
        return o.toString = function () {
            return this.map((function (o) {
                var t = function (e, o) {
                    var t = e[1] || "", n = e[3];
                    if (!n) return t;
                    if (o && "function" == typeof btoa) {
                        var i = (r = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                            a = n.sources.map((function (e) {
                                return "/*# sourceURL=" + n.sourceRoot + e + " */"
                            }));
                        return [t].concat(a).concat([i]).join("\n")
                    }
                    var r;
                    return [t].join("\n")
                }(o, e);
                return o[2] ? "@media " + o[2] + "{" + t + "}" : t
            })).join("")
        }, o.i = function (e, t) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (n[a] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var r = e[i];
                null != r[0] && n[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = "(" + r[2] + ") and (" + t + ")"), o.push(r))
            }
        }, o
    }
}, function (e, o, t) {
    var n, i, a = {}, r = (n = function () {
        return window && document && document.all && !window.atob
    }, function () {
        return void 0 === i && (i = n.apply(this, arguments)), i
    }), s = function (e, o) {
        return o ? o.querySelector(e) : document.querySelector(e)
    }, c = function (e) {
        var o = {};
        return function (e, t) {
            if ("function" == typeof e) return e();
            if (void 0 === o[e]) {
                var n = s.call(this, e, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                o[e] = n
            }
            return o[e]
        }
    }(), l = null, p = 0, d = [], u = t(22);

    function k(e, o) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t], i = a[n.id];
            if (i) {
                i.refs++;
                for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) i.parts.push(h(n.parts[r], o))
            } else {
                var s = [];
                for (r = 0; r < n.parts.length; r++) s.push(h(n.parts[r], o));
                a[n.id] = {id: n.id, refs: 1, parts: s}
            }
        }
    }

    function v(e, o) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var a = e[i], r = o.base ? a[0] + o.base : a[0], s = {css: a[1], media: a[2], sourceMap: a[3]};
            n[r] ? n[r].parts.push(s) : t.push(n[r] = {id: r, parts: [s]})
        }
        return t
    }

    function m(e, o) {
        var t = c(e.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = d[d.length - 1];
        if ("top" === e.insertAt) n ? n.nextSibling ? t.insertBefore(o, n.nextSibling) : t.appendChild(o) : t.insertBefore(o, t.firstChild), d.push(o); else if ("bottom" === e.insertAt) t.appendChild(o); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = c(e.insertAt.before, t);
            t.insertBefore(o, i)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var o = d.indexOf(e);
        o >= 0 && d.splice(o, 1)
    }

    function g(e) {
        var o = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var n = function () {
                0;
                return t.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return _(o, e.attrs), m(e, o), o
    }

    function _(e, o) {
        Object.keys(o).forEach((function (t) {
            e.setAttribute(t, o[t])
        }))
    }

    function h(e, o) {
        var t, n, i, a;
        if (o.transform && e.css) {
            if (!(a = "function" == typeof o.transform ? o.transform(e.css) : o.transform.default(e.css))) return function () {
            };
            e.css = a
        }
        if (o.singleton) {
            var r = p++;
            t = l || (l = g(o)), n = w.bind(null, t, r, !1), i = w.bind(null, t, r, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (e) {
            var o = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", _(o, e.attrs), m(e, o), o
        }(o), n = j.bind(null, t, o), i = function () {
            f(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = g(o), n = z.bind(null, t), i = function () {
            f(t)
        });
        return n(e), function (o) {
            if (o) {
                if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                n(e = o)
            } else i()
        }
    }

    e.exports = function (e, o) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (o = o || {}).attrs = "object" == typeof o.attrs ? o.attrs : {}, o.singleton || "boolean" == typeof o.singleton || (o.singleton = r()), o.insertInto || (o.insertInto = "head"), o.insertAt || (o.insertAt = "bottom");
        var t = v(e, o);
        return k(t, o), function (e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var r = t[i];
                (s = a[r.id]).refs--, n.push(s)
            }
            e && k(v(e, o), o);
            for (i = 0; i < n.length; i++) {
                var s;
                if (0 === (s = n[i]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete a[s.id]
                }
            }
        }
    };
    var b, y = (b = [], function (e, o) {
        return b[e] = o, b.filter(Boolean).join("\n")
    });

    function w(e, o, t, n) {
        var i = t ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = y(o, i); else {
            var a = document.createTextNode(i), r = e.childNodes;
            r[o] && e.removeChild(r[o]), r.length ? e.insertBefore(a, r[o]) : e.appendChild(a)
        }
    }

    function z(e, o) {
        var t = o.css, n = o.media;
        if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = t; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }

    function j(e, o, t) {
        var n = t.css, i = t.sourceMap, a = void 0 === o.convertToAbsoluteUrls && i;
        (o.convertToAbsoluteUrls || a) && (n = u(n)), i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var r = new Blob([n], {type: "text/css"}), s = e.href;
        e.href = URL.createObjectURL(r), s && URL.revokeObjectURL(s)
    }
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Active","always_active":"Always active","change_settings":"Change my preferences","find_out_more":"<p>To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Cookies Policy</a>.</p>","i_agree_text":"I agree","inactive":"Inactive","ok_text":"OK","text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.<br/>","title":"We use cookies"},"level_functionality":{"content":"<p>These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.</p><p>For example, we may use functionality cookies to remember your language preferences or remember your login details.</p>","title":"Functionality cookies"},"level_strictly_necessary":{"content":"<p>These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.</p><p>Without these cookies, we cannot provide you certain services on our website.</p>","title":"Strictly necessary cookies"},"level_targeting":{"content":"<p>These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.</p><p>These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.</p><p>If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p>","title":"Targeting and advertising cookies"},"level_tracking":{"content":"<p>These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.</p><p>For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.</p><p>The information collected through these tracking and performance cookies do not identify any individual visitor.</p>","title":"Tracking and performance cookies"},"preference_center":{"save":"Save my preferences","title":"Cookies Preferences Center"},"preference_center_menu_and_content":{"more_information_content":"<h1>More information</h1><p>For any queries in relation to our policy on cookies and your choices, please contact us.</p>","more_information_title":"More information","your_privacy_content":"<h1>Your privacy is important to us</h1>\\n<p>Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).</p><p>You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.</p>","your_privacy_title":"Your privacy"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Immer aktiv","change_settings":"Einstellungen ändern","find_out_more":"<p>Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>Datenschutzerklärung</a>.</p>","i_agree_text":"Alle akzeptieren","inactive":"Inaktiv","ok_text":"OK","text":"Diese Website verwendet Cookies und Targeting Technologien um Ihnen ein besseres Internet-Erlebnis zu ermöglichen und die Werbung, die Sie sehen, besser an Ihre Bedürfnisse anzupassen. Diese Technologien nutzen wir außerdem um Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln. Durch das Surfen auf unserer Website stimmen Sie der Verwendung von Cookies und anderen Tracking-Technologien zu.<br/>","title":"Ihre Privatsphäre ist uns wichtig"},"level_functionality":{"content":"<p>Diese Cookies werden verwendet, um Ihnen ein persönlicheres Erlebnis auf unserer Website zu ermöglichen und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.</p><p>Beispielsweise können wir Funktions-Cookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldedaten zu speichern.</p>","title":"Funktions Cookies"},"level_strictly_necessary":{"content":"<p>Diese Cookies sind für die Bereitstellung von Diensten, die über unsere Website verfügbar sind, und für die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.</p><p>Ohne diese Cookies können wir Ihnen bestimmte Dienste auf unserer Website nicht zur Verfügung stellen.</p>","title":"Technisch notwendige Cookies"},"level_targeting":{"content":"<p>Diese Cookies werden genutzt, um Werbung anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren wird.</p><p>Diese Cookies, die von unseren Inhalten und / oder Werbeanbietern bereitgestellt werden, können Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, welche sie durch Aktivitäten Ihres Webbrowsers in Ihrem Netzwerk von Websites gesammelt haben.</p><p>Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, werden weiterhin Anzeigen angezeigt. Diese sind für Sie jedoch möglicherweise nicht relevant.</p>","title":"Targeting und Werbung Cookies"},"level_tracking":{"content":"<p>Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.<p><p>Diese Cookies können beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So können wir verstehen, wie wir unsere Website für Sie verbessern können.</p><p>Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.</p>","title":"Tracking und Performance Cookies"},"preference_center":{"save":"Einstellungen speichern","title":"Cookie Einstellungen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mehr Informationen</h1><p>Bei Fragen in Bezug auf unseren Umgang mit Cookies und Ihrer Privatsphäre kontaktieren Sie uns bitte.</p>","more_information_title":"Mehr Informationen","your_privacy_content":"<h1>Ihre Privatsphäre ist uns wichtig</h1>\\n<p>Cookies sind sehr kleine Textdateien, die auf Ihrem Rechner gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies für eine Reihe von Auswertungen, um damit Ihren Besuch auf unserer Website kontinuierlich zu verbessern zu können (z. B. damit Ihnen Ihre Login-Daten erhalten bleiben).</p><p>Sie können Ihre Einstellungen ändern und verschiedenen Arten von Cookies erlauben, auf Ihrem Rechner gespeichert zu werden, während Sie unsere Webseite besuchen. Sie können auf Ihrem Rechner gespeicherte Cookies ebenso weitgehend wieder entfernen. Bitte bedenken Sie aber, dass dadurch Teile unserer Website möglicherweise nicht mehr in der gedachten Art und Weise nutzbar sind.</p>","your_privacy_title":"Ihre Privatsphäre"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actif","always_active":"Toujours activé","change_settings":"Changer mes préférences","find_out_more":"<p>Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique sur les cookies</a>.</p>","i_agree_text":"J\'accepte","inactive":"Inactif","ok_text":"OK","text":"Nous utilisons des cookies et d\'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé et des publicités ciblées, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs. En naviguant sur notre site Web, vous consentez à notre utilisation de cookies et d\'autres technologies de suivi.<br/>","title":"Nous utilisons des cookies"},"level_functionality":{"content":"<p>Ces cookies servent à vous offrir une expérience plus personnalisée sur notre site Web et à mémoriser les choix que vous faites lorsque vous utilisez notre site Web.</p><p>Par exemple, nous pouvons utiliser des cookies de fonctionnalité pour mémoriser vos préférences de langue ou vos identifiants de connexion.</p>","title":"Cookies de Fonctionnalité"},"level_strictly_necessary":{"content":"<p>Ces cookies sont essentiels pour vous fournir les services disponibles sur notre site Web et vous permettre d’utiliser certaines fonctionnalités de notre site Web.</p><p>Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.</p>","title":"Cookies strictement nécessaires"},"level_targeting":{"content":"<p>Ces cookies sont utilisés pour afficher des publicités susceptibles de vous intéresser en fonction de vos habitudes de navigation.</p><p>Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicité, peuvent associer des informations qu\'ils ont collectées sur notre site Web à d\'autres informations qu\'ils ont collectées de manière indépendante et concernant les activités du votre navigateur Web sur son réseau de sites Web.</p><p>Si vous choisissez de supprimer ou de désactiver ces cookies de ciblage ou de publicité, vous verrez toujours des annonces, mais elles risquent de ne pas être pertinentes.</p>","title":"Cookies de ciblage et de publicité"},"level_tracking":{"content":"<p>Ces cookies sont utilisés pour collecter des informations permettant d\'analyser le trafic sur notre site et la manière dont les visiteurs utilisent notre site.</p><p>Par exemple, ces cookies peuvent suivre des choses telles que le temps que vous passez sur le site Web ou les pages que vous visitez, ce qui nous aide à comprendre comment nous pouvons améliorer notre site Web pour vous.</p><p>Les informations collectées via ces cookies de suivi et de performance n\' identifient aucun visiteur en particulier.</p>","title":"Cookies de suivi et de performance"},"preference_center":{"save":"Sauvegarder mes préférences","title":"Espace de Préférences des Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Plus d\'information</h1><p>Pour toute question relative à notre politique en matière de cookies et à vos choix, veuillez nous contacter.</p>","more_information_title":"Plus d\'information","your_privacy_content":"<h1>Votre confidentialité est importante pour nous</h1>\\n<p>Les cookies sont de très petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies à diverses fins et pour améliorer votre expérience en ligne sur notre site Web (par exemple, pour mémoriser les informations de connexion de votre compte).</p><p>Vous pouvez modifier vos préférences et refuser l\'enregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez également supprimer les cookies déjà stockés sur votre ordinateur, mais gardez à l\'esprit que leur suppression peut vous empêcher d\'utiliser des éléments de notre site Web.</p>","your_privacy_title":"Votre confidentialité"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Activo","always_active":"Siempre activo","change_settings":"Cambiar mis preferencias","find_out_more":"<p>Para saber más, visita nuestra página sobre la <a href=\'%s\' target=\'_blank\'>Política de Cookies</a>, por favor.</p>","i_agree_text":"Estoy de acuerdo","inactive":"Inactivo","ok_text":"OK","text":"Usamos cookies y otras técnicas de rastreo para mejorar tu experiencia de navegación en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el tráfico en nuestra web y para comprender de donde llegan nuestros visitantes. Navegando en nuestra web tu aceptas el uso de cookies y de otras técnicas de rastreo.<br/>","title":"Utilizamos cookies"},"level_functionality":{"content":"<p>Estas cookies son utilizados para proveerte una más personalizada experiencia en nuestra web y para recordar tu elecciones en nuestro sitio web.</p><p>Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tus preferencias de idioma o tus detalles de acceso.</p>","title":"Cookies de funcionalidad"},"level_strictly_necessary":{"content":"<p>Estas cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte de utilizar algunas características de nuestra web.</p><p>Sin estas cookies, no podemos proveer algunos servicios de nuestro sitio web.</p>","title":"Cookies estrictamente necesarias"},"level_targeting":{"content":"<p>Estas cookies son utilizados para enseñarte anuncios que pueden ser interesantes sobre la base de tus costumbres de navegación.</p><p>Estas cookies, como servidos por nuestros proveedores de contenido y/o de publicidad, puede combinar la información que ellos recogieron de nuestro sitio web con otra información recopilada por ellos en relación con las actividades de su navegador web a través de su red de sitios web.</p><p>Si tu eliges de cancelar o inhabilitar los cookies de seguimiento y publicidad, seguirás viendo anuncios pero estos podrían no ser de tu interés.</p>","title":"Cookies de seguimiento y publicidad"},"level_tracking":{"content":"<p>Estas cookies  son utilizados para recopilar información para analizar el tráfico en nuestra web y la forma en que los usuarios utilizan nuestra web.</p><p>Por ejemplo, estas cookies pueden recopilar datos como cuanto tiempo llevas navegado en nuestro sitio web o que páginas visitas, cosa que nos ayuda a comprender cómo podemos mejorar nuestra web para ti.</p><p>La información recopilada con estas cookies de rastreo y rendimiento no identifiquen a ningún visitante individual.</p>","title":"Cookies de rastreo y rendimiento"},"preference_center":{"save":"Guardar mis preferencias","title":"Centro de Preferencias de Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Más información</h1><p>Para cualquier pregunta en relación con nuestra política de cookies y tus preferencias, contacta con nosotros por favor.</p>","more_information_title":"Más información","your_privacy_content":"<h1>Tu privacidad es importante para nosotros</h1>\\n<p>Los cookies son muy pequeños archivos de texto almacenados en tu ordenador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en line en nuestro sitio web (por ejemplo, para recordar tu detalles de acceso).</p><p>Puedes cambiar tus preferencias y rechazar que algunos tipos de cookies sean almacenados en tu ordenador mientras estás navegando en nuestra web. Puedes también cancelar cualquier cookie ya almacenado en tu ordenador, pero recuerda que cancelar los cookies puede impedirte de utilizar algunas partes de nuestra web.</p>","your_privacy_title":"Tu privacidad"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Attivo","always_active":"Sempre attivo","change_settings":"Cambia le mie impostazioni","find_out_more":"<p>Per saperne di più, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica dei Cookies</a>.</p>","i_agree_text":"Accetto","inactive":"Inattivo","ok_text":"OK","text":"Noi usiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori. Navigando nel nostro sito web, tu accetti il nostro utilizzo dei cookies e di altre tecniche di tracciamento.<br/>","title":"Noi usiamo i cookies"},"level_functionality":{"content":"<p>Questi cookies sono utilizzati per offrirti un’esperienza più personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre usavi il nostro sito.</p><p>Per esempio, possiamo usare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.</p>","title":"Cookies funzionali"},"level_strictly_necessary":{"content":"<p>Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalità del nostro sito web.</p><p>Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.</p>","title":"Cookies strettamente necessari"},"level_targeting":{"content":"<p>Questi cookies sono usati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.</p><p>Questi cookies, cosí come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione all’attività del tuo browser attraverso la loro rete di siti web.</p><p>Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicità, vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.</p>","title":"Cookies di targeting e pubblicità"},"level_tracking":{"content":"<p>Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.</p><p>Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.</p><p>Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.</p>","title":"Cookies di tracciamento e prestazione"},"preference_center":{"save":"Salva le mie impostazioni","title":"Centro Preferenze sui Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Più informazioni</h1><p>Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.</p>","more_information_title":"Più informazioni","your_privacy_content":"<h1>La tua privacy è importante per noi</h1>\\n<p>I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi usiamo i cookies per una varietà di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).</p><p>Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie già memorizzato nel tuo computer, ma ricorda che cancellare i cookies può impedirti di utilizzare alcune parti del nostro sito.</p>","your_privacy_title":"La tua privacy"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Actief","always_active":"Altijd actief","change_settings":"Wijzig mijn voorkeuren","find_out_more":"<p>Voor meer informatie, bezoek ons <a href=\'%s\' target=\'_blank\'>Cookie Beleid</a>.</p>","i_agree_text":"Ik ga akkoord","inactive":"Inactief","ok_text":"OK","text":"Wij maken gebruik van cookies en andere tracking-technologieën om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om onze website trafiek te analyseren en om te begrijpen waar onze bezoekers vandaan komen. Door onze website te bezoeken, stemt u in met ons gebruik van cookies en andere trackingtechnologieën.<br/>","title":"Wij gebruiken cookies"},"level_functionality":{"content":"<p>Deze cookies worden gebruikt om u een persoonlijkere ervaring op onze website te bieden en om keuzes te onthouden die u maakt wanneer u onze website gebruikt.</p><p>Functionele cookies worden bijvoorbeeld gebruikt om uw taalvoorkeuren of inloggegevens te onthouden.</p>","title":"Functionele cookies"},"level_strictly_necessary":{"content":"<p>Deze cookies zijn essentieel om u de diensten aan te bieden die beschikbaar zijn via onze website en om u in staat te stellen bepaalde functies van onze website te gebruiken.</p><p>Zonder deze cookies kunnen we u bepaalde diensten op onze website niet aanbieden.</p>","title":"Strikt noodzakelijke cookies"},"level_targeting":{"content":"<p>Deze cookies worden gebruikt om advertenties weer te geven die u waarschijnlijk interesseren op basis van uw surfgedrag.</p><p>Deze cookies, zoals aangeboden op basis van de inhoud van onze site en/of reclame aanbieders, kunnen informatie die ze van onze website hebben verzameld combineren met andere informatie die ze onafhankelijk hebben verzameld met betrekking tot de activiteiten van uw webbrowser via hun netwerk van websites.</p><p>Als u ervoor kiest deze targeting- of advertentiecookies te verwijderen of uit te schakelen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.</p>","title":"Targeting- en advertentie cookies"},"level_tracking":{"content":"<p>Deze cookies worden gebruikt om informatie te verzamelen om het verkeer naar onze website te analyseren en hoe bezoekers onze website gebruiken.</p><p>Deze cookies kunnen gegevens zoals hoe lang u op de website doorbrengt of de pagina\'s die u bezoekt, bijhouden. Dit helpt ons te begrijpen hoe we onze website voor u kunnen verbeteren.</p><p>Individuele bezoekers kunnen niet geïdentificeerd worden aan hand van de informatie in deze cookies.</p>","title":"Tracking- en prestatie cookies"},"preference_center":{"save":"Sla mijn voorkeuren op","title":"Cookie instellingen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Meer informatie</h1><p>Voor vragen in verband met ons cookiebeleid en uw keuzes kan u ons contacteren.</p>","more_information_title":"Meer informatie","your_privacy_content":"<h1>Uw privacy is belangrijk voor ons</h1>\\n<p>Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer worden opgeslagen. We gebruiken cookies voor verschillende doeleinden en om uw online ervaring op onze website te verbeteren (bijvoorbeeld om de inloggegevens voor uw account te onthouden).</p><p>U kunt uw voorkeuren wijzigen en bepaalde soorten cookies weigeren die op uw computer worden opgeslagen tijdens het browsen op onze website. U kunt ook alle cookies verwijderen die al op uw computer zijn opgeslagen, maar houd er rekening mee dat het verwijderen van cookies ertoe kan leiden dat u delen van onze website niet kunt gebruiken.</p>","your_privacy_title":"Jouw privacy"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Ativo","always_active":"Sempre ativo","change_settings":"Alterar as minhas preferências","find_out_more":"<p>Para obter mais detalhes, por favor consulte a nossa<a href=\'%s\' target=\'_blank\'>Política de Cookies</a>.</p>","i_agree_text":"Concordo","inactive":"Inativo","ok_text":"OK","text":"Utilizamos cookies e outras tecnologias de medição para melhorar a sua experiência de navegação no nosso site, de forma a mostrar conteúdo personalizado, anúncios direcionados, analisar o tráfego do site e entender de onde vêm os visitantes. Ao navegar no nosso site, concorda com o uso de cookies e outras tecnologias de medição.<br/>","title":"O nosso site usa cookies"},"level_functionality":{"content":"<p>Estes cookies são usados ​​para fornecer uma experiência mais personalizada no nosso site e para lembrar as escolhas que faz ao usar o nosso site.</p><p>Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferências de idioma e/ ou os seus detalhes de login.</p>","title":"Cookies de funcionalidade"},"level_strictly_necessary":{"content":"<p>Estes cookies são essenciais para fornecer serviços disponíveis no nosso site e permitir que possa usar determinados recursos no nosso site.</p><p>Sem estes cookies, não podemos fornecer certos serviços no nosso site.</p>","title":"Cookies estritamente necessários"},"level_targeting":{"content":"<p>Estes cookies são usados ​​para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hábitos e comportamentos de navegação.</p><p>Estes cookies, servidos pelo nosso conteúdo e/ ou fornecedores de publicidade, podem combinar as informações coletadas no nosso site com outras informações coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.</p><p>Se optar por remover ou desativar estes cookies de segmentação ou publicidade, ainda verá anúncios, mas estes poderão não ser relevantes para si.</p>","title":"Cookies de segmentação e publicidade"},"level_tracking":{"content":"<p>Estes cookies são usados ​​para coletar informações para analisar o tráfego no nosso site e entender como é que os visitantes estão a usar o nosso site.</p><p>Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as páginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.</p><p>As informações coletadas por meio destes cookies de medição e desempenho não identificam nenhum visitante individual.</p>","title":"Cookies de medição e desempenho"},"preference_center":{"save":"Guardar as minhas preferências","title":"Centro de preferências de cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mais Informações</h1><p>Para qualquer dúvida sobre a nossa política de cookies e as suas opções, entre em contato connosco.</p>","more_information_title":"Mais Informações","your_privacy_content":"<h1>A sua privacidade é importante para nós.</h1>\\n<p>Cookies são pequenos arquivos de texto que são armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiência no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).</p><p>Pode alterar as suas preferências e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode também remover todos os cookies já armazenados no seu computador, mas lembre-se de que a exclusão de cookies pode impedir o uso de determinadas áreas no nosso site.</p>","your_privacy_title":"A sua privacidade"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Päällä","always_active":"Aina päällä","change_settings":"Muuta asetuksiani","find_out_more":"<p>Lue lisää <a href=\'%s\' target=\'_blank\'>Evästekäytännöstämme</a>.</p>","i_agree_text":"Hyväksyn","inactive":"Pois päältä","ok_text":"OK","text":"Käytämme evästeitä ja muita seurantateknologioita parantaaksemme käyttäjäkokemusta verkkosivustollamme, näyttääksemme sinulle personoituja sisältöjä ja mainoksia, analysoidaksemme verkkoliikennettä sekä lisätäksemme ymmärrystämme käyttäjiemme sijainnista. Jatkamalla sivustomme selaamista hyväksyt evästeiden ja muiden seurantateknologioiden käytön.<br/>","title":"Käytämme evästeitä"},"level_functionality":{"content":"<p>Näitä evästeitä käytetään personoidumman käyttäjäkokemuksen luomiseksi sekä valintojesi tallentamiseksi sivustollamme.</p><p>Esim. voimme käyttää toiminnallisuusevästeitä muistaaksemme kielivalintasi sekä kirjautumistietosi.</p>","title":"Toiminnallisuusevästeet"},"level_strictly_necessary":{"content":"<p>Nämä evästeet mahdollistavat verkkosivustomme palveluiden sekä tiettyjen ominaisuuksien käyttämisen.</p><p>Ilman näitä evästeitä emme voi tarjota sinulle tiettyjä palveluita sivustollamme.</p>","title":"Tärkeät evästeet"},"level_targeting":{"content":"<p>Näitä evästeitä käytetään näyttämään mainoksia, jotka selauskäytöksesi perusteella todennäköisesti kiinnostavat sinua.</p><p>Nämä sisältö- ja/tai mainoskumppanimme tarjoamat evästeet voivat yhdistää sivustoltamme kerättyä tietoa muilta heidän verkostoonsa kuuluvilta sivustoilta kerättyihin tietoihin.</p><p>Jos päätät poistaa tai kytkeä pois päältä nämä kohdennus- ja mainosevästeet, näet yhä mainoksia, mutta ne eivät välttämättä ole sinulle oleellisia.</p>","title":"Kohdennus- ja mainosevästeet"},"level_tracking":{"content":"<p>Näiden evästeiden avulla kerätään tietoa sivustomme liikenteestä sekä käyttötavoista.</p><p>Esim. nämä evästeet voivat seurata sitä, paljonko aikaa vietät sivustollamme, mikä auttaa meitä parantamaan sivustomme käyttökokemusta jatkossa.</p><p>Näiden evästeiden avulla kerätty tietoa ei voida yhdistää yksittäiseen käyttäjään.</p>","title":"Seuranta- ja tehokkuusevästeet"},"preference_center":{"save":"Tallenna asetukseni","title":"Evästeasetukset"},"preference_center_menu_and_content":{"more_information_content":"<h1>Lisätietoa</h1><p>Evästeisiin liittyvissä kysymyksissä ole hyvä ja ota meihin yhteyttä.</p>","more_information_title":"Lisätietoa","your_privacy_content":"<h1>Yksityisyytesi on meille tärkeää</h1>\\n<p>Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteeseesi verkkosivulla vieraillessasi. Käytämme evästeitä useaan tarkoitukseen ja parantaaksesi käyttökokemustasi verkkosivustollamme (esim. muistaaksemme kirjautumistietosi).</p><p>Voit muuttaa asetuksiasi ja kieltää sivustoltamme tiettyjen evästetyyppien tallentamisen laitteellesi. Voit myös poistaa minkä tahansa jo tallennetun evästeen laitteeltasi, mutta huomaathan, että evästeiden poistaminen saattaa estää sinua käyttämästä osaa sivustomme sisällöstä.</p>","your_privacy_title":"Yksityisyytesi"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktív","always_active":"Mindig aktív","change_settings":"Beállítások megváltoztatása","find_out_more":"<p>Ha többet szeretne megtudni, kérjük, keresse fel a <a href=\'%s\' target=\'_blank\'>sütikre vonatkozó irányelveinket</a>.</p>","i_agree_text":"Elfogadom","inactive":"Inaktív","ok_text":"OK","text":"Az oldal sütiket és egyéb nyomkövető technológiákat alkalmaz, hogy javítsa a böngészési élményét, azzal hogy személyre szabott tartalmakat és célzott hirdetéseket jelenít meg, és elemzi a weboldalunk forgalmát, hogy megtudjuk honnan érkeztek a látogatóink. Weboldalunk böngészésével hozzájárul a sütik és más nyomkövető technológiák használatához.<br/>","title":"Az oldal sütiket használ"},"level_functionality":{"content":"<p>Ezeket a sütiket arra használjuk, hogy személyre szabottabb élményt nyújtsunk weboldalunkon, és hogy az oldal rögzítse a webhelyünk használata során tett döntéseket.</p><p>Például arra használhatunk funkcionális sütiket, hogy emlékezzünk a nyelvi beállításokra, vagy a bejelentkezési adataira.</p>","title":"Funkcionális sütik"},"level_strictly_necessary":{"content":"<p>Ezek a sütik elengedhetetlenek a weboldalunkon elérhető szolgáltatások nyújtásához, valamint weboldalunk bizonyos funkcióinak használatához.</p><p>A feltétlenül szükséges sütik használata nélkül weboldalunkon nem tudunk bizonyos szolgáltatásokat nyújtani Önnek.</p>","title":"Feltétlenül szükséges sütik"},"level_targeting":{"content":"<p>Ezeket a sütiket olyan hirdetések megjelenítésére használjuk, amelyek valószínűleg érdekli Önt a böngészési szokásai alapján.</p><p>Ezek a sütik, amelyeket a tartalom és / vagy a reklámszolgáltatók szolgáltatnak, egyesíthetik a weboldalunktól gyűjtött információkat más információkkal, amelyeket önállóan összegyűjtöttek az Ön böngészőjének tevékenységeivel kapcsolatban a webhely-hálózaton keresztül.</p><p>Ha Ön úgy dönt, hogy eltávolítja vagy letiltja ezeket a célirányos vagy hirdetési sütiket, akkor is látni fogja a hirdetéseket, de lehet, hogy nem lesznek relevánsak az Ön számára.</p>","title":"Célirányos és hirdetési sütik"},"level_tracking":{"content":"<p>Ezeket a sütiket arra használjuk, hogy információkat gyűjtsünk weboldalunk forgalmáról és látogatóiról, webhelyünk használatának elemzéséhez.</p><p>Például ezek a sütik nyomon követhetik a webhelyen töltött időt vagy a meglátogatott oldalakat, amely segít megérteni, hogyan javíthatjuk webhelyünket az Ön nagyobb megelégedettségére.</p><p>Ezekkel a nyomkövető és teljesítménnyel kapcsolatos sütikkel összegyűjtött információk egyetlen személyt sem azonosítanak.</p>","title":"Követési és teljesítménnyel kapcsolatos sütik"},"preference_center":{"save":"Beállítások mentése","title":"Sütikre beállítási központ"},"preference_center_menu_and_content":{"more_information_content":"<h1>Egyéb információk</h1><p>A sütikre vonatkozó irányelveinkkel és az Ön választásával kapcsolatosan felmerülő bármilyen kérdésével keressen meg bennünket.</p>","more_information_title":"Egyéb információk","your_privacy_content":"<h1>Az ön adatainak védelem fontos számunkra</h1>\\n<p>A sütik egészen kicsi szöveges fájlok, amelyeket a számítógépén tárolnak, amikor meglátogat egy weboldalt. Sütiket használunk különféle célokra, és weboldalunkon az online élmény fokozása érdekében (például a fiókjának bejelentkezési adatainak megjegyzésére).</p><p>Webhelyünk böngészése közben megváltoztathatja a beállításait, és elutasíthatja a számítógépén tárolni kívánt bizonyos típusú sütik használatát. A számítógépen már tárolt sütiket eltávolíthatja, de ne feledje, hogy a sütik törlése megakadályozhatja weboldalunk egyes részeinek használatát.</p>","your_privacy_title":"Az ön adatai védelme"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvijek aktivno","change_settings":"Promjeni moje postavke","find_out_more":"<p>Da bi saznali više, posjetite naša <a href=\'%s\' target=\'_blank\'>Pravila o kolačićima</a>.</p>","i_agree_text":"Slažem se","inactive":"Neaktivno","ok_text":"OK","text":"Koristimo kolačiće i druge tehnologije praćenja da bismo poboljšali vaše korisničko iskustvo na našoj web stranici, kako bismo vam prikazali personalizirani sadržaj i ciljane oglase, analizirali promet na našoj web stranici i razumjeli odakle dolaze naši posjetitelji. Pregledavanjem naše web stranice pristajete na našu upotrebu kolačića i drugih tehnologija praćenja.<br/>","title":"Mi koristimo kolačiće"},"level_functionality":{"content":"<p>Ovi se kolačići koriste kako bi vam pružili personalizirano korisničko iskustvo na našoj web stranici i za pamćenje izbora koje napravite kada koristite našu web stranicu.</p><p>Na primjer, možemo koristiti kolačiće funkcionalnosti da bismo zapamtili vaše jezične postavke ili upamtili vaše podatke za prijavu.</p>","title":"Kolačići funkcionalnosti"},"level_strictly_necessary":{"content":"<p>Ovi su kolačići neophodni za pružanje usluga dostupnih putem naše web stranice i omogućavanje korištenja određenih značajki naše web stranice.</p><p>Bez ovih kolačića ne možemo vam pružiti određene usluge na našoj web stranici.</p>","title":"Strogo potrebni kolačići"},"level_targeting":{"content":"<p>Ovi se kolačići koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaših navika pregledavanja web stranica.</p><p>Ovi kolačići, posluženi od naših pružatelja sadržaja i / ili oglašavanja, mogu kombinirati podatke koje su prikupili s naše web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vašeg web preglednika kroz njihovu mrežu web stranica.</p><p>Ako odlučite ukloniti ili onemogućiti ove kolačiće za ciljano oglašavanje, i dalje ćete vidjeti oglase, ali oni možda nisu relevantni za vas.</p>","title":"Kolačići za ciljano oglašavanje"},"level_tracking":{"content":"<p>Ovi se kolačići koriste za prikupljanje podataka za analizu prometa na našoj web stranici i za informaciju kako posjetitelji koriste našu web stranicu.</p><p>Na primjer, ti kolačići mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite što nam pomaže da shvatimo kako možemo poboljšati vaše korisničko iskustvo na našoj web stranici.</p><p>Informacije prikupljene ovim praćenjem i kolačići izvedbe ne identificiraju nijednog pojedinačnog posjetitelja.</p>","title":"Kolačići za praćenje i performanse"},"preference_center":{"save":"Spremi moje postavke","title":"Centar za postavke kolačića"},"preference_center_menu_and_content":{"more_information_content":"<h1>Više informacija</h1><p>Za sve upite vezane uz naša pravila o kolačićima i vašim izborima, molimo da nas kontaktirate.</p>","more_information_title":"Više informacija","your_privacy_content":"<h1>Vaša privatnost nam je važna</h1>\\n<p>Kolačići su vrlo male tekstualne datoteke koje se pohranjuju na vašem računalu kada posjetite web stranicu. Mi koristimo kolačiće za različite svrhe i za poboljšanje vašeg mrežnog iskustva na našoj web stranici (na primjer, za pamćenje podataka za prijavu na vaš korisnički račun).</p><p>Možete promijeniti svoje postavke i odbiti određene vrste kolačića koji će se pohraniti na vašem računalu tijekom pregledavanja naše web stranice. Također možete ukloniti sve kolačiće koji su već pohranjeni na vašem računalu, ali imajte na umu da vas brisanje kolačića može spriječiti da koristite dijelove naše web stranice.</p>","your_privacy_title":"Vaša privatnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktiv","always_active":"Altid aktiv","change_settings":"Skift indstillinger","find_out_more":"<p>For at finde ud af mere, så læs venligst vores <a href=\'%s\' target=\'_blank\'>Cookie politik</a>.</p>","i_agree_text":"Jeg accepterer","inactive":"Inaktiv","ok_text":"OK","text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse på vores website, til at vise personaliseret indhold, målrettede annoncer og til at forstå hvor vores besøgende kommer fra. Du samtykker til brugen af vores cookies og andre tracking teknologier hvis du fortsætter med at bruge vores website.\\n<br/>","title":"Vi bruger cookies"},"level_functionality":{"content":"<p>Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.</p><p>Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.</p>","title":"Funktions cookies"},"level_strictly_necessary":{"content":"<p>Disse Cookies er essentielle for at du kan bruge vores hjemmeside.</p><p>Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.</p>","title":"Nødvendige cookies"},"level_targeting":{"content":"<p>Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret på dine browser profil.</p><p>Disse cookies, som sættes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netværk som partnerne styrer.</p><p>Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke længere være målrettet til dig.</p>","title":"Målretning og annoncecookies"},"level_tracking":{"content":"<p>Disse cookies anvendes til at analysere besøg på vores hjemmeside, og hvordan du bruger vores hjemmeside.</p><p>Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger på. Det hjælper os til at forstå hvordan vi kan forbedre hjemmesiden.</p><p>Informationerne kan ikke identificere dig som individ og er derfor anonyme.</p>","title":"Tracking og performance cookies"},"preference_center":{"save":"Gem mine indstillinger","title":"Cookie indstillinger"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mere information</h1><p>Har du spørgsmål vedr. vores cookiepolitik og dine valgmuligheder, så kontakt os venligst.</p>","more_information_title":"Mere information","your_privacy_content":"<h1>Dit privatliv er vigtigt for os</h1>\\n<p>Cookies er en lille tekstfil, som gemmes på din computer, når du besøger et website. Vi bruger cookies til en række formål, og for at forbedre din oplevelse på vores website (eksempelvis for at huske dine login oplysninger).</p><p>Du kan ændre dine indstillinger og afvise forskellige typer cookies, som gemmes på din computer, når du besøger vores website. Du kan også fjerne cookies som allerede er gemt på din computer, men bemærk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.</p>","your_privacy_title":"Dit privatliv"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Active","always_active":"Întotdeauna active","change_settings":"Vreau să schimb setările","find_out_more":"<p>Pentru a afla mai multe, te rugăm să citești <a href=\'%s\' target=\'_blank\'>Politica noastră de Cookie-uri</a>.</p>","i_agree_text":"Sunt de acord","inactive":"Inactive","ok_text":"OK","text":"Folosim cookie-uri și alte tehnologii de urmărire pentru a îmbunătăți experiența ta de navigare pe website-ul nostru, pentru afișa conținut și reclame personalizate, pentru a analiza traficul de pe website-ul nostru și pentru a înțelege de unde vin vizitatorii noștri. Navigând pe website-ul nostru, ești de acord cu utilizarea cookie-urilor, cât și a altor metode de urmărire folosite.<br/>","title":"Folosim cookie-uri"},"level_functionality":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-ți asigura o experiență personalizată pe website-ul nostru și pentru salvarea alegerilor pe care le faci când folosești website-ul nostru.</p><p>De exemplu, putem folosi cookie-uri funcționale pentru a salva preferințele tale legate de limba website-ului nostru sau datele de logare.</p>","title":"Cookie-uri funcționale"},"level_strictly_necessary":{"content":"<p>Aceste cookie-uri sunt esențiale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.</p><p>Fără aceste cookie-uri nu poți folosi anumite funcționalități ale website-ului nostru.</p>","title":"Cookie-uri strict necesare"},"level_targeting":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-ți afișa reclame cât mai pe interesul tău, în funcție de obiceiurile tale de navigare.</p><p>Aceste cookie-uri, așa cum sunt afișate de furnizori noștri de conținut și/sau publicitate, pot combina informații de pe website-ul nostru cu alte informații pe care furnizori noștri le-au colectat în mod independent cu privire la activitatea ta în rețeaua lor de website-uri.</p><p>Dacă alegi să ștergi sau să dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame să nu fie relevante pentru tine.</p>","title":"Cookie-uri pentru marketing și publicitate"},"level_tracking":{"content":"<p>Acest tip de cookie-uri sunt folosite pentru a colecta informații în vederea analizării traficului pe website-ul nostru și modul în care vizitatorii noștri folosesc website-ul.</p><p>De exemplu, aceste cookie-uri pot urmări cât timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajută să înțelegem cum putem îmbunătăți website-ul pentru tine.</p><p>Informațiile astfel colectate nu identifică individual vizitatorii.</p>","title":"Cookie-uri de analiză și performanță"},"preference_center":{"save":"Salvează","title":"Preferințe pentru Cookie-uri"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mai multe informații</h1><p>Pentru mai multe informații cu privire la politica noastră de cookie-uri și preferințele tale, te rugăm să ne contactezi.</p>","more_information_title":"Mai multe informații","your_privacy_content":"<h1>Confidențialitatea ta este importantă pentru noi</h1>\\n<p>Cookie-urile sunt fișiere text foarte mici ce sunt salvate în browser-ul tău atunci când vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar și pentru a îți oferi cea mai bună experiență de utilizare posibilă (de exemplu, să reținem datele tale de logare în cont).</p><p>Îți poți modifica preferințele și poți refuza ca anumite tipuri de cookie-uri să nu fie salvate în browser în timp ce navigezi pe website-ul nostru. Deasemenea poți șterge cookie-urile salvate deja în browser, dar reține că este posibil să nu poți folosi anumite părți ale website-ul nostru în acest caz.</p>","your_privacy_title":"Confidențialitatea ta"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivni","always_active":"Vedno aktivni","change_settings":"Spremeni moje nastavitve","find_out_more":"<p>Za več informacij si prosim oglejte naš <a href=\'%s\' target=\'_blank\'>Pravilnik o piškotkih</a>.</p>","i_agree_text":"Se strinjam","inactive":"Neaktivni","ok_text":"V redu","text":"Piškotke in druge sledilne tehnologije uporabljamo za izboljšanje vaše uporabniške izkušnje med brskanjem po naši spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naše spletne strani in za vpogled v to, iz kje prihajajo naši gostje. Z brskanjem po naši spletni strani soglašate z našo rabo piškotkov in drugih sledilnih tehnologij.<br/>","title":"Uporabljamo piškotke"},"level_functionality":{"content":"<p>Ti piškotki se uporabljajo za zagotavljanje bolj personalizirane izkušnje na naši spletni strani in za shranjevanje vaših odločitev ob uporabi naše spletne strani.</p><p>Funkcionalne piškotke lahko, na primer, uporabljamo za to, da si zapomnimo vaše jezikovne nastavitve oz. podatke za vpis v vaš račun.</p>","title":"Funkcionalni piškotki (ang. functionality cookies)"},"level_strictly_necessary":{"content":"<p>Ti piškotki so ključnega pomena pri zagotavljanju storitev, ki so na voljo na naši spletni strani, in pri omogočanju določenih funkcionalnosti naše spletne strani.</p><p>Brez teh piškotkov vam ne moremo zagotoviti določenih storitev na naši spletni strani.</p>","title":"Nujno potrebni piškotki (ang. strictly necessary cookies)"},"level_targeting":{"content":"<p>Ti piškotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaših navad pri brskanju verjetno zanimali.</p><p>Ti piškotki, ki jih uporabljajo naši oglaševalski ponudniki oz. ponudniki vsebine, lahko združujejo podatke, ki so jih zbrali na naši spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vašega spletnega brskalnika na njihovi mreži spletnih mest.</p><p>Če se odločite izbrisati oz. onemogočiti te ciljne in oglaševalske piškotke, boste še vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.</p>","title":"Ciljni in oglaševalski piškotki (ang. targeting and advertising cookies)"},"level_tracking":{"content":"<p>Ti piškotki se uporabljajo za zbiranje podatkov za analizo obiskov naše spletne strani in vpogled v to, kako gostje uporabljajo našo spletno stran.</p><p>Ti piškotki lahko, na primer, spremljajo stvari kot so to, koliko časa preživite na naši spletni strani oz. katere strani obiščete, kar nam pomaga pri razumevanju, kako lahko za vas izboljšamo spletno stran.</p><p>Podatki, ki jih zbirajo ti piškotki, ne identificirajo nobenega posameznega uporabnika.</p>","title":"Sledilni in izvedbeni piškotki (ang. tracking and performance cookies)"},"preference_center":{"save":"Shrani moje nastavitve","title":"Nastavitve piškotkov"},"preference_center_menu_and_content":{"more_information_content":"<h1>Več informacij</h1><p>Če imate kakršnakoli vprašanja v zvezi z našim pravilnikom o piškotkih in vaših izbirah, nas prosim kontaktirajte.</p>","more_information_title":"Več informacij","your_privacy_content":"<h1>Cenimo vašo zasebnost</h1>\\n<p>Piškotki so majhne besedilne datoteke, ki se shranijo na vašo napravo ob obisku spletne strani. Piškotke uporabljamo v več namenov, predvsem pa za izboljšanje vaše spletne izkušnje na naši strani (na primer za shranjevanje podatkov ob vpisu v vaš račun).</p><p>Vaše nastavitve lahko spremenite in onemogočite določenim vrstam piškotkov, da bi se shranili na vašo napravo med brskanjem po naši spletni strani. Poleg tega lahko odstranite katerekoli piškotke, ki so že shranjeni v vaši napravi, a upoštevajte, da vam bo po izbrisu piškotkov morda onemogočeno uporabljati dele naše spletne strani.</p>","your_privacy_title":"Vaša zasebnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktywne","always_active":"Zawsze aktywne","change_settings":"Zmiana ustawień","find_out_more":"<p>Aby dowiedzieć się więcej, odwiedź naszą <a href=\'%s\' target=\'_blank\'>Politykę Cookie (Prywatności)</a>.</p>","i_agree_text":"Zgoda","inactive":"Nieaktywne","ok_text":"OK","text":"Używamy plików cookie i innych technologii śledzenia, aby poprawić jakość przeglądania naszej witryny, wyświetlać spersonalizowane treści i reklamy, analizować ruch w naszej witrynie i wiedzieć, skąd pochodzą nasi użytkownicy. Przeglądając naszą stronę, wyrażasz zgodę na używanie przez nas plików cookie i innych technologii śledzenia.<br/>","title":"Używamy pliki cookie"},"level_functionality":{"content":"<p>Te pliki cookie służą do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiętywania wyborów dokonywanych podczas korzystania z naszej strony internetowej.</p><p>Na przykład możemy używać funkcjonalnych plików cookie do zapamiętywania preferencji językowych lub zapamiętywania danych logowania.</p>","title":"Funkcjonalne"},"level_strictly_necessary":{"content":"<p>Te pliki cookie są niezbędne do świadczenia usług dostępnych za pośrednictwem naszej strony internetowej i umożliwienia korzystania z niektórych funkcji naszej strony internetowej.</p><p>Bez tych plików cookie nie możemy zapewnić usług na naszej stronie internetowej.</p>","title":"Niezbędne"},"level_targeting":{"content":"<p>Te pliki cookie służą do wyświetlania reklam, które mogą Cię zainteresować na podstawie Twoich zwyczajów przeglądania.</p><p>Pliki te tworzone przez naszych dostawców treści i/lub reklam, mogą łączyć informacje zebrane z naszej strony z innymi informacjami, które gromadzili niezależnie w związku z działaniami przeglądarki internetowej w ich sieci witryn.</p><p>Jeśli zdecydujesz się usunąć lub wyłączyć te pliki cookie, reklamy nadal będą wyświetlane, ale mogą one nie być odpowiednie dla Ciebie.</p>","title":"Targeting i reklama"},"level_tracking":{"content":"<p>Te pliki cookie służą do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki użytkownicy korzystają z naszej strony internetowej.</p><p>Na przykład te pliki cookie mogą śledzić takie rzeczy, jak czas spędzony na stronie lub odwiedzane strony, co pomaga nam zrozumieć, w jaki sposób możemy ulepszyć naszą witrynę internetową.</p><p>Informacje zebrane przez te pliki nie identyfikują żadnego konkretnego użytkownika.</p>","title":"Śledzenie i wydajność"},"preference_center":{"save":"Zapisz ustawienia","title":"Centrum ustawień cookie"},"preference_center_menu_and_content":{"more_information_content":"<h1>Więcej informacji</h1><p>W przypadku jakichkolwiek pytań dotyczących naszej polityki dotyczącej plików cookie i Twoich wyborów, skontaktuj się z nami.</p>","more_information_title":"Więcej informacji","your_privacy_content":"<h1>Twoja prywatność jest dla nas ważna.</h1>\\n<p>Pliki cookie to bardzo małe pliki tekstowe, które są tworzone i przechowywane na komputerze użytkownika podczas odwiedzania strony internetowej. Używamy plików cookie do różnych celów, w tym do ulepszania obsługi online na naszej stronie internetowej (na przykład, aby zapamiętać dane logowania do konta).</p><p>Możesz zmienić swoje ustawienia i odrzucić niektóre rodzaje plików cookie, które mają być przechowywane na twoim komputerze podczas przeglądania naszej strony. Możesz również usunąć wszystkie pliki cookie już zapisane na komputerze, ale pamiętaj, że usunięcie plików cookie może uniemożliwić korzystanie z części naszej strony internetowej.</p>","your_privacy_title":"Twoja prywatność"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Aktivno","always_active":"Uvek aktivno","change_settings":"Promeni moja podešavanja","find_out_more":"<p>Da saznate više, pogledajte našu <a href=\'%s\' target=\'_blank\'>Politiku o Kolačićima</a>.</p>","i_agree_text":"Slažem se","inactive":"Neaktivno","ok_text":"OK","text":"Mi koristimo kolačiće i ostale  tehnologije za praćenje kako bi unapredili vašu pretragu na našem veb sajtu, kako bi vam prikazali personalizovani sadržaj i ciljane reklame, analizirali posete na našem sajtu i razumeli odakle naši posetioci sajta dolaze. Pregledanjem našeg sajta, pristajete na korišćenje kolačić i drugih tehnologija praćenja.<br/>","title":"Mi koristimo kolačiće"},"level_functionality":{"content":"<p>Ovi kukiji koriste se za pružanje personalizovanijeg iskustva na našem veb sajtu i za pamćenje izbora koje koristite kada koristite našu veb sajt.</p><p>Na primer, možemo da koristimo kukije funkcionalnosti da bismo zapamtili vaše jezičke postavke ili upamtili vaše podatke za prijavu.</p>","title":"Funkcionalni kukiji"},"level_strictly_necessary":{"content":"<p>Ovi kukiji su neophodni za pružanje usluga dostupnih putem našeg veb sajta i za omogućavanje korišćenja određenih funkcija našeg veb sajta.</p><p>Bez ovih kolačića ne možemo vam pružiti određene usluge na našem veb sajtu.</p>","title":"Obavezni kukiji"},"level_targeting":{"content":"<p>Ovi kukiji koriste se za prikazivanje reklama koje će vas verovatno zanimati na osnovu vaših navika pregledavanja.</p><p>Ovi kukiji, opsluženi od strane naših dobavljača sadržaja i / ili oglašavanja, mogu kombinovati informacije koje su sakupili sa našeg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vašeg veb pretraživača kroz mrežu njihovih veb sajtova.</p><p>Ako odlučite da uklonite ili onemogućite ove ciljane ili reklamne kukije i dalje ćete videti oglase, ali oni možda neće biti relevantni za vas.</p>","title":"Ciljanje i oglašavanje kolačić"},"level_tracking":{"content":"<p>Ovi kukiji koriste se za prikupljanje informacija za analizu saobraćaja na našem veb sajtu i kako posetioci koriste naš veb sajt.</p><p>Na primer, ovi kolačići mogu pratiti stvari poput vremena koliko provodite na veb lokaciji ili stranicama koje posećujete što nam pomaže da shvatimo kako možemo da poboljšamo naš veb sajt.</p><p>Informacije prikupljene ovim kukijima za praćenje i performanse ne identifikuju nijednog pojedinačnog posetioca.</p>","title":"Praćenje i performanse kolačić"},"preference_center":{"save":"Sačuvaj moja podešavanja","title":"Centar za podešavanje kolačić"},"preference_center_menu_and_content":{"more_information_content":"<h1>Više informacija</h1><p>Za bilo koje upite vezane za našu politiku o kukijima i vašim izbor, molimo vas kontaktirajte nas.</p>","more_information_title":"Više informacija","your_privacy_content":"<h1>Vaša privatnost je važna za nas</h1>\\n<p>Kukiji su veoma mali tekstualni fajlovi koji su sačuvani na vašem računaru kada posećujete veb sajt. Mi koristimo kolačiće za različite namene i kako bi unapredili vaše onlajn iskustvo na našem veb sajtu (na primer, kako bi zapamtili vaše pristupne podatke).</p><p>Vi možete promeniti vaša podešavanja i odbiti određenu vrstu kolačića koji će biti sačuvani na vašem računaru dok pregledate naš veb sajt. Takođe možete izbisati bilo koji kuki koji je već sačuvan u vašem računaru, ali imajte na umu da brisanjem kolačić možete onemogućiti pristup nekim delovima našeg veb sajta.</p>","your_privacy_title":"Vaša privatnost"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"В действие са бисквитките","always_active":"Винаги в действие са бисквитките","change_settings":"Промяна на предпочитанията ми","find_out_more":"<p>За да научите повече, моля, посетете нашата <a href=\'%s\' target=\'_blank\'>страница Политика за бисквитки</a>.</p>","i_agree_text":"Съгласен съм","inactive":"Неактивни бисквитки","ok_text":"Добре","text":"Ние използваме бисквитки и други, проследяващи, технологии, за да подобрим сърфирането ви в нашия сайт, като ви покажем персонализирано съдържание и реклами, да анализираме трафика на нашия сайт и да разберем откъде идват нашите посетители. Разглеждайки нашия уебсайт, вие се съгласявате с използването на бисквитки и други технологии за проследяване.<br/>","title":"Ние използваме бисквитки"},"level_functionality":{"content":"<p>Тези бисквитки се използват, за да ви осигурят още по-персонализирано изживяване на нашия уебсайт и да бъдат запомнени изборите, които сте направили, когато използвахте нашия уебсайт.</p><p>Например: може да използваме функционални бисквитки, за да запомним предпочитания ви език или да запомним детайли по влизането ви в уебсайта.</p>","title":"Функционални бисквитки"},"level_strictly_necessary":{"content":"<p>Тези бисквитки са съществен елемент, който осигурява услуги, достъпни чрез нашия уебсайт и дават възможност за използване на определени функции на нашия уебсайт.</p><p>Без тези бисквитки не можем да ви доставим определени услуги на нашия уебсайт.</p>","title":"Строго задължителни бисквитки"},"level_targeting":{"content":"<p>Тези бисквитки се използват за показване на реклама, която вероятно ще ви заинтересова въз основа на навиците ви за сърфиране.</p><p>Тези бисквитки, обслужвани от нашите доставчици на съдържание и / или реклама, могат да комбинират информацията, която са събрали от нашия уебсайт, с друга информация, която са събрали независимо, свързана с дейностите на вашия уеб браузър в тяхната мрежа от уебсайтове.</p><p>Ако решите да премахнете или деактивирате тези бисквитки за определени потребителски групи или реклама, пак ще видите реклами, но те може да не са от подходящи за вас.</p>","title":"Насочване и рекламни бисквитки"},"level_tracking":{"content":"<p>Тези бисквитки се използват за събиране на информация за анализ на трафика към нашия уебсайт и как посетителите използват нашия уебсайт.</p><p>Например, тези бисквитки могат да проследяват неща като колко време прекарвате на уебсайта или на посещаваните от вас страници, което ни помага да разберем как можем да подобрим нашия сайт за вас.</p><p>Информацията, събрана чрез тези бисквитки за проследяване и производителност, не идентифицира всеки отделен посетител.</p>","title":"Бисквитки за проследяване и за производителност"},"preference_center":{"save":"Запази предпочитанията ми","title":"Център за настройка на бисквитки"},"preference_center_menu_and_content":{"more_information_content":"<h1>Още информация</h1><p>За всякакви въпроси във връзка с нашата политика за бисквитките и вашите избори, моля, свържете се с нас.</p>","more_information_title":"Още информация","your_privacy_content":"<h1>Вашата поверителност е важна за нас</h1>\\n<p>Бисквитките са много малки текстови файлове, които се съхраняват на вашия компютър, когато посетите уебсайт. Ние използваме бисквитки за множество от цели и да подобрим сърфирането ви из нашия сайт (например: за да запомним детайлите на вашия акаунт за влизане).</p><p>Можете да промените предпочитанията си и да откажете определени видове бисквитки, които да се съхраняват на вашия компютър, докато сърфирате в нашия уебсайт. Можете също да премахнете някои бисквитки, които вече са запазени на вашия компютър, но имайте предвид, че изтриването на бисквитки може да ви попречи да използвате части от нашия уебсайт.</p>","your_privacy_title":"Вашата поверителност"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Ενεργό","always_active":"Πάντα ενεργό","change_settings":"Αλλαγή των προτιμήσεών μου","find_out_more":"<p>Για να μάθετε περισσότερα, παρακαλούμε επισκεφθείτε την σελίδα περί <a href=\'%s\' target=\'_blank\'>πολιτικής cookies</a>.</p>","i_agree_text":"Συμφωνώ","inactive":"Ανενεργό","ok_text":"OK","text":"Χρησιμοποιούμε cookies και άλλες τεχνολογίες εντοπισμού για την βελτίωση της εμπειρίας περιήγησης στην ιστοσελίδα μας, για την εξατομίκευση περιεχομένου και διαφημίσεων, την παροχή λειτουργιών κοινωνικών μέσων και την ανάλυση της επισκεψιμότητάς μας. Αν συνεχίσετε να χρησιμοποιείτε την ιστοσελίδα μας, συναινείτε στη χρήση των cookies μας.<br/>","title":"Αυτή η ιστοσελίδα χρησιμοποιεί cookies"},"level_functionality":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να σας παρέχουν μία πιο προσωποποιημένη εμπειρία στην ιστοσελίδα μας και για να θυμούνται επιλογές που κάνετε όταν χρησιμοποιείτε την ιστοσελίδα μας.</p><p>Για παράδειγμα, μπορεί να χρησιμοποιήσουμε cookies λειτουργικότητας για να θυμόμαστε την επιλογή γλώσσας ή τα στοιχεία εισόδου σας.</p>","title":"Cookies Λειτουργικότητας"},"level_strictly_necessary":{"content":"<p>Τα απαραίτητα cookies βοηθούν στο να γίνει χρηστική μία ιστοσελίδα, επιτρέποντας βασικές λειτουργίες όπως την πλοήγηση και την πρόσβαση σε ασφαλείς περιοχές της ιστοσελίδας.</p><p>Η ιστοσελίδα δεν μπορεί να λειτουργήσει σωστά χωρίς αυτά τα cookies.</p>","title":"Άκρως απαραίτητα cookies"},"level_targeting":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να δείχνουν διαφημίσεις που μπορεί να σας ενδιαφέρουν με βάση τις συνήθειες περιήγησής σας στο Διαδίκτυο.</p><p>Αυτά τα cookies, παρέχονται από τους παρόχους περιεχομένου ή/και διαφημίσεων, μπορεί να συνδυάζουν πληροφορίες που συλλέγουν από την ιστοσελίδα μας με άλλες που έχουν ανεξάρτητα συλλέξει από άλλα δίκτυα ή ιστοσελίδες σχετικά με τις δραστηριότητές σας στον φυλλομετρητή σας.</p><p>Εάν επιλέξετε να αφαιρέσετε ή να απενεργοποιήσετε αυτά τα cookies, θα συνεχίσετε να βλέπετε διαφημίσεις, αλλά αυτές μπορεί να μην είναι πλέον σχετικές με τα ενδιαφέροντά σας.</p>","title":"Cookies εξατομικευμένου περιεχομένου και διαφημίσεων"},"level_tracking":{"content":"<p>Αυτά τα cookies χρησιμοποιούνται για να συλλέγουν πληροφορίες σχετικές με την ανάλυση της επισκεψιμότητας της ιστοσελίδας μας και με το πώς οι χρήστες την χρησιμοποιούν.</p><p>Για παράδειγμα, αυτά τα cookies μπορεί να εντοπίσουν πόσο χρόνο αφιερώνετε στην ιστοσελίδα μας ή ποιες σελίδες της επισκέπτεστε, πράγμα που μας βοηθάει να καταλάβουμε πώς να βελτιώσουμε την ιστοσελίδα μας.</p><p>Οι πληροφορίες που συλλέγονται μέσω αυτών των cookies δεν αναγνωρίζουν μεμονωμένους χρήστες.</p>","title":"Cookies εντοπισμού και αποδοτικότητας"},"preference_center":{"save":"Αποθήκευση των προτιμήσεών μου","title":"Κέντρο Προτιμήσεων Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Περισσότερες πληροφορίες.</h1><p>Για οποιαδήποτε απορία σε σχέση με την πολιτική μας σχετικά με τα cookies και τις επιλογές σας, παρακαλούμε να έρθετε σε επαφή μαζί μας.</p>","more_information_title":"Περισσότερες πληροφορίες","your_privacy_content":"<h1>Η ιδιωτικότητά σας είναι σημαντική για εμάς.</h1>\\n<p>Τα cookies είναι πολύ μικρά αρχεία κειμένου που αποθηκεύονται στον υπολογιστή σας όταν επισκέπτεστε μια ιστοσελίδα. Χρησιμοποιούμε cookies για διάφορους λόγους και για να βελτιώσουμε την διαδικτυακή σας εμπειρία στην ιστοσελίδα μας (π.χ., για υπενθύμιση των στοιχείων πρόσβασής σας στην ιστοσελίδα).</p><p>Μπορείτε να αλλάξετε τις προτιμήσεις σας και να μην επιτρέψετε σε κάποιους τύπους cookies να αποθηκευτούν στον υπολογιστή σας όσο περιηγείστε στην ιστοσελίδα μας. Μπορείτε επίσης να διαγράψετε οποιαδήποτε cookies είναι ήδη αποθηκευμένα στον υπολογιστή σας, αλλά να έχετε υπόψιν ότι διαγράφοντας cookies μπορεί να σας αποτρέψει από το να χρησιμοποιήσετε μέρη της ιστοσελίδας μας.</p>","your_privacy_title":"Η ιδιωτικότητά σας"}}')
}, function (e) {
    e.exports = JSON.parse('{"dialog":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","change_settings":"Newid fy newisiadau","find_out_more":"<p>I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>Polisi Cwcis</a>.</p>","i_agree_text":"Rwy\'n cytuno","inactive":"Anweithredol","ok_text":"Iawn","text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr. Trwy bori ar ei gwefan, rydych yn cytuno y cawn ddefnyddio cwcis a thechnolegau tracio eraill.<br/>","title":"Rydym yn defnyddio cwcis"},"level_functionality":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.</p><p>Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.</p>","title":"Cwcis swyddogaeth"},"level_strictly_necessary":{"content":"<p>Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.</p><p>Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.</p>","title":"Cwcis hollol hanfodol"},"level_targeting":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.</p><p>Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.</p><p>Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi. </p>","title":"Cwcis targedu a hysbysebu"},"level_tracking":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.</p><p>Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld â hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.<p>Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.</p>","title":"Cwcis tracio a pherfformiad"},"preference_center":{"save":"Cadw fy newisiadau","title":"Canolfan Dewisiadau Cwcis"},"preference_center_menu_and_content":{"more_information_content":"<h1>Rhagor o wybodaeth.</h1><p>Os oes gennych chi unrhyw ymholiadau yn ymwneud â\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu â ni.</p>","more_information_title":"Rhagor o wybodaeth","your_privacy_content":"<h1>Mae eich preifatrwydd yn bwysig i ni.</h1>\\n<p>Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld â gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).</p><p>Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.</p>","your_privacy_title":"Eich preifatrwydd"}}')
}, function (e, o, t) {
    var n = t(21);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function (e, o, t) {
    (e.exports = t(0)(!1)).push([e.i, '.cc_css_reboot{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;margin:0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.cc_css_reboot *,.cc_css_reboot *::before,.cc_css_reboot *::after{box-sizing:border-box}.cc_css_reboot a,.cc_css_reboot li,.cc_css_reboot p,.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6,.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.cc_css_reboot{width:device-width}}.cc_css_reboot article,.cc_css_reboot aside,.cc_css_reboot figcaption,.cc_css_reboot figure,.cc_css_reboot footer,.cc_css_reboot header,.cc_css_reboot hgroup,.cc_css_reboot main,.cc_css_reboot nav,.cc_css_reboot section{display:block}.cc_css_reboot [tabindex="-1"]:focus{outline:0 !important}.cc_css_reboot hr{box-sizing:content-box;height:0;overflow:visible}.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6{margin-top:0;margin-bottom:0.5rem;color:#000}.cc_css_reboot p{margin-top:0;margin-bottom:1rem}.cc_css_reboot abbr[title],.cc_css_reboot abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}.cc_css_reboot address{margin-bottom:1rem;font-style:normal;line-height:inherit}.cc_css_reboot div{display:block}.cc_css_reboot ol,.cc_css_reboot ul,.cc_css_reboot dl{margin-top:0;margin-bottom:1rem}.cc_css_reboot ol ol,.cc_css_reboot ul ul,.cc_css_reboot ol ul,.cc_css_reboot ul ol{margin-bottom:0}.cc_css_reboot b,.cc_css_reboot strong{font-weight:bolder}.cc_css_reboot small{font-size:80%}.cc_css_reboot sub,.cc_css_reboot sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.cc_css_reboot sub{bottom:-.25em}.cc_css_reboot sup{top:-.5em}.cc_css_reboot a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.cc_css_reboot a:hover{color:#0056b3;text-decoration:underline}.cc_css_reboot a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):hover,.cc_css_reboot a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):focus{outline:0}.cc_css_reboot img{vertical-align:middle;border-style:none}.cc_css_reboot svg:not(:root){overflow:hidden}.cc_css_reboot table{border-collapse:collapse}.cc_css_reboot caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom}.cc_css_reboot th{text-align:inherit}.cc_css_reboot label{display:inline-block;margin-bottom:0.5rem}.cc_css_reboot button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none;transition:all ease .3s}.cc_css_reboot button:focus{outline:none}.cc_css_reboot select{border-style:none}.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select,.cc_css_reboot optgroup,.cc_css_reboot textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.cc_css_reboot button,.cc_css_reboot input{overflow:visible}.cc_css_reboot button,.cc_css_reboot select{text-transform:none}.cc_css_reboot button,.cc_css_reboot html [type="button"],.cc_css_reboot [type="reset"],.cc_css_reboot [type="submit"]{-webkit-appearance:button}.cc_css_reboot button::-moz-focus-inner,.cc_css_reboot [type="button"]::-moz-focus-inner,.cc_css_reboot [type="reset"]::-moz-focus-inner,.cc_css_reboot [type="submit"]::-moz-focus-inner{padding:0;border-style:none}.cc_css_reboot input[type="radio"],.cc_css_reboot input[type="checkbox"]{box-sizing:border-box;padding:0}.cc_css_reboot input[type="date"],.cc_css_reboot input[type="time"],.cc_css_reboot input[type="datetime-local"],.cc_css_reboot input[type="month"]{-webkit-appearance:listbox}.cc_css_reboot textarea{overflow:auto;resize:vertical}.cc_css_reboot fieldset{min-width:0;padding:0;margin:0;border:0}.cc_css_reboot legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}.cc_css_reboot progress{vertical-align:baseline}.cc_css_reboot [type="number"]::-webkit-inner-spin-button,.cc_css_reboot [type="number"]::-webkit-outer-spin-button{height:auto}.cc_css_reboot [type="search"]{outline-offset:-2px;-webkit-appearance:none}.cc_css_reboot [type="search"]::-webkit-search-cancel-button,.cc_css_reboot [type="search"]::-webkit-search-decoration{-webkit-appearance:none}.cc_css_reboot ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.cc_css_reboot [hidden]{display:none !important}\n', ""])
}, function (e, o) {
    e.exports = function (e) {
        var o = "undefined" != typeof window && window.location;
        if (!o) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var t = o.protocol + "//" + o.host, n = t + o.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (e, o) {
            var i, a = o.trim().replace(/^"(.*)"$/, (function (e, o) {
                return o
            })).replace(/^'(.*)'$/, (function (e, o) {
                return o
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? t + a : n + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        }))
    }
}, function (e, o, t) {
    var n = t(24);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function (e, o, t) {
    (e.exports = t(0)(!1)).push([e.i, '.cc_overlay_lock{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.8);z-index:9999999999}.cc_overlay_lock.hidden{display:none}.cc_dialog{background-color:#f2f2f2;color:#111;z-index:99999999999;font-size:16px;padding:3rem}.cc_dialog.hidden{display:none}.cc_dialog.headline{bottom:0;max-width:100%;position:fixed}.cc_dialog.simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}.cc_dialog.interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}.cc_dialog.standalone{position:fixed;top:0;left:0;height:100%;width:100%}.cc_dialog .cc_dialog_headline{font-size:24px;font-weight:600}.cc_dialog .cc_dialog_text{font-size:16px}.cc_dialog button{font-weight:bold;font-size:14px}.cc_dialog button.cc_b_ok{background-color:blue;color:#fff}.cc_dialog button.cc_b_ok:active{background:#136d13}.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111;margin-left:0.25rem !important}.cc_dialog button.cc_b_cp:active{background:#f2f2f2}.cookie-consent-preferences-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.5);z-index:999999999999;top:0;left:0;display:none}.cookie-consent-preferences-overlay.visible{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{width:100%;display:flex;background:#fff;flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container>div{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2,.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{margin:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2{font-size:20px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{font-family:Arial, sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry{width:100%;display:none;padding:25px;box-sizing:border-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry[active=true]{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry h1{font-size:24px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{padding:20px 10px;font-size:14px;color:#333;display:none !important}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a{color:#999}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{margin:10px 0 10px 10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:hover{opacity:1}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent{position:absolute;margin:2px 0 0 16px;cursor:pointer}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label{position:relative;padding:4px 0 0 50px;line-height:2.0em;cursor:pointer;display:inline;font-size:14px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:after{margin-left:16px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:before{background:#55D069}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm{position:absolute;margin:5px 0 0 10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label{position:relative;padding:0 0 0 32px;line-height:1.3em}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:before{content:"";position:absolute;display:block;left:0;top:0;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:25px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:after{content:"";position:absolute;display:block;left:0px;top:0px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:15px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:hover:after{box-shadow:0 0 3px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:after{margin-left:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:before{background:#55D069}@media screen and (max-width: 600px){.cookie-consent-preferences-overlay{overflow-y:scroll}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{align-items:center;padding:15px 0 0 0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{padding:15px 0;min-height:20px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right:0}}\n', ""])
}, function (e, o, t) {
    var n = t(26);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function (e, o, t) {
    (e.exports = t(0)(!1)).push([e.i, ".dark.cc_dialog{background-color:#111;color:#fff}.dark.cc_dialog .cc_dialog_headline{color:#fff}.dark.cc_dialog .cc_dialog_text{color:#fff}.dark.cc_dialog button.cc_b_ok{color:#000;background-color:#ff0}.dark.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#212121;color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#f5f5f5 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#cce5ff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#212121;border-top-color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:#ff0;color:#000}\n", ""])
}, function (e, o, t) {
    var n = t(28);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function (e, o, t) {
    (e.exports = t(0)(!1)).push([e.i, ".light.cc_dialog{background-color:#f2f2f2;color:#111}.light.cc_dialog .cc_dialog_headline{color:#111}.light.cc_dialog .cc_dialog_text{color:#111}.light.cc_dialog button.cc_b_ok{color:#fff;background-color:blue}.light.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#fff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;border-bottom:1px solid #ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#fbfbfb !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#111 !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#007bff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;border-top-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:green;color:#fff}\n", ""])
}, function (e, o, t) {
    "use strict";
    t.r(o), t.d(o, "run", (function () {
        return J
    })), t.d(o, "consentDebugger", (function () {
        return i
    }));
    t(20), t(23), t(25), t(27);
    var n, i, a = function () {
            function e() {
            }

            return e.insertCss = function (e) {
                var o = document.querySelector("head"), t = document.createElement("link");
                t.setAttribute("href", e), t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), o.appendChild(t)
            }, e.appendChild = function (e, o, t) {
                var n, i;
                return void 0 === t && (t = null), n = "string" == typeof e ? document.querySelector(e) : e, i = "string" == typeof o ? document.querySelector(o) : o, "afterbegin" === t ? n.insertAdjacentElement("afterbegin", i) : n.insertAdjacentElement("beforeend", i), !0
            }, e.setCookie = function (e, o, t) {
                void 0 === t && (t = 62);
                var n = new Date;
                n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3);
                var i = "; expires=" + n.toUTCString();
                return document.cookie = e + "=" + (o || "") + i + "; path=/", !0
            }, e.getCookie = function (e) {
                for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    for (var i = t[n]; " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(o)) return i.substring(o.length, i.length)
                }
                return null
            }, e.removeCookie = function (e) {
                document.cookie = e + "=; Max-Age=-99999999;"
            }, e.registerEvent = function (e) {
                var o = document.createEvent("Event");
                return o.initEvent(e, !0, !0), o
            }, e.searchObjectsArray = function (e, o, t) {
                for (var n in e) {
                    if (e[n][o] === t) return !0
                }
                return !1
            }, e.magicTransform = function (e) {
                return decodeURIComponent(atob(e).split("").map((function (e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join(""))
            }, e.isValidUrl = function (e) {
                return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
            }, e
        }(), r = t(2), s = t(3), c = t(4), l = t(5), p = t(6), d = t(7), u = t(8), k = t(9), v = t(10), m = t(11),
        f = t(12), g = t(13), _ = t(14), h = t(15), b = t(16), y = t(17), w = t(18), z = t(19), j = function () {
            function e(e) {
                this.cookieConsent = e, this.userLang = "en", this.initAvailableLanguages(), this.initDefaultTranslations(), this.detectUserLanguage()
            }

            return e.prototype.detectUserLanguage = function () {
                var e = "en";
                if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                    if (e.indexOf("-") > 0) {
                        var o = e.split("-");
                        e = o[0]
                    }
                    this.cookieConsent.log("[i18n] Detected user default language: " + e, "info")
                } else e = this.cookieConsent.ownerSiteLanguage;
                var t = e.toLowerCase.toString();
                this.availableTranslations[t] ? this.userLang = t : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? this.userLang = this.cookieConsent.ownerSiteLanguage : this.userLang = "en"
            }, e.prototype.initDefaultTranslations = function () {
                this.availableTranslations = {
                    en: r,
                    de: s,
                    fr: c,
                    es: l,
                    it: p,
                    nl: d,
                    pt: u,
                    fi: k,
                    hu: v,
                    hr: m,
                    da: f,
                    ro: g,
                    sl: _,
                    pl: h,
                    sr: b,
                    bg: y,
                    el: w,
                    cy: z
                }, this.cookieConsent.log("[i18n] Default translations initialized", "info")
            }, e.prototype.initAvailableLanguages = function () {
                this.availableLanguages = [{value: "en", title: "English"}, {value: "de", title: "German"}, {
                    value: "fr",
                    title: "French"
                }, {value: "es", title: "Spanish"}, {value: "it", title: "Italian"}, {
                    value: "nl",
                    title: "Dutch"
                }, {value: "pt", title: "Portugese"}, {value: "fi", title: "Finnish"}, {
                    value: "hu",
                    title: "Hungarian"
                }, {value: "hr", title: "Croatian"}, {value: "da", title: "Danish"}, {
                    value: "ro",
                    title: "Romanian"
                }, {value: "sl", title: "Slovenian"}, {value: "pl", title: "Polish"}, {
                    value: "sr",
                    title: "Serbian"
                }, {value: "bg", title: "Bulgarian"}, {value: "el", title: "Greek"}, {
                    value: "cy",
                    title: "Welsh"
                }], this.cookieConsent.log("[i18n] Default languages initialized", "info")
            }, e.prototype.$t = function (e, o, t) {
                void 0 === t && (t = null);
                var n = this.availableTranslations[this.userLang][e][o];
                return "string" == typeof t ? n = n.replace("%s", t) : Array.isArray(t) && t.map((function (e, o) {
                    var i = t[o];
                    n = n.replace("%s", i)
                })), n || ""
            }, e
        }(), C = (n = function (e, o) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, o) {
                e.__proto__ = o
            } || function (e, o) {
                for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t])
            })(e, o)
        }, function (e, o) {
            function t() {
                this.constructor = e
            }

            n(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
        }), x = function () {
            function e(e) {
                this.scripts = {}, this.cookieConsent = e, this.cookieConsent.log("Javascript items initialized.", "info"), this.readScripts()
            }

            return e.prototype.readScripts = function () {
                var e = document.querySelectorAll('script[type="text/plain"]');
                for (var o in e) {
                    var t = e[o];
                    "object" == typeof t && this._noticeScriptIfValid(t)
                }
            }, e.prototype._noticeScriptIfValid = function (e) {
                var o = e.getAttribute("cookie-consent");
                !0 === a.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", o) ? (this.cookieConsent.log("Javascript with valid cookie consent found", "info"), this.cookieConsent.log(e, "info"), void 0 === this.scripts[o] && (this.scripts[o] = []), this.scripts[o].push(e)) : this.cookieConsent.log("Invalid cookie consent level for javascript sript: " + o, "warning")
            }, e.prototype.enableScriptsByLevel = function (e) {
                for (var o in this.scripts[e]) try {
                    var t = this.scripts[e][o], n = document.createElement("script");
                    n.setAttribute("type", "text/javascript"), n.setAttribute("initial-cookie-consent", t.getAttribute("cookie-consent")), null !== t.getAttribute("src") && n.setAttribute("src", t.getAttribute("src")), n.text = t.innerHTML, a.appendChild("head", n), t.parentNode.removeChild(t), delete this.scripts[e][o]
                } catch (e) {
                    this.cookieConsent.log("Got an error while trying to activate a script template, message: " + e.message.toString(), "log")
                }
            }, e
        }(), L = function () {
            function e(e) {
                this.acceptedLevels = {}, this.userAccepted = !1, this.consentLevelCookieName = "cookie_consent_level", this.consentAcceptedCookieName = "cookie_consent_user_accepted", this.loadCookiesUntilAndInclude = "strictly-necessary", this.cookieConsent = e, this.cookieConsent.log("UserConsent initialized.", "info"), this.checkIfUserAccepted(), this.getUserLevels()
            }

            return e.prototype.checkIfUserAccepted = function () {
                "true" === a.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0)
            }, e.prototype.markUserAccepted = function () {
                this.userAccepted = !0, !1 === this.cookieConsent.isDemo && a.setCookie(this.consentAcceptedCookieName, "true")
            }, e.prototype.getUserLevels = function () {
                var e = a.getCookie(this.consentLevelCookieName), o = {};
                try {
                    o = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    o = null
                }
                if (null === o) document.dispatchEvent(this.cookieConsent.events.cc_freshUser), this.acceptedLevels["strictly-necessary"] = !0, this.acceptedLevels.functionality = !1, this.acceptedLevels.tracking = !1, this.acceptedLevels.targeting = !1; else {
                    for (var t in this.cookieConsent.cookieLevels.cookieLevels) {
                        var n = this.cookieConsent.cookieLevels.cookieLevels[t].id;
                        !0 === o[n] ? this.acceptedLevels[n] = !0 : this.acceptedLevels[n] = !1, this.saveCookie()
                    }
                    this.cookieConsent.log(this.acceptedLevels, "info", "table")
                }
            }, e.prototype.enableAllCookies = function () {
                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    this.acceptLevel(o)
                }
            }, e.prototype.loadCookiesUntilMaxLevel = function () {
                var e = !1;
                for (var o in this.cookieConsent.cookieLevels.cookieLevels) {
                    if (e) break;
                    var t = this.cookieConsent.cookieLevels.cookieLevels[o].id;
                    t === this.loadCookiesUntilAndInclude && (e = !0), !1 !== this.acceptedLevels[t] && this.cookieConsent.javascriptItems.enableScriptsByLevel(t)
                }
            }, e.prototype.loadAcceptedCookies = function () {
                for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                    var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                    !1 !== this.acceptedLevels[o] && this.cookieConsent.javascriptItems.enableScriptsByLevel(o)
                }
            }, e.prototype.checkIsAccepted = function (e) {
                var o = !1;
                return e in this.acceptedLevels && !0 === this.acceptedLevels[e] && (o = !0), o
            }, e.prototype.acceptLevel = function (e) {
                return this.cookieConsent.log("Accepted cookie level: " + e, "info"), this.acceptedLevels[e] = !0, this.saveCookie()
            }, e.prototype.rejectLevel = function (e) {
                return this.cookieConsent.log("Rejected cookie level: " + e, "info"), this.acceptedLevels[e] = !1, this.saveCookie()
            }, e.prototype.saveCookie = function () {
                var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
                return a.setCookie(this.consentLevelCookieName, e), this.cookieConsent.log("Saved cookies containing the user consent level", "info"), !0
            }, e
        }(), S = function () {
            this.cc_dialogShown = a.registerEvent("cc_dialogShown"), this.cc_dialogOkPressed = a.registerEvent("cc_dialogOkPressed"), this.cc_dialogPreferencesPressed = a.registerEvent("cc_dialogPreferencesPressed"), this.cc_userLanguageChanged = a.registerEvent("cc_userLanguageChanged"), this.cc_preferencesSavePressed = a.registerEvent("cc_preferencesSavePressed"), this.cc_freshUser = a.registerEvent("cc_freshUser"), this.cc_userChangedConsent = a.registerEvent("cc_userChangedConsent")
        }, A = function () {
            function e(e) {
                this.cookieConsent = e, this.cc_dialogShown(), this.cc_dialogOkPressed(), this.cc_dialogPreferencesPressed(), this.cc_userLanguageChanged(), this.cc_preferencesSavePressed(), this.cc_freshUser(), this.cc_userChangedConsent()
            }

            return e.prototype.cc_dialogShown = function () {
                var e = this;
                window.addEventListener("cc_dialogShown", (function () {
                    e.cookieConsent.log("cc_dialogShown triggered", "event")
                }))
            }, e.prototype.cc_dialogOkPressed = function () {
                var e = this;
                document.addEventListener("cc_dialogOkPressed", (function () {
                    e.cookieConsent.log("cc_dialogOkPressed triggered", "event"), e.cookieConsent.consentType instanceof M ? (e.cookieConsent.userConsent.enableAllCookies(), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies()) : e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.consentBanner.hideDialog()
                }))
            }, e.prototype.cc_dialogPreferencesPressed = function () {
                var e = this;
                window.addEventListener("cc_dialogPreferencesPressed", (function () {
                    e.cookieConsent.log("cc_dialogPreferencesPressed triggered", "event"), e.cookieConsent.consentPreferences.showPreferences()
                }))
            }, e.prototype.cc_userLanguageChanged = function () {
                var e = this;
                window.addEventListener("cc_userLanguageChanged", (function () {
                    e.cookieConsent.log("cc_userLanguageChanged triggered", "event")
                }))
            }, e.prototype.cc_preferencesSavePressed = function () {
                var e = this;
                window.addEventListener("cc_preferencesSavePressed", (function () {
                    e.cookieConsent.log("cc_preferencesSavePressed triggered", "event"), e.cookieConsent.userConsent.markUserAccepted(), e.cookieConsent.userConsent.loadAcceptedCookies(), e.cookieConsent.consentPreferences.hidePreferences(), e.cookieConsent.consentBanner.hideDialog()
                }))
            }, e.prototype.cc_freshUser = function () {
                var e = this;
                window.addEventListener("cc_freshUser", (function () {
                    e.cookieConsent.log("cc_freshUser triggered", "event")
                }))
            }, e.prototype.cc_userChangedConsent = function () {
                var e = this;
                window.addEventListener("cc_userChangedConsent", (function () {
                    e.cookieConsent.log("cc_userChangedConsent triggered", "event")
                }))
            }, e
        }(), E = function () {
            function e(e) {
                this.cookieConsent = e, this.initDefaultLevels(), this.initPreferenceItems()
            }

            return e.prototype.languageChanged = function () {
                this.initDefaultLevels(), this.initPreferenceItems()
            }, e.prototype.initDefaultLevels = function () {
                this.cookieLevels = [{
                    id: "strictly-necessary",
                    title: this.cookieConsent.i18n.$t("level_strictly_necessary", "title"),
                    content: this.cookieConsent.i18n.$t("level_strictly_necessary", "content")
                }, {
                    id: "functionality",
                    title: this.cookieConsent.i18n.$t("level_functionality", "title"),
                    content: this.cookieConsent.i18n.$t("level_functionality", "content")
                }, {
                    id: "tracking",
                    title: this.cookieConsent.i18n.$t("level_tracking", "title"),
                    content: this.cookieConsent.i18n.$t("level_tracking", "content")
                }, {
                    id: "targeting",
                    title: this.cookieConsent.i18n.$t("level_targeting", "title"),
                    content: this.cookieConsent.i18n.$t("level_targeting", "content")
                }]
            }, e.prototype.initPreferenceItems = function () {
                this.preferenceItems = [{
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_title"),
                    content_container: "content_your_privacy",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "your_privacy_content")
                }];
                for (var e = 0, o = this.cookieLevels; e < o.length; e++) {
                    var t = o[e];
                    this.preferenceItems.push({
                        id: t.id,
                        title: t.title,
                        content_container: "content_" + t.id,
                        content: "\n<h1>" + t.title + "</h1>\n<p>" + t.content + "</p>\n"
                    })
                }
                this.preferenceItems.push({
                    title: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_title"),
                    content_container: "content_more_information",
                    content: this.cookieConsent.i18n.$t("preference_center_menu_and_content", "more_information_content")
                }), null !== this.cookieConsent.cookiesPolicyUrl && a.isValidUrl(this.cookieConsent.cookiesPolicyUrl) && (this.preferenceItems[this.preferenceItems.length - 1].content = this.preferenceItems[this.preferenceItems.length - 1].content + this.cookieConsent.i18n.$t("dialog", "find_out_more", this.cookieConsent.cookiesPolicyUrl))
            }, e
        }(), P = function () {
            function e(e) {
                this.cpOverlay = null, this.cookieConsent = e
            }

            return e.prototype.listenToUserButtonToOpenPreferences = function (e) {
                var o = this, t = document.querySelector(e);
                t && t.addEventListener("click", (function () {
                    document.dispatchEvent(o.cookieConsent.events.cc_dialogPreferencesPressed), o.showPreferences()
                }))
            }, e.prototype.showPreferences = function () {
                null === this.cpOverlay && (this.cpOverlay = this.createPreferencesOverlayAndDialog(), a.appendChild("body", this.cpOverlay)), this.cpOverlay.classList.add("visible"), this.cookieConsent.log("Cookie preferences dialog was shown", "info")
            }, e.prototype.hidePreferences = function () {
                this.cpOverlay.classList.remove("visible"), this.cookieConsent.log("Cookie preferences dialog was hidden", "info")
            }, e.prototype.refreshPreferences = function () {
                if (null !== this.cpOverlay) return this.cpOverlay.parentNode.removeChild(this.cpOverlay), this.cpOverlay = null, this.showPreferences()
            }, e.prototype.createPreferencesOverlayAndDialog = function () {
                var e = document.createElement("div");
                e.classList.add("cookie-consent-preferences-overlay"), e.classList.add(this.cookieConsent.colorPalette.getClass()), e.classList.add("cc_css_reboot");
                var o = document.createElement("div");
                o.classList.add("cookie-consent-preferences-dialog");
                var t = document.createElement("div");
                t.classList.add("cc_cp_container");
                var n = document.createElement("div");
                n.classList.add("cc_cp_head");
                var i = document.createElement("div");
                if (i.classList.add("cc_cp_head_title"), this.cookieConsent.ownerWebsiteName.length > 2) {
                    var r = document.createElement("p");
                    r.innerText = this.cookieConsent.ownerWebsiteName, a.appendChild(i, r)
                }
                var s = document.createElement("h2");
                s.innerHTML = this.cookieConsent.i18n.$t("preference_center", "title"), a.appendChild(i, s);
                var c = document.createElement("div");
                c.classList.add("cc_cp_head_lang_selector");
                var l = this.obtainLanguageSelector();
                a.appendChild(c, l), a.appendChild(n, i), a.appendChild(n, c);
                var p = document.createElement("div");
                p.classList.add("cc_cp_content");
                var d = this.getMenuContainer(), u = this.getContentContainer();
                a.appendChild(p, d), a.appendChild(p, u);
                var k = this.getFooterContainer();
                return a.appendChild(t, n), a.appendChild(t, p), a.appendChild(t, k), a.appendChild(o, t), a.appendChild(e, o), e
            }, e.prototype.obtainLanguageSelector = function () {
                var e = this, o = document.createElement("select");
                return [].forEach.call(e.cookieConsent.i18n.availableLanguages, (function (t) {
                    var n = document.createElement("option");
                    n.text = t.title, n.value = t.value, e.cookieConsent.i18n.userLang === n.value && n.setAttribute("selected", "selected"), o.add(n)
                })), o.addEventListener("change", (function () {
                    e.cookieConsent.i18n.userLang = o.value, e.cookieConsent.cookieLevels.languageChanged(), e.refreshPreferences(), document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged)
                })), o
            }, e.prototype.getContentContainer = function () {
                var e = this, o = document.createElement("div");
                o.classList.add("cc_cp_m_content");
                var t = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach((function (n) {
                    var i = document.createElement("div");
                    if (i.classList.add("cc_cp_m_content_entry"), i.setAttribute("content_layout", n.content_container), i.setAttribute("active", "false"), i.innerHTML = n.content, 0 === t && i.setAttribute("active", "true"), t++, n.id) {
                        var r = e._getLevelCheckbox(n);
                        a.appendChild(i, r)
                    }
                    a.appendChild(o, i)
                })), o
            }, e.prototype.getMenuContainer = function () {
                var e = this, o = document.createElement("ul");
                o.classList.add("cc_cp_m_menu");
                var t = 0;
                return e.cookieConsent.cookieLevels.preferenceItems.forEach((function (n) {
                    var i = document.createElement("li"), r = document.createElement("a");
                    r.setAttribute("href", "#"), r.setAttribute("t", n.content_container), r.innerHTML = n.title, 0 === t && i.setAttribute("active", "true"), t++, r.addEventListener("click", (function (o) {
                        o.preventDefault(), e.cookieConsent.log("Preferences menu item clicked: " + n.title, "info");
                        var t = document.querySelectorAll('li[active="true"]');
                        [].forEach.call(t, (function (e) {
                            e.setAttribute("active", "false")
                        })), i.setAttribute("active", "true");
                        try {
                            var a = document.querySelectorAll("div[content_layout]");
                            [].forEach.call(a, (function (e) {
                                e.setAttribute("active", "false")
                            })), document.querySelector('div[content_layout="' + n.content_container + '"]').setAttribute("active", "true")
                        } catch (o) {
                        }
                    })), a.appendChild(i, r), a.appendChild(o, i)
                })), o
            }, e.prototype.getFooterContainer = function () {
                var e = this, o = document.createElement("div");
                o.classList.add("cc_cp_footer");
                var t = document.createElement("div");
                t.classList.add("cc_cp_f_powered_by"), t.innerHTML = a.magicTransform("Q29va2llIENvbnNlbnQgYnkgPGEgaHJlZj0iaHR0cHM6Ly93d3cuZnJlZXByaXZhY3lwb2xpY3kuY29tL2ZyZWUtY29va2llLWNvbnNlbnQvIiB0YXJnZXQ9Il9ibGFuayI+RnJlZVByaXZhY3lQb2xpY3kuY29tPC9hPg==");
                var n = document.createElement("div");
                n.classList.add("cc_cp_f_save");
                var i = document.createElement("button");
                return i.innerHTML = e.cookieConsent.i18n.$t("preference_center", "save"), i.addEventListener("click", (function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_preferencesSavePressed)
                })), a.appendChild(n, i), a.appendChild(o, t), a.appendChild(o, n), o
            }, e.prototype._getLevelCheckbox = function (e) {
                var o = this, t = document.createElement("div");
                if ("strictly-necessary" !== e.id) {
                    var n = o.cookieConsent.userConsent.acceptedLevels, i = document.createElement("input");
                    i.setAttribute("cookie_consent_toggler", "true"), i.setAttribute("type", "checkbox"), i.setAttribute("class", "checkbox_cookie_consent"), i.setAttribute("id", e.id), i.setAttribute("name", e.id), (r = document.createElement("label")).setAttribute("for", e.id), n[e.id] ? (i.setAttribute("checked", "checked"), r.setAttribute("class", "is-active"), r.innerHTML = o.cookieConsent.i18n.$t("dialog", "active")) : (r.setAttribute("class", "is-inactive"), r.innerHTML = o.cookieConsent.i18n.$t("dialog", "inactive")), i.addEventListener("change", (function () {
                        var t = i.checked, n = e.id, a = document.querySelector('label[for="' + n + '"]');
                        o.cookieConsent.log("User changed toggle for cookie level [" + n + "], new status: " + t, "info"), document.dispatchEvent(o.cookieConsent.events.cc_userChangedConsent), !0 === t ? (o.cookieConsent.userConsent.acceptLevel(n), a.innerHTML = o.cookieConsent.i18n.$t("dialog", "active")) : (o.cookieConsent.userConsent.rejectLevel(n), a.innerHTML = o.cookieConsent.i18n.$t("dialog", "inactive"))
                    })), a.appendChild(t, i), a.appendChild(t, r)
                } else {
                    var r, s = document.createElement("input");
                    s.setAttribute("cookie_consent_toggler", "true"), s.setAttribute("type", "checkbox"), s.setAttribute("checked", "checked"), s.setAttribute("disabled", "disabled"), s.setAttribute("class", "checkbox_cookie_consent"), s.setAttribute("id", e.id), s.setAttribute("name", e.id), (r = document.createElement("label")).setAttribute("for", e.id), r.innerHTML = o.cookieConsent.i18n.$t("dialog", "always_active"), a.appendChild(t, s), a.appendChild(t, r)
                }
                return t
            }, e
        }(), I = function () {
            function e(e) {
                this.dialog = null, this.dialogOverlay = null, this.dialogExtraCss = [], this.cookieConsent = e, this.dialogExtraCss.push(e.colorPalette.getClass())
            }

            return e.prototype.initDialog = function () {
                return null === this.dialog && (this.dialog = this.createDialog()), a.appendChild("body", this.dialog, "afterbegin"), this.cookieConsent.log("Consent dialog shown", "info"), document.dispatchEvent(this.cookieConsent.events.cc_dialogShown), !0
            }, e.prototype.hideDialog = function () {
                try {
                    this.dialog.classList.add("hidden"), this.cookieConsent.log("Consent dialog hidden", "info")
                } catch (e) {
                }
            }, e.prototype.createDialog = function () {
                var e = document.createElement("div");
                if (e.classList.add("cc_css_reboot"), e.classList.add("cc_dialog"), this.dialogExtraCss.length) for (var o = 0, t = this.dialogExtraCss; o < t.length; o++) {
                    var n = t[o];
                    e.classList.add(n)
                }
                if (a.appendChild(e, this.createDialogContent()), "interstitial" === this.cookieConsent.userNoticeType) {
                    var i = document.createElement("div");
                    return i.classList.add("cc_overlay_lock"), a.appendChild(i, e), i
                }
                return e
            }, e.prototype.createDialogContent = function () {
                var e = this, o = document.createElement("div"), t = document.createElement("h1");
                t.classList.add("cc_dialog_headline"), t.innerText = e.cookieConsent.i18n.$t("dialog", "title");
                var n = document.createElement("div"), i = document.createElement("p");
                i.classList.add("cc_dialog_text"), i.innerHTML = e.cookieConsent.i18n.$t("dialog", "text"), a.appendChild(n, i);
                var r = document.createElement("button");
                r.classList.add("cc_b_ok"), "express" == e.cookieConsent.userConsentType ? r.innerHTML = e.cookieConsent.i18n.$t("dialog", "i_agree_text") : r.innerHTML = e.cookieConsent.i18n.$t("dialog", "ok_text"), r.addEventListener("click", (function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogOkPressed)
                }));
                var s = document.createElement("button");
                s.classList.add("cc_b_cp"), s.innerHTML = e.cookieConsent.i18n.$t("dialog", "change_settings"), s.addEventListener("click", (function () {
                    document.dispatchEvent(e.cookieConsent.events.cc_dialogPreferencesPressed)
                }));
                var c = document.createElement("div");
                return a.appendChild(c, r), a.appendChild(c, s), a.appendChild(o, t), a.appendChild(o, n), a.appendChild(o, c), o
            }, e
        }(), T = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.dialogExtraCss.push("simple"), t
            }

            return C(o, e), o
        }(I), O = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.dialogExtraCss.push("headline"), t
            }

            return C(o, e), o
        }(I), N = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.dialogExtraCss.push("interstitial"), t
            }

            return C(o, e), o
        }(I), U = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.dialogExtraCss.push("standalone"), t
            }

            return C(o, e), o
        }(I), D = function () {
            function e(e) {
                e.log("ConsentType main class initialized", "info")
            }

            return e.prototype.loadInitialCookies = function () {
            }, e
        }(), M = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.cookieConsent = o, t
            }

            return C(o, e), o.prototype.loadInitialCookies = function () {
                var e = this.cookieConsent.cookieLevels.cookieLevels[0].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = e.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, o
        }(D), q = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.cookieConsent = o, t
            }

            return C(o, e), o.prototype.loadInitialCookies = function () {
                var e = this.cookieConsent.cookieLevels.cookieLevels.length,
                    o = this.cookieConsent.cookieLevels.cookieLevels[e - 1].id;
                this.cookieConsent.userConsent.loadCookiesUntilAndInclude = o.toString(), this.cookieConsent.userConsent.loadCookiesUntilMaxLevel()
            }, o
        }(D), W = function () {
            function e(e) {
                this.cookieConsent = e
            }

            return e.prototype.getClass = function () {
                return "light"
            }, e
        }(), B = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.cookieConsent = o, t
            }

            return C(o, e), o.prototype.getClass = function () {
                return "dark"
            }, o
        }(W), R = function (e) {
            function o(o) {
                var t = e.call(this, o) || this;
                return t.cookieConsent = o, t
            }

            return C(o, e), o.prototype.getClass = function () {
                return "light"
            }, o
        }(W), V = function () {
            function e(e) {
                switch (this.debug = !1, this.ownerWebsiteName = e.website_name || "", this.cookiesPolicyUrl = e.cookies_policy_url || null, this.userConsentType = e.consent_type || "express", this.userNoticeType = e.notice_banner_type || "headline", this.userColorPalette = e.palette || "light", this.ownerSiteLanguage = e.language || "en", this.userLanguageStrings = e.language_overwrite || {}, this.changePreferencesSelector = e.change_preferences_selector || null, this.isDemo = "true" == e.demo, this.debug = "true" == e.debug, this.userConsentType) {
                    default:
                    case"express":
                        this.consentType = new M(this);
                        break;
                    case"implied":
                        this.consentType = new q(this)
                }
                switch (this.userColorPalette) {
                    default:
                    case"dark":
                        this.colorPalette = new B(this);
                        break;
                    case"light":
                        this.colorPalette = new R(this)
                }
                switch (this.userNoticeType) {
                    default:
                    case"simple":
                        this.consentBanner = new T(this);
                        break;
                    case"headline":
                        this.consentBanner = new O(this);
                        break;
                    case"interstitial":
                        this.consentBanner = new N(this);
                        break;
                    case"standalone":
                        this.consentBanner = new U(this)
                }
                this.events = new S, this.eventsListeners = new A(this), this.i18n = new j(this), this.cookieLevels = new E(this), this.userConsent = new L(this), this.javascriptItems = new x(this), this.consentPreferences = new P(this), null !== this.changePreferencesSelector && this.consentPreferences.listenToUserButtonToOpenPreferences(this.changePreferencesSelector), !0 === this.userConsent.userAccepted ? (this.userConsent.loadAcceptedCookies(), !0 === this.isDemo && this.consentBanner.initDialog()) : (this.consentBanner.initDialog(), this.consentType.loadInitialCookies())
            }

            return e.prototype.log = function (e, o, t) {
                void 0 === t && (t = "log"), !0 === this.debug && ("log" === t || "table" === t) && console.log("[" + o + "]", e)
            }, e
        }(), J = function (e) {
            return i = new V(e)
        }
}]);
