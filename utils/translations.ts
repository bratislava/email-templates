export const kontoTexts = {
  salutation: `{{#if firstName}}
  Dobrý deň, {{firstName}},
  {{else}}
  Dobrý deň,
  {{/if}}`,
  mainTexts: {
    errorVirus: {
      title: "Vo Vašej žiadosti sme našli vírus",
      content:
        'v prílohe, ktorú ste nahrali k žiadosti {{applicationName}} sme našli vírus. <strong>Prosíme, vráťte sa do Vášho Bratislavského konta a nahrajte správne prílohy.</strong> Bez toho nie je možné žiadosť odoslať a my sa tak žiaľ nebudeme vedieť venovať jej vybaveniu. Rozpracovanú žiadosť nájdete v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odosiela-sa" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>.',
    },
    errorTryAgain: {
      title: "Chyba pri odosielaní Vašej žiadosti",
      content:
        'pri odosielaní Vašej žiadosti {{applicationName}} nastala neočakávaná chyba. <strong>Prosíme, vráťte sa do Vášho Bratislavského konta a upravte žiadosť.</strong> Bez toho sa žiaľ nevieme venovať jej vybaveniu. Rozpracovanú žiadosť nájdete v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odosiela-sa" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>.',
    },
    errorNotSpecified: {
      title: "Chyba pri odosielaní Vašej žiadosti",
      content:
        'pri odosielaní Vašej žiadosti {{applicationName}} nastala neočakávaná chyba. <strong>Chceme Vás však uistiť, že na jej úspešnom odoslaní usilovne pracujeme a akonáhle žiadosť doručíme našim kolegom a kolegyniam, budú sa venovať jej vybaveniu.</strong> Žiadosť nájdete v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odosiela-sa" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>. O ďalšom postupe Vás budeme informovať',
    },
    inProgress: {
      title: "Na odoslaní Vašej žiadosti usilovne pracujeme",
      content:
        'ospravedlňujeme sa, že odoslanie Vašej žiadosti {{applicationName}} v Bratislavskom konte trvá dlhšie než zvyčajne. <strong>Chceme Vás však uistiť, že na jej úspešnom odoslaní usilovne pracujeme a akonáhle sa tak udeje, budeme Vás informovať</strong>. Detaily si môžete pozrieť vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odosiela-sa" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>.',
    },
    sent: {
      title: "Vaša žiadosť bola odoslaná",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola odoslaná</strong> a akonáhle ju doručíme našim kolegom a kolegyniam, budú sa venovať jej vybaveniu. Detaily si môžete pozrieť vo svojom Bratislavskom konte, v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odoslane" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a>. O ďalšom postupe Vás budeme informovať.',
    },
    delivered: {
      title: "Vaša žiadosť bola doručená",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola doručená</strong> našim kolegom a kolegyniam, ktorí sa budú odteraz venovať jej vybaveniu. Detaily si môžete pozrieť vo svojom Bratislavskom konte, v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odoslane" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a>. O ďalšom postupe Vás budeme informovať.',
    },
    success: {
      title: "Vaša žiadosť bola úspešne vybavená",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola úspešne vybavená.</strong> PDF dokument so záväzným stanoviskom k investičnej činnosti a detaily Vašej žiadosti nájdete vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odoslane" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a> po kliknutí na konkrétnu žiadosť.',
    },
    denied: {
      title: "Vaša žiadosť bola zamietnutá",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola zamietnutá.</strong> V prílohe nájdete právoplatné rozhodnutie s odôvodnením zamietnutia. Detaily žiadosti si tiež môžete pozrieť aj vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{feHost}}/moje-ziadosti?sekcia=odoslane" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a> po kliknutí na konkrétnu žiadosť.',
    },
    paasTestingInvitation: {
      title: "Poďte s nami testovať webstránku paas<span>.sk</span>",
      content:
        'záleží nám na kvalite mestských služieb a spokojnosti obyvateliek a obyvateľov pri ich používaní. Ako používateľa/-ku Bratislavského konta, by sme Vás radi pozvali na testovanie noviniek a úprav webovej stránky mestského parkovacieho systému <a href="https://paas.sk" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">paas.sk</a>. Testovanie trvá približne 45 minút a bude prebiehať 16.-29. októbra v priestoroch magistrátu na Primaciálnom námestí v Bratislave. Spýtame na Vaše skúsenosti so stránkou a názor na pripravované zmeny. <strong>Ak máte záujem zúčastniť sa testovania, prosím registrujete sa kliknutím na tlačidlo.</strong>',
      buttonTitle: "Registrovať sa na testovanie",
      buttonAddress:
        "https://calendly.com/jakub-hruby/testovanie-webu-paas-sk?month=2023-10",
    },
    taxesTestingInvitation: {
      title: "Vyskúšajte nové online daňové priznanie",
      content:
        "pozývame Vás na <strong>uzatvorené testovanie</strong> nového online <strong>priznania k dani z nehnuteľností.</strong> <br/><br/>Hľadáme daňovníčky a daňovníkov, ktorí <strong>majú povinnosť podať priznanie do 31. januára 2024</strong> a radi by otestovali nové online priznanie <strong>od vyplnenia až po skutočné odoslanie.</strong> <br/><br/> ",
      buttonTitle: "Prihlásiť sa na testovanie",
      secondaryHeading: "Ako sa zapojiť?",
      orderedList: `<ol>
        <li>Prihláste sa na testovanie (cez tlačidlo nižšie).</li>
        <li>
          Dňa <strong>23. januára 2024</strong> dostanete od nás 
          <strong>e-mail s odkazom na nové priznanie</strong>.
        </li>
        <li>
          Vyplňte priznanie, podpíšte s 
          <strong>elektronickým občianskym (eID)</strong> a odošlite 
          <strong>do 31. januára 2024</strong>.
        </li>
      </ol>`,
      buttonAddress: "https://forms.office.com/e/ZK4db7eq49",
    },
    taxesTestingInvitationSecond: {
      title: "Nové daňové priznanie je tu",
      content:
        "ďakujeme za Váš záujem zapojiť sa do uzatvoreného testovania nového online priznania k dani z nehnuteľností. Našim cieľom je otestovať <strong>celý proces podávania priznania, od vyplnenia až po jeho odoslanie</strong>. <br/><br/>",
      buttonTitle: "Vyplniť daňové priznanie",
      secondaryHeading:
        "Vyplňte priznanie do 31. januára 2024 iba v prípade, že:",
      unorderedListFirst: `<ul>
        <li>ste <strong>v roku 2023</strong> nadobudli nehnuteľnosť kúpou, darovaním či dražením,</li>
        <li>ste <strong>v roku 2023</strong> Vašu nehnuteľnosť predali, darovali, vydražili,</li>
        <li>alebo potrebujete vysporiadať bezpodielové spoluvlastníctvo manželov po rozvode.</li>
      </ul>`,
      ternaryHeading: "Na vyplnenie budete potrebovať:",
      unorderedListSecond: `<ul>
        <li><strong>aktívny elektronický občiansky preukaz</strong> (eID),</li>
        <li><strong>list/y vlastníctva</strong> k predmetnej nehnuteľnosti,</li>
        <li>zmluvu o nadobudnutí nehnuteľnosti.</li>
      </ul>`,
      buttonAddress:
        "https://konto.bratislava.sk/mestske-sluzby/priznanie-k-dani-z-nehnutelnosti",
      secondContent: `Ak by ste s vyplnením potrebovali pomôcť, neváhajte kontaktovať vedúcu oddelenia miestnych daní, poplatkov a licencií Vladimíru Ráczovú na <a href="mailto:vladimira.raczova@bratislava.sk" style="font-weight: 600;font-size: 16px;line-height: 24px;color: #333333;">vladimira.raczova@bratislava.sk</a>.`,
      secondContentTitle: "Potrebujete pomoc?",
    },
  },
  editFormTitle: "Upraviť žiadosť",
  reuploadAttachments: "Nahrať nové prílohy",
  redirectMyApplications: "Prejsť na Moje žiadosti",
  feedbackTitle:
    "Prosíme, ohodnoťte Vašu skúsenosť a pomôžte mestu Bratislava zlepšovať svoje služby.",
  feedbackButton: "Vyplniť dotazník",
  footerUsing:
    "Ďakujeme, že využívate naše služby.<br/>Vaše Hlavné mesto SR Bratislava",
  footerDevelop:
    "Ďakujeme, že nám pomáhate rozvíjať digitálne služby.<br/>Vaše Hlavné mesto SR Bratislava",
  unsubscribe:
    '<a href="{{unsubscribeLink}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odhlásenie z odberu</a>',
};

export const mpaTexts = {
  footer:
    "Ďakujeme, že využívate naše služby.<br/>Vaše Hlavné mesto SR Bratislava",
  validateEmail: {
    title: "Potrvďte email pre načítanie parkovacích kariet",
    description:
      "Pre pokračovanie s načítaním Vašich parkovacích kariet zadajte nasledujúci kód v mobilnej aplikácii.",
    validateEmail: "Potvrdiť email",
  },
  feedback: {
    title: "Feedback od používateľa",
    description: "Nasledovný feedback odoslal používateľ:",
    feedbackTemplate: "{{feedbackType}} - {{feedbackValue}}",
  },
  ticketEnded: {
    title: "Váš parkovací listok skončil",
    description:
      "Parkovací lístok do zóny {{parkingZone}} pre auto {{vehiclePlateNumber}} sa ukončil o {{parkingEnd}}.",
  },
  ticketAboutToEnd: {
    title: "Váš parkovací listok sa ukončí o 15 minút",
    description:
      "Parkovací lístok do zóny {{parkingZone}} pre auto {{vehiclePlateNumber}} sa ukončil o 15 minút.",
  },
};
