import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BookOpen, Trophy, RotateCcw, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: number;
  question: string;
  questionAr: string;
  options: string[];
  optionsAr: string[];
  correctAnswer: number;
  explanation?: string;
  explanationAr?: string;
}

interface QuizData {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}

const quizData: QuizData = {
  easy: [
    {
      id: 1,
      question: "How many times a day do Muslims pray?",
      questionAr: "كم مرة يصلي المسلمون في اليوم؟",
      options: ["3 times", "4 times", "5 times", "6 times"],
      optionsAr: ["3 مرات", "4 مرات", "5 مرات", "6 مرات"],
      correctAnswer: 2,
      explanation: "Muslims pray 5 times a day: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
      explanationAr: "يصلي المسلمون 5 مرات في اليوم: الفجر والظهر والعصر والمغرب والعشاء."
    },
    {
      id: 2,
      question: "What is the first pillar of Islam?",
      questionAr: "ما هو الركن الأول من أركان الإسلام؟",
      options: ["Prayer", "Shahada (Declaration of Faith)", "Zakat", "Hajj"],
      optionsAr: ["الصلاة", "الشهادة", "الزكاة", "الحج"],
      correctAnswer: 1,
      explanation: "The Shahada is the declaration of faith and the first pillar of Islam.",
      explanationAr: "الشهادة هي إعلان الإيمان والركن الأول من أركان الإسلام."
    },
    {
      id: 3,
      question: "In which month do Muslims fast?",
      questionAr: "في أي شهر يصوم المسلمون؟",
      options: ["Shawwal", "Ramadan", "Dhul-Hijjah", "Muharram"],
      optionsAr: ["شوال", "رمضان", "ذو الحجة", "محرم"],
      correctAnswer: 1,
      explanation: "Muslims fast during the month of Ramadan, the 9th month of the Islamic calendar.",
      explanationAr: "يصوم المسلمون في شهر رمضان، وهو الشهر التاسع من التقويم الإسلامي."
    },
    {
      id: 4,
      question: "What is the holy book of Islam?",
      questionAr: "ما هو الكتاب المقدس في الإسلام؟",
      options: ["Torah", "Bible", "Quran", "Psalms"],
      optionsAr: ["التوراة", "الإنجيل", "القرآن", "الزبور"],
      correctAnswer: 2,
      explanation: "The Quran is the holy book of Islam, revealed to Prophet Muhammad (PBUH).",
      explanationAr: "القرآن هو الكتاب المقدس في الإسلام، نزل على النبي محمد صلى الله عليه وسلم."
    },
    {
      id: 5,
      question: "What is the direction Muslims face when praying?",
      questionAr: "ما هي الجهة التي يتوجه إليها المسلمون عند الصلاة؟",
      options: ["North", "Qibla (towards Mecca)", "East", "West"],
      optionsAr: ["الشمال", "القبلة (نحو مكة)", "الشرق", "الغرب"],
      correctAnswer: 1,
      explanation: "Muslims face the Qibla, which is the direction towards the Kaaba in Mecca.",
      explanationAr: "يتوجه المسلمون نحو القبلة، وهي الاتجاه نحو الكعبة في مكة."
    }
    // Add 45 more easy questions here...
  ],
  medium: [
    {
      id: 1,
      question: "How many chapters (Surahs) are in the Quran?",
      questionAr: "كم عدد السور في القرآن الكريم؟",
      options: ["110", "114", "120", "124"],
      optionsAr: ["110", "114", "120", "124"],
      correctAnswer: 1,
      explanation: "The Quran contains 114 chapters (Surahs).",
      explanationAr: "يحتوي القرآن الكريم على 114 سورة."
    },
    {
      id: 2,
      question: "What is the name of the night journey of Prophet Muhammad (PBUH)?",
      questionAr: "ما اسم رحلة الإسراء والمعراج للنبي محمد صلى الله عليه وسلم؟",
      options: ["Hijra", "Isra and Mi'raj", "Badr", "Uhud"],
      optionsAr: ["الهجرة", "الإسراء والمعراج", "بدر", "أحد"],
      correctAnswer: 1,
      explanation: "Isra and Mi'raj refers to the night journey from Mecca to Jerusalem and the ascension to heaven.",
      explanationAr: "الإسراء والمعراج يشير إلى الرحلة الليلية من مكة إلى القدس والعروج إلى السماء."
    },
    {
      id: 3,
      question: "Which angel brought revelations to Prophet Muhammad (PBUH)?",
      questionAr: "أي ملك نزل بالوحي على النبي محمد صلى الله عليه وسلم؟",
      options: ["Mikail", "Jibril (Gabriel)", "Israfil", "Azrail"],
      optionsAr: ["ميكائيل", "جبريل", "إسرافيل", "عزرائيل"],
      correctAnswer: 1,
      explanation: "Angel Jibril (Gabriel) brought the revelations of the Quran to Prophet Muhammad (PBUH).",
      explanationAr: "الملك جبريل عليه السلام نزل بوحي القرآن على النبي محمد صلى الله عليه وسلم."
    }
    // Add 47 more medium questions here...
  ],
  hard: [
    {
      id: 1,
      question: "In which year of the Hijra did the Battle of Badr take place?",
      questionAr: "في أي سنة من الهجرة حدثت غزوة بدر؟",
      options: ["1st year", "2nd year", "3rd year", "4th year"],
      optionsAr: ["السنة الأولى", "السنة الثانية", "السنة الثالثة", "السنة الرابعة"],
      correctAnswer: 1,
      explanation: "The Battle of Badr took place in the 2nd year of Hijra (624 CE).",
      explanationAr: "حدثت غزوة بدر في السنة الثانية من الهجرة (624 م)."
    },
    {
      id: 2,
      question: "What is the last verse revealed in the Quran?",
      questionAr: "ما هي آخر آية نزلت في القرآن؟",
      options: ["Ayat al-Kursi", "The last verse of Surah Al-Baqarah", "Surah An-Nasr", "Verse about usury in Al-Baqarah"],
      optionsAr: ["آية الكرسي", "آخر آية من سورة البقرة", "سورة النصر", "آية الربا في البقرة"],
      correctAnswer: 3,
      explanation: "The verse about usury (Riba) in Surah Al-Baqarah is considered the last verse revealed.",
      explanationAr: "آية الربا في سورة البقرة تعتبر آخر آية نزلت."
    }
    // Add 48 more hard questions here...
  ]
};

type Difficulty = 'easy' | 'medium' | 'hard';

const IslamicQuiz: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isArabic = i18n.language === 'ar';

  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestions = difficulty ? quizData[difficulty] : [];
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  const getDifficultyLabel = (diff: Difficulty) => {
    const labels = {
      easy: { en: 'Easy', ar: 'سهل' },
      medium: { en: 'Medium', ar: 'متوسط' },
      hard: { en: 'Hard', ar: 'صعب' }
    };
    return isArabic ? labels[diff].ar : labels[diff].en;
  };

  const getDifficultyColor = (diff: Difficulty) => {
    const colors = {
      easy: 'bg-green-500',
      medium: 'bg-yellow-500',
      hard: 'bg-red-500'
    };
    return colors[diff];
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic ? "يرجى اختيار إجابة" : "Please select an answer",
        variant: "destructive"
      });
      return;
    }

    const answerIndex = parseInt(selectedAnswer);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: isArabic ? "إجابة صحيحة!" : "Correct!",
        description: isArabic ? currentQuestion.explanationAr : currentQuestion.explanation,
        variant: "default"
      });
    } else {
      toast({
        title: isArabic ? "إجابة خاطئة" : "Incorrect",
        description: isArabic ? currentQuestion.explanationAr : currentQuestion.explanation,
        variant: "destructive"
      });
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    
    if (currentQuestionIndex + 1 >= currentQuestions.length) {
      setQuizCompleted(true);
      setShowResult(true);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
      }, 2000);
    }
  };

  const resetQuiz = () => {
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 80) {
      return isArabic ? "ممتاز! أداء رائع" : "Excellent! Great performance";
    } else if (percentage >= 60) {
      return isArabic ? "جيد جداً! استمر" : "Very good! Keep it up";
    } else if (percentage >= 40) {
      return isArabic ? "جيد، يمكنك التحسن" : "Good, you can improve";
    } else {
      return isArabic ? "يحتاج إلى مراجعة أكثر" : "Needs more review";
    }
  };

  if (!difficulty) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              {isArabic ? "الأسئلة الإسلامية" : "Islamic Quiz"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isArabic 
                ? "اختبر معلوماتك الإسلامية واختر مستوى الصعوبة" 
                : "Test your Islamic knowledge and choose difficulty level"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
              <Card 
                key={diff}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary"
                onClick={() => setDifficulty(diff)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${getDifficultyColor(diff)} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{getDifficultyLabel(diff)}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {isArabic ? "50 سؤال" : "50 Questions"}
                  </p>
                  <Button className="w-full">
                    {isArabic ? "ابدأ الآن" : "Start Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl">
                {isArabic ? "انتهى الاختبار!" : "Quiz Completed!"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {score}/{currentQuestions.length}
                </div>
                <div className="text-xl text-muted-foreground">
                  {Math.round((score / currentQuestions.length) * 100)}%
                </div>
                <div className="text-lg font-medium">
                  {getScoreMessage()}
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {getDifficultyLabel(difficulty!)} {isArabic ? "المستوى" : "Level"}
                </Badge>
                <div className="flex gap-4 justify-center mt-6">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {isArabic ? "اختبار جديد" : "New Quiz"}
                  </Button>
                  <Button onClick={() => setDifficulty(null)}>
                    {isArabic ? "اختر مستوى آخر" : "Choose Another Level"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-sm">
              {getDifficultyLabel(difficulty!)} {isArabic ? "المستوى" : "Level"}
            </Badge>
            <div className="text-sm text-muted-foreground">
              {currentQuestionIndex + 1} / {currentQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {isArabic ? currentQuestion?.questionAr : currentQuestion?.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              <div className="space-y-4">
                {currentQuestion?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-base cursor-pointer flex-1 p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      {isArabic ? currentQuestion.optionsAr[index] : option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setDifficulty(null)}>
                {isArabic ? "العودة" : "Back"}
              </Button>
              <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer}>
                {isArabic ? "إجابة" : "Submit"}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IslamicQuiz;