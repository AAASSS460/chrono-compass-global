import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Trophy, RotateCcw } from 'lucide-react';
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
  difficulty: 'easy' | 'medium' | 'hard'; // Add difficulty to question interface
}

const SmartIslamicQuiz: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isArabic = i18n.language === 'ar';

  // State variables for the quiz logic
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string; correctAnswer?: string } | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]); // Will load from islamicQuizQuestions.ts

  // Function to get a consistent set of random questions for the day
  const getDailyQuestions = (allQuestions: QuizQuestion[]): QuizQuestion[] => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate(); 
    
    let s = seed;
    const random = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };

    const shuffled = [...allQuestions].sort(() => random() - 0.5);
    return shuffled.slice(0, 5); // The HTML game uses 5 questions
  };

  useEffect(() => {
    if (quizStarted) {
      // For this game, we'll use a mix of difficulties or just 'hard' as per user's hint
      // The original HTML game didn't have difficulty selection, so we'll default to hard
      const allHardQuestions = islamicQuizQuestions.hard.map(q => ({ ...q, difficulty: 'hard' }));
      setQuizQuestions(getDailyQuestions(allHardQuestions));
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswer('');
      setShowResult(false);
      setFeedback(null);
    }
  }, [quizStarted]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = quizQuestions.length > 0 ? ((currentQuestionIndex) / quizQuestions.length) * 100 : 0;

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic ? "يرجى كتابة إجابة" : "Please write an answer",
        variant: "destructive"
      });
      return;
    }

    // Find the correct option text based on the answer index
    const correctOptionText = isArabic 
      ? currentQuestion.optionsAr[currentQuestion.answer]
      : currentQuestion.options[currentQuestion.answer];

    const isCorrect = userAnswer.trim().toLowerCase() === correctOptionText.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
      setFeedback({
        correct: true,
        explanation: isArabic ? currentQuestion.explanationAr || "" : currentQuestion.explanation || "",
      });
      toast({
        title: isArabic ? "أحسنت! إجابة صحيحة" : "Correct! Well done!",
        description: isArabic ? currentQuestion.explanationAr || "" : currentQuestion.explanation || "",
        variant: "default"
      });
    } else {
      setFeedback({
        correct: false,
        explanation: isArabic ? currentQuestion.explanationAr || "" : currentQuestion.explanation || "",
        correctAnswer: correctOptionText,
      });
      toast({
        title: isArabic ? "للأسف، إجابة خاطئة" : "Incorrect answer",
        description: isArabic ? currentQuestion.explanationAr || "" : currentQuestion.explanation || "",
        variant: "destructive"
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setFeedback(null);
      } else {
        setShowResult(true);
      }
    }, 3000);
  };

  const handleRestartGame = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowResult(false);
    setFeedback(null);
    setQuizQuestions([]);
  };

  const getGradeMessage = (percentage: number) => {
    if (percentage >= 90) {
      return { text: isArabic ? "ممتاز!" : "Excellent!", class: "grade-excellent" };
    } else if (percentage >= 50) {
      return { text: isArabic ? "جيد!" : "Good!", class: "grade-good" };
    } else {
      return { text: isArabic ? "يحتاج إلى مراجعة أكثر" : "Needs more review", class: "grade-needs-improvement" };
    }
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center p-4">
        <div className="container bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <div className="header mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              {isArabic ? "لعبة الألغاز الإسلامية الذكية" : "Smart Islamic Quiz Game"}
            </h1>
            <p className="text-gray-600 text-lg">
              {isArabic 
                ? "اختبر معرفتك الإسلامية من خلال ألغاز ذكية ومتنوعة" 
                : "Test your Islamic knowledge with smart and diverse puzzles"}
            </p>
          </div>
          <div id="welcome-screen" className="text-center">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {isArabic
                ? "مرحباً بك في لعبة الألغاز الإسلامية! ستواجه 5 ألغاز متنوعة تختبر معرفتك بالدين الإسلامي. كل لغز له مستوى صعوبة مختلف، وستحصل على شرح مفصل بعد كل إجابة."
                : "Welcome to the Islamic Quiz Game! You will face 5 diverse puzzles that test your knowledge of Islam. Each puzzle has a different difficulty level, and you will get a detailed explanation after each answer."}
            </p>
            <Button onClick={handleStartQuiz} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300">
              🚀 {isArabic ? "ابدأ اللعبة" : "Start Game"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = quizQuestions.length > 0 ? (score / quizQuestions.length) * 100 : 0;
    const grade = getGradeMessage(percentage);
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center p-4">
        <div className="container bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <Card className="text-center shadow-none border-none">
            <CardHeader>
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl text-gray-800">
                {isArabic ? "انتهت اللعبة!" : "Game Over!"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {score} / {quizQuestions.length} ({Math.round(percentage)}%)
                </div>
                <div className={`text-xl font-medium ${grade.class}`}>
                  {grade.text}
                </div>
                <div className="flex gap-4 justify-center mt-6">
                  <Button onClick={handleRestartGame} variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {isArabic ? "العب مرة أخرى" : "Play Again"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center p-4">
        <div className="container bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <p className="text-lg text-gray-600">{isArabic ? "جاري تحميل الأسئلة..." : "Loading questions..."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center p-4">
      <div className="container bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="progress-bar w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div className="progress-fill h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        
        <Card className="question-card bg-gray-50 rounded-xl p-8 text-right border-l-4 border-blue-500">
          <CardHeader className="p-0 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="question-number text-blue-600 font-bold text-lg">
                {isArabic ? `السؤال ${currentQuestionIndex + 1} من ${quizQuestions.length}` : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`}
              </div>
              <Badge className={`difficulty-badge px-4 py-1 rounded-full text-sm font-bold ${currentQuestion.difficulty === 'easy' ? 'bg-green-500 text-white' : currentQuestion.difficulty === 'medium' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'}`}>
                {isArabic ? `المستوى: ${t(currentQuestion.difficulty)}` : `Difficulty: ${currentQuestion.difficulty}`}
              </Badge>
            </div>
            <CardTitle className="question-text text-xl text-gray-800 leading-relaxed">
              {isArabic ? currentQuestion.questionAr : currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Input
              type="text"
              id="answer-input"
              className="answer-input w-full p-4 text-lg border-2 border-gray-300 rounded-lg text-center focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-200"
              placeholder={isArabic ? "اكتب إجابتك هنا..." : "Write your answer here..."}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmitAnswer();
                }
              }}
            />
            <Button onClick={handleSubmitAnswer} disabled={!userAnswer.trim()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 mt-4">
              {isArabic ? "إرسال الإجابة" : "Submit Answer"}
            </Button>

            {feedback && (
              <div className={`result-card ${feedback.correct ? 'border-green-500' : 'border-red-500'} bg-gray-50 rounded-xl p-6 mt-6 text-right border-l-4`}>
                <h3 className={feedback.correct ? 'text-green-600 text-xl font-bold' : 'text-red-600 text-xl font-bold'}>
                  {feedback.correct ? (isArabic ? "✅ أحسنت! إجابة صحيحة" : "✅ Correct! Well done!") : (isArabic ? "❌ للأسف، إجابة خاطئة" : "❌ Incorrect answer")}
                </h3>
                {!feedback.correct && feedback.correctAnswer && (
                  <p className="text-gray-700 mt-2"><strong>{isArabic ? "الإجابة الصحيحة:" : "Correct Answer:"}</strong> {feedback.correctAnswer}</p>
                )}
                {feedback.explanation && (
                  <div className="explanation bg-blue-50 p-4 rounded-lg mt-4 italic text-gray-700">
                    {feedback.explanation}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SmartIslamicQuiz;