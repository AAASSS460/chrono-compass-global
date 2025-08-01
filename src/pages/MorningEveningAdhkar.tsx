import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Moon, Heart } from 'lucide-react';

const morningAdhkar = [
  {
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Asbahnaa wa asbahal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    transliteration: "Allaahumma bika asbahnaa, wa bika amsaynaa, wa bika nahyaa, wa bika namootu wa ilaykan-nushoor",
    translation: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.",
    count: 1
  },
  {
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    transliteration: "A'oodhu billaahi minash-shaytaanir-rajeem. Allaahu laa ilaaha illaa huwal-hayyul-qayyoom, laa ta'khudhuhu sinatun wa laa nawm...",
    translation: "I seek refuge in Allah from Satan the expelled. Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep...",
    count: 1
  },
  {
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhaanallaahi wa bihamdihi",
    translation: "How perfect Allah is and I praise Him.",
    count: 100
  },
  {
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
    count: 100
  }
];

const eveningAdhkar = [
  {
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Amsaynaa wa amsal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer",
    translation: "We have reached the evening and at this very time unto Allah belongs all sovereignty. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allaahumma bika amsaynaa, wa bika asbahnaa, wa bika nahyaa, wa bika namootu wa ilaykal-maseer",
    translation: "O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.",
    count: 1
  },
  {
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oodhu bikalimaatil-laahit-taammaati min sharri maa khalaq",
    translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    count: 3
  },
  {
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
    transliteration: "Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk, wa ana 'alaa 'ahdika wa wa'dika mas-tata't",
    translation: "O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can.",
    count: 1
  },
  {
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Hasbiyal-laahu laa ilaaha illaa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'atheem",
    translation: "Allah is sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the exalted throne.",
    count: 7
  }
];

export default function MorningEveningAdhkar() {
  const { t } = useTranslation();

  const AdhkarCard = ({ adhkar, icon }: { adhkar: typeof morningAdhkar, icon: React.ReactNode }) => (
    <div className="space-y-6">
      {adhkar.map((dhikr, index) => (
        <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="text-right" dir="rtl">
                <p className="text-xl leading-relaxed font-arabic text-primary">{dhikr.arabic}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm italic text-muted-foreground">{dhikr.transliteration}</p>
                <p className="text-sm text-foreground">{dhikr.translation}</p>
              </div>
              
              <div className="flex items-center justify-between border-t pt-3">
                <div className="flex items-center gap-2">
                  {icon}
                  <span className="text-sm font-medium text-muted-foreground">
                    {dhikr.count === 1 ? 'Once' : `${dhikr.count} times`}
                  </span>
                </div>
                <Heart className="h-4 w-4 text-primary/60" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          {t('adhkar.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('adhkar.subtitle')}
        </p>
      </div>

      <Tabs defaultValue="morning" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="morning" className="gap-2">
            <Sun className="h-4 w-4" />
            {t('adhkar.morning')}
          </TabsTrigger>
          <TabsTrigger value="evening" className="gap-2">
            <Moon className="h-4 w-4" />
            {t('adhkar.evening')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="morning">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-yellow-50/30 dark:to-yellow-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                {t('adhkar.morningTitle')}
              </CardTitle>
              <CardDescription>
                Recite these remembrances every morning after Fajr prayer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AdhkarCard adhkar={morningAdhkar} icon={<Sun className="h-4 w-4 text-yellow-500" />} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evening">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-blue-50/30 dark:to-blue-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-blue-500" />
                {t('adhkar.eveningTitle')}
              </CardTitle>
              <CardDescription>
                Recite these remembrances every evening after Maghrib prayer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AdhkarCard adhkar={eveningAdhkar} icon={<Moon className="h-4 w-4 text-blue-500" />} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}