*februar 11, 2026  – Wessel Braakman*
> Ingen LLM/GenKI ble brukt til å skrive denne bloggen 🙂

## Innledning

I de tidligere blogginnleggene i denne serien introduserte vi ideen om å bygge en slags **norsk AI Bias Indicator**, hvor vi oversetter **Bias Benchmark for Question Answering (BBQ)** til norsk kontekst og språk, og delte våre første, foreløpige resultater. Målet har vært det samme fra starten av: å forstå hvordan skjevhet i store språkmodeller påvirkes av språk og kulturell kontekst, og å finne en transparent og reproduserbar måte å måle denne skjevheten på i Norge.

Prosjektet endret seg betydelig siden del 2. Det som startet som et lite eksperiment har blitt mer strukturert og mer datadrevet. Vi har utvidet datasettet (fortsatt manuelt), testet flere modeller, utviklet valideringsmetoder og startet samarbeid med både internasjonale forskere og norske institusjoner.

Samtidig har prosjektet fått et mer solid forankring. Arbeidet
gjennomføres nå under paraplyen til **Norsk AI-Etikkforening (NAIE), en ideell organisasjon med fokus på ansvarlig og etisk bruk av AI i Norge**.

Å være en del av NAIE betyr noe. Det gir arbeidet et tydeligere fundament og en sterkere uavhengighet. Dette er ikke en kommersiell benchmark eller en produktsammenligning, men et forskningsdrevet arbeid styrt av et felles mål om å forbedre transparens, rettferdighet og ansvarlighet i AI-systemer brukt i en norsk kontekst.

## Fra 40 til 400+ prompter

I den aller første fasen jobbet vi med kun 10 prompter i fire
kategorier, noe som resulterte i **40 oversatte og tilpassede spørsmål**. Det var nok til å komme i gang og avdekke noen interessante mønstre, men det var også svært begrensende. Med så få prompter er det vanskelig å si noe om nyanser, variasjon eller konsistens.

De siste månedene har vi manuelt utvidet datasettet til rundt 100 prompts innenfor disse fire kategoriene, noe som gir oss **mer enn 400 prompts totalt**.

![Progress](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/1-progress.png)

Denne økningen har gjort det mulig å utforske dimensjonen av fordommer innenfor kategorier som kjønn, alder og nasjonalitet, gjennom et langt bredere spekter av formuleringer, tone og kontekst.

Norsk er ikke et enkelt språk å teste. To skriftlige standarder, sterke dialektvariasjoner og mange implisitte kulturelle referanser gjør at små endringer i ordlyd kan få stor betydning. Ved å utvide datasettet har vi begynt å fange mer av denne kompleksiteten. Det gir oss et langt bedre grunnlag for å sammenligne modeller og for å forstå hvor og hvordan skjevhet oppstår. Vi fokuserer foreløpig kun på bokmål, men vil teste AI-systemer mot nynorsk når vi har fullført vår første komplette iterasjon.

Denne utvidelsen er også et steg på veien mot neste mål: et omfattende datasett på rundt 3 000 prompter for hver av de fire opprinnelige kategorier, før vi til slutt bygger et fullstendig datasett på rundt 3000 prompter for hver av de totalt 11 kategorier. De siste utvidelsene vil bli gjennomført ved hjelp av maler og skript, på samme måte som de opprinnelige BBQ-forskerne genererte sine datasett.

## Testing av flere modeller

I del 2 fokuserte vi hovedsakelig på prosess, hvordan gå fra kontekst ogspørsmål til ferdig prompt, hvordan sende dem inn og hvordan evaluere svarene. Som i del 2 kjørte vi det utvidede datasettet mot **ChatGPT**, **Gemini** og **Perplexity**, tre modeller med ulike bakgrunner, treningsdata og designvalg.

![LLM](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/2-llm.png

Noen modeller falt ofte tilbake på svært forsiktige svar som «det kan ikke avgjøres», mens andre var mer bastante og til tider tydelig mindre nøytrale. Vi la også merke til at norske spørsmål ikke alltid ga like tydelige svar, spesielt når promptet bygget på subtile sosiale eller kulturelle signaler fremfor eksplisitt informasjon.

Den opprinnelige BBQ-forskningen ble gjennomført på et langt tidligere stadium i utviklingen av LLM-er. Det betydde at **promptene som ble sendt inn ikke var åpne spørsmål, men inkluderte tre svaralternativer**. Modellene måtte da velge ett av disse tre. I vårt tilfelle stilte vi **åpne spørsmål**, noe som førte til at en modell av og til svarte **«både 1 og 2»**, eller til og med kom med et alternativ **«4»** der vi forventet ett av tre. Dette skapte mer kompleksitet, men innebærer også at vi ikke mater systemet med ferdige svaralternativer som kan påvirke eller styre responsen.

## Scoring: automatisering med menneskelig kontroll

Etter å ha samlet inn modellresponsene, var neste utfordring å evaluere dem, altså å avgjøre om et svar samsvarte med den nøytrale eller forventede etiketten.

Vi brukte en hybrid tilnærming:

-   **Automatisert scoring**, der skript mapper svarene til forhåndsdefinerte alternativer, ans0, ans1, ans2.
-   **Manuell scoring** for svar som var tvetydige, indirekte eller sterkt kontekstavhengige.

![Scoring](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/3-scoring.png)
![Scoring](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/4-scoring.png)

**Automatiseringen** gjorde det mulig å **håndtere omfanget av datasettet**, mens **manuell gjennomgang** sikret at **språklige nyanser og norske særtrekk ikke ble jevnet ut eller feiltolket**. Kombinasjonen ga oss et klarere bilde av overordnede trender, for eksempel når modeller systematisk heller mot nøytralitet eller konsekvent knytter bestemte demografiske trekk til bestemte utfall.

## Samarbeid og faglig forankring

Underveis har vi hatt løpende samtaler med forskere og organisasjoner som arbeider med skjevhet og AI-etikk.

Vi har hatt stor nytte av diskusjoner med **Alicia Parrish**, en av skaperne av det opprinnelige BBQ-datasettet og forskningen bak. Hennes tilbakemeldinger både bekreftet og utfordret deler av vår norske tilpasning.
Vi har også diskutert tilnærmingen vår med **Kathinka Vik** (nå styremedlem i foreningen) fra Likestillings- og diskrimineringsombudet (LDO), noe som har hjulpet oss å koble de tekniske funnene til reelle samfunnsspørsmål om diskriminering og rettferdighet.
I tillegg har vi delt tanker og erfaringer med **Mascha Kurpicz-Briki** og hennes kolleger i **The Bias Project**.

Disse utvekslingene er viktige for oss. De bidrar til at arbeidet både er metodisk solid og samfunnsmessig relevant. Gjennom NAIE er målet ikke bare å måle skjevhet, men å bruke innsikten til å støtte en mer ansvarlig og transparent bruk av AI i Norge.

## Foreløpige resultater

![Graph](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/5-graph.png)
\% Skjevhetsavvik per kategori per LLM\
Kilde: NoBBQ metode, populasjon ≅ 100 prompts, 2025-09-07

Figuren over viser foreløpige avvik i skjevhet per kategori og modell, basert på omtrent 100 prompts per kategori ved bruk av NoBBQ-metoden. **Selv om datasettet fortsatt er begrenset i størrelse, ser vi allerede tydelige forskjeller mellom modellene innen kategorier som kjønnsidentitet, alder, nasjonalitet og religion.**

Vi observerer at enkelte modeller konsekvent viser høyere avvik i spesifikke kategorier, mens andre oftere faller tilbake på nøytrale eller ubestemmelige svar. Mønstrene tyder på at skjevhet ikke manifesterer seg likt overalt, men varierer både mellom modeller og mellom ulike sosiale kategorier.

Resultatene bør leses som **utforskende** snarere enn **konkluderende**. De gir et **tidlig signal om hvordan norsk språk og kontekst påvirker modellatferd**, og de hjelper oss **å identifisere hvor det er størst behov for dypere analyser og videre utvidelse av datasettet**. En mer detaljert forklaring av metodikk, evalueringsprosess og begrensninger finnes på resultatsiden.

## Hva skjer videre: skalering og automatisering

Med et større datasett, flere modeller og en mer robust evalueringsprosess på plass, er vi klare for neste fase.

Våre hovedprioriteringer er:

-   Å **utvide datasettet** videre mot rundt 3 000 prompts for hvert av våre fire opprinnelige skjevhetskategorier, for å bedre gjenspeile bredden av situasjoner AI-systemer møter.\
-   Å **automatisere mer av prosessen**, fra generering av prompter basert på maler, til håndtering av prompter, modellforespørsler og evaluering, slik at NoBBQ blir repeterbar og bærekraftig over tid.

![Plan](/naie-no/blog/maling-av-fordommer-i-ai-systemer-del-3/6-plan.png)

Målet er å **bevege oss bort fra enkeltstående evalueringer** og over mot **kontinuerlig overvåking**. Det vil gjøre oss i stand til å følge endringer på tvers av modellversjoner, sammenligne systemer over tid og se om nye versjoner faktisk forbedrer eller forverrer skjevhetsrelatert atferd.

Vi utforsker også tettere samarbeid med norske akademiske miljøer og europeiske initiativer, inkludert BIAS-prosjektet ved NTNU, for å plassere arbeidet vårt i et bredere forskningslandskap.

## Refleksjoner: å informere og å inspirere

Helt fra starten har prosjektet hatt to ambisjoner:

For det første å **informere**, ved å gjøre skjevhet i AI-systemer synlig og målbar.
For det andre å **inspirere**, ved å vise at seriøs og etisk AI-forskning kan gjennomføres lokalt, på norsk og for norske kontekster.

Det som startet som et lite eksperiment har vokst til et langsiktig arbeid med rettferdighet i AI som kjerne. En av de tydeligste lærdommene så langt er at rettferdighet ikke kan tas for gitt. Den må bli testet, revurderet og forbedret kontinuerlig.

Mens vi arbeider videre med å fullføre NoBBQ-forskningen, er kjerneoppdraget uendret: å bidra til at AI-systemer brukt i Norge gjenspeiler verdiene om likhet, mangfold og rettferdighet som samfunnet vårt bygger på.

## Takk

Vi vil rette en stor takk til **Alicia Parrish, Kathinka Theodore Aakenes Vik, Mascha Kurpicz-Briki, The BIAS Project** og alle andre som har bidratt gjennom diskusjoner, tilbakemeldinger og samarbeid.

**NoBBQ** er nå et pågående forskningsarbeid innen **Norsk AI-Etikkforening (NAIE)**, der vi fortsetter å utvikle verktøy, innsikt og rammeverk for ansvarlig AI i Norge.

Hvis du er interessert i å følge arbeidet eller bidra i kommende faser, hører vi gjerne fra deg. Kontaktinformasjon finner du på vår nettside: **https://www.naie.no/**

Sammen kan vi bidra til å forme et mer rettferdig og transparent AI-landskap i Norge.
