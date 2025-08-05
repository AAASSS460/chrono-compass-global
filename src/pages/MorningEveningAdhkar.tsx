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
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk, wa ana 'alaa 'ahdika wa wa'dika mas-tata't, a'oodhu bika min sharri maa sana'tu, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee faghfir lee fa'innahu laa yaghfirudh-dhunooba illaa ant",
    translation: "O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none forgives sins except You.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration: "Allaahumma innee asbahtu ush-hiduka wa ush-hidu hamalata 'arshik, wa malaa'ikataka wa jamee'a khalqik, annaka antal-laahu laa ilaaha illaa ant wahdaka laa shareeka lak, wa anna Muhammadan 'abduka wa rasooluk",
    translation: "O Allah, verily I have reached the morning and call upon You, the bearers of Your Throne, Your angels, and all creation to witness that surely You are Allah, none has the right to be worshipped except You, alone, without partner, and that Muhammad is Your servant and Your Messenger.",
    count: 4
  },
  {
    arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    transliteration: "Allaahumma maa asbaha bee min ni'matin aw bi'ahadin min khalqika faminka wahdaka laa shareeka lak, falakal-hamdu wa lakash-shukr",
    translation: "O Allah, whatever blessing has come to be with me or with any of Your creation, it is from You alone, You have no partner, so for You is all praise and unto You all thanks.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma 'aafinee fee badanee, Allaahumma 'aafinee fee sam'ee, Allaahumma 'aafinee fee basaree, laa ilaaha illaa ant",
    translation: "O Allah, make me healthy in my body. O Allah, preserve my hearing. O Allah, preserve my sight. There is none worthy of worship but You.",
    count: 3
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma innee a'oodhu bika minal-kufri wal-faqr, wa a'oodhu bika min 'adhaabil-qabr, laa ilaaha illaa ant",
    translation: "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is none worthy of worship but You.",
    count: 3
  },
  {
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Hasbiyal-laahu laa ilaaha illaa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'atheem",
    translation: "Allah is sufficient for me. None has the right to be worshipped except Him. Upon Him I rely, and He is the Lord of the Great Throne.",
    count: 7
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    transliteration: "Allaahumma innee as'alukal-'afwa wal-'aafiyata fid-dunyaa wal-aakhirah, Allaahumma innee as'alukal-'afwa wal-'aafiyata fee deenee wa dunyaaya wa ahlee wa maalee, Allaahummastur 'awraatee wa aamin raw'aatee, Allaahummahfazhnee min bayni yadayya wa min khalfee wa 'an yameenee wa 'an shimaalee wa min fawqee, wa a'oodhu bi'azhamatika an ughtaala min tahtee",
    translation: "O Allah, I ask You for pardon and well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults and calm my fears. O Allah, protect me from before me and from behind me, from my right and my left, and from above me, and I seek refuge in Your Greatness from being unexpectedly seized from below me.",
    count: 1
  },
  {
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    transliteration: "Yaa Hayyu yaa Qayyoomu birahmatika astagheethu aslih lee sha'nee kullahu wa laa takilnee ilaa nafsee tarfata 'ayn",
    translation: "O Ever Living, O Sustainer, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
    count: 3
  },
  {
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
    transliteration: "Subhaanallaahi wa bihamdihi 'adada khalqihi wa ridhaa nafsihi wa zinata 'arshihi wa midaada kalimaatihi",
    translation: "How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His Throne, and the ink of His words.",
    count: 3
  },
  {
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allaahumma salli wa sallim 'alaa nabiyyinaa Muhammad",
    translation: "O Allah, send prayers and peace upon our Prophet Muhammad.",
    count: 10
  },
  {
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oodhu bikalimaatil-laahit-taammaati min sharri maa khalaq",
    translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    count: 3
  },
  {
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillaahil-ladhee laa yadhurru ma'as-mihi shay'un fil-ardhi wa laa fis-samaa'i wa huwas-samee'ul-'aleem",
    translation: "In the Name of Allah, with Whose Name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    count: 3
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
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk, wa ana 'alaa 'ahdika wa wa'dika mas-tata't, a'oodhu bika min sharri maa sana'tu, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee faghfir lee fa'innahu laa yaghfirudh-dhunooba illaa ant",
    translation: "O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none forgives sins except You.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration: "Allaahumma innee amsaytu ush-hiduka wa ush-hidu hamalata 'arshik, wa malaa'ikataka wa jamee'a khalqik, annaka antal-laahu laa ilaaha illaa ant wahdaka laa shareeka lak, wa anna Muhammadan 'abduka wa rasooluk",
    translation: "O Allah, verily I have reached the evening and call upon You, the bearers of Your Throne, Your angels, and all creation to witness that surely You are Allah, none has the right to be worshipped except You, alone, without partner, and that Muhammad is Your servant and Your Messenger.",
    count: 4
  },
  {
    arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    transliteration: "Allaahumma maa amsaa bee min ni'matin aw bi'ahadin min khalqika faminka wahdaka laa shareeka lak, falakal-hamdu wa lakash-shukr",
    translation: "O Allah, whatever blessing has come to be with me or with any of Your creation, it is from You alone, You have no partner, so for You is all praise and unto You all thanks.",
    count: 1
  },
  {
    arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma 'aafinee fee badanee, Allaahumma 'aafinee fee sam'ee, Allaahumma 'aafinee fee basaree, laa ilaaha illaa ant",
    translation: "O Allah, make me healthy in my body. O Allah, preserve my hearing. O Allah, preserve my sight. There is none worthy of worship but You.",
    count: 3
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    transliteration: "Allaahumma innee a'oodhu bika minal-kufri wal-faqr, wa a'oodhu bika min 'adhaabil-qabr, laa ilaaha illaa ant",
    translation: "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is none worthy of worship but You.",
    count: 3
  },
  {
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    transliteration: "Hasbiyal-laahu laa ilaaha illaa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'atheem",
    translation: "Allah is sufficient for me. None has the right to be worshipped except Him. Upon Him I rely, and He is the Lord of the Great Throne.",
    count: 7
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    transliteration: "Allaahumma innee as'alukal-'afwa wal-'aafiyata fid-dunyaa wal-aakhirah, Allaahumma innee as'alukal-'afwa wal-'aafiyata fee deenee wa dunyaaya wa ahlee wa maalee, Allaahummastur 'awraatee wa aamin raw'aatee, Allaahummahfazhnee min bayni yadayya wa min khalfee wa 'an yameenee wa 'an shimaalee wa min fawqee, wa a'oodhu bi'azhamatika an ughtaala min tahtee",
    translation: "O Allah, I ask You for pardon and well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults and calm my fears. O Allah, protect me from before me and from behind me, from my right and my left, and from above me, and I seek refuge in Your Greatness from being unexpectedly seized from below me.",
    count: 1
  },
  {
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    transliteration: "Yaa Hayyu yaa Qayyoomu birahmatika astagheethu aslih lee sha'nee kullahu wa laa takilnee ilaa nafsee tarfata 'ayn",
    translation: "O Ever Living, O Sustainer, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
    count: 3
  },
  {
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
    transliteration: "Subhaanallaahi wa bihamdihi 'adada khalqihi wa ridhaa nafsihi wa zinata 'arshihi wa midaada kalimaatihi",
    translation: "How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His Throne, and the ink of His words.",
    count: 3
  },
  {
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allaahumma salli wa sallim 'alaa nabiyyinaa Muhammad",
    translation: "O Allah, send prayers and peace upon our Prophet Muhammad.",
    count: 10
  },
  {
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'oodhu bikalimaatil-laahit-taammaati min sharri maa khalaq",
    translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    count: 3
  },
  {
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillaahil-ladhee laa yadhurru ma'as-mihi shay'un fil-ardhi wa laa fis-samaa'i wa huwas-samee'ul-'aleem",
    translation: "In the Name of Allah, with Whose Name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    count: 3
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
                    {dhikr.count === 1 ? t('adhkar.once') : t('adhkar.times', { count: dhikr.count })}
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
                {t('adhkar.morningDescription')}
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
                {t('adhkar.eveningDescription')}
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

