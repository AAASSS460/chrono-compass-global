import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import hisnulMuslimData from '@/data/hisnulMuslim';
import { DuaDetailProps } from '@/types';
import { Helmet } from 'react-helmet-async';

export default function DuaDetail() {
  const { title } = useParams<{ title: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const dua = hisnulMuslimData[title as keyof typeof hisnulMuslimData] as DuaDetailProps;

  if (!dua) {
    return <div>Dua not found</div>;
  }

  const description = (dua.text[0] || '').substring(0, 160);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <Helmet>
        <title>{`${title} - حصن المسلم | Faith Time`}</title>
        <meta name="description" content={`${description}...`} />
      </Helmet>

      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary mb-2 text-right">
              {isArabic ? 'النص العربي' : 'Arabic Text'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dua.text.map((text, index) => (
              <p key={index} className="text-lg text-right mb-4">{text}</p>
            ))}
          </CardContent>
        </Card>

        {dua.footnote && (
          <Card className="mt-8 shadow-lg border-0 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary mb-2 text-right">
                {isArabic ? 'الحاشية' : 'Footnote'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dua.footnote.map((note, index) => (
                <p key={index} className="text-sm text-muted-foreground text-right mb-2">{note}</p>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
