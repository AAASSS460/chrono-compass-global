
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">سياسة الخصوصية</h1>
        <p className="text-xl text-muted-foreground">
          نحن نحرص على حماية خصوصيتك وبياناتك الشخصية
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              مقدمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نحن في منصة ChronoCompass نلتزم بحماية خصوصيتك وبياناتك الشخصية. 
              هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا 
              عند استخدام موقعنا الإلكتروني وأدواتنا الرقمية.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              المعلومات التي نجمعها
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">معلومات الاستخدام</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• معلومات الموقع الجغرافي (لحساب أوقات الصلاة)</li>
                <li>• تفضيلات اللغة والواجهة</li>
                <li>• إحصائيات الاستخدام المجهولة</li>
                <li>• معلومات الجهاز والمتصفح</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">معلومات الاتصال</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• البريد الإلكتروني (عند التواصل معنا)</li>
                <li>• الاسم (اختياري)</li>
                <li>• الرسائل والاستفسارات</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              كيفية استخدام المعلومات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">تحسين الخدمات</h4>
                <p className="text-sm text-muted-foreground">
                  نستخدم المعلومات لتحسين أدواتنا وتقديم تجربة أفضل للمستخدمين.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">حساب أوقات الصلاة</h4>
                <p className="text-sm text-muted-foreground">
                  نستخدم موقعك الجغرافي لحساب أوقات الصلاة الدقيقة لموقعك.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">الرد على الاستفسارات</h4>
                <p className="text-sm text-muted-foreground">
                  نستخدم معلومات الاتصال للرد على استفساراتكم ورسائلكم.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              مشاركة المعلومات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أي طرف ثالث 
              لأغراض تجارية. قد نشارك المعلومات فقط في الحالات التالية:
            </p>
            <ul className="text-sm text-muted-foreground mt-3 space-y-1">
              <li>• عند الحصول على موافقتك الصريحة</li>
              <li>• عند الحاجة للامتثال للقوانين والأنظمة</li>
              <li>• لحماية حقوقنا وحقوق المستخدمين الآخرين</li>
              <li>• مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل الموقع</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              ملفات تعريف الارتباط (Cookies)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربة الاستخدام وتذكر تفضيلاتك. 
              يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">حقوقك</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-primary mb-2">حق الوصول</h4>
                <p className="text-sm text-muted-foreground">
                  يمكنك طلب نسخة من معلوماتك الشخصية المحفوظة لدينا
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">حق التعديل</h4>
                <p className="text-sm text-muted-foreground">
                  يمكنك تحديث أو تصحيح معلوماتك الشخصية في أي وقت
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">حق الحذف</h4>
                <p className="text-sm text-muted-foreground">
                  يمكنك طلب حذف معلوماتك الشخصية من قواعد بياناتنا
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">حق الاعتراض</h4>
                <p className="text-sm text-muted-foreground">
                  يمكنك الاعتراض على معالجة معلوماتك لأغراض معينة
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">الأمان</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم تقنيات تشفير متقدمة لحماية معلوماتك الشخصية. 
              نتخذ جميع التدابير الأمنية المناسبة لمنع الوصول غير المصرح به 
              أو الكشف عن معلوماتك الشخصية.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">التحديثات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات 
              جوهرية من خلال نشر السياسة المحدثة على موقعنا.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">اتصل بنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، 
              يرجى التواصل معنا عبر صفحة "اتصل بنا"
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
