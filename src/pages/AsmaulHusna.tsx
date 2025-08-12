import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lightbulb } from 'lucide-react';

const asmaulHusnaData = [
  { arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahmaan", englishMeaning: "The Beneficent, The Most or Entirely Merciful", frenchMeaning: "Le Tout Miséricordieux, le Très Miséricordieux", spanishMeaning: "El Clemente, el Misericordiosísimo" },
  { arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", englishMeaning: "The Merciful, The Bestower of Mercy", frenchMeaning: "Le Tout Miséricordieux, le Très Miséricordieux", spanishMeaning: "El Misericordioso, el Compasivo" },
  { arabic: "الْمَلِكُ", transliteration: "Al-Malik", englishMeaning: "The King, The Absolute Ruler, The Owner of Dominion", frenchMeaning: "Le Roi, Le Souverain Absolu, Le Maître du Domaine.", spanishMeaning: "El Rey, El Gobernante Absoluto, El Dueño del Dominio." },
  { arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", englishMeaning: "The Most Sacred, The Pure One, The Absolutely Pure", frenchMeaning: "Le Plus Sacré, Le Pur, L'Absolument Pur", spanishMeaning: "El Más Sagrado, El Puro, El Absolutamente Puro" },
  { arabic: "السَّلاَمُ", transliteration: "As-Salaam", englishMeaning: "The Source of Peace, The Flawless, The Embodiment of Peace", frenchMeaning: "La Source de Paix, L'Impeccable, L'Incarnation de la Paix", spanishMeaning: "La Fuente de Paz, El Impecable, La Encarnación de la Paz" },
  { arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", englishMeaning: "The Infuser of Faith, The Inspirer of Faith, The One Who gives Emaan and Security", frenchMeaning: "Celui qui insuffle la foi, Celui qui inspire la foi, Celui qui donne l'Emaan et la Sécurité.", spanishMeaning: "El Infusor de la Fe, El Inspirador de la Fe, Aquel que da Emaan y Seguridad." },
  { arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", englishMeaning: "The Preserver of Safety, The Guardian, The Witness, The Overseer", frenchMeaning: "Le Gardien de la Sécurité, Le Gardien, Le Témoin, Le Superviseur", spanishMeaning: "El Preservador de la Seguridad, El Guardián, El Testigo, El Supervisor" },
  { arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", englishMeaning: "The All-Mighty, The Victorious, The Strong, The Defeater who is not defeated", frenchMeaning: "Le Tout-Puissant, Le Victorieux, Le Fort, Le Vainqueur qui n'est pas vaincu.", spanishMeaning: "El Todopoderoso, El Victorioso, El Fuerte, El Vencedor que no es vencido." },
  { arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", englishMeaning: "The Compeller, The Restorer", frenchMeaning: "Le Contraignant, Le Restaurateur", spanishMeaning: "El Compelidor, El Restaurador" },
  { arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", englishMeaning: "The Supreme, The Majestic, The Greatest", frenchMeaning: "Le Suprême, Le Majestueux, Le Plus Grand", spanishMeaning: "El Supremo, El Majestuoso, El Más Grande" },
  { arabic: "الْخَالِقُ", transliteration: "Al-Khaaliq", englishMeaning: "The Creator, The Maker", frenchMeaning: "Le Créateur, Le Faiseur", spanishMeaning: "El Creador, El Hacedor" },
  { arabic: "الْبَارِئُ", transliteration: "Al-Baari", englishMeaning: "The Evolver, The Maker of Order, The Originator", frenchMeaning: "Le Façonneur, Le Créateur d'Ordre, L'Initiateur.", spanishMeaning: "El Evolucionador, El Creador de Orden, El Originador." },
  { arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", englishMeaning: "The Fashioner, The Shaper of Beauty", frenchMeaning: "Le Façonneur, Le Modeleur de Beauté", spanishMeaning: "El Diseñador, El Modelador de Belleza" },
  { arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", englishMeaning: "The Constant Forgiver, The All- and Oft-Forgiving", frenchMeaning: "Le Pardonneur Constant, Le Tout- et Souvent-Pardonneur", spanishMeaning: "El Perdonador Constante, El Todo y Siempre Perdonador" },
  { arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", englishMeaning: "The All-Prevailing One, The Subduer, The Ever-Dominating", frenchMeaning: "Le Tout-Puissant, Le Dompteur, Le Toujours-Dominant", spanishMeaning: "El Todopoderoso, El Sometedor, El Siempre Dominante" },
  { arabic: "الْوَهَّابُ", transliteration: "Al-Wahhaab", englishMeaning: "The Supreme Bestower, The Giver of All, The Giver of Gifts", frenchMeaning: "Le Suprême Donateur, Le Donateur de Tout, Le Donateur de Cadeaux", spanishMeaning: "El Supremo Otorgador, El Dador de Todo, El Dador de Regalos" },
  { arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaaq", englishMeaning: "The Provider, The Sustainer", frenchMeaning: "Le Pourvoyeur, Le Soutien", spanishMeaning: "El Proveedor, El Sustentador" },
  { arabic: "الْفَتَّاحُ", transliteration: "Al-Fattaah", englishMeaning: "The Supreme Solver, The Opener, The Judge", frenchMeaning: "Le Suprême Dissolvant, L'Ouvreur, Le Juge", spanishMeaning: "El Solucionador Supremo, El Que Abre, El Juez" },
  { arabic: "اَلْعَلِيْمُ", transliteration: "Al-'Aleem", englishMeaning: "The All-Knowing, The Omniscient", frenchMeaning: "Le Tout-Connaissant, L'Omniscient", spanishMeaning: "El Omnisciente, El Que Todo lo Sabe" },
  { arabic: "الْقَابِضُ", transliteration: "Al-Qaabid", englishMeaning: "The Withholder, The Constricter, The Restricting One", frenchMeaning: "Le Reteneur, Le Contracteur, Celui qui restreint", spanishMeaning: "El Retenedor, El Constrictor, El Restrictor" },
  { arabic: "الْبَاسِطُ", transliteration: "Al-Baasit", englishMeaning: "The Extender", frenchMeaning: "L'Extenseur", spanishMeaning: "El Extensor" },
  { arabic: "الْخَافِضُ", transliteration: "Al-Khaafidh", englishMeaning: "The Reducer, The Abaser", frenchMeaning: "Le Réducteur, L'Humiliateur", spanishMeaning: "El Reductor, El Humillador" },
  { arabic: "الرَّافِعُ", transliteration: "Ar-Raafi'", englishMeaning: "The Exalter, The Elevator", frenchMeaning: "L'Exalteur, L'Élévateur", spanishMeaning: "El Exaltador, El Elevador" },
  { arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", englishMeaning: "The Honourer, The Bestower of Honor", frenchMeaning: "L'Honoreur, Le Donateur d'Honneur", spanishMeaning: "El Honrador, El Otorgador de Honor" },
  { arabic: "الْمُذِلُّ", transliteration: "Al-Muzil", englishMeaning: "The Dishonourer, The Humiliator, The Abaser", frenchMeaning: "Le Déshonoreur, L'Humiliateur, L'Abaisser", spanishMeaning: "El Deshonrador, El Humillador, El Degradador" },
  { arabic: "السَّمِيعُ", transliteration: "As-Samee'", englishMeaning: "The All-Hearing", frenchMeaning: "L'Omni-Audient", spanishMeaning: "El Omnioyente" },
  { arabic: "الْبَصِيرُ", transliteration: "Al-Baseer", englishMeaning: "The All-Seeing", frenchMeaning: "Le Tout-Voyant", spanishMeaning: "El Omnisciente" },
  { arabic: "الْحَكَمُ", transliteration: "Al-Hakam", englishMeaning: "The Judge, The Giver of Justice", frenchMeaning: "Le Juge, Le Donneur de Justice", spanishMeaning: "El Juez, El Dador de Justicia" },
  { arabic: "الْعَدْلُ", transliteration: "Al-'Adl", englishMeaning: "The Utterly Just", frenchMeaning: "Le Juste Absolu", spanishMeaning: "El Justo Absoluto" },
  { arabic: "اللَّطِيفُ", transliteration: "Al-Lateef", englishMeaning: "The Subtle One, The Most Gentle", frenchMeaning: "Le Subtil, Le Plus Doux", spanishMeaning: "El Sutil, El Más Gentil" },
  { arabic: "الْخَبِيرُ", transliteration: "Al-Khabeer", englishMeaning: "The All-Aware, The Acquainted", frenchMeaning: "Le Tout-Connaissant, L'Informé", spanishMeaning: "El Omnisciente, El Enterado" },
  { arabic: "الْحَلِيمُ", transliteration: "Al-Haleem", englishMeaning: "The Most Forbearing", frenchMeaning: "Le Plus Indulgent", spanishMeaning: "El Más Indulgente" },
  { arabic: "الْعَظِيمُ", transliteration: "Al-'Azeem", englishMeaning: "The Magnificent, The Supreme", frenchMeaning: "Le Magnifique, Le Suprême", spanishMeaning: "El Magnífico, El Supremo" },
  { arabic: "الْغَفُورُ", transliteration: "Al-Ghafoor", englishMeaning: "The Forgiving, The Exceedingly Forgiving", frenchMeaning: "Le Pardonneur, L'Infiniment Pardonneur", spanishMeaning: "El Perdonador, El Sumamente Perdonador" },
  { arabic: "الشَّكُورُ", transliteration: "Ash-Shakoor", englishMeaning: "The Most Appreciative", frenchMeaning: "Le plus reconnaissant", spanishMeaning: "El más agradecido" },
  { arabic: "الْعَلِيُّ", transliteration: "Al-'Alee", englishMeaning: "The Most High, The Exalted", frenchMeaning: "Le Très-Haut, L'Exalté", spanishMeaning: "El Altísimo, El Exaltado" },
  { arabic: "الْكَبِيرُ", transliteration: "Al-Kabeer", englishMeaning: "The Greatest, The Most Grand", frenchMeaning: "Le Plus Grand, Le Plus Magnifique", spanishMeaning: "El Más Grande, El Más Grandioso" },
  { arabic: "الْحَفِيظُ", transliteration: "Al-Hafeedh", englishMeaning: "The Preserver, The All-Heedful and All-Protecting", frenchMeaning: "Le Préservateur, Le Tout-Attentif et Le Tout-Protecteur", spanishMeaning: "El Preservador, El Todo Atento y El Todo Protector" },
  { arabic: "الْمُقِيتُ", transliteration: "Al-Muqeet", englishMeaning: "The Sustainer", frenchMeaning: "Le Soutien", spanishMeaning: "El Sostenedor" },
  { arabic: "الْحسِيبُ", transliteration: "Al-Haseeb", englishMeaning: "The Reckoner, The Sufficient", frenchMeaning: "Le Calculateur, Le Suffisant", spanishMeaning: "El Calculador, El Suficiente" },
  { arabic: "الْجَلِيلُ", transliteration: "Al-Jaleel", englishMeaning: "The Majestic", frenchMeaning: "Le Majestueux", spanishMeaning: "El Majestuoso" },
  { arabic: "الْكَرِيمُ", transliteration: "Al-Kareem", englishMeaning: "The Most Generous, The Most Esteemed", frenchMeaning: "Le Plus Généreux, Le Plus Estimé", spanishMeaning: "El Más Generoso, El Más Estimado" },
  { arabic: "الرَّقِيبُ", transliteration: "Ar-Raqeeb", englishMeaning: "The Watchful", frenchMeaning: "Le Vigilant", spanishMeaning: "El Vigilante" },
  { arabic: "الْمُجِيبُ", transliteration: "Al-Mujeeb", englishMeaning: "The Responsive One, The Hearkener", frenchMeaning: "Le Réactif, L'Écouteur", spanishMeaning: "El Responsivo, El Oyente" },
  { arabic: "الْوَاسِعُ", transliteration: "Al-Waasi'", englishMeaning: "The All-Encompassing, The Boundless, The Vast", frenchMeaning: "L'Omniprésent, L'Illimité, Le Vaste", spanishMeaning: "El Que Todo Lo Abarca, El Ilimitado, El Vasto" },
  { arabic: "الْحَكِيمُ", transliteration: "Al-Hakeem", englishMeaning: "The All-Wise, The Judge of Judges", frenchMeaning: "Le Tout-Sage, Le Juge des Juges", spanishMeaning: "El Omnisciente, El Juez de Jueces" },
  { arabic: "الْوَدُودُ", transliteration: "Al-Wadood", englishMeaning: "The Most Loving", frenchMeaning: "Le Plus Aimant", spanishMeaning: "El Más Amoroso" },
  { arabic: "الْمَجِيدُ", transliteration: "Al-Majeed", englishMeaning: "The Glorious, The Most Honorable", frenchMeaning: "Le Glorieux, Le Plus Honorable", spanishMeaning: "El Glorioso, El Más Honorable" },
  { arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", englishMeaning: "The Resurrector, The Raiser of the Dead, The Infuser of New Life", frenchMeaning: "Le Résurrecteur, Le Releveur des Morts, L'Infuseur de Nouvelle Vie", spanishMeaning: "El Resucitador, El Levantador de los Muertos, El Infusor de Nueva Vida" },
  { arabic: "الشَّهِيدُ", transliteration: "Ash-Shaheed", englishMeaning: "The All Observing Witnessing, The Witness", frenchMeaning: "Le Témoin Omniscient, Le Témoin", spanishMeaning: "El Testigo Omnisciente, El Testigo" },
  { arabic: "الْحَقُّ", transliteration: "Al-Haqq", englishMeaning: "The Absolute Truth, The True, The One who truly exists", frenchMeaning: "La Vérité Absolue, Le Vrai, Celui qui existe vraiment", spanishMeaning: "La Verdad Absoluta, El Verdadero, Aquel que verdaderamente existe" },
  { arabic: "الْوَكِيلُ", transliteration: "Al-Wakeel", englishMeaning: "The Trustee, The Disposer of Affairs, The One who gives the satisfaction and is relied upon", frenchMeaning: "Le Fiduciaire, Celui qui gère les affaires, Celui qui donne la satisfaction et sur qui l'on compte.", spanishMeaning: "El Fiduciario, El Dispositor de Asuntos, Aquel que da la satisfacción y en quien se confía." },
  { arabic: "الْقَوِيُّ", transliteration: "Al-Qawiyy", englishMeaning: "The All-Strong, The Strong", frenchMeaning: "Le Tout-Puissant, Le Fort", spanishMeaning: "El Todopoderoso, El Fuerte" },
  { arabic: "الْمَتِينُ", transliteration: "Al-Mateen", englishMeaning: "The Firm, The Steadfast, The One with extreme Power which is un-interrupted and He does not get tired", frenchMeaning: "Le Ferme, Le Constant, Celui qui possède le Pouvoir parfait dont rien ne lui est refusé et Il ne se fatigue pas.", spanishMeaning: "El Firme, El Constante, El que tiene el Poder perfecto del que nada se le retiene y Él no se cansa." },
  { arabic: "الْوَلِيُّ", transliteration: "Al-Waliyy", englishMeaning: "The Protecting Friend, The Supporter", frenchMeaning: "Le Protecteur, Le Soutien", spanishMeaning: "El Amigo Protector, El Apoyo" },
  { arabic: "الْحَمِيدُ", transliteration: "Al-Hameed", englishMeaning: "The Praiseworthy, The Praised One who deserves to be praised", frenchMeaning: "Le Digne de louange, Le Loué, Celui qui mérite d'être loué", spanishMeaning: "El Digno de Alabanza, El Alabado, Aquel que merece ser alabado" },
  { arabic: "الْمُحْصِي", transliteration: "Al-Muhsee", englishMeaning: "The Accounter, The Counter, The Reckoner, The One who the count of things are known to him", frenchMeaning: "L'Accounteur, Le Compteur, Le Calculateur, Celui à qui le compte des choses est connu.", spanishMeaning: "El Contador, El Contable, El Calculador, Aquel a quien se le conoce el recuento de las cosas." },
  { arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", englishMeaning: "The Originator, The One who started the human being", frenchMeaning: "L'Originateur, Celui qui a commencé l'être humain.", spanishMeaning: "El Originador, Aquel que inició al ser humano." },
  { arabic: "الْمُعِيدُ", transliteration: "Al-Mu'eed", englishMeaning: "The Reproducer, The Restorer, The One who brings back the creatures after death", frenchMeaning: "Le Reproducteur, Le Restaurateur, Celui qui ramène les créatures après la mort", spanishMeaning: "El Reproductor, El Restaurador, Aquel que trae de vuelta a las criaturas después de la muerte" },
  { arabic: "الْمُحْيِي", transliteration: "Al-Muhyee", englishMeaning: "The Giver of Life, The Restorer", frenchMeaning: "Le Donateur de Vie, Le Restaurateur", spanishMeaning: "El Dador de Vida, El Restaurador" },
  { arabic: "الْمُمِيتُ", transliteration: "Al-Mumeet", englishMeaning: "The Creator of Death, The Destroyer, The One who renders the living dead", frenchMeaning: "Le Créateur de la Mort, le Destructeur, Celui qui rend les vivants morts", spanishMeaning: "El Creador de la Muerte, el Destructor, Aquel que deja a los vivos muertos" },
  { arabic: "الْحَيُّ", transliteration: "Al-Hayy", englishMeaning: "The Alive, The Ever Living", frenchMeaning: "Le Vivant, L'Éternel", spanishMeaning: "El Viviente, El Eterno" },
  { arabic: "الْقَيُّومُ", transliteration: "Al-Qayyoom", englishMeaning: "The Self-Subsisting, The Sustainer of All", frenchMeaning: "Le Subsistant par Soi-même, Le Soutien de Tout", spanishMeaning: "El Autosubsistente, El Sustentador de Todo" },
  { arabic: "الْوَاجِدُ", transliteration: "Al-Waajid", englishMeaning: "The Perceiver, The Finder, The Rich who is never poor", frenchMeaning: "Le Percepteur, Le Chercheur, Le Riche qui n'est jamais pauvre", spanishMeaning: "El Perceptor, El Buscador, El Rico que nunca es pobre" },
  { arabic: "الْمَاجِدُ", transliteration: "Al-Maajid", englishMeaning: "The Glorious, He who is Most Glorious", frenchMeaning: "Le Glorieux, Celui qui est le Plus Glorieux", spanishMeaning: "El Glorioso, Aquel que es el Más Glorioso" },
  { arabic: "الْوَاحِدُ", transliteration: "Al-Waahid", englishMeaning: "The Unique, The One, The One without a partner", frenchMeaning: "L'Unique, Le Seul, Celui sans partenaire", spanishMeaning: "El Único, El Uno, El que no tiene pareja" },
  { arabic: "اَلْأَحَدُ", transliteration: "Al-Ahad", englishMeaning: "The One", frenchMeaning: "Le Seul / L'Unique", spanishMeaning: "El Único / La Única" },
  { arabic: "الصَّمَدُ", transliteration: "As-Samad", englishMeaning: "The Eternal, The Independent, The Master who is relied upon in matters and reverted to in one's needs", frenchMeaning: "L'Éternel, l'Indépendant, le Maître sur qui l'on compte dans les affaires et vers qui l'on se tourne dans le besoin.", spanishMeaning: "El Eterno, el Independiente, el Maestro en quien se confía en los asuntos y a quien se recurre en las necesidades." },
  { arabic: "الْقَادِرُ", transliteration: "Al-Qaadir", englishMeaning: "The Able, The Capable, The One attributed with Power", frenchMeaning: "Le Capable, L'Habile, Celui à qui le Pouvoir est attribué", spanishMeaning: "El Capaz, El Hábil, Aquel a quien se le atribuye el Poder" },
  { arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", englishMeaning: "The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him", frenchMeaning: "Le Puissant, Le Dominant, Celui à la Puissance parfaite à qui rien n'est refusé.", spanishMeaning: "El Poderoso, El Dominante, Aquel con el Poder perfecto al que nada se le retiene." },
  { arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", englishMeaning: "The Expediter, The Promoter, The One who puts things in their right places", frenchMeaning: "Le Facilitateur, Le Promoteur, Celui qui met les choses à leur juste place.", spanishMeaning: "El Facilitador, El Promotor, Aquel que pone las cosas en su lugar." },
  { arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", englishMeaning: "The Postponer, He Who Puts Far Away", frenchMeaning: "Le Procrastinateur, Celui Qui Remet à Plus Tard", spanishMeaning: "El Postergador, Aquel Que Pone Lejos" },
  { arabic: "الْأَوَّلُ", transliteration: "Al-Awwal", englishMeaning: "The First, The One whose Existence is without a beginning", frenchMeaning: "Le Premier, Celui dont l'existence est sans commencement.", spanishMeaning: "El Primero, Aquel cuya existencia no tiene principio." },
  { arabic: "الْآخِرُ", transliteration: "Al-Aakhir", englishMeaning: "The Last, The One whose Existence is without an end", frenchMeaning: "Le Dernier, Celui dont l'Existence est sans fin", spanishMeaning: "El Último, Aquel cuya Existencia no tiene fin" },
  { arabic: "الظَّاهِرُ", transliteration: "Az-Zaahir", englishMeaning: "The Manifest, The Apparent", frenchMeaning: "Le Manifeste, L'Apparent", spanishMeaning: "El Manifiesto, Lo Aparente" },
  { arabic: "الْبَاطِنُ", transliteration: "Al-Baatin", englishMeaning: "The Hidden One, The Unseen", frenchMeaning: "Le Caché, L'Invisible", spanishMeaning: "El Oculto, El Invisible" },
  { arabic: "الْوَالِي", transliteration: "Al-Waali", englishMeaning: "The Governor, The Patron, The One who owns things and manages them", frenchMeaning: "Le Gouverneur, Le Patron, Celui qui possède et gère les choses.", spanishMeaning: "El Gobernador, El Patrón, El que posee y administra las cosas." },
  { arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'aali", englishMeaning: "The Most Exalted, The High Exalted, The Self Exalted, The One who is clear from the attributes of the creation", frenchMeaning: "Le Très-Haut, Le Sublime, Celui qui s'exalte Lui-même, Celui qui est exempt des attributs de la création.", spanishMeaning: "El Altísimo, El Sublime, Aquel que se exalta a Sí mismo, Aquel que está libre de los atributos de la creación." },
  { arabic: "الْبَرُّ", transliteration: "Al-Barr", englishMeaning: "The Source of All Goodness, The Doer of Good", frenchMeaning: "La Source de Toute Bonté, Le Faiseur de Bien", spanishMeaning: "La Fuente de Toda Bondad, El Hacedor del Bien" },
  { arabic: "التَّوَّابُ", transliteration: "At-Tawwaab", englishMeaning: "The Ever-Pardoning, The Relenting", frenchMeaning: "Le Tout-Pardonnant, Le Clément", spanishMeaning: "El Indulgente, El Clemente" },
  { arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", englishMeaning: "The Avenger", frenchMeaning: "L'Avenger", spanishMeaning: "El Vengador" },
  { arabic: "العَفُوُّ", transliteration: "Al-'Afuww", englishMeaning: "The Pardoner", frenchMeaning: "Le Pardonneur", spanishMeaning: "El Perdonador" },
  { arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'oof", englishMeaning: "The Most Kind", frenchMeaning: "Le plus gentil", spanishMeaning: "El más amable" },
  { arabic: "مَالِكُ الْمُلْكِ", transliteration: "Maalik-ul-Mulk", englishMeaning: "Master of the Kingdom, Owner of the Dominion", frenchMeaning: "Maître du Royaume, Propriétaire du Domaine", spanishMeaning: "Maestro del Reino, Dueño del Dominio" },
  { arabic: "ذُو الْجَلاَلِ وَالإِكْرَامِ", transliteration: "Dhul-Jalaali Wal-Ikraam", englishMeaning: "Possessor of Glory and Honour, Lord of Majesty and Generosity", frenchMeaning: "Possesseur de Gloire et d'Honneur, Seigneur de Majesté et de Générosité", spanishMeaning: "Poseedor de Gloria y Honor, Señor de Majestad y Generosidad" },
  { arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", englishMeaning: "The Just One", frenchMeaning: "Le Juste", spanishMeaning: "El Justo" },
  { arabic: "الْجَامِعُ", transliteration: "Al-Jaami'", englishMeaning: "The Gatherer, The Uniter", frenchMeaning: "Le Rassembleur, L'Unificateur", spanishMeaning: "El Recolector, El Unificador" },
  { arabic: "الْغَنِيُّ", transliteration: "Al-Ghaniyy", englishMeaning: "The Rich, The Independent", frenchMeaning: "Les Riches, Les Indépendants", spanishMeaning: "Los Ricos, Los Independientes" },
  { arabic: "الْمُغْنِي", transliteration: "Al-Mughnee", englishMeaning: "The Enricher, The Sufficer", frenchMeaning: "L'Enrichisseur, Le Suffisant", spanishMeaning: "El Enriquecedor, El Suficiente" },
  { arabic: "الْمَانِعُ", transliteration: "Al-Maani'", englishMeaning: "The Preventer, The Withholder", frenchMeaning: "Le Préventeur, Le Reteneur", spanishMeaning: "El Prevensor, El Retenedor" },
  { arabic: "الضَّارُّ", transliteration: "Ad-Daarr", englishMeaning: "The Distressor, The Harmer (only by His will)", frenchMeaning: "Le Tourmenteur, Celui qui nuit (seulement par Sa volonté)", spanishMeaning: "El Angustiador, El Dañino (solo por Su voluntad)" },
  { arabic: "النَّافِعُ", transliteration: "An-Naafi'", englishMeaning: "The Benefactor, The Propitious, The Giver of Good", frenchMeaning: "Le Bienfaiteur, Le Propice, Le Donateur de Bien", spanishMeaning: "El Benefactor, El Propicio, El Dador de Bien" },
  { arabic: "النُّورُ", transliteration: "An-Noor", englishMeaning: "The Light", frenchMeaning: "La Lumière", spanishMeaning: "La Luz" },
  { arabic: "الْهَادِي", transliteration: "Al-Haadee", englishMeaning: "The Guide", frenchMeaning: "Le Guide", spanishMeaning: "El Guía" },
  { arabic: "الْبَدِيعُ", transliteration: "Al-Badee'", englishMeaning: "The Incomparable, The Originator", frenchMeaning: "L'Incomparable, L'Original", spanishMeaning: "El Incomparable, El Originador" },
  { arabic: "الْبَاقِي", transliteration: "Al-Baaqee", englishMeaning: "The Everlasting, The Enduring", frenchMeaning: "L'Éternel, L'Endurant", spanishMeaning: "El Eterno, El Duradero" },
  { arabic: "الْوَارِثُ", transliteration: "Al-Waarith", englishMeaning: "The Inheritor, The Ultimate Heir", frenchMeaning: "L'Héritier, L'Ultime Héritier", spanishMeaning: "El Heredero, El Heredero Definitivo" },
  { arabic: "الرَّشِيدُ", transliteration: "Ar-Rasheed", englishMeaning: "The Guide to the Right Path, The Righteous Teacher", frenchMeaning: "Le Guide du Droit Chemin, le Juste Enseignant", spanishMeaning: "La Guía del Camino Correcto, el Maestro Justo" },
  { arabic: "الصَّبُورُ", transliteration: "As-Saboor", englishMeaning: "The Patient, The Forbearing", frenchMeaning: "Le Patient, Le Magnanime", spanishMeaning: "El Paciente, El Tolerante" },
];

export default function AsmaulHusna() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {t('asmaulHusna.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('asmaulHusna.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {asmaulHusnaData.map((name, index) => (
            <Card key={index} className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-2">
                  {name.arabic}
                </CardTitle>
                <p className="text-lg text-muted-foreground font-semibold">
                  {name.transliteration}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {i18n.language === 'fr' ? name.frenchMeaning : i18n.language === 'es' ? name.spanishMeaning : name.englishMeaning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}