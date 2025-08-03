import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, FileText, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExampleTemplateProps {
  title: string;
  description: string;
  template: string;
  type: 'recovery' | 'protection';
}

export const ExampleTemplate: React.FC<ExampleTemplateProps> = ({
  title,
  description,
  template,
  type
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      toast({
        title: "تم النسخ!",
        description: "تم نسخ النموذج إلى الحافظة",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "خطأ في النسخ",
        description: "فشل في نسخ النص",
        variant: "destructive"
      });
    }
  };

  const getIcon = () => {
    if (type === 'recovery') {
      return <FileText className="h-5 w-5" />;
    }
    return <MessageSquare className="h-5 w-5" />;
  };

  return (
    <div className="relative mb-6 lg:mb-8">
      <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl blur-sm"></div>
      <Card className="border border-primary/20 shadow-soft bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden relative">
        <CardHeader className="bg-gradient-primary/10 p-4 sm:p-6">
          <CardTitle className="flex items-center gap-3 text-lg sm:text-xl text-primary">
            {getIcon()}
            <span>{title}</span>
          </CardTitle>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">{description}</p>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="relative">
            <div className="bg-muted/30 rounded-xl p-4 sm:p-6 border border-primary/10">
              <pre className="text-xs sm:text-sm font-mono text-foreground whitespace-pre-wrap overflow-x-auto leading-relaxed">
                {template}
              </pre>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 left-2 sm:top-3 sm:left-3 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="ml-1 text-xs hidden sm:inline">
                {copied ? 'تم النسخ' : 'نسخ'}
              </span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>عدّل المعلومات الموجودة بين الأقواس [] بمعلوماتك الشخصية</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};