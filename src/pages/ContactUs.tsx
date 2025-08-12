
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('contact.title')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* معلومات الاتصال */}
        <div className="space-y-6">
          

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{t('contact.howCanWeHelp')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">{t('contact.technicalInquiries')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact.technicalInquiriesDesc')}
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">{t('contact.suggestions')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact.suggestionsDesc')}
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">{t('contact.bugReports')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact.bugReportsDesc')}
                </p>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary">{t('contact.partnership')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('contact.partnershipDesc')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* نموذج الاتصال */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{t('contact.sendMessage')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.fullName')}</label>
              <Input placeholder={t('contact.fullNamePlaceholder')} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
              <Input type="email" placeholder={t('contact.emailPlaceholder')} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.messageType')}</label>
              <select className="w-full p-2 border border-input rounded-md bg-background">
                <option>{t('contact.messageTypePlaceholder')}</option>
                <option>{t('contact.messageType.technical')}</option>
                <option>{t('contact.messageType.suggestion')}</option>
                <option>{t('contact.messageType.bug')}</option>
                <option>{t('contact.messageType.partnership')}</option>
                <option>{t('contact.messageType.other')}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.subject')}</label>
              <Input placeholder={t('contact.subjectPlaceholder')} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
              <Textarea 
                placeholder={t('contact.messagePlaceholder')} 
                rows={5}
                className="resize-none"
              />
            </div>
            
            <Button className="w-full" size="lg">
              <Send className="h-4 w-4 mr-2" />
              {t('contact.send')}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* معلومات إضافية */}
      <Card className="mt-8 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">{t('contact.importantInfo')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary mb-2">{t('contact.responseTime')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('contact.responseTimeDesc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">{t('contact.privacy')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('contact.privacyDesc')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
