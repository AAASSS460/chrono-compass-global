
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('privacy.title')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('privacy.subtitle')}
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              {t('privacy.introduction')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.introductionDesc')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              {t('privacy.informationWeCollect')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">{t('privacy.usageInformation')}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>{t('privacy.usageInfo.location')}</li>
                <li>{t('privacy.usageInfo.language')}</li>
                <li>{t('privacy.usageInfo.analytics')}</li>
                <li>{t('privacy.usageInfo.device')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">{t('privacy.contactInformation')}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>{t('privacy.contactInfo.email')}</li>
                <li>{t('privacy.contactInfo.name')}</li>
                <li>{t('privacy.contactInfo.messages')}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              {t('privacy.howWeUseInformation')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.serviceImprovement')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.serviceImprovementDesc')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.prayerTimeCalculation')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.prayerTimeCalculationDesc')}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.respondingToInquiries')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.respondingToInquiriesDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              {t('privacy.informationSharing')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.informationSharingDesc')}
            </p>
            <ul className="text-sm text-muted-foreground mt-3 space-y-1">
              <li>{t('privacy.sharingConditions.consent')}</li>
              <li>{t('privacy.sharingConditions.legal')}</li>
              <li>{t('privacy.sharingConditions.rights')}</li>
              <li>{t('privacy.sharingConditions.providers')}</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {t('privacy.cookies')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.cookiesDesc')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{t('privacy.yourRights')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.rights.access')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.rights.accessDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.rights.edit')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.rights.editDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.rights.delete')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.rights.deleteDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">{t('privacy.rights.object')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('privacy.rights.objectDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{t('privacy.security')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.securityDesc')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{t('privacy.updates')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.updatesDesc')}
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{t('privacy.contactUs')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('privacy.contactUsDesc')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
