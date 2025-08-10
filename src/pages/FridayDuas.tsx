import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Star, Book } from 'lucide-react';

const getFridayImportance = (t: (key: string) => string) => [
  {
    title: t('fridayDuas.importanceSection.title1'),
    content: t('fridayDuas.importanceSection.content1'),
    reference: t('fridayDuas.importanceSection.reference1')
  },
  {
    title: t('fridayDuas.importanceSection.title2'),
    content: t('fridayDuas.importanceSection.content2'),
    reference: t('fridayDuas.importanceSection.reference2')
  },
  {
    title: t('fridayDuas.importanceSection.title3'),
    content: t('fridayDuas.importanceSection.content3')
  }
];

const getFridayDuas = (t: (key: string) => string) => [
  {
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
    transliteration: t('fridayDuas.dua1.transliteration'),
    translation: t('fridayDuas.dua1.translation'),
    virtue: t('fridayDuas.dua1.virtue')
  },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: t('fridayDuas.dua2.transliteration'),
    translation: t('fridayDuas.dua2.translation'),
    virtue: t('fridayDuas.dua2.virtue')
  },
  {
    arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي",
    transliteration: t('fridayDuas.dua3.transliteration'),
    translation: t('fridayDuas.dua3.translation'),
    virtue: t('fridayDuas.dua3.virtue')
  },
  {
    arabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي",
    transliteration: t('fridayDuas.dua4.transliteration'),
    translation: t('fridayDuas.dua4.translation'),
    virtue: t('fridayDuas.dua4.virtue')
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    transliteration: t('fridayDuas.dua5.transliteration'),
    translation: t('fridayDuas.dua5.translation'),
    virtue: t('fridayDuas.dua5.virtue')
  },
  {
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ",
    transliteration: t('fridayDuas.dua6.transliteration'),
    translation: t('fridayDuas.dua6.translation'),
    virtue: t('fridayDuas.dua6.virtue')
  }
];

const getSuraAl_Kahf = (t: (key: string) => string) => ({
  title: t('fridayDuas.suraAlKahf.title'),
  virtue: t('fridayDuas.suraAlKahf.virtue'),
  description: t('fridayDuas.suraAlKahf.description')
});

export default function FridayDuas() {
  const { t } = useTranslation();
  const fridayImportance = getFridayImportance(t);
  const fridayDuas = getFridayDuas(t);
  const suraAl_Kahf = getSuraAl_Kahf(t);

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
            {t('fridayDuas.importanceDesc')}
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
              <p className="text-sm mb-2 font-semibold text-blue-700 dark:text-blue-400">{t('fridayDuas.suraAlKahf.virtueTitle')}</p>
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
            {t('fridayDuas.supplicationsDesc')}
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
            💫 {t('fridayDuas.note')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

