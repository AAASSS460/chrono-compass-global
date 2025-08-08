
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">اتصل بنا</h1>
        <p className="text-xl text-muted-foreground">
          نحن هنا لمساعدتك في أي استفسار أو اقتراح
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* معلومات الاتصال */}
        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">معلومات الاتصال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p className="text-sm text-muted-foreground">info@chronocompass.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">رسائل مباشرة</p>
                  <p className="text-sm text-muted-foreground">متاح على مدار الساعة</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">الموقع</p>
                  <p className="text-sm text-muted-foreground">منصة رقمية عالمية</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">كيف يمكننا مساعدتك؟</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">استفسارات تقنية</h4>
                <p className="text-sm text-muted-foreground">
                  مساعدة في استخدام الأدوات والميزات
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">اقتراحات وتحسينات</h4>
                <p className="text-sm text-muted-foreground">
                  نرحب بآرائكم لتطوير المنصة
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">تقارير أخطاء</h4>
                <p className="text-sm text-muted-foreground">
                  إبلاغ عن أي مشاكل تقنية
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">شراكة وتعاون</h4>
                <p className="text-sm text-muted-foreground">
                  فرص التعاون مع المؤسسات الإسلامية
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* نموذج الاتصال */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">أرسل رسالة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
              <Input placeholder="أدخل اسمك الكامل" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <Input type="email" placeholder="example@email.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">نوع الرسالة</label>
              <select className="w-full p-2 border border-input rounded-md bg-background">
                <option>اختر نوع الرسالة</option>
                <option>استفسار تقني</option>
                <option>اقتراح تحسين</option>
                <option>تقرير خطأ</option>
                <option>شراكة وتعاون</option>
                <option>أخرى</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">الموضوع</label>
              <Input placeholder="موضوع الرسالة" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">الرسالة</label>
              <Textarea 
                placeholder="اكتب رسالتك هنا..." 
                rows={5}
                className="resize-none"
              />
            </div>
            
            <Button className="w-full" size="lg">
              <Send className="h-4 w-4 mr-2" />
              إرسال الرسالة
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* معلومات إضافية */}
      <Card className="mt-8 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">معلومات مهمة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary mb-2">وقت الاستجابة</h4>
              <p className="text-sm text-muted-foreground">
                نستجيب لجميع الرسائل خلال 24-48 ساعة في أيام العمل
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">الخصوصية</h4>
              <p className="text-sm text-muted-foreground">
                نضمن خصوصية جميع المعلومات المرسلة ولن نشاركها مع أي طرف ثالث
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
