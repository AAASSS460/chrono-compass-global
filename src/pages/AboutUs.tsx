
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">{t('about.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{t('about.welcome')}</p>
          <p>{t('about.mission')}</p>
          <p>{t('about.vision')}</p>
          <p>{t('about.commitment')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
