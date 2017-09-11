import {Menu} from '../model/menu.model';

export let menuList: Menu[] = [
  new Menu(41, 0, 'عمليات پيش از پيشنهاد', 'fa-retweet'),
  new Menu(411, 41, 'عمليات پيش از پيشنهاد', 'fa-check'),
  new Menu(4111, 411, 'درخواست ', 'fa-check'),
  new Menu(41111, 4111, 'درخواست ذينفع واحد', 'fa-check'),
  new Menu(41112, 4111, 'درخواست  شماره سپام ضمانتنامه', 'fa-check'),
  new Menu(411121, 41112, 'درخواست مجدد شماره سپام ضمانتنامه ', 'fa-check'),
  new Menu(411122, 41112, 'در خواست شماره سپام ضمانتنامه بنگاه هاي کوچک و متوسط ', 'fa-check'),
  new Menu(411123, 41112, 'استعلام ضمانت نامه پرداخت شده و بلاتکليف در شبکه بانکي کشور', 'fa-check'),
  new Menu(41113, 4111, 'درخواست اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(41114, 4111, 'درخواست معدل حساب', 'fa-check'),
  new Menu(41115, 4111, 'درخواست ثبت تسهيلات طرح جام زرين 2', 'fa-check'),
  new Menu(41116, 4111, 'ثبت درخواست تسهيلات/تعهدات', 'fa-check'),
  new Menu(41117, 4111, 'ارسال مجدد پيام سپام', 'fa-check'),
  new Menu(4112, 411, 'اطلاعات اعتباري', 'fa-check'),
  new Menu(4113, 411, 'ارزيابي وثايق', 'fa-check'),
  new Menu(4114, 411, 'اهليت سنجي و اعتبارسنجي', 'fa-check'),
  new Menu(41141, 4114, 'بخش بازرگاني', 'fa-check'),
  new Menu(41142, 4114, 'بخش صنعت', 'fa-check'),
  new Menu(4115, 411, 'اطلاعات کارشناسي', 'fa-check'),
  new Menu(412, 41, 'گروه قرض الحسنه', 'fa-check'),
  new Menu(4121, 412, 'قرض الحسنه', 'fa-check'),
  new Menu(413, 41, 'گروه مشارکت', 'fa-check'),
  new Menu(4131, 413, 'مشاركت مدني', 'fa-check'),
  new Menu(4132, 413, 'مضاربه', 'fa-check'),
  new Menu(4133, 413, 'مشاركت مدني دوران سازندگي،بهره برداري،تسويه', 'fa-check'),
  new Menu(4134, 413, 'تسهيلات ساعتي', 'fa-check'),
  new Menu(4135, 413, 'مشارکت مدني ويژه', 'fa-check'),
  new Menu(4136, 413, 'مشارکت مدني اعتبارات اسنادي وارداتي', 'fa-check'),
  new Menu(414, 41, 'گروه مبادلات', 'fa-check'),
  new Menu(4141, 414, 'فروش اقساطي', 'fa-check'),
  new Menu(4142, 414, 'اجاره به شرط تمليك', 'fa-check'),
  new Menu(4143, 414, 'سلف', 'fa-check'),
  new Menu(4144, 414, 'خريد دين', 'fa-check'),
  new Menu(4145, 414, 'اعتبار در حساب جاري', 'fa-check'),
  new Menu(4146, 414, 'خريد دين ارزي', 'fa-check'),
  new Menu(4147, 414, 'مرابحه', 'fa-check'),
  new Menu(415, 41, 'گروه تعهدات', 'fa-check'),
  new Menu(4151, 415, 'جعاله', 'fa-check'),
  new Menu(4152, 415, 'ضمانت نامه', 'fa-check'),
  new Menu(4153, 415, 'اعتبار/ برات اسنادي ', 'fa-check'),
  new Menu(41531, 4153, 'اعتبار/ برات اسنادي ارزي', 'fa-check'),
  new Menu(41532, 4153, 'معرفي شماره درخواست اعتبار اسنادي وارداتي ', 'fa-check'),
  new Menu(41533, 4153, 'بروات اسنادي ارزي', 'fa-check'),
  new Menu(4154, 415, 'ضمانت نامه ارزي', 'fa-check'),
  new Menu(4155, 415, ' تضمين کارت', 'fa-check'),
  new Menu(4156, 415, ' اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(4157, 415, 'مشخصات ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(41571, 4157, 'مشخصات اصلي ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(41572, 4157, 'مشخصات طرفهاي درگير ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(41573, 4157, 'معرفي وثايق غيرمتمرکز مشتري', 'fa-check'),
  new Menu(41574, 4157, 'مشخصات وثايق تخصيص داده شده ', 'fa-check'),
  new Menu(41575, 4157, 'مشخصات کارمزد دريافتي و مانده بدهکاران', 'fa-check'),
  new Menu(41576, 4157, 'حد و سقف ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(41577, 4157, 'مشخصات ضمانتنامه هاي استمهالي', 'fa-check'),
  new Menu(41578, 4157, 'اطلاعات مصوبه تخفيف کارمزد ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(41579, 4157, 'گزارشات انتقال ضمانتنامه هاي غير متمرکز', 'fa-check'),
  new Menu(415791, 41579, 'گزارش وثايق ضمانتنامه هاي انتقالي از سامانه غير متمرکز', 'fa-check'),
  new Menu(415792, 41579, 'صورت ريز ضمانتنامه هاي انتقالي از سامانه غير متمرکز', 'fa-check'),
  new Menu(415793, 41579, 'گزارش وضعيت ضمانتنامه هاي انتقالي از سامانه غير متمرکز', 'fa-check'),
  new Menu(415794, 41579, 'گزارش ضمانتنامه هاي انتقالي داراي تخفيف کارمزد/ حد/ سقف', 'fa-check'),
  new Menu(415795, 41579, 'گزارش خلاصه وضعيت ضمانتنامه هاي انتقالي', 'fa-check'),
  new Menu(415796, 41579, 'گزارش وضعيت نهايي ضمانتنامه‌هاي انتقالي', 'fa-check'),
  new Menu(415797, 41579, 'گزارش اسناد حسابداري پايان عمليات ضمانتنامه هاي انتقالي', 'fa-check'),
  new Menu(4158, 415, 'پيشنهاد اعتباري صدور حواله ارزي از محل ثبت سفارش', 'fa-check'),
  new Menu(416, 41, 'حد و سقف ', 'fa-check'),
  new Menu(4161, 416, 'حد و سقف تسهيلات', 'fa-check'),
  new Menu(4162, 416, 'حد و سقف ضمانت نامه ريالي', 'fa-check'),
  new Menu(4163, 416, 'حد و سقف اعتبارات اسنادي داخلي', 'fa-check'),
  new Menu(4164, 416, ' حد و سقف اعتبارات اسنادي خارجي', 'fa-check'),
  new Menu(4165, 416, ' حد و سقف تسهيلات ساعتي', 'fa-check'),
  new Menu(4166, 416, 'حد و سقف ضمانت نامه ارزي', 'fa-check'),
  new Menu(417, 41, 'كارت هاي اعتباري', 'fa-check'),
  new Menu(4171, 417, ' كارت خريد اعتباري', 'fa-check'),
  new Menu(4172, 417, 'كارت اعتباري ملت', 'fa-check'),
  new Menu(41721, 4172, 'کارت اعتباري طرح اساتيد', 'fa-check'),
  new Menu(41722, 4172, 'کارت اعتباري فروش اقساطي', 'fa-check'),
  new Menu(41723, 4172, 'کارت  اعتباري مرابحه', 'fa-check'),
  new Menu(4173, 417, 'تضمين كارت', 'fa-check'),
  new Menu(4174, 417, 'تسهيلات كارت سوخت', 'fa-check'),
  new Menu(4175, 417, 'صدور کارت اعتباري گروهي', 'fa-check'),
  new Menu(418, 41, 'تنظيم ساير پيشنهادها(تمديد/متمم/تبديل/تقسيط)', 'fa-check'),
  new Menu(4181, 418, 'پيشنهاد تمديد مشارکت مدني/ مضاربه ', 'fa-check'),
  new Menu(4182, 418, 'پيشنهاد متمم', 'fa-check'),
  new Menu(41821, 4182, 'پيشنهاد متمم مشارکت مدني', 'fa-check'),
  new Menu(41822, 4182, 'پيشنهاد متمم اعتبارات اسنادي خارجي', 'fa-check'),
  new Menu(41823, 4182, 'تنظيم پيشنهاد متمم اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(41824, 4182, 'پيشنهاد تمديد و متمم اعتبار در حساب جاري', 'fa-check'),
  new Menu(41825, 4182, 'تنظيم پيشنهاد متمم مشارکت مدني اعتبارات اسنادي وارداتي', 'fa-check'),
  new Menu(4183, 418, 'پيشنهاد تبديل', 'fa-check'),
  new Menu(41831, 4183, 'پيشنهاد تبديل مشاركت مدني به فروش اقساطي', 'fa-check'),
  new Menu(41832, 4183, 'پيشنهاد تبديل مشاركت مدني به مشاركت  مدني دوران سازندگي،بهره برداري،تسويه', 'fa-check'),
  new Menu(41833, 4183, 'پيشنهاد فروش تدريجي', 'fa-check'),
  new Menu(4184, 418, 'پيشنهاد تقسيط مطالبات', 'fa-check'),
  new Menu(41841, 4184, 'پيشنهاد تقسيط بعد از سررسيد', 'fa-check'),
  new Menu(41842, 4184, 'پيشنهاد تقسيط ضمانتنامه', 'fa-check'),
  new Menu(41843, 4184, 'پيشنهاد تقسيط در سررسيد', 'fa-check'),
  new Menu(4185, 418, 'پيشنهاد تخفيف کارمزد مشتريان', 'fa-check'),
  new Menu(41851, 4185, 'پيشنهاد تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(419, 41, 'گزارش هاي درخواستها /پيشنهادها', 'fa-check'),
  new Menu(4191, 419, 'گزارش عمليات پيش از پيشنهاد', 'fa-check'),
  new Menu(41911, 4191, 'گزارش اهليت سنجي و اعتبار سنجي', 'fa-check'),
  new Menu(419111, 41911, 'گزارش عملکرد اهليت سنجي و اعتبار سنجي', 'fa-check'),
  new Menu(419112, 41911, 'گزارش مديريتي عملکرد اهليت سنجي و اعتبار سنجي', 'fa-check'),
  new Menu(419113, 41911, 'گزارش اهليت سنجي و اعتبار سنجي بخش بازرگاني', 'fa-check'),
  new Menu(419114, 41911, 'گزارش اهليت سنجي و اعتبار سنجي بخش صنعت', 'fa-check'),
  new Menu(41912, 4191, 'گزارش ثبت درخواست تسهيلات/تعهدات ', 'fa-check'),
  new Menu(41913, 4191, 'گزارش معدل حساب', 'fa-check'),
  new Menu(419131, 41913, 'گزارش تسهيلات بر اساس کنترل معدل حساب', 'fa-check'),
  new Menu(419132, 41913, 'گزارش معدل مشتريان و حسابهاي اخذ شده يک مشتري', 'fa-check'),
  new Menu(4192, 419, 'گزارش وضعيت پيشنهاد/تسهيلات مشتري', 'fa-check'),
  new Menu(4193, 419, 'گزارش تاريخچه گردش درخواست ها/ پروفروم ها', 'fa-check'),
  new Menu(4194, 419, 'گزارش تاريخچه گردش پيشنهاد', 'fa-check'),
  new Menu(4195, 419, 'چاپ مجدد پيشنهاد', 'fa-check'),
  new Menu(4196, 419, 'گزارش پيشنهادات تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(4197, 419, 'گزارش تضمين کارت', 'fa-check'),
  new Menu(4198, 419, 'گزارش مشتريان داراي تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(42, 0, 'تصويب پيشنهاد', 'fa-thumbs-up'),
  new Menu(421, 42, 'تصويب پيشنهاد', 'fa-check'),
  new Menu(422, 42, 'تصويب پيشنهاد حد و سقف ', 'fa-check'),
  new Menu(423, 42, 'مصوبات خاص/تفاهم نامه /وجوه اداره شده/تبصره تکليفي', 'fa-check'),
  new Menu(4231, 423, 'صدور مصوبات خاص', 'fa-check'),
  new Menu(4232, 423, 'تخصيص /ابلاغ مصوبات خاص', 'fa-check'),
  new Menu(4233, 423, 'صدور تفاهم نامه', 'fa-check'),
  new Menu(4234, 423, 'تخصيص /ابلاغ تفاهم نامه', 'fa-check'),
  new Menu(4235, 423, 'صدور وجوه اداره شده', 'fa-check'),
  new Menu(4236, 423, 'تخصيص/ابلاغ وجوه اداره شده', 'fa-check'),
  new Menu(4237, 423, 'صدور مصوبات تبصره اي تکليفي', 'fa-check'),
  new Menu(4238, 423, 'تخصيص /ابلاغ تبصره اي/ تکليفي', 'fa-check'),
  new Menu(427, 42, 'ابلاغ/ تغيير/ تمديد/ تبديل / تقسيط ', 'fa-check'),
  new Menu(4271, 427, 'ابلاغ/تغيير/تمديد اعتبار/تغيير ارکان مصوبات', 'fa-check'),
  new Menu(4272, 427, 'ابلاغ/تغيير/مصوبات حد و سقف', 'fa-check'),
  new Menu(4273, 427, 'ابلاغ /تغيير مصوبات تمديد قرارداد', 'fa-check'),
  new Menu(4274, 427, 'ابلاغ/تغيير/مصوبات متمم قرارداد', 'fa-check'),
  new Menu(4275, 427, 'ابلاغ / تغيير / تبديل مصوبات مشارکت مدني به فروش اقساطي', 'fa-check'),
  new Menu(4276, 427, 'ابلاغ / تغيير / تبديل مصوبات مشارکت مدني به مشارکت دوران سازندگي ، بهره برداري ، تسويه  ', 'fa-check'),
  new Menu(4277, 427, 'ابلاغ /تغيير/ابطال مصوبه تقسيط ', 'fa-check'),
  new Menu(4278, 427, 'کاهش وثايق گروه نقد /تغيير قرارداد لازم الاجرا', 'fa-check'),
  new Menu(4279, 427, 'ابلاغ / تمديد مصوبات تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(428, 42, 'تصويب سايرپيشنهادها ( تمديد / متمم /تبديل /تقسيط) ', 'fa-check'),
  new Menu(4281, 428, 'تصويب پيشنهاد تمديد', 'fa-check'),
  new Menu(4282, 428, 'تصويب پيشنهاد متمم ', 'fa-check'),
  new Menu(4283, 428, 'تصويب پيشنهاد تبديل مشاركت مدني به فروش اقساطي', 'fa-check'),
  new Menu(4284, 428, 'تصويب پيشنهاد تبديل مشارکت مدني به مشارکت مدني دوران سازندگي ، بهره برداري ، تسويه ', 'fa-check'),
  new Menu(4285, 428, 'تصويب پيشنهاد تقسيط', 'fa-check'),
  new Menu(4286, 428, 'تصويب پيشنهاد تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(4287, 428, 'مصوب متمم مشارکت مدني اعتبارات اسنادي وارداتي', 'fa-check'),
  new Menu(429, 42, 'گزارش هاي  مصوبات', 'fa-check'),
  new Menu(4291, 429, 'گزارش مصوبات صادره', 'fa-check'),
  new Menu(4292, 429, 'گزارش اطلاعات يك مصوبه', 'fa-check'),
  new Menu(4293, 429, 'گزارش مصوبات اجرانشده', 'fa-check'),
  new Menu(4294, 429, 'گزارش مصوبات خاص صادره', 'fa-check'),
  new Menu(4295, 429, 'گزارش اطلاعات يک مصوبه ستادي', 'fa-check'),
  new Menu(4296, 429, 'گزارش وضعيت مصوبات ستادي', 'fa-check'),
  new Menu(4297, 429, 'گزارش حدود اختيارات يک واحد سازماني ', 'fa-check'),
  new Menu(4298, 429, 'گزارش پيام هاي سپام ضمانتنامه ريالي ', 'fa-check'),
  new Menu(42981, 4298, 'گزارش وضعيت پيامهاي ارسالي ضمانتنامه ها در سامانه سپام ', 'fa-check'),
  new Menu(42982, 4298, 'گزارش اخذ شماره سپام ضمانتنامه هاي بنگاه هاي کوچک و متوسط', 'fa-check'),
  new Menu(42983, 4298, 'گزارش استعلام ضمانت نامه هاي پرداخت شده و بلا تکليف در شبکه بانکي', 'fa-check'),
  new Menu(43, 0, 'عمليات پيش از قرارداد', ' fa-flask'),
  new Menu(431, 43, 'وثايق', 'fa-check'),
  new Menu(4311, 431, 'معرفي وثايق/اموال', 'fa-check'),
  new Menu(4312, 431, 'تخصيص وثايق', 'fa-check'),
  new Menu(4313, 431, 'مجوز استفاده از وثايق', 'fa-check'),
  new Menu(4314, 431, 'تغيير وثيقه تسهيلات، تعهدات/نرخ تخفيف کارمزد ضمانتنامه', 'fa-check'),
  new Menu(4315, 431, 'معرفي اسناد خريد دين', 'fa-check'),
  new Menu(4316, 431, 'مشخصات تضمين نامه ماده 62', 'fa-check'),
  new Menu(432, 43, 'مشخصات اشخاص مرتبط قراردادها', 'fa-check'),
  new Menu(4321, 432, 'مشخصات مشتري/ضامن/ذينفع', 'fa-check'),
  new Menu(4322, 432, 'مشخصات ذينفعان ضمانتنامه', 'fa-check'),
  new Menu(4323, 432, 'اطلاعات ذينفعان اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(433, 43, 'بيمه', 'fa-check'),
  new Menu(4331, 433, 'دريافت حق بيمه وثايق/اموال', 'fa-check'),
  new Menu(4332, 433, 'دريافت حق بيمه سرمايه', 'fa-check'),
  new Menu(4333, 433, 'تمديد بيمه وثايق/اموال', 'fa-check'),
  new Menu(4334, 433, 'تمديد بيمه سرمايه', 'fa-check'),
  new Menu(4335, 433, 'فسخ/اعلام خسارت/برگشت بيمه وثايق اموال', 'fa-check'),
  new Menu(4336, 433, 'فسخ/اعلام خسارت/برگشت بيمه سرمايه', 'fa-check'),
  new Menu(4337, 433, 'دريافت / تمديد بيمه', 'fa-check'),
  new Menu(4338, 433, 'برگشت / اعلام خسارت / فسخ بيمه', 'fa-check'),
  new Menu(4339, 433, 'کارتابل بيمه', 'fa-check'),
  new Menu(434, 43, ' پيش دريافت/سهم الشرکه/سپرده نقدي ', 'fa-check'),
  new Menu(4341, 434, 'سهم الشركه شريك', 'fa-check'),
  new Menu(4342, 434, 'پيش دريافت / سپرده نقدي', 'fa-check'),
  new Menu(4343, 434, 'دريافت سپرده نقدي ضمانتنامه ارزي ', 'fa-check'),
  new Menu(435, 43, 'پيش پرداخت به مشتريان', 'fa-check'),
  new Menu(436, 43, 'اخذ کارمزد کارشناسي', 'fa-check'),
  new Menu(439, 43, 'گزارش عمليات پيش از قرارداد', 'fa-check'),
  new Menu(4391, 439, 'گزارش وثايق', 'fa-check'),
  new Menu(43911, 4391, 'گزارش وثايق سامانه تسهيلات متمركز', 'fa-check'),
  new Menu(43912, 4391, 'گزارش وثايق مورد نياز مصوبه', 'fa-check'),
  new Menu(43913, 4391, 'گزارش وضعيت وثيقه', 'fa-check'),
  new Menu(43914, 4391, 'گزارش فهرست وثايق و تضمينات', 'fa-check'),
  new Menu(43915, 4391, 'گزارش تخصيص وثايق و تضمينات/اموال به قرارداد', 'fa-check'),
  new Menu(43916, 4391, 'گزارش تغيير وثايق تسهيلات/تعهدات', 'fa-check'),
  new Menu(439161, 43916, 'گزارش تغيير وثايق تسهيلات', 'fa-check'),
  new Menu(439162, 43916, 'گزارش تغيير وثايق / تخفيف کارمزد ضمانتنامه هاي صادره ', 'fa-check'),
  new Menu(43917, 4391, 'گزارش خلاصه وضعيت وثايق مشتريان', 'fa-check'),
  new Menu(43918, 4391, 'گزارش وثايق اوراق مشارکت و گواهي سپرده ', 'fa-check'),
  new Menu(43919, 4391, 'گزارش تخصيص وثايق تفاهم نامه ', 'fa-check'),
  new Menu(4392, 439, 'گزارش اموال اجاره بشرط تمليك', 'fa-check'),
  new Menu(43921, 4392, 'گزارش تسهيلات اجاره به شرط تمليك با پوشش وثيقه اضافه', 'fa-check'),
  new Menu(43922, 4392, 'گزارش اموال اجاره به شرط تمليك', 'fa-check'),
  new Menu(4393, 439, 'گزارش خريد دين', 'fa-check'),
  new Menu(43931, 4393, 'گزارش استعلام خريد دين', 'fa-check'),
  new Menu(43932, 4393, 'گزارش اسناد خريد دين / اعتبار در حسابجاري ', 'fa-check'),
  new Menu(43933, 4393, 'گزارش استعلام اسناد اعتبار در حسابجاري ', 'fa-check'),
  new Menu(43934, 4393, 'گزارش ريز اطلاعات مبالغ اعطايي اعتبار در حساب جاري', 'fa-check'),
  new Menu(43935, 4393, 'گزارش تفكيك مبالغ وصولي چك هاي واگذاري بابت اعتبار در حساب جاري', 'fa-check'),
  new Menu(43936, 4393, 'گزارش مراحل وصول بدهي چك اعتبار در حساب جاري', 'fa-check'),
  new Menu(43937, 4393, 'وضعيت بدهي تسهيلات خريد دين خودرو', 'fa-check'),
  new Menu(4394, 439, 'گزارش بيمه', 'fa-check'),
  new Menu(43941, 4394, 'گزارش ليست مرهونات بيمه شده', 'fa-check'),
  new Menu(43942, 4394, 'گزارش بيمه وثايق / اموال و سرمايه و عمر مانده بدهي', 'fa-check'),
  new Menu(43943, 4394, 'گزارش بيمه نامه هاي منقضي شده', 'fa-check'),
  new Menu(43944, 4394, 'گزارش بيمه نامه هاي تسهيلات/ضمانتنامه', 'fa-check'),
  new Menu(43945, 4394, 'گزارش بيمه نامه هاي سررسيد شده - سه روزه', 'fa-check'),
  new Menu(43946, 4394, 'گزارش بيمه نامه هاي اعلام خسارت/ فسخ شده', 'fa-check'),
  new Menu(43947, 4394, 'گزارش بيمه نامه هاي تمديد شده', 'fa-check'),
  new Menu(43948, 4394, 'گزارش بيمه نامه هاي تمديد شده از سر فصل بدهکاران', 'fa-check'),
  new Menu(4395, 439, 'گزارش اشخاص مرتبط قراردادها', 'fa-check'),
  new Menu(43951, 4395, 'گزارش مشخصات تسهيلات گيرنده/ضامن/فروشنده', 'fa-check'),
  new Menu(43952, 4395, 'گزارش ذينفعان ضمانتنامه ريالي', 'fa-check'),
  new Menu(43953, 4395, 'گزارش حسابهاي تسهيلات گيرندگان ', 'fa-check'),
  new Menu(4396, 439, 'گزارش پيش دريافت/سهم الشرکه/سپرده نقدي ', 'fa-check'),
  new Menu(4397, 439, 'گزارش پيش پرداخت', 'fa-check'),
  new Menu(4398, 439, 'گزارش کارمزد کارشناسي', 'fa-check'),
  new Menu(43981, 4398, 'گزارش دريافت / برگشت کارمزد کارشناسي', 'fa-check'),
  new Menu(43982, 4398, 'گزارش پارامترهاي کارمزد کارشناسي', 'fa-check'),
  new Menu(44, 0, 'ثبت قرارداد / اعطا / گشايش', 'fa-share-square-o'),
  new Menu(441, 44, 'ثبت قرارداد', 'fa-check'),
  new Menu(442, 44, 'چاپ قرارداد/نمونه', 'fa-check'),
  new Menu(443, 44, 'اعطاي تسهيلات/صدور ضمانتنامه', 'fa-check'),
  new Menu(444, 44, 'چاپ كارت', 'fa-check'),
  new Menu(445, 44, 'تسهيلات عمره مفرده', 'fa-check'),
  new Menu(446, 44, 'اعطاي گروهي', 'fa-check'),
  new Menu(447, 44, ' اعتبار اسنادي داخلي ', 'fa-check'),
  new Menu(4471, 447, 'گشايش اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(4472, 447, 'اصلاح اعتبار اسنادي داخلي ', 'fa-check'),
  new Menu(448, 44, 'ثبت ساير قراردادها(تمديد/تقسيط/متمم)', 'fa-check'),
  new Menu(4481, 448, 'ثبت قرارداد تمديد', 'fa-check'),
  new Menu(44811, 4481, 'ثبت قرارداد تمديد تسهيلات ريالي', 'fa-check'),
  new Menu(44812, 4481, 'ثبت قرارداد تمديد کارت اعتباري', 'fa-check'),
  new Menu(4482, 448, 'ثبت قرارداد متمم', 'fa-check'),
  new Menu(4483, 448, 'تمديد بدهي تسهيلات بدهكاران آسيب ديده خشكسالي', 'fa-check'),
  new Menu(4484, 448, 'تمديد ضمانتنامه', 'fa-check'),
  new Menu(4485, 448, 'تقليل / کاهش ضمانتنامه', 'fa-check'),
  new Menu(4486, 448, 'ثبت قرارداد تقسيط', 'fa-check'),
  new Menu(4487, 448, 'افزايش مبلغ ضمانتنامه', 'fa-check'),
  new Menu(4488, 448, 'تغيير نام ذينفع ضمانتنامه', 'fa-check'),
  new Menu(449, 44, 'گزارش هاي قراردادها/اعطا', 'fa-check'),
  new Menu(4491, 449, 'اطلاعات كلي قراردادها', 'fa-check'),
  new Menu(44911, 4491, 'گزارش اطلاعات يك قرارداد', 'fa-check'),
  new Menu(44912, 4491, 'گزارش وضعيت قرارداد', 'fa-check'),
  new Menu(44913, 4491, ' گزارش شرايط تسهيلات', 'fa-check'),
  new Menu(44914, 4491, 'گزارش ضمانتنامه ها', 'fa-check'),
  new Menu(449141, 44914, 'گزارش ضمانتنامه هاي صادر شده', 'fa-check'),
  new Menu(449142, 44914, 'گزارش ضمانتنامه هاي موجود', 'fa-check'),
  new Menu(449143, 44914, 'گزارش ضمانتنامه هاي داراي تخفيف کارمزد', 'fa-check'),
  new Menu(449144, 44914, 'گزارش تغيير ذينفع ضمانتنامه', 'fa-check'),
  new Menu(449145, 44914, 'گزارش ريز ضمانتنامه هاي مشروط صادره', 'fa-check'),
  new Menu(44915, 4491, 'گزارش اعتبارات اسنادي داخلي', 'fa-check'),
  new Menu(449151, 44915, 'گزارش اعتبارات اسنادي گشايش شده', 'fa-check'),
  new Menu(449152, 44915, 'گزارش اعتبارات اسنادي موجود', 'fa-check'),
  new Menu(449153, 44915, 'گزارش اعتبارات اسنادي داراي تخفيف کارمزد', 'fa-check'),
  new Menu(449154, 44915, ' گزارش کارمزد هاي دريافتي اعتبارات اسنادي داخلي', 'fa-check'),
  new Menu(449155, 44915, 'گزارش اسناد رسيده', 'fa-check'),
  new Menu(449156, 44915, ' گزارش سررسيد پرداخت هاي اعتباراسنادي داخلي مدت دار', 'fa-check'),
  new Menu(449157, 44915, 'گزارش پرداخت وجه اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(449158, 44915, 'گزارش پيام هاي ارسالي اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(44916, 4491, 'گزارش تسهيلات ساعتي', 'fa-check'),
  new Menu(44917, 4491, 'گزارش وضعيت قراردادهاي اعتباري کارت سوخت', 'fa-check'),
  new Menu(4492, 449, 'عملكرد قرارداد', 'fa-check'),
  new Menu(44921, 4492, 'گزارش ريز عملكرد قرارداد', 'fa-check'),
  new Menu(44922, 4492, 'گزارش كارت خريد اعتباري', 'fa-check'),
  new Menu(4493, 449, 'بيمه قراردادها', 'fa-check'),
  new Menu(44931, 4493, 'گزارش قراردادهاي فاقد بيمه سرمايه', 'fa-check'),
  new Menu(44932, 4493, 'گزارش بيمه نامه هاي يك قرارداد', 'fa-check'),
  new Menu(4494, 449, 'گزارش هاي ساير قراردادها( حد/تمديد/تقليل)', 'fa-check'),
  new Menu(44941, 4494, 'گزارش قراردادها از محل مصوبات غير موردي', 'fa-check'),
  new Menu(44942, 4494, 'گزارش قراردادهاي تمديد شده', 'fa-check'),
  new Menu(449421, 44942, 'گزارش تمديد قرارداد تسهيلات', 'fa-check'),
  new Menu(449422, 44942, 'گزارش تمديد کارت اعتباري', 'fa-check'),
  new Menu(44943, 4494, 'گزارش ضمانتنامه هاي تمديد شده', 'fa-check'),
  new Menu(44944, 4494, 'گزارش ضمانتنامه هاي تقليل يافته', 'fa-check'),
  new Menu(44945, 4494, ' گزارش تمديد خشكسالي', 'fa-check'),
  new Menu(44946, 4494, 'گزارش عملکرد تمديد بدهي تسهيلات بدهکاران آسيب ديده خشکسالي ', 'fa-check'),
  new Menu(44947, 4494, 'گزارش تقسيط قراردادها', 'fa-check'),
  new Menu(449471, 44947, 'گزارش قراردادهاي تقسيط شده', 'fa-check'),
  new Menu(449472, 44947, 'گزارش تاريخچه تقسيط قرارداد', 'fa-check'),
  new Menu(44948, 4494, 'گزارش ضمانتنامه هاي افزايش يافته', 'fa-check'),
  new Menu(44949, 4494, 'گزارش نحوه محاسبه کارمزد ضمانتنامه ريالي', 'fa-check'),
  new Menu(4495, 449, 'گزارش اعطا', 'fa-check'),
  new Menu(44951, 4495, 'گزارش بررسي مراحل اعطاي مشاركت مدني', 'fa-check'),
  new Menu(44952, 4495, 'گزارش تسهيلات اعطايي كارت سوخت', 'fa-check'),
  new Menu(44953, 4495, 'گزارش اطلاعات باز پرداخت قراردادهاي از محل مصوبات ستادي ', 'fa-check'),
  new Menu(44954, 4495, 'گزارش ريز مشخصات متمم مشارکت مدني', 'fa-check'),
  new Menu(44955, 4495, 'گزارش تمديد و متمم اعتبار در حساب جاري', 'fa-check'),
  new Menu(4496, 449, ' گزارش تسهيلات عمره مفرده', 'fa-check'),
  new Menu(45, 0, 'بازپرداخت / برگشت ', 'fa-dollar'),
  new Menu(451, 45, 'بازپرداخت', 'fa-check'),
  new Menu(4511, 451, ' باز پرداخت بدهي / وصول اقساط', 'fa-check'),
  new Menu(4512, 451, 'بازپرداخت مكانيزه', 'fa-check'),
  new Menu(4513, 451, 'بازپرداخت گروهي', 'fa-check'),
  new Menu(4514, 451, 'تحويل كالاي سلف', 'fa-check'),
  new Menu(4515, 451, 'شارژ تضمين کارت', 'fa-check'),
  new Menu(452, 45, 'برگشت سود/کارمزد/جريمه/آبونمان', 'fa-check'),
  new Menu(4521, 452, 'برگشت بازپرداخت', 'fa-check'),
  new Menu(45211, 4521, 'برگشت موردي بازپرداخت', 'fa-check'),
  new Menu(45212, 4521, 'برگشت گروهي بازپرداخت', 'fa-check'),
  new Menu(4522, 452, 'برگشت سود', 'fa-check'),
  new Menu(4523, 452, 'برگشت جريمه تاخير', 'fa-check'),
  new Menu(45231, 4523, 'برگشت جريمه تاخير تسهيلات / ضمانتنامه', 'fa-check'),
  new Menu(45232, 4523, 'برگشت جريمه تاخير خريددين/اعتباردرحساب‌جاري', 'fa-check'),
  new Menu(45233, 4523, 'برگشت جريمه مستتر', 'fa-check'),
  new Menu(4524, 452, 'برگشت كارمزد ضمانتنامه', 'fa-check'),
  new Menu(4525, 452, 'برگشت مطالبات مشكوك الوصول به طبقه جاري', 'fa-check'),
  new Menu(4526, 452, 'برگشت از طبقه سررسيد گذشته به طبقه جاري', 'fa-check'),
  new Menu(4527, 452, 'برگشت کارمزد', 'fa-check'),
  new Menu(4528, 452, 'برگشت آبونمان', 'fa-check'),
  new Menu(453, 45, ' ابطال موقت اعتبار در حساب جاري', 'fa-check'),
  new Menu(454, 45, 'تقسيط بدهي صورتحساب كارت اعتباري', 'fa-check'),
  new Menu(455, 45, 'انقضاء اعتبار کارت سوخت', 'fa-check'),
  new Menu(456, 45, 'پرداخت وجه اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(457, 45, 'وصول بدهي اعتبار  اسنادي داخلي', 'fa-check'),
  new Menu(459, 45, 'گزارش هاي بازپرداخت،برگشت،ابطال', 'fa-check'),
  new Menu(4591, 459, 'گزارش تسهيلات مضاربه پرداخت شده تسويه نشده', 'fa-check'),
  new Menu(4592, 459, 'گزارش بازپرداخت/ برگشت بازپرداخت', 'fa-check'),
  new Menu(45921, 4592, 'گزارش ريز بازپرداختها', 'fa-check'),
  new Menu(45922, 4592, 'گزارشات بازپرداخت از طريق درگاههاي غير حضوري ', 'fa-check'),
  new Menu(45923, 4592, 'گزارش بازپرداخت گروهي', 'fa-check'),
  new Menu(45924, 4592, 'گزارش برگشت بازپرداخت ', 'fa-check'),
  new Menu(459241, 45924, 'گزارش برگشت موردي بازپرداخت', 'fa-check'),
  new Menu(459242, 45924, 'گزارش کليِ برگشت گروهي بازپرداخت ', 'fa-check'),
  new Menu(459243, 45924, 'گزارش ريز برگشت گروهي بازپرداخت', 'fa-check'),
  new Menu(459244, 45924, 'گزارش دوره اي برگشت گروهي بازپرداخت', 'fa-check'),
  new Menu(45925, 4592, 'گزارش بازپرداخت مکانيزه / منظم', 'fa-check'),
  new Menu(459251, 45925, 'گزارش کلي قراردادهاي داراي بازپرداخت مکانيزه / منظم', 'fa-check'),
  new Menu(459252, 45925, 'گزارش تاريخچه تعريف دستور بازپرداخت مکانيزه / منظم', 'fa-check'),
  new Menu(459253, 45925, 'گزارش وضعيت بازپرداخت مکانيزه / منظم', 'fa-check'),
  new Menu(459254, 45925, 'گزارش برداشت مکانيزه بدهي هاي مرتبط با ضمانتنامه هاي ارزي و ريالي', 'fa-check'),
  new Menu(4593, 459, 'گزارش کارت اعتباري', 'fa-check'),
  new Menu(45931, 4593, 'گزارش صورتحساب كارت اعتباري', 'fa-check'),
  new Menu(45932, 4593, 'گزارش اقساط کارت اعتباري', 'fa-check'),
  new Menu(45933, 4593, 'گزارش خلاصه عملکرد کارت اعتباري', 'fa-check'),
  new Menu(45934, 4593, 'گزارش ريز  عملکرد کارت اعتباري', 'fa-check'),
  new Menu(45935, 4593, 'گزارش کارت اعتباري گروهي ', 'fa-check'),
  new Menu(45936, 4593, 'گزارش ريز تراکنش هاي تاپ کارت ', 'fa-check'),
  new Menu(459, 45, ' گزارش بازيابي اطلاعات قرارداد/کارت مجازي تسهيلات', 'fa-check'),
  new Menu(459, 45, 'گزارش اقساط', 'fa-check'),
  new Menu(4595, 459, 'گزارش اقساط تمديد خشكسالي/تقسيط مطالبات/ اقساط پلكاني / نا مساوي', 'fa-check'),
  new Menu(4595, 459, 'گزارش اقساط تقسيط در سررسيد ', 'fa-check'),
  new Menu(4595, 459, 'گزارش اقساط مشارکت مدني ويژه ', 'fa-check'),
  new Menu(4596, 459, 'گزارش كالاي معاملات سلف', 'fa-check'),
  new Menu(4597, 459, 'گزارش اقلام موجود در سرفصل وجوه دريافتي مضاربه', 'fa-check'),
  new Menu(46, 0, 'تسويه /ابطال/ انتقال', 'fa-exchange'),
  new Menu(461, 46, 'ضبط / ابطال / ارائه لاشه', 'fa-check'),
  new Menu(4611, 461, 'ضبط/پرداخت ضمانتنامه', 'fa-check'),
  new Menu(4612, 461, 'ابطال ضمانتنامه', 'fa-check'),
  new Menu(4613, 461, 'ارائه لاشه ضمانتنامه', 'fa-check'),
  new Menu(4614, 461, 'ابطال تضمين کارت', 'fa-check'),
  new Menu(4615, 461, 'ابطال قرارداد تقسيط بعد از سررسيد', 'fa-check'),
  new Menu(4616, 461, 'ابطال قرارداد تقسيط در سررسيد', 'fa-check'),
  new Menu(4617, 461, 'ابطال اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(462, 46, 'انتقال موردي', 'fa-check'),
  new Menu(463, 46, ' هزينه هاي قانوني', 'fa-check'),
  new Menu(4631, 463, 'ثبت دستور هزينه قانوني', 'fa-check'),
  new Menu(4632, 463, 'تاييد دستور هزينه قانوني', 'fa-check'),
  new Menu(4633, 463, 'برداشت هزينه قانوني قرارداد تسويه شده از حساب مشتري', 'fa-check'),
  new Menu(4634, 463, 'انتقال هزينه قانوني قرارداد تسويه شده به سرفصل هزينه هاي بانک', 'fa-check'),
  new Menu(4635, 463, 'ثبت هزينه هاي قانوني قديم', 'fa-check'),
  new Menu(464, 46, 'تسويه', 'fa-check'),
  new Menu(4641, 464, 'تسويه تسهيلات', 'fa-check'),
  new Menu(4642, 464, 'تسويه اقلام باز بستانکاران وصولي هاي خريد دين', 'fa-check'),
  new Menu(4643, 464, 'تسويه سرفصل بدهکاران قرض الحسنه', 'fa-check'),
  new Menu(4644, 464, 'صدور مجوز برگشت تسويه', 'fa-check'),
  new Menu(4645, 464, 'تسويه مطالبات از دولت - انتقالي از غير متمركز ', 'fa-check'),
  new Menu(4646, 464, 'تسويه حواله ساتنا برگشتي ', 'fa-check'),
  new Menu(465, 46, 'صدور و ثبت هزينه اخطاريه', 'fa-check'),
  new Menu(4651, 465, 'برگشت هزينه پستي ارسال اخطاريه', 'fa-check'),
  new Menu(4652, 465, 'صدور اخطاريه تسهيلات', 'fa-check'),
  new Menu(4653, 465, 'صدور اخطاريه ضمانتنامه', 'fa-check'),
  new Menu(4654, 465, 'برداشت هزينه پستي ارسال اخطاريه ', 'fa-check'),
  new Menu(466, 46, 'انتقال به طبقات', 'fa-check'),
  new Menu(4661, 466, 'انتقال به مطالبات  سر رسيد  گذشته / معوق / مشكوك الوصول', 'fa-check'),
  new Menu(4662, 466, 'انتقال به مطالبات مشکوک الوصول ضمانتنامه', 'fa-check'),
  new Menu(4663, 466, 'انتقال/برگشت به مطالبات از دولت', 'fa-check'),
  new Menu(46631, 4663, 'درخواست انتقال به مطالبات از دولت', 'fa-check'),
  new Menu(46632, 4663, 'درخواست برگشت از مطالبات از دولت', 'fa-check'),
  new Menu(4665, 466, 'انتقال به سر رسيد  گذشته', 'fa-check'),
  new Menu(4667, 466, 'تغيير اطلاعات اقساط قراردادها', 'fa-check'),
  new Menu(467, 46, 'رفع مسدودي کارت اعتباري', 'fa-check'),
  new Menu(468, 46, 'مشخصات اسناد رسيده اعتبار اسنادي داخلي', 'fa-check'),
  new Menu(469, 46, 'گزارش تسويه و انتقال', 'fa-check'),
  new Menu(469, 46, 'گزارش مطالبات', 'fa-check'),
  new Menu(46911, 4691, 'گزارش ريز مطالبات ', 'fa-check'),
  new Menu(46914, 4691, 'گزارش تعديل سود تسهيلات منتقل شده به مطالبات مشكوك الوصول', 'fa-check'),
  new Menu(46916, 4691, 'گزارش ايجاد مطالبات در يك دوره معين', 'fa-check'),
  new Menu(46917, 4691, 'گزارش ضمانتنامه هاي ضبط شده', 'fa-check'),
  new Menu(46918, 4691, 'گزارش مانده بدهكاران بابت تمديد/ضبط ضمانتنامه', 'fa-check'),
  new Menu(4692, 469, 'گزارش قراردادهاي  سر رسيد شده', 'fa-check'),
  new Menu(46921, 4692, 'گزارش سر رسيد تسهيلات/ ضمانتنامه در يک تاريخ معين', 'fa-check'),
  new Menu(46922, 4692, 'گزارش ضمانتنامه هاي  سر رسيد شده', 'fa-check'),
  new Menu(46923, 4692, 'گزارش ضمانتنامه هاي گمرکي  سر رسيد شده', 'fa-check'),
  new Menu(46924, 4692, 'گزارش  سر رسيد مصوبات ستادي', 'fa-check'),
  new Menu(46925, 4692, 'گزارش ضمانتنامه هاي در شرف سررسيد', 'fa-check'),
  new Menu(46926, 4692, 'تاريخچه مشاهده گزارشات سررسيد ضمانتنامه ها  ', 'fa-check'),
  new Menu(4693, 469, 'گزارش وصول مطالبات', 'fa-check'),
  new Menu(46931, 4693, 'گزارش وصول مطالبات در يک دوره معين', 'fa-check'),
  new Menu(4694, 469, 'گزارش اقلام بدهي تعهدي قراردادها', 'fa-check'),
  new Menu(4695, 469, 'گزارش برگشت سود/جريمه / کارمزد تسهيلات و ضمانتنامه/ آبونمان', 'fa-check'),
  new Menu(46951, 4695, 'گزارش برگشت سود/جريمه/کارمزد/آبونمان', 'fa-check'),
  new Menu(46952, 4695, 'گزارش برگشت کارمزد ضمانتنامه', 'fa-check'),
  new Menu(4696, 469, 'گزارش ابطال / تسويه', 'fa-check'),
  new Menu(46961, 4696, 'گزارش تسهيلات تسويه شده', 'fa-check'),
  new Menu(46962, 4696, 'گزارش ضمانتنامه هاي ابطال شده', 'fa-check'),
  new Menu(46963, 4696, 'گزارش برگشت تسويه هاي داراي مجوز', 'fa-check'),
  new Menu(46964, 4696, 'گزارش حواله ساتنا بابت ضمانتنامه ضبط شده ', 'fa-check'),
  new Menu(4697, 469, 'چاپ اخطاريه', 'fa-check'),
  new Menu(4698, 469, 'گزارش وضعيت اقلام باز بستانکاران خريد دين', 'fa-check'),
  new Menu(4699, 469, 'گزارشات هزينه قانوني', 'fa-check'),
  new Menu(46991, 4699, 'گزارش تاريخچه دستور هزينه قانوني', 'fa-check'),
  new Menu(46992, 4699, 'گزارش دستور هزينه قانوني ', 'fa-check'),
  new Menu(46993, 4699, 'گزارش دستور هزينه قانوني يک قرارداد', 'fa-check'),
  new Menu(46994, 4699, 'گزارش هزينه قانوني تأمين شده از محل بدهکاران موقت/ هزينه هاي بانک ', 'fa-check'),
  new Menu(46995, 4699, 'گزارش چاپ مجدد دستور هزينه قانوني  ', 'fa-check'),

];
