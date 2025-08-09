import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface Dua {
  id: number;
  arabic: string;
  transliteration: string;
  english: string;
  category: string;
}

const hisnulMuslimData: Dua[] = [
  {
    id: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    transliteration: "Bismillahir Rahmanir Rahim",
    english: "In the name of Allah, the Most Gracious, the Most Merciful.",
    category: "General"
  },
  {
    id: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Alhamdulillahi Rabbil 'Alameen",
    english: "All praise is due to Allah, Lord of the worlds.",
    category: "General"
  },
  {
    id: 3,
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    transliteration: "Allahumma Salli 'ala Muhammadin wa 'ala ali Muhammadin",
    english: "O Allah, send prayers upon Muhammad and upon the family of Muhammad.",
    category: "Salawat"
  },
  {
    id: 4,
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
    english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    category: "Quranic Duas"
  },
  {
    id: 5,
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    english: "I seek refuge in the perfect words of Allah from the evil of that which He created.",
    category: "Protection"
  },
  {
    id: 6,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
    transliteration: "Subhanallahi wa bihamdihi, Subhanallahil 'Azim",
    english: "Glory be to Allah and praise Him, Glory be to Allah the Almighty.",
    category: "Dhikr"
  },
  {
    id: 7,
    arabic: "لا إِلَهَ إِلا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    category: "Quranic Duas"
  },
  {
    id: 8,
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallahu wa ni'mal-Wakeel",
    english: "Allah is sufficient for us, and [He is] the best Disposer of affairs.",
    category: "Trust in Allah"
  },
  {
    id: 9,
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
    english: "O Allah, I ask You for guidance, piety, chastity, and contentment.",
    category: "General"
  },
  {
    id: 10,
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Ya Muqallibal-qulub, thabbit qalbi 'ala dinik",
    english: "O Changer of the hearts, make my heart firm upon Your religion.",
    category: "Guidance"
  },
];

export default function HisnulMuslim() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDuas = hisnulMuslimData.filter(dua => {
    const searchLower = searchTerm.toLowerCase();
    return (
      dua.arabic.toLowerCase().includes(searchLower) ||
      dua.transliteration.toLowerCase().includes(searchLower) ||
      dua.english.toLowerCase().includes(searchLower) ||
      dua.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {isArabic ? 'حصن المسلم' : 'Hisnul Muslim'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'مجموعة من الأدعية والأذكار من القرآن والسنة النبوية.'
              : 'A collection of supplications and remembrances from the Quran and Sunnah.'
            }
          </p>
        </div>

        <div className="mb-8 relative">
          <Input
            type="text"
            placeholder={isArabic ? 'ابحث عن دعاء أو فئة...' : 'Search for a dua or category...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {filteredDuas.length > 0 ? (
            filteredDuas.map((dua) => (
              <Card key={dua.id} className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary mb-2 text-right">
                    {dua.arabic}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground font-semibold text-right">
                    {dua.transliteration}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {dua.english}
                  </p>
                  <div className="mt-4 text-right">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {dua.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">
              {isArabic ? 'لا توجد أدعية مطابقة لبحثك.' : 'No duas matching your search.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}