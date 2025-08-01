import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Book } from 'lucide-react';

const fridayImportance = [
  {
    title: "يوم الجمعة سيد الأيام",
    content: "قال رسول الله صلى الله عليه وسلم: (خير يوم طلعت عليه الشمس يوم الجمعة، فيه خلق آدم، وفيه أدخل الجنة، وفيه أخرج منها)",
    reference: "رواه مسلم"
  },
  {
    title: "ساعة الإجابة",
    content: "في يوم الجمعة ساعة لا يوافقها عبد مسلم وهو قائم يصلي يسأل الله تعالى شيئاً إلا أعطاه إياه",
    reference: "متفق عليه"
  },
  {
    title: "فضل الصلاة على النبي",
    content: "من أفضل أعمال يوم الجمعة الإكثار من الصلاة على النبي صلى الله عليه وسلم"
  }
];

const fridayDuas = [
  {
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
    transliteration: "Allaahumma salli wa sallim wa baarik 'alaa nabiyyinaa Muhammadin wa 'alaa aalihi wa sahbihi ajma'een",
    translation: "O Allah, send prayers, peace, and blessings upon our Prophet Muhammad and upon his family and all his companions.",
    virtue: "من أفضل الأعمال يوم الجمعة"
  },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbanaa aatinaa fil-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaab an-naar",
    translation: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    virtue: "دعاء جامع لخير الدنيا والآخرة"
  },
  {
    arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي",
    transliteration: "Allaahummaghfir lee dhanbee wa wassi' lee fee daaree wa baarik lee fee rizqee",
    translation: "O Allah, forgive my sin, expand my home for me, and bless my sustenance.",
    virtue: "دعاء شامل للمغفرة والبركة"
  },
  {
    arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي",
    transliteration: "Allaahumma aslih lee deeneel-ladhee huwa 'ismatu amree, wa aslih lee dunyaayal-latee feehaa ma'aashee, wa aslih lee aakhirateel-latee feehaa ma'aadee",
    translation: "O Allah, make my religion good for me, which is the safeguard of my affairs. Make my worldly life good for me, in which is my livelihood. Make my Hereafter good for me, which is my return.",
    virtue: "دعاء لإصلاح الدين والدنيا والآخرة"
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration: "Allaahumma innee as'alukal-hudaa wat-tuqaa wal-'afaafa wal-ghinaa",
    translation: "O Allah, I ask You for guidance, piety, chastity, and contentment.",
    virtue: "دعاء للهداية والتقوى"
  },
  {
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Allaahumma baarik lanaa feemaa razaqtanaa, wa qinaa 'adhaab an-naar",
    translation: "O Allah, bless us in what You have provided us, and protect us from the punishment of the Fire.",
    virtue: "دعاء للبركة في الرزق"
  }
];

const suraAl_Kahf = {
  title: "سورة الكهف",
  virtue: "من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين",
  description: "يُستحب قراءة سورة الكهف كاملة يوم الجمعة، وهي السورة الثامنة عشرة في القرآن الكريم"
};

export default function FridayDuas() {
  const { t } = useTranslation();

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          {t('fridayDuas.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('fridayDuas.subtitle')}
        </p>
      </div>

      {/* Importance of Friday */}
      <Card className="mb-8 shadow-lg border-0 bg-gradient-to-br from-card to-green-50/30 dark:to-green-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-green-500" />
            {t('fridayDuas.importance')}
          </CardTitle>
          <CardDescription>
            فضائل يوم الجمعة في الإسلام
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fridayImportance.map((item, index) => (
              <Card key={index} className="border-0 bg-white/50 dark:bg-gray-900/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">{item.title}</h4>
                  <p className="text-sm mb-2 leading-relaxed" dir="rtl">{item.content}</p>
                  {item.reference && (
                    <p className="text-xs text-muted-foreground italic">{item.reference}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Surat Al-Kahf */}
      <Card className="mb-8 shadow-lg border-0 bg-gradient-to-br from-card to-blue-50/30 dark:to-blue-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-blue-500" />
            {suraAl_Kahf.title}
          </CardTitle>
          <CardDescription>
            {suraAl_Kahf.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="border-0 bg-white/50 dark:bg-gray-900/50">
            <CardContent className="p-4">
              <p className="text-sm mb-2 font-semibold text-blue-700 dark:text-blue-400">فضل قراءة سورة الكهف:</p>
              <p className="text-sm leading-relaxed" dir="rtl">{suraAl_Kahf.virtue}</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Friday Duas */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-purple-50/30 dark:to-purple-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-purple-500" />
            {t('fridayDuas.supplications')}
          </CardTitle>
          <CardDescription>
            أدعية مستجابة ليوم الجمعة المبارك
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fridayDuas.map((dua, index) => (
              <Card key={index} className="border-0 bg-white/50 dark:bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-right" dir="rtl">
                      <p className="text-lg leading-relaxed font-arabic text-primary">{dua.arabic}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm italic text-muted-foreground">{dua.transliteration}</p>
                      <p className="text-sm text-foreground">{dua.translation}</p>
                    </div>
                    
                    <div className="border-t pt-3">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-purple-500" />
                        <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">
                          {dua.virtue}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Note */}
      <Card className="mt-6 border-0 bg-gradient-to-br from-card to-amber-50/30 dark:to-amber-950/30">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💫 يُستحب الإكثار من الدعاء والذكر والصلاة على النبي صلى الله عليه وسلم في يوم الجمعة
          </p>
        </CardContent>
      </Card>
    </div>
  );
}