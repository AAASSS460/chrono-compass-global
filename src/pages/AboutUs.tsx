
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, BookOpen, Clock, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">من نحن</h1>
        <p className="text-xl text-muted-foreground">
          منصة شاملة لخدمة المجتمع الإسلامي في جميع أنحاء العالم
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              رؤيتنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نسعى لتقديم منصة رقمية شاملة تساعد المسلمين في جميع أنحاء العالم على الوصول 
              للأدوات الإسلامية الأساسية بسهولة ويسر، مع الحفاظ على الأصالة والموثوقية.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              رسالتنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              ربط المسلمين بتراثهم الإسلامي العريق من خلال أدوات رقمية حديثة، 
              وتسهيل الوصول للمعلومات الإسلامية الموثوقة في أي وقت ومكان.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              خدماتنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• محول التاريخ الهجري والميلادي</li>
              <li>• حاسبة العمر بالتقويم الهجري</li>
              <li>• أذكار الصباح والمساء</li>
              <li>• أوقات الصلاة الدقيقة</li>
              <li>• أدعية الجمعة المباركة</li>
              <li>• القرآن الكريم مع التفسير</li>
              <li>• معلومات عن المسلمين حول العالم</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              جمهورنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              نخدم المسلمين في جميع أنحاء العالم، من المبتدئين في التعلم 
              إلى العلماء والباحثين، مع التركيز على سهولة الاستخدام والموثوقية.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            قيمنا
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">الأصالة</h3>
              <p className="text-sm text-muted-foreground">
                نحرص على تقديم معلومات دقيقة ومصادر موثوقة
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">الشمولية</h3>
              <p className="text-sm text-muted-foreground">
                نخدم جميع المسلمين بغض النظر عن اللغة أو الموقع
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">الابتكار</h3>
              <p className="text-sm text-muted-foreground">
                نستخدم أحدث التقنيات لتسهيل الوصول للمعلومات الإسلامية
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
