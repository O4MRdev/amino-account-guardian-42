import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/data/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, CheckCircle2, Info, Users, Zap, ArrowRight, ExternalLink, FileText, MessageSquare, Smartphone, Database, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExampleTemplate } from './ExampleTemplate';

export const BlogContent: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-5xl">
      {/* Introduction Section */}
      <section className="mb-12 lg:mb-20 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
          <Card className="border border-primary/20 shadow-glow bg-card/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl relative">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-soft flex-shrink-0">
                <Info className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground font-montserrat">{t.sections.introduction}</h2>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{t.introduction}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How Theft Happens */}
      <section className="mb-12 lg:mb-20 animate-slide-up">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
          <Card className="border border-primary/20 shadow-glow bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden relative">
            <div className="bg-gradient-primary p-4 sm:p-6">
              <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white text-xl sm:text-2xl font-montserrat">
                <div className="p-3 bg-white/20 rounded-xl flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span className="text-right font-montserrat">{t.howTheftHappens.title}</span>
              </CardTitle>
            </div>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">{t.howTheftHappens.content}</p>
              
              {/* Information gathering examples with icons */}
              <div className="grid gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <Database className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-montserrat">{t.howTheftHappens.examples.communities.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.howTheftHappens.examples.communities.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <Smartphone className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-montserrat">{t.howTheftHappens.examples.device.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.howTheftHappens.examples.device.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <MapPin className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-montserrat">{t.howTheftHappens.examples.location.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.howTheftHappens.examples.location.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <Mail className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-montserrat">{t.howTheftHappens.examples.email.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.howTheftHappens.examples.email.description}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Recover - Main Section */}
      <section className="mb-12 lg:mb-20 animate-fade-in">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-soft">
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-montserrat">{t.howToRecover.title}</h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {/* Step Cards with consistent primary theme */}
          {[
            { step: t.howToRecover.step1, number: "01" },
            { step: t.howToRecover.step2, number: "02" },
            { step: t.howToRecover.step3, number: "03" },
            { step: t.howToRecover.step4, number: "04" },
            { step: t.howToRecover.step5, number: "05" }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl transition-all duration-500 group-hover:opacity-15"></div>
              <Card className="border border-primary/20 shadow-glow hover:shadow-elegant transition-all duration-500 bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden group-hover:scale-[1.01] sm:group-hover:scale-[1.02] relative">
                <div className="flex flex-col sm:flex-row">
                  {/* Step Number */}
                  <div className="bg-gradient-primary p-4 sm:p-6 lg:p-8 flex items-center justify-center sm:min-w-[80px] lg:min-w-[120px]">
                    <div className="text-white text-2xl sm:text-3xl font-bold">{item.number}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    <CardTitle className="text-lg sm:text-xl text-primary mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 font-montserrat">
                      <span>{item.step.title}</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary/60 hidden sm:block" />
                    </CardTitle>
                    <p className="leading-relaxed text-muted-foreground text-sm sm:text-base lg:text-lg">{item.step.content}</p>
                    
                    {/* Support Link for Step 1 */}
                    {index === 0 && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-4 border-primary/20 text-primary hover:bg-gradient-primary hover:text-white transition-all duration-300 text-sm shadow-soft hover:shadow-glow bg-card/80 backdrop-blur-sm"
                        onClick={() => window.open('https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1', '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.howToRecover.supportButton}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Example Templates Section */}
        <div className="mt-8 lg:mt-12 space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 font-montserrat">{t.templates.title}</h3>
            <p className="text-muted-foreground">{t.templates.description}</p>
          </div>

          <ExampleTemplate
            title={t.templates.recovery.title}
            description={t.templates.recovery.description}
            type="recovery"
            template={t.templates.recovery.template}
          />

          <ExampleTemplate
            title={t.templates.protection.title}
            description={t.templates.protection.description}
            type="protection"
            template={t.templates.protection.template}
          />
        </div>
      </section>

      {/* How to Protect */}
      <section className="mb-12 lg:mb-20 animate-slide-up">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-soft">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-montserrat">{t.howToProtect.title}</h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="bg-gradient-primary p-4 sm:p-6 lg:p-8">
              <p className="text-white text-base sm:text-lg leading-relaxed">{t.howToProtect.content}</p>
            </div>
            
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-3 sm:gap-4">
                {t.howToProtect.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                    <div className="p-2 bg-gradient-primary rounded-xl min-w-fit flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground pt-1 text-sm sm:text-base font-montserrat">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary Table */}
      <section className="mb-12 lg:mb-20 animate-fade-in">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-soft">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-montserrat">{t.summary.title}</h2>
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary">
                    {t.summary.tableHeaders.map((header, index) => (
                      <th key={index} className="text-right p-3 sm:p-4 lg:p-6 text-white font-bold text-sm sm:text-base lg:text-lg first:rounded-tr-3xl last:rounded-tl-3xl font-montserrat">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.summary.tableRows.map((row, index) => (
                    <tr key={index} className="border-b border-primary/10 hover:bg-primary/5 transition-all duration-300">
                      <td className="p-3 sm:p-4 lg:p-6 font-semibold text-foreground text-sm sm:text-base font-montserrat">{row.situation}</td>
                      <td className="p-3 sm:p-4 lg:p-6 text-muted-foreground text-sm sm:text-base font-montserrat">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="animate-slide-up">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="bg-gradient-primary p-4 sm:p-6 lg:p-8">
              <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white text-xl sm:text-2xl">
                <div className="p-3 bg-white/20 rounded-xl flex-shrink-0">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span className="font-montserrat">{t.conclusion.title}</span>
              </CardTitle>
            </div>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">{t.conclusion.content}</p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-primary/10">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-center sm:text-right">
                  <div className="font-semibold text-foreground font-montserrat">{t.conclusion.guideTitle}</div>
                  <div className="text-sm text-muted-foreground">{t.conclusion.guideDescription}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};