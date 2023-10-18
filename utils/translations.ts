export const kontoTexts = {
  salutation: "Dobrý deň, {{firstName}},",
  mainTexts: {
    errorVirus: {
      title: "Vo Vašej žiadosti sme našli vírus",
      content:
        'v prílohe, ktorú ste nahrali k žiadosti {{applicationName}} sme našli vírus. <strong>Prosíme, vráťte sa do Vášho Bratislavského konta a nahrajte správne prílohy.</strong> Bez toho nie je možné žiadosť odoslať a my sa tak žiaľ nebudeme vedieť venovať jej vybaveniu. Rozpracovanú žiadosť nájdete v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>.',
    },
    errorTryAgain: {
      title: "Chyba pri odosielaní Vašej žiadosti",
      content:
        'pri odosielaní Vašej žiadosti {{applicationName}} nastala neočakávaná chyba. <strong>Prosíme, vráťte sa do Vášho Bratislavského konta a upravte žiadosť.</strong> Bez toho sa žiaľ nevieme venovať jej vybaveniu. Rozpracovanú žiadosť nájdete v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>.',
    },
    inProgress: {
      title: "Na odoslaní Vašej žiadosti usilovne pracujeme",
      content:
        'ospravedlňujeme sa, že odoslanie Vašej žiadosti {{applicationName}} v Bratislavskom konte trvá dlhšie než zvyčajne. <strong>Chceme Vás však uistiť, že na jej úspešnom odoslaní usilovne pracujeme a akonáhle žiadosť doručíme našim kolegom a kolegyniam, budú sa venovať jej vybaveniu.</strong> Detaily si môžete pozrieť vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odosiela sa</a>. O ďalšom postupe Vás budeme informovať.',
    },
    sent: {
      title: "Vaša žiadosť bola odoslaná",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola odoslaná</strong> a akonáhle ju doručíme našim kolegom a kolegyniam, budú sa venovať jej vybaveniu. Detaily si môžete pozrieť vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a>. O ďalšom postupe Vás budeme informovať.',
    },
    delivered: {
      title: "Vaša žiadosť bola doručená",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola doručená</strong> našim kolegom a kolegyniam, ktorí sa budú odteraz začnú venovať jej vybaveniu. Detaily si môžete pozrieť vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a>. O ďalšom postupe Vás budeme informovať.',
    },
    success: {
      title: "Vaša žiadosť bola úspešne vybavená",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola úspešne vybavená.</strong> PDF dokument so záväzným stanoviskom k investičnej činnosti a detaily Vašej žiadosti nájdete vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a> po kliknutí na konkrétnu žiadosť.',
    },
    denied: {
      title: "Vaša žiadosť bola zamietnutá",
      content:
        'ďakujeme, že ste sa rozhodli podať žiadosť {{applicationName}} cez Bratislavské konto.<br/><br/><strong>Žiadosť bola zamietnutá.</strong> V prílohe nájdete právoplatné rozhodnutie s odôvodnením zamietnutia. Detaily žiadosti si tiež môžete pozrieť aj vo svojom Bratislavskom konte v sekcii Moje žiadosti, v časti <a href="{{linkApplications}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">Odoslané</a> po kliknutí na konkrétnu žiadosť.',
    },
    paasTestingInvitation: {
      title: "Poďte s nami testovať webstránku paas<span>.sk</span>",
      content:
        'záleží nám na kvalite mestských služieb a spokojnosti obyvateliek a obyvateľov pri ich používaní. Ako používateľa/-ku Bratislavského konta, by sme Vás radi pozvali na testovanie noviniek a úprav webovej stránky mestského parkovacieho systému <a href="https://paas.sk" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">paas.sk</a>. Testovanie trvá približne 45 minút a bude prebiehať 16.-29. októbra v priestoroch magistrátu na Primaciálnom námestí v Bratislave. Spýtame na Vaše skúsenosti so stránkou a názor na pripravované zmeny. <strong>Ak máte záujem zúčastniť sa testovania, prosím registrujete sa kliknutím na tlačidlo.</strong>',
      buttonTitle: "Registrovať sa na testovanie",
      buttonAddress:
        "https://calendly.com/jakub-hruby/testovanie-webu-paas-sk?month=2023-10",
    },
  },
  editFormTitle: "Upraviť žiadosť",
  feedbackTitle:
    "Prosíme, ohodnoťte Vašu skúsenosť a pomôžte mestu Bratislava zlepšovať svoje služby.",
  feedbackButton: "Vyplniť dotazník",
  footer:
    "Ďakujeme, že využívate naše služby.<br/>Vaše Hlavné mesto SR Bratislava",
  unsubscribe:
    'Ak sa chcete odhlásiť z odberu, <a href="{{unsubscribeLink}}" style="width: 100vw;min-width: 150px;font-weight: 500;font-size: 16px;line-height: 24px;color: #333333;">kliknite sem</a>.',
};

export const mpaTexts = {
  footer:
    "Ďakujeme, že využívate naše služby.<br/>Vaše Hlavné mesto SR Bratislava",
  validateEmail: {
    title: "Potrvďte email pre načítanie parkovacích kariet",
    description:
      "Pre pokračovanie s načítaním Vašich parkovacích kariet kliknite na tlačidlo, ktoré Vás presmeruje do mobilnej aplikácii a načíta Vaše dostupné parkovacie karty.",
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
