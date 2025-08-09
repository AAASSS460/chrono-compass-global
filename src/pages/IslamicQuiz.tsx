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
import { islamicQuizQuestions } from '@/data/islamicQuizQuestions';

interface QuizQuestion {
  id: number;
  question: string;
  questionAr: string;
  options: string[];
  optionsAr: string[];
  answer: number; // Index of the correct option
  explanation?: string;
  explanationAr?: string;
}

type Difficulty = 'easy' | 'medium' | 'hard';

// Function to get a consistent set of random questions for the day
const getDailyQuestions = (difficulty: Difficulty, allQuestions: QuizQuestion[]): QuizQuestion[] => {
  const today = new Date();
  // Use a seed based on the date (and a fixed offset for 25-hour change)
  // This ensures the same questions for 25 hours, then changes.
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate() + Math.floor(today.getHours() / 25); 
  
  // Simple pseudo-random number generator (seeded)
  let s = seed;
  const random = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  // Shuffle questions using the seeded PRNG
  const shuffled = [...allQuestions].sort(() => random() - 0.5);
  
  // Return the first 10 questions
  return shuffled.slice(0, 10);
};

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
  const [dailyQuestions, setDailyQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    if (difficulty) {
      // Check localStorage for saved questions for today
      const today = new Date();
      const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}-${Math.floor(today.getHours() / 25)}`;
      const savedQuestionsKey = `quiz_questions_${difficulty}_${todayKey}`;
      const savedQuestions = localStorage.getItem(savedQuestionsKey);

      if (savedQuestions) {
        setDailyQuestions(JSON.parse(savedQuestions));
      } else {
        const newQuestions = getDailyQuestions(difficulty, islamicQuizQuestions[difficulty]);
        setDailyQuestions(newQuestions);
        localStorage.setItem(savedQuestionsKey, JSON.stringify(newQuestions));
        // Clear old saved questions (optional, for cleanup)
        // You might want a more robust cleanup strategy for older dates
        for (let i = 0; i < 24; i++) { // Check previous 24 hours
          const prevDate = new Date(today.getTime() - (i * 60 * 60 * 1000));
          const prevKey = `${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}-${Math.floor(prevDate.getHours() / 25)}`;
          if (prevKey !== todayKey) {
            localStorage.removeItem(`quiz_questions_${difficulty}_${prevKey}`);
          }
        }
      }
      setCurrentQuestionIndex(0); // Reset index when difficulty changes
      setScore(0);
      setSelectedAnswer('');
      setShowResult(false);
      setAnsweredQuestions([]);
      setQuizCompleted(false);
    }
  }, [difficulty]);

  const currentQuestion = dailyQuestions[currentQuestionIndex];
  const progress = dailyQuestions.length > 0 ? ((currentQuestionIndex + 1) / dailyQuestions.length) * 100 : 0;

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
    const isCorrect = answerIndex === currentQuestion.answer;
    
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
    
    if (currentQuestionIndex + 1 >= dailyQuestions.length) {
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
    setDailyQuestions([]); // Clear daily questions on reset
  };

  const getScoreMessage = () => {
    const percentage = (score / dailyQuestions.length) * 100;
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
                    {isArabic ? "الأسئلة تتغير يومياً" : "Questions change daily"}
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
                  {score}/{dailyQuestions.length}
                </div>
                <div className="text-xl text-muted-foreground">
                  {Math.round((score / dailyQuestions.length) * 100)}%
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
              {currentQuestionIndex + 1} / {dailyQuestions.length}
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