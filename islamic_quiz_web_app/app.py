from flask import Flask, render_template, request, jsonify, session
import random

app = Flask(__name__)
app.secret_key = 'islamic_quiz_secret_key'

# بيانات الألغاز الإسلامية
QUIZ_DATA = [
    {
        "id": 1,
        "question": "أنا ركن من أركان الإسلام، لا أرى بالعين، ولا ألمس باليد، لكن وجودي أساس لكل عمل صالح. فما أنا؟",
        "answer": "الإخلاص",
        "explanation": "الإخلاص هو نية العمل الصالح لوجه الله تعالى وحده، وهو أساس قبول الأعمال.",
        "difficulty": "متوسط"
    },
    {
        "id": 2,
        "question": "أنا حدث غير مجرى التاريخ الإسلامي، بدأت بكلمة 'اقرأ'، وانتهت بفتح القلوب والعقول. فما أنا؟",
        "answer": "نزول الوحي",
        "explanation": "بدأ نزول الوحي على النبي محمد صلى الله عليه وسلم بكلمة 'اقرأ' في غار حراء، وكان له الأثر الأكبر في تغيير مسار التاريخ.",
        "difficulty": "سهل"
    },
    {
        "id": 3,
        "question": "أنا سورة في القرآن الكريم، بدأت باسم فاكهة، وذكرت قصة نبي عظيم. فما أنا؟",
        "answer": "سورة التين",
        "explanation": "سورة التين تبدأ بالقسم بالتين والزيتون، وتذكر قصة خلق الإنسان في أحسن تقويم.",
        "difficulty": "متوسط"
    },
    {
        "id": 4,
        "question": "أنا مبدأ إسلامي يضمن العدالة الاجتماعية، أُخذ من الأغنياء ويُعطى للفقراء، ويُطهر المال ويزيد البركة. فما أنا؟",
        "answer": "الزكاة",
        "explanation": "الزكاة هي ركن من أركان الإسلام، وهي فريضة مالية على الأغنياء تُعطى للفقراء والمساكين، وتُطهر المال وتنميه.",
        "difficulty": "سهل"
    },
    {
        "id": 5,
        "question": "أنا معركة إسلامية، انتصر فيها المسلمون رغم قلة عددهم، وظهرت فيها معجزة إلهية. فما أنا؟",
        "answer": "غزوة بدر",
        "explanation": "غزوة بدر الكبرى كانت أول معركة فاصلة في الإسلام، انتصر فيها المسلمون بفضل الله رغم قلة عددهم، ونزلت الملائكة لتثبيتهم.",
        "difficulty": "متوسط"
    },
    {
        "id": 6,
        "question": "أنا أول مسجد بُني في الإسلام، شهدت أول خطبة جمعة، وكنت مركزاً للحكم والتعليم. فما أنا؟",
        "answer": "المسجد النبوي",
        "explanation": "المسجد النبوي في المدينة المنورة هو أول مسجد بناه النبي محمد صلى الله عليه وسلم، وكان مركزاً للعبادة والحكم والتعليم.",
        "difficulty": "سهل"
    },
    {
        "id": 7,
        "question": "أنا صحابي جليل، لُقبت بـ'الصديق'، وكنت أول من آمن من الرجال، وأول خليفة راشد. فمن أنا؟",
        "answer": "أبو بكر الصديق",
        "explanation": "أبو بكر الصديق رضي الله عنه كان أول من آمن من الرجال، ولُقب بالصديق لتصديقه للنبي في كل أحواله، وكان أول الخلفاء الراشدين.",
        "difficulty": "سهل"
    },
    {
        "id": 8,
        "question": "أنا ليلة مباركة، خير من ألف شهر، تنزل فيها الملائكة والروح، وأُنزل فيها القرآن. فما أنا؟",
        "answer": "ليلة القدر",
        "explanation": "ليلة القدر هي الليلة التي أُنزل فيها القرآن الكريم، وهي خير من ألف شهر، وتقع في العشر الأواخر من رمضان.",
        "difficulty": "سهل"
    },
    {
        "id": 9,
        "question": "أنا علم إسلامي، أدرس أحكام الشريعة من مصادرها، وأُعرف بـ'أصول الفقه'. فما أنا؟",
        "answer": "علم أصول الفقه",
        "explanation": "علم أصول الفقه هو العلم الذي يدرس القواعد والمناهج المستخدمة لاستنباط الأحكام الشرعية من مصادرها الأساسية.",
        "difficulty": "صعب"
    },
    {
        "id": 10,
        "question": "أنا مدينة إسلامية، كنت عاصمة الخلافة العباسية، ولُقبت بـ'مدينة السلام'. فما أنا؟",
        "answer": "بغداد",
        "explanation": "بغداد كانت عاصمة الخلافة العباسية ولُقبت بـ'مدينة السلام'، وكانت مركزاً مهماً للعلم والثقافة في العالم الإسلامي.",
        "difficulty": "متوسط"
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_quiz')
def start_quiz():
    # اختيار 5 أسئلة عشوائية
    selected_questions = random.sample(QUIZ_DATA, 5)
    session['questions'] = selected_questions
    session['current_question'] = 0
    session['score'] = 0
    session['answers'] = []
    return jsonify({'success': True})

@app.route('/get_question')
def get_question():
    if 'questions' not in session:
        return jsonify({'error': 'لم يتم بدء اللعبة بعد'})
    
    current_idx = session.get('current_question', 0)
    questions = session.get('questions', [])
    
    if current_idx >= len(questions):
        return jsonify({'finished': True})
    
    question = questions[current_idx]
    return jsonify({
        'question': question['question'],
        'question_number': current_idx + 1,
        'total_questions': len(questions),
        'difficulty': question['difficulty']
    })

@app.route('/submit_answer', methods=['POST'])
def submit_answer():
    if 'questions' not in session:
        return jsonify({'error': 'لم يتم بدء اللعبة بعد'})
    
    user_answer = request.json.get('answer', '').strip()
    current_idx = session.get('current_question', 0)
    questions = session.get('questions', [])
    
    if current_idx >= len(questions):
        return jsonify({'error': 'انتهت الأسئلة'})
    
    question = questions[current_idx]
    correct = user_answer.lower() == question['answer'].lower()
    
    if correct:
        session['score'] = session.get('score', 0) + 1
    
    # حفظ الإجابة
    session['answers'].append({
        'question': question['question'],
        'user_answer': user_answer,
        'correct_answer': question['answer'],
        'correct': correct,
        'explanation': question['explanation']
    })
    
    session['current_question'] = current_idx + 1
    
    return jsonify({
        'correct': correct,
        'correct_answer': question['answer'],
        'explanation': question['explanation']
    })

@app.route('/get_results')
def get_results():
    if 'questions' not in session:
        return jsonify({'error': 'لم يتم بدء اللعبة بعد'})
    
    score = session.get('score', 0)
    total = len(session.get('questions', []))
    answers = session.get('answers', [])
    
    percentage = (score / total * 100) if total > 0 else 0
    
    if percentage >= 90:
        grade = "ممتاز"
        message = "أحسنت! معرفتك الإسلامية ممتازة"
    elif percentage >= 70:
        grade = "جيد جداً"
        message = "أداء رائع! استمر في التعلم"
    elif percentage >= 50:
        grade = "جيد"
        message = "أداء جيد، يمكنك التحسن أكثر"
    else:
        grade = "يحتاج تحسين"
        message = "لا تيأس، استمر في التعلم والمراجعة"
    
    return jsonify({
        'score': score,
        'total': total,
        'percentage': round(percentage, 1),
        'grade': grade,
        'message': message,
        'answers': answers
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


