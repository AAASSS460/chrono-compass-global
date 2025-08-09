import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lightbulb } from 'lucide-react';

const asmaulHusnaData = [
  { arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahmaan", englishMeaning: "The Beneficent, The Most or Entirely Merciful" },
  { arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", englishMeaning: "The Merciful, The Bestower of Mercy" },
  { arabic: "الْمَلِكُ", transliteration: "Al-Malik", englishMeaning: "The King, The Absolute Ruler, The Owner of Dominion" },
  { arabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", englishMeaning: "The Most Sacred, The Pure One, The Absolutely Pure" },
  { arabic: "السَّلاَمُ", transliteration: "As-Salaam", englishMeaning: "The Source of Peace, The Flawless, The Embodiment of Peace" },
  { arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", englishMeaning: "The Infuser of Faith, The Inspirer of Faith, The One Who gives Emaan and Security" },
  { arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", englishMeaning: "The Preserver of Safety, The Guardian, The Witness, The Overseer" },
  { arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", englishMeaning: "The All-Mighty, The Victorious, The Strong, The Defeater who is not defeated" },
  { arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", englishMeaning: "The Compeller, The Restorer" },
  { arabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", englishMeaning: "The Supreme, The Majestic, The Greatest" },
  { arabic: "الْخَالِقُ", transliteration: "Al-Khaaliq", englishMeaning: "The Creator, The Maker" },
  { arabic: "الْبَارِئُ", transliteration: "Al-Baari", englishMeaning: "The Evolver, The Maker of Order, The Originator" },
  { arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", englishMeaning: "The Fashioner, The Shaper of Beauty" },
  { arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", englishMeaning: "The Constant Forgiver, The All- and Oft-Forgiving" },
  { arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", englishMeaning: "The All-Prevailing One, The Subduer, The Ever-Dominating" },
  { arabic: "الْوَهَّابُ", transliteration: "Al-Wahhaab", englishMeaning: "The Supreme Bestower, The Giver of All, The Giver of Gifts" },
  { arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaaq", englishMeaning: "The Provider, The Sustainer" },
  { arabic: "الْفَتَّاحُ", transliteration: "Al-Fattaah", englishMeaning: "The Supreme Solver, The Opener, The Judge" },
  { arabic: "اَلْعَلِيْمُ", transliteration: "Al-'Aleem", englishMeaning: "The All-Knowing, The Omniscient" },
  { arabic: "الْقَابِضُ", transliteration: "Al-Qaabid", englishMeaning: "The Withholder, The Constricter, The Restricting One" },
  { arabic: "الْبَاسِطُ", transliteration: "Al-Baasit", englishMeaning: "The Extender" },
  { arabic: "الْخَافِضُ", transliteration: "Al-Khaafidh", englishMeaning: "The Reducer, The Abaser" },
  { arabic: "الرَّافِعُ", transliteration: "Ar-Raafi'", englishMeaning: "The Exalter, The Elevator" },
  { arabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", englishMeaning: "The Honourer, The Bestower of Honor" },
  { arabic: "الْمُذِلُّ", transliteration: "Al-Muzil", englishMeaning: "The Dishonourer, The Humiliator, The Abaser" },
  { arabic: "السَّمِيعُ", transliteration: "As-Samee'", englishMeaning: "The All-Hearing" },
  { arabic: "الْبَصِيرُ", transliteration: "Al-Baseer", englishMeaning: "The All-Seeing" },
  { arabic: "الْحَكَمُ", transliteration: "Al-Hakam", englishMeaning: "The Judge, The Giver of Justice" },
  { arabic: "الْعَدْلُ", transliteration: "Al-'Adl", englishMeaning: "The Utterly Just" },
  { arabic: "اللَّطِيفُ", transliteration: "Al-Lateef", englishMeaning: "The Subtle One, The Most Gentle" },
  { arabic: "الْخَبِيرُ", transliteration: "Al-Khabeer", englishMeaning: "The All-Aware, The Acquainted" },
  { arabic: "الْحَلِيمُ", transliteration: "Al-Haleem", englishMeaning: "The Most Forbearing" },
  { arabic: "الْعَظِيمُ", transliteration: "Al-'Azeem", englishMeaning: "The Magnificent, The Supreme" },
  { arabic: "الْغَفُورُ", transliteration: "Al-Ghafoor", englishMeaning: "The Forgiving, The Exceedingly Forgiving" },
  { arabic: "الشَّكُورُ", transliteration: "Ash-Shakoor", englishMeaning: "The Most Appreciative" },
  { arabic: "الْعَلِيُّ", transliteration: "Al-'Alee", englishMeaning: "The Most High, The Exalted" },
  { arabic: "الْكَبِيرُ", transliteration: "Al-Kabeer", englishMeaning: "The Greatest, The Most Grand" },
  { arabic: "الْحَفِيظُ", transliteration: "Al-Hafeedh", englishMeaning: "The Preserver, The All-Heedful and All-Protecting" },
  { arabic: "الْمُقِيتُ", transliteration: "Al-Muqeet", englishMeaning: "The Sustainer" },
  { arabic: "الْحسِيبُ", transliteration: "Al-Haseeb", englishMeaning: "The Reckoner, The Sufficient" },
  { arabic: "الْجَلِيلُ", transliteration: "Al-Jaleel", englishMeaning: "The Majestic" },
  { arabic: "الْكَرِيمُ", transliteration: "Al-Kareem", englishMeaning: "The Most Generous, The Most Esteemed" },
  { arabic: "الرَّقِيبُ", transliteration: "Ar-Raqeeb", englishMeaning: "The Watchful" },
  { arabic: "الْمُجِيبُ", transliteration: "Al-Mujeeb", englishMeaning: "The Responsive One, The Hearkener" },
  { arabic: "الْوَاسِعُ", transliteration: "Al-Waasi'", englishMeaning: "The All-Encompassing, The Boundless, The Vast" },
  { arabic: "الْحَكِيمُ", transliteration: "Al-Hakeem", englishMeaning: "The All-Wise, The Judge of Judges" },
  { arabic: "الْوَدُودُ", transliteration: "Al-Wadood", englishMeaning: "The Most Loving" },
  { arabic: "الْمَجِيدُ", transliteration: "Al-Majeed", englishMeaning: "The Glorious, The Most Honorable" },
  { arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", englishMeaning: "The Resurrector, The Raiser of the Dead, The Infuser of New Life" },
  { arabic: "الشَّهِيدُ", transliteration: "Ash-Shaheed", englishMeaning: "The All Observing Witnessing, The Witness" },
  { arabic: "الْحَقُّ", transliteration: "Al-Haqq", englishMeaning: "The Absolute Truth, The True, The One who truly exists" },
  { arabic: "الْوَكِيلُ", transliteration: "Al-Wakeel", englishMeaning: "The Trustee, The Disposer of Affairs, The One who gives the satisfaction and is relied upon" },
  { arabic: "الْقَوِيُّ", transliteration: "Al-Qawiyy", englishMeaning: "The All-Strong, The Strong" },
  { arabic: "الْمَتِينُ", transliteration: "Al-Mateen", englishMeaning: "The Firm, The Steadfast, The One with extreme Power which is un-interrupted and He does not get tired" },
  { arabic: "الْوَلِيُّ", transliteration: "Al-Waliyy", englishMeaning: "The Protecting Friend, The Supporter" },
  { arabic: "الْحَمِيدُ", transliteration: "Al-Hameed", englishMeaning: "The Praiseworthy, The Praised One who deserves to be praised" },
  { arabic: "الْمُحْصِي", transliteration: "Al-Muhsee", englishMeaning: "The Accounter, The Counter, The Reckoner, The One who the count of things are known to him" },
  { arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", englishMeaning: "The Originator, The One who started the human being" },
  { arabic: "الْمُعِيدُ", transliteration: "Al-Mu'eed", englishMeaning: "The Reproducer, The Restorer, The One who brings back the creatures after death" },
  { arabic: "الْمُحْيِي", transliteration: "Al-Muhyee", englishMeaning: "The Giver of Life, The Restorer" },
  { arabic: "الْمُمِيتُ", transliteration: "Al-Mumeet", englishMeaning: "The Creator of Death, The Destroyer, The One who renders the living dead" },
  { arabic: "الْحَيُّ", transliteration: "Al-Hayy", englishMeaning: "The Alive, The Ever Living" },
  { arabic: "الْقَيُّومُ", transliteration: "Al-Qayyoom", englishMeaning: "The Self-Subsisting, The Sustainer of All" },
  { arabic: "الْوَاجِدُ", transliteration: "Al-Waajid", englishMeaning: "The Perceiver, The Finder, The Rich who is never poor" },
  { arabic: "الْمَاجِدُ", transliteration: "Al-Maajid", englishMeaning: "The Glorious, He who is Most Glorious" },
  { arabic: "الْوَاحِدُ", transliteration: "Al-Waahid", englishMeaning: "The Unique, The One, The One without a partner" },
  { arabic: "اَلْأَحَدُ", transliteration: "Al-Ahad", englishMeaning: "The One" },
  { arabic: "الصَّمَدُ", transliteration: "As-Samad", englishMeaning: "The Eternal, The Independent, The Master who is relied upon in matters and reverted to in one's needs" },
  { arabic: "الْقَادِرُ", transliteration: "Al-Qaadir", englishMeaning: "The Able, The Capable, The One attributed with Power" },
  { arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", englishMeaning: "The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him" },
  { arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", englishMeaning: "The Expediter, The Promoter, The One who puts things in their right places" },
  { arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", englishMeaning: "The Postponer, He Who Puts Far Away" },
  { arabic: "الْأَوَّلُ", transliteration: "Al-Awwal", englishMeaning: "The First, The One whose Existence is without a beginning" },
  { arabic: "الْآخِرُ", transliteration: "Al-Aakhir", englishMeaning: "The Last, The One whose Existence is without an end" },
  { arabic: "الظَّاهِرُ", transliteration: "Az-Zaahir", englishMeaning: "The Manifest, The Apparent" },
  { arabic: "الْبَاطِنُ", transliteration: "Al-Baatin", englishMeaning: "The Hidden One, The Unseen" },
  { arabic: "الْوَالِي", transliteration: "Al-Waali", englishMeaning: "The Governor, The Patron, The One who owns things and manages them" },
  { arabic: "الْمُتَعَالِي", transliteration: "Al-Muta'aali", englishMeaning: "The Most Exalted, The High Exalted, The Self Exalted, The One who is clear from the attributes of the creation" },
  { arabic: "الْبَرُّ", transliteration: "Al-Barr", englishMeaning: "The Source of All Goodness, The Doer of Good" },
  { arabic: "التَّوَّابُ", transliteration: "At-Tawwaab", englishMeaning: "The Ever-Pardoning, The Relenting" },
  { arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", englishMeaning: "The Avenger" },
  { arabic: "العَفُوُّ", transliteration: "Al-'Afuww", englishMeaning: "The Pardoner" },
  { arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'oof", englishMeaning: "The Most Kind" },
  { arabic: "مَالِكُ الْمُلْكِ", transliteration: "Maalik-ul-Mulk", englishMeaning: "Master of the Kingdom, Owner of the Dominion" },
  { arabic: "ذُو الْجَلاَلِ وَالإِكْرَامِ", transliteration: "Dhul-Jalaali Wal-Ikraam", englishMeaning: "Possessor of Glory and Honour, Lord of Majesty and Generosity" },
  { arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", englishMeaning: "The Just One" },
  { arabic: "الْجَامِعُ", transliteration: "Al-Jaami'", englishMeaning: "The Gatherer, The Uniter" },
  { arabic: "الْغَنِيُّ", transliteration: "Al-Ghaniyy", englishMeaning: "The Rich, The Independent" },
  { arabic: "الْمُغْنِي", transliteration: "Al-Mughnee", englishMeaning: "The Enricher, The Sufficer" },
  { arabic: "الْمَانِعُ", transliteration: "Al-Maani'", englishMeaning: "The Preventer, The Withholder" },
  { arabic: "الضَّارُّ", transliteration: "Ad-Daarr", englishMeaning: "The Distressor, The Harmer (only by His will)" },
  { arabic: "النَّافِعُ", transliteration: "An-Naafi'", englishMeaning: "The Benefactor, The Propitious, The Giver of Good" },
  { arabic: "النُّورُ", transliteration: "An-Noor", englishMeaning: "The Light" },
  { arabic: "الْهَادِي", transliteration: "Al-Haadee", englishMeaning: "The Guide" },
  { arabic: "الْبَدِيعُ", transliteration: "Al-Badee'", englishMeaning: "The Incomparable, The Originator" },
  { arabic: "الْبَاقِي", transliteration: "Al-Baaqee", englishMeaning: "The Everlasting, The Enduring" },
  { arabic: "الْوَارِثُ", transliteration: "Al-Waarith", englishMeaning: "The Inheritor, The Ultimate Heir" },
  { arabic: "الرَّشِيدُ", transliteration: "Ar-Rasheed", englishMeaning: "The Guide to the Right Path, The Righteous Teacher" },
  { arabic: "الصَّبُورُ", transliteration: "As-Saboor", englishMeaning: "The Patient, The Forbearing" },
];

export default function AsmaulHusna() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {isArabic ? 'أسماء الله الحسنى' : 'The 99 Names of Allah'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'تعرف على أسماء الله الحسنى ومعانيها باللغتين العربية والإنجليزية.'
              : 'Learn about the 99 Beautiful Names of Allah and their meanings in Arabic and English.'
            }
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
                  {name.englishMeaning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}