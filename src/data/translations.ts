import { Language } from '@/contexts/LanguageContext';

// Updated protection templates - Force Vercel redeploy

export interface BlogTranslation {
  title: string;
  introduction: string;
  howTheftHappens: {
    title: string;
    content: string;
    examples: {
      communities: {
        title: string;
        description: string;
      };
      device: {
        title: string;
        description: string;
      };
      location: {
        title: string;
        description: string;
      };
      email: {
        title: string;
        description: string;
      };
    };
  };
  howToRecover: {
    title: string;
    step1: {
      title: string;
      content: string;
    };
    step2: {
      title: string;
      content: string;
    };
    step3: {
      title: string;
      content: string;
    };
    step4: {
      title: string;
      content: string;
    };
    step5: {
      title: string;
      content: string;
    };
    supportButton: string;
  };
  templates: {
    title: string;
    description: string;
    recovery: {
      title: string;
      description: string;
      template: string;
    };
    protection: {
      title: string;
      description: string;
      template: string;
    };
    copyButton: string;
    copiedButton: string;
    editNote: string;
  };
  howToProtect: {
    title: string;
    content: string;
    steps: string[];
  };
  summary: {
    title: string;
    tableHeaders: string[];
    tableRows: Array<{
      situation: string;
      action: string;
    }>;
  };
  conclusion: {
    title: string;
    content: string;
    guideTitle: string;
    guideDescription: string;
  };
  languageSelector: string;
  sections: {
    introduction: string;
  };
}

export const translations: Record<Language, BlogTranslation> = {
  ar: {
    title: "كيفية استرجاع حسابك في Amino وحمايته من السرقة",
    introduction: "في الفترة الأخيرة، واجه العديد من مستخدمي تطبيق Amino مشكلة فقدان حساباتهم بشكل مفاجئ، دون أن يكون هناك اختراق مباشر أو خلل في أمان التطبيق. لكن الحقيقة أن أغلب هذه الحالات حصلت بسبب استغلال ثغرة بشرية، وليست تقنية، وهي نظام مركز المساعدة (الدعم الفني). حيث يقوم بعض الأشخاص بجمع معلومات سطحية عن صاحب الحساب ثم إرسال طلب استرجاع إلى الدعم، مدّعين ملكيتهم له.",
    sections: {
      introduction: "مقدمة"
    },
    howTheftHappens: {
      title: "كيف تتم سرقة الحسابات؟",
      content: "يقوم البعض بجمع معلومات عن الضحية مثل: المجتمعات التي شارك بها (مثل: Anime Lounge, Art Haven)، نوع الجهاز المستخدم (Android أو iOS من لقطات الشاشة)، أسلوب الكتابة أو معلومات شخصية من المنشورات لتحديد موقع الإقامة، رابط الحساب أو البريد الإلكتروني إن توفر. ثم يتواصلون مع مركز المساعدة ويقدمون هذه البيانات لإقناع الدعم بأنهم أصحاب الحساب. وفي بعض الحالات، يتم نقل ملكية الحساب إليهم بالفعل.",
      examples: {
        communities: {
          title: "المجتمعات المشارك بها",
          description: "مثل: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "نوع الجهاز",
          description: "Android أو iOS (من لقطات الشاشة المنشورة)"
        },
        location: {
          title: "الموقع الجغرافي",
          description: "من اللهجة أو المنشورات أو التوقيت"
        },
        email: {
          title: "البريد الإلكتروني",
          description: "إذا تم نشره في أي مكان أو مشاركته"
        }
      }
    },
    howToRecover: {
      title: "كيفية استرجاع حسابك إذا تم اختراقه",
      step1: {
        title: "التوجه إلى مركز الدعم",
        content: "قم بفتح نموذج الدعم الفني الخاص بـ Amino من الرابط أدناه. هذا هو النموذج الرسمي الوحيد لطلبات استرجاع الحسابات."
      },
      step2: {
        title: "اختيار نوع المشكلة",
        content: "من قائمة \"Report an issue\"، اختر: \"Error Resetting Password\" إذا كنت لا تستطيع تسجيل الدخول، أو اختر الخيار المناسب في حالة سرقة الحساب أو تغيير البيانات بدون إذنك."
      },
      step3: {
        title: "تعبئة النموذج بالمعلومات الصحيحة",
        content: "أدخل بريدك الإلكتروني المرتبط بالحساب، انسخ رابط حسابك من التطبيق (صفحتك الشخصية > \"...\" > \"Copy Link\")، واكتب موضوع واضح مثل \"Unable to access my account\". في الوصف، استخدم النموذج الإنجليزي المرفق أدناه مع تعديل المعلومات الخاصة بك."
      },
      step4: {
        title: "الرد على رسالة البوت التلقائية",
        content: "بعد إرسال الطلب، ستصلك رسالة تلقائية (أوتوماتيكية) من بوت الدعم خلال دقائق. قم بالرد على هذه الرسالة بنفس الشرح الذي كتبته مسبقاً في خانة \"Description\" لتأكيد الطلب وتحويله لوكيل بشري."
      },
      step5: {
        title: "انتظار تواصل وكيل الدعم البشري",
        content: "بعد ردك على البوت، سيتم تحويل حالتك إلى وكيل دعم بشري خلال 24-48 ساعة. سيطرح عليك أسئلة إضافية للتأكد من ملكيتك للحساب مثل البريد الإلكتروني القديم أو المجتمعات المشارك بها. إذا تطابقت المعلومات، سيقوم باسترجاع الحساب لك."
      },
      supportButton: "فتح نموذج الدعم"
    },
    templates: {
      title: "نماذج جاهزة للاستخدام",
      description: "انسخ النماذج أدناه وعدّل المعلومات بما يناسب حالتك",
      recovery: {
        title: "نموذج طلب استرجاع الحساب",
        description: "استخدم هذا النموذج في الخطوة الثالثة لتعبئة حقل Description",
        template: `Hello Amino Support Team,

My Amino account was accessed without my permission, and I can no longer log in. I believe someone else may have gained unauthorized access to my account.

Here are some details to verify my identity:

• Previous email address: [أدخل بريدك الإلكتروني القديم]
• Device used: [Android/iOS]
• Some communities I participated in: [مثل: Anime Lounge, Art Haven]
• My username was: [اسم المستخدم القديم]
• Profile link: [رابط حسابك من التطبيق]
• Approximate account creation date: [التاريخ التقريبي]

I have all the necessary information to prove this account belongs to me. Please help me recover access to my account.

Thank you for your assistance.

Best regards,
[اسمك]`
      },
      protection: {
        title: "نموذج طلب حماية الحساب",
        description: "استخدم هذا النموذج لحماية حسابك من المحاولات المستقبلية",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "نسخ",
      copiedButton: "تم النسخ",
      editNote: "عدّل المعلومات الموجودة بين الأقواس [] بمعلوماتك الشخصية"
    },
    howToProtect: {
      title: "كيفية حماية حسابك مسبقاً من السرقة",
      content: "الوقاية خير من العلاج! لمنع حدوث نفس الأمر في المستقبل، يُفضل أن تطلب من الدعم عدم السماح بأي تغييرات على حسابك إلا إذا تم طلبها من داخل الحساب نفسه باستخدام البريد الإلكتروني المُتحقق منه.",
      steps: [
        "افتح نموذج الدعم من الرابط نفسه المذكور أعلاه",
        "اختر نوع الطلب المناسب من قائمة المشاكل",
        "في حقل \"Subject\" اكتب: \"Request to protect my account from unauthorized access\"",
        "استخدم النموذج الإنجليزي الرسمي في \"Description\" مع تعديل معلوماتك الشخصية",
        "بعد الإرسال، ستصلك رسالة من البوت - رد عليها بنفس النص لتأكيد الطلب"
      ]
    },
    summary: {
      title: "ملخص سريع للخطوات",
      tableHeaders: ["الحالة", "الإجراء المطلوب"],
      tableRows: [
        {
          situation: "فقدت حسابك أو تم اختراقه",
          action: "قدم طلب استرجاع + املأ النموذج بمعلوماتك + رد على البوت + انتظر الوكيل البشري"
        },
        {
          situation: "تريد حماية حسابك مستقبلاً",
          action: "قدم طلب حماية + استخدم النموذج الرسمي + رد على البوت للتأكيد"
        }
      ]
    },
    conclusion: {
      title: "خلاصة الموضوع",
      content: "تأمين حسابك في التطبيقات الاجتماعية ليس خيارًا، بل ضرورة حتمية في عصر التكنولوجيا. مع هذه الخطوات المفصلة، يمكنك استرجاع حسابك إذا تم اختراقه وتأمينه من أي محاولة مستقبلية. تذكر: احتفظ دائماً بنسخة من معلومات حسابك في مكان آمن، واستخدم بريد إلكتروني يمكنك الوصول إليه.",
      guideTitle: "دليل شامل للحماية",
      guideDescription: "تابع هذه الخطوات لحماية حسابك"
    },
    languageSelector: "اختر اللغة"
  },
  en: {
    title: "How to Recover Your Amino Account and Protect It from Theft",
    introduction: "Recently, many Amino app users have faced the problem of losing their accounts suddenly, without any direct hacking or security breach in the app. The truth is that most of these cases happened due to exploiting a human vulnerability, not a technical one, which is the help center (technical support) system. Some people collect superficial information about the account owner and then send a recovery request to support, claiming ownership of the account.",
    sections: {
      introduction: "Introduction"
    },
    howTheftHappens: {
      title: "How Are Accounts Stolen?",
      content: "Some people collect information about the victim such as: communities they participated in, device type used (from screenshots), writing style or personal information from posts, account link or email if available. Then they contact the help center and provide this data to convince support that they are the account owners.",
      examples: {
        communities: {
          title: "Communities Participated In",
          description: "Such as: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Device Type",
          description: "Android or iOS (from published screenshots)"
        },
        location: {
          title: "Geographic Location",
          description: "From dialect, posts, or timing"
        },
        email: {
          title: "Email Address",
          description: "If published anywhere or shared"
        }
      }
    },
    howToRecover: {
      title: "How to Recover Your Account if It Was Hacked",
      step1: {
        title: "Step 1: Go to Support Center",
        content: "Open the Amino technical support form from this link: https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Step 2: Choose Issue Type",
        content: "From the \"Report an issue\" menu, select: Error Resetting Password if you can't log in, or choose the appropriate option for other cases"
      },
      step3: {
        title: "Step 3: Fill Out the Form",
        content: "Enter your email address, account link, and a clear subject like \"Unable to access my account\". In the description, write a clear explanation in English that includes information to help them verify your identity."
      },
      step4: {
        title: "Step 4: Reply to Bot Message",
        content: "After sending the request, you'll receive an automatic message from the support bot. Reply to this message with the same explanation you wrote in the \"Description\" field."
      },
      step5: {
        title: "Step 5: Wait for Support Agent Contact",
        content: "After replying to the bot, your case will be transferred to a human support agent. They will ask you some questions to verify your account ownership. If the information matches, they will recover your account."
      },
      supportButton: "Open Support Form"
    },
    templates: {
      title: "Ready-to-Use Templates",
      description: "Copy the templates below and modify the information to suit your case",
      recovery: {
        title: "Account Recovery Request Template",
        description: "Use this template in Step 3 to fill the Description field",
        template: `Hello Amino Support Team,

My Amino account was accessed without my permission, and I can no longer log in. I believe someone else may have gained unauthorized access to my account.

Here are some details to verify my identity:

• Previous email address: [Enter your old email]
• Device used: [Android/iOS]
• Some communities I participated in: [Such as: Anime Lounge, Art Haven]
• My username was: [Your old username]
• Profile link: [Your account link from the app]
• Approximate account creation date: [Approximate date]

I have all the necessary information to prove this account belongs to me. Please help me recover access to my account.

Thank you for your assistance.

Best regards,
[Your name]`
      },
      protection: {
        title: "Account Protection Request Template",
        description: "Use this template to protect your account from future attempts",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Copy",
      copiedButton: "Copied",
      editNote: "Edit the information in brackets [] with your personal details"
    },
    howToProtect: {
      title: "How to Protect Your Account from Future Theft",
      content: "To prevent the same thing from happening in the future, it's preferable to ask support not to allow any changes to your account unless requested from within the account itself.",
      steps: [
        "Open the support form from the link above",
        "Choose the appropriate request type",
        "In \"Subject\" write: Request to protect my account from unauthorized access",
        "Use a formal message in \"Description\" requesting additional protection",
        "After sending, reply to the bot with the same message to confirm the request"
      ]
    },
    summary: {
      title: "Quick Summary",
      tableHeaders: ["Situation", "What to Do"],
      tableRows: [
        {
          situation: "Lost your account or it was hacked",
          action: "Submit recovery request + explanation + reply to bot"
        },
        {
          situation: "Want to protect your account in the future",
          action: "Submit protection request + formal format + confirm by replying"
        }
      ]
    },
    conclusion: {
      title: "Conclusion",
      content: "Securing your account in social applications is not an option, but a necessity. With these steps, you can recover your account if it was hacked and secure it from any future attempts. If you found this post helpful, don't hesitate to share it with others.",
      guideTitle: "Comprehensive Protection Guide",
      guideDescription: "Follow these steps to protect your account"
    },
    languageSelector: "Select Language"
  },
  es: {
    title: "Cómo Recuperar tu Cuenta de Amino y Protegerla del Robo",
    introduction: "Recientemente, muchos usuarios de la aplicación Amino han enfrentado el problema de perder sus cuentas de repente, sin ningún hackeo directo o falla de seguridad en la aplicación. La verdad es que la mayoría de estos casos ocurrieron debido a la explotación de una vulnerabilidad humana, no técnica, que es el sistema del centro de ayuda (soporte técnico). Algunas personas recopilan información superficial sobre el propietario de la cuenta y luego envían una solicitud de recuperación al soporte, reclamando la propiedad de la cuenta.",
    sections: {
      introduction: "Introducción"
    },
    howTheftHappens: {
      title: "¿Cómo se Roban las Cuentas?",
      content: "Algunas personas recopilan información sobre la víctima como: comunidades en las que participó, tipo de dispositivo usado (de capturas de pantalla), estilo de escritura o información personal de las publicaciones, enlace de cuenta o email si está disponible. Luego contactan al centro de ayuda y proporcionan estos datos para convencer al soporte de que son los propietarios de la cuenta.",
      examples: {
        communities: {
          title: "Comunidades en las que Participó",
          description: "Como: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Tipo de Dispositivo",
          description: "Android o iOS (de capturas de pantalla publicadas)"
        },
        location: {
          title: "Ubicación Geográfica",
          description: "Del dialecto, publicaciones o horarios"
        },
        email: {
          title: "Dirección de Email",
          description: "Si se publicó en algún lugar o se compartió"
        }
      }
    },
    howToRecover: {
      title: "Cómo Recuperar tu Cuenta si fue Hackeada",
      step1: {
        title: "Paso 1: Ir al Centro de Soporte",
        content: "Abre el formulario de soporte técnico de Amino desde este enlace: https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Paso 2: Elegir Tipo de Problema",
        content: "Del menú \"Report an issue\", selecciona: Error Resetting Password si no puedes iniciar sesión, o elige la opción apropiada para otros casos"
      },
      step3: {
        title: "Paso 3: Llenar el Formulario",
        content: "Ingresa tu dirección de email, enlace de cuenta y un asunto claro como \"Unable to access my account\". En la descripción, escribe una explicación clara en inglés que incluya información para ayudarles a verificar tu identidad."
      },
      step4: {
        title: "Paso 4: Responder al Mensaje del Bot",
        content: "Después de enviar la solicitud, recibirás un mensaje automático del bot de soporte. Responde a este mensaje con la misma explicación que escribiste en el campo \"Description\"."
      },
      step5: {
        title: "Paso 5: Esperar Contacto del Agente de Soporte",
        content: "Después de responder al bot, tu caso será transferido a un agente de soporte humano. Te harán algunas preguntas para verificar la propiedad de tu cuenta. Si la información coincide, recuperarán tu cuenta."
      },
      supportButton: "Abrir Formulario de Soporte"
    },
    templates: {
      title: "Plantillas Listas para Usar",
      description: "Copia las plantillas a continuación y modifica la información según tu caso",
      recovery: {
        title: "Plantilla de Solicitud de Recuperación de Cuenta",
        description: "Usa esta plantilla en el Paso 3 para llenar el campo Description",
        template: `Hola Equipo de Soporte de Amino,

Mi cuenta de Amino fue accedida sin mi permiso, y ya no puedo iniciar sesión. Creo que alguien más puede haber obtenido acceso no autorizado a mi cuenta.

Aquí hay algunos detalles para verificar mi identidad:

• Dirección de email anterior: [Ingresa tu email anterior]
• Dispositivo usado: [Android/iOS]
• Algunas comunidades en las que participé: [Como: Anime Lounge, Art Haven]
• Mi nombre de usuario era: [Tu nombre de usuario anterior]
• Enlace del perfil: [Tu enlace de cuenta desde la app]
• Fecha aproximada de creación de la cuenta: [Fecha aproximada]

Tengo toda la información necesaria para probar que esta cuenta me pertenece. Por favor ayúdame a recuperar el acceso a mi cuenta.

Gracias por tu asistencia.

Saludos cordiales,
[Tu nombre]`
      },
      protection: {
        title: "Plantilla de Solicitud de Protección de Cuenta",
        description: "Usa esta plantilla para proteger tu cuenta de intentos futuros",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Copiar",
      copiedButton: "Copiado",
      editNote: "Edita la información entre corchetes [] con tus detalles personales"
    },
    howToProtect: {
      title: "Cómo Proteger tu Cuenta de Futuros Robos",
      content: "Para prevenir que ocurra lo mismo en el futuro, es preferible pedirle al soporte que no permita cambios en tu cuenta a menos que se solicite desde dentro de la cuenta misma.",
      steps: [
        "Abre el formulario de soporte desde el enlace de arriba",
        "Elige el tipo de solicitud apropiado",
        "En \"Subject\" escribe: Request to protect my account from unauthorized access",
        "Usa un mensaje formal en \"Description\" solicitando protección adicional",
        "Después de enviar, responde al bot con el mismo mensaje para confirmar la solicitud"
      ]
    },
    summary: {
      title: "Resumen Rápido",
      tableHeaders: ["Situación", "Qué Hacer"],
      tableRows: [
        {
          situation: "Perdiste tu cuenta o fue hackeada",
          action: "Enviar solicitud de recuperación + explicación + responder al bot"
        },
        {
          situation: "Quieres proteger tu cuenta en el futuro",
          action: "Enviar solicitud de protección + formato formal + confirmar respondiendo"
        }
      ]
    },
    conclusion: {
      title: "Conclusión",
      content: "Asegurar tu cuenta en aplicaciones sociales no es una opción, sino una necesidad. Con estos pasos, puedes recuperar tu cuenta si fue hackeada y asegurarla de cualquier intento futuro. Si encontraste útil esta publicación, no dudes en compartirla con otros.",
      guideTitle: "Guía Completa de Protección",
      guideDescription: "Sigue estos pasos para proteger tu cuenta"
    },
    languageSelector: "Seleccionar Idioma"
  },
  pt: {
    title: "Como Recuperar sua Conta do Amino e Protegê-la de Roubo",
    introduction: "Recentemente, muitos usuários do aplicativo Amino enfrentaram o problema de perder suas contas repentinamente, sem qualquer hack direto ou falha de segurança no aplicativo. A verdade é que a maioria desses casos aconteceu devido à exploração de uma vulnerabilidade humana, não técnica, que é o sistema do centro de ajuda (suporte técnico). Algumas pessoas coletam informações superficiais sobre o proprietário da conta e então enviam uma solicitação de recuperação ao suporte, reivindicando a propriedade da conta.",
    sections: {
      introduction: "Introdução"
    },
    howTheftHappens: {
      title: "Como as Contas são Roubadas?",
      content: "Algumas pessoas coletam informações sobre a vítima como: comunidades em que participou, tipo de dispositivo usado (de capturas de tela), estilo de escrita ou informações pessoais de postagens, link da conta ou email se disponível. Então eles contatam o centro de ajuda e fornecem esses dados para convencer o suporte de que são os proprietários da conta.",
      examples: {
        communities: {
          title: "Comunidades em que Participou",
          description: "Como: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Tipo de Dispositivo",
          description: "Android ou iOS (de capturas de tela publicadas)"
        },
        location: {
          title: "Localização Geográfica",
          description: "Do dialeto, postagens ou horários"
        },
        email: {
          title: "Endereço de Email",
          description: "Se publicado em algum lugar ou compartilhado"
        }
      }
    },
    howToRecover: {
      title: "Como Recuperar sua Conta se foi Hackeada",
      step1: {
        title: "Passo 1: Ir ao Centro de Suporte",
        content: "Abra o formulário de suporte técnico do Amino neste link: https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Passo 2: Escolher Tipo de Problema",
        content: "Do menu \"Report an issue\", selecione: Error Resetting Password se você não consegue fazer login, ou escolha a opção apropriada para outros casos"
      },
      step3: {
        title: "Passo 3: Preencher o Formulário",
        content: "Digite seu endereço de email, link da conta e um assunto claro como \"Unable to access my account\". Na descrição, escreva uma explicação clara em inglês que inclua informações para ajudá-los a verificar sua identidade."
      },
      step4: {
        title: "Passo 4: Responder à Mensagem do Bot",
        content: "Após enviar a solicitação, você receberá uma mensagem automática do bot de suporte. Responda a esta mensagem com a mesma explicação que você escreveu no campo \"Description\"."
      },
      step5: {
        title: "Passo 5: Aguardar Contato do Agente de Suporte",
        content: "Após responder ao bot, seu caso será transferido para um agente de suporte humano. Eles farão algumas perguntas para verificar a propriedade de sua conta. Se as informações coincidirem, eles recuperarão sua conta."
      },
      supportButton: "Abrir Formulário de Suporte"
    },
    templates: {
      title: "Modelos Prontos para Usar",
      description: "Copie os modelos abaixo e modifique as informações para se adequar ao seu caso",
      recovery: {
        title: "Modelo de Solicitação de Recuperação de Conta",
        description: "Use este modelo no Passo 3 para preencher o campo Description",
        template: `Olá Equipe de Suporte do Amino,

Minha conta do Amino foi acessada sem minha permissão, e não consigo mais fazer login. Acredito que alguém pode ter obtido acesso não autorizado à minha conta.

Aqui estão alguns detalhes para verificar minha identidade:

• Endereço de email anterior: [Digite seu email anterior]
• Dispositivo usado: [Android/iOS]
• Algumas comunidades em que participei: [Como: Anime Lounge, Art Haven]
• Meu nome de usuário era: [Seu nome de usuário anterior]
• Link do perfil: [Seu link de conta do app]
• Data aproximada de criação da conta: [Data aproximada]

Tenho todas as informações necessárias para provar que esta conta me pertence. Por favor, me ajude a recuperar o acesso à minha conta.

Obrigado pela sua assistência.

Atenciosamente,
[Seu nome]`
      },
      protection: {
        title: "Modelo de Solicitação de Proteção de Conta",
        description: "Use este modelo para proteger sua conta de tentativas futuras",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Copiar",
      copiedButton: "Copiado",
      editNote: "Edite as informações entre colchetes [] com seus detalhes pessoais"
    },
    howToProtect: {
      title: "Como Proteger sua Conta de Futuros Roubos",
      content: "Para prevenir que a mesma coisa aconteça no futuro, é preferível pedir ao suporte para não permitir mudanças em sua conta a menos que seja solicitado de dentro da própria conta.",
      steps: [
        "Abra o formulário de suporte do link acima",
        "Escolha o tipo de solicitação apropriado",
        "Em \"Subject\" escreva: Request to protect my account from unauthorized access",
        "Use uma mensagem formal em \"Description\" solicitando proteção adicional",
        "Após enviar, responda ao bot com a mesma mensagem para confirmar a solicitação"
      ]
    },
    summary: {
      title: "Resumo Rápido",
      tableHeaders: ["Situação", "O que Fazer"],
      tableRows: [
        {
          situation: "Perdeu sua conta ou foi hackeada",
          action: "Enviar solicitação de recuperação + explicação + responder ao bot"
        },
        {
          situation: "Quer proteger sua conta no futuro",
          action: "Enviar solicitação de proteção + formato formal + confirmar respondendo"
        }
      ]
    },
    conclusion: {
      title: "Conclusão",
      content: "Proteger sua conta em aplicações sociais não é uma opção, mas uma necessidade. Com estes passos, você pode recuperar sua conta se foi hackeada e protegê-la de qualquer tentativa futura. Se achou este post útil, não hesite em compartilhá-lo com outros.",
      guideTitle: "Guia Completo de Proteção",
      guideDescription: "Siga estes passos para proteger sua conta"
    },
    languageSelector: "Selecionar Idioma"
  },
  ru: {
    title: "Как Восстановить Аккаунт в Amino и Защитить его от Кражи",
    introduction: "В последнее время многие пользователи приложения Amino столкнулись с проблемой внезапной потери своих аккаунтов, без какого-либо прямого взлома или сбоя безопасности в приложении. Правда в том, что большинство таких случаев произошло из-за эксплуатации человеческой уязвимости, а не технической, которая заключается в системе центра помощи (технической поддержки). Некоторые люди собирают поверхностную информацию о владельце аккаунта, а затем отправляют запрос на восстановление в поддержку, заявляя о владении аккаунтом.",
    sections: {
      introduction: "Введение"
    },
    howTheftHappens: {
      title: "Как Крадут Аккаунты?",
      content: "Некоторые люди собирают информацию о жертве, такую как: сообщества, в которых они участвовали, тип используемого устройства (по скриншотам), стиль письма или личную информацию из постов, ссылку на аккаунт или email, если доступно. Затем они связываются с центром помощи и предоставляют эти данные, чтобы убедить поддержку в том, что они являются владельцами аккаунта.",
      examples: {
        communities: {
          title: "Сообщества, в которых Участвовали",
          description: "Например: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Тип Устройства",
          description: "Android или iOS (из опубликованных скриншотов)"
        },
        location: {
          title: "Географическое Расположение",
          description: "Из диалекта, постов или времени"
        },
        email: {
          title: "Email Адрес",
          description: "Если опубликован где-либо или поделен"
        }
      }
    },
    howToRecover: {
      title: "Как Восстановить Аккаунт, если он был Взломан",
      step1: {
        title: "Шаг 1: Перейти в Центр Поддержки",
        content: "Откройте форму технической поддержки Amino по этой ссылке: https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Шаг 2: Выбрать Тип Проблемы",
        content: "Из меню \"Report an issue\" выберите: Error Resetting Password, если вы не можете войти в систему, или выберите подходящий вариант для других случаев"
      },
      step3: {
        title: "Шаг 3: Заполнить Форму",
        content: "Введите свой адрес электронной почты, ссылку на аккаунт и четкую тему, например \"Unable to access my account\". В описании напишите четкое объяснение на английском языке, которое включает информацию для помощи в проверке вашей личности."
      },
      step4: {
        title: "Шаг 4: Ответить на Сообщение Бота",
        content: "После отправки запроса вы получите автоматическое сообщение от бота поддержки. Ответьте на это сообщение тем же объяснением, которое вы написали в поле \"Description\"."
      },
      step5: {
        title: "Шаг 5: Дождаться Связи с Агентом Поддержки",
        content: "После ответа боту ваше дело будет передано человеку-агенту поддержки. Они зададут вам несколько вопросов для проверки владения аккаунтом. Если информация совпадет, они восстановят ваш аккаунт."
      },
      supportButton: "Открыть Форму Поддержки"
    },
    templates: {
      title: "Готовые Шаблоны",
      description: "Скопируйте шаблоны ниже и измените информацию в соответствии с вашим случаем",
      recovery: {
        title: "Шаблон Запроса на Восстановление Аккаунта",
        description: "Используйте этот шаблон в Шаге 3 для заполнения поля Description",
        template: `Здравствуйте, Команда Поддержки Amino,

Мой аккаунт Amino был взломан без моего разрешения, и я больше не могу войти в систему. Я считаю, что кто-то другой мог получить несанкционированный доступ к моему аккаунту.

Вот некоторые детали для проверки моей личности:

• Предыдущий адрес электронной почты: [Введите ваш старый email]
• Используемое устройство: [Android/iOS]
• Некоторые сообщества, в которых я участвовал: [Например: Anime Lounge, Art Haven]
• Мое имя пользователя было: [Ваше старое имя пользователя]
• Ссылка на профиль: [Ваша ссылка на аккаунт из приложения]
• Примерная дата создания аккаунта: [Примерная дата]

У меня есть вся необходимая информация, чтобы доказать, что этот аккаунт принадлежит мне. Пожалуйста, помогите мне восстановить доступ к моему аккаунту.

Спасибо за вашу помощь.

С наилучшими пожеланиями,
[Ваше имя]`
      },
      protection: {
        title: "Шаблон Запроса на Защиту Аккаунта",
        description: "Используйте этот шаблон для защиты вашего аккаунта от будущих попыток",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Копировать",
      copiedButton: "Скопировано",
      editNote: "Измените информацию в скобках [] на ваши личные данные"
    },
    howToProtect: {
      title: "Как Защитить Аккаунт от Будущих Краж",
      content: "Чтобы предотвратить повторение в будущем, предпочтительно попросить поддержку не разрешать никаких изменений в вашем аккаунте, если только они не запрашиваются изнутри самого аккаунта.",
      steps: [
        "Откройте форму поддержки по ссылке выше",
        "Выберите подходящий тип запроса",
        "В \"Subject\" напишите: Request to protect my account from unauthorized access",
        "Используйте формальное сообщение в \"Description\", запрашивая дополнительную защиту",
        "После отправки ответьте боту тем же сообщением для подтверждения запроса"
      ]
    },
    summary: {
      title: "Краткое Резюме",
      tableHeaders: ["Ситуация", "Что Делать"],
      tableRows: [
        {
          situation: "Потеряли аккаунт или он был взломан",
          action: "Отправить запрос на восстановление + объяснение + ответить боту"
        },
        {
          situation: "Хотите защитить аккаунт в будущем",
          action: "Отправить запрос на защиту + формальный формат + подтвердить ответом"
        }
      ]
    },
    conclusion: {
      title: "Заключение",
      content: "Защита вашего аккаунта в социальных приложениях - это не опция, а необходимость. С помощью этих шагов вы можете восстановить свой аккаунт, если он был взломан, и защитить его от любых будущих попыток. Если вы нашли этот пост полезным, не стесняйтесь поделиться им с другими.",
      guideTitle: "Комплексное Руководство по Защите",
      guideDescription: "Следуйте этим шагам для защиты вашего аккаунта"
    },
    languageSelector: "Выбрать Язык"
  },
  fr: {
    title: "Comment Récupérer votre Compte Amino et le Protéger du Vol",
    introduction: "Récemment, de nombreux utilisateurs de l'application Amino ont fait face au problème de perdre leurs comptes soudainement, sans aucun piratage direct ou faille de sécurité dans l'application. La vérité est que la plupart de ces cas se sont produits en raison de l'exploitation d'une vulnérabilité humaine, pas technique, qui est le système du centre d'aide (support technique). Certaines personnes collectent des informations superficielles sur le propriétaire du compte puis envoient une demande de récupération au support, revendiquant la propriété du compte.",
    sections: {
      introduction: "Introduction"
    },
    howTheftHappens: {
      title: "Comment les Comptes sont-ils Volés ?",
      content: "Certaines personnes collectent des informations sur la victime telles que : les communautés auxquelles elle a participé, le type d'appareil utilisé (à partir de captures d'écran), le style d'écriture ou les informations personnelles des publications, le lien du compte ou l'email si disponible. Ils contactent ensuite le centre d'aide et fournissent ces données pour convaincre le support qu'ils sont les propriétaires du compte.",
      examples: {
        communities: {
          title: "Communautés Participées",
          description: "Comme: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Type d'Appareil",
          description: "Android ou iOS (des captures d'écran publiées)"
        },
        location: {
          title: "Emplacement Géographique",
          description: "Du dialecte, publications ou horaires"
        },
        email: {
          title: "Adresse Email",
          description: "Si publié quelque part ou partagé"
        }
      }
    },
    howToRecover: {
      title: "Comment Récupérer votre Compte s'il a été Piraté",
      step1: {
        title: "Étape 1 : Aller au Centre de Support",
        content: "Ouvrez le formulaire de support technique Amino à partir de ce lien : https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Étape 2 : Choisir le Type de Problème",
        content: "Dans le menu \"Report an issue\", sélectionnez : Error Resetting Password si vous ne pouvez pas vous connecter, ou choisissez l'option appropriée pour d'autres cas"
      },
      step3: {
        title: "Étape 3 : Remplir le Formulaire",
        content: "Entrez votre adresse email, le lien du compte et un sujet clair comme \"Unable to access my account\". Dans la description, écrivez une explication claire en anglais qui inclut des informations pour les aider à vérifier votre identité."
      },
      step4: {
        title: "Étape 4 : Répondre au Message du Bot",
        content: "Après avoir envoyé la demande, vous recevrez un message automatique du bot de support. Répondez à ce message avec la même explication que vous avez écrite dans le champ \"Description\"."
      },
      step5: {
        title: "Étape 5 : Attendre le Contact de l'Agent de Support",
        content: "Après avoir répondu au bot, votre cas sera transféré à un agent de support humain. Ils vous poseront quelques questions pour vérifier la propriété de votre compte. Si les informations correspondent, ils récupéreront votre compte."
      },
      supportButton: "Ouvrir le Formulaire de Support"
    },
    templates: {
      title: "Modèles Prêts à Utiliser",
      description: "Copiez les modèles ci-dessous et modifiez les informations selon votre cas",
      recovery: {
        title: "Modèle de Demande de Récupération de Compte",
        description: "Utilisez ce modèle à l'Étape 3 pour remplir le champ Description",
        template: `Bonjour Équipe de Support Amino,

Mon compte Amino a été accédé sans ma permission, et je ne peux plus me connecter. Je crois que quelqu'un d'autre peut avoir obtenu un accès non autorisé à mon compte.

Voici quelques détails pour vérifier mon identité :

• Adresse email précédente : [Entrez votre ancien email]
• Appareil utilisé : [Android/iOS]
• Certaines communautés auxquelles j'ai participé : [Comme : Anime Lounge, Art Haven]
• Mon nom d'utilisateur était : [Votre ancien nom d'utilisateur]
• Lien du profil : [Votre lien de compte depuis l'app]
• Date approximative de création du compte : [Date approximative]

J'ai toutes les informations nécessaires pour prouver que ce compte m'appartient. S'il vous plaît, aidez-moi à récupérer l'accès à mon compte.

Merci pour votre assistance.

Cordialement,
[Votre nom]`
      },
      protection: {
        title: "Modèle de Demande de Protection de Compte",
        description: "Utilisez ce modèle pour protéger votre compte des tentatives futures",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Copier",
      copiedButton: "Copié",
      editNote: "Modifiez les informations entre crochets [] avec vos détails personnels"
    },
    howToProtect: {
      title: "Comment Protéger votre Compte des Vols Futurs",
      content: "Pour éviter que la même chose se reproduise à l'avenir, il est préférable de demander au support de ne pas autoriser de changements sur votre compte à moins qu'ils ne soient demandés depuis l'intérieur du compte lui-même.",
      steps: [
        "Ouvrez le formulaire de support à partir du lien ci-dessus",
        "Choisissez le type de demande approprié",
        "Dans \"Subject\" écrivez : Request to protect my account from unauthorized access",
        "Utilisez un message formel dans \"Description\" demandant une protection supplémentaire",
        "Après l'envoi, répondez au bot avec le même message pour confirmer la demande"
      ]
    },
    summary: {
      title: "Résumé Rapide",
      tableHeaders: ["Situation", "Que Faire"],
      tableRows: [
        {
          situation: "Perdu votre compte ou il a été piraté",
          action: "Soumettre une demande de récupération + explication + répondre au bot"
        },
        {
          situation: "Voulez protéger votre compte à l'avenir",
          action: "Soumettre une demande de protection + format formel + confirmer en répondant"
        }
      ]
    },
    conclusion: {
      title: "Conclusion",
      content: "Sécuriser votre compte dans les applications sociales n'est pas une option, mais une nécessité. Avec ces étapes, vous pouvez récupérer votre compte s'il a été piraté et le sécuriser contre toute tentative future. Si vous avez trouvé ce post utile, n'hésitez pas à le partager avec d'autres.",
      guideTitle: "Guide Complet de Protection",
      guideDescription: "Suivez ces étapes pour protéger votre compte"
    },
    languageSelector: "Sélectionner la Langue"
  },
  de: {
    title: "Wie Sie Ihr Amino-Konto Wiederherstellen und vor Diebstahl Schützen",
    introduction: "In letzter Zeit sind viele Nutzer der Amino-App mit dem Problem konfrontiert worden, ihre Konten plötzlich zu verlieren, ohne direktes Hacking oder Sicherheitslücken in der App. Die Wahrheit ist, dass die meisten dieser Fälle aufgrund der Ausnutzung einer menschlichen, nicht technischen Schwachstelle aufgetreten sind, nämlich des Hilfe-Center-Systems (technischer Support). Einige Personen sammeln oberflächliche Informationen über den Kontoinhaber und senden dann eine Wiederherstellungsanfrage an den Support, wobei sie die Eigentümerschaft des Kontos beanspruchen.",
    sections: {
      introduction: "Einführung"
    },
    howTheftHappens: {
      title: "Wie werden Konten gestohlen?",
      content: "Einige Personen sammeln Informationen über das Opfer wie: Gemeinschaften, an denen sie teilgenommen haben, verwendeter Gerätetyp (aus Screenshots), Schreibstil oder persönliche Informationen aus Beiträgen, Kontolink oder E-Mail, falls verfügbar. Dann kontaktieren sie das Hilfe-Center und stellen diese Daten zur Verfügung, um den Support davon zu überzeugen, dass sie die Kontoinhaber sind.",
      examples: {
        communities: {
          title: "Gemeinschaften, an denen Teilgenommen Wurde",
          description: "Wie: Anime Lounge, Art Haven, Gaming Community"
        },
        device: {
          title: "Gerätetyp",
          description: "Android oder iOS (aus veröffentlichten Screenshots)"
        },
        location: {
          title: "Geografischer Standort",
          description: "Aus Dialekt, Beiträgen oder Zeitplan"
        },
        email: {
          title: "E-Mail-Adresse",
          description: "Wenn irgendwo veröffentlicht oder geteilt"
        }
      }
    },
    howToRecover: {
      title: "Wie Sie Ihr Konto wiederherstellen, wenn es gehackt wurde",
      step1: {
        title: "Schritt 1: Zum Support-Center gehen",
        content: "Öffnen Sie das technische Support-Formular von Amino über diesen Link: https://support.aminoapps.com/hc/en-us/requests/new?ticket_form_id=34958800453275&from_aminoapp=1"
      },
      step2: {
        title: "Schritt 2: Problemtyp wählen",
        content: "Aus dem Menü \"Report an issue\" wählen Sie: Error Resetting Password, wenn Sie sich nicht anmelden können, oder wählen Sie die entsprechende Option für andere Fälle"
      },
      step3: {
        title: "Schritt 3: Formular ausfüllen",
        content: "Geben Sie Ihre E-Mail-Adresse, den Kontolink und einen klaren Betreff wie \"Unable to access my account\" ein. In der Beschreibung schreiben Sie eine klare Erklärung auf Englisch, die Informationen enthält, um Ihnen bei der Überprüfung Ihrer Identität zu helfen."
      },
      step4: {
        title: "Schritt 4: Auf Bot-Nachricht antworten",
        content: "Nach dem Senden der Anfrage erhalten Sie eine automatische Nachricht vom Support-Bot. Antworten Sie auf diese Nachricht mit derselben Erklärung, die Sie im \"Description\"-Feld geschrieben haben."
      },
      step5: {
        title: "Schritt 5: Auf Kontakt des Support-Agenten warten",
        content: "Nach Ihrer Antwort an den Bot wird Ihr Fall an einen menschlichen Support-Agenten weitergeleitet. Sie werden Ihnen einige Fragen stellen, um die Eigentümerschaft Ihres Kontos zu überprüfen. Wenn die Informationen übereinstimmen, werden sie Ihr Konto wiederherstellen."
      },
      supportButton: "Support-Formular Öffnen"
    },
    templates: {
      title: "Einsatzbereite Vorlagen",
      description: "Kopieren Sie die Vorlagen unten und ändern Sie die Informationen entsprechend Ihrem Fall",
      recovery: {
        title: "Kontowiederherstellungs-Anfragevorlage",
        description: "Verwenden Sie diese Vorlage in Schritt 3, um das Beschreibungsfeld auszufüllen",
        template: `Hallo Amino Support-Team,

Mein Amino-Konto wurde ohne meine Erlaubnis aufgerufen, und ich kann mich nicht mehr anmelden. Ich glaube, dass jemand anderes möglicherweise unbefugten Zugriff auf mein Konto erlangt hat.

Hier sind einige Details zur Überprüfung meiner Identität:

• Vorherige E-Mail-Adresse: [Geben Sie Ihre alte E-Mail ein]
• Verwendetes Gerät: [Android/iOS]
• Einige Gemeinschaften, an denen ich teilgenommen habe: [Wie: Anime Lounge, Art Haven]
• Mein Benutzername war: [Ihr alter Benutzername]
• Profillink: [Ihr Kontolink aus der App]
• Ungefähres Kontoerstellungsdatum: [Ungefähres Datum]

Ich habe alle notwendigen Informationen, um zu beweisen, dass dieses Konto mir gehört. Bitte helfen Sie mir, den Zugriff auf mein Konto wiederherzustellen.

Vielen Dank für Ihre Unterstützung.

Mit freundlichen Grüßen,
[Ihr Name]`
      },
      protection: {
        title: "Kontoschutz-Anfragevorlage",
        description: "Verwenden Sie diese Vorlage, um Ihr Konto vor zukünftigen Versuchen zu schützen",
        template: `Dear Amino Support,

I would like to request extra protection for my account to prevent any unauthorized access or recovery attempts.

Please do not allow any recovery or changes to this account unless the request is made directly from my verified Amino email.

Here are the details:
- Amino Profile: (your profile link)
- Email: (your email)

Thank you for your continued support.`
      },
      copyButton: "Kopieren",
      copiedButton: "Kopiert",
      editNote: "Bearbeiten Sie die Informationen in Klammern [] mit Ihren persönlichen Daten"
    },
    howToProtect: {
      title: "Wie Sie Ihr Konto vor zukünftigem Diebstahl schützen",
      content: "Um zu verhindern, dass dasselbe in Zukunft passiert, ist es vorzuziehen, den Support zu bitten, keine Änderungen an Ihrem Konto zuzulassen, es sei denn, sie werden von innerhalb des Kontos selbst angefordert.",
      steps: [
        "Öffnen Sie das Support-Formular über den obigen Link",
        "Wählen Sie den entsprechenden Anfrage-Typ",
        "In \"Subject\" schreiben Sie: Request to protect my account from unauthorized access",
        "Verwenden Sie eine formelle Nachricht in \"Description\", die zusätzlichen Schutz anfordert",
        "Nach dem Senden antworten Sie dem Bot mit derselben Nachricht, um die Anfrage zu bestätigen"
      ]
    },
    summary: {
      title: "Schnelle Zusammenfassung",
      tableHeaders: ["Situation", "Was zu tun ist"],
      tableRows: [
        {
          situation: "Konto verloren oder gehackt wurde",
          action: "Wiederherstellungsanfrage einreichen + Erklärung + Bot antworten"
        },
        {
          situation: "Konto in Zukunft schützen möchten",
          action: "Schutzanfrage einreichen + formelles Format + durch Antworten bestätigen"
        }
      ]
    },
    conclusion: {
      title: "Fazit",
      content: "Die Sicherung Ihres Kontos in sozialen Anwendungen ist keine Option, sondern eine Notwendigkeit. Mit diesen Schritten können Sie Ihr Konto wiederherstellen, wenn es gehackt wurde, und es vor zukünftigen Versuchen schützen. Wenn Sie diesen Beitrag hilfreich fanden, zögern Sie nicht, ihn mit anderen zu teilen.",
      guideTitle: "Umfassender Schutzleitfaden",
      guideDescription: "Folgen Sie diesen Schritten, um Ihr Konto zu schützen"
    },
    languageSelector: "Sprache Auswählen"
  }
};

export const getTranslation = (lang: Language): BlogTranslation => {
  return translations[lang] || translations.en;
};