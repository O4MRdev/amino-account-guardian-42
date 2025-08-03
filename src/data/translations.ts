import { Language } from '@/contexts/LanguageContext';

export interface BlogTranslation {
  title: string;
  introduction: string;
  howTheftHappens: {
    title: string;
    content: string;
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
  };
  languageSelector: string;
}

export const translations: Record<Language, BlogTranslation> = {
  ar: {
    title: "كيفية استرجاع حسابك في Amino وحمايته من السرقة",
    introduction: "في الفترة الأخيرة، واجه العديد من مستخدمي تطبيق Amino مشكلة فقدان حساباتهم بشكل مفاجئ، دون أن يكون هناك اختراق مباشر أو خلل في أمان التطبيق. لكن الحقيقة أن أغلب هذه الحالات حصلت بسبب استغلال ثغرة بشرية، وليست تقنية، وهي نظام مركز المساعدة (الدعم الفني). حيث يقوم بعض الأشخاص بجمع معلومات سطحية عن صاحب الحساب ثم إرسال طلب استرجاع إلى الدعم، مدّعين ملكيتهم له.",
    howTheftHappens: {
      title: "كيف تتم سرقة الحسابات؟",
      content: "يقوم البعض بجمع معلومات عن الضحية مثل: المجتمعات التي شارك بها (مثل: Anime Lounge, Art Haven)، نوع الجهاز المستخدم (Android أو iOS من لقطات الشاشة)، أسلوب الكتابة أو معلومات شخصية من المنشورات لتحديد موقع الإقامة، رابط الحساب أو البريد الإلكتروني إن توفر. ثم يتواصلون مع مركز المساعدة ويقدمون هذه البيانات لإقناع الدعم بأنهم أصحاب الحساب. وفي بعض الحالات، يتم نقل ملكية الحساب إليهم بالفعل."
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
      }
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
      content: "تأمين حسابك في التطبيقات الاجتماعية ليس خيارًا، بل ضرورة حتمية في عصر التكنولوجيا. مع هذه الخطوات المفصلة، يمكنك استرجاع حسابك إذا تم اختراقه وتأمينه من أي محاولة مستقبلية. تذكر: احتفظ دائماً بنسخة من معلومات حسابك في مكان آمن، واستخدم بريد إلكتروني يمكنك الوصول إليه."
    },
    languageSelector: "اختر اللغة"
  },
  en: {
    title: "How to Recover Your Amino Account and Protect It from Theft",
    introduction: "Recently, many Amino app users have faced the problem of losing their accounts suddenly, without any direct hacking or security breach in the app. The truth is that most of these cases happened due to exploiting a human vulnerability, not a technical one, which is the help center (technical support) system. Some people collect superficial information about the account owner and then send a recovery request to support, claiming ownership of the account.",
    howTheftHappens: {
      title: "How Are Accounts Stolen?",
      content: "Some people collect information about the victim such as: communities they participated in, device type used (from screenshots), writing style or personal information from posts, account link or email if available. Then they contact the help center and provide this data to convince support that they are the account owners."
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
      }
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
      content: "Securing your account in social applications is not an option, but a necessity. With these steps, you can recover your account if it was hacked and secure it from any future attempts. If you found this post helpful, don't hesitate to share it with others."
    },
    languageSelector: "Select Language"
  },
  es: {
    title: "Cómo Recuperar tu Cuenta de Amino y Protegerla del Robo",
    introduction: "Recientemente, muchos usuarios de la aplicación Amino han enfrentado el problema de perder sus cuentas de repente, sin ningún hackeo directo o falla de seguridad en la aplicación. La verdad es que la mayoría de estos casos ocurrieron debido a la explotación de una vulnerabilidad humana, no técnica, que es el sistema del centro de ayuda (soporte técnico). Algunas personas recopilan información superficial sobre el propietario de la cuenta y luego envían una solicitud de recuperación al soporte, reclamando la propiedad de la cuenta.",
    howTheftHappens: {
      title: "¿Cómo se Roban las Cuentas?",
      content: "Algunas personas recopilan información sobre la víctima como: comunidades en las que participó, tipo de dispositivo usado (de capturas de pantalla), estilo de escritura o información personal de las publicaciones, enlace de cuenta o email si está disponible. Luego contactan al centro de ayuda y proporcionan estos datos para convencer al soporte de que son los propietarios de la cuenta."
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
      }
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
      content: "Asegurar tu cuenta en aplicaciones sociales no es una opción, sino una necesidad. Con estos pasos, puedes recuperar tu cuenta si fue hackeada y asegurarla de cualquier intento futuro. Si encontraste útil esta publicación, no dudes en compartirla con otros."
    },
    languageSelector: "Seleccionar Idioma"
  },
  pt: {
    title: "Como Recuperar sua Conta do Amino e Protegê-la de Roubo",
    introduction: "Recentemente, muitos usuários do aplicativo Amino enfrentaram o problema de perder suas contas repentinamente, sem qualquer hack direto ou falha de segurança no aplicativo. A verdade é que a maioria desses casos aconteceu devido à exploração de uma vulnerabilidade humana, não técnica, que é o sistema do centro de ajuda (suporte técnico). Algumas pessoas coletam informações superficiais sobre o proprietário da conta e então enviam uma solicitação de recuperação ao suporte, reivindicando a propriedade da conta.",
    howTheftHappens: {
      title: "Como as Contas são Roubadas?",
      content: "Algumas pessoas coletam informações sobre a vítima como: comunidades em que participou, tipo de dispositivo usado (de capturas de tela), estilo de escrita ou informações pessoais de postagens, link da conta ou email se disponível. Então eles contatam o centro de ajuda e fornecem esses dados para convencer o suporte de que são os proprietários da conta."
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
      }
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
      content: "Proteger sua conta em aplicações sociais não é uma opção, mas uma necessidade. Com estes passos, você pode recuperar sua conta se foi hackeada e protegê-la de qualquer tentativa futura. Se achou este post útil, não hesite em compartilhá-lo com outros."
    },
    languageSelector: "Selecionar Idioma"
  },
  ru: {
    title: "Как Восстановить Аккаунт в Amino и Защитить его от Кражи",
    introduction: "В последнее время многие пользователи приложения Amino столкнулись с проблемой внезапной потери своих аккаунтов, без какого-либо прямого взлома или сбоя безопасности в приложении. Правда в том, что большинство таких случаев произошло из-за эксплуатации человеческой уязвимости, а не технической, которая заключается в системе центра помощи (технической поддержки). Некоторые люди собирают поверхностную информацию о владельце аккаунта, а затем отправляют запрос на восстановление в поддержку, заявляя о владении аккаунтом.",
    howTheftHappens: {
      title: "Как Крадут Аккаунты?",
      content: "Некоторые люди собирают информацию о жертве, такую как: сообщества, в которых они участвовали, тип используемого устройства (по скриншотам), стиль письма или личную информацию из постов, ссылку на аккаунт или email, если доступно. Затем они связываются с центром помощи и предоставляют эти данные, чтобы убедить поддержку в том, что они являются владельцами аккаунта."
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
      }
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
      content: "Защита вашего аккаунта в социальных приложениях - это не опция, а необходимость. С помощью этих шагов вы можете восстановить свой аккаунт, если он был взломан, и защитить его от любых будущих попыток. Если вы нашли этот пост полезным, не стесняйтесь поделиться им с другими."
    },
    languageSelector: "Выбрать Язык"
  },
  fr: {
    title: "Comment Récupérer votre Compte Amino et le Protéger du Vol",
    introduction: "Récemment, de nombreux utilisateurs de l'application Amino ont fait face au problème de perdre leurs comptes soudainement, sans aucun piratage direct ou faille de sécurité dans l'application. La vérité est que la plupart de ces cas se sont produits en raison de l'exploitation d'une vulnérabilité humaine, pas technique, qui est le système du centre d'aide (support technique). Certaines personnes collectent des informations superficielles sur le propriétaire du compte puis envoient une demande de récupération au support, revendiquant la propriété du compte.",
    howTheftHappens: {
      title: "Comment les Comptes sont-ils Volés ?",
      content: "Certaines personnes collectent des informations sur la victime telles que : les communautés auxquelles elle a participé, le type d'appareil utilisé (à partir de captures d'écran), le style d'écriture ou les informations personnelles des publications, le lien du compte ou l'email si disponible. Ils contactent ensuite le centre d'aide et fournissent ces données pour convaincre le support qu'ils sont les propriétaires du compte."
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
      }
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
      content: "Sécuriser votre compte dans les applications sociales n'est pas une option, mais une nécessité. Avec ces étapes, vous pouvez récupérer votre compte s'il a été piraté et le sécuriser contre toute tentative future. Si vous avez trouvé ce post utile, n'hésitez pas à le partager avec d'autres."
    },
    languageSelector: "Sélectionner la Langue"
  },
  de: {
    title: "Wie Sie Ihr Amino-Konto Wiederherstellen und vor Diebstahl Schützen",
    introduction: "In letzter Zeit sind viele Nutzer der Amino-App mit dem Problem konfrontiert worden, ihre Konten plötzlich zu verlieren, ohne direktes Hacking oder Sicherheitslücken in der App. Die Wahrheit ist, dass die meisten dieser Fälle aufgrund der Ausnutzung einer menschlichen, nicht technischen Schwachstelle aufgetreten sind, nämlich des Hilfe-Center-Systems (technischer Support). Einige Personen sammeln oberflächliche Informationen über den Kontoinhaber und senden dann eine Wiederherstellungsanfrage an den Support, wobei sie die Eigentümerschaft des Kontos beanspruchen.",
    howTheftHappens: {
      title: "Wie werden Konten gestohlen?",
      content: "Einige Personen sammeln Informationen über das Opfer wie: Gemeinschaften, an denen sie teilgenommen haben, verwendeter Gerätetyp (aus Screenshots), Schreibstil oder persönliche Informationen aus Beiträgen, Kontolink oder E-Mail, falls verfügbar. Dann kontaktieren sie das Hilfe-Center und stellen diese Daten zur Verfügung, um den Support davon zu überzeugen, dass sie die Kontoinhaber sind."
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
      }
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
      content: "Die Sicherung Ihres Kontos in sozialen Anwendungen ist keine Option, sondern eine Notwendigkeit. Mit diesen Schritten können Sie Ihr Konto wiederherstellen, wenn es gehackt wurde, und es vor zukünftigen Versuchen schützen. Wenn Sie diesen Beitrag hilfreich fanden, zögern Sie nicht, ihn mit anderen zu teilen."
    },
    languageSelector: "Sprache Auswählen"
  }
};

export const getTranslation = (lang: Language): BlogTranslation => {
  return translations[lang] || translations.en;
};