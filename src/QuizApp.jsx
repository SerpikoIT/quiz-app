import React, { useState, useEffect } from 'react';
const allQuestions = [
  {
    "question": "i sindaci sono",
    "options": {
      "A": "Autorità locali di pubblica sicurezza nei comuni privi di ufficio distaccato di polizia",
      "B": "solo ufficiali di pubblica sicurezza",
      "C": "sempre autorità locali di pubblica sicurezza"
    },
    "answer": "A"
  },
  {
    "question": "il Ministro dell'interno è",
    "options": {
      "A": "Autorità centrale di pubblica sicurezza",
      "B": "Autorità statale di pubblica sicurezza",
      "C": "Autorità nazionale di pubblica sicurezza"
    },
    "answer": "C"
  },
  {
    "question": "l'Autorità di pubblica sicurezza",
    "options": {
      "A": "veglia al mantenimento dell'ordine pubblico e della sicurezza urbana",
      "B": "veglia al mantenimento dell'ordine pubblico e alla sicurezza dei cittadini",
      "C": "veglia al mantenimento dell'ordine pubblico e della sicurezza complementare"
    },
    "answer": "B"
  },
  {
    "question": "i Prefetti son autorità provinciali di pubblica sicurezza",
    "options": {
      "A": "a livello pianificatorio e di impiego delle forze di polizia",
      "B": "a livello tecnico - operativo",
      "C": "a livello politico - generale\n ANSWER: C\t\n\tsono autorità regionali di pubblica sicurezza\nA.\tPrefetti dei capoluoghi di regione\nB.\tQuestori dei capoluoghi di regione\nC.\tPrefetti dei capoluoghi di provincia"
    },
    "answer": "A"
  },
  {
    "question": "il capo della polizia - direttore generale della pubblica sicurezza è",
    "options": {
      "A": "preposto al dipartimento della pubblica sicurezza",
      "B": "autorità nazionale di pubblica sicurezza",
      "C": "autorità centrale di pubblica sicurezza"
    },
    "answer": "A"
  },
  {
    "question": "la sicurezza urbana è",
    "options": {
      "A": "bene pubblico afferente alla sicurezza regionale",
      "B": "bene pubblico afferente all'ordine pubblico",
      "C": "bene pubblico che afferisce alla vivibilità ed al decoro della città"
    },
    "answer": "C"
  },
  {
    "question": "il dipartimento della pubblica sicurezza provvede",
    "options": {
      "A": "all'attuazione materiale dei provvedimenti del Ministro dell'interno",
      "B": "all'attuazione della politica in materia di ordine e sicurezza pubblica",
      "C": "all'attuazione della politica in materia di sicurezza urbana"
    },
    "answer": "B"
  },
  {
    "question": "il comitato nazionale dell'ordine pubblico e della sicurezza pubblica è",
    "options": {
      "A": "organo ausiliario di amministrazione attiva del dipartimento di pubblica sicurezza",
      "B": "organo straordinario di pubblica sicurezza",
      "C": "organo ausiliario di consulenza del Ministro dell'interno"
    },
    "answer": "C"
  },
  {
    "question": "gli Ufficiali della guardia di finanza sono",
    "options": {
      "A": "agenti di pubblica sicurezza",
      "B": "ufficiali di pubblica sicurezza",
      "C": "autorità di pubblica sicurezza in materia di polizia tributaria"
    },
    "answer": "A"
  },
  {
    "question": "l'uso della lingua italiana è",
    "options": {
      "A": "obbligatorio",
      "B": "raccomandato",
      "C": "facoltativo"
    },
    "answer": "A"
  },
  {
    "question": "tra i doveri del personale rientra:",
    "options": {
      "A": "frequentare persone di dubbia moralità",
      "B": "non abusare dell'autorità",
      "C": "mantenere una condotta irreprensibile ma solo in servizio"
    },
    "answer": "B"
  },
  {
    "question": "il personale è tenuto al rispetto e alla lealtà nei confronti:",
    "options": {
      "A": "dei superiori e dei colleghi",
      "B": "dei soli superiori",
      "C": "dei colleghi di pari qualifica"
    },
    "answer": "A"
  },
  {
    "question": "il personale della polizia di stato deve avere particolare cura della propria persona e dell'aspetto esteriore al fine di:",
    "options": {
      "A": "mantenere un aspetto atletico e performante",
      "B": "evitare giudizi negativi incidenti sul prestigio e sul decoro dell'amministrazione",
      "C": "evitare problematiche di carattere igienico - sanitario\n ANSWER: B\t\n\til personale della polizia di stato ha l'obbligo di presentarsi in servizio:\nA.\tappena pronto e con l'armamento in dotazione individuale\nB.\tall'ora stabilita in perfertto ordine nella persona e con vestiario, equipaggiamento ed armamento prescritti\nC.\tsu espressa disposizione verbale del diretto superiore"
    },
    "answer": "B"
  },
  {
    "question": "il personale della polizia di stato durante il servizio d'istituto:",
    "options": {
      "A": "è tenuto ad indossare l'uniforme secondo le modalità previste",
      "B": "può indossare giacca antivento fuori ordinanza",
      "C": "è esonerato dall'indossare il berretto"
    },
    "answer": "A"
  },
  {
    "question": "il personale della polizia di stato:",
    "options": {
      "A": "può fornire prestazioni di lavoro, o esercitare mestieri e professioni, solo fuori dall'orario di servizio",
      "B": "non ha particolari limitazioni in ordine alla fornitura di altre prestazioni lavorative",
      "C": "non può fornire prestazioni lavorative che non siano attinenti al servizio d'istituto"
    },
    "answer": "C"
  },
  {
    "question": "il personale della polizia di stato apprende le istruzioni sul servizio:",
    "options": {
      "A": "dal capo turno",
      "B": "dal messaggio di posta elettronica inviato dall'ufficio alla casella istituzionale @poliziadistato",
      "C": "nell'ordine e nel foglio di servizio"
    },
    "answer": "C"
  },
  {
    "question": "al termine del servizio il personale è tenuto:",
    "options": {
      "A": "riferire su ogni fatto rilevante accaduto in servizio con relazione e compilare eventuali ulteriori atti se prescritto dalla normativa",
      "B": "a dare comunicazione telefonica all'ufficio del cessato turno",
      "C": "ad una segnalazione informale e dei soli fatti rilevanti"
    },
    "answer": "A"
  },
  {
    "question": "al personale della polizia di stato può essere fatto obbligo al termine del servizio di mantenere la reperibilità:",
    "options": {
      "A": "quando si prevede la possibilità del verificarsi di situazioni che richiedono la presenza di personale nel posto di lavoro",
      "B": "soltanto per esigenze di soccorso pubblico",
      "C": "per esigenze del dirigente dell'ufficio"
    },
    "answer": "A"
  },
  {
    "question": "la libertà personale è inviolabile e",
    "options": {
      "A": "non è ammessa alcuna forma di di detenzione, di ispezione o perquisizione personale, ne qualsiasi altra restrinzione della libertà personale se non per atto motivato dall'autorità giudiziaria e nei soli casi e modi previsti dalla legge",
      "B": "è garantita dalla riserva di giurisdizione: può essere limitata con atto dell'AG, anche privo di motivazione",
      "C": "è garantita dalla riserva di legge ma non dalla riserva di giurisdizione: può essere limitata nei soli casi e modi previsti"
    },
    "answer": "A"
  },
  {
    "question": "ai sensi dell'art 13 Cost., la perquisizione locale di iniziativa della PG per la ricerca di armi ed esplosivi (art 41 TULPS)",
    "options": {
      "A": "non necessita di convalida dell'AG in quanto non prevista dall'art 41 del TULPS",
      "B": "necessita di convalida dell'AG entro 48 ore",
      "C": "necessita di convalida dell'AG soltanto se effettuata per indizio"
    },
    "answer": "B"
  },
  {
    "question": "l'intercettazione telefonica",
    "options": {
      "A": "può avvenire soltanto con atto motivato dell'Autorità Giudiziaria  con le garanzie previste dalla legge",
      "B": "può essere disposta dal dirigente della squadra mobile e non necessita di autorizzazione dell'AG in quanto attività atipica di indagine",
      "C": "normalmente è disposta dal PM e non necessita di convalida del GIP"
    },
    "answer": "A"
  },
  {
    "question": "la libertà di circolazione e di soggiorno può esserelimitata:",
    "options": {
      "A": "dall'autorità amministrativa previa autorizzazione dell'AG",
      "B": "soltanto dall'AG, in quanto una riserva di giurisdizione",
      "C": "solo tramite un espressa previsione di legge statale, unicamente per motivi di sanità e di sicurezza\n ANSWER: C\t\n\tsono restrinzioni della libertà personale previsti dalla legge\nA.\tle misure cautelari, cioè l'arresto ed il fermo\nB.\tmisure pre-cautelari e cautelari\nC.\tsolo la custodia cautelare, gli arresti domiciliari, perquisizioni e ispezioni"
    },
    "answer": "B"
  },
  {
    "question": "è richiesto il preavviso per le riunioni",
    "options": {
      "A": "in luogo pubblico e aperto al pubblico",
      "B": "in luogo aperto al pubblico",
      "C": "in luogo pubblico"
    },
    "answer": "C"
  },
  {
    "question": "la libertà di manifestazione del pensiero incontra limiti:",
    "options": {
      "A": "nel diritto di cronaca",
      "B": "nalla comunicazione riservata ad un destinatario particolare",
      "C": "nel rispetto della onorabilità della persona"
    },
    "answer": "C"
  },
  {
    "question": "l'art 13 Cost. prevede per la libertà personale:",
    "options": {
      "A": "una doppia riserva di legge e di giurisdizione",
      "B": "riserva di giurisdizione",
      "C": "riserva di legge"
    },
    "answer": "A"
  },
  {
    "question": "il Questore:",
    "options": {
      "A": "può vietare una riunione in via preventiva per comprovati motivi di sicurezza o incolumità pubblica",
      "B": "può vietare solo le manifestazioni di discriminazione razziale",
      "C": "non può vietare nessuna riunione"
    },
    "answer": "A"
  },
  {
    "question": "il divieto di porto d'armi durante le riunioni pubbliche:",
    "options": {
      "A": "non riguarda chi è munito di licenza per il porto",
      "B": "è assoluto, riguarda anche chi è munito di licenza per il porto",
      "C": "non esiste"
    },
    "answer": "B"
  },
  {
    "question": "il diritto alla salute, quale diritto inviolabile:",
    "options": {
      "A": "non prevede se leso, l'eventuale risarcimento del danno patrimoniale e biologico",
      "B": "comporta un obbligo a sottoporsi a trattamenti sanitari",
      "C": "non comporta un obbligo a sottoporsi a trattamenti sanitari"
    },
    "answer": "C"
  },
  {
    "question": "il trattamento sanitario obbligatorio (TSO):",
    "options": {
      "A": "non può essere disposto sul paziente non adeguatamente informato",
      "B": "non necessita del consenso informato del paziente",
      "C": "è disposto su proposta motivata del medico"
    },
    "answer": "C"
  },
  {
    "question": "il medico, interviene legittimamentesenza preventivo consenso del paziente:",
    "options": {
      "A": "mai",
      "B": "in caso di necessità ed urgenza ( esempio: rischio della vita)",
      "C": "solo quando deve effettuare interventi di elezione"
    },
    "answer": "B"
  },
  {
    "question": "la libertà sindacale:",
    "options": {
      "A": "è un'espressione della libertà di pensiero",
      "B": "non rientra nelle libertà costituzionali",
      "C": "è un'espressione della libertà di associazione\n ANSWER: C\t\n\ti sindacati ai sensi dell'art 39 della Costituzione:\nA.\tnon hanno un'organizzazione a base democratica\nB.\tsono associazioni non riconosciute\nC.\tsono organizzazioni con ordinamento interno a base democratica"
    },
    "answer": "C"
  },
  {
    "question": "Lo statuto dei lavoratori (L.300/1970):",
    "options": {
      "A": "ha potenziato le libertà sindacali (ad esempio diritto di fruire di permessi di lavoro per partecipare ad attività sindacali)",
      "B": "non prevede sanzioni per condotte antisindacali del datore di lavoro",
      "C": "non ha esteso le libertà sindacali"
    },
    "answer": "A"
  },
  {
    "question": "l'art 82 della L.121/81:",
    "options": {
      "A": "estende agli appartenenti alla polizia di stato il diritto ad iscriversi a qualunque sindacato",
      "B": "garantisce che gli appartenenti alla polizia di stato hanno il diritto di associarsi in sindacati, vietandone però l'iscrizione a sindacati diversi da quelli del personale di polizia",
      "C": "autorizza gli appartenenti alla polizia di stato a riunirsi sindacalmente in luogo pubblico"
    },
    "answer": "B"
  },
  {
    "question": "i dipendenti pubblici possono scioperare?",
    "options": {
      "A": "si, la corte costituzionale visto il vuoto legislativo, ha riconosciuto il diritto di sciopero ai dipendenti pubblici",
      "B": "no, mai",
      "C": "si, solo per alcune finalità"
    },
    "answer": "A"
  },
  {
    "question": "l'art 84 della L.121/81:",
    "options": {
      "A": "autorizza gli appartenenti alla polizia di stato a scioperare nei limiti dell'esigenza di tutela dell'ordine e della sicurezza pubblica",
      "B": "garantisce tutela normativa agli appartenenti alle forze dell'ordine che scioperano",
      "C": "sancisce il divieto assoluto dell'esercizio del diritto di sciopero per gli appartenenti alla polizia di stato"
    },
    "answer": "C"
  },
  {
    "question": "in relazione all'art. 54 della Costituzione in combinato disposto all'art. 98 della Costituzione:",
    "options": {
      "A": "non si evincono limiti normativi di incompatibilità per gli appartenenti alla pubblica amministrazione",
      "B": "è fatto divieto al dipendente pubblico di espletare una doppia attività lavorativa, salvo i casi espressamente previsti dalla legge",
      "C": "il dipendente pubblico può espletare doppia attività lavorativa"
    },
    "answer": "B"
  },
  {
    "question": "i provvedimenti amministrativi sono atti dotati:",
    "options": {
      "A": "di efficacia esterna, tipici e nominati, destinati a modificare situazioni giuridiche in modo autoritativo",
      "B": "di efficacia normativa",
      "C": "di efficacia interna, atipici e destinati a modificare situazioni giuridiche in modo non autoritativo"
    },
    "answer": "A"
  },
  {
    "question": "il provvedimento amministrativo:",
    "options": {
      "A": "costituisce una fonte del diritto",
      "B": "dispone nei confronti di uno o più soggetti determinati o determinabili",
      "C": "contiene norme generali e astratte"
    },
    "answer": "B"
  },
  {
    "question": "l'esecutività del provvedimento amministrativo",
    "options": {
      "A": "è la possibilità giuridica e di fatto di eseguire un provvedimento",
      "B": "è l'idoneità del provvedimento ad essere coattivamente eseguito dalla PA, senza dover ricorrere ad un giudice",
      "C": "è la capacità del provvedimento di produrre immediatamente effetti sul destinatario"
    },
    "answer": "C"
  },
  {
    "question": "l'atto amministrativo annullabile:",
    "options": {
      "A": "è insuscettibile di produrre effetti",
      "B": "è immediatamente efficace e può essere caducato solo a seguito di tempestiva impugnazione giudiziale",
      "C": "non può essere sanato o convalidato\n ANSWER: B\t\n\til provvedimento amministrativo privo di elementi essenziali è:\nA.\tirregolare\nB.\tannullabile\nC.\tnullo"
    },
    "answer": "C"
  },
  {
    "question": "l'eccesso di potere:",
    "options": {
      "A": "è un vizio di merito dell'atto amministrativo",
      "B": "è un vizio di legittimità dell'atto amministrativo per violazione di legge",
      "C": "è un vizio di legittimità dell'atto amministrativo"
    },
    "answer": "C"
  },
  {
    "question": "il ricorso gerarchico è un ricorso:",
    "options": {
      "A": "in regime di autotutela",
      "B": "giurisdizionale",
      "C": "amministrativo"
    },
    "answer": "C"
  },
  {
    "question": "il ricorso straordinario al Presidente della Repubblica è:",
    "options": {
      "A": "esperibile nel caso in cui ritiene il provvedimento impugnato viziato mer motivi di merito",
      "B": "alternativo al ricorso davanti al G.A.",
      "C": "esperibile dopo la pronuncia del G.A."
    },
    "answer": "B"
  },
  {
    "question": "di norma ci si rivolge al GA (Giudice Amministrativo) nel caso di lesione:",
    "options": {
      "A": "di un diritto soggettivo",
      "B": "di un diritto assoluto",
      "C": "di un interesse legittimo"
    },
    "answer": "C"
  },
  {
    "question": "nel nostro ordinamento giuridico è giudica amministrativo di primo grado il:",
    "options": {
      "A": "consiglio di stato",
      "B": "giudice di pace",
      "C": "TAR"
    },
    "answer": "C"
  },
  {
    "question": "l'illecito penale è:",
    "options": {
      "A": "un fatto umano contrario all'ordinamento giuridico",
      "B": "un fatto umano contrario all'ordinamento morale",
      "C": "un fatto naturale contrario all'ordinamento giuridico"
    },
    "answer": "A"
  },
  {
    "question": "il principio di legalità in diritto penale prevede che:",
    "options": {
      "A": "la norma deve prevedere solo il precetto",
      "B": "la norma deve prevedere sia la sanzione che il precetto",
      "C": "la norma deve stabilire solo il tipo di sanzione"
    },
    "answer": "B"
  },
  {
    "question": "per il principio di tassatività in diritto penale:",
    "options": {
      "A": "la norma deve essere stabilita con legge statale",
      "B": "la norma può essere redatta anche non in maniera chiara purchè comprensibile",
      "C": "la norma deve essere redatta in maniera chiara e non deve dare adito a dubbi"
    },
    "answer": "C"
  },
  {
    "question": "il principio di tipicità in diritto penale richiede che:",
    "options": {
      "A": "la norma non sia retroattiva",
      "B": "la fattispecie concreta coincida perfettamente con la fattispecie legalizzata",
      "C": "la norma contenga solo elementi normativi\n ANSWER: B\t\n\tper il principio di offensività in diritto penale:\nA.\tse l'azione umana non realizza un evento di danno non è punibile\nB.\tl'azione umana può essere punita pur se rimane a livello intenzionale, senza realizzare un danno o un pericolo\nC.\tl'azione umana deve realizzare una lesione del bene giuridico tutelato o quanto meno metterlo in pericolo"
    },
    "answer": "C"
  },
  {
    "question": "l'ammenda è:",
    "options": {
      "A": "un risarcimento del danno civile",
      "B": "un ammonimento",
      "C": "una sanzione penale pecuniaria"
    },
    "answer": "C"
  },
  {
    "question": "il reato si distingue in:",
    "options": {
      "A": "delitti, contravvenzioni e illeciti amministrativi",
      "B": "delitti, illeciti amministrativi e multe",
      "C": "delitti e contravvenzioni"
    },
    "answer": "C"
  },
  {
    "question": "l'illecito civile ha come conseguenza sanzionatoria:",
    "options": {
      "A": "il pagamento di una multa",
      "B": "il pagamento di una somma di denaro di tipo risarcitorio/riparatorio",
      "C": "il pagamento di un ammenda"
    },
    "answer": "B"
  },
  {
    "question": "l'illecito disciplinare è:",
    "options": {
      "A": "un illecito penale",
      "B": "un illecito civile",
      "C": "un illecito amministrativo"
    },
    "answer": "C"
  },
  {
    "question": "l'oblazione estingue:",
    "options": {
      "A": "solo la sanzione accessoria",
      "B": "l'illecito amministrativo",
      "C": "la contavvenzione"
    },
    "answer": "C"
  },
  {
    "question": "qual è il bene giuridico tutelato nei delitti contro l'amministrazione della giustizia?",
    "options": {
      "A": "l'interesse all'acquisizione della notizia criminosa da parte dell'AG, affinchè la stessa sia messa in condizione di esercitare correttamente l'azione penale",
      "B": "l'interesse a che l'imputato non menta nel corso dell'interrogatorio",
      "C": "l'interesse a che la procedura di notificazione venga correttamente eseguita da parte del soggetto incaricato"
    },
    "answer": "A"
  },
  {
    "question": "quali possono essere i soggetti attivi dei delitti contro l'amministrazione della giustizia?",
    "options": {
      "A": "i reati contro l'amministrazione della giustizia sono stati depenalizzati",
      "B": "qualunque soggetto trattandosi di reati comuni",
      "C": "essendo reati propri, soltanto determinati soggetti che per le funzioni svolte sono posti in particolare relazione con l'interesse tutelato, ovvero pubblico ufficiale ed incaricato di pubblico servizio"
    },
    "answer": "B"
  },
  {
    "question": "il dolo rappresenta il normale criterio dell'imputazione soggettiva. Componenti proprie dell'elemento psicologico rappresentazione e volontà, in ordine alle quali è corretto affermare che:",
    "options": {
      "A": "il dolo non è previsto nel nostro ordinamento giuridico",
      "B": "in ogni caso è sufficiente lo stato di dubbio per la configurazione del dolo",
      "C": "la sufficienza dello stato di dubbio, ai fini dell'esistenza del dolo, è da escludere laddove la norma esiga la piena conoscenza di uno o più elementi del fatto di reato"
    },
    "answer": "C"
  },
  {
    "question": "il libro II del codice penale è diviso in 14 titoli, in cui vari delitti sono raggruppati a seconda dell'oggetto giuridico, cioè del bene o interesse tutelato dalla norma è leso o messo in pericolo dai comportamenti vietati. Quale titolo è dedicato ai delitti contro l'amministrazione della giustizia?",
    "options": {
      "A": "II",
      "B": "I",
      "C": "III \n ANSWER: C\t\n\tquando si configura il delitto di omessa denuncia di reato da parte del cittadino?\nA.\tsempre\nB.\tmai\nC.\tnel caso di delitto contro la personalità dello stato, per il quale la legge stabilisce l'ergastolo"
    },
    "answer": "C"
  },
  {
    "question": "la nozione di pubblico ufficiale da quale articolo è fornita?",
    "options": {
      "A": "art 360 CP",
      "B": "art. 359 CP",
      "C": "art. 357 CP"
    },
    "answer": "C"
  },
  {
    "question": "il dolo è specifico quando:",
    "options": {
      "A": "è sufficiente una previsione generica degli elementi costitutivi del fatto reato",
      "B": "non esiste questa particolare forma di dolo",
      "C": "oltre alla previsione e volontà di tutti gli elementi che compongono il reato, è necessario che l'agente si sia prefisso anche un fine ulteriore"
    },
    "answer": "C"
  },
  {
    "question": "il dolo è generico",
    "options": {
      "A": "qunado oltre alla previsione e volontà di tutti gli elementi che compongono il reato, è necessario che l'agente si sia prefisso anche un fine ulteriore",
      "B": "quando ai fini della punibilità , è sufficiente che l'agente abbia previsto e voluto tutti gli elementi che formano il reato",
      "C": "non esiste questa particolare forma di dolo"
    },
    "answer": "B"
  },
  {
    "question": "i reati speciali o propri:",
    "options": {
      "A": "non esiste questa tipologia di reati",
      "B": "sono quei reati per i quali la legge non richiede nessuna speciale qualifica del soggetto attivo",
      "C": "sono quei reati per i quali la legge richiede una speciale qualifica del soggetto attivo. Essi a loro volta si distinguono in reati propri esclusivi e reati propri non esclusivi"
    },
    "answer": "C"
  },
  {
    "question": "l'art. 361 CP (omessa denuncia di reato da parte del PU) contempla un'aggravante di carattere soggettivo?",
    "options": {
      "A": "l'art 361 CP non contempla alcuna aggravante di carattere soggettivo",
      "B": "si, al secondo comma, prevedendo che se il colpevole è un ufficiale di polizia giudiziaria che ha avuto notizia di un reato del quale doveva fare rapporto, la pena è della reclusione fino a due anni",
      "C": "si, al secondo comma, prevedendo che se il colpevole è un ufficiale di polizia giudiziaria che ha avuto notizia di un reato del quale doveva fare rapporto, la pena è della reclusione fino ad un anno"
    },
    "answer": "C"
  },
  {
    "question": "qual è l'oggetto materiale su cui incidono le condotte criminose descritte nel capo III del titolo VII del libro II del Codice Penale?",
    "options": {
      "A": "il documento",
      "B": "nessun oggetto materiale",
      "C": "la persona"
    },
    "answer": "A"
  },
  {
    "question": "cosa si intende, secondo l'orientamento prevalente, per pubblica fede?",
    "options": {
      "A": "la fiducia che la collettività ripone nelle istituzioni democratiche",
      "B": "si intende la fiducia che la collettività ripone in determinati oggetti o simboli sulla cui veridicità deve poter fare affidamento per rendere più sicuro ed affidabile il traffico giurico ed economico",
      "C": "la fiducia riposta nell'autorità giudiziaria nell'ambito di un procedimento penale"
    },
    "answer": "B"
  },
  {
    "question": "l'art 476 CP, sanzionando la condotta del PU che commette falsità materiale in atti pubblici…",
    "options": {
      "A": "tale fattispecie non è prevista dal CP",
      "B": "descrive una tattispecie di reato comune",
      "C": "descrive una fattispecie di reato proprio"
    },
    "answer": "C"
  },
  {
    "question": "il PU che nell'esercizio delle sue funzioni contraffà o altera certificati o autorizzazioni amministrative, ovvero, mediante contraffazione o alterazione, fa apparire adempiute le condizioni richieste per la loro validità è responsabile del delitto di:",
    "options": {
      "A": "peculato",
      "B": "falsità materiale commessa dal pubblico ufficiale in certificati o autorizzazioni amministrative",
      "C": "concussione\n ANSWER: B\t\n\til pubblico ufficiale, che, nell'esercizio delle sue funzioni, forma, in tutto o in parte, un atto falso o altera un atto vero, è responsabile del rato di:\nA.\tnon viene commessa nessuna fattispecie di reato\nB.\tfalsità ideologica commessa da pubblico ufficiale in atti pubblici\nC.\tfalsità materiale commessa da pubblico ufficiale in atti pubblici"
    },
    "answer": "C"
  },
  {
    "question": "il PU, che, nell'esercizio delle sue funzioni, supponendo esistente un atto pubblico o privato, ne simula una copia e la rilascia in forma legale ovvero rilascia una copia di un atto pubblico o privato diversa dall'originale è responsabile del delitto di:",
    "options": {
      "A": "peculato",
      "B": "falsità materiale commessa da pubblico ufficiale in atti pubblici",
      "C": "falsità materiale commessa da pubblico ufficiale in copie autentiche di atti pubblici o privati e in attestati del contenuto di atti"
    },
    "answer": "C"
  },
  {
    "question": "il PU che, ricevendo o formando un atto nell'esercizio delle sue funzioni, attesta falsamente che un fatto è stato da lui compiuto o è avvenuto alla sua presenza è responsabile del delitto di:",
    "options": {
      "A": "concussione",
      "B": "falsità materiale commessa da pubblico ufficiale in atti pubblici",
      "C": "falsità ideologica commessa da pubblico ufficiale in atti pubblici"
    },
    "answer": "C"
  },
  {
    "question": "La nozine di Pubblico Ufficiale da quale articolo è fornita?",
    "options": {
      "A": "art 359 CP",
      "B": "art 357 CP",
      "C": "art 360 CP"
    },
    "answer": "B"
  },
  {
    "question": "il delitto di falsità materiele commessa dal Pubblico ufficiale da quale articolo è previsto?",
    "options": {
      "A": "il codice penale non contepla tale fattispecie di reato",
      "B": "art 478 CP",
      "C": "art 476 CP"
    },
    "answer": "C"
  },
  {
    "question": "nel falso materiale il documento…",
    "options": {
      "A": "è pienamente autentico",
      "B": "pur provenendo dal soggetto che risulta essere l'autore, contiene dichiarazioni menzognere",
      "C": "è manomesso nella sua essenza materiale, ovvero nella sua genuinità"
    },
    "answer": "C"
  },
  {
    "question": "La nozione di corruzione di tipo amministrativo:",
    "options": {
      "A": "è diversa da quella penale in quanto più ampia",
      "B": "è diversa da quella penale in quanto più restrittiva",
      "C": "coincide con quella penale"
    },
    "answer": "A"
  },
  {
    "question": "nel ranking relativo all'indice di percezione della corruzione stilato ogni anno da Transarency International, l'Italia negli ultimi 5 anni",
    "options": {
      "A": "ha guadagnato posizioni, migliorando il suo ranking precedente",
      "B": "ha mantenuto la medesima posizione",
      "C": "ha perso delle posizioni, peggiorando il suo ranking precedente"
    },
    "answer": "A"
  },
  {
    "question": "con la legge 190/2012 il contrasto alla curruzione viene perseguito attraverso una strategia: le qualifiche di:",
    "options": {
      "A": "sia repressiva che preventiva",
      "B": "repressiva",
      "C": "preventiva"
    },
    "answer": "A"
  },
  {
    "question": "l'inasprimento delle sanzioni penali costituisce una misura di contrasto alla corruzione di tipo:",
    "options": {
      "A": "preventivo",
      "B": "educativo",
      "C": "repressivo\n ANSWER: C\t\n\tIl piano nazionale anticorruzione è predisposto da:\nA.\tAutorità Nazionale Anticorruzione\nB.\tresponsabile della prevenzione della corruzione\nC.\tPrefetto"
    },
    "answer": "A"
  },
  {
    "question": "Il piano triennale per la prevenzione anticorruzione (PTCP) è approvato da:",
    "options": {
      "A": "Prefetto",
      "B": "responsabile della prevenzione della corruzione",
      "C": "organo di indirizzo Politico-Amministrativo"
    },
    "answer": "C"
  },
  {
    "question": "dove devono essere indicate le misure di prevenzione della corruzione che ciascuna amministrazione intende adottare?",
    "options": {
      "A": "in un apposito regolamento",
      "B": "nel piano nazionale anticorruzione",
      "C": "nel piano triennale per la prevenzione della corruzione"
    },
    "answer": "C"
  },
  {
    "question": "la mappatura dei processi interni all'amministrazione costituisce un adempimento:",
    "options": {
      "A": "che segue la ponderazione dei rischi corruttivi",
      "B": "che precede l'analisi dei rischi corruttivi",
      "C": "che segue l'analisi dei rischi corruttivi"
    },
    "answer": "B"
  },
  {
    "question": "quali tra le seguenti non rientra tra le quattro aree a rischio di corruzione comuni e obbligatorie per tutte le amministrazioni pubbliche individuate nel primo piano nazionale anticorruzione",
    "options": {
      "A": "affidamento di lavori, servizi,forniture",
      "B": "acquisizione e prograssione del personale",
      "C": "gestione degli archivi"
    },
    "answer": "C"
  },
  {
    "question": "quale tra questi organismi esercita la vigilanza ed il controllo sull'attuazione efficace delle misure di prevenzione della corruzione e sul rispetto delle regole sulla trasparenza",
    "options": {
      "A": "il CSM",
      "B": "l'ENAV",
      "C": "l'ANAC"
    },
    "answer": "C"
  },
  {
    "question": "ciascuna amministrazione ha l'obbligo di adottare un proprio codice interno di comportamento",
    "options": {
      "A": "ad integrazione degli obblighi e doveri contenuti nel codice generale di comportamento adottato con DPR 62/2013",
      "B": "non sussiste alcun obbligo a riguardo",
      "C": "le amministrazione possono in alternativa adottare un codice etico"
    },
    "answer": "A"
  },
  {
    "question": "Il codice di comportamento dell'Amministrazione dell'Interno si applica integralmente",
    "options": {
      "A": "al personale civile dell'amministrazione, ai collaboratori e consulenti dell'amministrazione, ai collaboratori delle imprese fornitrici di beni e servizio che realizzano opere in favore dell'amministrazione",
      "B": "al solo personale civile",
      "C": "a tutto il personale dell'amministrazione"
    },
    "answer": "A"
  },
  {
    "question": "il patto di integrità del Ministero dell'Interno si applica",
    "options": {
      "A": "alle sole procedure di gara sopra soglia",
      "B": "a tutte le procedure di gara bandite dall'amministrazione sopra e sotto soglia",
      "C": "alle sole procedure di gara sotto soglia"
    },
    "answer": "A"
  },
  {
    "question": "il patto di integrità del Ministero dell'Interno prevede obblighi di comportamento",
    "options": {
      "A": "solo per la stazione appaltante",
      "B": "per le sole imprese partecipanti alle procedure di gara",
      "C": "sia per le imprese partecipanti alle procedure di gara sia per la stazione appaltante\n ANSWER: C\t\n\til Whistleblowing è\nA.\tun sistema informatico per la rilevazione dei reati di corruzione\nB.\tun istituto di prevenzione della corruzione mutuato dall'esperienza dei paesi anglosassoni\nC.\tun sistema di comunicazione tra i responsabili della prevenzione della corruzione"
    },
    "answer": "A"
  },
  {
    "question": "la tutela dell'identità del Whistleblower è assoluta",
    "options": {
      "A": "attraverso la presentazione di segnalazioni sotto falso nome",
      "B": "tramite sistemi informatici che garantiscono la riservatezza del denunciante",
      "C": "tramite l'accettazione di segnalazioni in forma anonima"
    },
    "answer": "C"
  },
  {
    "question": "il responsabile della prevenzione della corruzione e della trasparenza",
    "options": {
      "A": "è responsabile penalmente dei reati di corruzione perpetuati nella propria amministrazione",
      "B": "vigila sull'efficacia e sull'osservanza del piano triennale per la prevenzione della corruzione e delle misure di prevenzione in esso indicate",
      "C": "eroga sanzioni pecuniarie nei confronti del personale che viola il codice di comportamento"
    },
    "answer": "C"
  },
  {
    "question": "le linee guida di tutela del dipendente pubblico che segnala un'irregolarità adottate dall'ANAC con la determinazione nr 6 del 28 aprile 2015",
    "options": {
      "A": "prendono atto del mancato ricorso all'istituto del Wistleblowing",
      "B": "promuovono l'applicazione di adeguati sistemi di Wistleblowing presso tutte le amministrazioni, individuando, al contempo, criteri ideonei per la tutela omogenea del segnalatore",
      "C": "prevedono le segretezza dell'identità del segnalante"
    },
    "answer": "B"
  },
  {
    "question": "la rotazione del personale maggiormente esposto al rischio corruttivo si definisce",
    "options": {
      "A": "rotazione straordinaria",
      "B": "rotazione speciale",
      "C": "rotazione ordinaria"
    },
    "answer": "C"
  },
  {
    "question": "la misura della rotazione del personale",
    "options": {
      "A": "è soggetta ai soli vincoli di natura oggettiva",
      "B": "è soggetta ai vincoli di natura soggettiva ed oggettiva",
      "C": "non è soggetta ad alcun vincolo"
    },
    "answer": "C"
  },
  {
    "question": "La PG svolge attività investigativa di iniziativa:",
    "options": {
      "A": "obbligatoriamente",
      "B": "facoltativamente",
      "C": "solo su richiesta della persona offesa"
    },
    "answer": "A"
  },
  {
    "question": "l'attività di iniziativa della Polizia Giudiziaria è svolta:",
    "options": {
      "A": "solo nella fase delle indagini preliminari",
      "B": "prevalentemente nella fase delle indagini preliminari",
      "C": "solo nella fase del dibattimento"
    },
    "answer": "B"
  },
  {
    "question": "la polizia giudiziaria nell'ambito dell'attività d'iniziativa compie:",
    "options": {
      "A": "atti investigativi atipici",
      "B": "atti investigativi tipici",
      "C": "atti investigativi tipici e atipici"
    },
    "answer": "C"
  },
  {
    "question": "l'attività investigativa di iniziativa della PG è finalizzata:",
    "options": {
      "A": "ad individuare ed assicurare le fonti di prova per permettere al Pubblico Ministero sulla base degli elementi raccolti, di decidere se esercitare o meno l'azione penale",
      "B": "alla ricerca del latitante",
      "C": "alla ricerca dell'imputato\n ANSWER: A\t\n\tnel caso in cui il PM abbia già assunto la direzione delle indagini, l'attività d'iniziativa della PG:\nA.\tè vietata\nB.\tè consentita\nC.\tdeve essere preventivamente autorizzata dal GIP su richiesta della stessa PG"
    },
    "answer": "B"
  },
  {
    "question": "nel caso in cui il PM abbia già assunto la direzione delle indagini, il compimento di atti d'iniziativa:",
    "options": {
      "A": "può contrastare con le direttive imposte dal PM ma deve essere caratterizzato dalla necessità e dall'urgenza",
      "B": "può contrastare con le direttive imposte dal PM e non è necesserio che sia caratterizzato da necessità e urgenza",
      "C": "non deve contrastare con le direttive imposte dal PM e deve essere caratterizzato dalla necessità e dall'urgenza"
    },
    "answer": "C"
  },
  {
    "question": "il Pubblico Ministero può espressamente vietare alla Polizia Giudiziaria di compiere determinati atti?",
    "options": {
      "A": "SI",
      "B": "NO",
      "C": "dipende dalla fase processuale in cui deve essere eseguito l'atto"
    },
    "answer": "A"
  },
  {
    "question": "quando la Polizia Giudiziaria esegue indagini di iniziativa dopo che il Pubblico Ministero ha assunto la direzione delle indagini, ha obbligo di informare il Pubblico Ministero?",
    "options": {
      "A": "dipende dalla fase processuale in cui deve essere eseguito l'atto",
      "B": "SI",
      "C": "NO"
    },
    "answer": "B"
  },
  {
    "question": "l'autorità giudiziaria può delegare alla PG qualsiasi tipo di atto?",
    "options": {
      "A": "dipende dalla fase processuale in cui deve essere eseguito l'atto",
      "B": "SI",
      "C": "NO"
    },
    "answer": "C"
  },
  {
    "question": "L'OMISSIONE, IL RITARDO, LA NEGLIGENZA NELL'ESECUZIONE DI ORDINI, IMPARTITI DALL'AUTORITà GIUDIZIARIA COSTITUISCONO COMPORTAMENTI OMISSIVI, CENSURABILI:",
    "options": {
      "A": "penalmente e disciplinarmente",
      "B": "solo penalmente",
      "C": "solo disciplinarmente"
    },
    "answer": "A"
  },
  {
    "question": "la misura di prevenzione presuppone:",
    "options": {
      "A": "la pericolosità sociale del soggetto e il compimento di un reato",
      "B": "solo una violazione amministrativa",
      "C": "la pericolosità sociale del soggetto"
    },
    "answer": "C"
  },
  {
    "question": "per applicare una misura di prevenzione è necessaria:",
    "options": {
      "A": "solo l'attualità della pericolosità sociale di un soggetto",
      "B": "solo l'attualità e l'effettiva pericolosità sociale di un soggetto",
      "C": "l'attualità e l'effettività della pericolosità sociale di un soggetto unitamente alla riconducibilità della persona ad una delle categorie soggettive delineate dal legislatore"
    },
    "answer": "C"
  },
  {
    "question": "la pericolosità sociale può essere:",
    "options": {
      "A": "attuale o aggravata",
      "B": "generica o qualificata",
      "C": "solo semplice"
    },
    "answer": "B"
  },
  {
    "question": "la pericolosità sociale deve essere:",
    "options": {
      "A": "accertata nel caso concreto",
      "B": "presunta o accertata nel caso concreto",
      "C": "presunta \n ANSWER: A\t\n\tle misure di prevenzione possono limitare:\nA.\tsolo il diritto di proprietà\nB.\tsolo i diritti di libertà\nC.\tsia i diritti di libertà che il diritto di proprietà"
    },
    "answer": "C"
  },
  {
    "question": "le misure di prevenzione possono essere applicate:",
    "options": {
      "A": "solo dal Questore",
      "B": "solo dall'autorità giudiziaria",
      "C": "dal Questore e/o dall'Autorità Giudiziaria in base al tipo di misura"
    },
    "answer": "C"
  },
  {
    "question": "l'avviso orale ed il foglio di via obbligatorio possono essere applicati:",
    "options": {
      "A": "dal Ministro dell'Interno",
      "B": "dall'Autorità Giudiziaria",
      "C": "dal Questore"
    },
    "answer": "C"
  },
  {
    "question": "il foglio di via obbligatorio presuppone:",
    "options": {
      "A": "che il soggetto si trovi nel luogo in cui risiede",
      "B": "non è influente dove si trova il soggetto",
      "C": "che il soggetto si trovi fuori dal luogo in cui risiede"
    },
    "answer": "C"
  },
  {
    "question": "l'avviso orale",
    "options": {
      "A": "può contenere ulteriori prescrizioni",
      "B": "non può essere impugnato",
      "C": "non può contenere ulteriori prescrizioni"
    },
    "answer": "A"
  },
  {
    "question": "la sorveglianza speciale di pubblica sicurezza",
    "options": {
      "A": "è una misura di sicurezza",
      "B": "è una misura di prevenzione",
      "C": "è adottata dal Ministro dell'Interno"
    },
    "answer": "B"
  },
  {
    "question": "qual è la funzione o l'utilità della confisca per equivalente?",
    "options": {
      "A": "consente di evitare l'accertamento del nesso di pertinenzialità",
      "B": "consente di sequestrare tutti quei beni che non sono proporzionati alle entrate lecite dell'indagato",
      "C": "consente di sequestrare tutto ciò che rientra nella disponibilità dell'indagato"
    },
    "answer": "A"
  },
  {
    "question": "a qauli soggetti si applica la confisca allargata prevista dall'art 240 bis CP?",
    "options": {
      "A": "a coloro i quali siano stati condannati per alcuni particolari delitti previsti dalla norma",
      "B": "a coloro i quali siano sottoposti a misura di prevenzione personale",
      "C": "a coloro i quali sia stata applicata una misura di sicurezza"
    },
    "answer": "A"
  },
  {
    "question": "quali sono i presupposti per l'applicabilità della confisca di prevenzione o antimafia?",
    "options": {
      "A": "la condanna per determinati reati del proposto,nonché la disponibilità, in via diretta o per interposta persona, i beni di valore sproporzionato rispetto al reddito dichiarato o all'attività economica svolta, ovvero la verosimile provenienza illecita degli stessi",
      "B": "la pericolosità sociale del proposto, nonché la provenienza illecita dei beni di valore sproporzionato rispetto al reddito dichiarato o all'attività economica svolta",
      "C": "la pericolosità sociale del proposto,nonché la disponibilità, in via diretta o per interposta persona, i beni di valore sproporzionato rispetto al reddito dichiarato o all'attività economica svolta, ovvero la verosimile provenienza illecita degli stessi"
    },
    "answer": "C"
  },
  {
    "question": "i soggetti titolari del potere di proposta sono:",
    "options": {
      "A": "procuratore della repubblica presso il tribunale del capoluogo del distretto ove dimora la persona, procuratore della repubblica presso il tribunale nel cui circondario dimora la persona nei casi previsti dalla legge, procuratore nazionale antimafia e antiterrorismo, questore, direttore della direzione investigativa antimafia",
      "B": "procuratore della repubblica presso il tribunale del capoluogo del distretto ove dimora la persona, procuratore nazionale antimafia e antiterrorismo, questore, direttore della direzione investigativa antimafia",
      "C": "procuratore della repubblica presso il tribunale del capoluogo del circondario ove dimora la persona, procuratore nazionale antimafia e antiterrorismo, questore, direttore della direzione investigativa antimafia\n ANSWER: A\t\n\tgli organi competenti a decidere sull'applicazione di una misura di prevenzione patrimoniale sono:\nA.\ttribunale del capoluogo del circondario, nel territorio del quale la persona dimora\nB.\ttribunale del capoluogo del distretto, nel territorio del quale la persona dimora\nC.\ttribunale del capoluogo del distretto, nel territorio del quale la persona dimora e tribunali di Trapani e Santa Maria Capua Vetere, ove la persona dimori nel corrispondente circondario"
    },
    "answer": "C"
  },
  {
    "question": "le autorità proponenti dispongono accertamenti patrimoniali nei confronti:",
    "options": {
      "A": "dei soggetti a cui può essere applicata una misura di prevenzione, del coniuge, dei figli e dei conviventi nell'ultimo quinquennio, nonché delle persone fisiche o giuridiche del cui patrimonio il proposto risulti poter disporre in tutto o in parte direttamente o indirettamente",
      "B": "dei soggetti a cui può essere applicata una misura di prevenzione, del coniuge, dei figli, degli ascendenti, nonché delle persone fisiche o giuridiche del cui patrimonio il proposto risulti poter disporre in tutto o in parte direttamente o indirettamente",
      "C": "dei soggetti a cui può essere applicata una misura di prevenzione, del coniuge, dei figli e dei conviventi nell'ultimo quinquennio, nonché delle persone fisiche o giuridiche del cui patrimonio il proposto risulti poter disporre direttamente"
    },
    "answer": "A"
  },
  {
    "question": "le autorità proponenti, ai fini dell'elaborazione di una proposta di misura di prevenzione patrimoniale, possono:",
    "options": {
      "A": "richiedere direttamente o a mezzo di ufficiali o agenti di PG , ad ogni ufficio della pubblica amministrazione, ad ogni ente creditizio nonché alle imprese, società ed enti di ogni tipo di informazione e copia della documentazione ritenuta utili ai fini dell'indagine",
      "B": "richiedere soltanto a mezzo di ufficiali o agenti di PG , ad ogni ufficio della pubblica amministrazione, ad ogni ente creditizio nonché alle imprese, società ed enti di ogni tipo di informazione e copia della documentazione ritenuta utili ai fini dell'indagine",
      "C": "sequestrare direttamente o a mezzo di ufficiali o agenti di PG , ad ogni ufficio della pubblica amministrazione, ad ogni ente creditizio nonché alle imprese, società ed enti di ogni tipo di documentazione ritenuta utili ai fini dell'indagine"
    },
    "answer": "A"
  },
  {
    "question": "ai fini dell'applicabilità della confisca antimafia \"per sproporzione\" è richiesto, tra l'altro, che:",
    "options": {
      "A": "vi sia correlazione temporale tra la giustificazione fornita dal proposto e l'acquisto sproporzionato di beni",
      "B": "non vi sia correlazione temporale tra la pericolosità sociale del proposto e l'acquisto sproporzionato di beni",
      "C": "vi sia correlazione temporale tra la pericolosità sociale del proposto e l'acquisto sproporzionato di beni"
    },
    "answer": "C"
  },
  {
    "question": "ai fini dell'applicabilità della confisca antimafia dei beni di verosimile provenienza illecita è necessario, tra l'atro, che:",
    "options": {
      "A": "il valore dei beni sia sproporzionato rispetto al \"reddito dichiarato\" o all'attività economica svolta",
      "B": "i beni siano il \"frutto di attività illecite o ne costituiscano il reimpiego\"",
      "C": "il valore dei beni non sia sproporzionato rispetto al \"reddito dichiarato\" o all'attività economica svolta"
    },
    "answer": "B"
  },
  {
    "question": "ai sensi dell'art 81 del codice antimafia…",
    "options": {
      "A": "nel registro misure di prevenzione viene effettuata l'annotazione delle risultanze degli accertamenti personali o patrimoniali svolti nei confronti delle persone fisiche e giuridiche",
      "B": "nel registro misure di prevenzione viene effettuata l'annotazione nominativa dei soggetti raggiunti da misure di prevenzione personali e patrimoniali",
      "C": "nel registro misure di prevenzione viene effettuata l'annotazione nominativa delle persone fisiche e giuridiche nei cui confronti sono disposti gli accertamenti personali o patrimoniali"
    },
    "answer": "C"
  },
  {
    "question": "quale direttiva ha introdotto norme minime in materia di tutela delle vittime di reato?",
    "options": {
      "A": "la convenzione del Consiglio d'Europa sulla prevenzione e la lotta in materia di violenza contro le donne e di violenza domestica (convenzione di Istambul)",
      "B": "la convenzione delle nazioni unite sull'eliminazione di ogni forma di disciminazione contro le donne (CEDAW)",
      "C": "la Direttiva 2012/29/UE del Parlamento Europeo e del consiglio del 25 ottobre 2012"
    },
    "answer": "C"
  },
  {
    "question": "qual è la definizione di violenza contro le donne basata sul genere secondo la convenzione di Istambul?",
    "options": {
      "A": "tutti gli atti di violenza fisica, sessuale, psicologica o economica che si verificano all'interno della famiglia",
      "B": "qualsiasi violenza diretta contro una donna in quanto tale o che colpisce le donne in modo sproporzionato",
      "C": "una violazione dei diritti umani e una discriminazione contro le donne"
    },
    "answer": "B"
  },
  {
    "question": "i protocolli per la presa in carico dei soggetti ammoniti",
    "options": {
      "A": "sono stipulati con i centri specialistici che offrono, a pagamento, un percorso di recupero volto all'acquisizione della consapevolezza del disvalore delle condotte tenute",
      "B": "mirano ad ampliare l'efficacia dello strumento dell'ammonimento, facilitando la partecipazione del soggetto a percorsi multidisciplinari volti a ridurre il rischio della reiterazione delle condotte violente",
      "C": "sono accordi di rete, cui partecipano, oltre al Questore, anche il Prefetto e il Procuratore della repubblica"
    },
    "answer": "B"
  },
  {
    "question": "quale legge ha introdotto la fattispecie penale di atti persecutori?",
    "options": {
      "A": "la legge 5 aprile 2001, nr 154",
      "B": "la legge 15 ottobre 2013, nr 119",
      "C": "la legge 23 aprile 2009, nr 38\n ANSWER: C\t\n\tcon riferimento all'assunzione delle dichiarazioni di persone informate sui fatti, la riforma Cartabia ha previsto che la persona escussa ha diritto di ottenere:\nA.\tche la verbalizzazione dell'atto sia effettuata alla presenza di un legale di fiducia nominato ai sensi dell'art 161 CPP\nB.\tche le sue dichiarazioni siano sempre documentate mediante riproduzione fonografica\nC.\tprevio avviso e ove ne faccia richiesta, che le sue dichiarazioni siano documentate mediante riproduzione fonografica, salva l'indisponibilità di strumenti di riproduzione o personale tecnico"
    },
    "answer": "C"
  },
  {
    "question": "quando può essere applicata la misura di prevenzione per condotte di violenza domestica?",
    "options": {
      "A": "quando alle forze dell'ordine sia segnalato un fatto riconducibile ai reati di percosse o lesioni lievi procedibili a querela commessi nell'ambito di violenza domestica",
      "B": "a seguito di querela presentata per i reati di percosse o lesioni commessi nell'ambito di violenza domestica",
      "C": "a seguito di istanza della vittima di violenza domestica"
    },
    "answer": "A"
  },
  {
    "question": "l'arresto in flagranza differita di cui all'art 382 bis CPP è previsto:",
    "options": {
      "A": "in alternativa alle misure dell'allontanamento d'urgenza dalla casa familiare di cui all'art 384 bis CPP",
      "B": "solo per le fattispecie di reato di cui agli articoli 387 bis CP, 572 CP e 612 bis CP",
      "C": "quando l'autore, subito dopo il reato, è inseguito dalla PG, dalla persona offesa o da altre persone ovvero è sorpreso con cose o tracce dalle quali appaia che abbia commesso il reato immediatamente prima"
    },
    "answer": "B"
  },
  {
    "question": "quale legge ha introdotto il reato di diffusione illecita di immagini o video sessualmente espliciti (art 612 ter CP) ?",
    "options": {
      "A": "il decreto legislativo 15 dicembre 2015, nr 212",
      "B": "la legge 19 luglio 2019, nr 69",
      "C": "la legge 15 ottobre 2013, nr 119"
    },
    "answer": "B"
  },
  {
    "question": "quale dispositivo della Polizia di Stato è stato ampliato nel 2020 per agevolare le segnalazioni di violenza domestica alle sale operative?",
    "options": {
      "A": "il numero di pubblica utilità antiviolenza 1522",
      "B": "la campagna \"Questo non è amore\"",
      "C": "l'app YouPol"
    },
    "answer": "C"
  },
  {
    "question": "esiste un servizio telefonico pubblico il cittadino può rivolgersi per ricevere informazioni sui centri antiviolenza?",
    "options": {
      "A": "l'app YouPol",
      "B": "il numero verde 1522 gestito dal dipartimento per le pari opportunità della Presidenza del Consiglio dei Ministri",
      "C": "l'applicativo Scudo"
    },
    "answer": "B"
  },
  {
    "question": "il documento di viaggio si considera valido:",
    "options": {
      "A": "se è valido per almeno un mese dopo la data prevista per la partenza dal territorio nazionale",
      "B": "se è stato rilasciato nel corso dei 10 anni precedenti",
      "C": "se attesta peso e altezza del titolare"
    },
    "answer": "B"
  },
  {
    "question": "il visto di ingresso:",
    "options": {
      "A": "è un timbro apposto sul passaporto dello straniero che consente l'ingresso nello spazio Schengen",
      "B": "è un'autorizzazione orale rilasciata dall'ambasciata",
      "C": "è rilasciato dal Ministero degli affari esteri e della cooperazione internazionale (MAECI) e dalla sua rete di uffici diplomatici-consolari abilitati"
    },
    "answer": "C"
  },
  {
    "question": "il timbro di frontiera",
    "options": {
      "A": "è posto in entrata e uscita dale frontiere Schengen",
      "B": "è apposto solo in uscita dalle frontiere nazionali",
      "C": "è apposto solo in entrata alle frontiere Schengen"
    },
    "answer": "A"
  },
  {
    "question": "la banca dati Schengen è conosciuta come:",
    "options": {
      "A": "CEN",
      "B": "SIS II",
      "C": "SDI\n ANSWER: B\t\n\tIL RESPINGIMENTO è:\nA.\tun provvedimento amministrativo di competenza dell'autorità di frontiera\nB.\tun provvedimento amministrativo di competenza del Ministro dell'Interno\nC.\tun provvedimento amministrativo di allontanamento dello straniero di competenza del Prefetto"
    },
    "answer": "A"
  },
  {
    "question": "il timbro in frontiera",
    "options": {
      "A": "è adottato in formato uniforme da tutti i paesi Schengen",
      "B": "è apposto, a discrezione dell'operatore in frontiera, in caso di ingresso e uscita dello straniero dallo spazio Schengen",
      "C": "è apposto dall'operatore in frontiera solo per i casi di respingimento"
    },
    "answer": "A"
  },
  {
    "question": "come vengono verificate le condizioni per l'ingresso in Italia?",
    "options": {
      "A": "il possesso delle condizioni per l'ingresso in Italia è verificato sistematicamente nei confronti dei cittadini stranieri che richiedono di fare ingresso da una frontiera esterna Schengen",
      "B": "il possesso delle condizioni per l'ingresso deve essere sempre verificato nei confronti dei beneficiari del diritto alla libera circolazione",
      "C": "sono verificate a discrezionalità della guardia di frontiera nei confronti di chiunque richieda di fare ingresso dalla frontiera esterna Schengen in Italia"
    },
    "answer": "A"
  },
  {
    "question": "il possesso del visto di ingresso…",
    "options": {
      "A": "non è mai rilasciato in frontiera",
      "B": "costituisce diritto di ingresso in Italia per il solo possessore",
      "C": "deve essere verificato, se richiesto per la nazionalità, unitamente alle condizioni di ingresso in Italia"
    },
    "answer": "C"
  },
  {
    "question": "non è condizione di ingresso nell'area Schengen…",
    "options": {
      "A": "giustificare scopo e condizioni del soggiorno previsto",
      "B": "non essere segnalato SIS ai fini del respingimento o del rifiuto del soggiorno in area Schengen",
      "C": "verranno solo registrate le biometrie dei cittadini UE"
    },
    "answer": "C"
  },
  {
    "question": "nell'EES (Entry Exit System)",
    "options": {
      "A": "verranno registrate le biometrie dei cittadini di paesi terzi che si recano nello spazio Schengen per un soggiorno di breve durata",
      "B": "non verranno mai registrate le biometrie dei cittadini di paesi terzi che si recano nello spazio Schengen per un soggiorno di breve durata",
      "C": "verranno solo registrate le biometrie dei cittadini UE"
    },
    "answer": "A"
  },
  {
    "question": "quali sono gli uffici competenti a ricevere la domanda di protezione internazionale?",
    "options": {
      "A": "i Carabinieri",
      "B": "l'ufficio di Polizia di frontiera e la Questura",
      "C": "la guardia di finanza"
    },
    "answer": "B"
  },
  {
    "question": "qual è l'autorità competente all'individuazione dello stato competente all'esame della domanda nel caso ricorrano dubbi?",
    "options": {
      "A": "l'Unità Dublino",
      "B": "la commissione territoriale per il riconoscimento della protezione internazionale",
      "C": "la commissione nazionale per il diritto d'asilo"
    },
    "answer": "A"
  },
  {
    "question": "da quale fonte normativa è stato istituito il sistema \"Eurodac\"?",
    "options": {
      "A": "regolamento UE nr 604/2013",
      "B": "regolamento CE nr 2725/2000",
      "C": "direttiva europea nr 2004/83/CE"
    },
    "answer": "B"
  },
  {
    "question": "in quale caso il questore dispone il trattenimento del richiedente asilo in CPR?",
    "options": {
      "A": "quando il richiedente è privo di mezzi di sostentamento",
      "B": "quando il richiedente ha commesso un crimine contro l'umanità",
      "C": "quando è necessario verificare la nazionalità o l'identità del richiedente\n ANSWER: B\t\n\tquale permesso di soggiorno viene rilaasciato al richiedente la protezione internazionale?\nA.\til permesso di soggiorno per richiesta asilo, valido 6 mesi\nB.\til permesso di soggiorno per motivi di giustizia\nC.\til permesso di soggiorno per motivi umanitari"
    },
    "answer": "A"
  },
  {
    "question": "cosa fa la commissione territoriale quando non accoglie la richiesta di protezione internazionale e susstitono gravi motivi di carattere umanitario?",
    "options": {
      "A": "invia gli atti al Questopre per l'eventuale rilascio di un permesso di soggiorno ai sensi dell'art 5, comma 6 del TU sull'immigrazione",
      "B": "trasmette gli atti alla commissione Nazionale per i diritti d'asilo",
      "C": "invita lo straniero ad abbandonare il territorio nazionale"
    },
    "answer": "A"
  },
  {
    "question": "la decisione della commisione territoriale che rigetta la domanda di asilo è impugnabile?",
    "options": {
      "A": "Si, di fronte alla giustizia ordinaria",
      "B": "no",
      "C": "si, di fronte al giudice amministrativo"
    },
    "answer": "A"
  },
  {
    "question": "la decisione del tribunale che rigetta il ricorso proposto dal richiedente la protezione internazionale, è appellabile?",
    "options": {
      "A": "solo quando il richiedente si trovi all'interno di un CPR",
      "B": "si",
      "C": "no, è ricorribile solo in cassazione"
    },
    "answer": "C"
  },
  {
    "question": "che validità ha il permesso di soggiorno rilasciato allo straniero cui è stata riconosciuta la protezione internazionale?",
    "options": {
      "A": "2 anni",
      "B": "3 anni",
      "C": "5 anni"
    },
    "answer": "C"
  },
  {
    "question": "quando viene rilasciato il titolo di viaggio per stranieri?",
    "options": {
      "A": "quando sussistono fondate ragioni che non consentano al titolare dello status di chiedere il passaporto alle autorità diplomatiche del paese di cittadinanza",
      "B": "per consentire viaggi all'interno del territorio nazionale",
      "C": "quando lo straniero deve sostenere il colloquio davanti alla commissione territoriale"
    },
    "answer": "A"
  },
  {
    "question": "l'attività dell'operatore in servizio di OP nell'ambito dei diritti costituzionali:",
    "options": {
      "A": "è un presidio all'esercizio di essi",
      "B": "ne è l'originatore",
      "C": "è un limite ad essi"
    },
    "answer": "A"
  },
  {
    "question": "l'operatore di polizia in servizio di OP:",
    "options": {
      "A": "deve evitare atteggiamenti di assenso o dissenso con i manifestanti",
      "B": "deve considerare il manifestante come un nemico",
      "C": "può giudicare la giustezza o meno di una manifestazione che si svolge nel rispetto della legge"
    },
    "answer": "A"
  },
  {
    "question": "la sede naturale per l'analisi di eventuali criticità può essere effettuata:",
    "options": {
      "A": "mentre vengono impartiti gli ordini",
      "B": "durante la manifestazione",
      "C": "durante il debriefing"
    },
    "answer": "C"
  },
  {
    "question": "durante un incontro di calcio, una decisione arbitrale penalizza palesemente la squadra del cuore dell'operatore di Polizia, egli dovrà:",
    "options": {
      "A": "rimanere impassibile evitando qualsiasi atteggiamento che possa essere interpretato come assenso o dissenso",
      "B": "accomunarsi alle proteste del pubblico",
      "C": "esprimere il proprio disappunto\n ANSWER: A\t\n\tqual è il principio cardine che deve connotare la reazione o l'intervento dell'operatore di polizia?\nA.\treagire o intervenire immediatamente per creare nel soggetto la sensazione di inferiorità psicologica e di assoggettamento all'autorità\nB.\treagire ed intervenire portando sempre il soggetto a terra tirando una leva articolare al fine di ammanettarlo\nC.\tagire in sicurezza tutelando l'incolumità e la dignità del soggetto su cui si interviene o verso il quale si è costretti a reagire"
    },
    "answer": "C"
  },
  {
    "question": "i rapporti tra i diversi ruoli e qualifiche della Polizia di stato sono disciplinati:",
    "options": {
      "A": "da apposito provvedimento emanato annualmente dal capo della Polizia",
      "B": "dalla legge 121/81",
      "C": "dal regolamento di servizio"
    },
    "answer": "C"
  },
  {
    "question": "l'organizzazione della Polizia di Stato è di natura:",
    "options": {
      "A": "parzialmente pariterica",
      "B": "gerarchica",
      "C": "pariterica"
    },
    "answer": "B"
  },
  {
    "question": "l'uso della forza durante un servizio di OP deve essere:",
    "options": {
      "A": "esattamente di pari livello alla violenza esercitata dai manifestanti",
      "B": "proporzionato e limitato al ripristino di una condizione di legalità",
      "C": "superiore al livello di violenza dei manifestanti in quanto la forza ha una finalità educativa"
    },
    "answer": "B"
  },
  {
    "question": "garantire ai cittadini i propri diritti significa:",
    "options": {
      "A": "consentire loro di manifestare senza preavviso",
      "B": "consentire loro di esprimere il proprio dissenso nelle forme lecite e pacifiche",
      "C": "consentire loro di scendere in piazza a volto coperto"
    },
    "answer": "B"
  },
  {
    "question": "è un valore fondamentale per l'operatore di Polizia:",
    "options": {
      "A": "credo religioso",
      "B": "appartenenza politica",
      "C": "senso dello Stato"
    },
    "answer": "C"
  },
  {
    "question": "cosa sono le norme di sicurezza?",
    "options": {
      "A": "una norma del codice della strada",
      "B": "comportamenti ed atteggiamenti da attuare per garantire la sicurezza nell'uso e nel maneggio delle armi da fuoco",
      "C": "una norma del codice penale"
    },
    "answer": "B"
  },
  {
    "question": "quale atteggiamento bisogna avere nei confronti di un'arma?",
    "options": {
      "A": "avere timore",
      "B": "atteggiamento equilibrato",
      "C": "atteggiamento spavaldo"
    },
    "answer": "B"
  },
  {
    "question": "la conoscenza delle armi è:",
    "options": {
      "A": "inutile",
      "B": "fondamentale",
      "C": "poco importante"
    },
    "answer": "B"
  },
  {
    "question": "le norme di sicurezza sono:",
    "options": {
      "A": "particolari",
      "B": "generali",
      "C": "generali e particolari\n ANSWER: C\t\n\tle norme di sicurezza generali\nA.\tsi riferiscono a tutte le armi da fuoco e a tutte le tecniche di tiro\nB.\tsi riferiscono ad una tecnica di tiro specifica\nC.\tsi riferiscono ad un'arma specifica"
    },
    "answer": "A"
  },
  {
    "question": "dove vanno custodite le armi?",
    "options": {
      "A": "in un luogo idoneo possibilmente in cassaforte",
      "B": "nel cassetto di un mobile",
      "C": "nel garage di casa"
    },
    "answer": "A"
  },
  {
    "question": "quando deve essere effettuata la pulizia dell'arma?",
    "options": {
      "A": "ogni giorno",
      "B": "periodicamente e dopo ogni esercitazione a fuoco",
      "C": "mai"
    },
    "answer": "B"
  },
  {
    "question": "le armi possono essere modificate?",
    "options": {
      "A": "solo da un bravo armaiolo",
      "B": "mai",
      "C": "si"
    },
    "answer": "B"
  },
  {
    "question": "le norme di sicurezza particolari si riferiscono…",
    "options": {
      "A": "a qualsiasi condizione di luogo",
      "B": "a qualsiasi condizione di tempo",
      "C": "ad una specifica condizione di luogo e di tempo"
    },
    "answer": "C"
  },
  {
    "question": "quando va posizionato il dito sul grilletto?",
    "options": {
      "A": "sempre",
      "B": "solo quando si ha intenzione di sparare",
      "C": "per intimorire l'avversario"
    },
    "answer": "B"
  },
  {
    "question": "un dato personale è:",
    "options": {
      "A": "l'anagrafica di un soggetto",
      "B": "informazioni che identificano o rendono identificabile una persona fisica e che possono fornire dettagli sulle sue caratteristiche",
      "C": "un dato che può ledere un diritto di un soggetto"
    },
    "answer": "B"
  },
  {
    "question": "il titolare del trattamento è chiamato a:",
    "options": {
      "A": "stabilire finalità e mezzi del trattamento",
      "B": "far rispettare quanto previsto dalla direttiva 680",
      "C": "far rispettare quanto previsto dalla direttiva 680 e comprovare tale rispetto"
    },
    "answer": "C"
  },
  {
    "question": "il registro dei trattamenti",
    "options": {
      "A": "nessuna delle precedenti risposte",
      "B": "è opzionale",
      "C": "contiene una descrizione delle misure di sicurezza implementate per ogni specifico trattamento"
    },
    "answer": "C"
  },
  {
    "question": "la data protection impact analysis",
    "options": {
      "A": "viene svolta dall'autorità garante per la protezione dei dati personali",
      "B": "va sempre eseguita",
      "C": "va eseguita solo in casi particolari\n ANSWER: C\t\n\tla sicurezza dei trattamenti\nA.\tdeve tener conto dei rischi per le persone fisiche\nB.\tdeve essere adeguata alla finalità dei trattamenti stessi\nC.\tentrambe le precedenti risposte"
    },
    "answer": "C"
  },
  {
    "question": "i log relativi agli accessi",
    "options": {
      "A": "non possono contenere informazioni sull'operatore di polizia che ha effettuato l'accesso",
      "B": "possono essere messi a disposizione dell'autorità garante per la protezione dei dati personali",
      "C": "non possono contenere informazioni sul trattamento eseguito"
    },
    "answer": "B"
  },
  {
    "question": "un'eventuale violazione dei dati personali",
    "options": {
      "A": "può essere tenuta segreta per motivi di sicurezza",
      "B": "non va necessariamente notificata agli interessati",
      "C": "non va necessariamento comunicata all'autorità garante per la protezione dei dati personali"
    },
    "answer": "B"
  },
  {
    "question": "la garanzia di continuità dei sistemi in caso di malfunzionamenti",
    "options": {
      "A": "è uno degli obbiettivi di sicurezza definito dalla norma",
      "B": "non rappresenta un aspetto di interesse della direttiva 680",
      "C": "rappresenta una scelta strategica demandata all'autorità garante per la protezione dei dati personali"
    },
    "answer": "A"
  },
  {
    "question": "il responsabile della protezione dei dati",
    "options": {
      "A": "deve avere assicurata l'indipendenza nelle proprie determinazioni dalle scelte strategiche del titolare",
      "B": "deve rendere conto al titolare del trattamento",
      "C": "è un ruolo che può essere ricoperto dallo stesso soggetto che ricopre il ruolo di titolare del trattamento"
    },
    "answer": "A"
  },
  {
    "question": "il trasferimento dei dati di polizia ad altri paesi membri",
    "options": {
      "A": "non è mai permesso",
      "B": "è permesso solo sotto opportune condizioni",
      "C": "è sempre permesso"
    },
    "answer": "B"
  },
  {
    "question": "l'OSCAD, oltre che da rappresentanti della direzione centrale della Polizia Criminale, è composto da:",
    "options": {
      "A": "rappresentanti delle forze do polizia a competenza generale",
      "B": "rappresentanti della polizia di stato",
      "C": "rappresentanti delle quattro forze di polizia"
    },
    "answer": "A"
  },
  {
    "question": "che cos'è un crimine d'odio?",
    "options": {
      "A": "un atto illecito compiuto per disprezzo nei confronti della vittima",
      "B": "un reato commesso in ragione del pregiudizio che l'autore nutre nei confronti di una \"caratteristica\" della vittima",
      "C": "qualunque atto di discriminazione commesso in ragione del pregiudizio che l'autore nutre nei confronti di una \"caratteristica della vittima"
    },
    "answer": "B"
  },
  {
    "question": "un \"hate speech\", può essere definito tale:",
    "options": {
      "A": "può essere indirizzato, a persone o gruppi, in ragione di \"caratteristiche protette\" degli stessi",
      "B": "deve avere esclusivamente una motivazione razzista",
      "C": "deve essere diffuso tramite internet"
    },
    "answer": "A"
  },
  {
    "question": "qual è una caratteritica peculiare dei crimini d'odio?",
    "options": {
      "A": "producono effetti dannosi a vari livelli",
      "B": "gli autori agiscono sempre in gruppo",
      "C": "limitano i propri effetti esclusivamente alla vittima\n ANSWER: A\t\n\tchi può inviare una segnalazionen ad OSCAD?\nA.\tchiunque\nB.\tsoltanto le forze di polizia\nC.\tsoltanto istituzioni pubbliche ed associazioni non governative"
    },
    "answer": "A"
  },
  {
    "question": "che cos'è l'under reporting?",
    "options": {
      "A": "il fenomeno per il quale i mass media tendono a non dare il giusto risalto ai crimini d'odio",
      "B": "il fenomeno per il quale le vittime e i testimoni di reati d'odio tendono a non denunciare",
      "C": "il fenomeno per il quale gli operatori di polizia non riconoscono i reati d'odio come tali, in sede di primo intervento e ricezione di denuncia"
    },
    "answer": "B"
  },
  {
    "question": "l'Italia dispone di una normativa penale per il contrasto dei crimini d'odio e dei discorsi d'odio?",
    "options": {
      "A": "no, per il contrasto dei crimini d'odio e dei discorsi d'odio si fa riferimento esclusivamente alle fonti normative europee ed alla costituzione della repubblica",
      "B": "si, la legge 654 del 1975 e il DL 122/93 convertito con legge 205/93, come modificato dal D.Lgs 21/18 che ha introdotto gli artt 604 bis e 604 ter",
      "C": "è stata introdotta con D.Lgs 21/18"
    },
    "answer": "B"
  },
  {
    "question": "quali sono gli ambiti protetti della normativa nazionale?",
    "options": {
      "A": "razza, etnia,nazionalità, religione",
      "B": "razza, etnia,nazionalità, religione e orientamento sessuale",
      "C": "razza, etnia,nazionalità, religione e appartenenza a minoranza linguistiche"
    },
    "answer": "C"
  },
  {
    "question": "per i reati aggravati dall'art 3 della legge Mancino (dal 6 aprile 2018, dall'art 604 ter CP, in virtù della modifica apportata dal D.Lgs. 21/18), la procedibilità:",
    "options": {
      "A": "dipende dalla tipologia di reato",
      "B": "è sempre d'ufficio",
      "C": "è d'ufficio soltanto nei casi di reati contro la persona"
    },
    "answer": "B"
  },
  {
    "question": "l'accesso ai luoghi ove si svolgono competizioni agonistiche è vietato:",
    "options": {
      "A": "a chi ostenta emblemi o simboli razzisti",
      "B": "a chi vi si reca con emblemi o simboli razzisti, esclusivamente in caso di manifestazioni calcistiche",
      "C": "a chi vi si reca con emblemi o simboli razzisti"
    },
    "answer": "C"
  },
  {
    "question": "il titolare dell'autorità garante per l'infanzia e l'adolescenza è nominato:",
    "options": {
      "A": "dal Presidente della Repubblica",
      "B": "dal Presidente della camera dei deputati e dal Presidente del senato",
      "C": "dal Presidente del consiglio dei ministri"
    },
    "answer": "B"
  },
  {
    "question": "l'autorità garante per l'infanzia e l'adolescenza compie azioni di:",
    "options": {
      "A": "ascolto e di carattere ispettivo",
      "B": "carattere sanzionatorio e legislativo",
      "C": "promozione e sensibilizzazione, ascolto e partecipazione, proposte e pareri, consultazioni e collaborazioni e segnalazioni…"
    },
    "answer": "C"
  },
  {
    "question": "l'autorità garante per l'infanzia e l'adolescenza si esprime attraverso: hanno molto investito nella individuazione di strategie idonee a incrementare il senso di fiducia, agendo agendo in particolare su un duplice versante:",
    "options": {
      "A": "formulazione di segnalazioni e ammonimenti",
      "B": "formulazione di pareri, raccomandazioni e segnalazioni",
      "C": "formulazione di pareri e irrogazione di sanzioni"
    },
    "answer": "B"
  },
  {
    "question": "l'autorità garante per l'infanzia e l'adolescenza favorisce lo sviluppo:",
    "options": {
      "A": "della cultura della mediazione e della giustizia riparativa",
      "B": "della cultura della conciliazione",
      "C": "esclusivamente della cultura della mediazione\n ANSWER: A\t\n\tl'ascolto dell'autorità garante per l'infanzia e l'adolescenza è definito \"ascolto istituzionale\" perché:\nA.\tè un potere di ascolto che gli viene conferito dalla legge istitutiva\nB.\tattraverso l'ascolto delle persone di minore età intercetta le loro richieste e bisogni e li porta all'attenzione delle istituzioni\nC.\tattraverso l'ascolto delle persone di minore età esprime un proprio parere"
    },
    "answer": "B"
  },
  {
    "question": "scomparso, disperso e irreperibile sono figure equivalenti?",
    "options": {
      "A": "no",
      "B": "solo scomparso e disperso",
      "C": "si"
    },
    "answer": "A"
  },
  {
    "question": "il Commissario di governo è nominato dal Ministro dell'Interno?",
    "options": {
      "A": "dipende dal ruolo di provenienza del commissario designato",
      "B": "si",
      "C": "no"
    },
    "answer": "C"
  },
  {
    "question": "La materia delle persone scomparse è disciplinata da una sola legge?",
    "options": {
      "A": "si",
      "B": "no",
      "C": "dipende dal luogo di scomparsa"
    },
    "answer": "B"
  },
  {
    "question": "Chi attiva i piani provinciali di ricerca?",
    "options": {
      "A": "il Questore",
      "B": "il Prefetto",
      "C": "il magistrato competente sul caso\n ANSWER: B\t\n\tquante sono, mediamente, le denuncie di scomparsa per anno in Italia?\nA.\tpiù di 10.000\nB.\tfra 1.000 e 5.000\nC.\tmeno di 10.000"
    },
    "answer": "A"
  },
  {
    "question": "chi può denunciare la notizia di una scomparsa?",
    "options": {
      "A": "familiari e parenti",
      "B": "chiunque",
      "C": "un familiare"
    },
    "answer": "B"
  },
  {
    "question": "la notizia di scomparsa va inserita al CED?",
    "options": {
      "A": "dipende dal caso",
      "B": "si",
      "C": "si, se disposto dalla magistratura"
    },
    "answer": "B"
  },
  {
    "question": "da chi vanno compilate le scede ri.sc?",
    "options": {
      "A": "dipende dal caso",
      "B": "da chi riceve la denuncia",
      "C": "da Polizia Scentifica, Racis, Ris, Medici legali"
    },
    "answer": "C"
  },
  {
    "question": "il commissario di governo per le persone scomparse si occupa anche di cadaveri non identificati?",
    "options": {
      "A": "si",
      "B": "no",
      "C": "dipende dai casi"
    },
    "answer": "A"
  },
  {
    "question": "le associazioni possono concorrere alle ricerche delle persone scomparse?",
    "options": {
      "A": "no",
      "B": "si",
      "C": "solo se autorizzate dal Prefetto"
    },
    "answer": "B"
  },
  {
    "question": "perché le parole scritte nei social network rischiano di essere fraintese?",
    "options": {
      "A": "perché le parole che usiamo (aspetto verbale della comunicazione) acquisiscono senso insieme al tono della voce, alle pause, al ritmo e perfino ai silenzi (aspetto paraverbale), così come all'espressione del viso e al linguaggio del corpo (non verbale)",
      "B": "perché ogni parola può avere significati diversi a seconda di chi la legge",
      "C": "perché il cospicuo numero di parole utilizzato nei social network può confondere"
    },
    "answer": "A"
  },
  {
    "question": "cosa si intente per metacomunicazione e qual è la sua funzione?",
    "options": {
      "A": "comunicare sinteticamente",
      "B": "comunicare sulla comunicazione (per esempio aggiungendo: sto scherzando, voleva essere un complimento…) e consente di precisare l'aspetto relazionale o il significato di un messaggio",
      "C": "comunicare con l'aldilà"
    },
    "answer": "B"
  },
  {
    "question": "in cosa consiste il termine \"natiquette\"?",
    "options": {
      "A": "è il nome di un software che facilita l'accesso ai social network",
      "B": "il termine deriva da network (rete) e étiquette (buona educazione) e consiste in un insieme di regole formali che disiplinano il comportamento di un utente sul web di internet",
      "C": "il termine deriva da network (rete) e étiquette (buona educazione) e consiste in un insieme di regole informali che disiplinano il comportamento di un utente sul web di internet, specie nel rapportarsi agli altri utentiquali"
    },
    "answer": "B"
  },
  {
    "question": "quali sono le principali posizioni percettive?",
    "options": {
      "A": "la prima (io), la seconda (il mio interlocutore)",
      "B": "la prima (io), la seconda (l'altro) e la terza, detta metaposizione o dell'osservatore esterno",
      "C": "ognuno percepisce le situazioni dalla propria prospettiva\n ANSWER: B\t\n\tin che modo, per esempio, è possibile comunicare consapevolmente sui social network?\nA.\tevitando argomenti delicati e opinioni forti\nB.\tinsultando l'interlocutore\nC.\tusando nomi di fantasia"
    },
    "answer": "A"
  },
  {
    "question": "la polizia di stato è presente nei social network?",
    "options": {
      "A": "si, è presente soprattutto su linkedin",
      "B": "si, è attiva sui maggiori social network",
      "C": "no, è un'istituzione conservatrice e contraria all'uso dei social network"
    },
    "answer": "B"
  },
  {
    "question": "qual è la differenza tra comunicazione digitale ed analogica?",
    "options": {
      "A": "la comunicazione digitale riguarda gli aspetti non verbali e para verbali mentre quella analogica riguarda il lessico, cioè le parole che usiamo convenzionalmente come segni arbitrari per definire qualcosa",
      "B": "la comunicazione digitale riguarda il lessico, cioè le parole che usiamo convenzionlmente come segni arbitrari per definire qualcosa  mentre la comunicazione analogica riguarda gli aspetti non verbali e para verbali",
      "C": "la comunicazione digitale riguarda la comunicazione in rete mentre quella analogica la comunicazione tra le persone in presenza"
    },
    "answer": "B"
  },
  {
    "question": "qual è la differenza tra comunicazione simmetrica e complementare?",
    "options": {
      "A": "si dice simmetrica la comunicazione non verbale e paraverbale, complementare quella che comprende anche il lessico",
      "B": "si dice simmetrica la comunicazione basata sull'uguaglianza, come nel caso di amici o colleghi, si ha invece un'interazione complementare quando un interlocutore si pone in una posizione superiore rispetto all'altro, per esempio genitore e figlio, medico e paziente o cittadino e poliziotto durante un controllo",
      "C": "si dice complementare la comunicazione basata sull'uguaglianza, come nel caso di amici o colleghi, si ha invece un'interazione simmetrica quando un interlocutore si pone in una posizione superiore rispetto all'altro come un  poliziotto col xcittadino durante un controllo"
    },
    "answer": "B"
  },
  {
    "question": "in che modo l'utilizzo delle posizioni percettive può evitare o risolvere conflitti?",
    "options": {
      "A": "il passaggio dalla prima alla seconda posizione consente di mettersi nei panni dell'altro",
      "B": "il passaggio dall'una all'altra posizione percettiva (io, l'altro e l'osservatore esterno) consente di vedere e sentire la situazione a 360°",
      "C": "il passaggio da una posizione percettiva all'altra distoglie l'attenzione dalle ragioni del conflitto"
    },
    "answer": "B"
  },
  {
    "question": "quand'è che siamo nella 2° posizione percettiva e in che modo può essere utile?",
    "options": {
      "A": "siamo nella 2° posizione percettiva quando ci \"mettiamo nei panni dell'altro\" e può essere utile per raggirarlo",
      "B": "siamo nella 2° posizione percettiva quando viviamo la situazione in prima persona e può essere utile soprattutto quando dobbiamo prendere decisioni",
      "C": "siamo nella 2° posizione percettiva quando ci \"mettiamo nei panni dell'altro\" ed è utile perché ci consente di raccogliere informazioni sul suo punto di vista e provare empatia"
    },
    "answer": "C"
  }
];

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizApp() {
  const [questions] = useState(shuffle(allQuestions).slice(0, 30));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (finished) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Quiz completato!</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
          Punteggio: {score} / {questions.length}
        </p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div style={{ textAlign: 'right', fontSize: '0.9rem' }}>
        Tempo rimasto: {formatTime(timeLeft)}
      </div>
      <div style={{
        marginTop: '1rem',
        background: 'white',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{current + 1}. {q.question}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {Object.entries(q.options).map(([key, text]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              style={{
                textAlign: 'left',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: selected === key
                  ? key === q.answer ? '#bbf7d0' : '#fecaca'
                  : 'white'
              }}
            >
              {key}. {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
