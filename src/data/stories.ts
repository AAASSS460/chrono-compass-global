interface StoryData {
  title: string;
  titleAr: string;
  country: string;
  countryAr: string;
  period: string;
  periodAr: string;
  category: string;
  categoryAr: string;
  summary: string;
  summaryAr: string;
  fullStory: string;
  fullStoryAr: string;
  keyFigures: string[];
  keyFiguresAr: string[];
  historicalContext: string;
  historicalContextAr: string;
  lessons: string[];
  lessonsAr: string[];
  modernRelevance: string;
  modernRelevanceAr: string;
  relatedEvents: string[];
  relatedEventsAr: string[];
  sources: string[];
  sourcesAr: string[];
}

export const storyData: Record<string, Record<number, StoryData>> = {
  indonesia: {
    0: {
      title: 'Peaceful Conversion Through Trade',
      titleAr: 'التحول السلمي عبر التجارة',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      period: '13th-16th Century',
      periodAr: 'القرن الثالث عشر - السادس عشر',
      category: 'Religious Transformation',
      categoryAr: 'التحول الديني',
      summary: 'The remarkable story of how Islam spread throughout the Indonesian archipelago through peaceful trade relationships.',
      summaryAr: 'القصة الرائعة لكيفية انتشار الإسلام في أرخبيل إندونيسيا من خلال العلاقات التجارية السلمية.',
      fullStory: 'In the bustling ports of 13th-century Indonesia, Muslim traders from Arabia, Persia, and India arrived as partners in commerce. They brought exotic goods and a message of faith that would transform the archipelago. Unlike other regions where Islam spread through conquest, Indonesia\'s conversion was remarkably peaceful. The Muslim merchants demonstrated their faith through honesty in business, compassion for the poor, and respect for local customs.',
      fullStoryAr: 'في موانئ إندونيسيا المزدحمة في القرن الثالث عشر، وصل التجار المسلمون من العرب وفارس والهند كشركاء في التجارة. جلبوا البضائع الغريبة ورسالة إيمان ستحول الأرخبيل. على عكس المناطق الأخرى حيث انتشر الإسلام عبر الغزو، كان تحول إندونيسيا سلمياً بشكل ملحوظ.',
      keyFigures: ['Wali Songo', 'Muslim Traders', 'Local Rulers'],
      keyFiguresAr: ['والي سونغو', 'التجار المسلمون', 'الحكام المحليون'],
      historicalContext: 'During the 13th-16th centuries, Indonesia was a crucial hub for maritime trade in Southeast Asia.',
      historicalContextAr: 'خلال القرنين الثالث عشر والسادس عشر، كانت إندونيسيا مركزاً بحرياً مهماً للتجارة في جنوب شرق آسيا.',
      lessons: ['Peaceful approach is more effective than force', 'Respect for local culture enables acceptance', 'Trade builds bridges between communities'],
      lessonsAr: ['النهج السلمي أكثر فعالية من القوة', 'احترام الثقافة المحلية يمكن القبول', 'التجارة تبني جسوراً بين المجتمعات'],
      modernRelevance: 'This story demonstrates how peaceful dialogue and mutual respect can lead to positive transformation in our globalized world.',
      modernRelevanceAr: 'تظهر هذه القصة كيف يمكن للحوار السلمي والاحترام المتبادل أن يؤدي إلى التحول الإيجابي في عالمنا المعولم.',
      relatedEvents: ['Establishment of Sultanate of Aceh', 'Spread of Islam in Java', 'Cultural Integration'],
      relatedEventsAr: ['تأسيس سلطنة آتشيه', 'انتشار الإسلام في جاوة', 'التكامل الثقافي'],
      sources: ['Historical Chronicles', 'Archaeological Evidence', 'Traditional Stories'],
      sourcesAr: ['السجلات التاريخية', 'الأدلة الأثرية', 'القصص التقليدية']
    }
  },
  usa: {
    0: {
      title: 'The Courage of Muhammad Ali',
      titleAr: 'شجاعة محمد علي',
      country: 'United States',
      countryAr: 'الولايات المتحدة',
      period: '1960s-1970s',
      periodAr: 'الستينيات-السبعينيات',
      category: 'Social Justice',
      categoryAr: 'العدالة الاجتماعية',
      summary: 'The inspiring story of how Muhammad Ali sacrificed his boxing career to stand for his religious and moral principles.',
      summaryAr: 'القصة الملهمة لكيف ضحى محمد علي بمسيرته في الملاكمة للوقوف مع مبادئه الدينية والأخلاقية.',
      fullStory: 'In 1967, Muhammad Ali was at the peak of his boxing career when he was drafted for the Vietnam War. Citing his religious beliefs and moral objections to the war, Ali refused to serve. This decision cost him his boxing license, his title, and millions of dollars. He faced imprisonment and public criticism, but he stood firm in his convictions. His courage inspired a generation and showed that standing for principles is more important than personal gain.',
      fullStoryAr: 'في عام 1967، كان محمد علي في ذروة مسيرته في الملاكمة عندما تم تجنيده لحرب فيتنام. مشيراً إلى معتقداته الدينية واعتراضاته الأخلاقية على الحرب، رفض علي الخدمة. كلفه هذا القرار رخصة الملاكمة ولقبه وملايين الدولارات. واجه السجن والانتقادات العامة، لكنه ثبت على قناعاته.',
      keyFigures: ['Muhammad Ali', 'Civil Rights Leaders', 'Anti-war Activists'],
      keyFiguresAr: ['محمد علي', 'قادة الحقوق المدنية', 'نشطاء مناهضة الحرب'],
      historicalContext: 'The Vietnam War era was a time of social upheaval and civil rights movements in America.',
      historicalContextAr: 'كانت فترة حرب فيتنام وقت اضطراب اجتماعي وحركات حقوق مدنية في أمريكا.',
      lessons: ['Stand for your principles regardless of cost', 'Faith can give strength in difficult times', 'Individual courage can inspire social change'],
      lessonsAr: ['قف مع مبادئك بغض النظر عن التكلفة', 'الإيمان يمكن أن يعطي القوة في الأوقات الصعبة', 'الشجاعة الفردية يمكن أن تلهم التغيير الاجتماعي'],
      modernRelevance: 'Ali\'s story continues to inspire those who face difficult moral choices in their personal and professional lives.',
      modernRelevanceAr: 'قصة علي تستمر في إلهام أولئك الذين يواجهون خيارات أخلاقية صعبة في حياتهم الشخصية والمهنية.',
      relatedEvents: ['Civil Rights Movement', 'Anti-Vietnam War Protests', 'Ali\'s Return to Boxing'],
      relatedEventsAr: ['حركة الحقوق المدنية', 'احتجاجات مناهضة حرب فيتنام', 'عودة علي للملاكمة'],
      sources: ['Biographical Accounts', 'News Archives', 'Documentary Films'],
      sourcesAr: ['السير الذاتية', 'أرشيف الأخبار', 'الأفلام الوثائقية']
    }
  }
};